/* Pure reference calculations. No UI, storage, network, diagnosis or medical score.
 * items[].g uses the food entry's per-100 base unit (g; mL for liquid entries).
 * coverage describes available ingredient data, not measurement accuracy.
 */
(function (host) {
  'use strict';
  const KEYS = ['kcal', 'protein', 'carbs', 'fat', 'fiber', 'sodium', 'calcium', 'saturatedFat'];
  const own = (o, k) => Object.prototype.hasOwnProperty.call(o || {}, k);
  const valid = n => typeof n === 'number' && Number.isFinite(n) && n >= 0;
  const positive = n => valid(n) && n > 0;
  const data = () => host.MealData || { foods: {}, recipes: [] };
  const food = id => (data().foods || {})[id];
  const recipeById = id => (data().recipes || []).find(r => r.id === id);
  const clean = n => Math.round(n * 1e6) / 1e6;

  function mergeItems(arrays) {
    const sums = new Map();
    for (const rows of Array.isArray(arrays) ? arrays : []) {
      for (const row of Array.isArray(rows) ? rows : []) {
        if (!row || typeof row.foodId !== 'string' || !row.foodId) continue;
        const previous = sums.get(row.foodId);
        if (!valid(row.g) || previous === null) sums.set(row.foodId, null);
        else sums.set(row.foodId, clean((previous || 0) + row.g));
      }
    }
    return Array.from(sums, ([foodId, g]) => ({ foodId, g })).filter(row => row.g !== 0);
  }

  function portion(recipe, member, factor = 1) {
    const r = typeof recipe === 'string' ? recipeById(recipe) : recipe;
    if (!r || !Array.isArray(r.ingredients) || !valid(factor) || factor === 0) return [];
    const servings = positive(r.portions) ? r.portions : 1;
    const groups = profileAssessment(member).portionFactors;
    return mergeItems([r.ingredients.map(row => {
      const group = food(row.foodId)?.group;
      // Mixed finished foods keep their ingredient ratio, including condiments.
      // Other dishes retain independent food-group multipliers.
      const multiplier = r.fixedMix === true
        ? valid(groups[r.sizingGroup]) ? groups[r.sizingGroup] : 1
        : group !== 'condiment' && valid(groups[group]) ? groups[group] : 1;
      return { foodId: row.foodId, g: valid(row.g) ? clean(row.g / servings * multiplier * factor) : null };
    })]);
  }

  function nutrition(items) {
    const rows = mergeItems([items]);
    const mass = rows.reduce((n, row) => n + (positive(row.g) ? row.g : 0), 0);
    const unknownWeight = rows.some(row => !valid(row.g));
    const values = {}, coverage = {};
    for (const key of KEYS) {
      let subtotal = 0, knownMass = 0, hasValue = false;
      for (const row of rows) {
        if (!positive(row.g)) continue;
        const v = food(row.foodId)?.nutrients?.[key];
        if (valid(v)) { subtotal += v * row.g / 100; knownMass += row.g; hasValue = true; }
      }
      values[key] = hasValue ? clean(subtotal) : null;
      coverage[key] = mass && !unknownWeight ? Math.min(1, knownMass / mass) : 0;
    }
    const unknown = KEYS.filter(key => coverage[key] < 1);
    return {
      values, coverage, unknown,
      // Conservative: complete columns plus verified provenance are both required.
      allVerified: rows.length > 0 && !unknownWeight && !unknown.length && rows.every(row => food(row.foodId)?.verified === true)
    };
  }

  function score(items, meal) {
    const name = typeof meal === 'object' && meal ? meal.id || meal.type || meal.category : meal;
    const note = '产品搭配完整度：只看食物组与食材种类，不代表医学健康评分、营养足量或疾病控制效果。';
    if (['snack', 'afternoon', '加餐', '下午加餐', 3].includes(name)) return { score: null, checks: [], note: '加餐不套用正餐完整度分。' + note };
    const rows = mergeItems([items]).filter(row => positive(row.g) && food(row.foodId));
    const groups = new Set(rows.map(row => food(row.foodId).group));
    const variety = rows.filter(row => food(row.foodId).group !== 'condiment').length;
    const checks = [
      ['有主食', groups.has('grain')],
      ['有鱼肉蛋豆或奶类', groups.has('protein') || groups.has('dairy')],
      ['有蔬菜或水果', groups.has('veg') || groups.has('fruit')],
      ['至少三种非调味食材', variety >= 3]
    ].map(([label, passed]) => ({ label, passed, points: 25, earned: passed ? 25 : 0 }));
    return { score: checks.reduce((n, check) => n + check.earned, 0), checks, note };
  }

  function sanitizeGoal(goal) {
    if (!goal || goal.confirmed === false) return null;
    const type = goal.type;
    if (!['minimum', 'maximum', 'range'].includes(type)) return null;
    const min = valid(goal.min) ? goal.min : null;
    const max = valid(goal.max) ? goal.max : null;
    if (type === 'minimum' && min === null || type === 'maximum' && max === null || type === 'range' && (min === null || max === null || min > max)) return null;
    return { type, min: type === 'maximum' ? null : min, max: type === 'minimum' ? null : max, source: String(goal.source || '用户已确认的个人目标') };
  }

  const GROUPS = ['grain', 'protein', 'veg', 'fruit', 'dairy', 'nuts'];
  const ACTIVITY = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, '以久坐为主': 1.2, '轻度活动': 1.375, '中度活动': 1.55, '较高活动': 1.725 };
  const PROFILE_SOURCES = [
    { title: 'Mifflin 等：健康成人静息能量预测公式（1990原始研究）', url: 'https://pubmed.ncbi.nlm.nih.gov/2305711/' },
    { title: '中国疾控中心：产后6个月内哺乳能量参考（2026）', url: 'https://www.chinacdc.cn/jkkp/yyjk/rqyy/202609/t20260910_1839987.html' },
    { title: 'CDC：哺乳期能量与喂养方式（2026）', url: 'https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/maternal-diet.html' },
    { title: '美国DGA 2020—2025：哺乳第二个6个月额外能量（旧版阶段参考）', url: 'https://www.cdc.gov/breastfeeding-data/media/pdfs/2024/05/Dietary_Guidelines_for_Americans_2020-2025.pdf' },
    { title: '中华医学会：乳母蛋白质RNI参考80g/日（2023科普引2013版DRIs）', url: 'https://www.cma.org.cn/art/2023/7/14/art_4584_51668.html' }
  ];

  function personalGoals(m) {
    const result = Object.fromEntries(KEYS.map(key => [key, null]));
    for (const source of [m.goals, m.customGoals]) for (const key of KEYS) if (own(source, key)) result[key] = sanitizeGoal(source[key]);
    return result;
  }

  function profileAssessment(member) {
    const m = member || {}, targets = personalGoals(m), missingFields = [], basis = [];
    let energyKcal = null, reason = '', ready = false, source = 'pending';
    const personalEnergy = targets.kcal;
    const manualEnergy = personalEnergy?.type === 'range' && positive(personalEnergy.min) && positive(personalEnergy.max);
    const confirmed = m.profileConfirmed === true || m.confirmed === true;
    if (manualEnergy) {
      energyKcal = Math.round((personalEnergy.min + personalEnergy.max) / 2);
      ready = true; source = 'personal';
      basis.push('使用已录入的个人能量范围；配餐以范围中点估算，不重新推定疾病或照护目标。');
      reason = '按个人目标调整参考份量';
    } else {
      if (!confirmed) missingFields.push('确认个人资料');
      if (!valid(m.age) || m.age < 18 || m.age > 64) missingFields.push('18—64岁成人年龄');
      if (!['male', 'female'].includes(m.sex)) missingFields.push('性别');
      if (!positive(m.height) || m.height < 120 || m.height > 220) missingFields.push('身高');
      if (!positive(m.weight) || m.weight < 30 || m.weight > 250) missingFields.push('体重');
      if (!own(ACTIVITY, m.activity)) missingFields.push('活动程度');
      if (!['adult', 'lactating'].includes(m.stage)) reason = '儿童、65岁以上长者或照护成员请录入适用的个人目标；不套用普通成人公式。';
      else if (m.specialDietState === 'yes' || m.specialDiet !== false && m.specialDietState !== 'unknown') reason = '请确认有无特殊饮食医嘱；有医嘱时使用个人目标。';
      else if (missingFields.length) reason = '先补充' + missingFields.join('、') + '，当前仅显示配方参考份。';
      else if (m.stage === 'lactating' && (m.sex !== 'female' || !valid(m.lactationMonths) || m.lactationMonths > 12 || m.lactationMode !== 'exclusive')) {
        if (!valid(m.lactationMonths)) missingFields.push('产后月数');
        if (!['exclusive', 'partial'].includes(m.lactationMode)) missingFields.push('哺乳方式');
        reason = '哺乳期需确认产后月数与喂养方式；混合喂养或产后12个月以上请录个人目标，不按固定比例猜测。';
      } else {
        const resting = 10 * m.weight + 6.25 * m.height - 5 * m.age + (m.sex === 'male' ? 5 : -161);
        const extra = m.stage === 'lactating' ? 400 : 0;
        energyKcal = Math.round((resting * ACTIVITY[m.activity] + extra) / 50) * 50;
        ready = true; source = 'estimated'; reason = '按维持能量粗估调整参考份量';
        if (m.specialDietState === 'unknown') { reason += '；饮食医嘱待核对'; basis.push('尚不清楚是否有特殊饮食医嘱：这里只估普通维持需要，饮食医嘱待核对；若已有医嘱请改用个人目标。'); }
        basis.push('Mifflin-St Jeor静息能量估计 × 自选活动系数；用于维持体重的初步排餐，不设置减重热量缺口。');
        basis.push('活动系数1.2 / 1.375 / 1.55 / 1.725是本产品的排餐假设；公式并非实测能量消耗。');
        if (extra) basis.push(m.lactationMonths <= 6 ? '纯母乳0—6月：在成人估算上加400千卡，参考中国疾控2026科普；需随泌乳量和体重趋势调整。' : '持续母乳6—12月：暂加400千卡，参考DGA 2020—2025的阶段性数据及CDC；实际需求随辅食和泌乳量变化。');
        if (!targets.kcal) targets.kcal = { type: 'range', min: Math.round(energyKcal * .9), max: Math.round(energyKcal * 1.1), source: '维持能量粗估±10%的产品排餐参考区间，不是临床需要量范围' };
        if (!targets.protein && m.stage === 'adult') targets.protein = { type: 'minimum', min: m.sex === 'male' ? 65 : 55, max: null, source: 'WS/T 578.1-2017：健康成人蛋白质RNI参考，非上限' };
        if (!targets.protein && m.stage === 'lactating') targets.protein = { type: 'minimum', min: 80, max: null, source: '乳母蛋白质RNI 80g/日参考：中华医学会2023科普所引2013版DRIs；不是上限，有特殊饮食医嘱时另定' };
        if (!targets.fiber) targets.fiber = { type: 'minimum', min: 25, max: null, source: '健康成人膳食纤维25—30g/日参考，非UL' };
        if (!targets.sodium) targets.sodium = { type: 'maximum', min: null, max: 2000, source: 'WHO成人钠摄入少于2000mg/日；限量不需吃满' };
      }
    }
    // A malformed personal range is never treated as an automatic energy goal.
    if (personalEnergy?.type === 'range' && !manualEnergy) { ready = false; energyKcal = null; reason = '个人能量范围需为大于0的有效上下限。'; source = 'pending'; }
    if (ready && positive(energyKcal) && !targets.saturatedFat) targets.saturatedFat={type:'maximum',min:null,max:clean(energyKcal*.1/9),source:'WHO 2023：饱和脂肪不超过能量10%的通用参考，个人医嘱另行设置'};
    const portionFactors = Object.fromEntries(GROUPS.map(group => [group, 1]));
    if (ready) {
      const scale = energyKcal / 2000;
      // Recipe baseline is a product reference, not proof that a day meets all targets.
      portionFactors.grain = clean(scale);
      portionFactors.protein = clean(Math.max(.85, Math.min(scale, 1.2)));
      portionFactors.veg = clean(Math.max(1, Math.min(scale, 1.25)));
      portionFactors.fruit = clean(Math.max(.8, Math.min(scale, 1.2)));
      portionFactors.dairy = 1;
      portionFactors.nuts = clean(Math.max(.8, Math.min(scale, 1.2)));
      basis.push('参考菜谱按2000千卡成人配餐基线调整；蛋白食物、蔬果和奶类不随能量无限增加。这些倍率是产品起点，是否够量仍看全天食材营养合计。');
    }
    if (m.portionMode === 'manual' || !ready && m.portionMode !== 'auto') for (const group of GROUPS) if (positive(m.portions?.[group])) portionFactors[group] = m.portions[group];
    for (const group of GROUPS) if (positive(m.portionOverrides?.[group])) portionFactors[group] = m.portionOverrides[group];
    return { ready, reason, energyKcal, targets, portionFactors, basis, missingFields, source, sourceRefs: PROFILE_SOURCES.map(item => ({ ...item })) };
  }

  function goals(member) {
    return profileAssessment(member).targets;
  }

  function mealPortions(recipes, member, mealType, factor = 1) {
    const selected = (Array.isArray(recipes) ? recipes : []).map(r => typeof r === 'string' ? recipeById(r) : r);
    const rows = selected.filter(r => r && Array.isArray(r.ingredients)).map(r => ({ recipeId: r.id, recipe: r, items: portion(r, member, 1) }));
    const assessment = profileAssessment(member), ratios = member?.stage === 'lactating'
      ? { breakfast: .25, lunch: .30, dinner: .30, snack: .15 }
      : { breakfast: .25, lunch: .35, dinner: .30, snack: .10 };
    const ratio = ratios[mealType], finalFactor = positive(factor) ? factor : factor === 0 ? 0 : 1;
    const finish = (calibrated, calibrationNote, targetKcal = null) => {
      const byRecipe = rows.map(row => ({ recipeId: row.recipeId, items: row.items.map(i => ({ foodId: i.foodId, g: valid(i.g) ? clean(i.g * finalFactor) : null })) }));
      return { items: mergeItems(byRecipe.map(row => row.items)), byRecipe, calibrated, calibrationNote, targetKcal: targetKcal === null ? null : clean(targetKcal * finalFactor) };
    };
    if (!assessment.ready) return finish(false, '个人资料或目标未齐，未个性化校准；目前保留配方参考份量。' + assessment.reason);
    if (member?.portionMode === 'manual' || GROUPS.some(group => positive(member?.portionOverrides?.[group]))) return finish(false, '已使用手动份量，不自动按能量改量；请核对全天营养合计。');
    if (!positive(ratio)) return finish(false, '餐次未识别，保留参考份量。');
    if (!rows.length || rows.length !== selected.length || rows.some(row => row.recipe.incomplete || !row.recipe.ingredients.length)) return finish(false, '菜谱原料用量未齐，不能校准；未填写的菜不当作零摄入。');
    const all = nutrition(mergeItems(rows.map(row => row.items)));
    if (all.coverage.kcal !== 1 || !positive(all.values.kcal)) return finish(false, '热量成分或原料用量未齐，暂不校准；已知小计不代表整餐。');
    const target = assessment.energyKcal * ratio;
    const isMainMeal = mealType === 'lunch' || mealType === 'dinner';
    const adjustable = rows.filter(row => {
      const groups = new Set(row.recipe.ingredients.map(i => food(i.foodId)?.group).filter(g => g && g !== 'condiment'));
      return isMainMeal ? row.recipe.category === 'grain' && !groups.has('protein') : row.recipe.category === mealType && groups.size >= 2;
    });
    if (!adjustable.length) return finish(false, isMainMeal ? '本餐没有可调整的纯主食，请加一份主食；不会用加肉补足热量。' : '本餐没有可整体调整的早餐或加餐组合，保留各道参考量并核对全天营养。', target);
    const adjustableKcal = adjustable.reduce((sum, row) => sum + (nutrition(row.items).values.kcal || 0), 0);
    if (!positive(adjustableKcal)) return finish(false, '可调主食或组合的热量为零，不能据此校准，请补充适量主食。', target);
    const required = (target - (all.values.kcal - adjustableKcal)) / adjustableKcal;
    const min = .5, max = isMainMeal ? 2.5 : 2, applied = Math.max(min, Math.min(max, required));
    for (const row of adjustable) row.items = row.items.map(i => ({ foodId: i.foodId, g: clean(i.g * applied) }));
    const actual = nutrition(mergeItems(rows.map(row => row.items))).values.kcal;
    const calibrated = required >= min && required <= max && Math.abs(actual - target) < .5;
    const distribution = member?.stage === 'lactating' ? '早25% / 午30% / 晚30% / 加餐15%' : '早25% / 午35% / 晚30% / 加餐10%';
    const action = isMainMeal ? '只调整主食，肉菜份量不因补热量而增加' : '仅整体调整组合，保持组合中原料的当前配比';
    let note = '按' + distribution + '分配每日维持能量；这是产品排餐假设。' + action + '。';
    if (calibrated) note += '已按本餐能量参考校准；并不代表其他营养素全部达标。';
    else note += '所需调整超出' + min + '—' + max + '倍，已限制调整，未完成校准；本餐与能量参考' + (actual < target ? '仍差约' : '仍超出约') + Math.round(Math.abs(actual - target) * finalFactor) + '千卡，请调整菜式或食材。';
    if (finalFactor !== 1) note += '已另按用户选择的本餐份量倍数调整。';
    return finish(calibrated, note, target);
  }

  function status(value, goal, coverage) {
    if (!valid(value)) return { label: '数据待补充', kind: 'unknown' };
    const g = sanitizeGoal(goal);
    if (coverage !== 1) {
      if (g?.type === 'maximum' && value >= g.max) return { label: '已知部分已达到或超过限量，实际可能更高', kind: 'high' };
      return { label: '数据待补充', kind: 'unknown' };
    }
    if (!g) return { label: '目标待确认', kind: 'unknown' };
    if (g.type === 'minimum') return value < g.min ? { label: '低于参考量', kind: 'low' } : { label: '达到参考量', kind: 'ok' };
    if (g.type === 'maximum') return value >= g.max ? { label: '达到或超过限量', kind: 'high' } : { label: '低于限量', kind: 'ok' };
    if (value < g.min) return { label: '低于个人范围', kind: 'low' };
    if (value > g.max) return { label: '高于个人范围', kind: 'high' };
    return { label: '在个人范围内', kind: 'ok' };
  }

  // Accept either item arrays or nutrition() results; return nutrient-keyed deltas.
  function compare(before, after) {
    const a = Array.isArray(before) ? nutrition(before) : before;
    const b = Array.isArray(after) ? nutrition(after) : after;
    return Object.fromEntries(KEYS.map(key => [key,
      a?.coverage?.[key] === 1 && b?.coverage?.[key] === 1 && valid(a?.values?.[key]) && valid(b?.values?.[key])
        ? clean(b.values[key] - a.values[key]) : null
    ]));
  }

  function roughLog(text) {
    const description = typeof text === 'string' ? text.trim() : '';
    const periods = [
      ['breakfast', /早上|早餐|早饭|早晨|上午/], ['lunch', /中午|午餐|午饭/],
      ['dinner', /晚上|晚餐|晚饭/], ['snack', /下午|加餐|点心/]
    ].filter(([, re]) => re.test(description));
    const result = { description, portionText: '份量未说明', period: periods.length === 1 ? periods[0][0] : null, kcal: null, note: '保留原话；未识别的食物或份量不按零摄入计算。' };
    if (!description) return { ...result, note: '尚未填写饮食记录。' };
    if (/蛋白质\s*\d+(?:\.\d+)?\s*(?:g|克)|\d+(?:\.\d+)?\s*(?:g|克)\s*蛋白质/i.test(description)) return { ...result, note: '蛋白质克数是营养素含量，不能当作等重肉类或食物。' };
    if (/没吃|未吃|没有吃|不知道|不清楚|不确定/.test(description)) return result;
    if (/(?:^|[^\d])[-−－]\s*\d|\d+\s*[/／]\s*\d+|(?:^|[^\d])\.\d+|\d+\s*[-–—~～]\s*\d+/.test(description)) return { ...result, note: '这类数字或范围格式尚未可靠解析，先保留原话，不截取其中一段作为份量。' };
    const exacts = Array.from(description.matchAll(/(\d+(?:\.\d+)?)\s*(g|克|mL|ml|毫升)/g));
    if (exacts.length > 1) return { ...result, note: '这一句话有多项重量，先保留原话，不擅自合并成一道菜。' };
    const numeral = token => ({ 半: .5, 一: 1, 两: 2, 二: 2, 三: 3, 四: 4 }[token] ?? Number(token));
    const units = Array.from(description.matchAll(/(半|一|两|二|三|四|\d+(?:\.\d+)?)\s*(拳头?|小?碗|小?把|个|份|掌)/g));
    if (units.length + exacts.length > 1) return { ...result, note: '这一句话有多项份量，先保留原话，不只取其中一项冒充整笔摄入。' };
    const unitMatch = units[0];
    const palm = description.match(/手掌大小|掌心大小|一手掌|半手掌|手掌大/);
    let weights = null, servingFactor = null;
    if (exacts.length) { result.portionText = exacts[0][0]; const g = Number(exacts[0][1]); if (g > 0) weights = [g, g]; }
    else if (unitMatch) {
      result.portionText = unitMatch[0]; const count = numeral(unitMatch[1]), unit = unitMatch[2];
      if (count > 0) {
        if (unit.includes('拳')) weights = [100 * count, 180 * count];
        else if (unit.includes('碗')) weights = [150 * count, 280 * count];
        else if (unit.includes('把')) weights = [8 * count, 18 * count];
        else if (unit === '个') weights = [130 * count, 220 * count];
        else if (unit === '掌') weights = [80 * count, 140 * count];
        else if (unit === '份') servingFactor = count;
      }
    } else if (palm) { result.portionText = palm[0]; weights = palm[0].includes('半') ? [60, 110] : [120, 220]; }
    if (!weights && servingFactor === null) return result;
    const recipes = data().recipes || [];
    let r = recipes.slice().sort((a, b) => b.name.length - a.name.length).find(row => description.includes(row.name));
    let alias = false;
    if (!r && /酸奶碗|酸奶杯/.test(description)) { r = recipeById('oatcup'); alias = true; }
    if (!r && /鱼香肉丝/.test(description)) r = recipeById('yuxiang');
    let n, energy;
    if (r) {
      const residual = description.replace(r.name, '').replace(alias ? /酸奶碗|酸奶杯/ : /$^/, '').replace(result.portionText, '');
      if (/另外|另配|还吃|再吃|加了|鸡蛋|牛奶|苹果|坚果|鸡肉|牛肉|猪肉|豆腐|米饭|面包|西兰花|秋葵|彩椒|洋葱/.test(residual)) return { ...result, note: '参考菜谱之外还有食物，先保留整句，不把一道菜的热量当作整笔摄入。' };
      if (exacts.length && /ml|毫升/i.test(exacts[0][2])) return { ...result, note: '菜谱只有食材重量，没有成品体积或密度资料；不把毫升直接当克数。' };
      n = nutrition(r.ingredients);
      if (n.coverage.kcal !== 1 || !valid(n.values.kcal)) return { ...result, note: '已找到参考做法，但热量成分资料未齐；保留原话，不用已知小计冒充整道菜。' };
      if (servingFactor !== null) energy = [n.values.kcal / (positive(r.portions) ? r.portions : 1) * servingFactor * .8, n.values.kcal / (positive(r.portions) ? r.portions : 1) * servingFactor * 1.25];
      else {
        // Cold mixed recipes can use edible ingredient mass; heated dishes need a measured cooked yield.
        const cold = ['oatcup', 'yogfruit', 'milkfruit', 'nutsfruit'].includes(r.id);
        const yieldG = positive(r.cookedG) ? r.cookedG : cold ? r.ingredients.reduce((sum, row) => sum + (valid(row.g) ? row.g : 0), 0) : null;
        if (!positive(yieldG)) return { ...result, note: '已找到参考做法；成品熟重未实测，无法把拳头或碗可靠换成该菜份量，先保留粗记。' };
        energy = weights.map((g, i) => g / yieldG * n.values.kcal * (i ? 1.25 : .8));
      }
      result.note = (alias ? '暂以燕麦＋酸奶＋莓果碗作参考，真实配方可不同。' : '按相应标准菜谱作粗略参考。') + '份量、用油、品牌和做法可改变结果；不是实际测量。';
    } else {
      const matches = [
        ['apple', /苹果/], ['nuts', /坚果|核桃|杏仁/], ['yogurt', /酸奶/], ['milk', /牛奶/],
        ['chicken', /鸡肉|鸡胸|鸡丁|鸡丝/], ['beef', /牛肉/], ['pork', /猪肉/], ['salmon', /三文鱼/],
        ['fish', /鱼肉/], ['shrimp', /虾仁|虾肉/], ['tofu', /豆腐/], ['egg', /鸡蛋/]
      ].filter(([, re]) => re.test(description));
      if (matches.length !== 1 || servingFactor !== null) return result;
      const [id] = matches[0], f = food(id), density = f?.nutrients?.kcal;
      if (!valid(density)) return { ...result, note: '食物已辨认，但参考成分数据未齐；保留原话。' };
      if (exacts.length && /ml|毫升/i.test(exacts[0][2]) !== /ml/i.test(f.unit || 'g')) return { ...result, note: '食物基准单位与记录单位不同，缺少密度换算；不把毫升和克数直接互换。' };
      if (unitMatch?.[2] === '个' && id !== 'apple') return { ...result, note: '已保留食物与个数，尚无相应大小换算，不自动套用水果重量。' };
      if (unitMatch?.[2].includes('把') && id !== 'nuts') return result;
      energy = weights.map((g, i) => density * g / 100 * (i ? 1.2 : .85));
      result.note = '按' + f.name + '的参考成分和宽份量范围粗估；食物重量不等于蛋白质等营养素重量，生熟与品牌可能不同。';
    }
    if (energy && energy.every(valid)) result.kcal = [Math.max(0, Math.floor(energy[0] / 10) * 10), Math.ceil(energy[1] / 10) * 10];
    return result;
  }

  host.MealEngine = Object.freeze({ portion, mealPortions, nutrition, mergeItems, score, goals, profileAssessment, status, compare, roughLog });
})(window);
