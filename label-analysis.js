/* Offline label parsing and transparent food guidance. Missing values stay null. */
(function(host){
 'use strict';
 const KEYS=['kcal','protein','carbs','fat','fiber','sodium','calcium','saturatedFat'];
 const finite=n=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
 const round=n=>Math.round(n*100)/100;
 const sources=[
  {title:'GB 28050—2011：营养标签声称条件',url:'https://www.nhc.gov.cn/ewebeditor/uploadfile/2013/06/20130605104041625.pdf'},
  {title:'国家卫健委：中国居民减盐核心信息十条',url:'https://www.nhc.gov.cn/sps/c100087/201908/3709725eee834ac1a1818ea2a1f5f7e8.shtml'},
  {title:'WHO：钠摄入与减盐',url:'https://www.who.int/news-room/fact-sheets/detail/sodium-reduction'},
  {title:'市场监管总局：科学认识食品添加剂',url:'https://www.samr.gov.cn/zt/ndzt/2021n/splyyxkpzpzbpt/azzpjjhf/spaq/art/2023/art_29bf381391b14d699d8aea8aa7d53458.html'}
 ];
 function normalize(value){return String(value||'').normalize('NFKC').replace(/\r/g,'').replace(/(\d)\s*[.．]\s*(\d)/g,'$1.$2').replace(/([一-龥])[ \t]+(?=[一-龥])/g,'$1');}
 function inferGroup(name,ingredients=''){
  if(/油醋|沙拉[酱汁]|芝麻[酱汁]|黑椒汁|酱油|菜籽油|橄榄油|牛油果油|食用油|调味|酱汁|醋/.test(name))return 'condiment';
  if(/奶|乳|芝士|干酪/.test(name))return 'dairy';
  if(/麦片|燕麦|面包|米饭|杂粮|面条|意面|贝果|馒头|玉米|红薯|山药/.test(name))return 'grain';
  if(/鸡|鸭|肉|鱼|虾|蛋|豆腐|豆干|牛排|鳝|鱿/.test(name))return 'protein';
  if(/坚果|核桃|杏仁|腰果|奇亚籽/.test(name))return 'nuts';
  if(/苹果|香蕉|莓|水果|橙|柚|梨|桃|瓜/.test(name))return 'fruit';
  if(/菜|菠菜|芹菜|菇|秋葵|西兰花|洋葱|彩椒/.test(name))return 'veg';
  if(/^(鸡肉|牛肉|猪肉|鱼|虾)/.test(ingredients))return 'protein';
  return 'other';
 }
 function parse(text){
  const rawText=String(text||'').slice(0,60000),raw=normalize(rawText),warnings=[],nutrients=Object.fromEntries(KEYS.map(k=>[k,null]));
  const labels=/饱\s*和\s*脂\s*肪(?:\s*酸)?|膳\s*食\s*纤\s*维|蛋\s*白\s*质|碳\s*水\s*化\s*合\s*物|能\s*量|总?\s*脂\s*肪|钠|钙/g;
  const keyFor=label=>({'能量':'kcal','蛋白质':'protein','碳水化合物':'carbs','脂肪':'fat','总脂肪':'fat','膳食纤维':'fiber','钠':'sodium','钙':'calcium','饱和脂肪':'saturatedFat','饱和脂肪酸':'saturatedFat'}[label.replace(/\s/g,'')]);
  const ingredientHeads=[...raw.matchAll(/配\s*料\s*表\s*[:：]?/g)];
  const ingredientHead=ingredientHeads.filter(m=>{const next=raw.slice(m.index+m[0].length,m.index+m[0].length+22).replace(/\s/g,'');return !/^[·:：]?[^\n]{0,4}养成分表/.test(next);}).at(-1);
  const ingredientTail=ingredientHead?raw.slice(ingredientHead.index+ingredientHead[0].length):'';
  const ingredientsText=ingredientTail.split(/(?:致.{0,3}物质提示|过敏(?:原|物质)?(?:提示)?|营养成分表)/)[0].trim();
  const table=raw.split(/【[^】]*识别】/).map(block=>{
   const end=[...block.matchAll(/配\s*料\s*表\s*[:：]?/g)].find(m=>!/^[:：·]?[^\n]{0,4}养成分表/.test(block.slice(m.index+m[0].length,m.index+m[0].length+22).replace(/\s/g,'')));
   return end?block.slice(0,end.index):block;
  }).join('\n');
  const explicitBasis=table.match(/每\s*100\s*(m\s*[lL1]|毫升|[gG]|克)/);
  const servingBasis=table.match(/每(?:食用)?份\s*[(（]?\s*(\d+(?:\.\d+)?)\s*(m\s*[lL1]|毫升|[gG]|克)/);
  let basisKnown=!!explicitBasis,unit=explicitBasis&&/m|毫升/i.test(explicitBasis[1])?'mL':'g',factor=1,basisText=explicitBasis?.[0].replace(/\s/g,'')||'';
  if(!basisKnown&&servingBasis&&Number(servingBasis[1])>0){factor=100/Number(servingBasis[1]);unit=/m|毫升/i.test(servingBasis[2])?'mL':'g';basisKnown=true;basisText=servingBasis[0]+'，换算每100'+unit;warnings.push('原表为每份数值，已按识别份量换算；请核对每份重量和单位。');}
  if(!basisKnown){basisText=/每(?:食用)?份|per\s*serving/i.test(table)?'每份（份量未辨明）':'未辨认每100g/100mL基准';warnings.push('未确认营养表基准；不能把每份或整包装数值直接当作每100g。');}
  if(explicitBasis&&/每(?:食用)?份/.test(table))warnings.push('图片可能包含每100g和每份多列，请核对取值列。');
  const candidates=Object.fromEntries(KEYS.map(k=>[k,[]]));
  const hits=[...table.matchAll(labels)];
  for(let i=0;i<hits.length;i++){
   const hit=hits[i],key=keyFor(hit[0]);if(!key)continue;
   const segment=table.slice(hit.index+hit[0].length,hits[i+1]?.index||table.length).slice(0,160);
   const value=segment.match(/(\d+(?:\.\d+)?)\s*(kcal|kJ|千卡|千焦|毫克|mg|克|g)(?![A-Za-z])/i);
   if(!value)continue;
   let n=Number(value[1]),u=value[2].toLowerCase();
   if(key==='kcal'){if(/kj|千焦/.test(u))n/=4.184;else if(!/kcal|千卡/.test(u))continue;}
   else if(['sodium','calcium'].includes(key)){if(/^(g|克)$/.test(u))n*=1000;else if(!/mg|毫克/.test(u))continue;}
   else {if(/mg|毫克/.test(u))n/=1000;else if(!/^(g|克)$/.test(u))continue;}
   n*=factor;if(finite(n)&&!candidates[key].some(v=>Math.abs(v-n)<.0001))candidates[key].push(n);
   if(/[<>≤≥]/.test(segment.slice(0,value.index+1)))warnings.push('标签有界限符号，识别值可能表示限值，需核对后再使用。');
  }
  for(const key of KEYS){nutrients[key]=candidates[key].at(-1)??null;if(candidates[key].length>1)warnings.push(({'kcal':'能量','protein':'蛋白质','carbs':'碳水','fat':'脂肪','fiber':'纤维','sodium':'钠','calcium':'钙','saturatedFat':'饱和脂肪'}[key])+'识别候选存在冲突，请对照原图核对。');}
  // Choose only observed candidates. This never inserts a missing decimal point.
  if(finite(nutrients.kcal)&&['protein','fat','carbs'].every(k=>candidates[k].length)){
   let best=null;
   for(const protein of candidates.protein.slice(-4))for(const fat of candidates.fat.slice(-4))for(const carbs of candidates.carbs.slice(-4)){
    const calculated=(protein*17+fat*37+carbs*17+(finite(nutrients.fiber)?nutrients.fiber*8:0))/4.184;
    const error=Math.abs(calculated-nutrients.kcal);if(!best||error<best.error)best={protein,fat,carbs,error};
   }
   if(best)for(const k of ['protein','fat','carbs'])nutrients[k]=best[k];
   const relative=best.error/Math.max(nutrients.kcal,1);
   if(relative>.05&&best.error>3.5)warnings.push('能量与识别的蛋白质、脂肪、碳水不一致，可能漏了小数点或取错列；纤维和糖醇也会影响换算，请核对，系统未凭空改数。');
  }
  for(const key of ['protein','fat','carbs','fiber','saturatedFat'])if(finite(nutrients[key])&&nutrients[key]>100)warnings.push(key+'每100单位超过100g，可能漏了小数点或单位识别错误。');
  if(['protein','fat','carbs'].every(k=>finite(nutrients[k]))&&nutrients.protein+nutrients.fat+nutrients.carbs>102&&unit==='g')warnings.push('三大营养素合计超过100g，请核对基准、单位或小数点。');
  const productLine=raw.match(/(?:产品名称|食品名称|品名)\s*[:：]\s*([^\n]{2,50})/);
  const name=productLine?.[1].trim()||raw.split('\n').map(t=>t.trim().replace(/^[-·—:：]+|[-·—:：]+$/g,'')).find(t=>t.length>=2&&t.length<=45&&!/配料|成分表|每100|净含量|NRV|保质/.test(t)&&/鸡排|鸡胸|牛排|牛肉|牛奶|酸奶|芝士|麦片|燕麦|面包|面条|意面|沙拉|油醋|橄榄油|菜籽油|豆干|豆腐|坚果/.test(t))||'';
  const allergens=[],allergenArea=ingredientTail||raw;
  const shared=allergenArea.match(/(?:生产线|共线|同一.{0,3}设备)[\s\S]{0,160}/)?.[0]||'';
  const direct=allergenArea.replace(shared,'');
  for(const [re,label] of [[/小麦|麸质|麦粉/,'含小麦/麸质'],[/大豆|豆分离蛋白/,'含大豆'],[/牛奶|乳粉|奶粉|乳清/,'含乳'],[/鸡蛋|蛋清|蛋黄|蛋粉/,'含蛋']])if(re.test(direct))allergens.push(label);
  if(shared){if(/蛋/.test(shared))allergens.push('共线可能含蛋');if(/大豆|豆/.test(shared))allergens.push('共线可能含大豆');if(/乳|奶/.test(shared))allergens.push('共线可能含乳');if(/麦|麸/.test(shared))allergens.push('共线可能含小麦/麸质');if(allergens.every(a=>!a.startsWith('共线')))allergens.push('存在共线加工提示，具体过敏原需核对');}
  if(!Object.values(nutrients).some(finite))warnings.push('未可靠识别营养数值；空白不按0计算。');
  return {name,unit,basisKnown,basisText,nutrients:Object.fromEntries(KEYS.map(k=>[k,nutrients[k]===null?null:round(nutrients[k])])),ingredientsText,allergens,warnings:[...new Set(warnings)],rawText,group:inferGroup(name,ingredientsText),requiresReview:true,candidates};
 }
 function assess(food={}){
  const n=food.nutrients||food.nutrition||{},group=food.group||inferGroup(food.name||'',food.ingredientsText||''),liquid=/^ml$/i.test(food.unit||''),notes=[];
  if(!Object.values(n).some(finite))return {headline:'营养资料待补，暂不能评价',notes:['仅有图片或食品名称不足以判断营养价值；未辨认字段保留未知。'],frequency:'暂不凭食品名设固定食用次数。',sources:sources.slice(0,3)};
  if(food.basisKnown===false)return {headline:'先核对营养表基准',notes:['尚未确认每100g/100mL或可换算份量，暂不评价低脂、低钠。'],frequency:'基准与标签待核对后，再看份量和频次。',sources:sources.slice(0,3)};
  const lowFat=finite(n.fat)&&n.fat<=(liquid?1.5:3),highNa=finite(n.sodium)&&n.sodium>(liquid?300:600);
  let headline=lowFat&&highNa?'低脂肪，注意高钠':highNa?'钠较高，适合小份搭配':lowFat?'脂肪较低，仍需看整体搭配':'按份量与全天饮食搭配';
  if(lowFat)notes.push('脂肪数值符合固体≤3g/100g、液体≤1.5g/100mL的低脂肪条件；低脂不等于可以不限量。');
  if(finite(n.sodium)){if(highNa)notes.push(`每100${food.unit||'g'}钠${round(n.sodium)}mg，达到高钠识别水平；少叠加盐、黑椒汁、咸汤等。`);else if(n.sodium<=120)notes.push('按所选每100单位数据，钠符合≤120mg的低钠数值条件；仍需计入全天总量。');else notes.push('不是低钠食品，按实际用量与其他菜的盐和酱汁合计。');notes.push('盐当量约为钠mg÷400（g）；包含食盐及其他配料来源的钠，不等同实测加盐量。');}
  else notes.push('钠未识别，暂不能判断是否适合控盐安排。');
  if(!finite(n.saturatedFat))notes.push('饱和脂肪未提供，不能由低总脂肪直接标为低饱和脂肪。');
  if(/磷酸|碳酸|香精|增稠|防腐|添加剂/.test(food.ingredientsText||''))notes.push('添加剂种类数量不直接代表营养价值；优先看钠、脂肪、份量和整体饮食。');
  if(group==='protein')notes.push('嘌呤没有列在普通营养表中，不能据这张表判低嘌呤；蛋白质需与当天蛋奶豆及其他鱼肉合计。');
  if(group==='dairy')notes.push('按奶类看待，同时核对添加糖与钙；无乳糖不等于无糖。');
  if(group==='grain')notes.push('作为主食的一部分，需看实际份量、全谷物比例和膳食纤维；不能仅凭“全麦”名称判优。');
  if(group==='condiment'){headline=/油$/.test(food.name||'')?'烹调油，少量合计':'调味用，小份合计';notes.push('油酱按每道菜实际用量计算，不能拿100g油酱与100g主菜直接比较。');}
  let frequency=group==='condiment'?'少量按烹调需要使用，计入全天油或钠，不是每天必须额外吃。':group==='protein'&&highNa?'可先按每周0—1次作忙时轮换；这是本产品保守排餐起点，不是该品牌的医学处方。':['grain','dairy','veg','fruit','nuts'].includes(group)?'可纳入日常同类食物轮换，按个人全天目标、过敏及实际份量调整。':'与其他同类食物轮换，目前不给单品设固定医学次数。';
  return {headline,notes,frequency,sources};
 }
 function servings(food={},member={}){
  const n=food.nutrients||food.nutrition||{},group=food.group||inferGroup(food.name||'',food.ingredientsText||''),stage=member.stage||'adult',focus=member.focus||[],unit=/^ml$/i.test(food.unit||'')?'mL':'g';
  if(food.basisKnown===false)return {label:'先确认标签基准，再估个人份量',grams:null,unit,reason:'每份、每包和每100单位不能混用；尚未确认基准时不据此计算摄入。',nutrients:Object.fromEntries(KEYS.map(k=>[k,null]))};
  if(stage==='care'||member.specialDietState==='yes'||member.swallowingConcern===true)return {label:'按已有照护或饮食医嘱确认份量',grams:null,unit,reason:'涉及吞咽、食物质地或其他特殊方案时，不自动套固定克数。',nutrients:Object.fromEntries(KEYS.map(k=>[k,null]))};
  const child=stage==='child',elder=stage==='elder',highNa=finite(n.sodium)&&n.sodium>(unit==='mL'?300:600);let grams,label,reason;
  if(group==='protein'){
   grams=child||elder&&focus.includes('pressure')?[25,50]:stage==='lactating'&&focus.includes('uric')?[50,75]:[50,100];
   label=`先取${grams[0]}—${grams[1]}${unit}作这餐蛋白菜的一部分`;
   reason=child?'孩子起始上菜参考，不是必须吃完；需要结合生长及整天餐食，不套成人钠限量。':stage==='lactating'?'哺乳期需保证整天能量和蛋白，调味肉小份不能替代完整一餐；尿酸相关频次按个人情况核对。':'与当天其他鱼肉蛋豆及调味合计，不因低脂就多取一整包。';
  }else if(group==='dairy'){
   grams=child?[100,150]:[150,250];label=`一餐先取${grams[0]}—${grams[1]}${unit}`;reason='奶类份量参考，计入全天奶量；奶酪和芝士需另按小份安排，不能等量套牛奶。';
   if(/芝士|奶酪|干酪/.test(food.name||'')){grams=child?[5,10]:[10,20];label=`先取${grams[0]}—${grams[1]}${unit}小份`;reason='奶酪钠和饱和脂肪差异大，不能按牛奶相同克数替换。';}
  }else if(group==='grain'){
   const dry=/燕麦|麦片|干面|面条|大米|杂粮米/.test(food.name||'');grams=child?(dry?[20,40]:[25,50]):elder?(dry?[30,50]:[30,60]):dry?[40,70]:[40,80];label=`一餐先取${grams[0]}—${grams[1]}${unit}`;reason=dry?'按干原料份量；生熟重量和即食状态需核对，并与同餐其他主食合计。':'面包等主食份量参考，按该食品标签及同餐其他主食调整。';
  }else if(group==='condiment'){
   grams=child?[1,3]:highNa?[3,5]:[3,8];label=`每人分摊可先参考${grams[0]}—${grams[1]}${unit}`;reason='这是调味起点，不是必须吃满的目标；整锅总油、盐、酱汁需一起计算。';
  }else if(group==='nuts'){
   grams=child?[5,8]:[5,10];label=`先取${grams[0]}—${grams[1]}${unit}`;reason='计入全天坚果种子；幼儿需适合咀嚼的细碎质地，避免整粒呛噎。';
  }else if(group==='fruit'){
   grams=child?[50,100]:[100,150];label=`一份先取${grams[0]}—${grams[1]}${unit}`;reason='按整果可食部分参考，计入全天水果；果汁、果干不能直接等量套用。';
  }else if(group==='veg'){
   grams=child?[50,100]:[100,200];label=`一餐先取${grams[0]}—${grams[1]}${unit}`;reason='按可食原料参考，与全天其他蔬菜合计；照护质地另行确认。';
  }else return {label:'先核对食品类别和个人资料',grams:null,unit,reason:'仅凭图片或名称暂不设个人份量。',nutrients:Object.fromEntries(KEYS.map(k=>[k,null]))};
  if(highNa)reason+=' 这款钠较高，其余菜尽量少盐少酱。';
  const values=Object.fromEntries(KEYS.map(k=>[k,finite(n[k])?grams.map(g=>round(n[k]*g/100)):null]));
  return {label,grams,unit,reason,nutrients:values};
 }
 host.FoodLabels=Object.freeze({parse,assess,servings});
})(window);
