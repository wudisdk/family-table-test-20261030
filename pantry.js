/* Family pantry. Quantities on labels are per 100 g / 100 mL; unknown stays null. */
(function (host) {
  'use strict';
  const groups = { grain: '主食 / 碳水', protein: '鱼肉蛋豆', dairy: '奶 / 芝士', veg: '蔬菜', fruit: '水果', nuts: '坚果种子', condiment: '调料 / 油酱', other: '其他食材' };
  const nutrients = { kcal: ['能量', '千卡'], protein: ['蛋白质', 'g'], carbs: ['碳水化合物', 'g'], fat: ['脂肪', 'g'], fiber: ['膳食纤维', 'g'], sodium: ['钠', 'mg'], calcium: ['钙', 'mg'], saturatedFat: ['饱和脂肪', 'g'] };
  const h = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const button = (label, attrs, cls = '') => `<button type="button" class="${cls}" ${attrs}>${label}</button>`;
  const finite = value => typeof value === 'number' && Number.isFinite(value) && value >= 0;
  const uid = prefix => `custom-${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  function classify(name) {
    if (/油醋|沙拉[汁酱]|芝麻[汁酱]|黑椒汁|黑胡椒汁|调味|酱油|菜籽油|橄榄油|牛油果油|食用油|黑椒酱|醋|椒汁/.test(name)) return 'condiment';
    if (/牛奶|羊奶|酸奶|奶酪|芝士|乳饮/.test(name)) return 'dairy';
    if (/面包|麦片|燕麦|面条|肉酱面|意[大利式]*面|杂粮|米饭|大米|糙米|贝果|馒头|玉米|红薯|紫薯|山药|土豆/.test(name)) return 'grain';
    if (/牛肉|猪肉|鸡|鸭|鱼|虾|蟹|蛋|豆腐|豆干|鳝|鱿鱼|肉片|牛排/.test(name)) return 'protein';
    if (/核桃|杏仁|腰果|花生|坚果|奇亚|芝麻|亚麻籽/.test(name)) return 'nuts';
    if (/苹果|香蕉|莓|橘|橙子|柚|葡萄|梨|桃|西瓜|牛油果/.test(name)) return 'fruit';
    if (/青菜|西兰花|菠菜|苋菜|米苋|香菇|菌菇|芹菜|彩椒|黄瓜|番茄|洋葱|白菜|萝卜|生菜|秋葵/.test(name)) return 'veg';
    return 'other';
  }
  function create(api) {
    let category = 'all', query = '', editingId = null;
    const foods = () => api.getFoods();
    const pantry = () => api.getHouse().pantry;
    const item = id => pantry().find(row => row.id === id);
    function catalogFood(entry, foodId) {
      const n = entry.nutrients || entry.nutrition || {}, values = {};
      for (const key of Object.keys(nutrients)) { const value = key === 'carbs' ? (n.carbs ?? n.carb) : n[key]; values[key] = finite(value) ? value : null; }
      const ref = (entry.sourceRefs || []).find(ref => /^https?:\/\//.test(ref.url || ''));
      return { id: foodId, name: entry.name, group: groups[entry.group] ? entry.group : classify(entry.name), unit: /^(ml|mL)$/i.test(entry.unit) ? 'mL' : 'g', nutrients: values,
        verified: entry.verifiedStatus === 'verified_label', source: { label: entry.verifiedStatus === 'verified_label' ? '已核对的产品营养标签' : '品牌型号或营养标签待核对', url: ref?.url || '', id: 'pantry:' + entry.id, state: '产品标签每100g或100mL；不代表烹调后留存' },
        verifiedStatus: entry.verifiedStatus || 'needs_label_confirmation', sourceRefs: entry.sourceRefs || [], ingredientsText: entry.ingredientsText || '', healthNote: entry.healthNote || '', portionNote: entry.portionNote || '', genericFoodId: entry.genericFoodId || null };
    }
    function ensure() {
      const house = api.getHouse(); let changed = false;
      if (!house.customFoods) { house.customFoods = {}; changed = true; }
      if (!Array.isArray(house.pantry)) {
        house.pantry = (host.MealData.pantryCatalog || []).map(entry => { const foodId = uid('pantry-food'); const food = catalogFood(entry, foodId); house.customFoods[foodId] = food;
          return { id: uid('pantry'), catalogId: entry.id, name: entry.name, group: food.group, foodId, status: 'available', note: entry.packageNote || '' }; });
        changed = true;
      }
      for (const row of house.pantry) { if (house.customFoods[row.foodId]) foods()[row.foodId] = house.customFoods[row.foodId]; }
      if (changed) api.save();
      return house.pantry;
    }
    function statusText(food) { return food?.verifiedStatus === 'verified_label' ? '已核对标签' : food?.verifiedStatus === 'user_label' ? '按你填写的标签估算' : '标签待核对'; }
    function panel() {
      ensure();
      return `<section class="panel stack" data-pantry-root><div class="row"><div><h2>家里常备</h2><p class="tiny">${pantry().filter(row => row.status !== 'out').length}样有货 · 用完点一下，补货再点回来</p></div>${button('添加食材', 'data-pantry-add', 'primary')}</div>
        <div class="form-grid"><input class="input" id="pantry-search" type="search" placeholder="搜索食材、品牌或口味" value="${h(query)}" aria-label="搜索常备食材"><select class="select" id="pantry-category" aria-label="常备食材分类"><option value="all">全部分类</option>${Object.entries(groups).map(([id, label]) => `<option value="${id}" ${category === id ? 'selected' : ''}>${label}</option>`).join('')}</select></div>
        <div data-pantry-list>${pantry().map(row => { const food = foods()[row.foodId], show = (category === 'all' || row.group === category) && (!query || row.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
          return `<div class="check-row" data-pantry-row data-pantry-name="${h(row.name.toLocaleLowerCase())}" data-pantry-group="${h(row.group)}" ${show ? '' : 'hidden'}><div style="min-width:0;flex:1"><strong>${h(row.name)}</strong><p class="tiny">${h(groups[row.group] || groups.other)} · ${row.status === 'out' ? '已吃完' : '家里有'} · ${statusText(food)}</p>${row.note ? `<p class="tiny">${h(row.note)}</p>` : ''}</div><div class="wrap">${button(row.status === 'out' ? '补货了' : '吃完了', `data-pantry-toggle="${h(row.id)}"`, row.status === 'out' ? 'small' : 'ghost small')}${button('详情 / 标签', `data-pantry-edit="${h(row.id)}"`, 'ghost small')}</div></div>`;
        }).join('')}</div><p class="tiny" data-pantry-empty ${pantry().some(row => (category === 'all' || row.group === category) && (!query || row.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))) ? 'hidden' : ''}>没有找到；可以直接添加名字。</p>
        <p class="tiny">有货标记是采购参考，不会自动扣库存。调料油酱不单独生成采购项；用量仍计入配方营养。标签未核对的食品保留未知，不能凭品牌名算出精确营养。</p></section>`;
    }
    function editor(id = null) {
      ensure(); editingId = id;
      const row = id ? item(id) : null, food = row ? foods()[row.foodId] : null;
      const refs = (food?.sourceRefs || []).filter(ref => /^https?:\/\//.test(ref.url || ''));
      api.showSheet(row ? '常备食材与标签' : '添加常备食材', `<label class="field">食材 / 品牌名称<input class="input" id="pantry-name" maxlength="90" value="${h(row?.name || '')}" placeholder="例如：家里的钢切麦片"></label><p class="tiny">直接填名字即可保存，分类会自动识别。</p><details><summary>数量、分类和营养标签（可稍后补）</summary><div class="form-grid"><label class="field">分类<select class="select" id="pantry-edit-group"><option value="auto">自动识别</option>${Object.entries(groups).map(([key, label]) => `<option value="${key}" ${row?.group === key ? 'selected' : ''}>${label}</option>`).join('')}</select></label><label class="field">标签按哪种单位<select class="select" id="pantry-unit"><option value="g">每100g</option><option value="mL" ${food?.unit === 'mL' ? 'selected' : ''}>每100mL</option></select></label></div><label class="field">规格或剩余量备注<input class="input" id="pantry-note" maxlength="200" placeholder="例如：450g一包，剩半包" value="${h(row?.note || '')}"></label><p class="tiny">照包装的每100g / 每100mL填写；不知道就留空。不要将每份数值填在这里。</p><div class="form-grid">${Object.entries(nutrients).map(([key, [name, unit]]) => `<label class="field">${name}${key !== 'kcal' ? '（' + unit + '）' : ''}<input class="input" id="pantry-n-${key}" type="number" min="0" step="any" value="${finite(food?.nutrients?.[key]) ? food.nutrients[key] : ''}" placeholder="未知留空">${key === 'kcal' ? '<select class="select" id="pantry-energy-unit"><option value="kcal">千卡 kcal</option><option value="kJ">千焦 kJ</option></select>' : ''}</label>`).join('')}</div><label class="field">配料表（可选）<textarea class="input" id="pantry-ingredients" maxlength="2000" rows="3" placeholder="可照包装填写">${h(food?.ingredientsText || '')}</textarea></label></details>${food ? `<section class="notice tiny"><strong>${statusText(food)}</strong><p>${h(food.healthNote || '先结合实际配料和标签判断，不凭商品名称判断健康程度。')}</p>${food.portionNote ? `<p>${h(food.portionNote)}</p>` : ''}${refs.map(ref => `<p><a href="${h(ref.url)}" target="_blank" rel="noopener noreferrer">${h(ref.title || '查看标签来源')}</a></p>`).join('')}<p>修改品牌或营养会另存一个食材版本，过去餐单使用的旧资料保留。要让旧菜谱改用新标签，请在菜谱中调整食材。</p></section>` : ''}`, button('保存常备食材', 'data-pantry-save', 'primary'));
    }
    function saveEditor() {
      const value = id => document.getElementById(id)?.value ?? '';
      const name = value('pantry-name').trim().slice(0, 90);
      if (!name) { api.notify('先填食材名称。'); return; }
      const values = {};
      for (const key of Object.keys(nutrients)) { const raw = value('pantry-n-' + key).trim(), n = Number(raw); if (raw && (!Number.isFinite(n) || n < 0 || n > (['sodium', 'calcium'].includes(key) ? 100000 : key === 'kcal' ? 4000 : 100))) { api.notify('请检查标签数值；营养按每100g或每100mL填写。'); return; } values[key] = raw === '' ? null : n; }
      if (values.kcal !== null && value('pantry-energy-unit') === 'kJ') values.kcal = Math.round(values.kcal / 4.184 * 100) / 100;
      const group = value('pantry-edit-group') === 'auto' ? classify(name) : value('pantry-edit-group'), unit = value('pantry-unit') === 'mL' ? 'mL' : 'g', note = value('pantry-note').trim().slice(0, 200), ingredientsText = value('pantry-ingredients').trim().slice(0, 2000);
      const house = api.getHouse(), row = editingId ? item(editingId) : null, oldFood = row ? foods()[row.foodId] : null;
      const changed = !oldFood || oldFood.name !== name || oldFood.group !== group || oldFood.unit !== unit || oldFood.ingredientsText !== ingredientsText || Object.keys(nutrients).some(key => (oldFood.nutrients[key] ?? null) !== values[key]);
      let foodId = row?.foodId;
      if (changed) { foodId = uid('pantry-food'); const hasLabel = Object.values(values).some(finite); const food = { ...(oldFood || {}), id: foodId, name, group: groups[group] ? group : 'other', unit, nutrients: values, verified: false, verifiedStatus: hasLabel ? 'user_label' : 'needs_label_confirmation', source: { label: hasLabel ? '用户填写的包装标签，未独立核验' : '尚未填写营养标签', url: '', id: 'pantry-user:' + foodId, state: '每100' + unit }, sourceRefs: [], ingredientsText, healthNote: '配料、盐糖和油的用量还要结合整餐及全天安排；商品名称不能代替营养标签。', portionNote: '' }; house.customFoods[foodId] = food; foods()[foodId] = food; }
      if (row) Object.assign(row, { name, group: groups[group] ? group : 'other', foodId, note });
      else pantry().push({ id: uid('pantry'), name, group: groups[group] ? group : 'other', foodId, note, status: 'available' });
      api.save(); api.closeSheet(); api.render(); api.notify(changed && oldFood ? '新标签已保存；过去菜谱的食材资料保留。' : '常备食材已保存。');
    }
    function filterRows() {
      const root = document.querySelector('[data-pantry-root]'); if (!root) return;
      let visible = 0;
      root.querySelectorAll('[data-pantry-row]').forEach(row => { const show = (category === 'all' || row.dataset.pantryGroup === category) && (!query || row.dataset.pantryName.includes(query.toLocaleLowerCase())); row.hidden = !show; if (show) visible++; });
      const empty = root.querySelector('[data-pantry-empty]'); if (empty) empty.hidden = visible > 0;
    }
    function click(target) {
      if (target.hasAttribute('data-pantry-add')) { editor(); return true; }
      if (target.dataset.pantryEdit) { editor(target.dataset.pantryEdit); return true; }
      if (target.dataset.pantryToggle) { ensure(); const row = item(target.dataset.pantryToggle); if (row) { row.status = row.status === 'out' ? 'available' : 'out'; api.save(); api.render(); } return true; }
      if (target.hasAttribute('data-pantry-save')) { saveEditor(); return true; }
      return false;
    }
    function input(target) { if (target.id === 'pantry-search') { query = target.value.trim().slice(0, 100); filterRows(); return true; } return false; }
    function change(target) { if (target.id === 'pantry-category') { category = groups[target.value] ? target.value : 'all'; filterRows(); return true; } return false; }
    return { panel, click, change, input, ensure };
  }
  host.PantryUI = { create, classify };
})(window);
