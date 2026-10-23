window.UNIT = {
  slug: "global-citizens",
  number: 49,
  title: "Global Citizens",
  level: "B1",
  minutes: 65,
  speakers: { "Moderator": "f", "Kenji": "m", "Amara": "f", "Luis": "m" },
  focus: ["global issues vocabulary", "zero conditional: facts and general truths", "first conditional: real future possibilities", "second conditional: imaginary present / future", "third conditional: imaginary past"],

  presentation: {
    scene: "🌍🤝🕊️💧",
    situation: "Three international students are at a Model United Nations event at the university. They're discussing the problem of water shortage.",
    warmup: {
      prompt: "Which global issues worry you most? Choose all.",
      options: ["climate change", "water shortage", "poverty", "migration", "plastic pollution", "access to education", "inequality", "war", "pandemics", "deforestation", "hunger", "endangered species"],
      response: "These are important issues. In this unit you'll review all the conditionals while discussing global problems."
    },
    dialogueTitle: "Model United Nations",
    dialogue: [
      { who: "Moderator", line: "Let's discuss water. Kenji, what's the situation?" },
      { who: "Kenji", line: "Well, *if* temperatures *rise*, glaciers *melt*. That's a fact. And *if* we *don't act* now, many cities *will run* out of water by 2050." },
      { who: "Amara", line: "In my country, Kenya, it's already happening. *If* we *had* more rain-collection systems, people *wouldn't have* to walk hours for water." },
      { who: "Luis", line: "In Mexico City, too. *If* the city *had protected* its lakes centuries ago, we *wouldn't have* these problems today." },
      { who: "Moderator", line: "So what can we do?" },
      { who: "Kenji", line: "*If* every country *invests* in water recycling, we*'ll save* billions of liters." },
      { who: "Amara", line: "And *if* I *were* a world leader, *I'd make* clean water a priority for everyone." }
    ]
  },

  objectives: [
    "I can talk about global issues and possible solutions.",
    "I can use the zero and first conditionals for facts and real possibilities.",
    "I can use the second conditional for imaginary situations.",
    "I can use the third conditional to talk about the past."
  ],

  explanation: {
    vocabTitle: "Global issues",
    vocab: [
      { word: "water shortage", icon: "💧" }, { word: "drought", icon: "🏜️" }, { word: "poverty", icon: "🪙" },
      { word: "inequality", icon: "⚖️" }, { word: "migration", icon: "🧳" }, { word: "a refugee", icon: "🏕️" },
      { word: "deforestation", icon: "🪓" }, { word: "global warming", icon: "🌡️" }, { word: "human rights", icon: "✊" },
      { word: "a world leader", icon: "🏛️" }, { word: "take action", icon: "🚀" }, { word: "raise awareness", icon: "📢" },
      { word: "a global citizen", icon: "🌐" }, { word: "sustainable development", icon: "🌱" }, { word: "cooperation", icon: "🤝" }
    ],
    grammar: [
      {
        title: "All the conditionals",
        head: ["Type", "Form", "Use", "Example"],
        rows: [
          ["zero", "*if* + present, present", "facts, things that are always true", "*If* temperatures *rise*, glaciers *melt*."],
          ["first", "*if* + present, *will* + verb", "real possibilities in the future", "*If* we *don't act*, cities *will run* out of water."],
          ["second", "*if* + past, *would* + verb", "imaginary or unlikely present / future", "*If* I *were* a world leader, I*'d make* water a priority."],
          ["third", "*if* + past perfect, *would have* + participle", "imaginary past (didn't happen)", "*If* the city *had protected* its lakes, we *wouldn't have had* these problems."]
        ],
        note: "You can change the order: *Glaciers melt if temperatures rise.* (no comma when *if* is in the middle)"
      },
      {
        title: "Unless, as long as, provided that",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*unless*", "if… not", "We'll run out of water *unless* we act now. (= if we don't act)"],
          ["*as long as / provided that*", "only if", "Cities can grow *as long as* they manage water well."]
        ]
      }
    ],
    watchOut: [
      ["If it will rain, we'll stay inside.", "If it rains, we'll stay inside."],
      ["If I would be president, I'd change the law.", "If I were president, I'd change the law."],
      ["If I had known, I would help you.", "If I had known, I would have helped you."],
      ["Unless we don't recycle, there will be more trash.", "Unless we recycle, there will be more trash."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb.",
      items: [
        "If you heat ice, it [[melts]]. (melt – zero)",
        "If we [[plant]] more trees, the air will be cleaner. (plant – first)",
        "If I [[had]] more money, I would donate to charity. (have – second)",
        "If they had saved water, they [[wouldn't have had|would not have had]] a drought. (not have – third)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to three young people talking about global issues they care about.",
      title: "What would you change?",
      script: [
        { who: "Moderator", line: "Today we asked three young activists: what issue do you care about, and what would you change if you could?" },
        { who: "Kenji", line: "I care about plastic in the oceans. If you go to any beach in Japan after a storm, you see plastic everywhere. If I were the prime minister, I'd ban single-use plastic completely. And if we do nothing, there will be more plastic than fish in the sea by 2050." },
        { who: "Amara", line: "For me, it's education for girls. My grandmother couldn't go to school. If she had studied, she would have become a doctor; she always says so. Today, if a girl gets an education, her family's income increases. That's a proven fact." },
        { who: "Luis", line: "I care about migration. My father migrated to the US when I was a child. If he hadn't left, we wouldn't have been able to pay for my studies. But it was very hard for our family. If there were more opportunities in small towns, people wouldn't need to leave." },
        { who: "Moderator", line: "Thank you. Any final message?" },
        { who: "Amara", line: "Yes. Unless young people speak up, nothing will change. Small actions matter." }
      ],
      activities: [
        {
          type: "sort", title: "Who cares about what?",
          prompt: "Listen. Match each idea with the person.",
          bins: ["Kenji", "Amara", "Luis"],
          items: [
            { text: "plastic in the oceans", bin: 0 }, { text: "would ban single-use plastic", bin: 0 },
            { text: "education for girls", bin: 1 }, { text: "grandmother couldn't go to school", bin: 1 }, { text: "young people should speak up", bin: 1 },
            { text: "migration", bin: 2 }, { text: "father went to the US", bin: 2 }
          ]
        },
        {
          type: "match", title: "Which conditional?",
          prompt: "Match each sentence with its type.",
          pairs: [
            ["If a girl gets an education, her family's income increases.", "zero (a fact)"],
            ["If we do nothing, there will be more plastic than fish.", "first (real possibility)"],
            ["If I were the prime minister, I'd ban plastic.", "second (imaginary present)"],
            ["If she had studied, she would have become a doctor.", "third (imaginary past)"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the United Nations Sustainable Development Goals.",
      title: "17 goals to change the world",
      text: [
        { body: "In 2015, all 193 member countries of the United Nations agreed on 17 Sustainable Development Goals (SDGs) to achieve by 2030. They include ending poverty and hunger, guaranteeing quality education, achieving gender equality and fighting climate change." },
        { body: "Why are they connected? Because if one problem improves, others usually improve too. For example, if children have clean water, they get sick less often, and if they get sick less often, they go to school more. Education then reduces poverty." },
        { body: "Progress has been mixed. Extreme poverty fell for many years, but the COVID-19 pandemic pushed millions of people back into it. Experts say that if the world had invested more in health systems before 2020, the impact wouldn't have been so severe." },
        { body: "Can we still reach the goals by 2030? Most experts think it's unlikely unless governments and companies act much faster. But they also say that if every person made small changes, such as using less energy, reducing waste and supporting local communities, the difference would be enormous." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The SDGs were agreed in 2015.", a: true },
            { s: "There are 193 goals.", a: false },
            { s: "The goals are connected to each other.", a: true },
            { s: "The pandemic didn't affect poverty.", a: false },
            { s: "Most experts are sure we'll reach all the goals by 2030.", a: false }
          ]
        },
        {
          type: "rewrite", title: "Write the conditional",
          prompt: "Write a conditional sentence for each idea. Use the type in parentheses.",
          items: [
            { q: "Children have clean water → they get sick less. (zero)", a: ["If children have clean water, they get sick less.", "If children have clean water, they get sick less often."] },
            { q: "The world didn't invest more in health → the impact was severe. (third)", a: ["If the world had invested more in health, the impact wouldn't have been so severe.", "If the world had invested more in health, the impact would not have been so severe.", "If the world had invested more in health systems, the impact wouldn't have been so severe."] },
            { q: "Every person makes small changes → the difference is enormous. (second)", a: ["If every person made small changes, the difference would be enormous."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Review the conditionals, then write about a global issue.",
      activities: [
        {
          type: "sort", title: "Which conditional?",
          prompt: "Sort the sentences by type.",
          bins: ["Zero / First (real)", "Second (imaginary now)", "Third (imaginary past)"],
          items: [
            { text: "If you recycle, you reduce waste.", bin: 0 }, { text: "If it rains tomorrow, we'll cancel.", bin: 0 },
            { text: "If I had a million pesos, I'd build a school.", bin: 1 }, { text: "If we lived on Mars, we'd need oxygen.", bin: 1 },
            { text: "If I had known, I would have helped.", bin: 2 }, { text: "If they hadn't cut the trees, there wouldn't have been floods.", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Mixed conditionals practice",
          prompt: "Complete with the correct form of the verb.",
          items: [
            "If you mix blue and yellow, you [[get]] green. (get)",
            "We'll miss the bus unless we [[leave]] now. (leave)",
            "If I [[were|was]] you, I'd join the volunteer program. (be)",
            "If she had applied, she [[would have got|would have gotten|'d have got|'d have gotten]] the scholarship. (get)",
            "If people [[used]] public transport more, there would be less pollution. (use)"
          ]
        },
        {
          type: "write", title: "A global issue",
          prompt: "Write an essay (140–170 words) about a global issue you care about. Explain the problem (zero / first conditional), what you would do if you were a world leader (second), and what would have been different if people had acted earlier (third). Use all four conditionals and *unless*.",
          minWords: 140, maxWords: 170,
          model: "The global issue that worries me most is deforestation. Every year, millions of hectares of forest are destroyed. If forests disappear, animals lose their homes and the planet gets warmer, because trees absorb CO2. In Mexico, if we continue cutting trees at this speed, we will lose most of our jungles in the south in a few decades. Unless governments protect them, the monarch butterfly could also disappear. If I were a world leader, I would pay communities to protect their forests instead of cutting them down. I would also make companies plant two trees for every one they use. Some damage can't be changed. If people had protected the Amazon forty years ago, we wouldn't have lost an area bigger than Spain. But it's not too late. If every person plants one tree, we will make a real difference.",
          bank: ["If…, … (zero)", "If we continue…, we will…", "Unless…,", "If I were a world leader, I would…", "If people had…, we wouldn't have…", "But it's not too late."],
          checklist: [
            "I used the **zero** and **first** conditionals.",
            "I used the **second** conditional.",
            "I used the **third** conditional.",
            "I used **unless** correctly."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "If temperatures rise, glaciers melt.",
            "If we don't act, we'll run out of water.",
            "If I were a world leader, I'd help.",
            "If they had acted, it wouldn't have happened.",
            "Unless we act now, nothing will change.",
            "Small actions matter."
          ]
        },
        {
          type: "speak", title: "If I were a world leader…",
          prompt: "Record yourself for about two minutes. Choose a global issue. Explain the facts, what will happen if nothing changes, what you would do if you were a world leader, and what would have been different if people had acted earlier.",
          language: ["The issue I care about is…", "If…, … (fact)", "If we don't…, … will…", "If I were a world leader, I'd…", "If people had…, … wouldn't have…", "Unless…"],
          seconds: 150,
          checklist: ["use all four types of conditional?", "use unless?", "explain the issue clearly?", "propose solutions?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about global issues.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can use the zero and first conditionals.", review: "Explanation: all the conditionals" },
    { can: "I can use the second conditional.", review: "Explanation: all the conditionals; Writing activity 2" },
    { can: "I can use the third conditional.", review: "Explanation: all the conditionals; Reading activity 2" },
    { can: "I can use *unless* and *as long as*.", review: "Explanation: unless, as long as, provided that" },
    { can: "I can discuss a global issue using conditionals.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
