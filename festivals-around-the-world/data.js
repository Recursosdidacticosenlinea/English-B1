window.UNIT = {
  slug: "festivals-around-the-world",
  number: 19,
  title: "Festivals Around the World",
  level: "B1",
  minutes: 60,
  speakers: { "Ivonne": "f", "Liam": "m", "Guide": "m", "Narrator": "f" },
  focus: ["festivals and celebrations vocabulary", "present simple passive: is / are + past participle", "past simple passive: was / were + past participle", "by + agent", "describing a tradition"],

  presentation: {
    scene: "🎉💀🏮🎆",
    situation: "Liam is from Ireland and is visiting Mexico for the first time at the end of October. His friend Ivonne explains the Day of the Dead.",
    warmup: {
      prompt: "Which festivals or celebrations do you know? Choose all.",
      options: ["Day of the Dead", "Holi", "Chinese New Year", "Carnival", "St. Patrick's Day", "Diwali", "Oktoberfest", "La Tomatina", "Thanksgiving", "Guelaguetza", "Halloween", "Ramadan"],
      response: "Wonderful! In this unit you'll learn to describe festivals and traditions with the passive."
    },
    dialogueTitle: "What's an ofrenda?",
    dialogue: [
      { who: "Liam", line: "Ivonne, what's this beautiful table with flowers and photos?" },
      { who: "Ivonne", line: "It's an *ofrenda*, an altar. Ofrendas *are made* for the Day of the Dead. Photos of family members who died *are placed* on them." },
      { who: "Liam", line: "And the orange flowers?" },
      { who: "Ivonne", line: "They're called *cempasúchil*. They *are used* because their color and smell guide the spirits home." },
      { who: "Liam", line: "That's lovely. Is it a very old tradition?" },
      { who: "Ivonne", line: "Yes. It *was celebrated* by the Aztecs and other cultures long before the Spanish arrived. And in 2008 it *was recognized* by UNESCO." },
      { who: "Liam", line: "Amazing. In Ireland, Halloween *was invented* centuries ago, too. Maybe they're cousins!" }
    ]
  },

  objectives: [
    "I can describe festivals and traditions.",
    "I can use the present simple passive to describe processes and customs.",
    "I can use the past simple passive to talk about history.",
    "I can decide when to use *by* + agent."
  ],

  explanation: {
    vocabTitle: "Festivals",
    vocab: [
      { word: "a parade", icon: "🎺" }, { word: "fireworks", icon: "🎆" }, { word: "a costume", icon: "🎭" },
      { word: "a mask", icon: "👺" }, { word: "an altar", icon: "🕯️" }, { word: "a lantern", icon: "🏮" },
      { word: "decorations", icon: "🎊" }, { word: "a feast", icon: "🍗" }, { word: "a ritual", icon: "🔥" },
      { word: "a pilgrimage", icon: "🚶" }, { word: "celebrate", icon: "🥳" }, { word: "honor", icon: "🏅" },
      { word: "take place", icon: "📍" }, { word: "date back to", icon: "📜" }, { word: "be held", icon: "🗓️" }
    ],
    grammar: [
      {
        title: "The passive: present and past",
        intro: "We use the passive when the action is more important than the person who does it, or when we don't know who does it.",
        head: ["Tense", "Form", "Example"],
        rows: [
          ["present simple", "*am / is / are* + past participle", "Ofrendas *are made* every year. / The festival *is held* in July."],
          ["past simple", "*was / were* + past participle", "It *was recognized* by UNESCO in 2008."],
          ["negative", "*isn't / wasn't* + past participle", "Meat *isn't eaten* during the festival."],
          ["question", "*Is / Was* + subject + past participle?", "Where *is* the festival *held*? / When *was* it *invented*?"]
        ]
      },
      {
        title: "Active or passive? By + agent",
        head: ["Active", "Passive"],
        rows: [
          ["People *celebrate* Holi in March.", "Holi *is celebrated* in March. (no agent: \"people\" is obvious)"],
          ["The Aztecs *built* the pyramid.", "The pyramid *was built* **by the Aztecs**. (agent is important)"],
          ["Someone *stole* the masks.", "The masks *were stolen*. (agent unknown)"]
        ],
        note: "Use *by* only when the agent is important or interesting."
      }
    ],
    watchOut: [
      ["The festival is celebrate in July.", "The festival is celebrated in July."],
      ["The temple was build in 1500.", "The temple was built in 1500."],
      ["Fireworks are used by people at night.", "Fireworks are used at night."],
      ["The parade held every year.", "The parade is held every year."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present or past simple passive.",
      items: [
        "Pan de muerto [[is eaten]] in October and November. (eat)",
        "The first Guelaguetza [[was held]] in 1932. (hold)",
        "Lanterns [[are released]] into the sky during the festival. (release)",
        "The masks [[were made]] by local artists. (make)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a museum guide talking about two festivals from Asia.",
      title: "Festivals of light and color",
      script: [
        { who: "Guide", line: "Welcome to the World Cultures exhibition. In this room, we look at two festivals from Asia." },
        { who: "Guide", line: "First, Diwali, the festival of lights. It's celebrated in India and by Indian communities around the world, usually in October or November." },
        { who: "Guide", line: "During Diwali, homes are cleaned and decorated with small oil lamps called diyas. Beautiful patterns called rangoli are drawn on the floor with colored powder. And of course, lots of sweets are shared with family and friends." },
        { who: "Guide", line: "Now, look at this photo. This is Holi, the festival of colors. It's held in spring, in March." },
        { who: "Guide", line: "On the day of Holi, colored powder and water are thrown at everyone in the street: friends, neighbors, even strangers! It celebrates the end of winter and the victory of good over evil." },
        { who: "Narrator", line: "A visitor asks a question." },
        { who: "Guide", line: "Is the powder safe? Good question. Traditionally, the colors were made from flowers and plants. Today, many are made with chemicals, so people are advised to buy natural colors." }
      ],
      activities: [
        {
          type: "sort", title: "Diwali or Holi?",
          prompt: "Listen. Which festival does each sentence describe?",
          bins: ["Diwali 🪔", "Holi 🎨"],
          items: [
            { text: "Homes are decorated with oil lamps.", bin: 0 }, { text: "Patterns are drawn on the floor.", bin: 0 }, { text: "Sweets are shared with family.", bin: 0 }, { text: "It's celebrated in October or November.", bin: 0 },
            { text: "It's held in March.", bin: 1 }, { text: "Powder and water are thrown at people.", bin: 1 }, { text: "The end of winter is celebrated.", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word.",
          items: [
            "Diwali is the festival of [[lights]].",
            "Small oil lamps are called [[diyas]].",
            "Rangoli patterns are drawn with colored [[powder]].",
            "Traditionally, the colors were made from flowers and [[plants]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a travel magazine about a famous Mexican festival.",
      title: "The Guelaguetza: Oaxaca's gift",
      text: [
        { body: "Every July, the city of Oaxaca fills with music, dancers and visitors. The reason is the Guelaguetza, one of the most important cultural festivals in Mexico. The word *guelaguetza* comes from the Zapotec language and means \"gift\" or \"offering.\"" },
        { body: "The festival's origins date back to pre-Hispanic times, when ceremonies were held to honor the goddess of corn. After the Spanish conquest, the celebration was mixed with Catholic traditions. The modern version was organized for the first time in 1932." },
        { body: "Today, the main events are held on the two Mondays after July 16th, in a huge open-air auditorium on the Cerro del Fortín. Groups from the eight regions of Oaxaca are invited to perform their traditional dances. At the end of each dance, gifts such as fruit, bread and small crafts are thrown to the audience." },
        { body: "The festival is attended by thousands of tourists every year, but for Oaxacans it is much more than a show: it's a celebration of identity and community." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The Guelaguetza is held in July.", a: true },
            { s: "*Guelaguetza* means \"dance\" in Zapotec.", a: false },
            { s: "Ceremonies were held to honor the goddess of corn.", a: true },
            { s: "The modern version was first organized in 1932.", a: true },
            { s: "Only groups from Oaxaca City are invited to dance.", a: false },
            { s: "Gifts are thrown to the audience.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Make it passive",
          prompt: "Rewrite these active sentences in the passive. Don't use *by* unless it's important.",
          items: [
            { q: "People hold the main events on two Mondays.", a: ["The main events are held on two Mondays."] },
            { q: "They invited groups from eight regions.", a: ["Groups from eight regions were invited."] },
            { q: "Dancers throw gifts to the audience.", a: ["Gifts are thrown to the audience.", "Gifts are thrown to the audience by dancers.", "Gifts are thrown to the audience by the dancers."] },
            { q: "Thousands of tourists attend the festival.", a: ["The festival is attended by thousands of tourists."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the passive, then describe a festival from your region.",
      activities: [
        {
          type: "gap", title: "La Tomatina",
          prompt: "Complete the text with the passive form of the verb.",
          items: [
            "La Tomatina [[is held]] in Buñol, Spain, every August. (hold)",
            "It [[was started]] in 1945 after a fight between young people. (start)",
            "Today, about 150,000 tomatoes [[are thrown]] in one hour! (throw)",
            "Before the fight, the shops [[are covered]] with plastic. (cover)",
            "In 2002, the festival [[was declared]] a Festival of International Tourist Interest. (declare)"
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The festival is held every July." },
            { a: "Ofrendas are decorated with flowers." },
            { a: "It was recognized by UNESCO in 2008." },
            { a: "Where is the parade held?" }
          ]
        },
        {
          type: "write", title: "A festival from my region",
          prompt: "Write an article (130–160 words) for an international website about a festival or tradition from your town or region. Say when and where it is held, its history, what is done during the festival and why it's important. Use at least six passive forms (present and past).",
          minWords: 130, maxWords: 160,
          model: "Every year in Huejotzingo, Puebla, one of the most colorful carnivals in Mexico is celebrated. It is held in February or March, before Lent. The carnival was started in the nineteenth century to remember the Battle of Puebla and a famous local legend about a bandit and his love. During the carnival, a big battle is recreated in the streets by more than two thousand people. Beautiful masks and costumes are worn, and old rifles are fired, so it's very noisy! The masks are made by local artisans, and some of them are sold to collectors for thousands of pesos. Thousands of visitors are attracted to the town every year. For the people of Huejotzingo, the carnival is a source of pride, because their history is kept alive through it.",
          bank: ["It is held / celebrated in…", "It was started in…", "… are worn / made / used", "… is recreated", "Visitors are attracted…", "It is considered…"],
          checklist: [
            "I used at least **six** passive forms.",
            "I used both the **present** and **past** passive.",
            "I used *by* only when the agent is **important**.",
            "I explained **why** the festival is important."
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
            "Ofrendas are made every year.",
            "Photos are placed on the altar.",
            "It was recognized by UNESCO.",
            "The festival is held in July.",
            "Colored powder is thrown at everyone.",
            "It was celebrated by the Aztecs."
          ]
        },
        {
          type: "speak", title: "Present a festival",
          prompt: "Record a one- to two-minute presentation about a festival (Mexican or international) for a cultural exchange. Explain when and where it is held, a little history, what is done, and what you like about it. Use the passive as much as you can.",
          language: ["It's held / celebrated in…", "It dates back to…", "It was started by…", "During the festival,… are…", "… is considered…", "What I love most is…"],
          seconds: 120,
          checklist: ["say when and where it is held?", "give some history with the past passive?", "describe activities with the present passive?", "say what you like about it?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe festivals and traditions with specific vocabulary.", review: "Explanation: the vocabulary cards" },
    { can: "I can form the present simple passive.", review: "Explanation: the passive; Writing activity 1" },
    { can: "I can form the past simple passive.", review: "Explanation: the passive; Reading activity 2" },
    { can: "I can decide when to include *by* + agent.", review: "Explanation: active or passive" },
    { can: "I can understand descriptions of festivals.", review: "Listening and Reading activities" },
    { can: "I can describe a festival from my region.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
