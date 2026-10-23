window.UNIT = {
  slug: "i-should-have-known",
  number: 29,
  title: "I Should Have Known",
  level: "B1",
  minutes: 60,
  speakers: { "Montse": "f", "Kike": "m", "Host": "m", "Silvia": "f", "Pedro": "m" },
  focus: ["mistakes and regrets vocabulary", "should have + past participle (regret / criticism)", "shouldn't have + past participle", "I wish I had + past participle", "giving advice about past mistakes"],

  presentation: {
    scene: "🤦‍♀️📱💸😬",
    situation: "Montse bought concert tickets from a stranger on social media. Now she's realized they're fake. She's talking to her brother Kike.",
    warmup: {
      prompt: "Have you ever made one of these mistakes? Choose all.",
      options: ["trusted the wrong person", "spent too much money", "sent a message to the wrong person", "forgotten a birthday", "left homework until the last minute", "said something I regretted", "bought something online that was bad", "not studied enough", "stayed up too late", "lost something important"],
      response: "Everybody makes mistakes! In this unit you'll learn to talk about regrets and learn from them."
    },
    dialogueTitle: "Fake tickets",
    dialogue: [
      { who: "Montse", line: "I can't believe it. The tickets are fake. I paid three thousand pesos!" },
      { who: "Kike", line: "Oh no. Where did you buy them?" },
      { who: "Montse", line: "From a guy on social media. *I should have bought* them from the official website." },
      { who: "Kike", line: "Yes, you *shouldn't have trusted* a stranger. Did you pay by bank transfer?" },
      { who: "Montse", line: "Yes. *I should have used* a card, then I could get my money back." },
      { who: "Kike", line: "Don't be too hard on yourself. It happens to a lot of people." },
      { who: "Montse", line: "*I wish I had listened* to you. You told me it was too cheap. *I should have known*!" }
    ]
  },

  objectives: [
    "I can talk about mistakes and regrets.",
    "I can use *should have / shouldn't have* + past participle.",
    "I can use *I wish I had* + past participle for past regrets.",
    "I can criticize past actions politely and give advice."
  ],

  explanation: {
    vocabTitle: "Mistakes and regrets",
    vocab: [
      { word: "a mistake", icon: "❌" }, { word: "regret", icon: "😔" }, { word: "a scam", icon: "🕳️" },
      { word: "trust", icon: "🤝" }, { word: "a lesson", icon: "📚" }, { word: "blame", icon: "👉" },
      { word: "apologize", icon: "🙏" }, { word: "embarrassing", icon: "😳" }, { word: "careless", icon: "🙃" },
      { word: "impulsive", icon: "⚡" }, { word: "think twice", icon: "🤔" }, { word: "learn the hard way", icon: "🧱" },
      { word: "hindsight", icon: "🔙" }, { word: "too good to be true", icon: "🎁" }, { word: "be hard on yourself", icon: "😣" }
    ],
    grammar: [
      {
        title: "Should have / shouldn't have",
        intro: "Use these to talk about past actions that were a mistake. They express regret (about yourself) or criticism (about others).",
        head: ["Form", "Meaning", "Example"],
        rows: [
          ["*should have* + past participle", "it was a good idea, but I didn't do it", "I *should have bought* them from the website."],
          ["*shouldn't have* + past participle", "it was a bad idea, but I did it", "You *shouldn't have trusted* a stranger."],
          ["question", "asking for advice about the past", "What *should* I *have done*?"]
        ],
        note: "Pronunciation: *should have* sounds like \"should've\" /ʃʊdəv/. Never write *should of*."
      },
      {
        title: "I wish I had…",
        head: ["Regret", "Example"],
        rows: [
          ["*I wish I had* + past participle", "*I wish I had listened* to you. (I didn't listen)"],
          ["*I wish I hadn't* + past participle", "*I wish I hadn't paid* by transfer. (I paid)"],
          ["*If only I had…*", "*If only I had checked* the reviews!"]
        ],
        note: "Compare: *I wish I had* a car (present: I don't have one) vs. *I wish I had had* a car (past: I didn't have one then)."
      }
    ],
    watchOut: [
      ["I should have went to bed earlier.", "I should have gone to bed earlier."],
      ["You should of told me.", "You should have told me."],
      ["I wish I didn't say that yesterday.", "I wish I hadn't said that yesterday."],
      ["I shouldn't spend so much last month.", "I shouldn't have spent so much last month."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *should have, shouldn't have* or *wish I had / hadn't* + participle.",
      items: [
        "I failed the test. I [[should have studied|should've studied]] more. (study)",
        "I feel sick. I [[shouldn't have eaten|should not have eaten]] so many tacos. (eat)",
        "I missed the party. I [[wish I had gone|wish I'd gone]]! (go)",
        "She's angry. You [[shouldn't have told|should not have told]] her secret. (tell)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio phone-in show about people's biggest money mistakes.",
      title: "Money mistakes",
      script: [
        { who: "Host", line: "Welcome to Money Talks. Today's topic: your biggest money mistake. Our first caller is Silvia." },
        { who: "Silvia", line: "Hi. When I got my first job, I got a credit card and I used it for everything: clothes, restaurants, trips. I only paid the minimum every month." },
        { who: "Host", line: "Ah, a common mistake. What happened?" },
        { who: "Silvia", line: "After two years, I owed more than sixty thousand pesos because of the interest. I should have paid the full amount every month. And I shouldn't have bought so many things I didn't need." },
        { who: "Host", line: "How did you solve it?" },
        { who: "Silvia", line: "I made a budget and stopped using the card. It took me three years to pay everything. I wish someone had taught me about interest at school." },
        { who: "Host", line: "Thank you, Silvia. Next caller, Pedro." },
        { who: "Pedro", line: "My mistake was the opposite. I saved all my money in a box under my bed for ten years. I never invested it." },
        { who: "Host", line: "And inflation reduced its value." },
        { who: "Pedro", line: "Exactly. I should have put it in a savings account at least. Now it's worth much less. I wish I had asked for advice." }
      ],
      activities: [
        {
          type: "sort", title: "Silvia or Pedro?",
          prompt: "Listen. Who made each mistake or regret?",
          bins: ["Silvia", "Pedro"],
          items: [
            { text: "only paid the minimum on a credit card", bin: 0 }, { text: "bought things she didn't need", bin: 0 }, { text: "owed more than 60,000 pesos", bin: 0 }, { text: "wishes school had taught about interest", bin: 0 },
            { text: "kept money under the bed", bin: 1 }, { text: "never invested", bin: 1 }, { text: "lost value because of inflation", bin: 1 }, { text: "wishes he had asked for advice", bin: 1 }
          ]
        },
        {
          type: "gap", title: "What should they have done?",
          prompt: "Listen again and complete.",
          items: [
            "Silvia should have paid the [[full]] amount every month.",
            "She shouldn't have bought so many things she didn't [[need]].",
            "It took her [[three|3]] years to pay everything.",
            "Pedro should have put his money in a [[savings]] account."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three short posts from an online forum: *What do you regret most?*",
      title: "What do you regret most?",
      text: [
        { author: "Celia, 45", body: "I regret not traveling when I was young. I always said, \"Next year,\" and then I got married and had kids. I should have gone backpacking in Europe with my friends after university. Now I tell my children: do it now!" },
        { author: "Diego, 23", body: "In high school, I stopped talking to my best friend because of a stupid argument about a girl. I was too proud to apologize. I wish I hadn't been so stubborn. Last year I finally sent him a message, and we're friends again, but we lost five years." },
        { author: "Adriana, 31", body: "I studied accounting because my parents wanted me to. I was never happy at work. I should have followed my passion for cooking from the start. Last year I finally opened a small bakery, and I've never been happier. The lesson? It's never too late." }
      ],
      activities: [
        {
          type: "match", title: "Regrets",
          prompt: "Match each person with their regret.",
          pairs: [
            ["Celia should have", "gone backpacking in Europe."],
            ["Diego wishes he hadn't", "been so stubborn."],
            ["Adriana should have", "followed her passion for cooking."],
            ["Diego and his friend", "lost five years."],
            ["Adriana's lesson is that", "it's never too late."]
          ]
        },
        {
          type: "rewrite", title: "Express the regret",
          prompt: "Rewrite each sentence with the words in parentheses.",
          items: [
            { q: "Celia didn't travel when she was young. (should have)", a: ["Celia should have traveled when she was young.", "She should have traveled when she was young.", "Celia should have travelled when she was young."] },
            { q: "Diego didn't apologize. (wishes he had)", a: ["Diego wishes he had apologized.", "He wishes he had apologized."] },
            { q: "Adriana studied accounting. (shouldn't have)", a: ["Adriana shouldn't have studied accounting.", "She shouldn't have studied accounting.", "Adriana should not have studied accounting."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice regrets, then write about a lesson you learned.",
      activities: [
        {
          type: "rewrite", title: "What went wrong?",
          prompt: "Write a sentence with *should have* or *shouldn't have* for each situation.",
          items: [
            { q: "I didn't bring an umbrella, and I got wet.", a: ["I should have brought an umbrella."] },
            { q: "He drove too fast, and the police stopped him.", a: ["He shouldn't have driven so fast.", "He shouldn't have driven too fast.", "He should not have driven so fast."] },
            { q: "We didn't book a table, and the restaurant was full.", a: ["We should have booked a table."] },
            { q: "She posted a photo of her boss, and he saw it.", a: ["She shouldn't have posted a photo of her boss.", "She shouldn't have posted the photo.", "She should not have posted a photo of her boss."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I should have known it was a scam." },
            { a: "You shouldn't have trusted a stranger." },
            { a: "I wish I had listened to you." },
            { a: "What should I have done?" }
          ]
        },
        {
          type: "write", title: "A lesson I learned",
          prompt: "Write a forum post (120–150 words) about a mistake you made and what you learned. Explain what happened, what you should or shouldn't have done, and what you wish you had done. End with advice for others.",
          minWords: 120, maxWords: 150,
          model: "Last year I learned an important lesson about deadlines. I had a big group project for my marketing class, and I was responsible for the final presentation. I thought I had plenty of time, so I spent the weekends with friends and watching series. Two days before the deadline, I opened the file and realized I had to do almost everything. I stayed up all night, and the presentation was terrible. My classmates were really angry. I should have started much earlier, and I shouldn't have said \"Don't worry, I've got it\" when I hadn't even started. I wish I had asked for help, too. Now I use a planner and I divide big projects into small tasks. My advice: never leave things until the last minute. You'll regret it!",
          bank: ["Last year I made a mistake…", "I should have…", "I shouldn't have…", "I wish I had…", "I wish I hadn't…", "Now I…", "My advice:"],
          checklist: [
            "I used **should have** and **shouldn't have**.",
            "I used **I wish I had / hadn't** + past participle.",
            "I used correct **past participles**.",
            "I ended with a **lesson** or advice."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice how *should have* sounds like \"should've\".",
          items: [
            "I should have known!",
            "You shouldn't have trusted a stranger.",
            "I wish I had listened to you.",
            "I should have used a card.",
            "What should I have done?",
            "Don't be too hard on yourself."
          ]
        },
        {
          type: "speak", title: "Learn from it",
          prompt: "Record yourself for one to two minutes. Talk about two mistakes: one you made and one a friend or family member made (or a famous person). Say what they should or shouldn't have done and what lesson they learned.",
          language: ["One mistake I made was…", "I should have…", "I shouldn't have…", "I wish I had…", "My friend should have…", "The lesson was…"],
          seconds: 120,
          checklist: ["talk about two mistakes?", "use should have and shouldn't have?", "use I wish I had?", "explain the lesson learned?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about mistakes and regrets.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *should have* + past participle.", review: "Explanation: should have / shouldn't have" },
    { can: "I can use *shouldn't have* + past participle.", review: "Explanation: should have / shouldn't have; Writing activity 1" },
    { can: "I can use *I wish I had / hadn't* + past participle.", review: "Explanation: I wish I had…; Reading activity 2" },
    { can: "I can understand people talking about their mistakes.", review: "Listening and Reading activities" },
    { can: "I can describe a mistake and the lesson I learned.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
