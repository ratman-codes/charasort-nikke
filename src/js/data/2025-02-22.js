dataSetVersion = "2025-01-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

// EXCLUDE

dataSet[dataSetVersion].options = [
    {
    name: "Exclude alt forms of base SSR Nikkes",
    key: "SSRalt",
    tooltip: "Exclude character forms that are alts of SSR Nikkes (eg: Winter Ludmilla)",
    checked: true
  },

    {
    name: "Exclude alt forms of base SR Nikkes",
    key: "SRalt",
    tooltip: "Exclude character forms that are alts of SR Nikkes (eg: Summer Anis)",
    checked: true
  },
    {
    name: "Exclude SR Nikke base form if SSR alt form exists",
    key: "SRbase",
    tooltip: "Exclude character forms that are SRs but also have an SSR alt form (eg: Anis excluded because S.Anis exists, but Delta included as she has no SSR alt)",
    checked: false
  },
    {
    name: "Exclude base forms of Overspec Nikkes",
    key: "overspecbase",
    tooltip: "Exclude character forms that are base forms of existing overspec nikkes (eg: Rapi's base form is excluded)",
    checked: true
  },
    {
    name: "Exclude Overspec Nikke forms",
    key: "overspec",
    tooltip: "Exclude character forms that are Overspecs of previously existing Nikkes",
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
    img: "1spsd2.png",
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
    img: "y9a1wd.png",
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
    img: "d494cz.png",
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
    img: "evbrnd.png",
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
    img: "qs6whn.png",
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
    img: "xavg0m.png",
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
    img: "lgvxjt.png",
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
    img: "jx6eha.png",
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
    img: "akwg6s.png",
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
    img: "ziw6n7.png",
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
    img: "sg6pb4.png",
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
    img: "rtel1r.png",
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
    img: "68c2fo.png",
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
    img: "qcymqu.png",
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
    img: "99nm9d.png",
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
    img: "lrxeyd.png",
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
    img: "clwg2f.png",
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
    img: "0vqsct.png",
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
    img: "lylyvo.png",
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
    img: "gmbvha.png",
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
    img: "wuej23.png",
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
    img: "brc6i1.png",
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
    img: "hpea93.png",
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
    img: "kr26w6.png",
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
    img: "yeim2g.png",
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
    img: "geqzt4.png",
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
    img: "ykq8d8.png",
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
    img: "yuizu3.png",
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
    img: "4unsy9.png",
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
    img: "h231v4.png",
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
    img: "jhvmx5.png",
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
    img: "7wqjic.png",
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
    img: "yid8u8.png",
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
    img: "rd7g6u.png",
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
    img: "f2t9mi.png",
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
    img: "yj4yev.png",
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
    img: "aftxhp.png",
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
    img: "xd5mtv.png",
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
    img: "2mwxnp.png",
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
    img: "ea40sn.png",
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
    img: "82x54k.png",
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
    img: "v1gbu3.png",
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
    img: "r0p00t.png",
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
    img: "mwiubu.png",
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
    img: "1zfhm6.png",
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
    img: "imovab.png",
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
    img: "mzd3hc.png",
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
    img: "4b2cjw.png",
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
    img: "lcg9wu.png",
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
    img: "oo9fb0.png",
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
    img: "480sl9.png",
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
    img: "d0npqv.png",
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
    img: "yd3pt3.png",
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
    img: "1lg6sm.png",
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
    img: "yc3rel.png",
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
    img: "njj7lk.png",
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
    img: "m81muw.png",
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
    img: "qaay5e.png",
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
    img: "omgw5p.png",
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
    img: "vgayf4.png",
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
    img: "b14381.png",
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
    img: "bm8ucp.png",
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
    img: "d9437o.png",
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
    img: "cmdwoz.png",
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
    img: "758izk.png",
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
    img: "92xbsl.png",
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
    img: "aq68fd.png",
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
    img: "1irid5.png",
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
    img: "9cgjwk.png",
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
    img: "q5vnnr.png",
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
    img: "ae2oj3.png",
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
    img: "u1vqs3.png",
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
    img: "6a2ges.png",
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
    img: "h4bhg1.png",
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
    img: "0abnkk.png",
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
    img: "fhgpaj.png",
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
    img: "itxsdx.png",
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
    img: "qns5xk.png",
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
    img: "16pn2k.png",
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
    img: "zty5u5.png",
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
    img: "6wilfm.png",
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
    img: "8nz0ni.png",
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
    img: "c2h8d6.png",
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
    img: "fmzlds.png",
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
    img: "iwac1i.png",
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
    img: "44ibiu.png",
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
    img: "fs840d.png",
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
    img: "n74ltu.png",
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
    img: "hmk0uv.png",
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
    img: "a3pc7d.png",
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
    img: "cnc40c.png",
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
    img: "whyb0p.png",
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
    img: "bj5ovh.png",
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
    img: "guvefw.png",
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
    img: "0cqd5i.png",
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
    img: "z7woh3.png",
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
    img: "iqipra.png",
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
    img: "gw5jbh.png",
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
    img: "t6zly2.png",
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
    img: "huktak.png",
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
    img: "ck8paw.png",
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
    img: "xtjaix.png",
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
    img: "f6n4qg.png",
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
    img: "btxgks.png",
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
    img: "m0cpqs.png",
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
    img: "uxkwl3.png",
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
    img: "4k530f.png",
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
    img: "76e0as.png",
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
    img: "go694c.png",
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
    img: "3ap6hn.png",
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
    img: "mhga6e.png",
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
    img: "4l82xy.png",
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
    img: "n6zzlu.png",
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
    img: "17k54d.png",
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
    img: "wqxd33.png",
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
    img: "e5qxfu.png",
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
    img: "7gr1in.png",
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
    img: "mawi2w.png",
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
    img: "pz1bo4.png",
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
    img: "i17p9z.png",
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
    img: "lnf9jh.png",
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
    img: "047feh.png",
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
    img: "c5scag.png",
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
    img: "lgm6u9.png",
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
    img: "72zfm3.png",
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
    img: "g2mxp5.png",
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
    img: "qavh75.png",
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
    img: "6ebhlq.png",
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
    img: "5eyqki.png",
    opts: {
      rarity: ["SSR"],
      burst: ["burst1"],
	  class: ['suppoerter'],
	  element: ['electric'],
	  weapon: ['SG'],
	  manufacturer: ['elysion'],
    }
  },    
  {
    name: "Asuka",
    img: "uggv0s.png",
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
    img: "wcl216.png",
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
    img: "5dhj4r.png",
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
    img: "x4b4vt.png",
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
    img: "hdi0cx.png",
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
    img: "vixmk1.png",
    opts: {
      rarity: ["SSR"],
      burst: ["burst3"],
	  class: ['attacker'],
	  element: ['water'],
	  weapon: ['SMG'],
	  manufacturer: ['Missilis'],
	  SSRalt: true,
    }
  },
  {
    name: "Phantom",
    img: "iqg38q.png",
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
    img: "84pw3n.png",
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
    img: "pn4uem.png",
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
    img: "jbutkj.png",
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
    img: "luex6h.png",
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
    img: "aa8ut0.png",
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
    img: "d7ro0v.png",
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
    img: "tpdhtl.png",
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
    img: "kvss7s.png",
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
    img: "b9ivak.png",
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
    img: "q77sdv.png",
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
    img: "buwtxt.png",
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
    img: "bioe3f.png",
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
    img: "v0570c.png",
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
];
