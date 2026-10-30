/* Pure reference calculations. No UI, storage, network, diagnosis or medical score.
 * items[].g uses the food entry's per-100 base unit (g; mL for liquid entries).
 * coverage describes available ingredient data, not measurement accuracy.
 */
(function (host) {
  'use strict';
  const KEYS = ['kcal', 'protein', 'carbs', 'fat', 'fiber', 'sodium', 'calcium'];
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
    const groups = member && member.portions || {};
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

  function goals(member) {
    const m = member || {};
    const result = Object.fromEntries(KEYS.map(key => [key, null]));
    const confirmed = m.profileConfirmed === true || m.confirmed === true;
    if (confirmed && valid(m.age) && m.age >= 18 && m.age <= 64 && ['male', 'female'].includes(m.sex) && m.stage === 'adult' && !m.specialDiet) {
      result.protein = { type: 'minimum', min: m.sex === 'male' ? 65 : 55, max: null, source: 'WS/T 578.1-2017：健康成人蛋白质RNI参考，非上限' };
      result.fiber = { type: 'minimum', min: 25, max: null, source: '健康成人膳食纤维25—30g/日参考，非UL' };
      result.sodium = { type: 'maximum', min: null, max: 2000, source: 'WHO成人钠摄入少于2000mg/日；这是限量，不需吃满' };
    }
    for (const key of KEYS) if (own(m.goals, key)) result[key] = sanitizeGoal(m.goals[key]);
    return result;
  }

  function status(value, goal, coverage) {
    if (!valid(value) || coverage !== 1) return { label: '数据待补充', kind: 'unknown' };
    const g = sanitizeGoal(goal);
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

  host.MealEngine = Object.freeze({ portion, nutrition, mergeItems, score, goals, status, compare, roughLog });
})(window);
