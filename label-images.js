/* Local label pictures live in IndexedDB, separately from lightweight app state. */
(function(host){
 'use strict';
 const DB='family-table-label-pictures-v1',STORE='pictures';
 let dbPromise;
 function db(){return dbPromise||(dbPromise=new Promise((resolve,reject)=>{const r=indexedDB.open(DB,1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE,{keyPath:'id'});r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(new Error('图片存储暂时不可用，请检查浏览器空间。'));}));}
 async function operation(mode,run){const d=await db();return new Promise((resolve,reject)=>{const t=d.transaction(STORE,mode),request=run(t.objectStore(STORE));let value;t.oncomplete=()=>resolve(value);t.onerror=()=>reject(new Error('图片保存失败，营养资料未被覆盖。'));if(request)request.onsuccess=()=>value=request.result;});}
 const id=()=>`label-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`;
 async function compact(file){
  if(file.size>12*1024*1024)throw new Error('图片请控制在12MB以内。');
  const url=URL.createObjectURL(file),img=new Image();
  try{await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(new Error('图片无法读取，请使用JPG、PNG或WebP。'));img.src=url;});const scale=Math.min(1,1400/Math.max(img.naturalWidth,img.naturalHeight));const c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.naturalWidth*scale));c.height=Math.max(1,Math.round(img.naturalHeight*scale));c.getContext('2d').drawImage(img,0,0,c.width,c.height);return await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(new Error('图片处理失败。')),'image/jpeg',.82));}finally{URL.revokeObjectURL(url);}
 }
 async function put(file){const blob=await compact(file),entry={id:id(),name:String(file.name||'标签图片').slice(0,150),blob,createdAt:new Date().toISOString()};await operation('readwrite',s=>s.put(entry));return {id:entry.id,name:entry.name,createdAt:entry.createdAt};}
 const get=key=>operation('readonly',s=>s.get(key));
 async function objectURL(key){const entry=await get(key);return entry?.blob?URL.createObjectURL(entry.blob):null;}
 const dataURL=blob=>new Promise((resolve,reject)=>{const f=new FileReader();f.onload=()=>resolve(f.result);f.onerror=reject;f.readAsDataURL(blob);});
 async function exportReferenced(houses){const ids=new Set();for(const space of Object.values(houses||{}))for(const f of Object.values(space.customFoods||{}))for(const ref of f.labelPhotos||[])if(ref?.id)ids.add(ref.id);if(ids.size>10000)throw new Error('标签原图超过备份容量，请分批管理。');const out=[];for(const key of ids){const entry=await get(key);if(!entry?.blob)throw new Error('有已引用的标签原图不在本机，请先恢复含原图的备份或重新上传。');out.push({id:entry.id,name:entry.name,createdAt:entry.createdAt,dataURL:await dataURL(entry.blob)});}return out;}
 async function importAll(rows){
  if(rows===undefined)return;if(!Array.isArray(rows)||rows.length>10000)throw new Error('标签图片备份格式不正确。');
  const entries=[];for(const row of rows){if(!row||!/^label-[a-z0-9-]+$/.test(row.id)||typeof row.dataURL!=='string'||row.dataURL.length>3000000||!/^data:image\/(?:jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(row.dataURL))throw new Error('标签图片备份格式不正确。');const parts=row.dataURL.split(','),bytes=Uint8Array.from(atob(parts[1]),c=>c.charCodeAt(0));entries.push({id:row.id,name:String(row.name||'标签图片').slice(0,150),createdAt:row.createdAt,blob:new Blob([bytes],{type:parts[0].slice(5).split(';')[0]})});}
  for(const entry of entries)await operation('readwrite',s=>s.put(entry));
 }
 host.LabelPhotos=Object.freeze({put,get,objectURL,exportReferenced,importAll});
})(window);
