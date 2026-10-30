// Public, generic demonstration data only. No personal profiles or health records.
// Nutrients are per 100 g edible portion, or per 100 mL where unit is mL.
// null means unknown; verified marks the provenance of present values, not complete nutrient coverage.
// Recipe weights are reference portions, not individualized dietary prescriptions.
window.MealData = {
  "foods": {
    "rice": {
      "id": "rice",
      "name": "大米",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 350,
        "protein": 7,
        "carbs": 78,
        "fat": 0.8,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:rice",
        "state": "干米，可食部"
      },
      "verified": false
    },
    "oats": {
      "id": "oats",
      "name": "即食燕麦片（干）",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 380,
        "protein": 13,
        "carbs": 63,
        "fat": 7,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:oats",
        "state": "即食燕麦片干重，产品品牌待核对"
      },
      "verified": false
    },
    "bread": {
      "id": "bread",
      "name": "全麦吐司",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 250,
        "protein": 9,
        "carbs": 45,
        "fat": 3.5,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:bread",
        "state": "成品全麦吐司，品牌配方待核对"
      },
      "verified": false
    },
    "ciabatta": {
      "id": "ciabatta",
      "name": "恰巴塔",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 260,
        "protein": 8.5,
        "carbs": 47,
        "fat": 3.5,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:ciabatta",
        "state": "成品恰巴塔，品牌配方待核对"
      },
      "verified": false
    },
    "noodle": {
      "id": "noodle",
      "name": "荞麦面",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 345,
        "protein": 12,
        "carbs": 68,
        "fat": 2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:noodle",
        "state": "干面，荞麦含量和品牌待核对"
      },
      "verified": false
    },
    "corn": {
      "id": "corn",
      "name": "玉米粒",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 96,
        "protein": 3.5,
        "carbs": 19,
        "fat": 1.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:corn",
        "state": "生玉米粒，不含玉米芯"
      },
      "verified": false
    },
    "potato": {
      "id": "potato",
      "name": "土豆",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 77,
        "protein": 2,
        "carbs": 17,
        "fat": 0.1,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:potato",
        "state": "去皮生土豆"
      },
      "verified": false
    },
    "sweetpotato": {
      "id": "sweetpotato",
      "name": "红薯",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": 86,
        "protein": 1.6,
        "carbs": 20,
        "fat": 0.1,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:sweetpotato",
        "state": "生红薯可食部"
      },
      "verified": false
    },
    "fish": {
      "id": "fish",
      "name": "去骨鱼肉",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": 82,
        "protein": 17.8,
        "carbs": 0,
        "fat": 0.7,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:fish",
        "state": "去骨生鱼肉，鱼种待核对"
      },
      "verified": false
    },
    "salmon": {
      "id": "salmon",
      "name": "三文鱼",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": 208,
        "protein": 20,
        "carbs": 0,
        "fat": 13,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:salmon",
        "state": "生三文鱼可食部"
      },
      "verified": false
    },
    "shrimp": {
      "id": "shrimp",
      "name": "去壳虾仁",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": 85,
        "protein": 20,
        "carbs": 0,
        "fat": 0.5,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:shrimp",
        "state": "去壳生虾仁"
      },
      "verified": false
    },
    "chicken": {
      "id": "chicken",
      "name": "去皮鸡肉（通用估算）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": 120,
        "protein": 22.5,
        "carbs": 0,
        "fat": 2.6,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:chicken",
        "state": "去皮生鸡肉通用估值，不代表全部部位"
      },
      "verified": false
    },
    "beef": {
      "id": "beef",
      "name": "瘦牛肉",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": 150,
        "protein": 21,
        "carbs": 0,
        "fat": 7,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:beef",
        "state": "生瘦牛肉，部位待核对"
      },
      "verified": false
    },
    "tofu": {
      "id": "tofu",
      "name": "豆腐（通用估算）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": 80,
        "protein": 8,
        "carbs": 2,
        "fat": 4.5,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:tofu",
        "state": "豆腐通用估值，品种与含水率待核对"
      },
      "verified": false
    },
    "egg": {
      "id": "egg",
      "name": "鸡蛋可食部",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": 144,
        "protein": 12.6,
        "carbs": 0.7,
        "fat": 9.5,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:egg",
        "state": "去壳鸡蛋可食部"
      },
      "verified": false
    },
    "milk": {
      "id": "milk",
      "name": "牛奶",
      "unit": "mL",
      "group": "dairy",
      "nutrients": {
        "kcal": 60,
        "protein": 3.2,
        "carbs": 4.8,
        "fat": 3.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:milk",
        "state": "成品牛奶，每100mL估值，品牌待核对"
      },
      "verified": false
    },
    "yogurt": {
      "id": "yogurt",
      "name": "无糖酸奶",
      "unit": "g",
      "group": "dairy",
      "nutrients": {
        "kcal": 63,
        "protein": 3.5,
        "carbs": 4.7,
        "fat": 3.3,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:yogurt",
        "state": "成品无糖酸奶，每100g估值，品牌待核对"
      },
      "verified": false
    },
    "apple": {
      "id": "apple",
      "name": "苹果可食部",
      "unit": "g",
      "group": "fruit",
      "nutrients": {
        "kcal": 52,
        "protein": 0.3,
        "carbs": 14,
        "fat": 0.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:apple",
        "state": "生苹果可食部"
      },
      "verified": false
    },
    "berries": {
      "id": "berries",
      "name": "莓果",
      "unit": "g",
      "group": "fruit",
      "nutrients": {
        "kcal": 45,
        "protein": 0.7,
        "carbs": 10,
        "fat": 0.3,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:berries",
        "state": "生莓果通用估值，具体品种待核对"
      },
      "verified": false
    },
    "nuts": {
      "id": "nuts",
      "name": "坚果仁",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": 600,
        "protein": 20,
        "carbs": 18,
        "fat": 54,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:nuts",
        "state": "去壳坚果仁通用估值，具体种类待核对"
      },
      "verified": false
    },
    "greens": {
      "id": "greens",
      "name": "青菜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 20,
        "protein": 1.5,
        "carbs": 3,
        "fat": 0.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:greens",
        "state": "生青菜可食部"
      },
      "verified": false
    },
    "broccoli": {
      "id": "broccoli",
      "name": "西兰花（通用估算）",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 34,
        "protein": 2.8,
        "carbs": 6.6,
        "fat": 0.4,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:broccoli",
        "state": "生西兰花旧版通用估值"
      },
      "verified": false
    },
    "tomato": {
      "id": "tomato",
      "name": "番茄",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 18,
        "protein": 0.9,
        "carbs": 3.9,
        "fat": 0.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:tomato",
        "state": "生番茄可食部"
      },
      "verified": false
    },
    "celery": {
      "id": "celery",
      "name": "芹菜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 16,
        "protein": 0.7,
        "carbs": 3,
        "fat": 0.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:celery",
        "state": "生芹菜可食部"
      },
      "verified": false
    },
    "carrot": {
      "id": "carrot",
      "name": "胡萝卜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 41,
        "protein": 0.9,
        "carbs": 9.6,
        "fat": 0.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:carrot",
        "state": "生胡萝卜可食部"
      },
      "verified": false
    },
    "cabbage": {
      "id": "cabbage",
      "name": "大白菜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 16,
        "protein": 1.2,
        "carbs": 3,
        "fat": 0.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:cabbage",
        "state": "生大白菜可食部"
      },
      "verified": false
    },
    "mushroom": {
      "id": "mushroom",
      "name": "菌菇",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 22,
        "protein": 3,
        "carbs": 3,
        "fat": 0.3,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:mushroom",
        "state": "生菌菇通用估值，具体品种待核对"
      },
      "verified": false
    },
    "radish": {
      "id": "radish",
      "name": "白萝卜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 18,
        "protein": 0.6,
        "carbs": 4.1,
        "fat": 0.1,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:radish",
        "state": "生白萝卜可食部"
      },
      "verified": false
    },
    "cauli": {
      "id": "cauli",
      "name": "花菜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 25,
        "protein": 2,
        "carbs": 5,
        "fat": 0.3,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:cauli",
        "state": "生花菜可食部"
      },
      "verified": false
    },
    "waxgourd": {
      "id": "waxgourd",
      "name": "冬瓜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 13,
        "protein": 0.4,
        "carbs": 3,
        "fat": 0.2,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:waxgourd",
        "state": "去皮去籽生冬瓜"
      },
      "verified": false
    },
    "spinach": {
      "id": "spinach",
      "name": "菠菜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 23,
        "protein": 2.9,
        "carbs": 3.6,
        "fat": 0.4,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:spinach",
        "state": "生菠菜可食部"
      },
      "verified": false
    },
    "oil": {
      "id": "oil",
      "name": "植物油",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": 900,
        "protein": 0,
        "carbs": 0,
        "fat": 100,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "通用演示估值，未按具体品种或品牌核验",
        "url": "",
        "id": "demo-v1:oil",
        "state": "植物油通用示例，每100g；具体油种待核对"
      },
      "verified": false
    },
    "lettuceRaw": {
      "id": "lettuceRaw",
      "name": "绿叶生菜（生）",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": 1.36,
        "carbs": null,
        "fat": null,
        "fiber": 1.3,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "USDA FoodData Central；仅已核实字段，缺项未知",
        "url": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/169249/nutrients",
        "id": "FDC 169249",
        "state": "Lettuce, green leaf, raw；SR Legacy；每100g可食部；其余字段未取得"
      },
      "verified": true
    },
    "broccoliRaw": {
      "id": "broccoliRaw",
      "name": "西兰花（生，USDA条目）",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": 2.57,
        "carbs": null,
        "fat": null,
        "fiber": 2.4,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "USDA FoodData Central；仅已核实字段，缺项未知",
        "url": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/747447/nutrients",
        "id": "FDC 747447",
        "state": "Broccoli, raw；Foundation；每100g可食部；其余字段未取得"
      },
      "verified": true
    },
    "chickenBreastRaw": {
      "id": "chickenBreastRaw",
      "name": "去皮去骨鸡胸肉（生）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": null,
        "protein": 22.5,
        "carbs": null,
        "fat": null,
        "fiber": 0,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "USDA FoodData Central；仅已核实字段，缺项未知",
        "url": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/171077/nutrients",
        "id": "FDC 171077",
        "state": "Chicken, broiler or fryers, breast, skinless, boneless, meat only, raw；SR Legacy；纤维0为数据库假定零"
      },
      "verified": true
    },
    "tofuCalciumRaw": {
      "id": "tofuCalciumRaw",
      "name": "普通豆腐（硫酸钙凝固，未烹调）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": null,
        "protein": 8.08,
        "carbs": null,
        "fat": null,
        "fiber": 0.3,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "USDA FoodData Central；仅已核实字段，缺项未知",
        "url": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/172476/nutrients",
        "id": "FDC 172476",
        "state": "Tofu, raw, regular, prepared with calcium sulfate；SR Legacy；不代表所有豆腐"
      },
      "verified": true
    },
    "okra": {
      "id": "okra",
      "name": "秋葵（生）",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 33,
        "protein": 1.93,
        "carbs": 7.45,
        "fat": 0.19,
        "fiber": 3.2,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "USDA FoodData Central；仅已核实字段，缺项未知",
        "url": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/169260/nutrients",
        "id": "FDC 169260",
        "state": "Okra, raw；SR Legacy；每100g可食部；碳水为差减法，包含纤维；钠钙未知"
      },
      "verified": true
    },
    "onion": {
      "id": "onion",
      "name": "洋葱（生）",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 40,
        "protein": 1.1,
        "carbs": 9.34,
        "fat": 0.1,
        "fiber": 1.7,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "USDA FoodData Central；仅已核实字段，缺项未知",
        "url": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/170000/nutrients",
        "id": "FDC 170000",
        "state": "Onions, raw；SR Legacy；每100g可食部；碳水为差减法，包含纤维；钠钙未知"
      },
      "verified": true
    },
    "redpepper": {
      "id": "redpepper",
      "name": "甜红椒（生）",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": 26,
        "protein": 0.99,
        "carbs": 6.03,
        "fat": 0.3,
        "fiber": 2.1,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "USDA FoodData Central；仅已核实字段，缺项未知",
        "url": "https://fdc.nal.usda.gov/fdc-app.html#/food-details/170108/nutrients",
        "id": "FDC 170108",
        "state": "Peppers, sweet, red, raw；SR Legacy；每100g可食部；能量保留官方API的26kcal；钠钙未知"
      },
      "verified": true
    },
    "choysum": {
      "id": "choysum",
      "name": "菜心",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:choysum",
        "state": "生菜心可食部；仅采购候选，营养值待匹配"
      },
      "verified": false
    },
    "kailan": {
      "id": "kailan",
      "name": "芥蓝",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:kailan",
        "state": "生芥蓝可食部；仅采购候选，营养值待匹配"
      },
      "verified": false
    },
    "romaine": {
      "id": "romaine",
      "name": "油麦菜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:romaine",
        "state": "生油麦菜可食部；不可直接套用USDA绿叶生菜数据"
      },
      "verified": false
    },
    "stemlettuce": {
      "id": "stemlettuce",
      "name": "莴笋",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:stemlettuce",
        "state": "去皮生莴笋可食部；采购候选，营养值待匹配"
      },
      "verified": false
    },
    "pumpkin": {
      "id": "pumpkin",
      "name": "南瓜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:pumpkin",
        "state": "生南瓜可食部；品种和淀粉含量差异较大，营养值待匹配，不自动等量替换主食"
      },
      "verified": false
    },
    "garland": {
      "id": "garland",
      "name": "茼蒿",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:garland",
        "state": "生茼蒿可食部；采购候选，营养值待匹配"
      },
      "verified": false
    },
    "hangcabbage": {
      "id": "hangcabbage",
      "name": "杭白菜",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:hangcabbage",
        "state": "生杭白菜可食部；采购候选，营养值待匹配"
      },
      "verified": false
    },
    "citrus": {
      "id": "citrus",
      "name": "柑橘可食部",
      "unit": "g",
      "group": "fruit",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:citrus",
        "state": "去皮去籽果肉；品种未指定，营养值待匹配"
      },
      "verified": false
    },
    "guava": {
      "id": "guava",
      "name": "番石榴可食部",
      "unit": "g",
      "group": "fruit",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "采购候选，尚未匹配营养条目",
        "url": "",
        "id": "pending:guava",
        "state": "生番石榴可食部；品种未指定，营养值待匹配"
      },
      "verified": false
    },
    "almond": {
      "id": "almond",
      "name": "杏仁粉",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "待核对品牌标签的早餐原料",
        "url": "",
        "id": "pending:almond",
        "state": "按包装要求熟制的粉或籽；每100g产品可食部，营养数据未知"
      },
      "verified": false
    },
    "walnut": {
      "id": "walnut",
      "name": "核桃粉",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "待核对品牌标签的早餐原料",
        "url": "",
        "id": "pending:walnut",
        "state": "按包装要求熟制的粉或籽；每100g产品可食部，营养数据未知"
      },
      "verified": false
    },
    "sesame": {
      "id": "sesame",
      "name": "芝麻粉",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "待核对品牌标签的早餐原料",
        "url": "",
        "id": "pending:sesame",
        "state": "按包装要求熟制的粉或籽；每100g产品可食部，营养数据未知"
      },
      "verified": false
    },
    "chia": {
      "id": "chia",
      "name": "奇亚籽",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "待核对品牌标签的早餐原料",
        "url": "",
        "id": "pending:chia",
        "state": "按包装要求熟制的粉或籽；每100g产品可食部，营养数据未知"
      },
      "verified": false
    },
    "flax": {
      "id": "flax",
      "name": "亚麻籽",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "待核对品牌标签的早餐原料",
        "url": "",
        "id": "pending:flax",
        "state": "按包装要求熟制的粉或籽；每100g产品可食部，营养数据未知"
      },
      "verified": false
    },
    "pork": {
      "id": "pork",
      "name": "瘦猪肉（生）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "混合菜演示原料；未匹配可靠成分条目",
        "url": "",
        "id": "pending:pork",
        "state": "去骨生瘦猪肉，部位和脂肪含量待核对"
      },
      "verified": false
    },
    "woodEar": {
      "id": "woodEar",
      "name": "水发木耳（沥水）",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "混合菜演示原料；未匹配可靠成分条目",
        "url": "",
        "id": "pending:woodEar",
        "state": "按包装安全泡发并沥水后的可食部，不可套用干木耳100g数据"
      },
      "verified": false
    },
    "soySauce": {
      "id": "soySauce",
      "name": "酱油",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "混合菜演示原料；未匹配可靠成分条目",
        "url": "",
        "id": "pending:soySauce",
        "state": "具体品牌、钠含量与用量待核对，未知不当零"
      },
      "verified": false
    },
    "vinegar": {
      "id": "vinegar",
      "name": "醋",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "混合菜演示原料；未匹配可靠成分条目",
        "url": "",
        "id": "pending:vinegar",
        "state": "具体品牌标签待核对"
      },
      "verified": false
    },
    "sugar": {
      "id": "sugar",
      "name": "糖",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "混合菜演示原料；未匹配可靠成分条目",
        "url": "",
        "id": "pending:sugar",
        "state": "具体产品待核对；示例用量不等于个人推荐量"
      },
      "verified": false
    },
    "squidRaw": {
      "id": "squidRaw",
      "name": "鱿鱼可食部（生）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:squidRaw",
        "state": "去内脏和不可食部的生鱿鱼；具体品种与成分待核对"
      },
      "verified": false
    },
    "beefBrisketRaw": {
      "id": "beefBrisketRaw",
      "name": "牛腩（生）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:beefBrisketRaw",
        "state": "生牛腩可食部；脂肪比例、修整程度和成分待核对，不能套用瘦牛肉数值"
      },
      "verified": false
    },
    "pomfretRaw": {
      "id": "pomfretRaw",
      "name": "鲳鱼去骨鱼肉（生）",
      "unit": "g",
      "group": "protein",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:pomfretRaw",
        "state": "去骨生鲳鱼可食部；原方整鱼重量未知，应用参考量不等于整鱼重量"
      },
      "verified": false
    },
    "greekYogurtPlain": {
      "id": "greekYogurtPlain",
      "name": "原味希腊酸奶",
      "unit": "g",
      "group": "dairy",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:greekYogurtPlain",
        "state": "成品原味希腊酸奶；具体品牌、是否加糖、脂肪含量及成分待核对，不套用普通酸奶数据"
      },
      "verified": false
    },
    "readyMixedSeeds": {
      "id": "readyMixedSeeds",
      "name": "即食混合种子",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:readyMixedSeeds",
        "state": "选择包装注明可直接食用的混合种子；组成与品牌待核对，不把1包视作固定克数"
      },
      "verified": false
    },
    "tomatoPaste": {
      "id": "tomatoPaste",
      "name": "番茄膏",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:tomatoPaste",
        "state": "番茄膏成品；浓缩程度、配料和品牌营养待核对，不套用生番茄数值"
      },
      "verified": false
    },
    "garlicRaw": {
      "id": "garlicRaw",
      "name": "蒜（生）",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:garlicRaw",
        "state": "去皮生蒜可食部；成分待核对"
      },
      "verified": false
    },
    "gingerRaw": {
      "id": "gingerRaw",
      "name": "姜（生）",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:gingerRaw",
        "state": "生姜可食部；成分待核对"
      },
      "verified": false
    },
    "scallionRaw": {
      "id": "scallionRaw",
      "name": "葱（生）",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:scallionRaw",
        "state": "去根生葱可食部；成分待核对"
      },
      "verified": false
    },
    "salt": {
      "id": "salt",
      "name": "食盐",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:salt",
        "state": "实际称量的食盐；产品钠含量待匹配，不将未知钠当作零"
      },
      "verified": false
    },
    "blackPepper": {
      "id": "blackPepper",
      "name": "黑胡椒",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:blackPepper",
        "state": "黑胡椒粒或现磨黑胡椒；具体产品成分待核对"
      },
      "verified": false
    },
    "basilDried": {
      "id": "basilDried",
      "name": "罗勒碎",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:basilDried",
        "state": "烹调用罗勒碎；干鲜状态与产品成分待核对"
      },
      "verified": false
    },
    "water": {
      "id": "water",
      "name": "饮用水",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:water",
        "state": "烹调加入的饮用水；水中矿物质和全部营养字段保持未匹配状态"
      },
      "verified": false
    },
    "butter": {
      "id": "butter",
      "name": "黄油",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:butter",
        "state": "黄油成品；含盐状态、脂肪含量与品牌标签待核对"
      },
      "verified": false
    },
    "wheatFlour": {
      "id": "wheatFlour",
      "name": "面粉",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:wheatFlour",
        "state": "干面粉；原方未写筋度，具体产品成分待核对"
      },
      "verified": false
    },
    "wholeWheatFlour": {
      "id": "wholeWheatFlour",
      "name": "全麦粉",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:wholeWheatFlour",
        "state": "干全麦粉；具体产品成分待核对"
      },
      "verified": false
    },
    "almondFlour": {
      "id": "almondFlour",
      "name": "杏仁粉",
      "unit": "g",
      "group": "nuts",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:almondFlour",
        "state": "烘焙用杏仁粉；不能套用整粒杏仁数值，产品成分待核对"
      },
      "verified": false
    },
    "honey": {
      "id": "honey",
      "name": "蜂蜜",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:honey",
        "state": "蜂蜜成品；品牌与营养数据待核对"
      },
      "verified": false
    },
    "bakingPowder": {
      "id": "bakingPowder",
      "name": "泡打粉",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:bakingPowder",
        "state": "烘焙泡打粉；品牌配料与钠含量待核对"
      },
      "verified": false
    },
    "cream": {
      "id": "cream",
      "name": "奶油",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:cream",
        "state": "奶油成品；原方未说明品类或脂肪含量，成分待核对"
      },
      "verified": false
    },
    "beetrootPowder": {
      "id": "beetrootPowder",
      "name": "甜菜根粉",
      "unit": "g",
      "group": "veg",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:beetrootPowder",
        "state": "干甜菜根粉；不能套用鲜甜菜根数据，具体产品成分待核对"
      },
      "verified": false
    },
    "levain": {
      "id": "levain",
      "name": "鲁邦种",
      "unit": "g",
      "group": "grain",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:levain",
        "state": "预先备好的鲁邦种；含水率、喂养配比、成熟状态及营养成分待核对"
      },
      "verified": false
    },
    "yeastPowder": {
      "id": "yeastPowder",
      "name": "酵母粉",
      "unit": "g",
      "group": "condiment",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:yeastPowder",
        "state": "烘焙酵母粉；具体产品成分待核对"
      },
      "verified": false
    },
    "driedCranberries": {
      "id": "driedCranberries",
      "name": "蔓越莓干",
      "unit": "g",
      "group": "fruit",
      "nutrients": {
        "kcal": null,
        "protein": null,
        "carbs": null,
        "fat": null,
        "fiber": null,
        "sodium": null,
        "calcium": null
      },
      "source": {
        "label": "应用参考配方原料；营养数据待匹配可靠成分表或品牌标签",
        "url": "",
        "id": "pending:v2:driedCranberries",
        "state": "应用参考配方选蔓越莓干；原方表仅写蔓越莓，糖渍情况与品牌成分待核对"
      },
      "verified": false
    }
  },
  "recipes": [
    {
      "id": "oatcup",
      "name": "隔夜燕麦酸奶杯",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "oats",
          "g": 45
        },
        {
          "foodId": "yogurt",
          "g": 180
        },
        {
          "foodId": "berries",
          "g": 80
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 5,
      "totalMin": 480,
      "steps": [
        "选包装注明可直接食用的即食燕麦，与无糖酸奶拌匀后密封冷藏。",
        "次日加洗净莓果食用；不在室温放置过夜。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "可提前做",
        "常见早餐",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "toast",
      "name": "全麦吐司＋奶＋蛋",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "bread",
          "g": 60
        },
        {
          "foodId": "milk",
          "g": 200
        },
        {
          "foodId": "egg",
          "g": 50
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 8,
      "steps": [
        "鸡蛋蒸熟或煮熟。",
        "吐司复热，搭配牛奶；抹酱按个人需要少量加。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "常见早餐",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "ciabatta",
      "name": "恰巴塔＋奶＋蛋",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "ciabatta",
          "g": 65
        },
        {
          "foodId": "milk",
          "g": 200
        },
        {
          "foodId": "egg",
          "g": 50
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 8,
      "steps": [
        "恰巴塔加热，鸡蛋煮熟。",
        "搭配牛奶；香肠偶尔替换，不设为每日默认。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "常见早餐",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "oatmilk",
      "name": "牛奶燕麦粥",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "oats",
          "g": 45
        },
        {
          "foodId": "milk",
          "g": 250
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 10,
      "totalMin": 10,
      "steps": [
        "燕麦加水煮开。",
        "加入牛奶煮至温热，可另配水果和鸡蛋。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "一锅做",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "cornbreak",
      "name": "玉米＋奶＋蛋",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "corn",
          "g": 130
        },
        {
          "foodId": "milk",
          "g": 200
        },
        {
          "foodId": "egg",
          "g": 50
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 3,
      "totalMin": 20,
      "steps": [
        "玉米与鸡蛋蒸煮至熟透，玉米重量只计可食玉米粒。",
        "搭配牛奶；若使用冷冻熟玉米，按一餐取量充分复热。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "一锅蒸",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "sweetbreak",
      "name": "红薯＋酸奶＋蛋",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "sweetpotato",
          "g": 160
        },
        {
          "foodId": "yogurt",
          "g": 180
        },
        {
          "foodId": "egg",
          "g": 50
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 5,
      "totalMin": 25,
      "steps": [
        "红薯切块与鸡蛋蒸熟。",
        "搭配无糖酸奶。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "rice",
      "name": "原味米饭（可分装）",
      "category": "grain",
      "ingredients": [
        {
          "foodId": "rice",
          "g": 55
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 5,
      "totalMin": 40,
      "steps": [
        "按干米称量，加水煮熟；首次制作称成品总重，之后按实际份数分餐。",
        "需留到后续餐次时，用浅盒按餐分装，及时冷却冷冻；食用前彻底复热。"
      ],
      "prep": {
        "mode": "cooked-frozen"
      },
      "tags": [
        "可分装",
        "生米计量",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "noodle",
      "name": "荞麦汤面",
      "category": "grain",
      "ingredients": [
        {
          "foodId": "noodle",
          "g": 60
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 12,
      "totalMin": 12,
      "steps": [
        "按干面称量，煮熟沥水；实际熟重会随吸水量变化。",
        "另配蛋白质食物和蔬菜，汤与面分开保存；调味按实际用量。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "工作日",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "potato",
      "name": "蒸土豆",
      "category": "grain",
      "ingredients": [
        {
          "foodId": "potato",
          "g": 180
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 4,
      "totalMin": 18,
      "steps": [
        "土豆去皮切块蒸熟，首次制作记录成品重量。",
        "作为主食候选，替换米饭时重算营养，不同时计作一份蔬菜。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "corn",
      "name": "蒸玉米",
      "category": "grain",
      "ingredients": [
        {
          "foodId": "corn",
          "g": 150
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 3,
      "totalMin": 15,
      "steps": [
        "玉米蒸熟，以去芯后的可食玉米粒重量计量。",
        "需冷冻时及时降温，按餐分装密封；取一份彻底复热。"
      ],
      "prep": {
        "mode": "cooked-frozen"
      },
      "tags": [
        "常备",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "sweet",
      "name": "蒸红薯",
      "category": "grain",
      "ingredients": [
        {
          "foodId": "sweetpotato",
          "g": 180
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 4,
      "totalMin": 20,
      "steps": [
        "红薯切块蒸熟，按实际熟重分餐。",
        "需冷冻时及时降温并按餐密封分装；取一份复热，避免反复解冻。"
      ],
      "prep": {
        "mode": "cooked-frozen"
      },
      "tags": [
        "秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "fish",
      "name": "姜葱清蒸鱼",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "fish",
          "g": 120
        },
        {
          "foodId": "oil",
          "g": 3
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 20,
      "steps": [
        "去骨鱼肉铺姜葱蒸至熟透。",
        "少量调味，孩子的鱼肉仔细检查鱼刺。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常做法",
        "一锅蒸",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "shrimp",
      "name": "蒜蓉虾仁",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "shrimp",
          "g": 120
        },
        {
          "foodId": "oil",
          "g": 5
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 10,
      "totalMin": 10,
      "steps": [
        "虾仁沥干，少油炒蒜末。",
        "下虾仁炒至熟透。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常做法",
        "10分钟",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "tomatotofu",
      "name": "番茄炖豆腐",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "tofu",
          "g": 160
        },
        {
          "foodId": "tomato",
          "g": 150
        },
        {
          "foodId": "oil",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 15,
      "steps": [
        "少油炒软番茄，加少量水。",
        "下豆腐炖透，少盐调味。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常做法",
        "一锅做",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "wax",
      "name": "冬瓜豆腐蛋汤",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "waxgourd",
          "g": 150
        },
        {
          "foodId": "tofu",
          "g": 100
        },
        {
          "foodId": "egg",
          "g": 25
        },
        {
          "foodId": "oil",
          "g": 2
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 15,
      "steps": [
        "冬瓜煮软，加入豆腐。",
        "淋入蛋液煮熟，按实际所吃固形物计量。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常做法",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "greens",
      "name": "清炒青菜",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "greens",
          "g": 200
        },
        {
          "foodId": "oil",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 8,
      "steps": [
        "青菜洗净沥干，按一餐用量准备。",
        "按本份油量炒熟现吃，盐或酱料按实际另记，不把未知盐量当零。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "上海秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "broccoli-garlic",
      "name": "蒜蓉西兰花",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "broccoli",
          "g": 200
        },
        {
          "foodId": "oil",
          "g": 4
        },
        {
          "foodId": "garlicRaw",
          "g": 5
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 10,
      "totalMin": 10,
      "steps": [
        "西兰花切小朵洗净，蒜切末。",
        "西兰花焯至将熟后沥水；按本份油量炒香蒜末，放入西兰花炒熟。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true,
      "basisNote": "应用参考配方：西兰花200g、蒜5g、植物油4g；调味另按实际记录，不代表书中菜单的精确配方。"
    },
    {
      "id": "mixedveg",
      "name": "胡萝卜炒菌菇",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "carrot",
          "g": 100
        },
        {
          "foodId": "mushroom",
          "g": 100
        },
        {
          "foodId": "oil",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 12,
      "totalMin": 12,
      "steps": [
        "胡萝卜切薄片，菌菇切片。",
        "少油炒至全部熟透。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "常年易买",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "cabbage",
      "name": "白菜炖菌菇",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "cabbage",
          "g": 160
        },
        {
          "foodId": "mushroom",
          "g": 70
        },
        {
          "foodId": "oil",
          "g": 3
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 6,
      "totalMin": 15,
      "steps": [
        "白菜切段，与菌菇少油略炒。",
        "加少量水炖软。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "秋冬",
        "软烂好入口",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "cauli",
      "name": "番茄烩花菜",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "cauli",
          "g": 140
        },
        {
          "foodId": "tomato",
          "g": 100
        },
        {
          "foodId": "oil",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 15,
      "steps": [
        "花菜切小朵，番茄切块。",
        "少油炒番茄，再加花菜焖熟。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "spinach",
      "name": "菠菜豆腐温拌",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "spinach",
          "g": 180
        },
        {
          "foodId": "tofu",
          "g": 60
        },
        {
          "foodId": "oil",
          "g": 3
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 10,
      "totalMin": 10,
      "steps": [
        "菠菜焯熟沥水，豆腐另行加热。",
        "按本份油量拌匀后及时吃；不作为隔夜凉菜批量备餐。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "milkfruit",
      "name": "牛奶＋水果",
      "category": "snack",
      "ingredients": [
        {
          "foodId": "milk",
          "g": 200
        },
        {
          "foodId": "apple",
          "g": 150
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 2,
      "totalMin": 2,
      "steps": [
        "牛奶按包装保存。",
        "水果洗净切小块，按可食部计量。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "免开火",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "yogfruit",
      "name": "无糖酸奶＋莓果",
      "category": "snack",
      "ingredients": [
        {
          "foodId": "yogurt",
          "g": 150
        },
        {
          "foodId": "berries",
          "g": 80
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 2,
      "totalMin": 2,
      "steps": [
        "选无糖酸奶，水果按包装要求清洗或充分处理。",
        "若用商业冷冻莓果，按包装食用指引处理；需加热的产品不要仅解冻即食。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "常备",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "nutsfruit",
      "name": "水果＋碎坚果",
      "category": "snack",
      "ingredients": [
        {
          "foodId": "apple",
          "g": 150
        },
        {
          "foodId": "nuts",
          "g": 10
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 2,
      "totalMin": 2,
      "steps": [
        "水果洗净切块。",
        "孩子的坚果按咀嚼能力切碎，坐稳吃。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "免开火",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "okra",
      "name": "蒜香秋葵",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "okra",
          "g": 180
        },
        {
          "foodId": "oil",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 10,
      "steps": [
        "秋葵按一餐取量；若用焯水冷冻包，直接加热或按烹调需要短时冷藏解冻。",
        "用本份油量炒至熟透；焯水原料包不能直接按即食菜处理。"
      ],
      "prep": {
        "mode": "blanched-frozen"
      },
      "tags": [
        "冷冻组件",
        "后续需烹调",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "pepperonion",
      "name": "彩椒洋葱快炒",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "redpepper",
          "g": 100
        },
        {
          "foodId": "onion",
          "g": 100
        },
        {
          "foodId": "oil",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 10,
      "steps": [
        "彩椒和洋葱分别洗净切条、沥干；可使用分袋生冻原料。",
        "按本份油量炒熟；冷冻后口感较软，适合热菜。"
      ],
      "prep": {
        "mode": "raw-frozen"
      },
      "tags": [
        "冷冻组件",
        "10分钟",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "pepperchicken",
      "name": "彩椒洋葱鸡丁",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "chicken",
          "g": 100
        },
        {
          "foodId": "redpepper",
          "g": 80
        },
        {
          "foodId": "onion",
          "g": 60
        },
        {
          "foodId": "oil",
          "g": 5
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 12,
      "totalMin": 18,
      "steps": [
        "生冻鸡丁提前放冷藏室解冻，与彩椒洋葱分开处理。",
        "按本份油量先把鸡丁炒熟，再加入彩椒洋葱炒透；不要室温久放解冻。"
      ],
      "prep": {
        "mode": "raw-frozen"
      },
      "tags": [
        "冷冻组件",
        "一锅做",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true
    },
    {
      "id": "oatseedpaste",
      "name": "燕麦坚果糊",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "oats",
          "g": 20
        },
        {
          "foodId": "almond",
          "g": 4
        },
        {
          "foodId": "walnut",
          "g": 4
        },
        {
          "foodId": "sesame",
          "g": 10
        },
        {
          "foodId": "chia",
          "g": 10
        },
        {
          "foodId": "flax",
          "g": 2
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 15,
      "steps": [
        "按一标准份称量；各粉、籽和燕麦先核对包装上的熟制与食用要求。",
        "按各产品要求充分熟制后加水混合，不把需加热的原料直接冲水即食。",
        "这是早餐组件，鸡蛋、奶或其他食物按个人整餐计划另配，不代表全天营养。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "标准份示例",
        "谷物与坚果籽分开计",
        "品牌营养待核对"
      ],
      "estimated": true
    },
    {
      "id": "salmon-pan",
      "name": "香煎三文鱼",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "salmon",
          "g": 120
        },
        {
          "foodId": "oil",
          "g": 3
        },
        {
          "foodId": "salt",
          "g": 0.5
        },
        {
          "foodId": "blackPepper",
          "g": 0.2
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 10,
      "totalMin": 25,
      "steps": [
        "三文鱼擦干，用配方中的盐和黑胡椒调味，放置约10分钟。",
        "平底锅加植物油，先煎鱼皮一面，定型后翻面继续加热。",
        "按鱼块厚度调整火力与时间，确认中心熟透再盛出，另配主食和蔬菜。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常会做",
        "默认候选",
        "熟透做法",
        "应用参考配方",
        "熟重待实测"
      ],
      "estimated": true,
      "sourcePages": [
        12,
        13,
        14
      ],
      "originalIngredients": [
        {
          "name": "三文鱼",
          "amount": 1,
          "unit": "块",
          "quantityText": "一块"
        },
        {
          "name": "黑胡椒粒",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "盐",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "橄榄油",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        }
      ],
      "originalYield": "1块三文鱼的配方；人份未写",
      "sourceIds": [
        "userBook20261030",
        "cfsCookThoroughly"
      ],
      "hasDetailedRecipe": true,
      "defaultEligible": true,
      "basisNote": "应用参考配方，非原方换算：应用按生三文鱼可食部120g和植物油3g记1参考份，盐与黑胡椒也给出示例克数。原书仅写三文鱼1块及调料适量，没有鱼块重量和人份；原书橄榄油改用通用植物油条目。",
      "safetyNote": "肉、鱼、蛋与海鲜均需熟透；参考食安中心的彻底煮熟说明，烹调时间须随食材大小及器具调整。"
    },
    {
      "id": "pork-egg-steamed",
      "name": "肉饼蒸蛋",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "pork",
          "g": 200
        },
        {
          "foodId": "egg",
          "g": 100
        },
        {
          "foodId": "water",
          "g": 80
        },
        {
          "foodId": "soySauce",
          "g": 8
        },
        {
          "foodId": "oil",
          "g": 3
        }
      ],
      "portions": 2,
      "cookedG": null,
      "activeMin": 12,
      "totalMin": 30,
      "steps": [
        "猪肉剁碎，与配方水、酱油和油拌匀，铺成厚薄均匀的肉饼。",
        "打散鸡蛋铺在肉饼上，放入已上汽的蒸锅加盖蒸。",
        "根据肉饼厚度调整蒸制时间，确认肉末和蛋液中心均熟透后分成2份。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常会做",
        "固定配比",
        "一锅蒸",
        "应用参考配方",
        "熟重待实测"
      ],
      "estimated": true,
      "defaultEligible": true,
      "fixedMix": true,
      "sizingGroup": "protein",
      "basisNote": "家常应用参考配方：这组原料做2参考份，保持肉与蛋的配比，不作为个人推荐摄入量；蒸制时间需按自家容器厚度调整。",
      "safetyNote": "肉、鱼、蛋与海鲜均需熟透；参考食安中心的彻底煮熟说明，烹调时间须随食材大小及器具调整。",
      "sourceIds": [
        "cfsCookThoroughly"
      ]
    },
    {
      "id": "celery-squid",
      "name": "芹菜炒鱿鱼",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "squidRaw",
          "g": 200
        },
        {
          "foodId": "celery",
          "g": 240
        },
        {
          "foodId": "oil",
          "g": 8
        },
        {
          "foodId": "garlicRaw",
          "g": 6
        },
        {
          "foodId": "salt",
          "g": 1
        }
      ],
      "portions": 2,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 20,
      "steps": [
        "鱿鱼处理干净、切成方便入口的小块，芹菜洗净切段，生海鲜与蔬菜分开处理。",
        "锅中放植物油炒香蒜末，先将鱿鱼充分加热，再放入芹菜炒熟并调味。",
        "检查鱿鱼内部熟透后分装；本菜只作为手动选择的家常候选。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常候选",
        "尿酸关注",
        "仅手动选择",
        "熟重待实测"
      ],
      "estimated": true,
      "defaultEligible": false,
      "basisNote": "家常应用参考配方，共2参考份；克数仅用于配方计算，不是对某位家庭成员的食用建议。",
      "uricAcidNote": "指南将鱿鱼列不宜，本人不默认安排，家人按各自情况选择。",
      "safetyNote": "指南将鱿鱼列不宜，本人不默认安排，家人按各自情况选择。肉、鱼、蛋与海鲜均需熟透；参考食安中心的彻底煮熟说明，烹调时间须随食材大小及器具调整。",
      "sourceIds": [
        "nhcUricAcid2024",
        "cfsCookThoroughly"
      ]
    },
    {
      "id": "tomato-beef-stew",
      "name": "番茄慢炖牛腩",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "beefBrisketRaw",
          "g": 250
        },
        {
          "foodId": "onion",
          "g": 100
        },
        {
          "foodId": "tomato",
          "g": 150
        },
        {
          "foodId": "tomatoPaste",
          "g": 50
        },
        {
          "foodId": "oil",
          "g": 10
        },
        {
          "foodId": "water",
          "g": 350
        },
        {
          "foodId": "salt",
          "g": 1
        },
        {
          "foodId": "blackPepper",
          "g": 0.5
        },
        {
          "foodId": "basilDried",
          "g": 0.5
        }
      ],
      "portions": 2,
      "cookedG": null,
      "activeMin": 20,
      "totalMin": 100,
      "steps": [
        "牛腩、洋葱和番茄切块，生肉与蔬菜分开处理。",
        "用配方植物油把牛腩表面煎上色，暂时盛出。",
        "原锅炒软洋葱，再炒番茄至出汁，放入牛腩、番茄膏和配方水。",
        "加盖炖至牛肉熟透软烂；锅具和块大小不同，时间可长于参考时长，中途观察水量。",
        "加盐、黑胡椒及罗勒调味，按应用参考分成2份。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "已确认替换",
        "慢炖",
        "默认候选",
        "应用分餐假设",
        "熟重待实测"
      ],
      "estimated": true,
      "sourcePages": [
        15,
        16,
        17
      ],
      "originalIngredients": [
        {
          "name": "牛腩",
          "amount": 250,
          "unit": "g",
          "quantityText": "250 g"
        },
        {
          "name": "洋葱",
          "amount": 100,
          "unit": "g",
          "quantityText": "100 g"
        },
        {
          "name": "番茄",
          "amount": 150,
          "unit": "g",
          "quantityText": "150 g"
        },
        {
          "name": "番茄膏",
          "amount": 50,
          "unit": "g",
          "quantityText": "50 g"
        },
        {
          "name": "黑胡椒粒",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "盐",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "罗勒碎",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "橄榄油",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "水",
          "amount": null,
          "unit": "没过牛肉",
          "quantityText": "加水没过牛肉",
          "qualifier": "步骤中出现，非食材表列项"
        }
      ],
      "originalYield": "食材表人份未写；照片另为500g牛肉的2至3人份",
      "sourceIds": [
        "userBook20261030",
        "cfsCookThoroughly"
      ],
      "hasDetailedRecipe": true,
      "defaultEligible": true,
      "basisNote": "应用参考配方，非原书人份：保留食材表牛腩250g、洋葱100g、番茄150g、番茄膏50g，按应用假设分成2份（每份牛腩原料125g）。植物油、水及调味克数为应用参考，非原方换算。原书照片另用500g牛肉并标2—3人份，不能套到250g配方。牛腩单独建原料，未套用瘦牛肉成分。",
      "safetyNote": "肉、鱼、蛋与海鲜均需熟透；参考食安中心的彻底煮熟说明，烹调时间须随食材大小及器具调整。"
    },
    {
      "id": "lean-beef-salad",
      "name": "瘦牛肉沙拉",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "beef",
          "g": 160
        },
        {
          "foodId": "lettuceRaw",
          "g": 120
        },
        {
          "foodId": "oil",
          "g": 5
        },
        {
          "foodId": "vinegar",
          "g": 5
        },
        {
          "foodId": "salt",
          "g": 0.5
        },
        {
          "foodId": "blackPepper",
          "g": 0.2
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 20,
      "totalMin": 30,
      "steps": [
        "生菜洗净、沥干；生肉与即食蔬菜使用不同的砧板和容器。",
        "牛肉用配方盐与黑胡椒调味，静置约10分钟。",
        "用配方植物油把牛肉煎至中心熟透，切成方便入口的片。",
        "生菜装盘放上牛肉，用配方醋和余下油汁轻拌，及时食用。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "书页详细配方",
        "仅手动选择",
        "熟透做法",
        "应用参考配方",
        "熟重待实测"
      ],
      "estimated": true,
      "sourcePages": [
        6,
        7,
        8
      ],
      "originalIngredients": [
        {
          "name": "蔬菜包",
          "amount": 120,
          "unit": "g",
          "quantityText": "120 g"
        },
        {
          "name": "菲力牛排",
          "amount": 160,
          "unit": "g",
          "quantityText": "160 g",
          "qualifier": "厚切"
        },
        {
          "name": "黑胡椒粒",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "盐",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "橄榄油",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "油醋汁",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        }
      ],
      "originalYield": "原书未明确标注人份",
      "sourceIds": [
        "userBook20261030",
        "cfsCookThoroughly"
      ],
      "hasDetailedRecipe": true,
      "defaultEligible": false,
      "basisNote": "应用参考配方，非原方人份：原书蔬菜包120g、厚切菲力牛排160g，未明确人份。应用改用生菜120g与瘦牛肉通用条目160g，并假设整组为1参考份；植物油、醋、盐和胡椒均为应用克数，不是原书油醋汁的配比换算。原料部位及品牌成分仍待核对。",
      "safetyNote": "肉、鱼、蛋与海鲜均需熟透；参考食安中心的彻底煮熟说明，烹调时间须随食材大小及器具调整。"
    },
    {
      "id": "tomato-pomfret",
      "name": "茄汁鲳鱼",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "pomfretRaw",
          "g": 200
        },
        {
          "foodId": "tomato",
          "g": 300
        },
        {
          "foodId": "garlicRaw",
          "g": 6
        },
        {
          "foodId": "gingerRaw",
          "g": 5
        },
        {
          "foodId": "scallionRaw",
          "g": 5
        },
        {
          "foodId": "oil",
          "g": 6
        },
        {
          "foodId": "salt",
          "g": 1
        },
        {
          "foodId": "water",
          "g": 300
        }
      ],
      "portions": 2,
      "cookedG": null,
      "activeMin": 20,
      "totalMin": 40,
      "steps": [
        "应用配方按去骨鲳鱼肉称量；用葱姜调味，处理时检查残余鱼刺。",
        "番茄去皮切丁，蒜切好；少量油把鱼两面煎至表面定型，暂时取出。",
        "原锅炒软番茄并加入蒜，再放回鱼，加入配方水焖煮。",
        "确认鱼肉内部熟透后加盐调味，分成2份；给孩子食用前再检查鱼刺。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "书页详细配方",
        "仅手动选择",
        "应用参考配方",
        "熟重待实测"
      ],
      "estimated": true,
      "sourcePages": [
        9,
        10,
        11
      ],
      "originalIngredients": [
        {
          "name": "鲳鱼",
          "amount": 1,
          "unit": "条",
          "quantityText": "1 条"
        },
        {
          "name": "番茄",
          "amount": 3,
          "unit": "个",
          "quantityText": "3 个"
        },
        {
          "name": "蒜",
          "amount": 0.5,
          "unit": "个",
          "quantityText": "半个"
        },
        {
          "name": "水",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "姜",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "葱",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "油",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        },
        {
          "name": "盐",
          "amount": null,
          "unit": "适量",
          "quantityText": "适量"
        }
      ],
      "originalYield": "1条鱼的配方；人份未写",
      "sourceIds": [
        "userBook20261030",
        "cfsCookThoroughly"
      ],
      "hasDetailedRecipe": true,
      "defaultEligible": false,
      "basisNote": "应用参考配方，非原方换算：按去骨生鲳鱼肉200g、番茄300g等量化原料做2参考份。原书是鲳鱼1条、番茄3个、蒜半个，均无重量，不能视作上述克数；蒜原单位含义不明。配方水、油、姜葱及盐均为应用参考。",
      "safetyNote": "肉、鱼、蛋与海鲜均需熟透；参考食安中心的彻底煮熟说明，烹调时间须随食材大小及器具调整。"
    },
    {
      "id": "seed-berry-yogurt",
      "name": "混合种子莓果酸奶杯",
      "category": "breakfast",
      "ingredients": [
        {
          "foodId": "greekYogurtPlain",
          "g": 200
        },
        {
          "foodId": "berries",
          "g": 80
        },
        {
          "foodId": "readyMixedSeeds",
          "g": 10
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 5,
      "totalMin": 5,
      "steps": [
        "选原味希腊酸奶，以及包装注明可直接食用的混合种子；需加热的籽类先按包装处理。",
        "鲜莓果洗净沥干；冷冻莓果依包装要求充分处理，不能默认解冻即食。",
        "酸奶入碗，加入称好的莓果和种子，及时食用。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "书页详细配方",
        "仅手动选择",
        "应用参考配方",
        "成分待核对"
      ],
      "estimated": true,
      "sourcePages": [
        18,
        19,
        20
      ],
      "originalIngredients": [
        {
          "name": "希腊酸奶",
          "amount": 200,
          "unit": "g",
          "quantityText": "200 g",
          "qualifier": "步骤写原味"
        },
        {
          "name": "混合种子",
          "amount": 1,
          "unit": "包",
          "quantityText": "1 包"
        },
        {
          "name": "蓝莓",
          "amount": null,
          "unit": "颗",
          "quantityText": "8～10 颗",
          "amountRange": [
            8,
            10
          ]
        },
        {
          "name": "树莓",
          "amount": null,
          "unit": "颗",
          "quantityText": "8～10 颗",
          "amountRange": [
            8,
            10
          ]
        }
      ],
      "originalYield": "1人份",
      "sourceIds": [
        "userBook20261030"
      ],
      "hasDetailedRecipe": true,
      "defaultEligible": false,
      "basisNote": "原书明确为1人份。应用参考配方，非原方换算：保留希腊酸奶200g；应用将莓果定为总重80g、即食混合种子定为10g。原书蓝莓与树莓各8—10颗、种子1包，无相应重量，不能据此换算。应用不加可选蜂蜜；希腊酸奶与混合种子成分未知，不套用普通酸奶或坚果值。"
    },
    {
      "id": "beetroot-pound-cake",
      "name": "甜菜根磅蛋糕",
      "category": "snack",
      "ingredients": [
        {
          "foodId": "butter",
          "g": 70
        },
        {
          "foodId": "sugar",
          "g": 70
        },
        {
          "foodId": "egg",
          "g": 70
        },
        {
          "foodId": "wheatFlour",
          "g": 60
        },
        {
          "foodId": "almondFlour",
          "g": 45
        },
        {
          "foodId": "honey",
          "g": 13
        },
        {
          "foodId": "bakingPowder",
          "g": 2
        },
        {
          "foodId": "cream",
          "g": 40
        },
        {
          "foodId": "beetrootPowder",
          "g": 6
        }
      ],
      "portions": 16,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 60,
      "steps": [
        "面粉、杏仁粉、泡打粉和甜菜根粉混匀后过筛。",
        "黄油融化，与细砂糖、蛋液、蜂蜜和奶油拌匀，再拌入干料。",
        "把面糊分装进两个130×50×50mm小模具，留出膨胀空间。",
        "原方参考170℃烤15分钟，再降至150℃烤约15分钟；结合烤箱检查内部熟成。",
        "冷却后，每个蛋糕按应用假设切成8小片，共16小片；记录实际成品重量，按食用小片数选择。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "烘焙总配方",
        "固定配比",
        "16小片为应用假设",
        "仅手动选择",
        "熟重待实测"
      ],
      "estimated": true,
      "sourcePages": [
        21,
        22,
        23
      ],
      "originalIngredients": [
        {
          "name": "黄油",
          "amount": 70,
          "unit": "g",
          "quantityText": "70 g"
        },
        {
          "name": "细砂糖",
          "amount": 70,
          "unit": "g",
          "quantityText": "70 g"
        },
        {
          "name": "鸡蛋",
          "amount": 70,
          "unit": "g",
          "quantityText": "70 g（一个半鸡蛋）"
        },
        {
          "name": "面粉",
          "amount": 60,
          "unit": "g",
          "quantityText": "60 g"
        },
        {
          "name": "杏仁粉",
          "amount": 45,
          "unit": "g",
          "quantityText": "45 g"
        },
        {
          "name": "蜂蜜",
          "amount": 13,
          "unit": "g",
          "quantityText": "13 g"
        },
        {
          "name": "泡打粉",
          "amount": 2,
          "unit": "g",
          "quantityText": "2 g"
        },
        {
          "name": "奶油",
          "amount": 40,
          "unit": "g",
          "quantityText": "40 g"
        },
        {
          "name": "甜菜根粉",
          "amount": 6,
          "unit": "g",
          "quantityText": "6 g"
        }
      ],
      "originalYield": "2个小磅蛋糕的总配方",
      "sourceIds": [
        "userBook20261030",
        "cfsCookThoroughly"
      ],
      "hasDetailedRecipe": true,
      "defaultEligible": false,
      "fixedMix": true,
      "sizingGroup": "grain",
      "portionLabel": "小片",
      "batchLabel": "2个小磅蛋糕，共16小片（应用切片假设）",
      "basisNote": "原书是2个130×50×50mm小磅蛋糕的总配方，不是1人份。应用保留全部原料克数，假设每个切8小片、总计16小片，因此portions=16；原书没有切片数，实际每片熟重需称量。鸡蛋以70g计，原书旁注约一个半鸡蛋。此甜点不默认加入日常安排。",
      "safetyNote": "鸡蛋面糊需烤熟；冷却及保存按实际环境和食品安全要求处理，不沿用保存条件未说明的过夜指令。"
    },
    {
      "id": "cranberry-chia-bagel",
      "name": "蔓越莓奇亚籽贝果",
      "category": "grain",
      "ingredients": [
        {
          "foodId": "wheatFlour",
          "g": 360
        },
        {
          "foodId": "wholeWheatFlour",
          "g": 40
        },
        {
          "foodId": "salt",
          "g": 6
        },
        {
          "foodId": "water",
          "g": 200
        },
        {
          "foodId": "honey",
          "g": 12
        },
        {
          "foodId": "levain",
          "g": 80
        },
        {
          "foodId": "yeastPowder",
          "g": 1.5
        },
        {
          "foodId": "chia",
          "g": 20
        },
        {
          "foodId": "driedCranberries",
          "g": 20
        }
      ],
      "portions": 8,
      "cookedG": null,
      "activeMin": 30,
      "totalMin": 150,
      "steps": [
        "应用先从配方水中取60g泡润奇亚籽，其余140g留作揉面；这是应用参考处理，原书没有说明泡籽水与面团水的关系。",
        "将面粉、全麦粉、盐、面团用水、蜂蜜、预先备好的鲁邦种和酵母粉揉成团，拌入泡好的奇亚籽与蔓越莓干。",
        "盖住面团，参考在约25℃静置25分钟，分成8份，搓长并接成圈。",
        "整形后继续发酵约40—50分钟，结合面团实际状态检查。",
        "用另备的微沸蜂蜜水将贝果两面各煮约1分钟，沥水后放入烤箱。",
        "参考170℃烤约15分钟，结合自家烤箱确认熟成后冷却；记录实际单个重量。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "烘焙总配方",
        "固定配比",
        "原方8个",
        "仅手动选择",
        "水量待试做"
      ],
      "estimated": true,
      "sourcePages": [
        24,
        25,
        26,
        27
      ],
      "originalIngredients": [
        {
          "name": "面粉",
          "amount": 360,
          "unit": "g",
          "quantityText": "360 g"
        },
        {
          "name": "全麦粉",
          "amount": 40,
          "unit": "g",
          "quantityText": "40 g"
        },
        {
          "name": "盐",
          "amount": 6,
          "unit": "g",
          "quantityText": "6 g"
        },
        {
          "name": "水",
          "amount": 200,
          "unit": "g",
          "quantityText": "200 g（面团）"
        },
        {
          "name": "蜂蜜",
          "amount": 12,
          "unit": "g",
          "quantityText": "12 g"
        },
        {
          "name": "鲁邦种",
          "amount": 80,
          "unit": "g",
          "quantityText": "80 g"
        },
        {
          "name": "酵母粉",
          "amount": 1.5,
          "unit": "g",
          "quantityText": "1.5 g"
        },
        {
          "name": "奇亚籽",
          "amount": 20,
          "unit": "g",
          "quantityText": "20 g"
        },
        {
          "name": "蔓越莓",
          "amount": 20,
          "unit": "g",
          "quantityText": "20 g"
        }
      ],
      "originalYield": "8个贝果的总配方",
      "sourceIds": [
        "userBook20261030",
        "cfsCookThoroughly"
      ],
      "hasDetailedRecipe": true,
      "defaultEligible": false,
      "fixedMix": true,
      "sizingGroup": "grain",
      "portionLabel": "个",
      "batchLabel": "8个贝果",
      "basisNote": "原书明确为8个贝果的总配方，1份在应用中指1个，不等于1人餐量。应用保留表中各项克数；但将200g水作为泡籽和揉面的合计参考水量，并选蔓越莓干，均不是原方换算。原书另加泡籽水量、煮制蜂蜜水比例及鲁邦种含水率未写；需试做核实，未默认安排。不含鲁邦种培养时间。",
      "originalProcessIngredients": [
        {
          "name": "泡奇亚籽用水",
          "quantityText": "用水泡约5分钟",
          "qualifier": "原书没有说明是否包含在面团水200g内"
        },
        {
          "name": "煮贝果用蜂蜜水",
          "quantityText": "微沸蜂蜜水",
          "qualifier": "蜂蜜及水的另行用量未标；不能默认来自面团蜂蜜12g"
        }
      ],
      "processIngredients": [
        {
          "foodId": "water",
          "g": 1000,
          "note": "另备用于煮制的应用参考水，不计作全部吃下的原料"
        },
        {
          "foodId": "honey",
          "g": 20,
          "note": "另备煮制蜂蜜水的应用示例；实际吸收量未知，不计作全部吃下"
        }
      ],
      "processIngredientNote": "煮制用水和蜂蜜为处理介质，单列于processIngredients；吸收量未知，配方营养未计其残留，不能当作已精确校准。",
      "safetyNote": "贝果需烤至内部熟成；原书参数为参考，鲁邦种状态和水量仍待试做核实。"
    }
  ],
  "prepPacks": [
    {
      "id": "green-veg-bags",
      "name": "秋葵与西兰花：分别焯冻",
      "recipeId": "okra",
      "method": "两种分别洗净、切配并按各自方法焯水，立即快速冷却，充分沥干后分袋；可先平铺冻硬再密封贴日期。焯水不等于做成即食菜。",
      "freezeType": "blanched-frozen",
      "portionNote": "秋葵按180g生可食部一份；西兰花按150—200g生可食部分袋。两者分别标注，不混为同一种营养。",
      "useFor": [
        "蒜香秋葵",
        "蒜蓉西兰花"
      ]
    },
    {
      "id": "pepper-onion-bags",
      "name": "彩椒与洋葱：分别生冻",
      "recipeId": "pepperonion",
      "method": "彩椒去蒂去籽切条，洋葱去皮切丁或条，洗后沥干；分别按餐分袋、排出多余空气、密封冷冻。使用时充分烹调。",
      "freezeType": "raw-frozen",
      "portionNote": "本菜一份为甜红椒100g＋洋葱100g；按实际菜谱需要分别取量。冷冻后比鲜品软，适合炒、汤或炖。",
      "useFor": [
        "彩椒洋葱快炒",
        "彩椒洋葱鸡丁"
      ]
    },
    {
      "id": "chicken-bags",
      "name": "鸡肉：按餐分装生冻",
      "recipeId": "pepperchicken",
      "method": "去皮去骨鸡肉切丁或丝，按一餐原料量密封生冻，标明日期和生肉；与蔬菜、熟食分开放置，防止汁液污染。冷藏解冻后烹调至熟透。",
      "freezeType": "raw-frozen",
      "portionNote": "单个标准份以100g生可食鸡肉为示例；多人用量按所选份数合计，不固定套给所有年龄。",
      "useFor": [
        "彩椒洋葱鸡丁"
      ]
    },
    {
      "id": "rice-packs",
      "name": "主食：生米分份，熟饭分盒冷冻",
      "recipeId": "rice",
      "method": "干米按餐称量并干燥密封保存，不必冷冻；煮熟后用小浅盒按餐分装，及时降温冷冻。取一份彻底复热，不把熟饭冷藏留满一周。",
      "freezeType": "cooked-frozen",
      "portionNote": "一标准份原料为干米55g；熟饭重量随吸水量变化，应实测成品后分份，不能把生米克数当熟饭克数。",
      "useFor": [
        "原味米饭（可分装）",
        "工作日便当主食"
      ]
    },
    {
      "id": "sweet-potato-packs",
      "name": "红薯：蒸熟后分装冷冻",
      "recipeId": "sweet",
      "method": "红薯切块蒸熟，及时分装降温并密封冷冻，标明日期；食用时取一餐份量复热，不在室温久放解冻。",
      "freezeType": "cooked-frozen",
      "portionNote": "一标准份原料为红薯180g生可食部；早餐组合用160g，按具体菜谱取量，不能等重替换米饭。",
      "useFor": [
        "蒸红薯",
        "红薯＋酸奶＋蛋"
      ]
    }
  ],
  "sources": [
    {
      "id": "cns2022",
      "label": "中国居民膳食指南2022：核心推荐",
      "url": "https://sfncc.caas.cn/xyyw/79c86454ef84437eb3e0df055deffd56.htm",
      "note": "食物组与营养素分开；成人通用建议不直接套用儿童、孕哺或特殊疾病人群。"
    },
    {
      "id": "fdc",
      "label": "USDA FoodData Central：食材数据说明",
      "url": "https://fdc.nal.usda.gov/Foundation_Foods_Documentation/",
      "note": "按精确条目、生熟状态与每100g可食部匹配；null是未知，部分实读字段不代表完整营养已核验。其余标记为通用演示估值。"
    },
    {
      "id": "faoRecipe",
      "label": "FAO：菜谱营养计算与烹饪留存",
      "url": "https://www.fao.org/4/y4705e/y4705e23.htm",
      "note": "原料可食重、成品重、吸水失水、吸油弃汤与烹饪留存须分别处理；已有熟食条目时避免重复扣减。"
    },
    {
      "id": "dri",
      "label": "NIH：推荐摄入量与可耐受最高摄入量",
      "url": "https://ods.od.nih.gov/healthinformation/nutrientrecommendations.aspx",
      "note": "推荐摄入量不等于安全上限；超过推荐量不等于超过UL，未设UL也不表示可以无限摄入。"
    },
    {
      "id": "freezeMU",
      "label": "密苏里大学农业推广：蔬菜生冻与焯冻",
      "url": "https://extension.missouri.edu/publications/gh1503",
      "note": "秋葵、西兰花先分别焯水冷却沥干；甜椒和切好的成熟洋葱可直接生冻。具体处理依品种和大小。"
    },
    {
      "id": "freezeUMN",
      "label": "明尼苏达大学农业推广：冷冻、质地与解冻安全",
      "url": "https://extension.umn.edu/food/preparing/cooking-at-home/food-preservation/freezing",
      "note": "冷冻不能杀灭所有致病菌；小份密封、正确解冻及充分烹调。冻后质地通常变软。"
    },
    {
      "id": "mealSafetyCN",
      "label": "中国疾控中心：冷藏、冷冻与复热",
      "url": "https://wjw.fujian.gov.cn/ztzl/jkjy/jksh/202603/t20260323_7114629.htm",
      "note": "按餐小份保存，后续餐次需按保存条件分冷藏或冷冻；绿叶菜优先现做，熟菜不能一锅反复加热。"
    },
    {
      "id": "shanghaiAutumn",
      "label": "上海秋播农事：秋冬蔬菜候选",
      "url": "https://www.shanghai.gov.cn/nw17239/20260903/9f7c1b4dbd0e4774a2dc509a662820cc.html",
      "note": "地方农业候选背景，不保证当前门店到货、价格或个人适用性。"
    },
    {
      "id": "shanghaiCitrus",
      "label": "上海农委：沪郊秋冬柑橘",
      "url": "https://nyncw.sh.gov.cn/mtbd/20241115/3ad782a8ee624446b5e13884d894aa3d.html",
      "note": "2024季节背景；不同品种上市时间不同，按当地市场选购。"
    },
    {
      "id": "guangzhouAutumn",
      "label": "广州农业农村局：当地10月蔬菜采购候选",
      "url": "https://nyncj.gz.gov.cn/fw/sjfb/gzscxq/content/post_11053856.html",
      "note": "2026年10月当地市场候选，不把广州季节套到上海。"
    },
    {
      "id": "guangzhouFruit",
      "label": "广州农业农村局：当地水果采购候选",
      "url": "https://nyncj.gz.gov.cn/fw/sjfb/gzscxq/content/post_11067684.html",
      "note": "水果品种与到货随市场变化，不据此承诺整季供货。"
    },
    {
      "id": "userBook20261030",
      "label": "用户提供书页：菜单与7份详细菜谱事实",
      "url": "",
      "note": "用户于2026-10-30提供20张书页照片，仅保留菜名、食材原量、页码及独立简述；照片、附件路径和长原文不公开。书名、作者、ISBN待补充；没有采用书中医学评分或疗效结论。"
    },
    {
      "id": "nhcUricAcid2024",
      "label": "国家卫生健康委：成人高尿酸血症与痛风食养指南（2024年版）",
      "url": "https://www.nhc.gov.cn/sps/c100088/202402/9ba512ba8e314a47a181db11d2fa188d/files/1743476135548_41457.pdf",
      "note": "指南将鱿鱼列不宜，本人不默认安排，家人按各自情况选择。此处仅作候选提醒，不据此生成个人食用克数。"
    },
    {
      "id": "cfsCookThoroughly",
      "label": "香港食物安全中心：食物安全五要点—彻底煮熟",
      "url": "https://www.cfs.gov.hk/sc_chi/consumer_zone/safefood_all/five_keys_apply_cook.html",
      "note": "肉、鱼、蛋与海鲜需彻底煮熟；原书牛排和三文鱼的未全熟做法已改为熟透。时间受厚度、份量和器具影响。"
    }
  ],
  "seasonal": {
    "shanghai": {
      "autumnWinter": [
        "greens",
        "spinach",
        "garland",
        "cauli",
        "celery",
        "hangcabbage",
        "citrus"
      ],
      "note": "上海秋冬采购候选，以当地市场与新鲜程度为准。柑橘为历史季节背景；秋葵、西兰花、彩椒洋葱的冷冻包是常备备餐选项，不统一标成上海10月当季。"
    },
    "guangzhou": {
      "autumnWinter": [
        "choysum",
        "kailan",
        "romaine",
        "stemlettuce",
        "pumpkin",
        "greens",
        "citrus"
      ],
      "note": "广州秋冬采购候选，以当地市场为准；与上海分别安排。菜心、芥蓝、油麦菜等仅录采购候选，尚未匹配的营养值为未知，不按零计。"
    }
  },
  "retiredRecipes": [
    {
      "id": "salmon",
      "name": "柠檬烤三文鱼",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "salmon",
          "g": 100
        },
        {
          "foodId": "oil",
          "g": 2
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 5,
      "totalMin": 25,
      "steps": [
        "鱼肉用柠檬、黑胡椒调味。",
        "烤至中心熟透，另配主食和蔬菜。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "烤箱省心",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true,
      "retired": true
    },
    {
      "id": "chicken",
      "name": "芹菜炒鸡丝",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "chicken",
          "g": 100
        },
        {
          "foodId": "celery",
          "g": 100
        },
        {
          "foodId": "oil",
          "g": 5
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 15,
      "steps": [
        "鸡肉切丝，芹菜切短段，生肉与蔬菜分开处理。",
        "用本份油量将鸡肉炒至熟透，再加入芹菜炒熟。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "家常做法",
        "菜肉同锅",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true,
      "retired": true
    },
    {
      "id": "eggmush",
      "name": "菌菇蒸蛋",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "egg",
          "g": 50
        },
        {
          "foodId": "mushroom",
          "g": 70
        },
        {
          "foodId": "oil",
          "g": 2
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 7,
      "totalMin": 20,
      "steps": [
        "菌菇充分煮熟，蛋液加水后与菌菇拌匀。",
        "蒸至蛋液完全凝固；实际成品重包含加入的水。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "软烂好入口",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true,
      "retired": true
    },
    {
      "id": "beef",
      "name": "萝卜炖瘦牛肉",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "beef",
          "g": 90
        },
        {
          "foodId": "radish",
          "g": 150
        },
        {
          "foodId": "oil",
          "g": 3
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 75,
      "steps": [
        "牛肉切小块，焯后炖至软。",
        "加入萝卜炖透；标为被动烹饪较久。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "周末备餐",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true,
      "retired": true
    },
    {
      "id": "broccolitofu",
      "name": "西兰花豆腐煮",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "broccoliRaw",
          "g": 150
        },
        {
          "foodId": "tofuCalciumRaw",
          "g": 150
        },
        {
          "foodId": "oil",
          "g": 3
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 8,
      "totalMin": 15,
      "steps": [
        "豆腐切块，西兰花用鲜品或按餐分装的焯水冷冻原料。",
        "加少量水煮至熟透，按本份油量调味；此菜钠钙及部分宏量数据未知。"
      ],
      "prep": {
        "mode": "blanched-frozen"
      },
      "tags": [
        "冷冻组件",
        "仅已知营养字段计入",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true,
      "retired": true
    },
    {
      "id": "yuxiang",
      "name": "鱼香肉丝",
      "category": "protein",
      "ingredients": [
        {
          "foodId": "pork",
          "g": 100
        },
        {
          "foodId": "carrot",
          "g": 50
        },
        {
          "foodId": "woodEar",
          "g": 30
        },
        {
          "foodId": "redpepper",
          "g": 40
        },
        {
          "foodId": "oil",
          "g": 6
        },
        {
          "foodId": "soySauce",
          "g": 8
        },
        {
          "foodId": "vinegar",
          "g": 6
        },
        {
          "foodId": "sugar",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 15,
      "totalMin": 20,
      "steps": [
        "猪肉、胡萝卜和甜椒切丝，木耳按包装要求处理后沥水，生肉与蔬菜分开操作。",
        "用本份油量先把肉丝炒熟，再加蔬菜和木耳充分炒熟。",
        "加入实际称量的酱油、醋和糖拌匀；成品熟重、猪肉成分和调味营养待核对，不据菜名推算实际所吃份量。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "通用菜谱演示",
        "混合菜粗记候选",
        "多项营养未知",
        "标准份示例"
      ],
      "estimated": true,
      "retired": true
    },
    {
      "id": "broccoli",
      "name": "蒜香西兰花",
      "category": "veg",
      "ingredients": [
        {
          "foodId": "broccoli",
          "g": 200
        },
        {
          "foodId": "oil",
          "g": 4
        }
      ],
      "portions": 1,
      "cookedG": null,
      "activeMin": 10,
      "totalMin": 10,
      "steps": [
        "西兰花切小朵清洗。",
        "焯熟后少油翻炒。"
      ],
      "prep": {
        "mode": "fresh"
      },
      "tags": [
        "秋冬",
        "标准份示例",
        "熟重待实测"
      ],
      "estimated": true,
      "retired": true
    }
  ],
  "recipeReplacements": {
    "yuxiang": null,
    "salmon": "salmon-pan",
    "chicken": null,
    "eggmush": "pork-egg-steamed",
    "beef": "tomato-beef-stew",
    "broccolitofu": "broccoli-garlic",
    "broccoli": "broccoli-garlic"
  },
  "catalogVersion": 2,
  "bookReferences": [
    {
      "id": "book-ref-001",
      "name": "水煮蛋",
      "category": "breakfast",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-002",
      "name": "杂粮饭",
      "category": "grain",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单食材提示：甜荞麦米、燕麦米、薏苡仁、黑米；没有克数及完整做法，名称已规范。",
      "recipeId": null
    },
    {
      "id": "book-ref-003",
      "name": "清炒油麦菜",
      "category": "veg",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-004",
      "name": "清蒸龙利鱼",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-005",
      "name": "蒜蓉西兰花",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": "broccoli-garlic"
    },
    {
      "id": "book-ref-006",
      "name": "蒸山药",
      "category": "grain",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-007",
      "name": "瘦牛肉沙拉",
      "category": "protein",
      "sourcePages": [
        30,
        34
      ],
      "hasDetailedRecipe": true,
      "notes": "本次另有详细食谱照片；菜名与详细照片对应，份量和步骤以详细照片转录为准。",
      "recipeId": "lean-beef-salad"
    },
    {
      "id": "book-ref-008",
      "name": "清蒸菠菜",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-009",
      "name": "海带蛤蜊汤",
      "category": "protein",
      "sourcePages": [
        30,
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-010",
      "name": "无糖酸奶水果杯",
      "category": "breakfast",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 页30提示无糖酸奶、黑莓、蓝莓、树莓、奇亚籽、核桃，无克数。",
      "recipeId": null
    },
    {
      "id": "book-ref-011",
      "name": "番茄炒蛋",
      "category": "protein",
      "sourcePages": [
        30,
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-012",
      "name": "清炒芦笋",
      "category": "veg",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-013",
      "name": "金枪鱼蔬菜汤",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-014",
      "name": "苦菊沙拉",
      "category": "veg",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-015",
      "name": "天然酵母贝果",
      "category": "grain",
      "sourcePages": [
        30,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 页30注明原味，页38未说明口味；未与有详细做法的蔓越莓奇亚籽贝果合并。",
      "recipeId": null
    },
    {
      "id": "book-ref-016",
      "name": "无糖豆浆",
      "category": "breakfast",
      "sourcePages": [
        30,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-017",
      "name": "钢切燕麦",
      "category": "grain",
      "sourcePages": [
        30,
        32,
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-018",
      "name": "炒红菜头",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-019",
      "name": "清蒸虾仁",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-020",
      "name": "炒蘑菇菠菜",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-021",
      "name": "魔芋面",
      "category": "grain",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-022",
      "name": "番茄牛肉丸汤",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-023",
      "name": "烤老南瓜",
      "category": "grain",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-024",
      "name": "水波蛋",
      "category": "breakfast",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-025",
      "name": "彩椒",
      "category": "veg",
      "sourcePages": [
        30,
        34,
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-026",
      "name": "香菇鸡肉牛肉丁（1:1）",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-027",
      "name": "拌海带丝",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-028",
      "name": "凉拌番茄",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-029",
      "name": "清蒸银鳕鱼",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-030",
      "name": "无糖酸奶杯",
      "category": "breakfast",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 菜单存在不同水果/坚果版本：页30蓝莓、树莓、黑莓、核桃；页32可加奇亚籽及蓝莓/树莓/黑莓；页34有黑莓+核桃+奇亚籽、蓝莓+核桃+亚麻籽粉两版；页36未列配料；页38有蓝莓+核桃、混合莓果+核桃版本。未拆成虚构独立配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-031",
      "name": "清蒸鲈鱼",
      "category": "protein",
      "sourcePages": [
        30,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-032",
      "name": "番茄蛋花汤",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-033",
      "name": "凉拌苦菊",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-034",
      "name": "蒸紫薯",
      "category": "grain",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-035",
      "name": "黑麦三明治",
      "category": "breakfast",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 页30括号提示瘦牛肉、生菜、番茄。",
      "recipeId": null
    },
    {
      "id": "book-ref-036",
      "name": "藜麦牛肉粒",
      "category": "protein",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-037",
      "name": "清炒西兰花",
      "category": "veg",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-038",
      "name": "紫甘蓝沙拉",
      "category": "veg",
      "sourcePages": [
        30,
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-039",
      "name": "拌菠菜（熟）",
      "category": "veg",
      "sourcePages": [
        30
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-040",
      "name": "香煎三文鱼",
      "category": "protein",
      "sourcePages": [
        30,
        32,
        38
      ],
      "hasDetailedRecipe": true,
      "notes": "本次另有详细食谱照片；菜名与详细照片对应，份量和步骤以详细照片转录为准。 页32同类菜单写“煎三文鱼”，作为名称简写合并；清蒸三文鱼保留独立条目。",
      "recipeId": "salmon-pan"
    },
    {
      "id": "book-ref-041",
      "name": "凉拌豆苗",
      "category": "veg",
      "sourcePages": [
        30,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-042",
      "name": "鳕鱼海带汤",
      "category": "protein",
      "sourcePages": [
        30,
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-043",
      "name": "牛油果水波蛋贝果",
      "category": "breakfast",
      "sourcePages": [
        32,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-044",
      "name": "番茄",
      "category": "veg",
      "sourcePages": [
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-045",
      "name": "三文鱼藜麦饭",
      "category": "grain",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-046",
      "name": "牛肉海带苗火锅",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-047",
      "name": "蒸老南瓜",
      "category": "grain",
      "sourcePages": [
        32,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-048",
      "name": "低温煮瘦牛肉",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-049",
      "name": "芦笋炒菇",
      "category": "veg",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-050",
      "name": "炖番茄牛腩菜",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 保留菜单原文；与另有详细照片的番茄慢炖牛腩名称接近，尚未确认同一配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-051",
      "name": "鹰嘴豆蔬菜蛋饼",
      "category": "breakfast",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 页32括号提示鸡蛋、鹰嘴豆泥、胡萝卜丝、菠菜。",
      "recipeId": null
    },
    {
      "id": "book-ref-052",
      "name": "煎青花鱼（待确认）",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "名称识别或组合拆分待确认；只保留菜单候选，不提供猜测份量与做法，不参与自动安排。",
      "recipeId": null,
      "status": "pending-confirmation",
      "requiresConfirmation": true
    },
    {
      "id": "book-ref-053",
      "name": "虾仁西葫芦蒸碗",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-054",
      "name": "豆浆",
      "category": "breakfast",
      "sourcePages": [
        32,
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-055",
      "name": "黄瓜",
      "category": "veg",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-056",
      "name": "混合种子莓果酸奶杯",
      "category": "breakfast",
      "sourcePages": [
        32,
        34,
        36,
        38
      ],
      "hasDetailedRecipe": true,
      "notes": "本次另有详细食谱照片；菜名与详细照片对应，份量和步骤以详细照片转录为准。 仅与同名详细食谱关联；各页其它无糖酸奶杯不能一概当成这份完整食谱。",
      "recipeId": "seed-berry-yogurt"
    },
    {
      "id": "book-ref-057",
      "name": "牛排沙拉碗",
      "category": "protein",
      "sourcePages": [
        32,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-058",
      "name": "藜麦",
      "category": "grain",
      "sourcePages": [
        32,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-059",
      "name": "金针菇鸡蛋汤",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-060",
      "name": "烤紫薯",
      "category": "grain",
      "sourcePages": [
        32,
        34,
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-061",
      "name": "煎鲈鱼",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-062",
      "name": "核桃",
      "category": "snack",
      "sourcePages": [
        32,
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-063",
      "name": "番茄鸡肉汤",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-064",
      "name": "瘦牛肉",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-065",
      "name": "藜麦饭",
      "category": "grain",
      "sourcePages": [
        32,
        34,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名，没有完整配方；名称已规范。",
      "recipeId": null
    },
    {
      "id": "book-ref-066",
      "name": "凉拌菠菜",
      "category": "veg",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-067",
      "name": "鲑鱼炖番茄（待确认）",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "名称识别或组合拆分待确认；只保留菜单候选，不提供猜测份量与做法，不参与自动安排。",
      "recipeId": null,
      "status": "pending-confirmation",
      "requiresConfirmation": true
    },
    {
      "id": "book-ref-068",
      "name": "海带苗银鳕鱼汤",
      "category": "protein",
      "sourcePages": [
        32
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-069",
      "name": "全麦番茄鸡蛋面",
      "category": "grain",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-070",
      "name": "银鳕鱼",
      "category": "protein",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-071",
      "name": "煎银鳕鱼",
      "category": "protein",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-072",
      "name": "黑麦高纤核桃面包",
      "category": "grain",
      "sourcePages": [
        34,
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-073",
      "name": "牛奶",
      "category": "breakfast",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-074",
      "name": "蒜香菠菜炒鸡蛋",
      "category": "protein",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-075",
      "name": "蘑菇炒虾仁",
      "category": "protein",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-076",
      "name": "番茄牛肉意面（全麦）",
      "category": "grain",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-077",
      "name": "烤西兰花",
      "category": "veg",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-078",
      "name": "全麦贝果",
      "category": "grain",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-079",
      "name": "清蒸三文鱼",
      "category": "protein",
      "sourcePages": [
        34,
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-080",
      "name": "金枪鱼沙拉",
      "category": "protein",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-081",
      "name": "鸡腿排",
      "category": "protein",
      "sourcePages": [
        34,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-082",
      "name": "炒牛肝菌",
      "category": "veg",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-083",
      "name": "香煎牛排",
      "category": "protein",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-084",
      "name": "烤芦笋",
      "category": "veg",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-085",
      "name": "虾仁蔬菜沙拉藜麦（待确认）",
      "category": "grain",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "名称识别或组合拆分待确认；只保留菜单候选，不提供猜测份量与做法，不参与自动安排。",
      "recipeId": null,
      "status": "pending-confirmation",
      "requiresConfirmation": true
    },
    {
      "id": "book-ref-086",
      "name": "海带汤",
      "category": "veg",
      "sourcePages": [
        34
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-087",
      "name": "虾皮拌菠菜",
      "category": "veg",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-088",
      "name": "三七叶鸡蛋汤",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-089",
      "name": "鳕鱼炖蛋羹",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-090",
      "name": "人参鸡汤",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-091",
      "name": "魔芋丝拌苦菊",
      "category": "veg",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-092",
      "name": "天麻面蛋花汤（待确认）",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "名称识别或组合拆分待确认；只保留菜单候选，不提供猜测份量与做法，不参与自动安排。",
      "recipeId": null,
      "status": "pending-confirmation",
      "requiresConfirmation": true
    },
    {
      "id": "book-ref-093",
      "name": "鹰嘴豆",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-094",
      "name": "红枣",
      "category": "snack",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-095",
      "name": "清炖牛肉汤",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-096",
      "name": "菠菜炒鸡蛋",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-097",
      "name": "魔芋银鳕鱼汤",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-098",
      "name": "蒸鸡蛋羹",
      "category": "breakfast",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-099",
      "name": "冬瓜虾仁汤",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-100",
      "name": "蒸鸡肉丸",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-101",
      "name": "清炒苦菊",
      "category": "veg",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-102",
      "name": "番茄鸡蛋汤",
      "category": "protein",
      "sourcePages": [
        36,
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-103",
      "name": "虾仁",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-104",
      "name": "银鳕鱼三七叶汤",
      "category": "protein",
      "sourcePages": [
        36
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-105",
      "name": "海带鸡蛋汤",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-106",
      "name": "炒菠菜",
      "category": "veg",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-107",
      "name": "番茄牛腩汤",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 与炖番茄牛腩菜、番茄慢炖牛腩分别保留，不擅自认定做法相同。",
      "recipeId": null
    },
    {
      "id": "book-ref-108",
      "name": "虾仁银鳕鱼蒸碗",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-109",
      "name": "无糖黑豆浆",
      "category": "breakfast",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-110",
      "name": "香煎鸡胸肉",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-111",
      "name": "冬瓜银鳕鱼汤",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-112",
      "name": "烤红薯",
      "category": "grain",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-113",
      "name": "橄榄油汁",
      "category": "veg",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 页38为牛排沙拉碗的调味搭配；是酱汁候选，非独立蔬菜菜肴。",
      "recipeId": null
    },
    {
      "id": "book-ref-114",
      "name": "虾仁鸡蛋汤",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-115",
      "name": "海带银鳕鱼汤",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-116",
      "name": "香蕉",
      "category": "snack",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。 原菜单仅列食材/食物名，烹法或加工状态未说明。",
      "recipeId": null
    },
    {
      "id": "book-ref-117",
      "name": "清蒸鳕鱼",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    },
    {
      "id": "book-ref-118",
      "name": "番茄银鳕鱼汤",
      "category": "protein",
      "sourcePages": [
        38
      ],
      "hasDetailedRecipe": false,
      "notes": "仅见菜单菜名；参考做法待确认，拟用家常参考配方。",
      "recipeId": null
    }
  ],
  "bookImportSummary": {
    "photoCount": 20,
    "menuItemCount": 118,
    "detailedRecipeCount": 7,
    "uncertainCount": 4,
    "detailedRecipeIds": [
      "salmon-pan",
      "tomato-beef-stew",
      "lean-beef-salad",
      "tomato-pomfret",
      "seed-berry-yogurt",
      "beetroot-pound-cake",
      "cranberry-chia-bagel"
    ],
    "sourceMenuPages": [
      30,
      32,
      34,
      36,
      38
    ],
    "notes": "20张用户提供照片整理为118个菜单候选和7份详细食谱事实；书页照片不公开。菜单候选没有完整份量与做法，只有精确对应的名称关联已整理详细条目；4处名称或拆分待确认。没有移入书中医学评分或疗效结论。"
  }
};
