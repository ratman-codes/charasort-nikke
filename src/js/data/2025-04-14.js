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
    img: "https://i.postimg.cc/W3SCF9QK/rapi.png",
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
    img: "https://i.postimg.cc/jdRCrCXS/neon.png",
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
    img: "https://i.postimg.cc/VL4vs1GB/neonsummer.png",
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
    img: "https://i.postimg.cc/pLdwvB8L/anis.png",
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
    img: "https://i.postimg.cc/wBCZh8r1/anissummer.png",
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
    img: "https://i.postimg.cc/R07QbkF6/delta.png",
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
    img: "https://i.postimg.cc/WzBnhgbC/signal.png",
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
    img: "https://i.postimg.cc/kGTCCMJ2/poli.png",
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
    img: "https://i.postimg.cc/02CM67QS/miranda.png",
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
    img: "https://i.postimg.cc/65Ssfmyx/quiry.png",
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
    img: "https://i.postimg.cc/4xh1p7R1/d.png",
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
    img: "https://i.postimg.cc/8PZYZr3Q/belorta.png",
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
    img: "https://i.postimg.cc/C1fndtBM/mica.png",
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
    img: "https://i.postimg.cc/rsX04Jx1/micawinter.png",
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
    img: "https://i.postimg.cc/vBw24719/brid.png",
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
    img: "https://i.postimg.cc/263MWdrS/soline.png",
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
    img: "https://i.postimg.cc/RFvQrg6P/diesel.png",
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
    img: "https://i.postimg.cc/sDHnYCQ3/centi.png",
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
    img: "https://i.postimg.cc/DwgrKtst/liter.png",
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
    img: "https://i.postimg.cc/m2195vpL/emma.png",
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
    img: "https://i.postimg.cc/Gpm50PBx/vesti.png",
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
    img: "https://i.postimg.cc/tgkn6pJ5/eunhwa.png",
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
    img: "https://i.postimg.cc/VLX9KSNs/laplace.png",
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
    img: "https://i.postimg.cc/Sx8WJBcT/drake.png",
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
    img: "https://i.postimg.cc/QMzW8sMn/maxwell.png",
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
    img: "https://i.postimg.cc/L56TPxmq/crow.png",
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
    img: "https://i.postimg.cc/rsrGXsCJ/jackal.png",
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
    img: "https://i.postimg.cc/nLSw-nsBb/viper.png",
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
    img: "https://i.postimg.cc/hjxhKd6f/n102.png",
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
    img: "https://i.postimg.cc/tTFfkv02/anne.png",
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
    img: "https://i.postimg.cc/1506pLWf/mary.png",
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
    img: "https://i.postimg.cc/nhHmT05T/marysummer.png",
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
    img: "https://i.postimg.cc/fbdMdhKP/pepper.png",
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
    img: "https://i.postimg.cc/pT77J9LY/sugar.png",
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
    img: "https://i.postimg.cc/59LFVhWn/milk.png",
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
    img: "https://i.postimg.cc/4xTYFmhP/frima.png",
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
    img: "https://i.postimg.cc/G38xsgwy/julia.png",
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
    img: "https://i.postimg.cc/139W60K1/yuni.png",
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
    img: "https://i.postimg.cc/QCQBJTJR/mihara.png",
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
    img: "https://i.postimg.cc/xTdYRm5M/privaty.png",
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
    img: "https://i.postimg.cc/150Cf7wK/yulha.png",
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
    img: "https://i.postimg.cc/q7WVjCNM/admi.png",
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
    img: "https://i.postimg.cc/vm0DBh22/guillotine.png",
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
    img: "https://i.postimg.cc/26qhhyJD/maiden.png",
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
    img: "https://i.postimg.cc/d0V8Q4jD/ludmilla.png",
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
    img: "https://i.postimg.cc/Zqs6WpwH/ludmillawinter.png",
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
    img: "https://i.postimg.cc/2jQR7yrr/alice.png",
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
    img: "https://i.postimg.cc/dQbp7TXJ/tove.png",
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
    img: "https://i.postimg.cc/VN0kFtYD/neve.png",
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
    img: "https://i.postimg.cc/nh8RzbXr/rupee.png",
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
    img: "https://i.postimg.cc/ht9CQymr/rupeewinter.png",
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
    img: "https://i.postimg.cc/449FTx3q/yan.png",
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
    img: "https://i.postimg.cc/fyrx9ZHF/dolla.png",
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
    img: "https://i.postimg.cc/3Rw4CVDH/exia.png",
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
    img: "https://i.postimg.cc/P5PXtD8T/novel.png",
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
    img: "https://i.postimg.cc/8kxQhYFQ/snowwhite.png",
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
    img: "https://i.postimg.cc/02mgZCm6/snowwhiteyoung.png",
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
    img: "https://i.postimg.cc/pr6SkmVJ/rapunzel.png",
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
    img: "https://i.postimg.cc/C16JpWyF/scarlet.png",
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
    img: "https://i.postimg.cc/XJvxhnzH/scarlet-black-shadow.png",
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
    img: "https://i.postimg.cc/J7GP54Jt/harran.png",
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
    img: "https://i.postimg.cc/NMV8zmTF/isabel.png",
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
    img: "https://i.postimg.cc/zv8D5PTc/noah.png",
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
    img: "https://i.postimg.cc/dtg2QsZZ/dorothy.png",
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
    img: "https://i.postimg.cc/T38bMtBr/epinel.png",
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
    img: "https://i.postimg.cc/pV4hz0Wg/folkwang.png",
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
    img: "https://i.postimg.cc/wB17bPk5/modernia.png",
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
    img: "https://i.postimg.cc/hj94kqQm/nihilister.png",
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
    img: "https://i.postimg.cc/XYhzb64s/blanc.png",
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
    img: "https://i.postimg.cc/RhdS0QRV/noir.png",
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
    img: "https://i.postimg.cc/gjnSw-GyX/rosanna.png",
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
    img: "https://i.postimg.cc/TPftVVqX/sakura.png",
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
    img: "https://i.postimg.cc/fRx9wxh1/ether.png",
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
    img: "https://i.postimg.cc/qvXPHM14/soldereg.png",
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
    img: "https://i.postimg.cc/GpLZLwfY/soldierfa.png",
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
    img: "https://i.postimg.cc/0NVhrXg4/soldierow.png",
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
    img: "https://i.postimg.cc/Xv90JkNS/product08.png",
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
    img: "https://i.postimg.cc/ydBCS3WJ/product12.png",
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
    img: "https://i.postimg.cc/RFR51Cng/product23.png",
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
    img: "https://i.postimg.cc/fbzvtwDz/idollflower.png",
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
    img: "https://i.postimg.cc/KY0Dtd8n/idollocean.png",
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
    img: "https://i.postimg.cc/wv3c201n/idollsun.png",
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
    img: "https://i.postimg.cc/V6Fg5xPQ/cocoa.png",
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
    img: "https://i.postimg.cc/fRhGP0j8/soda.png",
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
    img: "https://i.postimg.cc/Pfw1qLYb/marciana.png",
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
    img: "https://i.postimg.cc/yNxZCW7Z/mast.png",
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
    img: "https://i.postimg.cc/Pryg07C7/anchor.png",
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
    img: "https://i.postimg.cc/2jMTcRFG/helm.png",
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
    img: "https://i.postimg.cc/DyG6RjxT/helmsummer.png",
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
    img: "https://i.postimg.cc/7ZWL79y5/nero.png",
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
    img: "https://i.postimg.cc/x1q4h1Dk/biscuit.png",
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
    img: "https://i.postimg.cc/g0HBQSkJ/rei.png",
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
    img: "https://i.postimg.cc/cH6C83Vx/guilty.png",
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
    img: "https://i.postimg.cc/05z1Kvy0/sin.png",
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
    img: "https://i.postimg.cc/L58dxdt2/quency.png",
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
    img: "https://i.postimg.cc/L436v2pK/noise.png",
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
    img: "https://i.postimg.cc/NMyCFgky/volume.png",
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
    img: "https://i.postimg.cc/Rh9YD149/aria.png",
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
    img: "https://i.postimg.cc/wMQvmd6z/naga.png",
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
    img: "https://i.postimg.cc/mZzK2Smd/tia.png",
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
    img: "https://i.postimg.cc/281My7Tc/redhood.png",
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
    img: "https://i.postimg.cc/W3QrnjLJ/makima.png",
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
    img: "https://i.postimg.cc/v8hbfhrG/power.png",
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
    img: "https://i.postimg.cc/3xH1hXqD/himeno.png",
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
    img: "https://i.postimg.cc/NjfcMthY/2b.png",
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
    img: "https://i.postimg.cc/zBWmMXhw/a2.png",
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
    img: "https://i.postimg.cc/sgqV12pS/pascal.png",
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
    img: "https://i.postimg.cc/rwc138d1/leona.png",
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
    img: "https://i.postimg.cc/s2bvFcnk/moran.png",
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
    img: "https://i.postimg.cc/kXhCh5YZ/privatymaid.png",
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
    img: "https://i.postimg.cc/3wkQXZJc/ade.png",
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
    img: "https://i.postimg.cc/bJYbVdWW/elegg.png",
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
    img: "https://i.postimg.cc/FzRyz1x3/dkillerwife.png",
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
    img: "https://i.postimg.cc/Y2sg8r3D/emilia.png",
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
    img: "https://i.postimg.cc/FRFn4y7x/rem.png",
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
    img: "https://i.postimg.cc/T3Wz7JDL/ram.png",
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
    img: "https://i.postimg.cc/3N418n72/shifty.png",
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
    img: "https://i.postimg.cc/hvdYySJF/syuen.png",
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
    img: "https://i.postimg.cc/PrXcbMSQ/bay.png",
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
    img: "https://i.postimg.cc/NFJxkR0d/crown.png",
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
    img: "https://i.postimg.cc/VsxB99mH/kilo.png",
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
    img: "https://i.postimg.cc/nhZW2fp5/trony.png",
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
    img: "https://i.postimg.cc/jqX3j7Rw/bunny-soda.png",
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
    img: "https://i.postimg.cc/d1RHr7df/bunny-alice.png",
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
    img: "https://i.postimg.cc/BndMz5By/clay.png",
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
    img: "https://i.postimg.cc/QMm00F0K/sakurasummer.png",
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
    img: "https://i.postimg.cc/85yXP7vg/rochico.png",
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
    img: "https://i.postimg.cc/ZqxpL676/ein.png",
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
    img: "https://i.postimg.cc/Mpd9YcsM/zwei.png",
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
    img: "https://i.postimg.cc/8kB9rYmC/asuka.png",
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
    img: "https://i.postimg.cc/s2rNndzq/rei-eva.png",
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
    img: "https://i.postimg.cc/jdYPns4p/mari.png",
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
    img: "https://i.postimg.cc/t4C1F7ZM/misato.png",
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
    img: "https://i.postimg.cc/05BXTJxp/rouge.png",
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
    img: "https://i.postimg.cc/yYW49H6T/quencyescapequeen.png",
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
    img: "https://i.postimg.cc/fLhDjgqR/phantom.png",
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
    img: "https://i.postimg.cc/bNSVpNN4/rumani.png",
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
    img: "https://i.postimg.cc/jdSgnSj8/cindy.png",
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
    img: "https://i.postimg.cc/DwdSVnrT/grave.png",
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
    img: "https://i.postimg.cc/D0ZDqrhz/rapunzel-grace.png",
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
    img: "https://i.postimg.cc/fLg3HCxS/flora.png",
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
    img: "https://i.postimg.cc/90ZxPJSC/winter-maiden.png",
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
    img: "https://i.postimg.cc/B6dY1dmm/winter-guillo.png",
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
    img: "https://i.postimg.cc/436rZ4wX/rapi-red-hood.png",
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
    img: "https://i.postimg.cc/VvntZTmZ/mana.png",
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
    img: "https://i.postimg.cc/vZ3VK5wy/mast-maid.png",
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
    img: "https://i.postimg.cc/SNm0T4x8/anchor-maid.png",
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
    img: "https://i.postimg.cc/RhRY53Zt/asuka-wille.png",
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
    img: "https://i.postimg.cc/JzJFc7fj/rei-ayanami-tentative.png",
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
    name: "Trina",
    img: "https://i.postimg.cc/VkRVHZNN/trina.png",
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
    img: "https://i.postimg.cc/hGd34ZGc/bready.png",
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
    img: "https://i.postimg.cc/Dy06ypCH/crust.png",
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
    img: "https://i.postimg.cc/pX7QZgzv/mecha-shifty.png",
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
