/* Picture-first label intake; no account, cloud upload, or hidden nutrition guesses. */
(function(host){
 'use strict';
 const h=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const keys={kcal:['能量','千卡'],protein:['蛋白质','g'],fat:['脂肪','g'],carbs:['碳水化合物','g'],sodium:['钠','mg'],fiber:['膳食纤维','g'],calcium:['钙','mg'],saturatedFat:['饱和脂肪','g']};
 const finite=v=>typeof v==='number'&&Number.isFinite(v)&&v>=0;
 const uid=p=>`${p}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
 const button=(label,attrs,cls='ghost small')=>`<button type="button" class="${cls}" ${attrs}>${label}</button>`;
 const quantity=(v,u)=>Array.isArray(v)&&v.every(finite)?v.map(n=>Math.round(n*10)/10).join('—')+u:finite(v)?Math.round(v*10)/10+u:null;
 const day=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
 function create(api){
  let pending=null,busy=false,token=0,previewURL=null;
  const food=()=>api.getEditingFood(),row=()=>api.getEditingRow();
  function badge(f){const photos=f?.labelPhotos||[];return photos.length?`<span class="badge label-badge">标签图已提供 ${photos.length}张${photos.some(p=>p.hasNutrition)?' · 营养已录':''}${photos.some(p=>p.hasIngredients)?' · 配料已录':''}</span>`:'<span class="tiny">待拍标签 · 拍一次，以后按标签算</span>';}
  function assessment(f){if(!f||!host.FoodLabels)return '';const a=host.FoodLabels.assess(f);return `<section class="notice label-assessment"><h3>${h(a.headline||'食物标签评价')}</h3>${(a.notes||[]).map(t=>`<p class="tiny">${h(t)}</p>`).join('')}<p><strong>安排频次：</strong>${h(a.frequency||'成分未齐，暂不给固定频次。')}</p><details><summary>家里每个人怎么吃</summary>${(api.getHouse().members||[]).map(p=>{const v=host.FoodLabels.servings(f,p);return `<div class="check-row"><div><strong>${h(p.name)} · ${h(v.label||'待确认')}</strong><p class="tiny">${h(v.reason||'')}</p>${v.nutrients?`<p class="tiny">${quantity(v.nutrients.sodium,'mg')?'该份钠约'+quantity(v.nutrients.sodium,'mg')+'；':''}${quantity(v.nutrients.protein,'g')?'蛋白质约'+quantity(v.nutrients.protein,'g'):''}</p>`:''}</div></div>`;}).join('')}<p class="tiny">这是起始上菜与轮换参考，需合计当天其他食物；标签未说明生熟/加热损耗时按销售状态称重，额外用油、酱汁另计。</p></details>${(f.allergens||[]).length?`<p class="tiny"><strong>过敏提示：</strong>${f.allergens.map(h).join('；')}。未完整识别不代表不含其他过敏原。</p>`:''}${(a.sources||[]).length?`<details><summary>评价依据</summary>${a.sources.map(s=>typeof s==='string'?`<p class="tiny">${h(s)}</p>`:`<p class="tiny"><a href="${h(s.url)}" target="_blank" rel="noreferrer">${h(s.title)}</a></p>`).join('')}</details>`:''}</section>`;}
  function editorPanel(f){return `<section class="label-upload panel stack"><div class="row"><div><h3>拍标签，自动读入</h3><p class="tiny">营养成分表与配料表可以分两张拍。图片在本机识别。</p></div>${badge(f)}</div><div class="wrap">${button('上传标签图片','data-pantry-pick-label','primary')}${button('手机拍一张','data-pantry-camera-label')}${f?.labelPhotos?.length?button('查看已传图片','data-pantry-view-label'):''}</div><input type="file" id="pantry-label-file" accept="image/jpeg,image/png,image/webp" hidden><input type="file" id="pantry-label-camera" accept="image/*" capture="environment" hidden><p class="tiny">尽量拍清“每100g/100mL”、数字、单位和完整配料。识别后只需核对，不用逐项抄营养值。</p></section>${assessment(f)}`;}
  async function showPictures(f){if(!f?.labelPhotos?.length)return;const images=[];for(const ref of f.labelPhotos){const url=await host.LabelPhotos.objectURL(ref.id);if(url)images.push(`<figure><img src="${h(url)}" alt="${h(ref.name||'原标签图片')}" style="max-width:100%;height:auto"><figcaption class="tiny">${h(ref.name||'标签图片')}</figcaption></figure>`);}api.showSheet('已上传的标签图片',images.join('')||'<p>原图暂时不在当前浏览器。请恢复含图片的备份，或重新上传。</p>');}
  async function recognize(file){
   if(!file)return;const owner=api.getHouse(),target=row()?.id||null,previousFood=food(),draftName=document.getElementById('pantry-name')?.value.trim()||'',round=++token;busy=true;
   try{
    const picture=await host.LabelPhotos.put(file);if(round!==token)return;
    if(previewURL)URL.revokeObjectURL(previewURL);previewURL=await host.LabelPhotos.objectURL(picture.id);
    api.showSheet('正在读标签',`<img src="${h(previewURL)}" alt="本次标签图片" style="max-width:100%;max-height:240px;object-fit:contain"><progress id="label-progress" max="1" value="0" style="width:100%"></progress><p id="label-progress-text" role="status">正在准备本机识别，首次可能稍久。</p><p class="tiny">图片不发送到外部服务。可以取消后重新拍清楚些。</p>`,button('取消识别','data-pantry-cancel-scan'));
    if(!host.LabelOCR?.recognize)throw new Error('本机识别组件暂未载入，请刷新后再试。');
    const result=await host.LabelOCR.recognize(file,{onProgress:p=>{if(round!==token)return;const progress=document.getElementById('label-progress'),text=document.getElementById('label-progress-text');const ratio=typeof p==='number'?p:p.progress??p.value??0;if(progress)progress.value=Math.min(1,Math.max(0,ratio));if(text)text.textContent=typeof p==='object'?(p.message||p.status||'正在识别标签…'):'正在识别标签…';}});
    if(round!==token||api.getHouse()!==owner)return;
    const parsed=host.FoodLabels.parse(result.text);pending={owner,target,previousFood,picture,parsed,result,draftName};busy=false;review();
   }catch(error){if(round!==token)return;busy=false;api.showSheet('这张标签还没读好',`<p>${h(error.message||'识别失败，请换清晰图片再试。')}</p><p class="tiny">未覆盖原有食材与营养资料。</p>`,button('回到食材再传','data-pantry-return-editor','primary'));}
  }
  function review(){
   if(!pending)return;const d=pending.parsed,old=pending.previousFood,name=d.name||pending.draftName||old?.name||'';
   api.showSheet('核对识别结果，再入库',`<img src="${h(previewURL)}" alt="对照原标签图片" style="width:100%;max-height:280px;object-fit:contain"><label class="field">商品名称<input class="input" id="label-product-name" maxlength="90" value="${h(name)}" placeholder="识别不清时只需补商品名"></label><div class="form-grid"><label class="field">原标签基准<select class="select" id="label-basis"><option value="" ${!d.basisKnown?'selected':''}>请核对标签基准</option><option value="g" ${d.basisKnown&&d.unit==='g'?'selected':''}>每100g</option><option value="mL" ${d.basisKnown&&d.unit==='mL'?'selected':''}>每100mL</option></select></label><p class="tiny">${h(d.basisText||'基准未识别清楚；不能把每份直接当每100g。')}</p></div>${d.warnings?.length?`<div class="notice tiny">${d.warnings.map(h).join('<br>')}</div>`:''}<div class="label-nutrition-preview">${Object.entries(keys).filter(([k])=>finite(d.nutrients[k])).map(([k,[label,unit]])=>`<div class="check-row"><span>${label}</span><strong>${Math.round(d.nutrients[k]*100)/100}${unit}</strong></div>`).join('')||'<p class="tiny">未完整读到营养成分表；可以先保存配料图片，稍后补拍营养表。</p>'}</div><details><summary>数字不对？修正这次识别</summary><div class="form-grid">${Object.entries(keys).map(([k,[label,unit]])=>`<label class="field">${label}（${unit}）<input class="input" id="label-n-${k}" type="number" min="0" step="any" value="${finite(d.nutrients[k])?d.nutrients[k]:''}" placeholder="未标注保持空白"></label>`).join('')}</div></details><details ${d.ingredientsText?'':'open'}><summary>配料表与过敏提示</summary><textarea class="input" id="label-ingredients" rows="4" maxlength="4000" placeholder="识别不清可重新拍；不要求手工抄写">${h(d.ingredientsText||'')}</textarea><label class="field">含有 / 共线过敏原（可核对修正）<input class="input" id="label-allergens" value="${h((d.allergens||[]).join('；')||old?.allergens?.join('；')||'')}" placeholder="未完整识别时请看原包装"></label><p class="tiny">${(d.allergens||[]).map(h).join('；')||'过敏原尚未完整识别，请看原包装。'}</p></details><details><summary>查看识别原文</summary><pre style="white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px">${h(d.rawText||pending.result.text)}</pre></details><p class="tiny">没有出现在标签上的糖、嘌呤、饱和脂肪等保持未知。保存会自动分类，并保留历史食材版本。</p>`,button('核对无误，保存标签','data-pantry-apply-label','primary')+button('重新拍 / 上传','data-pantry-return-editor'));
  }
  function upgradeFutureRecipes(space,oldId,newId){
   if(!oldId||oldId===newId)return;const replacements={};for(const r of space.customRecipes.slice())if(!r.retired&&r.ingredients.some(i=>i.foodId===oldId)){const next={...r,id:uid('recipe-label'),ingredients:r.ingredients.map(i=>({...i,foodId:i.foodId===oldId?newId:i.foodId}))};r.retired=true;space.customRecipes.push(next);replacements[r.id]=next.id;}
   for(const [key,m] of Object.entries(space.plans))if(key.slice(0,10)>=day())for(const [old,next] of Object.entries(replacements)){m.recipeIds=m.recipeIds.map(id=>id===old?next:id);if(m.dishPeople[old]){m.dishPeople[next]=m.dishPeople[old];delete m.dishPeople[old];}}
   for(const p of space.members)for(const [old,next] of Object.entries(replacements)){if(p.recipeRatings?.[old])p.recipeRatings[next]=p.recipeRatings[old];if(p.priorityRecipes)p.priorityRecipes=p.priorityRecipes.map(id=>id===old?next:id);}
  }
  function apply(){
   if(!pending||api.getHouse()!==pending.owner){api.notify('家庭已切换，请回原家庭重新核对。');return;}
   const name=document.getElementById('label-product-name').value.trim(),unit=document.getElementById('label-basis').value,values={};
   if(!name){api.notify('请补一下商品名。');return;}
   for(const k of Object.keys(keys)){const raw=document.getElementById('label-n-'+k).value.trim(),n=Number(raw);if(raw&&(!finite(n)||n>(['sodium','calcium'].includes(k)?100000:k==='kcal'?4000:100))){api.notify('有数字超出每100g/100mL可用范围，请对照图片核对。');return;}values[k]=raw===''?null:n;}
   if(Object.values(values).some(finite)&&!unit){api.notify('请先核对是每100g还是每100mL，不能混用每份。');return;}
   if([values.kcal,values.protein,values.fat,values.carbs].every(finite)){const estimated=values.protein*4+values.fat*9+values.carbs*4;if(estimated>Math.max(80,values.kcal*1.8)||estimated<values.kcal*.35){api.notify('能量与蛋白、脂肪、碳水差异明显，请检查小数点和能量单位后再保存。');return;}}
   const space=pending.owner,r=pending.target?space.pantry.find(r=>r.id===pending.target):null,old=pending.previousFood,ingredientsText=document.getElementById('label-ingredients').value.trim().slice(0,4000),sameProduct=!!r,snapshot=JSON.parse(JSON.stringify(space));
   const hasNumbers=Object.values(values).some(finite);if(!hasNumbers&&sameProduct)Object.assign(values,old.nutrients);
   const photos=[...(old?.labelPhotos||[]),{...pending.picture,hasNutrition:['kcal','protein','fat','carbs','sodium'].every(k=>finite(values[k]))&&hasNumbers,hasIngredients:!!ingredientsText,engine:pending.result.engine||'本机OCR'}];
   if(photos.length>100){api.notify('这款食材的标签图已达100张，请先导出备份后整理版本。');return;}
   const allergenField=document.getElementById('label-allergens'),allergens=allergenField?allergenField.value.trim().split(/[；;\n]+/).map(s=>s.trim()).filter(Boolean):(pending.parsed.allergens||old?.allergens||[]);
   const f={...(old||{}),id:uid('custom-label-food'),name,group:host.PantryUI.classify(name),unit:unit||old?.unit||'g',nutrients:values,ingredientsText:ingredientsText||old?.ingredientsText||'',allergens,labelPhotos:photos,labelConfirmedAt:new Date().toISOString(),verified:false,verifiedStatus:'photo_confirmed',source:{label:'用户上传并核对的包装标签',url:'',id:pending.picture.id,state:'销售标签每100'+(unit||old?.unit||'g')+'；额外烹调用油和损耗另计'},sourceRefs:[]};
   if(!f.ingredientsText&&pending.parsed.ingredientsText)f.ingredientsText=pending.parsed.ingredientsText;
   space.customFoods[f.id]=f;api.getFoods()[f.id]=f;
   if(r){Object.assign(r,{name,group:f.group,foodId:f.id});upgradeFutureRecipes(space,old?.id,f.id);}else space.pantry.push({id:uid('custom-pantry'),name,group:f.group,foodId:f.id,status:'available',note:'图片标签已提供；包装规格按实际核对'});
   const assessment=host.FoodLabels.assess(f);f.healthNote=assessment.notes?.join('；')||assessment.headline;f.portionNote=assessment.frequency;if(api.save()===false){Object.assign(space,snapshot);delete api.getFoods()[f.id];api.notify('本机空间不足，标签数值没有覆盖；请先导出备份。');return;}pending=null;api.closeSheet();api.render();api.notify('标签与图片已保存，分类和食用参考已更新；过去记录保留。');
  }
  function cancel(){token++;busy=false;host.LabelOCR?.cancel?.();pending=null;}
  function click(b){
   if(b.dataset.pantryPickFor){api.openEditor(b.dataset.pantryPickFor);document.getElementById('pantry-label-file').click();return true;}
   if(b.hasAttribute('data-pantry-scan-new')){api.openEditor();document.getElementById('pantry-label-file').click();return true;}
   if(b.hasAttribute('data-pantry-pick-label')){document.getElementById('pantry-label-file').click();return true;}
   if(b.hasAttribute('data-pantry-camera-label')){document.getElementById('pantry-label-camera').click();return true;}
   if(b.hasAttribute('data-pantry-view-label')){showPictures(food()).catch(()=>api.notify('标签图片暂时无法读取。'));return true;}
   if(b.hasAttribute('data-pantry-apply-label')){apply();return true;}
   if(b.hasAttribute('data-pantry-return-editor')){const id=pending?.target||row()?.id||null;cancel();api.openEditor(id);return true;}
   if(b.hasAttribute('data-pantry-cancel-scan')||b.hasAttribute('data-close')&&busy){cancel();api.closeSheet();return true;}
   return false;
  }
  function change(el){if(['pantry-label-file','pantry-label-camera'].includes(el.id)){recognize(el.files?.[0]);return true;}return false;}
  return Object.freeze({badge,editorPanel,click,change});
 }
 host.PantryScan=Object.freeze({create});
})(window);
