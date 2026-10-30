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
      "estimated": true
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
      "estimated": true
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
      "estimated": true
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
        "蒜香西兰花",
        "西兰花豆腐煮"
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
        "彩椒洋葱鸡丁",
        "芹菜炒鸡丝"
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
  }
};
