(function(host){
 'use strict';
 const VERSION='20261030-personal6',MEALS=['breakfast','lunch','dinner','snack'];
 const data=()=>host.MealData||{foods:{},recipes:[]};
 const cleanText=text=>String(text||'').replace(/[\s（）()＋+·，,、\/]/g,'').toLowerCase();
 const aliases=text=>cleanText(text).replace(/蒜蓉炒米苋|米苋|苋菜/g,'苋').replace(/香干|豆干/g,'豆干').replace(/牛腩|瘦牛肉/g,'牛肉').replace(/油麦菜|小青菜|上海青/g,'青菜');
 const recipeText=r=>aliases([r.name,...(r.ingredients||[]).map(i=>data().foods[i.foodId]?.name||'')].join(' '));
 const strings=a=>Array.isArray(a)?a.filter(x=>typeof x==='string'):[];
 const byId=(recipes,id)=>recipes.find(r=>r.id===id);
 function classify(name,ingredients=[]){
  const text=String(name||'').replace(/\s/g,'');
  const match=data().recipes.find(r=>r.name.replace(/[（(].*?[）)]/g,'')===text||r.name===text);
  if(match)return match.category;
  if(/酸奶.*(?:碗|杯)|燕麦.*(?:杯|粥)|三明治|吐司.*蛋|早餐/.test(text))return 'breakfast';
  if(/饭|面条|意面|肉酱面|拌面|汤面|米粉|米线|贝果|面包|馒头|包子|饺|粥|玉米|红薯|紫薯|土豆|山药|南瓜/.test(text)&&!/肉.*(?:炖|烧).*土豆/.test(text))return 'grain';
  if(/鳝|鱼|虾|鱿|蛤|贝|肉|牛|猪|鸡|鸭|蛋|豆腐|豆干|香干|排骨|豆浆|牛奶/.test(text))return 'protein';
  if(/菜|苋|菇|菌|西兰花|芦笋|萝卜|茄子|黄瓜|番茄|彩椒|秋葵|冬瓜|洋葱/.test(text))return 'veg';
  if(/水果|苹果|香蕉|莓|坚果|核桃|酸奶|点心|蛋糕/.test(text))return 'snack';
  const gs=ingredients.map(i=>data().foods[i.foodId]?.group);
  return gs.includes('protein')?'protein':gs.includes('grain')?'grain':gs.includes('veg')?'veg':'snack';
 }
 function recipePreference(r,member={}){
  if(!r)return 0;
  if(strings(member.temporaryAvoid).includes(r.id))return -10000;
  const text=recipeText(r),rating=Number(member.recipeRatings?.[r.id]);
  let value=Number.isFinite(rating)&&rating>=1&&rating<=5?(rating-3)*6:0;
  for(const t of strings(member.foodLikes))if(aliases(t)&&text.includes(aliases(t)))value+=5;
  for(const t of strings(member.foodDislikes))if(aliases(t)&&text.includes(aliases(t)))value-=20;
  const order=strings(member.priorityRecipes),index=order.indexOf(r.id);
  if(index>=0)value+=30+(order.length-index)*25;
  return Math.round(value*100)/100;
 }
 function preferenceSummary(r,member={}){
  if(strings(member.temporaryAvoid).includes(r.id))return '最近不安排';
  const text=recipeText(r),likes=strings(member.foodLikes).filter(t=>aliases(t)&&text.includes(aliases(t))),dislikes=strings(member.foodDislikes).filter(t=>aliases(t)&&text.includes(aliases(t))),rating=Number(member.recipeRatings?.[r.id]);
  return [strings(member.priorityRecipes).includes(r.id)?'已优先安排':'',rating>=1&&rating<=5?'喜爱度 '+rating+'/5':'',likes.length?'喜欢 '+likes.join('、'):'',dislikes.length?'少安排 '+dislikes.join('、'):''].filter(Boolean).join(' · ')||'还没评价';
 }
 function rankRecipes(recipes,members=[]){
  const people=Array.isArray(members)?members:[members];
  return recipes.map((r,i)=>({r,i,value:people.length?people.reduce((n,p)=>n+recipePreference(r,p),0)/people.length:0})).sort((a,b)=>b.value-a.value||a.i-b.i).map(x=>x.r);
 }
 const componentPrep={rice:'米饭做熟后小份冷冻，食用时彻底复热。',corn:'玉米蒸熟分装冷冻。',sweet:'红薯蒸熟后小份冷冻。',pepperchicken:'鸡丁、彩椒和洋葱按餐生冻分装；当天彻底炒熟，生冻包不能当熟菜。',tomatotofu:'番茄底可熟后分装冷冻；豆腐冷冻后口感会变，介意时当天加鲜豆腐。','pork-egg-steamed':'肉馅先按餐生冻，前夜冷藏解冻；鸡蛋当天加，肉饼和鸡蛋都要蒸熟。','tomato-beef-stew':'牛腩一次炖熟，分小份尽快冷却后冷冻；食用时彻底复热。','broccoli-garlic':'西兰花焯后沥干、小份冷冻，蒜蓉当天加并炒熟。',okra:'秋葵焯后沥干分装冷冻，食用时再彻底加热。',pepperonion:'彩椒洋葱切好按餐生冻，食用当天炒熟。','guide-093':'熟鹰嘴豆按餐分装冷冻；番茄当天切好，与豆一起加热成温拌菜。','guide-1':'鸡蛋当天煮熟；这餐主食和蔬菜组件可提前冷冻。'};
 function prepSuitability(r){
  if(!r)return {lunch:false,freezeComponent:false,note:''};
  const frozen=['raw-frozen','cooked-frozen','blanched-frozen'].includes(r.prep?.mode);
  return {lunch:frozen||Object.hasOwn(componentPrep,r.id),freezeComponent:frozen||Object.hasOwn(componentPrep,r.id)&&r.id!=='guide-1',note:componentPrep[r.id]||(frozen?'按菜谱的生冻、焯冻或熟冻方式分装，食用时按原料状态彻底烹调或复热。':'晚餐现做，或按菜谱短时冷藏准备。')};
 }
 function ingredientKind(id){
  const f=data().foods[id],name=f?.name||'';
  if(f?.group!=='protein')return null;
  if(/牛|猪|鸡肉|鸡胸|鸡腿|鸭|羊|禽|排骨/.test(name))return 'meatG';
  if(/鱼|虾|鳝|鱿|蛤|贝/.test(name)&&!/(?:虾皮|干虾)/.test(name))return 'fishG';
  return null;
 }
 function referenceAmounts(r,member=null){
  const rows=member&&host.MealEngine?.portion?host.MealEngine.portion(r,member):r.ingredients.map(i=>({...i,g:i.g/(r.portions||1)})),totals={meatG:0,fishG:0};
  for(const i of rows){const kind=ingredientKind(i.foodId);if(kind&&Number.isFinite(i.g)&&i.g>0)totals[kind]+=i.g;}
  return totals;
 }
 function addAmounts(target,amount){target.meatG+=amount.meatG;target.fishG+=amount.fishG;}
 function dayAt(start,n){const d=new Date(start+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10);}
 function startOfWeek(day){const d=new Date(day+'T12:00:00Z');return dayAt(day,-((d.getUTCDay()+6)%7));}
 function diners(meal,index,ctx,day){
  const members=ctx.members||[];
  if(ctx.houseId==='care')return [];
  if(ctx.houseId==='solo')return members.map(p=>p.id);
  const weekend=[0,6].includes(new Date(day+'T12:00:00Z').getUTCDay());
  return members.filter(p=>meal==='dinner'?true:meal==='lunch'?['me','partner'].includes(p.id)||weekend&&p.stage==='child':meal==='breakfast'?['me','partner','child'].includes(p.id):p.id==='me').map(p=>p.id);
 }
 function healthGuidance(members=[]){
  const notes=[];
  for(const p of members){const focus=strings(p.focus),who=String(p.name||p.id||'成员');
   if(focus.includes('uric'))notes.push(who+'：尿酸关注优先于喜好；自动排餐避开鱿鱼、贝类、内脏及浓肉汤/肉汁，水产最多2餐/周是本产品的保守排餐规则，不是指南规定的个人处方。豆腐、豆干和鲜菇不统一禁食；份量仍按全天合计。');
   if(focus.includes('pressure'))notes.push(who+'：血压关注优先少盐；酱汁、预制肉和调味牛排需合计包装钠，不默认标低钠，成分缺失时不能判断钠达标。');
   if(focus.includes('lipids'))notes.push(who+'：血脂关注优先清蒸、炖、少油煎炒；响油鳝丝最多1次/周为产品轮换参考。奶酪、肥肉和油酱还需核对饱和脂肪，喜爱度不抵消这些限制。');
   if(focus.includes('glucose'))notes.push(who+'：血糖关注保留分散到三餐的主食和适量全谷豆类；不把某道菜的喜爱度或本产品搭配分当作餐后血糖预测。');
  }
  return notes;
 }
 function buildWeek(context={}){
  const ctx={...context,recipes:context.recipes||data().recipes,members:context.members||[]};
  const start=/^\d{4}-\d{2}-\d{2}$/.test(ctx.startDay||'')?ctx.startDay:startOfWeek(new Date().toISOString().slice(0,10));
  const plans={},counts={},lastDay={},referenceTotals={meatG:0,fishG:0},memberReferenceTotals=Object.fromEntries(ctx.members.map(p=>[p.id,{meatG:0,fishG:0}])),prepRecipes=new Set(),notes=[];
  const canonicalExtra=new Set(['guide-1','guide-093','family-greens-mushroom']),hasUric=ctx.members.some(p=>strings(p.focus).includes('uric'));let seafoodMeals=0;
  const eligible=r=>!(r.id.startsWith('recipe-')&&(r.ingredients||[]).some(i=>{const f=data().foods[i.foodId];return !f||f.nutrients?.kcal==null||f.nutrients?.protein==null;}))&&!r.retired&&!r.incomplete&&Array.isArray(r.ingredients)&&r.ingredients.length>0&&!ctx.members.some(p=>strings(p.temporaryAvoid).includes(r.id))&&!(hasUric&&(r.uricAcidNote||/鱿鱼|鳝|蛤|贝|内脏|浓肉汤|浓肉汁/.test(r.name)))&&(r.defaultEligible!==false||canonicalExtra.has(r.id)||ctx.members.some(p=>Number(p.recipeRatings?.[r.id])>=4||strings(p.priorityRecipes).includes(r.id)||r.id.startsWith('family-')&&recipePreference(r,p)>0));
  const all=ctx.recipes.filter(eligible),month=new Date(start+'T12:00:00Z').getUTCMonth()+1;
  const seasonalPenalty=r=>/苋/.test(r.name)&&(month<4||month>9)?8:0;
  function choose(category,meal,index,exclude,selectedMembers,slot=0){
   let pool=all.filter(r=>r.category===category&&!exclude.has(r.id)&&(meal!=='lunch'||prepSuitability(r).lunch));
   const cap=r=>r.id==='family-eel'?1:category==='protein'?(referenceAmounts(r).meatG||referenceAmounts(r).fishG?2:3):category==='veg'?3:category==='grain'?4:category==='breakfast'?3:4;
   pool=pool.filter(r=>{
    const reference=referenceAmounts(r);
    if((counts[r.id]||0)>=cap(r)||hasUric&&reference.fishG&&seafoodMeals>=2||referenceTotals.meatG+reference.meatG>500.001||referenceTotals.fishG+reference.fishG>500.001)return false;
    // Check the participating person's actual ingredient portion before choosing.
    // These are product planning reference bounds, never medical upper limits.
    return selectedMembers.every(p=>{
     const actual=referenceAmounts(r,p),used=memberReferenceTotals[p.id];
     return used.meatG+actual.meatG<=500.001&&used.fishG+actual.fishG<=500.001;
    });
   });
   if(!pool.length)return null;
   return pool.map((r,j)=>{
    const a=referenceAmounts(r),taste=selectedMembers.length?selectedMembers.reduce((n,p)=>n+recipePreference(r,p),0)/selectedMembers.length:0;
    let score=taste*1.5-(counts[r.id]||0)*9-(lastDay[r.id]===index-1?8:0)-seasonalPenalty(r)+(j+index*3+slot*2)%pool.length/pool.length;
    if(category==='protein'&&meal==='dinner'&&a.fishG&&referenceTotals.fishG<360)score+=13;
    if(category==='protein'&&a.meatG&&referenceTotals.meatG>350)score-=10;
    if(category==='veg'&&meal==='dinner'&&r.prep?.mode==='fresh')score+=2;
    if(ctx.members.some(p=>strings(p.focus).some(f=>['pressure','lipids'].includes(f)))){if(/清蒸|蒸|炖|温拌/.test(r.name))score+=4;if(/响油|红烧|炸|黑椒汁|预制|肉酱/.test(r.name))score-=15;}
    return {r,score,j};
   }).sort((a,b)=>b.score-a.score||a.j-b.j)[0]?.r||null;
  }
  for(let index=0;index<7;index++){
   const day=dayAt(start,index),lunchIds=new Set();
   for(const meal of MEALS){
    const key=day+'-'+meal,saved=ctx.existingPlans?.[key],people=Array.isArray(saved?.people)?saved.people.filter(id=>ctx.members.some(p=>p.id===id)):diners(meal,index,ctx,day),selectedMembers=ctx.members.filter(p=>people.includes(p.id)),recipeIds=[],exclude=new Set(meal==='dinner'?lunchIds:[]);
    const categories=meal==='breakfast'?['breakfast']:meal==='snack'?['snack']:meal==='dinner'?['grain','protein','veg','veg']:['grain','protein','veg'];
    for(let slot=0;slot<categories.length;slot++){
     const r=choose(categories[slot],meal,index,exclude,selectedMembers,slot);if(!r)continue;
     recipeIds.push(r.id);exclude.add(r.id);counts[r.id]=(counts[r.id]||0)+1;lastDay[r.id]=index;addAmounts(referenceTotals,referenceAmounts(r));if(referenceAmounts(r).fishG)seafoodMeals++;
     for(const p of selectedMembers)addAmounts(memberReferenceTotals[p.id],referenceAmounts(r,p));
     if(meal==='lunch'&&prepSuitability(r).freezeComponent)prepRecipes.add(r.id);
    }
    if(meal==='breakfast'&&recipeIds.length){
     const present=new Set(recipeIds.flatMap(id=>(byId(ctx.recipes,id)?.ingredients||[]).map(i=>data().foods[i.foodId]?.group)));
     for(const [group,id] of [['fruit','breakfast-fruit'],['dairy','guide-73'],['protein','guide-1']]){
      if(present.has(group)||recipeIds.includes(id))continue;
      const component=byId(ctx.recipes,id);
      if(!component||component.retired||component.incomplete||ctx.members.some(p=>strings(p.temporaryAvoid).includes(id)))continue;
      recipeIds.push(id);counts[id]=(counts[id]||0)+1;lastDay[id]=index;
      addAmounts(referenceTotals,referenceAmounts(component));
      for(const p of selectedMembers)addAmounts(memberReferenceTotals[p.id],referenceAmounts(component,p));
      for(const i of component.ingredients||[])present.add(data().foods[i.foodId]?.group);
     }
    }
    if(meal==='lunch')recipeIds.forEach(id=>lunchIds.add(id));
    const prepNote=meal==='lunch'?recipeIds.map(id=>prepSuitability(byId(ctx.recipes,id)).note).join(' '):meal==='dinner'?'爷爷现做家常菜，蔬菜可按当天采购替换；多人共菜，份量与全天营养合计一起看。':'';
    plans[key]={recipeIds,people,dishPeople:{},size:{},origin:VERSION,prepNote};
    if((meal==='lunch'||meal==='dinner')&&!recipeIds.some(id=>byId(ctx.recipes,id)?.category==='protein'))notes.push(day+' '+(meal==='lunch'?'午餐':'晚餐')+'没有合适的蛋白质候选，请手动补一道。');
   }
  }
  notes.unshift('依据每人的喜爱度、优先顺序和最近不想吃的菜排餐；午餐优先冷冻组件，晚餐另选家常菜。');
  notes.push('喜好会提高候选顺序和重复机会，但动物肉菜最多安排2次、同一道蔬菜最多3次；偏好不是健康评分。');
  notes.push('整套菜单的每参考份畜禽肉约'+Math.round(referenceTotals.meatG)+'g、水产约'+Math.round(referenceTotals.fishG)+'g；以可食原料重核对全周300—500g参考。每人的实际计划需另按出席、定制份量和校准后的成分累计，未就餐不等于已吃。');
  notes.push('自动选菜同时检查每位参与者定制后的畜禽肉及水产原料累计，分别不超过500g排餐参考上沿；这不是医学UL，也不表示儿童、孕哺或病患都适用普通成人参考。');
  notes.push(...healthGuidance(ctx.members));
  notes.push('季节仅影响候选排序；米苋在秋冬会降低优先级，可由用户在有货时优先安排。过敏、吞咽及特殊医嘱需按已确认方案人工核对。');
  if(ctx.houseId==='care')notes.push('照护家庭不默认勾选用餐人；请先按已有照护方案选择成员，再看个人份量。');
  const rounded=v=>Object.fromEntries(Object.entries(v).map(([k,n])=>[k,Math.round(n*10)/10]));
  return {plans,notes,referenceTotals:rounded(referenceTotals),memberReferenceTotals:Object.fromEntries(Object.entries(memberReferenceTotals).map(([id,t])=>[id,rounded(t)])),prepRecipes:[...prepRecipes]};
 }
 function build(meal,index,context={}){
  const start=context.startDay||startOfWeek(new Date().toISOString().slice(0,10)),i=((index%7)+7)%7;
  return buildWeek({...context,startDay:start}).plans[dayAt(start,i)+'-'+meal]||{recipeIds:[],people:[],dishPeople:{},size:{},origin:VERSION,prepNote:''};
 }
 host.MealPlanning=Object.freeze({VERSION,classify,recipePreference,preferenceSummary,rankRecipes,prepSuitability,referenceAmounts,healthGuidance,buildWeek,build});
})(window);




