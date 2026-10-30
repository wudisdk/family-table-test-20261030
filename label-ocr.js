/* Local-only OCR. No label image or text is sent to a remote service. */
(function(host){
 'use strict';
 const scriptBase=new URL('.',document.currentScript?.src||location.href);
 const assetBase=new URL('vendor/label-ocr/',scriptBase);
 let loader=null,worker=null,busy=false,generation=0,activeCancel=null;
 const abortError=()=>Object.assign(new Error('已取消图片识别。'),{name:'AbortError'});
 function loadLibrary(){
  if(host.Tesseract?.createWorker)return Promise.resolve(host.Tesseract);
  if(!loader)loader=new Promise((resolve,reject)=>{
   const script=document.createElement('script');script.src=new URL('tesseract.min.js',assetBase).href;
   script.onload=()=>host.Tesseract?.createWorker?resolve(host.Tesseract):reject(new Error('本地文字识别组件未能载入。'));
   script.onerror=()=>{loader=null;script.remove();reject(new Error('本地文字识别组件未能载入，请刷新后重试。'));};
   document.head.append(script);
  });
  return loader;
 }
 async function imageCanvas(file){
  if(!(file instanceof Blob)||!file.size)throw new Error('先选择一张清晰的标签图片。');
  if(file.size>12*1024*1024)throw new Error('图片超过12MB，请先截取标签区域。');
  if(file.type&&!/^image\/(jpeg|png|webp|bmp)$/i.test(file.type))throw new Error('请上传JPG、PNG或WebP图片；HEIC可先转成JPG。');
  let image;
  try{image=await createImageBitmap(file);}catch{
   const url=URL.createObjectURL(file);
   try{image=await new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>reject(new Error('图片无法读取，请换成清晰的JPG或PNG。'));img.src=url;});}finally{URL.revokeObjectURL(url);}
  }
  const w=image.width,h=image.height;
  if(!w||!h){image.close?.();throw new Error('图片尺寸无法读取。');}
  const ratio=2000/Math.max(w,h);
  const canvas=document.createElement('canvas');canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);
  const ctx=canvas.getContext('2d',{alpha:false});ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(image,0,0,canvas.width,canvas.height);image.close?.();
  return canvas;
 }
 async function recognize(file,{onProgress,signal}={}){
  if(busy)throw new Error('正在识别上一张图片，请稍候或取消。');
  busy=true;const token=++generation;let localWorker=null,cancelThis,lastProgress=0;
  const interrupted=new Promise((resolve,reject)=>{cancelThis=()=>reject(abortError());activeCancel=cancelThis;});
  const wait=promise=>Promise.race([promise,interrupted]);
  const canceled=()=>token!==generation||signal?.aborted;
  const check=()=>{if(canceled())throw abortError();};
  const progress=(value,status)=>{lastProgress=Math.max(lastProgress,Math.max(0,Math.min(1,value)));if(!canceled()&&typeof onProgress==='function')onProgress(lastProgress,status);};
  const onAbort=()=>cancel();signal?.addEventListener('abort',onAbort,{once:true});
  try{
   check();progress(.01,'准备图片');const canvas=await wait(imageCanvas(file));check();
   progress(.03,'加载本地识别组件');const Tesseract=await wait(loadLibrary());check();
   localWorker=await wait(Tesseract.createWorker(['chi_sim','eng'],1,{
    workerPath:new URL('worker.min.js',assetBase).href,corePath:assetBase.href.replace(/\/$/,''),langPath:assetBase.href.replace(/\/$/,''),gzip:true,workerBlobURL:false,cacheMethod:'write',
    logger:event=>{const value=Number(event.progress)||0;progress(event.status==='recognizing text'?.35+value*.6:.04+value*.28,event.status==='recognizing text'?'识别标签文字':'加载本地识别模型');}
   }).then(async created=>{if(canceled()){await created.terminate();throw abortError();}worker=created;return created;}));
   check();await worker.setParameters({preserve_interword_spaces:'1',tessedit_pageseg_mode:'11'});check();
   const result=await wait(worker.recognize(canvas,{}, {text:true,blocks:true}));check();
   let tableText='',numericText='';
   const lines=(result.data.blocks||[]).flatMap(b=>(b.paragraphs||[]).flatMap(p=>p.lines||[]));
   const anchors=lines.filter(w=>/能量|蛋白质|脂肪|碳水/.test(String(w.text||'').replace(/\s/g,''))&&w.bbox);
   if(anchors.length>=2){
    const sorted=anchors.slice().sort((a,b)=>a.bbox.y0-b.bbox.y0),gaps=sorted.slice(1).map((w,i)=>w.bbox.y0-sorted[i].bbox.y0).filter(g=>g>12).sort((a,b)=>a-b);
    const rowGap=gaps[Math.floor(gaps.length/2)]||55;
    const x=Math.max(0,Math.min(...anchors.map(w=>w.bbox.x0))-35),y=Math.max(0,sorted[0].bbox.y0-rowGap*(/能量|蛋白质/.test(sorted[0].text)?1.2:2.8));
    const width=canvas.width-x,height=Math.min(canvas.height-y,sorted.at(-1).bbox.y1+rowGap*2-y);
    if(width>120&&height>100&&height<canvas.height*.8){
     const crop=document.createElement('canvas'),scale=1800/Math.max(width,height);crop.width=Math.round(width*scale);crop.height=Math.round(height*scale);crop.getContext('2d').drawImage(canvas,x,y,width,height,0,0,crop.width,crop.height);
     progress(.88,'核对营养表数字');await worker.setParameters({tessedit_pageseg_mode:'6'});const table=await wait(worker.recognize(crop,{}, {text:true}));check();tableText=String(table.data.text||'').trim();
    }
   }
   progress(1,'识别完成，请核对');
   const originalText=String(result.data.text||'').trim();
   return {text:tableText?'【营养表局部识别】\n'+tableText+'\n\n【完整标签识别】\n'+originalText:originalText,tableText,originalText,requiresReview:true,engine:'Tesseract.js 6.0.1 · 中文/英文 · 本机识别',confidence:Number.isFinite(result.data.confidence)?result.data.confidence:null};
  }catch(error){if(canceled()||error?.name==='AbortError')throw abortError();throw new Error(error?.message||'图片识别失败，请截取营养表和配料表后重试。');}
  finally{signal?.removeEventListener('abort',onAbort);if(activeCancel===cancelThis)activeCancel=null;if(worker===localWorker)worker=null;if(localWorker)try{await localWorker.terminate();}catch{}busy=false;}
 }
 async function cancel(){generation++;const reject=activeCancel;activeCancel=null;if(reject)reject();const previous=worker;worker=null;if(previous)try{await previous.terminate();}catch{}}
 host.LabelOCR=Object.freeze({recognize,cancel,terminate:cancel,available:typeof WebAssembly==='object'&&typeof Worker==='function',maxBytes:12*1024*1024});
})(window);
