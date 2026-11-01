dataSetVersion = document.currentScript.src.match(/(\d{4}-\d{2}-\d{2})\.js/)[1]; // Version key is taken from this file's name (YYYY-MM-DD.js). Do not edit.
dataSet[dataSetVersion] = {};

// EXCLUDE

dataSet[dataSetVersion].options = [
    {
    name: "Exclude Collab Nikkes",
    key: "collab",
    tooltip: "Exclude characters from collab events (eg 2B). You can also uncheck 'Abnormal' in the manufacturer selection to achieve the same goal.",
    checked: false
  },
    {
    name: "Exclude Rare Nikkes",
    key: "rikker",
    tooltip: "Exclude 'R' Rare Nikkes (eg: iDoll Ocean). You can also uncheck 'R' in the rarity section to achieve the same goal.",
    checked: false
  },
    {
    name: "Exclude April Fools characters",
    key: "aprilfools",
    tooltip: "Exclude characters that only appear in april fools events (eg. Shifty)",
    checked: true
  },
    {
    name: "Exclude Overspec Nikke forms",
    key: "overspec",
    tooltip: "Exclude character forms that are Overspecs of previously existing Nikkes (eg: Exclude Rapi: Red Hood)",
    checked: false
  },
    {
    name: "Exclude SR Nikke base form only if SSR alt form exists",
    key: "SRbase",
    tooltip: "Exclude character forms that are SRs but also have an SSR alt form (eg: would exclude Anis due to S.Anis but include Neve as she has no SSR alt)",
    checked: false
  },
    {
    name: "Exclude alt forms of base SSR Nikkes",
    key: "SSRalt",
    tooltip: "Exclude character forms that are alts of SSR Nikkes (eg: Winter Ludmilla)",
    checked: true
  },
    {
    name: "Exclude base forms of Overspec Nikkes",
    key: "overspecbase",
    tooltip: "Exclude character forms that are base forms of existing overspec nikkes (eg: Exclude Rapi and Mihara base SR versions)",
    checked: true
  },
    {
    name: "Exclude alt forms of base SR Nikkes",
    key: "SRalt",
    tooltip: "Exclude character forms that are alts of SR Nikkes (eg: Summer Anis)",
    checked: true
  },

// ---------------------------------------------------------------------------------------
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict to certain rarities.",
    checked: false,
    sub: [
      { name: "SSR", key: "SSR" },
      { name: "SR", key: "SR" },
      { name: "R", key: "R" },
    ]
  },
  {
    name: "Filter by Burst",
    key: "burst",
    tooltip: "Check this to restrict to certain bursts. Hybrid characters like RH and Rapi RH will appear in all relevant categories.",
    checked: false,
    sub: [ { name: "Burst 1", key: "burst1" }, { name: "Burst 2", key: "burst2" }, { name: "Burst 3", key: "burst3" },
    ]
  },
  {
    name: "Filter by Class",
    key: "class",
    tooltip: "Check this to restrict to certain classes.",
    checked: false,
    sub: [ { name: "Attacker", key: "attacker" }, { name: "Defender", key: "defender" }, { name: "Supporter", key: "supporter" },
    ]
  },
  {
    name: "Filter by Element",
    key: "element",
    tooltip: "Check this to restrict to certain elements. Hybrid characters like Rapi RH will appear in all relevant categories.",
    checked: false,
    sub: [ { name: "Fire", key: "fire" }, { name: "Water", key: "water" }, { name: "Wind", key: "wind" }, { name: "Electric", key: "electric" }, { name: "Iron", key: "iron" },
    ]
  },
  {
    name: "Filter by Weapon",
    key: "weapon",
    tooltip: "Check this to restrict to certain weapons.",
    checked: false,
    sub: [ { name: "Assault Rifle", key: "AR" }, { name: "SMG", key: "SMG" }, { name: "Shotgun", key: "SG" }, { name: "Sniper Rifle", key: "SR" }, { name: "Rocket Launcher", key: "RL" }, { name: "Machine Gun", key: "MG" },
    ]
  },
  {
    name: "Filter by Manufacturer",
    key: "manufacturer",
    tooltip: "Check this to restrict to certain manufacturers.",
    checked: false,
    sub: [ { name: "Elysion", key: "elysion" }, { name: "Missilis", key: "missilis" }, { name: "Tetra", key: "tetra" }, { name: "Pilgrim", key: "pilgrim" }, { name: "Abnormal", key: "abnormal" },
    ]
  },


];

dataSet[dataSetVersion].characterData = [
  {
    name: "Rapi",
    img: "src/assets/portraits/rapi.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
	  overspecbase: true,
    }
  },
  {
    name: "Neon",
    img: "src/assets/portraits/neon.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
	  SRbase: true,
	  overspecbase: true,
    }
  },
  {
    name: "Neon: Blue Ocean",
    img: "src/assets/portraits/neon-blue-ocean.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
	  SRalt: true,
    }
  },
  {
    name: "Anis",
    img: "src/assets/portraits/anis.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
	  SRbase: true,
	  overspecbase: true,
    }
  },
  {
    name: "Anis: Sparkling Summer",
    img: "src/assets/portraits/anis-sparkling-summer.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
	  SRalt: true,
    }
  },
  {
    name: "Delta",
    img: "src/assets/portraits/delta.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['elysion'],
	  SRbase: true,
    }
  },
  {
    name: "Signal",
    img: "src/assets/portraits/signal.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Poli",
    img: "src/assets/portraits/poli.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['water'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Miranda",
    img: "src/assets/portraits/miranda.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Quiry",
    img: "src/assets/portraits/quiry.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "D",
    img: "src/assets/portraits/d.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Belorta",
    img: "src/assets/portraits/belorta.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
	  SRbase: true,
    }
  },
  {
    name: "Belorta: Pumpkin Witch",
    img: "src/assets/portraits/belorta-pumpkin-witch.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
	  SRalt: true,
    }
  },
  {
    name: "Mica",
    img: "src/assets/portraits/mica.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
	  SRbase: true,
    }
  },
  {
    name: "Mica: Snow Buddy",
    img: "src/assets/portraits/mica-snow-buddy.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
	  SRalt: true,
    }
  },
  {
    name: "Brid",
    img: "src/assets/portraits/brid.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Soline",
    img: "src/assets/portraits/soline.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Diesel",
    img: "src/assets/portraits/diesel.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Centi",
    img: "src/assets/portraits/centi.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Liter",
    img: "src/assets/portraits/liter.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Emma",
    img: "src/assets/portraits/emma.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Vesti",
    img: "src/assets/portraits/vesti.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Eunhwa",
    img: "src/assets/portraits/eunhwa.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Laplace",
    img: "src/assets/portraits/laplace.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Drake",
    img: "src/assets/portraits/drake.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Maxwell",
    img: "src/assets/portraits/maxwell.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Crow",
    img: "src/assets/portraits/crow.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['defender'],
	  element: ['fire'],
	  weapon: ['SMG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Jackal",
    img: "src/assets/portraits/jackal.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Viper",
    img: "src/assets/portraits/viper.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "N102",
    img: "src/assets/portraits/n102.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
	  SRbase: true,
    }
  },
  {
    name: "Anne: Miracle Fairy",
    img: "src/assets/portraits/anne-miracle-fairy.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
	  SRalt: true,
    }
  },
  {
    name: "Mary",
    img: "src/assets/portraits/mary.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Mary: Bay Goddess",
    img: "src/assets/portraits/mary-bay-goddess.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },
  {
    name: "Pepper",
    img: "src/assets/portraits/pepper.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Sugar",
    img: "src/assets/portraits/sugar.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Milk",
    img: "src/assets/portraits/milk.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Frima",
    img: "src/assets/portraits/frima.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Julia",
    img: "src/assets/portraits/julia.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Yuni",
    img: "src/assets/portraits/yuni.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Mihara",
    img: "src/assets/portraits/mihara.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['missilis'],
	  overspecbase: true,
    }
  },
  {
    name: "Privaty",
    img: "src/assets/portraits/privaty.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['elysion']
    }
  },
  {
    name: "Yulha",
    img: "src/assets/portraits/yulha.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Admi",
    img: "src/assets/portraits/admi.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Guillotine",
    img: "src/assets/portraits/guillotine.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Maiden",
    img: "src/assets/portraits/maiden.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Ludmilla",
    img: "src/assets/portraits/ludmilla.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Ludmilla: Winter Owner",
    img: "src/assets/portraits/ludmilla-winter-owner.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['MG'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },
  {
    name: "Alice",
    img: "src/assets/portraits/alice.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Tove",
    img: "src/assets/portraits/tove.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Neve",
    img: "src/assets/portraits/neve.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Rupee",
    img: "src/assets/portraits/rupee.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Rupee: Winter Shopper",
    img: "src/assets/portraits/rupee-winter-shopper.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['electric'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
	  SSRalt: true
    }
  },
  {
    name: "Yan",
    img: "src/assets/portraits/yan.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Dolla",
    img: "src/assets/portraits/dolla.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Exia",
    img: "src/assets/portraits/exia.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Novel",
    img: "src/assets/portraits/novel.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Snow White",
    img: "src/assets/portraits/snow-white.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Snow White: Innocent Days",
    img: "src/assets/portraits/snow-white-innocent-days.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Rapunzel",
    img: "src/assets/portraits/rapunzel.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Scarlet",
    img: "src/assets/portraits/scarlet.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['AR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Scarlet: Black Shadow",
    img: "src/assets/portraits/scarlet-black-shadow.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Harran",
    img: "src/assets/portraits/harran.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['SR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Isabel",
    img: "src/assets/portraits/isabel.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Noah",
    img: "src/assets/portraits/noah.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Dorothy",
    img: "src/assets/portraits/dorothy.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Epinel",
    img: "src/assets/portraits/epinel.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['SMG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Folkwang",
    img: "src/assets/portraits/folkwang.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Modernia (Marian)",
    img: "src/assets/portraits/modernia.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Nihilister",
    img: "src/assets/portraits/nihilister.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Blanc",
    img: "src/assets/portraits/blanc.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Noir",
    img: "src/assets/portraits/noir.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Rosanna",
    img: "src/assets/portraits/rosanna.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['MG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Sakura",
    img: "src/assets/portraits/sakura.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Ether",
    img: "src/assets/portraits/ether.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Soldier EG",
    img: "src/assets/portraits/soldier-eg.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
	  rikker:true,
    }
  },
  {
    name: "Soldier FA",
    img: "src/assets/portraits/soldier-fa.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
	  rikker:true,
    }
  },
  {
    name: "Soldier OW",
    img: "src/assets/portraits/soldier-ow.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
	  rikker:true,
    }
  },
  {
    name: "Product 08",
    img: "src/assets/portraits/product-08.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
	  rikker:true,
    }
  },
  {
    name: "Product 12",
    img: "src/assets/portraits/product-12.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['missilis'],
	  rikker:true,
    }
  },
  {
    name: "Product 23",
    img: "src/assets/portraits/product-23.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
	  rikker:true,
    }
  },
  {
    name: "iDoll Flower",
    img: "src/assets/portraits/idoll-flower.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
	  rikker:true,
    }
  },
  {
    name: "iDoll Ocean",
    img: "src/assets/portraits/idoll-ocean.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
	  rikker:true,
    }
  },
  {
    name: "iDoll Sun",
    img: "src/assets/portraits/idoll-sun.webp",
    opts: {
      rarity: ["R"],
      burst: ["burst3"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
	  rikker:true,
    }
  },
  {
    name: "Cocoa",
    img: "src/assets/portraits/cocoa.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Soda",
    img: "src/assets/portraits/soda.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Marciana",
    img: "src/assets/portraits/marciana.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Mast",
    img: "src/assets/portraits/mast.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Anchor",
    img: "src/assets/portraits/anchor.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
	  SRbase: true,
    }
  },
  {
    name: "Helm",
    img: "src/assets/portraits/helm.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Helm: Aquamarine",
    img: "src/assets/portraits/helm-aquamarine.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Nero",
    img: "src/assets/portraits/nero.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['fire'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Biscuit",
    img: "src/assets/portraits/biscuit.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Rei",
    img: "src/assets/portraits/rei.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Guilty",
    img: "src/assets/portraits/guilty.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Sin",
    img: "src/assets/portraits/sin.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['electric'],
	  weapon: ['AR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Quency",
    img: "src/assets/portraits/quency.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SMG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Noise",
    img: "src/assets/portraits/noise.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Volume",
    img: "src/assets/portraits/volume.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Aria",
    img: "src/assets/portraits/aria.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['MG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Naga",
    img: "src/assets/portraits/naga.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Tia",
    img: "src/assets/portraits/tia.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Red Hood",
    img: "src/assets/portraits/red-hood.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1","burst2","burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Makima",
    img: "src/assets/portraits/makima.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Power",
    img: "src/assets/portraits/power.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Himeno",
    img: "src/assets/portraits/himeno.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "2B",
    img: "src/assets/portraits/2b.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['defender'],
	  element: ['fire'],
	  weapon: ['AR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "A2",
    img: "src/assets/portraits/a2.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Pascal",
    img: "src/assets/portraits/pascal.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Leona",
    img: "src/assets/portraits/leona.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Moran",
    img: "src/assets/portraits/moran.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['electric'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Privaty: Unkind Maid",
    img: "src/assets/portraits/privaty-unkind-maid.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Ade",
    img: "src/assets/portraits/ade.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Elegg",
    img: "src/assets/portraits/elegg.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['MG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "D: Killer Wife",
    img: "src/assets/portraits/d-killer-wife.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Emilia",
    img: "src/assets/portraits/emilia.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
    {
    name: "Rem",
    img: "src/assets/portraits/rem.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['MG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Ram",
    img: "src/assets/portraits/ram.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Shifty",
    img: "src/assets/portraits/shifty.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
	  aprilfools: true,
    }
  },
  {
    name: "Syuen",
    img: "src/assets/portraits/syuen.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['missilis'],
	  aprilfools: true,
    }
  },
  {
    name: "Bay",
    img: "src/assets/portraits/bay.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Crown",
    img: "src/assets/portraits/crown.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['MG'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Kilo",
    img: "src/assets/portraits/kilo.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['defender'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Trony",
    img: "src/assets/portraits/trony.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Soda: Twinkling Bunny",
    img: "src/assets/portraits/soda-twinkling-bunny.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['SG'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },
  {
    name: "Alice: Wonderland Bunny",
    img: "src/assets/portraits/alice-wonderland-bunny.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },
  {
    name: "Clay",
    img: "src/assets/portraits/clay.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
    }
  },  
  {
    name: "Sakura: Bloom in Summer",
    img: "src/assets/portraits/sakura-bloom-in-summer.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },  
  {
    name: "Rosanna: Chic Ocean",
    img: "src/assets/portraits/rosanna-chic-ocean.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },  
  {
    name: "Ein",
    img: "src/assets/portraits/ein.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
    }
  }, 
  {
    name: "Zwei",
    img: "src/assets/portraits/zwei.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
    }
  },    
  {
    name: "Asuka",
    img: "src/assets/portraits/asuka.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['AR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Rei Ayanami",
    img: "src/assets/portraits/rei-ayanami.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Mari",
    img: "src/assets/portraits/mari.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Misato",
    img: "src/assets/portraits/misato.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Rouge",
    img: "src/assets/portraits/rouge.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Quency: Escape Queen",
    img: "src/assets/portraits/quency-escape-queen.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Phantom",
    img: "src/assets/portraits/phantom.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Rumani",
    img: "src/assets/portraits/rumani.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Cinderella",
    img: "src/assets/portraits/cinderella.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['defender'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Grave",
    img: "src/assets/portraits/grave.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['AR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Rapunzel: Pure Grace",
    img: "src/assets/portraits/rapunzel-pure-grace.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Flora",
    img: "src/assets/portraits/flora.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['MG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Maiden: Ice Rose",
    img: "src/assets/portraits/maiden-ice-rose.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['defender'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Guillotine: Winter Slayer",
    img: "src/assets/portraits/guillotine-winter-slayer.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Rapi: Red Hood",
    img: "src/assets/portraits/rapi-red-hood.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1","burst3"],
	  class: ['attacker'],
	  element: ['fire','iron'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
	  overspec: true,
    }
  },
  {
    name: "Mana",
    img: "src/assets/portraits/mana.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Mast: Romantic Maid",
    img: "src/assets/portraits/mast-romantic-maid.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Anchor: Innocent Maid",
    img: "src/assets/portraits/anchor-innocent-maid.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
	  SRalt: true,
    }
  },
  {
    name: "Asuka: WILLE",
    img: "src/assets/portraits/asuka-wille.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['MG'],
	  manufacturer: ['abnormal'],
	  collab: true,
	  SSRalt: true,
    }
  },
  {
    name: "Rei Ayanami: (Tentative Name)",
    img: "src/assets/portraits/rei-ayanami-tentative-name.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['abnormal'],
	  collab: true,
	  SSRalt: true,
    }
  },
  {
    name: "Sakura Suzuhara",
    img: "src/assets/portraits/sakura-suzuhara.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Trina",
    img: "src/assets/portraits/trina.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Bready",
    img: "src/assets/portraits/bready.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Crust",
    img: "src/assets/portraits/crust.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Mecha Shifty",
    img: "src/assets/portraits/mecha-shifty.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
	  aprilfools: true,
    }
  },
  {
    name: "Siren",
    img: "src/assets/portraits/siren.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SMG'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Mihara: Bonding Chain",
    img: "src/assets/portraits/mihara-bonding-chain.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['missilis'],
	  overspec: true,
    }
  },
  {
    name: "Mori",
    img: "src/assets/portraits/mori.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Arcana",
    img: "src/assets/portraits/arcana.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "K",
    img: "src/assets/portraits/k.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "EVE",
    img: "src/assets/portraits/eve.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Raven",
    img: "src/assets/portraits/raven.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Lily",
    img: "src/assets/portraits/lily.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Sora",
    img: "src/assets/portraits/sora.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Dorothy: Serendipity",
    img: "src/assets/portraits/dorothy-serendipity.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SG'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Elegg: Boom and Shock",
    img: "src/assets/portraits/elegg-boom-and-shock.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['MG'],
	  manufacturer: ['missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Emma: Tactical Upgrade",
    img: "src/assets/portraits/emma-tactical-upgrade.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Eunhwa: Tactical Upgrade",
    img: "src/assets/portraits/eunhwa-tactical-upgrade.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SR'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Vesti: Tactical Upgrade",
    img: "src/assets/portraits/vesti-tactical-upgrade.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Ade: Agent Bunny",
    img: "src/assets/portraits/ade-agent-bunny.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },
  {
    name: "Milk: Blooming Bunny",
    img: "src/assets/portraits/milk-blooming-bunny.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
	  SSRalt: true,
    }
  },
  {
    name: "Ada Wong",
    img: "src/assets/portraits/ada-wong.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Jill Valentine",
    img: "src/assets/portraits/jill-valentine.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['AR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Claire Redfield",
    img: "src/assets/portraits/claire-redfield.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Delta: Ninja Thief",
    img: "src/assets/portraits/delta-ninja-thief.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['water'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
	  SRalt: true,
    }
  },
  {
    name: "Nayuta",
    img: "src/assets/portraits/nayuta.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SMG'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Liberalio",
    img: "src/assets/portraits/liberalio.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Chime",
    img: "src/assets/portraits/chime.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['pilgrim'],
    }
  },
  {
    name: "Soline: Frost Ticket",
    img: "src/assets/portraits/soline-frost-ticket.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Diesel: Winter Sweets",
    img: "src/assets/portraits/diesel-winter-sweets.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Brid: Silent Track",
    img: "src/assets/portraits/brid-silent-track.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Snow White: Heavy Arms",
    img: "src/assets/portraits/snow-white-heavy-arms.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Label",
    img: "src/assets/portraits/label.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Velvet",
    img: "src/assets/portraits/velvet.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Chisato",
    img: "src/assets/portraits/chisato.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Takina",
    img: "src/assets/portraits/takina.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Kurumi",
    img: "src/assets/portraits/kurumi.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "E.H.",
    img: "src/assets/portraits/e-h.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Arcana: Fortune Mate",
    img: "src/assets/portraits/arcana-fortune-mate.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Snow Crane",
    img: "src/assets/portraits/snow-crane.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Anis: Star",
    img: "src/assets/portraits/anis-star.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
	  overspec: true,
    }
  },
  {
    name: "Neon: Vision Eye",
    img: "src/assets/portraits/neon-vision-eye.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
	  overspec: true,
    }
  },
  {
    name: "Avistar",
    img: "src/assets/portraits/avistar.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
    }
  },
 {
    name: "Mint",
    img: "src/assets/portraits/mint.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
 {
    name: "Prika",
    img: "src/assets/portraits/prika.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['tetra'],
    }
  },
 {
    name: "Ark Ranger Black",
    img: "src/assets/portraits/ark-ranger-black.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Cinderella: Crystal Wave",
    img: "src/assets/portraits/cinderella-crystal-wave.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['MG'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Marciana: Marine Study",
    img: "src/assets/portraits/marciana-marine-study.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
	  SSRalt: true,
    }
  },
  {
    name: "Laplace: Ultimate Hero",
    img: "src/assets/portraits/laplace-ultimate-hero.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Maxwell: Ordinary Mechanic",
    img: "src/assets/portraits/maxwell-ordinary-mechanic.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Queen (Makoto)",
    img: "src/assets/portraits/queen-makoto.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['SG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Yukiko",
    img: "src/assets/portraits/yukiko.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Aigis",
    img: "src/assets/portraits/aigis.webp",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['SMG'],
	  manufacturer: ['abnormal'],
	  collab: true,
    }
  },
  {
    name: "Drake: Great Villain",
    img: "src/assets/portraits/drake-great-villain.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Guilty: Mighty Bunny",
    img: "src/assets/portraits/guilty-mighty-bunny.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Sin: Swift Bunny",
    img: "src/assets/portraits/sin-swift-bunny.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Marian: Queen",
    img: "src/assets/portraits/marian-queen.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Scarlet: Goddeath",
    img: "src/assets/portraits/scarlet-goddeath.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['AR'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Rapunzel: Sanctuary",
    img: "src/assets/portraits/rapunzel-sanctuary.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['RL'],
	  manufacturer: ['pilgrim'],
	  SSRalt: true,
    }
  },
  {
    name: "Mekami Shifty",
    img: "src/assets/portraits/mekami-shifty.webp",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
	  aprilfools: true,
    }
  },
];
