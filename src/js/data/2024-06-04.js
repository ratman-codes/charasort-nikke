dataSetVersion = "2024-02-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

// EXCLUDE

dataSet[dataSetVersion].options = [
    {
    name: "Exclude SSR Nikke alts",
    key: "SSRalt",
    tooltip: "Exclude character forms that are alts of SSR Nikkes (eg: Winter Ludmilla)",
    checked: true
  },

    {
    name: "Exclude SR Nikke alts",
    key: "SRalt",
    tooltip: "Exclude character forms that are alts of SR Nikkes (eg: Summer Anis)",
    checked: true
  },
    {
    name: "Exclude SR Nikke base form if SSR exists",
    key: "SRbase",
    tooltip: "Exclude character forms that are SRs but also have an SSR alt form (eg: Anis excluded because S.Anis exists, but Delta included as she has no SSR alt)",
    checked: false
  },
    {
    name: "Exclude Collab Nikkes",
    key: "collab",
    tooltip: "Exclude characters from collab events (eg 2B). You can also uncheck 'Abnormal' in the manufacturer selection to achieve the same goal.",
    checked: false
  },
    {
    name: "Exclude April Fools characters",
    key: "aprilfools",
    tooltip: "Exclude characters that only appear in april fools events (eg. Shifty)",
    checked: true
  },
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
    tooltip: "Check this to restrict to certain bursts.",
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
    tooltip: "Check this to restrict to certain elements.",
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
    img: "XCcuDDL.png",
    opts: {
      rarity: ["SR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['AR'],
	  manufacturer: ['elysion']
    }
  },
  {
    name: "Neon",
    img: "ZZWWZck.png",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
	  SRbase: true,
    }
  },
  {
    name: "Neon: Blue Oceon",
    img: "wIQD5NQ.png",
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
    img: "GE68AnJ.png",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
	  SRbase: true,
    }
  },
  {
    name: "Anis: Sparkling Summer",
    img: "xzJLCDd.png",
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
    img: "A4lB0Cf.png",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['SR'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Signal",
    img: "S4ViVAe.png",
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
    img: "j9DyRin.png",
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
    img: "gTE3Eju.png",
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
    img: "U3SjAfW.png",
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
    img: "SbjEbmB.png",
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
    img: "T3azkxB.png",
    opts: {
      rarity: ["SR"],
      burst: ["burst2"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Mica",
    img: "Lpfp4Ak.png",
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
    img: "4mHuhsV.png",
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
    img: "8rQnAYG.png",
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
    img: "gJ5Lt5o.png",
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
    img: "D9cKHvA.png",
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
    img: "mGYTlYU.png",
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
    img: "8yAVnWw.png",
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
    img: "vJDgPJq.png",
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
    img: "TL7urCr.png",
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
    img: "ledeQtA.png",
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
    img: "dGpfZel.png",
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
    img: "5vGA9Oy.png",
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
    img: "XYu6wYY.png",
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
    img: "xqrQuSd.png",
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
    img: "6wZWp62.png",
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
    img: "i9Pa7I9.png",
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
    img: "LRz2dqs.png",
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
    img: "PAsqLEb.png",
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
    img: "V1dsaEK.png",
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
    img: "QJ3SORm.png",
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
    img: "LZUywou.png",
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
    img: "KEJA3sU.png",
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
    img: "Qo5VtKc.png",
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
    img: "xqXShuo.png",
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
    img: "rc4N3QP.png",
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
    img: "pOW1amc.png",
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
    img: "FzcpK0O.png",
    opts: {
      rarity: ["SR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['AR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Privaty",
    img: "8IdCrYC.png",
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
    img: "IEwglEI.png",
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
    img: "Z1QPuIr.png",
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
    img: "f7ByPce.png",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['Attacker'],
	  element: ['electric'],
	  weapon: ['MG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Maiden",
    img: "vyy7Gtb.png",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['Attacker'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Ludmilla",
    img: "ef9TzKt.png",
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
    img: "41pOBWY.png",
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
    img: "7YkR7FN.png",
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
    img: "KuI8yXF.png",
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
    img: "AMD89nH.png",
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
    img: "F1Gtszg.png",
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
    img: "6oCJR9u.png",
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
    img: "r5sCEqL.png",
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
    img: "7VCG95D.png",
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
    img: "ZIWki5K.png",
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
    img: "b7PaoiL.png",
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
    img: "hC6pX5T.png",
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
    img: "GJKysJX.png",
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
    img: "nA4l629.png",
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
    img: "YFFlI8C.png",
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
    name: "Harran",
    img: "eNJiYJD.png",
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
    img: "3GdkFBu.png",
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
    img: "JQsLaEF.png",
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
    img: "aSLf9us.png",
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
    img: "yvDa8DJ.png",
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
    img: "FRYypL0.png",
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
    name: "Modernia",
    img: "iHAGE4R.png",
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
    img: "j28zcrj.png",
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
    img: "f9krlVq.png",
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
    img: "f1Cgart.png",
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
    img: "7jgKATj.png",
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
    img: "IKpo1NI.png",
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
    img: "L419R0U.png",
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
    img: "RJcGstS.png",
    opts: {
      rarity: ["R"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['electric'],
	  weapon: ['AR'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Soldier FA",
    img: "ML9T1Vh.png",
    opts: {
      rarity: ["R"],
      burst: ["burst2"],
	  class: ['defender'],
	  element: ['iron'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Soldier OW",
    img: "JHcmHoN.png",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['fire'],
	  weapon: ['SMG'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Product 08",
    img: "rEtGGmf.png",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['electric'],
	  weapon: ['SR'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Product 12",
    img: "57129WW.png",
    opts: {
      rarity: ["R"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['fire'],
	  weapon: ['MG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "Product 23",
    img: "w5mrdUH.png",
    opts: {
      rarity: ["R"],
      burst: ["burst2"],
	  class: ['supporter'],
	  element: ['wind'],
	  weapon: ['SG'],
	  manufacturer: ['missilis'],
    }
  },
  {
    name: "iDoll Flower",
    img: "BKYtxwb.png",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "iDoll Ocean",
    img: "2p0iEli.png",
    opts: {
      rarity: ["R"],
      burst: ["burst1"],
	  class: ['supporter'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "iDoll Sun",
    img: "p0w4014.png",
    opts: {
      rarity: ["R"],
      burst: ["burst3"],
	  class: ['supporter'],
	  element: ['iron'],
	  weapon: ['AR'],
	  manufacturer: ['tetra'],
    }
  },
  {
    name: "Cocoa",
    img: "f32g9Ym.png",
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
    img: "iWgV387.png",
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
    img: "m9SF6yK.png",
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
    img: "MjBe1NL.png",
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
    img: "hPNoqnb.png",
    opts: {
      rarity: ["SR"],
      burst: ["burst1"],
	  class: ['defender'],
	  element: ['wind'],
	  weapon: ['RL'],
	  manufacturer: ['elysion'],
    }
  },
  {
    name: "Helm",
    img: "c03EPZr.png",
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
    img: "IzoMI4w.png",
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
    img: "ASKooZ9.png",
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
    img: "cqiJtRU.png",
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
    img: "VPwO390.png",
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
    img: "G7TsEdn.png",
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
    img: "2gRxXX3.png",
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
    img: "2tke9Qh.png",
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
    img: "18KREKC.png",
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
    img: "IL0fity.png",
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
    img: "r8MRAay.png",
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
    img: "58fMFOd.png",
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
    img: "WFHp5v0.png",
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
    img: "nqGNRT7.png",
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
    img: "VZMDsvV.png",
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
    img: "9IV6asU.png",
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
    img: "tle5VvK.png",
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
    img: "XVokzfP.png",
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
    img: "DyCJLUh.png",
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
    img: "YTh70Z4.png",
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
    img: "nZCzL7Z.png",
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
    img: "fzzSTsE.png",
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
    img: "RScMuZW.png",
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
    img: "02kXLWY.png",
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
    img: "1sgithl.png",
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
    img: "uzousPD.png",
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
    img: "iI5ky7z.png",
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
    img: "ENOisqf.png",
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
    img: "fdpL0V9.png",
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
    img: "3LzRP00.png",
    opts: {
      rarity: ["R"],
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
    img: "qWMi7ME.png",
    opts: {
      rarity: ["R"],
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
    img: "PtAxlQy.png",
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
    img: "Wcqn2nu.png",
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
    img: "n3gnwmb.png",
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
    img: "RNJXu2M.png",
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
    img: "yocjzL6.png",
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
    name: "Alice: Wonderful Bunny",
    img: "nVhvpPo.png",
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
];
