window.UNIT = {
  slug: "would-you-rather",
  number: 39,
  title: "Would You Rather…?",
  level: "B1",
  minutes: 60,
  speakers: { "Nayeli": "f", "Kevin": "m", "Host": "f", "Shopper": "m", "Shopper 2": "f" },
  focus: ["consumer choices vocabulary", "prefer + noun / -ing + to", "would prefer to + verb", "would rather + base verb (than)", "would rather not / I'd rather you didn't"],

  presentation: {
    scene: "🛒🤔⚖️🛍️",
    situation: "Nayeli and Kevin are playing a game called *Would You Rather?* while they wait for their food at a café.",
    warmup: {
      prompt: "What do you prefer? Choose the options you like more.",
      options: ["online shopping", "shopping in stores", "local markets", "big supermarkets", "new clothes", "second-hand clothes", "saving money", "spending money", "cash", "card", "brand names", "cheap products"],
      response: "Everyone has preferences! In this unit you'll learn different ways to express them."
    },
    dialogueTitle: "Would you rather…?",
    dialogue: [
      { who: "Kevin", line: "OK, my turn. *Would you rather* live without music or without your phone?" },
      { who: "Nayeli", line: "Easy. *I'd rather* live without my phone. *I prefer* music *to* social media." },
      { who: "Kevin", line: "Really? *I'd rather* lose music *than* my phone!" },
      { who: "Nayeli", line: "Ha! OK, my turn. *Would you rather* buy expensive clothes that last ten years or cheap clothes that last one year?" },
      { who: "Kevin", line: "Hmm. *I'd prefer to* buy good quality. *I prefer spending* more money once *to buying* the same thing ten times." },
      { who: "Nayeli", line: "Me too. That's why *I'd rather* shop at second-hand stores: good quality and cheap!" },
      { who: "Kevin", line: "Interesting. *I'd rather not* wear other people's clothes, but it's a good idea for the planet." }
    ]
  },

  objectives: [
    "I can talk about shopping habits and consumer choices.",
    "I can express general preferences with *prefer… to…*",
    "I can express specific preferences with *would prefer* and *would rather*.",
    "I can compare options and justify my choices."
  ],

  explanation: {
    vocabTitle: "Consumer choices",
    vocab: [
      { word: "a bargain", icon: "🏷️" }, { word: "second-hand", icon: "🔁" }, { word: "a brand", icon: "™️" },
      { word: "fast fashion", icon: "👗" }, { word: "fair trade", icon: "🤝" }, { word: "local products", icon: "🌽" },
      { word: "a consumer", icon: "🛍️" }, { word: "good quality", icon: "⭐" }, { word: "long-lasting", icon: "⏳" },
      { word: "disposable", icon: "🗑️" }, { word: "impulse buying", icon: "⚡" }, { word: "a receipt", icon: "🧾" },
      { word: "a refund", icon: "💳" }, { word: "worth the money", icon: "💯" }, { word: "overpriced", icon: "💸" }
    ],
    grammar: [
      {
        title: "Prefer (general preferences)",
        head: ["Structure", "Example"],
        rows: [
          ["*prefer* + noun + *to* + noun", "I *prefer* music *to* social media."],
          ["*prefer* + -ing + *to* + -ing", "I *prefer spending* more *to buying* things twice."],
          ["*prefer* + *to* + verb", "I *prefer to* shop online."]
        ]
      },
      {
        title: "Would prefer / would rather (specific situations)",
        head: ["Structure", "Example"],
        rows: [
          ["*would ('d) prefer* + *to* + verb", "I*'d prefer to* buy good quality."],
          ["*would ('d) rather* + base verb", "I*'d rather* live without my phone."],
          ["*would rather* + verb + *than* + verb", "I*'d rather* lose music *than* my phone."],
          ["*would rather not* + base verb", "I*'d rather not* wear used clothes."],
          ["question", "*Would you rather* stay or go? / *Would you prefer to* pay in cash?"]
        ],
        note: "*Would rather* has no *to*: *I'd rather go*, not *I'd rather to go*. *Would prefer* needs *to*: *I'd prefer to go*."
      },
      {
        title: "Would rather + another person",
        head: ["Structure", "Example"],
        rows: [
          ["*would rather* + person + past simple", "I*'d rather you didn't* tell anyone. / I*'d rather we went* by bus."]
        ],
        note: "The past simple here refers to the present or future. It's a polite way to say what you want someone to do."
      }
    ],
    watchOut: [
      ["I'd rather to stay home.", "I'd rather stay home."],
      ["I prefer coffee than tea.", "I prefer coffee to tea."],
      ["I'd prefer stay here.", "I'd prefer to stay here."],
      ["I'd rather you don't call me.", "I'd rather you didn't call me."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "I prefer tea [[to]] coffee.",
        "I'd rather [[not]] go out tonight. I'm tired.",
        "Would you prefer [[to]] sit inside or outside?",
        "I'd rather walk [[than]] take a taxi."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a street survey about shopping habits.",
      title: "Street survey: how do you shop?",
      script: [
        { who: "Host", line: "Hi, I'm doing a survey about shopping habits. Do you prefer shopping online or in stores?" },
        { who: "Shopper", line: "Online, definitely. I prefer comparing prices on my phone to walking around a mall for hours. And it's faster." },
        { who: "Host", line: "Do you ever buy second-hand?" },
        { who: "Shopper", line: "For electronics, yes. Last year I bought a used laptop. But I'd rather not buy used shoes!" },
        { who: "Host", line: "Thank you! Excuse me, ma'am, can I ask you a few questions?" },
        { who: "Shopper 2", line: "Sure." },
        { who: "Host", line: "Online or in stores?" },
        { who: "Shopper 2", line: "I'd rather go to a store. I like to touch things before I buy them. And I prefer local markets to supermarkets. The fruit is fresher, and the money stays in the community." },
        { who: "Host", line: "Would you pay more for fair trade products?" },
        { who: "Shopper 2", line: "Yes, if I can. I'd rather pay a little more than support companies that don't pay their workers well." }
      ],
      activities: [
        {
          type: "sort", title: "Shopper 1 or Shopper 2?",
          prompt: "Listen. Who prefers what?",
          bins: ["Shopper 1 (man)", "Shopper 2 (woman)"],
          items: [
            { text: "prefers shopping online", bin: 0 }, { text: "likes comparing prices on the phone", bin: 0 }, { text: "bought a used laptop", bin: 0 }, { text: "would rather not buy used shoes", bin: 0 },
            { text: "likes to touch things before buying", bin: 1 }, { text: "prefers local markets", bin: 1 }, { text: "would pay more for fair trade", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The first shopper likes walking around malls.", a: false },
            { s: "The first shopper never buys second-hand.", a: false },
            { s: "The second shopper thinks market fruit is fresher.", a: true },
            { s: "The second shopper would never pay more for anything.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the slow fashion movement.",
      title: "Fast fashion or slow fashion?",
      text: [
        { body: "Every year, the world produces more than 100 billion pieces of clothing. Many of them are worn only a few times before they're thrown away. This is called *fast fashion*: cheap, trendy clothes produced very quickly." },
        { body: "The problem is the cost to the planet. The fashion industry uses huge amounts of water: it takes about 2,700 liters to make one cotton T-shirt. Also, many workers in fast fashion factories earn very low salaries." },
        { body: "That's why more and more young people say they'd rather buy fewer, better clothes. This is called *slow fashion*. Slow fashion consumers prefer quality to quantity, buy second-hand when possible and repair their clothes instead of throwing them away." },
        { body: "\"I'd rather have ten pieces I love than fifty I never wear,\" says Regina, a 21-year-old student from Querétaro who sells vintage clothes online. \"And honestly, I prefer finding a unique jacket in a market to wearing the same thing as everyone else.\"" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The world produces more than 100 billion pieces of clothing a year.", a: true },
            { s: "It takes about 270 liters to make a cotton T-shirt.", a: false },
            { s: "Slow fashion consumers prefer quantity to quality.", a: false },
            { s: "Slow fashion consumers repair their clothes.", a: true },
            { s: "Regina sells vintage clothes online.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Express the preference",
          prompt: "Rewrite each sentence with the words in parentheses.",
          items: [
            { q: "I like quality more than quantity. (prefer… to)", a: ["I prefer quality to quantity."] },
            { q: "I want to have ten pieces I love, not fifty I never wear. (would rather… than)", a: ["I'd rather have ten pieces I love than fifty I never wear.", "I would rather have ten pieces I love than fifty I never wear."] },
            { q: "I don't want to buy fast fashion. (would rather not)", a: ["I'd rather not buy fast fashion.", "I would rather not buy fast fashion."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice preferences, then write about your consumer choices.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I'd rather to walk.", a: ["I'd rather walk.", "I would rather walk."] },
            { q: "I prefer markets than supermarkets.", a: ["I prefer markets to supermarkets."] },
            { q: "I'd prefer buy it online.", a: ["I'd prefer to buy it online.", "I would prefer to buy it online."] },
            { q: "I'd rather you don't tell her.", a: ["I'd rather you didn't tell her.", "I would rather you didn't tell her."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Would you rather live in the city or the country?" },
            { a: "I'd rather lose music than my phone." },
            { a: "I prefer quality to quantity." },
            { a: "I'd prefer to pay by card." }
          ]
        },
        {
          type: "write", title: "My shopping style",
          prompt: "Write a text (120–150 words) about your shopping preferences: online or in stores, new or second-hand, brands or cheap products, cash or card. Explain your reasons. Use *prefer… to, would prefer to, would rather (than)* and *would rather not*.",
          minWords: 120, maxWords: 150,
          model: "I'm not a big shopper, but I know what I like. For clothes, I'd rather go to a store than buy online, because I prefer trying things on to returning them by mail. I also prefer second-hand stores to big malls. Last month I found a leather jacket for only three hundred pesos! For electronics, though, I'd prefer to buy new, because I want a guarantee. I'd rather not buy expensive brands, because I think many of them are overpriced. I prefer paying by card to carrying cash, but I always check my balance so I don't spend too much. My biggest weakness is books: I'd rather spend money on a good novel than on a new pair of shoes. In the future, I'd like to buy more local and fair trade products.",
          bank: ["I'd rather… than…", "I prefer… to…", "I'd prefer to…", "I'd rather not…", "because…", "My biggest weakness is…"],
          checklist: [
            "I used **prefer… to…**.",
            "I used **would prefer to** + verb.",
            "I used **would rather** (+ *than*) and **would rather not**.",
            "I gave **reasons** for my preferences."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the short forms *I'd rather* and *I'd prefer*.",
          items: [
            "Would you rather stay or go?",
            "I'd rather live without my phone.",
            "I prefer music to social media.",
            "I'd prefer to buy good quality.",
            "I'd rather not wear used clothes.",
            "I'd rather walk than take a taxi."
          ]
        },
        {
          type: "speak", title: "Would you rather…?",
          prompt: "Record yourself for one to two minutes answering at least four *Would you rather…?* questions and giving reasons. For example: *live in the city or the country? travel by plane or by bus? have a big party or a small dinner? work from home or in an office?*",
          language: ["I'd definitely rather…", "I'd rather… than…", "I prefer… to…", "I'd prefer to… because…", "I'd rather not…", "It depends, but…"],
          seconds: 120,
          checklist: ["answer at least four questions?", "use would rather and would prefer correctly?", "use prefer… to…?", "give reasons?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about shopping and consumer choices.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can use *prefer… to…* for general preferences.", review: "Explanation: prefer" },
    { can: "I can use *would prefer to* + verb.", review: "Explanation: would prefer / would rather" },
    { can: "I can use *would rather (than)* and *would rather not*.", review: "Explanation: would prefer / would rather; Writing activity 1" },
    { can: "I can understand people talking about preferences.", review: "Listening and Reading activities" },
    { can: "I can explain my preferences with reasons.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
