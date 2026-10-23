window.UNIT = {
  slug: "breaking-news",
  number: 34,
  title: "Breaking News",
  level: "B1",
  minutes: 65,
  speakers: { "Anchor": "f", "Reporter": "m", "Mariel": "f", "Toño": "m" },
  focus: ["news vocabulary", "present perfect passive: has / have been + participle", "future passive: will be + participle", "modal passive: can / must / should be + participle", "present continuous passive: is being + participle"],

  presentation: {
    scene: "📺🚨🎙️🌍",
    situation: "Mariel and Toño are watching the evening news on TV in their apartment. A news alert interrupts the program.",
    warmup: {
      prompt: "What kind of news do you follow? Choose all.",
      options: ["local news", "international news", "sports", "science", "technology", "entertainment", "weather", "economy", "environment", "health", "politics", "culture"],
      response: "Good! In this unit you'll learn to understand and write news using different passive forms."
    },
    dialogueTitle: "News alert",
    dialogue: [
      { who: "Anchor", line: "We interrupt this program with breaking news. A rare jaguar *has been seen* on the outskirts of Puebla." },
      { who: "Toño", line: "A jaguar? In Puebla? No way!" },
      { who: "Anchor", line: "The animal *was spotted* by a farmer this morning. Residents in the area *have been told* to stay indoors." },
      { who: "Mariel", line: "Wow. I hope they don't hurt it." },
      { who: "Anchor", line: "Experts say the jaguar *is being followed* by a team of biologists. It *will be taken* to a protected area in the Sierra Norte, where it *can be monitored* safely." },
      { who: "Toño", line: "That's a relief." },
      { who: "Anchor", line: "Residents *should be informed* through local radio. We'll bring you more news as it happens." }
    ]
  },

  objectives: [
    "I can understand the main points of news reports.",
    "I can use the present perfect and present continuous passive.",
    "I can use the future and modal passive.",
    "I can write a short news story."
  ],

  explanation: {
    vocabTitle: "The news",
    vocab: [
      { word: "breaking news", icon: "🚨" }, { word: "a headline", icon: "📰" }, { word: "an anchor", icon: "🎙️" },
      { word: "a correspondent", icon: "🎤" }, { word: "an eyewitness", icon: "👁️" }, { word: "residents", icon: "🏘️" },
      { word: "authorities", icon: "🏛️" }, { word: "evacuate", icon: "🏃" }, { word: "rescue", icon: "🛟" },
      { word: "injure", icon: "🤕" }, { word: "arrest", icon: "🚔" }, { word: "launch", icon: "🚀" },
      { word: "announce", icon: "📢" }, { word: "investigate", icon: "🔍" }, { word: "a press conference", icon: "🗞️" }
    ],
    grammar: [
      {
        title: "More passive forms",
        intro: "News reports often use the passive because the action is more important than who did it.",
        head: ["Tense", "Form", "Example"],
        rows: [
          ["present continuous", "*am / is / are being* + participle", "The jaguar *is being followed* by biologists."],
          ["present perfect", "*has / have been* + participle", "A jaguar *has been seen* near Puebla."],
          ["future", "*will be* + participle", "It *will be taken* to a protected area."],
          ["*going to*", "*am / is / are going to be* + participle", "A new bridge *is going to be built*."],
          ["modals", "*can / must / should / might be* + participle", "It *can be monitored* safely."]
        ],
        note: "The participle never changes. Only *be* changes: *is being, has been, will be, can be…*"
      },
      {
        title: "Active → passive",
        head: ["Active", "Passive"],
        rows: [
          ["The police *have arrested* two men.", "Two men *have been arrested*."],
          ["They *will close* the road tomorrow.", "The road *will be closed* tomorrow."],
          ["Workers *are repairing* the bridge.", "The bridge *is being repaired*."],
          ["People *must wear* helmets.", "Helmets *must be worn*."]
        ]
      }
    ],
    watchOut: [
      ["The road will closed tomorrow.", "The road will be closed tomorrow."],
      ["Two men have arrested.", "Two men have been arrested."],
      ["The bridge is repairing now.", "The bridge is being repaired now."],
      ["Phones must turn off.", "Phones must be turned off."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the passive form.",
      items: [
        "Three people [[have been rescued]] from the building. (rescue – present perfect)",
        "The new stadium [[will be opened]] next year. (open – future)",
        "The road [[is being repaired]] right now. (repair – present continuous)",
        "Seat belts [[must be worn]] at all times. (wear – must)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a news bulletin with three short stories.",
      title: "The evening news",
      script: [
        { who: "Anchor", line: "Good evening. Here are tonight's headlines." },
        { who: "Anchor", line: "First, the new metro line in Monterrey. The project has been completed after four years of work, and the line will be opened to the public next Monday. More than two hundred thousand passengers are expected every day." },
        { who: "Anchor", line: "Next, the weather. A hurricane warning has been issued for the coast of Guerrero. Schools in Acapulco will be closed tomorrow, and residents near the beach are being evacuated. Let's go to our correspondent." },
        { who: "Reporter", line: "Thank you. I'm in Acapulco, where hundreds of families have been moved to shelters. The hurricane is expected to arrive tomorrow afternoon. Residents have been told that all windows should be protected and that drinking water must be stored." },
        { who: "Anchor", line: "Thank you. And finally, some good news: a sea turtle nest with more than a hundred eggs has been discovered on a beach in Oaxaca. The eggs are being protected by volunteers, and the baby turtles will be released into the sea in about fifty days." },
        { who: "Anchor", line: "That's all for tonight. Good night." }
      ],
      activities: [
        {
          type: "sort", title: "Which story?",
          prompt: "Listen. Which news story does each sentence belong to?",
          bins: ["Metro 🚇", "Hurricane 🌀", "Turtles 🐢"],
          items: [
            { text: "has been completed after four years", bin: 0 }, { text: "will be opened next Monday", bin: 0 },
            { text: "a warning has been issued", bin: 1 }, { text: "residents are being evacuated", bin: 1 }, { text: "windows should be protected", bin: 1 },
            { text: "a nest has been discovered", bin: 2 }, { text: "will be released into the sea", bin: 2 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete.",
          items: [
            "More than [[200,000|two hundred thousand|200000]] passengers are expected every day.",
            "Schools in [[Acapulco]] will be closed tomorrow.",
            "Families have been moved to [[shelters]].",
            "Drinking [[water]] must be stored.",
            "The baby turtles will be released in about [[fifty|50]] days."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short news article from a local website.",
      title: "Historic building to be restored",
      text: [
        { body: "**PUEBLA –** One of the oldest buildings in the historic center of Puebla is going to be restored, the city government announced yesterday." },
        { body: "The 18th-century house, known as Casa de los Azulejos Azules, was damaged in the 2017 earthquake and has been closed to the public since then. Its famous blue tiles have been removed and are being cleaned by experts from the National Institute of Anthropology and History." },
        { body: "According to the plan, the walls will be reinforced, and the original wooden doors will be repaired by local craftsmen. When the work is finished, the building will be used as a cultural center with a library and spaces for exhibitions." },
        { body: "The project is expected to cost 45 million pesos. Officials said that the work could be completed by the end of next year, but that some delays might be caused by the rainy season. Residents have been invited to share old photos of the house, which may be shown in the first exhibition." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The building is from the 18th century.", a: true },
            { s: "It was damaged in a fire.", a: false },
            { s: "The blue tiles are being cleaned by experts.", a: true },
            { s: "The building will be used as a hotel.", a: false },
            { s: "The work might be delayed by the rainy season.", a: true },
            { s: "Residents have been asked to donate money.", a: false }
          ]
        },
        {
          type: "match", title: "Find the passive",
          prompt: "Match the beginnings and endings.",
          pairs: [
            ["The house has been closed", "since 2017."],
            ["The blue tiles are being cleaned", "by experts."],
            ["The wooden doors will be repaired", "by local craftsmen."],
            ["Old photos may be shown", "in the first exhibition."]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the passive, then write your own news story.",
      activities: [
        {
          type: "rewrite", title: "Write the headline in the passive",
          prompt: "Rewrite each sentence in the passive. Don't include the agent if it's not important.",
          items: [
            { q: "Firefighters have rescued a cat from a tree.", a: ["A cat has been rescued from a tree.", "A cat has been rescued from a tree by firefighters."] },
            { q: "The government will build a new hospital.", a: ["A new hospital will be built.", "A new hospital will be built by the government."] },
            { q: "Workers are painting the cathedral.", a: ["The cathedral is being painted."] },
            { q: "You must not take photos in the museum.", a: ["Photos must not be taken in the museum.", "Photos mustn't be taken in the museum."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Two men have been arrested." },
            { a: "The road will be closed tomorrow." },
            { a: "The bridge is being repaired." },
            { a: "Helmets must be worn at all times." }
          ]
        },
        {
          type: "write", title: "Write a news story",
          prompt: "Write a short news story (130–160 words) about a real or invented event in your city or university (a discovery, an accident, a new building, a festival, an animal…). Include a headline, what has happened, what is being done now and what will be done. Use at least six different passive forms.",
          minWords: 130, maxWords: 160,
          model: "BUAP STUDENTS CREATE WATER-SAVING APP<br>An app that helps families save water has been created by a group of engineering students at BUAP. The app, called GotaApp, was presented at a national science fair last week, where it won first prize. Using a small sensor, the app shows how much water is used in each part of the house. More than five hundred homes in Puebla have already been connected to the system, and the results have been very positive: on average, water use has been reduced by twenty percent. The app is now being tested in two schools. According to the students, a new version will be launched in January, and it will be offered for free to low-income families. The project could be adopted by other cities in the future. \"We hope water can be saved all over Mexico,\" said one of the students.",
          bank: ["… has been created / discovered", "… was presented", "… is being tested", "… will be launched", "… could be adopted", "According to…"],
          checklist: [
            "I wrote a **headline**.",
            "I used at least **six** different passive forms.",
            "I described the **past**, the **present** and the **future**.",
            "I used *by* only when the agent is **important**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it like a news anchor.",
          items: [
            "A rare jaguar has been seen.",
            "Residents have been told to stay indoors.",
            "It will be taken to a protected area.",
            "The road is being repaired.",
            "Schools will be closed tomorrow.",
            "We interrupt this program with breaking news."
          ]
        },
        {
          type: "speak", title: "You're the anchor",
          prompt: "Record a one- to two-minute news bulletin with two or three short stories (real or invented). Use a clear, professional voice and as many passive forms as you can.",
          language: ["Good evening. Here are tonight's headlines.", "… has been announced / discovered.", "… is being investigated.", "… will be opened / closed.", "According to authorities,…", "That's all for tonight."],
          seconds: 120,
          checklist: ["present two or three stories?", "use the present perfect passive?", "use the future or modal passive?", "speak clearly like an anchor?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand the main points of a news bulletin.", review: "Listening activities 1 and 2" },
    { can: "I can use the present perfect passive.", review: "Explanation: more passive forms" },
    { can: "I can use the present continuous passive.", review: "Explanation: more passive forms" },
    { can: "I can use the future and modal passive.", review: "Explanation: more passive forms; Writing activity 1" },
    { can: "I can understand a short news article.", review: "Reading activities 1 and 2" },
    { can: "I can write and present a news story.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
