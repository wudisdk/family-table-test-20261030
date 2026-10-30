/* Personal recipe preferences. Local browser storage is handled by the app. */
(function(host){
 'use strict';
 const h=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const btn=(label,attrs,cls='ghost small')=>`<button type="button" class="${cls}" ${attrs}>${label}</button>`;
 const ratings=[[0,'未评价'],[1,'1分 · 不喜欢'],[2,'2分 · 不太喜欢'],[3,'3分 · 一般'],[4,'4分 · 喜欢'],[5,'5分 · 很喜欢']];
 const list=v=>Array.isArray(v)?v.filter(x=>typeof x==='string'):[];
 const split=text=>[...new Set(String(text||'').slice(0,150).split(/[、,，;；\n]+/).map(s=>s.trim()).filter(Boolean))].slice(0,20);
 function create(api){
  let openedId=null;
  const person=()=>api.getPerson();
  const recipes=()=>api.getRecipes();
  const members=()=>api.getMembers();
  const recipe=id=>recipes().find(r=>r.id===id);
  function ensure(p){
   if(!p.recipeRatings||typeof p.recipeRatings!=='object'||Array.isArray(p.recipeRatings))p.recipeRatings={};
   p.priorityRecipes=[...new Set(list(p.priorityRecipes))];p.temporaryAvoid=[...new Set(list(p.temporaryAvoid))];
   p.foodLikes=list(p.foodLikes);p.foodDislikes=list(p.foodDislikes);
  }
  function controls(r){
   const p=person();if(!p||!r)return '';
   const rating=Number(p.recipeRatings?.[r.id]);
   const text=(rating>=1&&rating<=5?`${h(p.name)} ${rating}/5分`:`${h(p.name)}未评`)+(list(p.priorityRecipes).includes(r.id)?' · 优先':'')+(list(p.temporaryAvoid).includes(r.id)?' · 最近不排':'');
   return `<div class="row preference-control"><span class="tiny">${text}</span>${btn('喜爱度',`data-pref-open="${h(r.id)}" aria-label="评价${h(r.name)}的喜爱度"`)}</div>`;
  }
  function panel(){
   const p=person();if(!p)return '';
   const priorities=list(p.priorityRecipes);
   return `<section class="panel stack"><div><h2>${h(p.name)} · 喜好与优先顺序</h2><p class="tiny">在菜谱卡片点“喜爱度”，可分别给每位家人打分。喜好只影响推荐顺序，不是营养得分。</p></div><label class="field">喜欢的食材<input class="input" id="pref-food-likes" value="${h(list(p.foodLikes).join('、'))}" maxlength="150" placeholder="例如：菠菜、牛肉"></label><label class="field">不喜欢的食材<input class="input" id="pref-food-dislikes" value="${h(list(p.foodDislikes).join('、'))}" maxlength="150" placeholder="用顿号分开，可随季节调整"></label>${btn('保存食材喜好','data-pref-save-foods','small')}<div><h3>勾选优先安排的菜</h3><p class="tiny">上面的菜更优先；“最近不想吃”会暂停自动安排，手动仍可选择。</p></div>${priorities.map((id,index)=>`<div class="check-row"><span>${index+1}. ${h(recipe(id)?.name||'已保留的自家菜')}</span><div class="wrap">${btn('上移',`data-pref-up="${h(id)}" aria-label="上移${h(recipe(id)?.name||'菜谱')}" ${index===0?'disabled':''}`)}${btn('下移',`data-pref-down="${h(id)}" aria-label="下移${h(recipe(id)?.name||'菜谱')}" ${index===priorities.length-1?'disabled':''}`)}${btn('取消',`data-pref-remove="${h(id)}"`)}</div></div>`).join('')||'<p class="tiny">还没有优先菜。在菜谱的喜爱度窗口勾选即可。</p>'}${list(p.temporaryAvoid).length?`<p class="tiny">最近暂不安排：${list(p.temporaryAvoid).map(id=>h(recipe(id)?.name||'自家菜')).join('、')}。可在对应菜谱的喜爱度中取消。</p>`:''}</section>`;
  }
  function open(id){
   const r=recipe(id);if(!r)return;
   openedId=id;
   api.showSheet(r.name+' · 每个人的喜爱度',`<p class="tiny">评分、优先顺序和最近不想吃都可随时调整。自动排餐还会兼顾备餐条件、营养和轮换。</p>${members().map(p=>{const rating=Number(p.recipeRatings?.[id])||0;return `<section class="panel stack"><div class="row"><strong>${h(p.name)}</strong><select class="select" data-pref-member="${h(p.id)}" aria-label="${h(p.name)}的喜爱度">${ratings.map(([v,t])=>`<option value="${v}" ${rating===v?'selected':''}>${t}</option>`).join('')}</select></div><div class="wrap"><label><input type="checkbox" data-pref-priority="${h(p.id)}" ${list(p.priorityRecipes).includes(id)?'checked':''}>优先安排</label><label><input type="checkbox" data-pref-avoid="${h(p.id)}" ${list(p.temporaryAvoid).includes(id)?'checked':''}>最近不想吃</label></div></section>`;}).join('')}`,btn('保存家人喜好','data-pref-save','primary'));
  }
  function click(b){
   if(b.hasAttribute('data-pref-open')){open(b.dataset.prefOpen);return true;}
   if(b.hasAttribute('data-pref-save')){
    if(!openedId)return true;
    const id=openedId;
    for(const p of members()){
     const select=Array.from(host.document.querySelectorAll('[data-pref-member]')).find(el=>el.dataset.prefMember===p.id);
     if(!select)continue;ensure(p);
     const value=Number(select.value);if(Number.isInteger(value)&&value>=1&&value<=5)p.recipeRatings[id]=value;else delete p.recipeRatings[id];
     const checked=(attribute)=>Array.from(host.document.querySelectorAll(`[${attribute}]`)).some(el=>el.getAttribute(attribute)===p.id&&el.checked);
     if(checked('data-pref-priority')){if(!p.priorityRecipes.includes(id))p.priorityRecipes.push(id);}else p.priorityRecipes=p.priorityRecipes.filter(x=>x!==id);
     if(checked('data-pref-avoid')){if(!p.temporaryAvoid.includes(id))p.temporaryAvoid.push(id);}else p.temporaryAvoid=p.temporaryAvoid.filter(x=>x!==id);
    }
    api.save();api.closeSheet();openedId=null;api.render();api.notify('喜好已保存，菜谱排序和下次排餐会一起参考。');return true;
   }
   if(b.hasAttribute('data-pref-save-foods')){
    const p=person();if(!p)return true;ensure(p);
    p.foodLikes=split(host.document.getElementById('pref-food-likes')?.value);p.foodDislikes=split(host.document.getElementById('pref-food-dislikes')?.value);
    api.save();api.render();api.notify('食材喜好已保存，可以随时调整。');return true;
   }
   const key=['prefUp','prefDown','prefRemove'].find(k=>Object.hasOwn(b.dataset,k));
   if(key){const p=person();if(!p)return true;ensure(p);const id=b.dataset[key],at=p.priorityRecipes.indexOf(id);if(at<0)return true;
    if(key==='prefRemove')p.priorityRecipes.splice(at,1);else{const target=at+(key==='prefUp'?-1:1);if(target>=0&&target<p.priorityRecipes.length)[p.priorityRecipes[at],p.priorityRecipes[target]]=[p.priorityRecipes[target],p.priorityRecipes[at]];}
    api.save();api.render();return true;
   }
   return false;
  }
  function change(){return false;}
  return Object.freeze({controls,panel,click,change});
 }
 host.PreferenceUI=Object.freeze({create});
})(window);
