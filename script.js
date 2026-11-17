
"use strict";

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Көрсеткіштік функция, оның қасиеттері және графигі",
  goal: "Көрсеткіштік функцияның анықтамасын, анықталу облысын, мәндер жиынын, өсу-кему қасиеттерін және графигін зерттеу."
};

// ======================================
// 5 ТҮСІНДІРМЕ
// ӨЗІНДІК ЖҰМЫС ЖОҚ
// ======================================

const theory = [
  {
    title: "Көрсеткіштік функция дегеніміз не?",

    definition:
      "Көрсеткіштік функция — айнымалысы дәреже көрсеткішінде орналасқан функция. Дәреженің негізі тұрақты оң сан болады және бірге тең болмайды.",

    explain:
      "Мысалы, екі негізді функцияны қарастырайық. Егер көрсеткіш нөл болса, нәтиже бір болады. Көрсеткіш бірге тең болса, екі, ал екіге тең болса, төрт шығады. Демек, аргумент өзгерген сайын функция мәні де өзгереді. Мұндай функциялар кейбір өсу және азаю үдерістерін сипаттауда қолданылады.",

    rule:
      "Көрсеткіштік функцияда айнымалы дәреже көрсеткішінде орналасады. Негізі нөлден үлкен және бірге тең емес болуы тиіс.",

    formula:
      M`\boxed{y=a^x},\qquad a>0,\quad a\ne1`,

    worked: [
      M`f(x)=2^x`,
      M`f(0)=2^0=1`,
      M`f(1)=2^1=2`,
      M`f(3)=2^3=8`
    ],

    warning:
      "Дәрежелік және көрсеткіштік функцияларды шатастырмаңдар. Дәрежелік функцияда x негізде, ал көрсеткіштік функцияда x көрсеткіште болады.",

    graph: 2
  },

  {
    title: "Анықталу облысы мен мәндер жиыны",

    definition:
      "Оң негізді көрсеткіштік функция барлық нақты аргументтер үшін анықталады. Оның мәндері әрқашан оң болады. Сондықтан график абсцисса осін қимайды.",

    explain:
      "Екі санының теріс бірінші дәрежесі бір екінші, теріс екінші дәрежесі бір төртінші болады. Көрсеткіш теріс болса да, нәтиже теріс емес. Көрсеткіштік функция нөлге өте жақындай алады, бірақ ешқашан нөлге тең болмайды.",

    rule:
      "Көрсеткіштік функцияның анықталу облысы — барлық нақты сандар. Мәндер жиыны — нөлден үлкен барлық сандар.",

    formula:
      M`D(f)=\mathbb{R},\qquad E(f)=(0;+\infty)`,

    worked: [
      M`f(x)=2^x`,
      M`f(-2)=2^{-2}=\frac14`,
      M`f(-1)=2^{-1}=\frac12`,
      M`f(0)=1`
    ],

    warning:
      "Нөл көрсеткіштік функцияның мәндер жиынына кірмейді.",

    graph: 2
  },

  {
    title: "Өспелі көрсеткіштік функция",

    definition:
      "Егер көрсеткіштік функцияның негізі бірден үлкен болса, функция барлық нақты сандар жиынында қатаң өседі. Үлкен аргументке үлкен функция мәні сәйкес келеді.",

    explain:
      "Үш негізді көрсеткіштік функцияны алайық. Көрсеткіш нөл болғанда нәтиже бір, бір болғанда үш, екі болғанда тоғыз болады. Бұл мәндер өсу ретімен орналасқан. Сондықтан график солдан оңға қарай жоғары көтеріледі.",

    rule:
      "Негізі бірден үлкен көрсеткіштік функция өспелі болады.",

    formula:
      M`a>1,\quad x_1<x_2\Longrightarrow a^{x_1}<a^{x_2}`,

    worked: [
      M`f(x)=3^x`,
      M`f(0)=1`,
      M`f(1)=3`,
      M`f(2)=9`
    ],

    warning:
      "Негізі бірден үлкен болса ғана функция өспелі болады. Негіз нөл мен бір арасында жатса, функция кемиді.",

    graph: 3
  },

  {
    title: "Кемімелі көрсеткіштік функция",

    definition:
      "Егер көрсеткіштік функцияның негізі нөлден үлкен әрі бірден кіші болса, функция кемімелі болады. Аргумент артқан сайын функция мәні кішірейеді.",

    explain:
      "Бір екінші негізді функцияны қарастырайық. Көрсеткіш нөл болғанда мәні бір, бір болғанда бір екінші, екі болғанда бір төртінші болады. Осылайша функция мәні біртіндеп азаяды. Бірақ нөлге тең болмайды.",

    rule:
      "Негізі нөл мен бір арасында орналасқан көрсеткіштік функция кемімелі болады.",

    formula:
      M`0<a<1,\quad x_1<x_2\Longrightarrow a^{x_1}>a^{x_2}`,

    worked: [
      M`f(x)=\left(\frac12\right)^x`,
      M`f(0)=1`,
      M`f(1)=\frac12`,
      M`f(2)=\frac14`
    ],

    warning:
      "Теріс көрсеткішке назар аударыңдар. Мысалы, бір екінші санының теріс бірінші дәрежесі екіге тең.",

    graph: 0.5
  },

  {
    title: "Көрсеткіштік функцияның графигі",

    definition:
      "Көрсеткіштік функция графигі — барлық нақты аргументтерде анықталған үздіксіз қисық. Ол әрқашан нөл, бір нүктесі арқылы өтеді.",

    explain:
      "Кез келген оң негіздің нөлінші дәрежесі бірге тең. Сондықтан барлық көрсеткіштік функциялар графигі ординаталар осін бір биіктікте кесіп өтеді. График салғанда бірнеше аргумент үшін функцияның мәнін есептеп, нүктелерді белгілейміз. Содан кейін оларды бірқалыпты қисықпен қосамыз.",

    rule:
      "График салу үшін анықталу облысын, функцияның өсу немесе кему бағытын және бірнеше нақты нүктесін табу қажет.",

    formula:
      M`a^0=1,\qquad (0;1)`,

    worked: [
      M`y=2^x`,
      M`x=-1\Longrightarrow y=\frac12`,
      M`x=0\Longrightarrow y=1`,
      M`x=1\Longrightarrow y=2`,
      M`x=2\Longrightarrow y=4`
    ],

    warning:
      "Нүктелерді белгілеу жеткіліксіз. Олар арқылы дұрыс қисық график жүргізу қажет.",

    graph: 2
  }
];

// ======================================
// 10 КОНСПЕКТ
// ӘРҚАЙСЫСЫНДА 2 ӨЗІНДІК ЕСЕП
// ======================================

const notes = [
  {
    title: "Көрсеткіштік функцияның анықтамасы",

    text:
      "Көрсеткіштік функцияда айнымалы дәреже көрсеткішінде орналасады. Негіз тұрақты оң сан болып, бірге тең болмауы тиіс. Мұндай функцияның графигі үздіксіз қисық болады.",

    formula: M`y=a^x,\quad a>0,\quad a\ne1`,

    example: [
      M`f(x)=2^x`,
      M`f(3)=2^3`,
      M`=8`
    ],

    self: [
      {
        q: M`f(x)=3^x,\quad f(2)=?`,
        steps: [M`3^2=9`],
        answer: M`\boxed9`
      },
      {
        q: M`f(x)=5^x,\quad f(2)=?`,
        steps: [M`5^2=25`],
        answer: M`\boxed{25}`
      }
    ]
  },

  {
    title: "Нөлінші және бірінші дәреже",

    text:
      "Кез келген оң санның нөлінші дәрежесі бірге тең. Ал бірінші дәрежесі сол санның өзіне тең. Бұл қасиет көрсеткіштік функцияның графигін салғанда қолданылады.",

    formula: M`a^0=1,\qquad a^1=a`,

    example: [
      M`7^0+3^1`,
      M`=1+3`,
      M`=4`
    ],

    self: [
      {
        q: M`4^0+2^1`,
        steps: [M`=1+2`],
        answer: M`\boxed3`
      },
      {
        q: M`9^0+5^1`,
        steps: [M`=1+5`],
        answer: M`\boxed6`
      }
    ]
  },

  {
    title: "Теріс көрсеткішті дәреже",

    text:
      "Теріс көрсеткішті дәреже — сол негіздің оң көрсеткішті дәрежесіне кері сан. Оң негізді теріс дәрежеге шығарғанда нәтиже де оң болады.",

    formula: M`a^{-n}=\frac1{a^n},\qquad a>0`,

    example: [
      M`2^{-3}`,
      M`=\frac1{2^3}`,
      M`=\frac18`
    ],

    self: [
      {
        q: M`2^{-2}`,
        steps: [M`=\frac1{2^2}`],
        answer: M`\boxed{\frac14}`
      },
      {
        q: M`5^{-1}`,
        steps: [M`=\frac1{5^1}`],
        answer: M`\boxed{\frac15}`
      }
    ]
  },

  {
    title: "Функцияның анықталу облысы",

    text:
      "Оң негізді көрсеткіштік функция кез келген нақты аргумент үшін анықталады. Демек, оның анықталу облысына теріс сандар, нөл және оң сандар кіреді.",

    formula: M`D(a^x)=\mathbb R`,

    example: [
      M`f(x)=3^x`,
      M`D(f)=(-\infty;+\infty)`
    ],

    self: [
      {
        q: M`f(x)=2^x,\quad f(-3)=?`,
        steps: [M`2^{-3}=\frac1{2^3}`],
        answer: M`\boxed{\frac18}`
      },
      {
        q: M`f(x)=4^x,\quad f(-1)=?`,
        steps: [M`4^{-1}=\frac14`],
        answer: M`\boxed{\frac14}`
      }
    ]
  },

  {
    title: "Функцияның мәндер жиыны",

    text:
      "Көрсеткіштік функция әрқашан оң мән қабылдайды. Оның графигі абсцисса осіне жақындайды, бірақ сол осьпен қиылыспайды.",

    formula: M`E(a^x)=(0;+\infty)`,

    example: [
      M`f(x)=2^x`,
      M`2^{-2}=\frac14>0`,
      M`2^0=1>0`
    ],

    self: [
      {
        q: M`3^0+2^{-1}`,
        steps: [M`=1+\frac12`],
        answer: M`\boxed{\frac32}`
      },
      {
        q: M`4^{-1}+4^0`,
        steps: [M`=\frac14+1`],
        answer: M`\boxed{\frac54}`
      }
    ]
  },

  {
    title: "Өспелі көрсеткіштік функция",

    text:
      "Негіз бірден үлкен болса, функция барлық нақты сандарда өседі. Аргумент өскенде нәтиже де артады. График солдан оңға қарай жоғары бағытталады.",

    formula: M`a>1\Longrightarrow a^x\text{ өседі}`,

    example: [
      M`f(x)=2^x`,
      M`f(1)=2`,
      M`f(2)=4`
    ],

    self: [
      {
        q: M`3^2-3^1`,
        steps: [M`=9-3`],
        answer: M`\boxed6`
      },
      {
        q: M`2^4-2^2`,
        steps: [M`=16-4`],
        answer: M`\boxed{12}`
      }
    ]
  },

  {
    title: "Кемімелі көрсеткіштік функция",

    text:
      "Негіз нөл мен бірдің арасында орналасса, функция барлық нақты сандарда кемиді. Аргумент артқан сайын функция мәні азаяды.",

    formula: M`0<a<1\Longrightarrow a^x\text{ кемиді}`,

    example: [
      M`\left(\frac12\right)^2`,
      M`=\frac14`
    ],

    self: [
      {
        q: M`\left(\frac12\right)^3`,
        steps: [M`=\frac1{2^3}`],
        answer: M`\boxed{\frac18}`
      },
      {
        q: M`\left(\frac13\right)^2`,
        steps: [M`=\frac1{3^2}`],
        answer: M`\boxed{\frac19}`
      }
    ]
  },

  {
    title: "Негіздері бірдей дәрежелерді көбейту",

    text:
      "Бірдей негізді дәрежелерді көбейткен кезде көрсеткіштер қосылады. Ал бөлген кезде бір көрсеткіштен екіншісі азайтылады.",

    formula: M`a^m\cdot a^n=a^{m+n}`,

    example: [
      M`2^3\cdot2^2`,
      M`=2^{3+2}`,
      M`=32`
    ],

    self: [
      {
        q: M`3^2\cdot3^1`,
        steps: [M`=3^{2+1}=3^3`],
        answer: M`\boxed{27}`
      },
      {
        q: M`\frac{2^5}{2^2}`,
        steps: [M`=2^{5-2}=2^3`],
        answer: M`\boxed8`
      }
    ]
  },

  {
    title: "Көрсеткіштік теңдеуді қарапайым түрлендіру",

    text:
      "Екі жақта негіздері бірдей дәрежелер тұрған жағдайда олардың көрсеткіштері тең болуы керек. Бұл қасиет көрсеткіштік теңдеулерді шешудің негізін құрайды.",

    formula: M`a^u=a^v\Longrightarrow u=v,\qquad a>0,\ a\ne1`,

    example: [
      M`2^x=2^4`,
      M`x=4`
    ],

    self: [
      {
        q: M`3^x=81`,
        steps: [M`81=3^4`, M`3^x=3^4`],
        answer: M`\boxed{x=4}`
      },
      {
        q: M`2^x=32`,
        steps: [M`32=2^5`, M`2^x=2^5`],
        answer: M`\boxed{x=5}`
      }
    ]
  },

  {
    title: "Графиктің негізгі қасиеттері",

    text:
      "Көрсеткіштік функцияның графигі ординаталар осін нөл, бір нүктесінде қиып өтеді. Негіз бірден үлкен болса, график өседі. Негіз бірден кіші болса, график кемиді.",

    formula: M`f(0)=a^0=1`,

    example: [
      M`f(x)=2^x`,
      M`f(0)=1`,
      M`f(1)=2`
    ],

    self: [
      {
        q: M`f(x)=3^x,\quad f(0)+f(1)=?`,
        steps: [M`=1+3`],
        answer: M`\boxed4`
      },
      {
        q: M`f(x)=\left(\frac12\right)^x,\quad f(-1)=?`,
        steps: [M`=\left(\frac12\right)^{-1}`],
        answer: M`\boxed2`
      }
    ]
  }
];

// ======================================
// 4 ДЕҢГЕЙ — 20 ЕСЕП
// ======================================

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,
    tasks: [
      {
        q: M`2^3`,
        value: 8,
        steps: [M`2\cdot2\cdot2=8`]
      },
      {
        q: M`3^2`,
        value: 9,
        steps: [M`3\cdot3=9`]
      },
      {
        q: M`5^0`,
        value: 1,
        steps: [M`5^0=1`]
      },
      {
        q: M`2^5`,
        value: 32,
        steps: [M`2^5=32`]
      },
      {
        q: M`4^2`,
        value: 16,
        steps: [M`4\cdot4=16`]
      }
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,
    tasks: [
      {
        q: M`2^{-2}`,
        value: 1/4,
        steps: [
          M`2^{-2}=\frac1{2^2}`,
          M`=\frac14`
        ]
      },
      {
        q: M`3^{-2}`,
        value: 1/9,
        steps: [
          M`3^{-2}=\frac1{3^2}`,
          M`=\frac19`
        ]
      },
      {
        q: M`\left(\frac12\right)^3`,
        value: 1/8,
        steps: [
          M`=\frac1{2^3}`,
          M`=\frac18`
        ]
      },
      {
        q: M`2^3\cdot2^2`,
        value: 32,
        steps: [
          M`=2^{3+2}`,
          M`=2^5=32`
        ]
      },
      {
        q: M`\frac{3^4}{3^2}`,
        value: 9,
        steps: [
          M`=3^{4-2}`,
          M`=3^2=9`
        ]
      }
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,
    tasks: [
      {
        q: M`2^{x}=64,\quad x=?`,
        value: 6,
        steps: [
          M`64=2^6`,
          M`2^x=2^6`,
          M`x=6`
        ]
      },
      {
        q: M`3^{x}=243,\quad x=?`,
        value: 5,
        steps: [
          M`243=3^5`,
          M`x=5`
        ]
      },
      {
        q: M`5^{x}=125,\quad x=?`,
        value: 3,
        steps: [
          M`125=5^3`,
          M`x=3`
        ]
      },
      {
        q: M`2^{x+1}=32,\quad x=?`,
        value: 4,
        steps: [
          M`32=2^5`,
          M`x+1=5`,
          M`x=4`
        ]
      },
      {
        q: M`3^{2x}=81,\quad x=?`,
        value: 2,
        steps: [
          M`81=3^4`,
          M`2x=4`,
          M`x=2`
        ]
      }
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,
    tasks: [
      {
        q: M`2^{x+2}=128,\quad x=?`,
        value: 5,
        steps: [
          M`128=2^7`,
          M`x+2=7`,
          M`x=5`
        ]
      },
      {
        q: M`3^{x-1}=27,\quad x=?`,
        value: 4,
        steps: [
          M`27=3^3`,
          M`x-1=3`,
          M`x=4`
        ]
      },
      {
        q: M`4^x=64,\quad x=?`,
        value: 3,
        steps: [
          M`64=4^3`,
          M`x=3`
        ]
      },
      {
        q: M`\frac{2^{x+3}}{2^{x}}`,
        value: 8,
        steps: [
          M`=2^{x+3-x}`,
          M`=2^3`,
          M`=8`
        ]
      },
      {
        q: M`2^{x}+2^{x}=64,\quad x=?`,
        value: 5,
        steps: [
          M`2\cdot2^x=64`,
          M`2^x=32`,
          M`2^x=2^5`,
          M`x=5`
        ]
      }
    ]
  }
];

// ======================================
// ТОПТЫҚ ОЙЫН — 15 СҰРАҚ
// ======================================

const quiz = [
  {
    q: "Көрсеткіштік функцияның жалпы түрі?",
    options: [
      "y=x²",
      "y=aˣ",
      "y=ax+b",
      "y=x+a"
    ],
    correct: 1
  },
  {
    q: "Көрсеткіштік функцияда айнымалы қайда орналасады?",
    options: [
      "Бөлшектің бөлімінде",
      "Негізде",
      "Дәреже көрсеткішінде",
      "Тек жақшада"
    ],
    correct: 2
  },
  {
    q: "2³ нешеге тең?",
    options: ["8", "6", "9", "4"],
    correct: 0
  },
  {
    q: "Көрсеткіштік функцияның негізі қандай болуы керек?",
    options: [
      "Теріс",
      "Нөл",
      "Кез келген",
      "Оң және 1-ге тең емес"
    ],
    correct: 3
  },
  {
    q: "Негізі 1-ден үлкен функция қалай өзгереді?",
    options: [
      "Кемиді",
      "Өседі",
      "Тұрақты",
      "Периодты"
    ],
    correct: 1
  },
  {
    q: "Негізі 0 мен 1 арасында болса?",
    options: [
      "Өседі",
      "Тұрақты",
      "Кемиді",
      "Тек нөлге тең"
    ],
    correct: 2
  },
  {
    q: "Кез келген оң санның нөлінші дәрежесі?",
    options: ["1", "0", "Өзіне тең", "−1"],
    correct: 0
  },
  {
    q: "2⁻¹ мәні?",
    options: ["2", "−2", "−1/2", "1/2"],
    correct: 3
  },
  {
    q: "Көрсеткіштік функцияның анықталу облысы?",
    options: [
      "Тек оң сандар",
      "Барлық нақты сандар",
      "Тек нөл",
      "Тек теріс сандар"
    ],
    correct: 1
  },
  {
    q: "Көрсеткіштік функцияның мәндер жиыны?",
    options: [
      "Барлық нақты сандар",
      "Теріс сандар",
      "Оң сандар",
      "Тек бүтін сандар"
    ],
    correct: 2
  },
  {
    q: "Барлық көрсеткіштік функция графигі қай нүктеден өтеді?",
    options: [
      "(0;1)",
      "(1;0)",
      "(0;0)",
      "(1;1)"
    ],
    correct: 0
  },
  {
    q: "3² нешеге тең?",
    options: ["6", "12", "27", "9"],
    correct: 3
  },
  {
    q: "2⁴ мәні?",
    options: ["8", "16", "12", "4"],
    correct: 1
  },
  {
    q: "2ˣ=32 теңдеуінің шешімі?",
    options: ["4", "6", "5", "3"],
    correct: 2
  },
  {
    q: "1/2 негізді көрсеткіштік функция қалай өзгереді?",
    options: [
      "Кемиді",
      "Өседі",
      "Өзгермейді",
      "Анықталмайды"
    ],
    correct: 0
  }
];

// ======================================
// ҮЙ ЖҰМЫСЫ
// ======================================

const homework = [
  {
    title: "1. Функцияларды зерттеу",

    text:
      "Берілген функциялардың анықталу облысын, мәндер жиынын, өсу немесе кему қасиетін анықтаңдар. Екі функцияның графигін дәптерге салыңдар.",

    formulas: [
      M`y=2^x`,
      M`y=\left(\frac13\right)^x`,
      M`y=5^x`
    ]
  },

  {
    title: "2. Көрсеткіштік теңдеулер",

    text:
      "Төмендегі үш теңдеуді шығарыңдар. Негіздерді бірдей түрге келтіріп, теңдік қасиетін қолданыңдар.",

    formulas: [
      M`2^{x+2}=64`,
      M`3^{2x-1}=243`,
      M`5^{x-1}=\frac1{25}`
    ]
  },

  {
    title: "3. Теориялық жұмыс",

    text:
      "«Өспелі және кемімелі көрсеткіштік функциялардың айырмашылығы» тақырыбында 8–10 сөйлем жазыңдар. Әр функцияға бір мысал келтіріп, графиктерді салыстырыңдар.",

    formulas: [
      M`y=2^x`,
      M`y=\left(\frac12\right)^x`
    ]
  }
];

// ======================================
// 37 СЛАЙД
// ======================================

const slides = [{type: "intro", title: "Кіріспе"}];

theory.forEach((item, i) => {
  slides.push({
    type: "theory",
    index: i,
    title: `Түсіндірме ${i + 1}`
  });
});

notes.forEach((item, i) => {
  slides.push({
    type: "note",
    index: i,
    title: `Конспект ${i + 1}`
  });
});

levels.forEach((item, i) => {
  slides.push({
    type: "level",
    index: i,
    title: `${i + 1}-деңгей`
  });
});

quiz.forEach((item, i) => {
  slides.push({
    type: "game",
    index: i,
    title: `${i % 3 + 1}-топ — ${i + 1}-сұрақ`
  });
});

slides.push(
  {type: "homework", title: "Үй жұмысы"},
  {type: "finish", title: "Қорытынды"}
);

let currentPage = 0;
let individualScore = 0;
let teamScores = [0, 0, 0];

const completedTasks = new Set();
const gameAnswers = new Map();

let secondsLeft = 4800;
let timerInterval = null;
let timerDeadline = 0;

// ======================================
// КӨМЕКШІ ФУНКЦИЯЛАР
// ======================================

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function math(tex) {
  return `<div class="math">\\[${tex}\\]</div>`;
}

function card(color, title, body) {
  return `
    <section class="card ${color}">
      <h3>${escapeHTML(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(items) {
  return items.map((item, i) => `
    <div class="step">
      <strong>${i + 1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

// ======================================
// КӨРСЕТКІШТІК ФУНКЦИЯ ГРАФИГІ
// ======================================

function graphHTML(base) {
  const width = 680;
  const height = 330;

  const X = x => 340 + x * 80;
  const Y = y => 295 - y * 30;

  let grid = "";

  for (let x = -3; x <= 3; x++) {
    grid += `
      <line class="graph-grid"
        x1="${X(x)}" y1="10"
        x2="${X(x)}" y2="${height - 10}"/>
      <text x="${X(x) - 5}" y="315">${x}</text>
    `;
  }

  for (let y = 0; y <= 9; y++) {
    grid += `
      <line class="graph-grid"
        x1="30" y1="${Y(y)}"
        x2="655" y2="${Y(y)}"/>
      <text x="10" y="${Y(y) + 5}">${y}</text>
    `;
  }

  const points = [];

  for (let x = -3; x <= 3.1; x += 0.03) {
    const y = Math.pow(base, x);

    if (y <= 9.5) {
      const px = X(x);
      const py = Y(y);

      points.push(`${px.toFixed(2)},${py.toFixed(2)}`);
    } else {
      points.push(null);
    }
  }

  const segments = [];
  let current = [];

  for (const point of points) {
    if (point === null) {
      if (current.length) {
        segments.push(current);
        current = [];
      }
    } else {
      current.push(point);
    }
  }

  if (current.length) segments.push(current);

  const curves = segments.map(segment => `
    <polyline
      points="${segment.join(" ")}"
      fill="none"
      stroke="#76f0e5"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"/>
  `).join("");

  return `
    <svg class="graph"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${width} ${height}"
      role="img"
      aria-label="Көрсеткіштік функция графигі">

      ${grid}

      <line class="graph-axis"
        x1="30" y1="${Y(0)}"
        x2="660" y2="${Y(0)}"/>

      <line class="graph-axis"
        x1="${X(0)}" y1="10"
        x2="${X(0)}" y2="320"/>

      ${curves}

      <circle cx="${X(0)}" cy="${Y(1)}"
        r="6" fill="#ffdc8b"/>

      <text x="355" y="${Y(1) - 10}">(0; 1)</text>
      <text x="653" y="${Y(0) - 8}">x</text>
      <text x="${X(0) + 10}" y="19">y</text>
    </svg>

    <p class="graph-note">
      y = ${base === .5 ? "(1/2)" : base}<sup>x</sup>
      функциясының графигі.
      Сары нүкте — (0; 1).
    </p>
  `;
}

// ======================================
// КОНСПЕКТТЕГІ 2 ӨЗІНДІК ЕСЕП
// ======================================

function selfWorksHTML(items, noteIndex) {
  return items.map((item, i) => {
    const id = `self_${noteIndex}_${i}`;

    return `
      <section class="self-task">

        <h3>✏️ ${i + 1}-өзіндік есеп</h3>

        ${math(item.q)}

        <p>
          Есепті дәптерге өз беттеріңмен шығарыңдар.
          Кейін төмендегі батырманы басып тексеріңдер.
        </p>

        <button class="action"
          data-toggle="${id}">
          Шешу жолын көрсету
        </button>

        <div class="solution" id="${id}" hidden>
          ${stepsHTML(item.steps)}

          <h3>Дұрыс жауап</h3>
          ${math(item.answer)}
        </div>

      </section>
    `;
  }).join("");
}

// ======================================
// КІРІСПЕ
// ======================================

function renderIntro() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §12. ${escapeHTML(lesson.title)}
      </h1>

      ${card("blue", "Сабақтың мақсаты", `
        <p>${escapeHTML(lesson.goal)}</p>
      `)}

      ${card("gold", "Негізгі формула",
        math(M`y=a^x,\qquad a>0,\quad a\ne1`)
      )}

      ${card("purple", "Көрсеткіштік функция графигі",
        graphHTML(2)
      )}

      ${card("green", "Сабақтың бөлімдері", `
        <p>5 теориялық түсіндірме</p>
        <p>10 конспект және 20 өзіндік есеп</p>
        <p>4 деңгей бойынша 20 есеп</p>
        <p>3 топқа арналған 15 сұрақ</p>
        <p>Үй жұмысы және қорытынды</p>
      `)}

      ${card("blue", "80 минуттық жоспар", `
        <p>Кіріспе — 5 минут</p>
        <p>Түсіндірмелер — 20 минут</p>
        <p>Конспектілер және өзіндік жұмыс — 15 минут</p>
        <p>Деңгейлік есептер — 20 минут</p>
        <p>Топтық ойын — 15 минут</p>
        <p>Қорытынды және үй жұмысы — 5 минут</p>
      `)}

    </div>
  `;
}

// ======================================
// ТҮСІНДІРМЕ — ӨЗІНДІК ЖҰМЫССЫЗ
// ======================================

function renderTheory(i) {
  const t = theory[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТҮСІНДІРМЕ ${i + 1} / 5
      </div>

      <h2>${escapeHTML(t.title)}</h2>

      ${card("blue", "Анықтама",
        `<p>${escapeHTML(t.definition)}</p>`
      )}

      ${card("purple", "Қарапайым түсіндірме",
        `<p>${escapeHTML(t.explain)}</p>`
      )}

      ${card("green", "Ереже",
        `<p>${escapeHTML(t.rule)}</p>`
      )}

      ${card("gold", "Негізгі формула",
        math(t.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(t.worked)
      )}

      ${card("blue", "Функция графигі",
        graphHTML(t.graph)
      )}

      ${card("red", "Назар аударыңдар!",
        `<p>${escapeHTML(t.warning)}</p>`
      )}

    </div>
  `;
}

// ======================================
// КОНСПЕКТ
// ======================================

function renderNote(i) {
  const n = notes[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${i + 1} / 10
      </div>

      <h2>${escapeHTML(n.title)}</h2>

      <div class="notebook">
        <h3>✍ Дәптерге жазып алыңдар</h3>
        <p>${escapeHTML(n.text)}</p>
      </div>

      ${card("gold", "Негізгі формула",
        math(n.formula)
      )}

      ${card("green", "Шығарылған мысал",
        stepsHTML(n.example)
      )}

      <div class="eyebrow">ӨЗІНДІК ЖҰМЫС</div>
      <h2>✏️ Екі есеп</h2>

      ${selfWorksHTML(n.self, i)}

    </div>
  `;
}

// ======================================
// 4 ДЕҢГЕЙ
// ======================================

function renderLevel(i) {
  const level = levels[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙЛІК ТАПСЫРМА ${i + 1} / 4
      </div>

      <h2>${escapeHTML(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>Әр дұрыс жауап: +${level.points} ұпай</span>
      </div>

      <p>
        Есепті дәптерге шығарып,
        жауабын сан немесе бөлшек түрінде енгізіңдер.
      </p>

      <div class="level-grid">

        ${level.tasks.map((task, j) => {
          const key = `${i}_${j}`;
          const done = completedTasks.has(key);

          return `
            <section class="level-task">

              <h3>${j + 1}-есеп</h3>
              ${math(task.q)}

              <div class="answer-row">

                <input
                  id="answer_${key}"
                  type="text"
                  placeholder="Жауап, мысалы 1/4"
                  ${done ? "disabled" : ""}
                >

                <button data-check="${key}"
                  ${done ? "disabled" : ""}>
                  ${done ? "✓ Дұрыс" : "Тексеру"}
                </button>

              </div>

              <p id="feedback_${key}"
                class="feedback ${done ? "correct" : ""}">

                ${done
                  ? `✓ +${level.points} ұпай`
                  : "Жауабыңды енгіз."}

              </p>

              <button class="action"
                data-toggle="solution_${key}">
                Шешу жолын көрсету
              </button>

              <div id="solution_${key}"
                class="solution" hidden>

                ${stepsHTML(task.steps)}

                <h3>Дұрыс жауап</h3>
                ${math(String(task.value))}

              </div>

            </section>
          `;
        }).join("")}

      </div>
    </div>
  `;
}

// ======================================
// ТОПТЫҚ ОЙЫН
// ======================================

function renderGame(i) {
  const q = quiz[i];
  const team = i % 3;
  const chosen = gameAnswers.get(i);

  return `
    <div class="slide">

      <div class="eyebrow">
        ТОПТЫҚ ОЙЫН ${i + 1} / 15
      </div>

      <h2>🏆 ${team + 1}-топ жауап береді</h2>

      <div class="scores">
        ${teamScores.map((points, j) => `
          <div class="team ${team === j ? "current" : ""}">
            ${j + 1}-топ
            <strong>${points}</strong>
          </div>
        `).join("")}
      </div>

      ${card("gold", `${i + 1}-сұрақ`, `

        <p>${escapeHTML(q.q)}</p>

        <div class="answers">
          ${q.options.map((option, j) => {

            let cls = "";

            if (chosen !== undefined) {
              if (j === q.correct) cls = "correct";
              else if (j === chosen) cls = "wrong";
            }

            return `
              <button data-choice="${j}"
                class="${cls}"
                ${chosen !== undefined ? "disabled" : ""}>

                ${"ABCD"[j]}. ${escapeHTML(option)}

              </button>
            `;
          }).join("")}
        </div>

        <p>
          ${chosen === undefined
            ? "Бір жауапты таңдаңдар."
            : chosen === q.correct
              ? "✓ Дұрыс! +10 ұпай."
              : "Дұрыс жауап: " +
                escapeHTML(q.options[q.correct])}
        </p>

      `)}

      ${card("blue", "Ойын ережесі", `
        <p>Топтар 1 → 2 → 3 ретімен ауысады.</p>
        <p>Әр дұрыс жауапқа 10 ұпай қосылады.</p>
        <p>Жауап берген соң «Келесі» батырмасын басыңдар.</p>
      `)}

    </div>
  `;
}

// ======================================
// ҮЙ ЖҰМЫСЫ
// ======================================

function renderHomework() {
  return `
    <div class="slide">

      <div class="eyebrow">ҮЙ ТАПСЫРМАСЫ</div>
      <h2>📚 Үй жұмысы</h2>

      ${homework.map((item, i) => card(
        ["blue", "gold", "green"][i],
        item.title,

        `<p>${escapeHTML(item.text)}</p>` +
        item.formulas.map(math).join("")
      )).join("")}

    </div>
  `;
}

// ======================================
// ҚОРЫТЫНДЫ
// ======================================

function renderFinish() {
  const maxScore = Math.max(...teamScores);

  const winners = teamScores
    .map((points, i) =>
      points === maxScore ? `${i + 1}-топ` : null
    )
    .filter(Boolean);

  return `
    <div class="slide">

      <div class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</div>

      <h1 class="gradient">Сабақ аяқталды!</h1>

      <div class="scores">
        ${teamScores.map((points, i) => `
          <div class="team">
            ${i + 1}-топ
            <strong>${points}</strong>
          </div>
        `).join("")}
      </div>

      ${card("green", "Ойын нәтижесі", `
        <p>
          ${winners.join(", ")}
          ${winners.length === 1
            ? "— жеңімпаз!"
            : "— бірдей ұпай жинады!"}
        </p>
      `)}

      ${card("blue", "Деңгейлік есептер", `
        <p>Орындалған есеп: ${completedTasks.size} / 20</p>
        <p>Жеке ұпай: ${individualScore}</p>
      `)}

      ${card("gold", "Не үйрендік?", `
        <p>Көрсеткіштік функцияны таныдық.</p>
        <p>Анықталу облысы мен мәндер жиынын таптық.</p>
        <p>Өспелі және кемімелі графиктерді салыстырдық.</p>
        <p>Көрсеткіштік өрнектерді есептедік.</p>
      `)}

      <h2>Сау болыңыздар!</h2>

    </div>
  `;
}

// ======================================
// ФОРМУЛАЛАРДЫ ЖАҢАРТУ
// ======================================

let mathQueue = Promise.resolve();
let renderVersion = 0;

function refreshMath() {
  if (!window.MathJax) return;

  const version = renderVersion;

  mathQueue = mathQueue.then(async () => {
    await MathJax.startup.promise;

    if (version !== renderVersion) return;

    const content = $("content");

    if (MathJax.typesetClear) {
      MathJax.typesetClear([content]);
    }

    await MathJax.typesetPromise([content]);
  }).catch(error => {
    console.warn("Формула қатесі:", error);
  });
}

// ======================================
// БЕТТІ КӨРСЕТУ
// ======================================

function render() {
  const slide = slides[currentPage];
  let html = "";

  switch (slide.type) {
    case "intro":
      html = renderIntro();
      break;

    case "theory":
      html = renderTheory(slide.index);
      break;

    case "note":
      html = renderNote(slide.index);
      break;

    case "level":
      html = renderLevel(slide.index);
      break;

    case "game":
      html = renderGame(slide.index);
      break;

    case "homework":
      html = renderHomework();
      break;

    case "finish":
      html = renderFinish();
      break;
  }

  renderVersion++;

  $("content").innerHTML = html;
  $("content").scrollTop = 0;

  $("pageCounter").textContent =
    `${currentPage + 1} / ${slides.length}`;

  $("pageTitle").textContent = slide.title;

  $("pageProgress").style.width =
    `${(currentPage + 1) / slides.length * 100}%`;

  $("prevPage").disabled = currentPage === 0;

  $("nextPage").disabled =
    currentPage === slides.length - 1;

  updateScores();

  document.querySelectorAll("[data-section]").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.section === slide.type
    );
  });

  refreshMath();
}

// ======================================
// ҰПАЙДЫ ЖАҢАРТУ
// ======================================

function updateScores() {
  $("totalScore").textContent =
    individualScore +
    teamScores.reduce((a, b) => a + b, 0);
}

// ======================================
// БЕТТЕРДІ АУЫСТЫРУ
// ======================================

function nextPage() {
  if (currentPage < slides.length - 1) {
    currentPage++;
    render();
  }
}

function previousPage() {
  if (currentPage > 0) {
    currentPage--;
    render();
  }
}

function jumpTo(type) {
  const index = slides.findIndex(s => s.type === type);

  if (index >= 0) {
    currentPage = index;
    render();
  }
}

$("nextPage").addEventListener("click", nextPage);

$("prevPage").addEventListener(
  "click",
  previousPage
);

document.querySelectorAll("[data-section]").forEach(btn => {
  btn.addEventListener("click", () => {
    jumpTo(btn.dataset.section);
  });
});

// ======================================
// КОНСПЕКТ ЖӘНЕ ДЕҢГЕЙ БАТЫРМАЛАРЫ
// ======================================

$("content").addEventListener("click", event => {
  const toggle = event.target.closest("[data-toggle]");

  if (toggle) {
    const block = $(toggle.dataset.toggle);

    if (block) {
      block.hidden = !block.hidden;

      if (!block.hidden) {
        // Бұрын жасырылған формулаларды
        // қайта есептеуге қажеттілік жоқ,
        // бірақ алғашқы жүктелуін қамтамасыз етеміз.
        refreshMath();
      }
    }

    return;
  }

  const check = event.target.closest("[data-check]");

  if (check) {
    checkAnswer(check.dataset.check);
    return;
  }

  const choice = event.target.closest("[data-choice]");

  if (choice) {
    answerGame(Number(choice.dataset.choice));
  }
});

// ======================================
// ДЕҢГЕЙ ЕСЕПТЕРІН ТЕКСЕРУ
// ======================================

function checkAnswer(key) {
  if (completedTasks.has(key)) return;

  const [levelIndex, taskIndex] =
    key.split("_").map(Number);

  const level = levels[levelIndex];
  const task = level.tasks[taskIndex];

  const input = $("answer_" + key);
  const feedback = $("feedback_" + key);

  if (!input.value.trim()) {
    feedback.textContent = "Алдымен жауапты енгіз.";
    return;
  }

  let value;

  try {
    value = calculate(input.value);
  } catch (error) {
    feedback.textContent =
      "Санды немесе бөлшекті дұрыс енгіз.";
    return;
  }

  const tolerance =
    0.000001 * Math.max(1, Math.abs(task.value));

  if (Math.abs(value - task.value) <= tolerance) {
    completedTasks.add(key);

    individualScore += level.points;
    input.disabled = true;

    const button = document.querySelector(
      `[data-check="${key}"]`
    );

    if (button) {
      button.disabled = true;
      button.textContent = "✓ Дұрыс";
    }

    feedback.classList.add("correct");
    feedback.textContent =
      `✓ Дұрыс! +${level.points} ұпай`;

    updateScores();
  } else {
    feedback.textContent =
      "Қате жауап. Қайта есептеп көр.";
  }
}

// ======================================
// ТОПТЫҚ ОЙЫН
// ======================================

function answerGame(choice) {
  const slide = slides[currentPage];

  if (slide.type !== "game") return;
  if (gameAnswers.has(slide.index)) return;

  gameAnswers.set(slide.index, choice);

  if (choice === quiz[slide.index].correct) {
    teamScores[slide.index % 3] += 10;
  }

  render();
}

$("resetGame").addEventListener("click", () => {
  teamScores = [0, 0, 0];
  gameAnswers.clear();
  render();
});

// ======================================
// ТОЛЫҚ ЭКРАН
// ======================================

$("fullscreenBtn").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    console.warn(error);
  }
});

// ======================================
// 80 МИНУТТЫҚ ТАЙМЕР
// ======================================

function formatTime(seconds) {
  return (
    String(Math.floor(seconds / 60)).padStart(2, "0") +
    ":" +
    String(seconds % 60).padStart(2, "0")
  );
}

function updateTimer() {
  $("remaining").textContent = formatTime(secondsLeft);

  $("elapsed").textContent =
    formatTime(4800 - secondsLeft);

  $("timeProgress").style.width =
    `${(4800 - secondsLeft) / 4800 * 100}%`;
}

function startTimer() {
  if (timerInterval !== null || secondsLeft <= 0) return;

  timerDeadline = Date.now() + secondsLeft * 1000;

  timerInterval = setInterval(() => {
    secondsLeft = Math.max(
      0,
      Math.ceil((timerDeadline - Date.now()) / 1000)
    );

    updateTimer();

    if (secondsLeft === 0) pauseTimer();
  }, 250);
}

function pauseTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function resetTimer() {
  pauseTimer();
  secondsLeft = 4800;
  updateTimer();
}

$("timerStart").addEventListener("click", startTimer);
$("timerPause").addEventListener("click", pauseTimer);
$("timerReset").addEventListener("click", resetTimer);

// ======================================
// АЛМАТЫ САҒАТЫ
// ======================================

function updateClock() {
  $("clock").textContent =
    new Intl.DateTimeFormat("kk-KZ", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
}

updateClock();
setInterval(updateClock, 1000);

// ======================================
// ҚАРАПАЙЫМ ЖӘНЕ ҒЫЛЫМИ КАЛЬКУЛЯТОР
// ======================================

const calcValues = {
  basic: "",
  science: ""
};

const calcKeys = {
  basic: [
    "C", "⌫", "(", ")",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ],

  science: [
    "C", "⌫", "(", ")",
    "sin", "cos", "tg", "ctg",
    "√", "∛", "x²", "xʸ",
    "log", "ln", "π", "e",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ]
};

const calcMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "sin": "sin(",
  "cos": "cos(",
  "tg": "tan(",
  "ctg": "ctg(",
  "√": "sqrt(",
  "∛": "cbrt(",
  "log": "log(",
  "ln": "ln(",
  "π": "pi",
  "x²": "^2",
  "xʸ": "^"
};

// ======================================
// КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// ======================================

function createCalculator(type) {
  const grid = $("keys-" + type);

  calcKeys[type].forEach(key => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = key;

    if (key === "C") button.classList.add("clear");
    if (key === "=") button.classList.add("equal");

    if (["sin", "cos", "tg", "ctg", "log", "ln"].includes(key)) {
      button.classList.add("trig");
    }

    if (["+", "−", "×", "÷", "√", "∛", "x²", "xʸ"].includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click", () => {
      pressCalc(type, key);
    });

    grid.appendChild(button);
  });
}

// ======================================
// МӘН ЕНГІЗУ
// ======================================

function pressCalc(type, key) {
  let value = calcValues[type];

  if (key === "C") {
    value = "";
  } else if (key === "⌫") {
    value = value.slice(0, -1);
  } else if (key === "=") {
    try {
      const result = calculate(value);
      value = String(Number(result.toPrecision(12)));
    } catch (error) {
      value = "Қате";
    }
  } else {
    if (value === "Қате") value = "";
    value += calcMap[key] ?? key;
  }

  calcValues[type] = value;

  const display = $("display-" + type);
  display.textContent = value || "0";
  display.scrollLeft = display.scrollWidth;
}

// ======================================
// МАТЕМАТИКАЛЫҚ ЕСЕПТЕУ
// ======================================
// sin, cos, tg, ctg — градуспен.
// eval() қолданылмайды.

function calculate(input) {
  const source = String(input)
    .replace(/\s+/g, "")
    .replace(/,/g, ".");

  let pos = 0;
  const rad = x => x * Math.PI / 180;

  const functions = {
    sin: x => Math.sin(rad(x)),
    cos: x => Math.cos(rad(x)),

    tan: x => {
      if (Math.abs(Math.cos(rad(x))) < 1e-12) {
        throw Error("Тангенс анықталмаған");
      }
      return Math.tan(rad(x));
    },

    ctg: x => {
      if (Math.abs(Math.sin(rad(x))) < 1e-12) {
        throw Error("Котангенс анықталмаған");
      }
      return Math.cos(rad(x)) / Math.sin(rad(x));
    },

    sqrt: Math.sqrt,
    cbrt: Math.cbrt,
    log: Math.log10,
    ln: Math.log
  };

  function take(symbol) {
    if (source[pos] === symbol) {
      pos++;
      return true;
    }
    return false;
  }

  function atom() {
    if (take("(")) {
      const value = expression();

      if (!take(")")) throw Error("Жақша жабылмаған");
      return value;
    }

    const rest = source.slice(pos);

    const number = rest.match(/^(?:\d+\.?\d*|\.\d+)/);

    if (number) {
      pos += number[0].length;
      return Number(number[0]);
    }

    if (rest.startsWith("pi")) {
      pos += 2;
      return Math.PI;
    }

    if (rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    for (const name of Object.keys(functions)) {
      if (rest.startsWith(name + "(")) {
        pos += name.length + 1;

        const argument = expression();

        if (!take(")")) throw Error("Жақша жабылмаған");

        return functions[name](argument);
      }
    }

    throw Error("Өрнек дұрыс емес");
  }

  function postfix() {
    let value = atom();

    while (take("%")) value /= 100;

    return value;
  }

  function power() {
    let value = postfix();

    if (take("^")) {
      value = Math.pow(value, unary());
    }

    return value;
  }

  function unary() {
    if (take("+")) return unary();
    if (take("-")) return -unary();

    return power();
  }

  function term() {
    let value = unary();

    while (true) {
      if (take("*")) {
        value *= unary();

      } else if (take("/")) {
        const divisor = unary();

        if (divisor === 0) {
          throw Error("Нөлге бөлуге болмайды");
        }

        value /= divisor;

      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value = term();

    while (true) {
      if (take("+")) {
        value += term();

      } else if (take("-")) {
        value -= term();

      } else {
        break;
      }
    }

    return value;
  }

  if (!source) throw Error("Бос өрнек");

  const result = expression();

  if (pos !== source.length || !Number.isFinite(result)) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result) < 1e-12 ? 0 : result;
}

// ======================================
// КАЛЬКУЛЯТОРДЫ АШУ ЖӘНЕ ЖАБУ
// ======================================

function toggleCalculator(type) {
  const element = $("calc-" + type);
  const other = type === "basic" ? "science" : "basic";

  const opening = !element.classList.contains("visible");

  $("calc-" + other).classList.remove("visible");
  element.classList.toggle("visible", opening);

  if (opening) {
    const rect = element.getBoundingClientRect();

    const maxX = Math.max(
      0,
      innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(0, Math.min(maxX, rect.left)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, rect.top)) + "px";
  }
}

$("basicOpen").addEventListener("click", () => {
  toggleCalculator("basic");
});

$("scienceOpen").addEventListener("click", () => {
  toggleCalculator("science");
});

document.querySelectorAll("[data-close]").forEach(button => {
  button.addEventListener("click", () => {
    $("calc-" + button.dataset.close)
      .classList.remove("visible");
  });
});

// ======================================
// КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ======================================

function makeDraggable(element) {
  const handle = element.querySelector(".calc-head");
  let drag = null;

  handle.addEventListener("pointerdown", event => {
    if (event.target.closest("button")) return;
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const rect = element.getBoundingClientRect();

    drag = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: rect.left,
      top: rect.top
    };

    handle.setPointerCapture(event.pointerId);
  });

  handle.addEventListener("pointermove", event => {
    if (!drag || drag.id !== event.pointerId) return;

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    const maxX = Math.max(
      0,
      innerWidth - element.offsetWidth
    );

    const maxY = Math.max(
      0,
      innerHeight - element.offsetHeight
    );

    element.style.left =
      Math.max(0, Math.min(maxX, drag.left + dx)) + "px";

    element.style.top =
      Math.max(0, Math.min(maxY, drag.top + dy)) + "px";
  });

  handle.addEventListener("pointerup", () => {
    drag = null;
  });

  handle.addEventListener("pointercancel", () => {
    drag = null;
  });
}

// ======================================
// САЙТТЫ ІСКЕ ҚОСУ
// ======================================

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
