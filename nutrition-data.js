/* Explicitly sourced missing fields only. Existing estimates are not re-labelled as verified. */
(function(D){
 const egg=D.foods.egg;
 const supplement={fiber:0,sodium:142,calcium:56,saturatedFat:3.13};
 if(egg){for(const [key,value] of Object.entries(supplement))if(egg.nutrients[key]===null||egg.nutrients[key]===undefined)egg.nutrients[key]=value;egg.supplementalSources=[{title:'USDA FDC 171287：去壳生鲜全鸡蛋，每100g；仅补缺失项',url:'https://fdc.nal.usda.gov/food-details/171287/nutrients'}];}
 D.sources.push({id:'who-saturated-2023',title:'WHO 2023：饱和脂肪与反式脂肪指南',url:'https://www.who.int/publications/i/item/9789240073630'},{id:'fdc-egg-missing',title:'USDA FDC 171287：全鸡蛋缺失成分补充',url:'https://fdc.nal.usda.gov/food-details/171287/nutrients'});
 if(!D.recipes.some(r=>r.id==='breakfast-fruit'))D.recipes.push({id:'breakfast-fruit',name:'当季整果（参考苹果）',category:'snack',ingredients:[{foodId:'apple',g:100}],portions:1,cookedG:100,activeMin:2,totalMin:2,prep:{mode:'fresh'},tags:['早餐补充','随季节替换'],steps:['苹果流水洗净，去核。称可食部分约100g，切成适合家人咀嚼的小块。','和早餐一起吃。换成其他水果时请在自家配方中更换实际食材，用相应成分重新估算。'],healthNotes:['这里按整苹果可食生重估算，不用果汁代替。儿童及吞咽照护者按适合的食物质地安排。'],basisNote:'早餐蔬果组件；100g是起始参考份，按全天水果与个人份量合计。'});
 D.libraryVersion='20261030-personal6';
})(window.MealData);
