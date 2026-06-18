"use strict";

const aliasMap = new Map([
  ["西红柿", "番茄"],
  ["番茄", "番茄"],
  ["tomato", "番茄"],
  ["蛋", "鸡蛋"],
  ["鸡蛋", "鸡蛋"],
  ["egg", "鸡蛋"],
  ["豆腐", "豆腐"],
  ["tofu", "豆腐"],
  ["土豆", "土豆"],
  ["马铃薯", "土豆"],
  ["potato", "土豆"],
  ["鸡胸肉", "鸡肉"],
  ["鸡腿", "鸡肉"],
  ["鸡肉", "鸡肉"],
  ["chicken", "鸡肉"],
  ["鸡翅", "鸡翅"],
  ["猪肉", "猪肉"],
  ["肉丝", "猪肉"],
  ["里脊", "猪肉"],
  ["五花肉", "五花肉"],
  ["pork", "猪肉"],
  ["牛肉", "牛肉"],
  ["牛腩", "牛肉"],
  ["beef", "牛肉"],
  ["虾", "虾仁"],
  ["虾仁", "虾仁"],
  ["shrimp", "虾仁"],
  ["鱼", "鱼肉"],
  ["鱼片", "鱼肉"],
  ["青椒", "青椒"],
  ["辣椒", "辣椒"],
  ["尖椒", "辣椒"],
  ["茄子", "茄子"],
  ["黄瓜", "黄瓜"],
  ["胡萝卜", "胡萝卜"],
  ["萝卜", "白萝卜"],
  ["白萝卜", "白萝卜"],
  ["洋葱", "洋葱"],
  ["蘑菇", "蘑菇"],
  ["香菇", "香菇"],
  ["金针菇", "金针菇"],
  ["木耳", "木耳"],
  ["白菜", "白菜"],
  ["娃娃菜", "白菜"],
  ["青菜", "青菜"],
  ["生菜", "生菜"],
  ["菠菜", "菠菜"],
  ["西兰花", "西兰花"],
  ["莲藕", "莲藕"],
  ["藕", "莲藕"],
  ["南瓜", "南瓜"],
  ["苦瓜", "苦瓜"],
  ["豆角", "豆角"],
  ["腐竹", "腐竹"],
  ["豆皮", "豆皮"],
  ["米饭", "米饭"],
  ["剩饭", "米饭"],
  ["饭", "米饭"],
  ["面条", "面条"],
  ["挂面", "面条"],
  ["noodle", "面条"],
  ["粉丝", "粉丝"],
  ["年糕", "年糕"],
  ["排骨", "排骨"],
  ["午餐肉", "午餐肉"],
  ["火腿", "火腿"],
  ["培根", "培根"],
  ["肥牛", "肥牛"],
  ["玉米", "玉米"],
  ["海带", "海带"],
  ["花生", "花生"]
]);

const familyMap = new Map([
  ["鸡翅", ["鸡翅", "鸡肉"]],
  ["五花肉", ["五花肉", "猪肉"]],
  ["香菇", ["香菇", "蘑菇"]],
  ["生菜", ["生菜", "青菜"]],
  ["菠菜", ["菠菜", "青菜"]],
  ["白菜", ["白菜", "青菜"]],
  ["辣椒", ["辣椒", "青椒"]],
  ["肥牛", ["肥牛", "牛肉"]]
]);

const recipes = [
  {
    name: "番茄炒蛋",
    core: ["番茄", "鸡蛋"],
    optional: ["葱"],
    pantry: ["盐", "少量糖"],
    tags: ["家常", "快手", "清淡"],
    time: 12,
    difficulty: "简单",
    steps: ["鸡蛋先炒至凝固盛出", "番茄炒出汁水", "回锅合炒并调味"]
  },
  {
    name: "家常豆腐",
    core: ["豆腐", "青椒"],
    optional: ["猪肉", "木耳"],
    pantry: ["生抽", "蚝油", "蒜"],
    tags: ["家常", "下饭"],
    time: 22,
    difficulty: "普通",
    steps: ["豆腐煎到两面微黄", "配菜炒香", "加调味汁焖到入味"]
  },
  {
    name: "麻婆豆腐",
    core: ["豆腐"],
    optional: ["猪肉"],
    pantry: ["豆瓣酱", "花椒粉", "蒜"],
    tags: ["下饭", "家常"],
    time: 18,
    difficulty: "普通",
    steps: ["豆腐焯水定型", "炒香酱料和肉末", "烧至浓稠后撒花椒粉"]
  },
  {
    name: "青椒肉丝",
    core: ["青椒", "猪肉"],
    optional: ["胡萝卜"],
    pantry: ["生抽", "淀粉", "姜"],
    tags: ["家常", "下饭", "快手"],
    time: 18,
    difficulty: "普通",
    steps: ["肉丝抓淀粉和生抽", "青椒快炒断生", "肉丝回锅合炒"]
  },
  {
    name: "土豆炖牛肉",
    core: ["土豆", "牛肉"],
    optional: ["胡萝卜", "洋葱"],
    pantry: ["生抽", "八角", "姜"],
    tags: ["家常", "下饭"],
    time: 55,
    difficulty: "普通",
    steps: ["牛肉焯水去浮沫", "加香料炖软", "放土豆收汁"]
  },
  {
    name: "鱼香茄子",
    core: ["茄子"],
    optional: ["猪肉", "青椒"],
    pantry: ["豆瓣酱", "醋", "糖", "蒜"],
    tags: ["下饭", "家常"],
    time: 24,
    difficulty: "普通",
    steps: ["茄子煎软", "炒香鱼香料汁", "合炒收至挂汁"]
  },
  {
    name: "宫保鸡丁",
    core: ["鸡肉", "花生"],
    optional: ["黄瓜", "胡萝卜"],
    pantry: ["生抽", "醋", "糖", "干辣椒"],
    tags: ["下饭"],
    time: 26,
    difficulty: "普通",
    steps: ["鸡丁上浆滑炒", "配菜断生", "倒入宫保汁快速翻匀"]
  },
  {
    name: "黄瓜炒蛋",
    core: ["黄瓜", "鸡蛋"],
    optional: ["木耳"],
    pantry: ["盐", "蒜"],
    tags: ["清淡", "快手", "家常"],
    time: 10,
    difficulty: "简单",
    steps: ["鸡蛋炒成大块", "黄瓜片快炒", "合炒后轻调味"]
  },
  {
    name: "西兰花炒虾仁",
    core: ["西兰花", "虾仁"],
    optional: ["胡萝卜"],
    pantry: ["蒜", "盐", "料酒"],
    tags: ["清淡", "快手"],
    time: 16,
    difficulty: "简单",
    steps: ["西兰花焯水", "虾仁炒到变色", "回锅加蒜香调味"]
  },
  {
    name: "蘑菇滑鸡",
    core: ["蘑菇", "鸡肉"],
    optional: ["青椒"],
    pantry: ["生抽", "淀粉", "姜"],
    tags: ["家常", "下饭"],
    time: 24,
    difficulty: "普通",
    steps: ["鸡肉腌制上浆", "蘑菇炒出水汽", "合炒到鸡肉嫩熟"]
  },
  {
    name: "洋葱炒牛肉",
    core: ["洋葱", "牛肉"],
    optional: ["青椒"],
    pantry: ["黑胡椒", "生抽", "淀粉"],
    tags: ["快手", "下饭"],
    time: 18,
    difficulty: "普通",
    steps: ["牛肉薄片腌制", "洋葱炒甜", "大火合炒保持嫩度"]
  },
  {
    name: "蒜蓉生菜",
    core: ["生菜"],
    optional: [],
    pantry: ["蒜", "蚝油", "盐"],
    tags: ["清淡", "快手"],
    time: 8,
    difficulty: "简单",
    steps: ["生菜快速焯或炒", "蒜末炒香", "淋入蚝油汁"]
  },
  {
    name: "菠菜鸡蛋汤",
    core: ["菠菜", "鸡蛋"],
    optional: ["豆腐"],
    pantry: ["盐", "香油"],
    tags: ["清淡", "快手"],
    time: 12,
    difficulty: "简单",
    steps: ["菠菜焯水去涩", "水开淋入蛋液", "加入菠菜调味"]
  },
  {
    name: "番茄豆腐汤",
    core: ["番茄", "豆腐"],
    optional: ["鸡蛋"],
    pantry: ["盐", "白胡椒"],
    tags: ["清淡", "家常"],
    time: 16,
    difficulty: "简单",
    steps: ["番茄炒出红汤", "加水和豆腐煮开", "按口味加蛋花"]
  },
  {
    name: "虾仁炒蛋",
    core: ["虾仁", "鸡蛋"],
    optional: ["葱"],
    pantry: ["盐", "料酒"],
    tags: ["快手", "清淡"],
    time: 12,
    difficulty: "简单",
    steps: ["虾仁去腥腌一下", "蛋液下锅滑散", "合炒到刚熟"]
  },
  {
    name: "酸辣土豆丝",
    core: ["土豆", "辣椒"],
    optional: [],
    pantry: ["醋", "盐", "蒜"],
    tags: ["快手", "下饭"],
    time: 14,
    difficulty: "简单",
    steps: ["土豆丝泡水去淀粉", "辣椒和蒜爆香", "大火快炒加醋"]
  },
  {
    name: "红烧排骨",
    core: ["排骨"],
    optional: ["土豆"],
    pantry: ["冰糖", "生抽", "姜"],
    tags: ["家常", "下饭"],
    time: 50,
    difficulty: "普通",
    steps: ["排骨焯水", "炒糖色并加调味", "小火焖到软烂"]
  },
  {
    name: "莲藕排骨汤",
    core: ["莲藕", "排骨"],
    optional: ["玉米"],
    pantry: ["姜", "盐"],
    tags: ["清淡", "家常"],
    time: 60,
    difficulty: "简单",
    steps: ["排骨焯水", "莲藕切块同炖", "出锅前加盐"]
  },
  {
    name: "白菜豆腐煲",
    core: ["白菜", "豆腐"],
    optional: ["粉丝", "虾仁"],
    pantry: ["生抽", "白胡椒", "蒜"],
    tags: ["清淡", "家常"],
    time: 22,
    difficulty: "简单",
    steps: ["白菜炒软垫底", "加入豆腐和汤汁", "小火煲到入味"]
  },
  {
    name: "蚝油香菇青菜",
    core: ["香菇", "青菜"],
    optional: [],
    pantry: ["蚝油", "蒜", "生抽"],
    tags: ["清淡", "快手"],
    time: 15,
    difficulty: "简单",
    steps: ["青菜焯水摆盘", "香菇炒香", "蚝油汁收浓淋上"]
  },
  {
    name: "茄汁虾仁豆腐",
    core: ["番茄", "虾仁", "豆腐"],
    optional: ["鸡蛋"],
    pantry: ["盐", "番茄酱", "葱"],
    tags: ["家常", "清淡"],
    time: 20,
    difficulty: "普通",
    steps: ["番茄炒成浓汁", "加入豆腐轻煮", "放虾仁煮到变色"]
  },
  {
    name: "鸡蛋炒饭",
    core: ["米饭", "鸡蛋"],
    optional: ["火腿", "青菜", "胡萝卜"],
    pantry: ["盐", "葱"],
    tags: ["快手", "家常"],
    time: 12,
    difficulty: "简单",
    steps: ["米饭打散", "鸡蛋炒香", "配菜和米饭炒到粒粒分明"]
  },
  {
    name: "番茄肉酱面",
    core: ["番茄", "面条", "猪肉"],
    optional: ["洋葱"],
    pantry: ["生抽", "番茄酱", "蒜"],
    tags: ["家常", "下饭"],
    time: 25,
    difficulty: "普通",
    steps: ["肉末和洋葱炒香", "番茄熬成酱", "拌入煮好的面条"]
  },
  {
    name: "肥牛金针菇卷",
    core: ["肥牛", "金针菇"],
    optional: [],
    pantry: ["生抽", "蚝油", "黑胡椒"],
    tags: ["快手", "下饭"],
    time: 18,
    difficulty: "普通",
    steps: ["金针菇卷入肥牛片", "煎至定型", "倒入酱汁焖入味"]
  },
  {
    name: "青椒土豆片",
    core: ["青椒", "土豆"],
    optional: ["猪肉"],
    pantry: ["生抽", "蒜"],
    tags: ["快手", "家常"],
    time: 16,
    difficulty: "简单",
    steps: ["土豆片煎到边缘微焦", "青椒断生", "合炒加生抽"]
  },
  {
    name: "苦瓜炒蛋",
    core: ["苦瓜", "鸡蛋"],
    optional: [],
    pantry: ["盐", "蒜"],
    tags: ["清淡", "快手"],
    time: 14,
    difficulty: "简单",
    steps: ["苦瓜用盐抓一下", "鸡蛋炒成块", "合炒保留清脆"]
  },
  {
    name: "腐竹炒肉",
    core: ["腐竹", "猪肉"],
    optional: ["青椒", "木耳"],
    pantry: ["生抽", "蒜", "淀粉"],
    tags: ["家常", "下饭"],
    time: 24,
    difficulty: "普通",
    steps: ["腐竹泡软切段", "肉片滑炒", "加配菜和腐竹合炒"]
  },
  {
    name: "萝卜炖牛肉",
    core: ["白萝卜", "牛肉"],
    optional: ["香菜"],
    pantry: ["姜", "盐", "白胡椒"],
    tags: ["清淡", "家常"],
    time: 55,
    difficulty: "普通",
    steps: ["牛肉焯水炖软", "加入萝卜块", "炖到萝卜透明"]
  },
  {
    name: "南瓜蒸排骨",
    core: ["南瓜", "排骨"],
    optional: [],
    pantry: ["豆豉", "生抽", "蒜"],
    tags: ["家常"],
    time: 35,
    difficulty: "普通",
    steps: ["排骨腌入底味", "南瓜垫底", "大火蒸到排骨熟透"]
  },
  {
    name: "可乐鸡翅",
    core: ["鸡翅"],
    optional: [],
    pantry: ["可乐", "生抽", "姜"],
    tags: ["家常", "下饭"],
    time: 28,
    difficulty: "简单",
    steps: ["鸡翅煎到表面金黄", "加入可乐和生抽", "收汁到浓亮"]
  },
  {
    name: "鱼香肉丝",
    core: ["猪肉", "胡萝卜", "木耳"],
    optional: ["青椒"],
    pantry: ["豆瓣酱", "醋", "糖", "蒜"],
    tags: ["下饭", "家常"],
    time: 26,
    difficulty: "普通",
    steps: ["肉丝上浆滑炒", "配菜切丝断生", "鱼香汁合炒收亮"]
  },
  {
    name: "木须肉",
    core: ["猪肉", "鸡蛋", "木耳"],
    optional: ["黄瓜", "胡萝卜"],
    pantry: ["生抽", "葱", "姜"],
    tags: ["家常", "下饭"],
    time: 22,
    difficulty: "普通",
    steps: ["鸡蛋炒大块", "肉片滑炒", "木耳和配菜回锅"]
  },
  {
    name: "凉拌黄瓜",
    core: ["黄瓜"],
    optional: ["花生"],
    pantry: ["蒜", "醋", "生抽"],
    tags: ["清淡", "快手"],
    time: 8,
    difficulty: "简单",
    steps: ["黄瓜拍裂切段", "调蒜醋汁", "拌匀后静置入味"]
  },
  {
    name: "蒜香鸡胸肉",
    core: ["鸡肉"],
    optional: ["西兰花"],
    pantry: ["蒜", "黑胡椒", "生抽"],
    tags: ["快手", "清淡"],
    time: 18,
    difficulty: "简单",
    steps: ["鸡肉切片腌制", "煎到两面上色", "加蒜香汁翻匀"]
  },
  {
    name: "青菜鸡蛋面",
    core: ["面条", "鸡蛋", "青菜"],
    optional: ["番茄"],
    pantry: ["盐", "生抽", "香油"],
    tags: ["快手", "清淡"],
    time: 12,
    difficulty: "简单",
    steps: ["面条煮至八成熟", "加入青菜和蛋", "调味后盛出"]
  },
  {
    name: "豆角焖面",
    core: ["豆角", "面条", "猪肉"],
    optional: ["土豆"],
    pantry: ["生抽", "老抽", "蒜"],
    tags: ["家常", "下饭"],
    time: 30,
    difficulty: "普通",
    steps: ["豆角和肉炒香", "加汤汁铺面焖熟", "拌匀收汁"]
  },
  {
    name: "麻辣香锅",
    core: ["土豆", "莲藕"],
    optional: ["午餐肉", "虾仁", "青菜", "金针菇"],
    pantry: ["火锅底料", "蒜", "芝麻"],
    tags: ["下饭"],
    time: 35,
    difficulty: "普通",
    steps: ["食材分批焯熟", "炒香底料", "全部回锅翻炒入味"]
  }
];

const state = {
  ingredients: [],
  lastRecommendations: [],
  lastShoppingList: []
};

const elements = {
  form: document.querySelector("#plannerForm"),
  input: document.querySelector("#ingredientsInput"),
  addButton: document.querySelector("#addIngredientsButton"),
  chips: document.querySelector("#ingredientChips"),
  quickPicks: document.querySelector(".quick-picks"),
  dishCount: document.querySelector("#dishCount"),
  inputError: document.querySelector("#inputError"),
  recommendations: document.querySelector("#recommendations"),
  emptyState: document.querySelector("#emptyState"),
  resultMeta: document.querySelector("#resultMeta"),
  clearButton: document.querySelector("#clearButton"),
  copyMenuButton: document.querySelector("#copyMenuButton"),
  copyShoppingButton: document.querySelector("#copyShoppingButton"),
  shoppingPanel: document.querySelector("#shoppingPanel"),
  shoppingList: document.querySelector("#shoppingList"),
  savedStatus: document.querySelector("#savedStatus")
};

function splitIngredients(value) {
  return value
    .split(/[,\s，、;；/]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeIngredient(raw) {
  const key = raw.trim().toLowerCase();
  return aliasMap.get(key) || raw.trim();
}

function expandIngredient(ingredient) {
  return familyMap.get(ingredient) || [ingredient];
}

function getIngredientSet(items) {
  const set = new Set();
  items.forEach((item) => {
    expandIngredient(normalizeIngredient(item)).forEach((expanded) => set.add(expanded));
  });
  return set;
}

function addIngredients(rawItems) {
  const nextItems = splitIngredients(rawItems)
    .map(normalizeIngredient)
    .filter((item) => item.length > 0);

  nextItems.forEach((item) => {
    if (!state.ingredients.includes(item)) {
      state.ingredients.push(item);
    }
  });

  elements.input.value = "";
  elements.inputError.textContent = "";
  renderIngredients();
  saveState();
}

function renderIngredients() {
  elements.chips.innerHTML = "";
  state.ingredients.forEach((ingredient) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = ingredient;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `移除${ingredient}`);
    removeButton.textContent = "×";
    removeButton.addEventListener("click", () => {
      state.ingredients = state.ingredients.filter((item) => item !== ingredient);
      renderIngredients();
      updateQuickPickState();
      saveState();
    });

    chip.append(removeButton);
    elements.chips.append(chip);
  });

  updateQuickPickState();
}

function updateQuickPickState() {
  document.querySelectorAll("[data-ingredient]").forEach((button) => {
    const ingredient = normalizeIngredient(button.dataset.ingredient || "");
    button.classList.toggle("is-active", state.ingredients.includes(ingredient));
  });
}

function getSelectedRadio(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : "不限";
}

function clampDishCount(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    return 4;
  }
  return Math.min(8, Math.max(1, parsed));
}

function getPreference() {
  return {
    taste: getSelectedRadio("taste"),
    time: getSelectedRadio("time"),
    count: clampDishCount(elements.dishCount.value)
  };
}

function scoreRecipe(recipe, ingredientSet, preference) {
  const coreMatches = recipe.core.filter((item) => ingredientSet.has(item));
  const optionalMatches = recipe.optional.filter((item) => ingredientSet.has(item));
  const missingCore = recipe.core.filter((item) => !ingredientSet.has(item));
  const missingOptional = recipe.optional.filter((item) => !ingredientSet.has(item));
  const hasAnyMatch = coreMatches.length > 0 || optionalMatches.length > 0;

  if (!hasAnyMatch) {
    return null;
  }

  const coreRatio = coreMatches.length / recipe.core.length;
  const timeLimit = preference.time === "不限" ? null : Number(preference.time);
  const tasteBonus = preference.taste !== "不限" && recipe.tags.includes(preference.taste) ? 8 : 0;
  const timeBonus = timeLimit && recipe.time <= timeLimit ? 5 : 0;
  const timePenalty = timeLimit && recipe.time > timeLimit ? Math.ceil((recipe.time - timeLimit) / 10) * 3 : 0;
  const missingPenalty = missingCore.length * 4 + Math.max(0, missingOptional.length - 1);
  const score = coreMatches.length * 18 + optionalMatches.length * 6 + coreRatio * 16 + tasteBonus + timeBonus - timePenalty - missingPenalty;

  return {
    recipe,
    score,
    coreMatches,
    optionalMatches,
    missingCore,
    missingOptional
  };
}

function recommendDishes() {
  const preference = getPreference();
  const ingredientSet = getIngredientSet(state.ingredients);

  return recipes
    .map((recipe) => scoreRecipe(recipe, ingredientSet, preference))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.missingCore.length - b.missingCore.length || a.recipe.time - b.recipe.time)
    .slice(0, preference.count);
}

function createTags(items, className = "") {
  const wrapper = document.createElement("span");
  wrapper.className = "mini-tags";

  if (items.length === 0) {
    const tag = document.createElement("span");
    tag.className = className;
    tag.textContent = "无";
    wrapper.append(tag);
    return wrapper;
  }

  items.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = className;
    tag.textContent = item;
    wrapper.append(tag);
  });

  return wrapper;
}

function createBarLine(label, items, className = "") {
  const line = document.createElement("div");
  line.className = "bar-line";

  const strong = document.createElement("strong");
  strong.textContent = label;

  line.append(strong, createTags(items, className));
  return line;
}

function buildReason(match) {
  const matched = [...match.coreMatches, ...match.optionalMatches];
  const missing = match.missingCore;
  const matchText = matched.length ? `已命中 ${matched.join("、")}` : "命中度较低";
  const missingText = missing.length ? `，补 ${missing.join("、")} 更完整` : "，主食材已经齐";
  return `${matchText}${missingText}。`;
}

function renderRecommendations(matches) {
  elements.recommendations.innerHTML = "";
  elements.emptyState.hidden = matches.length > 0;
  elements.shoppingPanel.hidden = matches.length === 0;

  state.lastRecommendations = matches;
  state.lastShoppingList = collectShoppingList(matches);

  if (matches.length === 0) {
    elements.resultMeta.textContent = state.ingredients.length ? "没有找到合适搭配" : "等待食材";
    renderShoppingList([]);
    return;
  }

  const ingredientText = state.ingredients.join("、");
  elements.resultMeta.textContent = `${ingredientText} · ${matches.length} 道菜`;

  matches.forEach((match) => {
    const { recipe } = match;
    const card = document.createElement("article");
    card.className = "recipe-card";

    const header = document.createElement("header");
    const title = document.createElement("h3");
    title.textContent = recipe.name;
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = Math.max(0, Math.round(match.score));
    header.append(title, badge);

    const meta = document.createElement("div");
    meta.className = "recipe-meta";
    [recipe.difficulty, `${recipe.time} 分钟`, recipe.tags[0]].forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      meta.append(span);
    });

    const reason = document.createElement("p");
    reason.className = "reason";
    reason.textContent = buildReason(match);

    const bars = document.createElement("div");
    bars.className = "ingredient-bars";
    bars.append(
      createBarLine("已具备", [...match.coreMatches, ...match.optionalMatches]),
      createBarLine("需补充", [...match.missingCore, ...recipe.pantry], "missing")
    );

    const steps = document.createElement("ol");
    steps.className = "steps";
    recipe.steps.forEach((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      steps.append(item);
    });

    card.append(header, meta, reason, bars, steps);
    elements.recommendations.append(card);
  });

  renderShoppingList(state.lastShoppingList);
}

function collectShoppingList(matches) {
  const owned = getIngredientSet(state.ingredients);
  const items = new Map();

  matches.forEach((match) => {
    [...match.missingCore, ...match.recipe.pantry].forEach((item) => {
      if (!owned.has(item)) {
        items.set(item, (items.get(item) || 0) + 1);
      }
    });
  });

  return [...items.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"))
    .map(([name, count]) => ({ name, count }));
}

function renderShoppingList(items) {
  elements.shoppingList.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "无需补充";
    elements.shoppingList.append(empty);
    return;
  }

  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.count > 1 ? `${item.name} × ${item.count}` : item.name;
    elements.shoppingList.append(listItem);
  });
}

function handleGenerate() {
  const typed = elements.input.value.trim();
  if (typed) {
    addIngredients(typed);
  }

  if (state.ingredients.length === 0) {
    elements.inputError.textContent = "请至少添加一种主要食材。";
    elements.input.focus();
    return;
  }

  const count = clampDishCount(elements.dishCount.value);
  elements.dishCount.value = String(count);
  const matches = recommendDishes();

  if (matches.length === 0) {
    elements.inputError.textContent = "当前食材没有命中菜谱，可以换成更常见的叫法。";
  } else {
    elements.inputError.textContent = "";
  }

  renderRecommendations(matches);
  saveState();
}

function resetApp() {
  state.ingredients = [];
  state.lastRecommendations = [];
  state.lastShoppingList = [];
  elements.input.value = "";
  elements.inputError.textContent = "";
  elements.dishCount.value = "4";
  document.querySelector('input[name="taste"][value="不限"]').checked = true;
  document.querySelector('input[name="time"][value="不限"]').checked = true;
  renderIngredients();
  renderRecommendations([]);
  saveState();
}

function formatMenuText() {
  if (!state.lastRecommendations.length) {
    return "";
  }

  const lines = ["推荐菜单"];
  state.lastRecommendations.forEach((match, index) => {
    const { recipe } = match;
    lines.push(`${index + 1}. ${recipe.name}：${recipe.time} 分钟，${buildReason(match)}`);
  });

  if (state.lastShoppingList.length) {
    lines.push("", "补充清单");
    state.lastShoppingList.forEach((item) => {
      lines.push(`- ${item.count > 1 ? `${item.name} × ${item.count}` : item.name}`);
    });
  }

  return lines.join("\n");
}

async function copyText(text, button) {
  if (!text) {
    button.textContent = "先生成";
    setTimeout(() => {
      button.textContent = button.dataset.defaultText || "复制";
    }, 1200);
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  const original = button.dataset.defaultText || button.textContent;
  button.dataset.defaultText = original;
  button.textContent = "已复制";
  setTimeout(() => {
    button.textContent = original;
  }, 1200);
}

function saveState() {
  const data = {
    ingredients: state.ingredients,
    dishCount: elements.dishCount.value,
    taste: getSelectedRadio("taste"),
    time: getSelectedRadio("time")
  };
  localStorage.setItem("dish-planner-state", JSON.stringify(data));
  elements.savedStatus.textContent = "已保存";
  window.clearTimeout(saveState.timer);
  saveState.timer = window.setTimeout(() => {
    elements.savedStatus.textContent = "";
  }, 900);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("dish-planner-state") || "{}");
    state.ingredients = Array.isArray(saved.ingredients) ? saved.ingredients : [];
    if (saved.dishCount) {
      elements.dishCount.value = String(clampDishCount(saved.dishCount));
    }
    if (saved.taste) {
      const taste = document.querySelector(`input[name="taste"][value="${saved.taste}"]`);
      if (taste) {
        taste.checked = true;
      }
    }
    if (saved.time) {
      const time = document.querySelector(`input[name="time"][value="${saved.time}"]`);
      if (time) {
        time.checked = true;
      }
    }
  } catch (error) {
    state.ingredients = [];
  }

  renderIngredients();
  if (state.ingredients.length) {
    renderRecommendations(recommendDishes());
  }
}

elements.addButton.addEventListener("click", () => addIngredients(elements.input.value));
elements.form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleGenerate();
});
elements.clearButton.addEventListener("click", resetApp);
elements.copyMenuButton.dataset.defaultText = elements.copyMenuButton.textContent;
elements.copyShoppingButton.dataset.defaultText = elements.copyShoppingButton.textContent;
elements.copyMenuButton.addEventListener("click", () => copyText(formatMenuText(), elements.copyMenuButton));
elements.copyShoppingButton.addEventListener("click", () => {
  const text = state.lastShoppingList.map((item) => (item.count > 1 ? `${item.name} × ${item.count}` : item.name)).join("\n");
  copyText(text, elements.copyShoppingButton);
});

elements.quickPicks.addEventListener("click", (event) => {
  const button = event.target.closest("[data-ingredient]");
  if (!button) {
    return;
  }
  const ingredient = normalizeIngredient(button.dataset.ingredient || "");
  if (state.ingredients.includes(ingredient)) {
    state.ingredients = state.ingredients.filter((item) => item !== ingredient);
  } else {
    state.ingredients.push(ingredient);
  }
  renderIngredients();
  saveState();
});

document.querySelectorAll('input[name="taste"], input[name="time"], #dishCount').forEach((control) => {
  control.addEventListener("change", () => {
    if (state.ingredients.length) {
      renderRecommendations(recommendDishes());
    }
    saveState();
  });
});

loadState();

