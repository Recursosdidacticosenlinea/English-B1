window.UNIT = {
  slug: "if-i-won-the-lottery",
  number: 26,
  title: "If I Won the Lottery",
  level: "B1",
  minutes: 60,
  speakers: { "Fabiola": "f", "Chuy": "m", "Host": "m", "Mónica": "f", "Raúl": "m" },
  focus: ["money and dreams vocabulary", "second conditional: if + past simple, would + verb", "If I were…", "could / might in the result clause", "first vs. second conditional"],

  presentation: {
    scene: "🎰💸🏝️🤑",
    situation: "Fabiola and Chuy are buying a lottery ticket for the big Christmas draw. They're dreaming about what they would do with the money.",
    warmup: {
      prompt: "If you had a lot of money, what would you do? Choose all.",
      options: ["travel the world", "buy a house", "help my family", "give money to charity", "start a business", "stop working", "buy a car", "study abroad", "save it", "build a school", "buy an island", "throw a huge party"],
      response: "Great dreams! In this unit you'll learn to talk about imaginary situations with the second conditional."
    },
    dialogueTitle: "The Christmas lottery",
    dialogue: [
      { who: "Chuy", line: "Imagine we win! What *would* you *do* with the money?" },
      { who: "Fabiola", line: "*If I won* the lottery, *I'd buy* my parents a house by the sea. They've worked so hard all their lives." },
      { who: "Chuy", line: "That's beautiful. I think *I'd travel* around the world for a year." },
      { who: "Fabiola", line: "Would you quit your job?" },
      { who: "Chuy", line: "Definitely! *If I didn't have* to work, *I could* finally learn to surf." },
      { who: "Fabiola", line: "Ha! And *if you were* rich, *would* you still *talk* to me?" },
      { who: "Chuy", line: "Of course! *If I were* a millionaire, you'd be my financial adviser!" }
    ]
  },

  objectives: [
    "I can talk about imaginary or unlikely situations.",
    "I can form the second conditional correctly.",
    "I can use *If I were…* and *could / might* in conditionals.",
    "I can tell the difference between the first and second conditional."
  ],

  explanation: {
    vocabTitle: "Money and dreams",
    vocab: [
      { word: "win the lottery", icon: "🎟️" }, { word: "a millionaire", icon: "🤑" }, { word: "a fortune", icon: "💰" },
      { word: "invest", icon: "📈" }, { word: "donate", icon: "🎁" }, { word: "a charity", icon: "❤️" },
      { word: "afford", icon: "💳" }, { word: "quit your job", icon: "🚪" }, { word: "retire", icon: "🏖️" },
      { word: "a mansion", icon: "🏰" }, { word: "luxury", icon: "💎" }, { word: "be broke", icon: "🪙" },
      { word: "spend money on", icon: "🛍️" }, { word: "save up for", icon: "🐷" }, { word: "share", icon: "🤲" }
    ],
    grammar: [
      {
        title: "Second conditional",
        intro: "Use it for imaginary, impossible or unlikely situations in the present or future.",
        head: ["If clause", "Result clause", "Example"],
        rows: [
          ["*if* + past simple", "*would ('d)* + base verb", "*If I won* the lottery, *I'd buy* a house."],
          ["*if* + past simple (negative)", "*would* + base verb", "*If I didn't have* to work, *I'd travel*."],
          ["*if* + past simple", "*could / might* + base verb", "*If I had* time, *I could* learn to surf."],
          ["question", "", "What *would* you *do* *if you were* rich?"]
        ],
        note: "The past simple here doesn't talk about the past. It shows the situation is imaginary."
      },
      {
        title: "If I were…",
        head: ["Form", "Example"],
        rows: [
          ["*If I / he / she / it were…*", "*If I were* a millionaire, I'd build a school."],
          ["*If I were you,…* (advice)", "*If I were you*, I'd save the money."]
        ],
        note: "*If I was* is common in informal speech, but *If I were* is correct in exams and writing."
      },
      {
        title: "First or second conditional?",
        head: ["First conditional (real / likely)", "Second conditional (imaginary / unlikely)"],
        rows: [
          ["*If I pass* the exam, *I'll celebrate*.", "*If I won* a million pesos, *I'd celebrate* for a week."],
          ["*If it rains*, *we'll stay* home.", "*If I lived* on the moon, *I'd see* the Earth every night."]
        ]
      }
    ],
    watchOut: [
      ["If I would win the lottery, I'd buy a car.", "If I won the lottery, I'd buy a car."],
      ["If I have more money, I would travel.", "If I had more money, I would travel."],
      ["If I was you, I'd save it.", "If I were you, I'd save it."],
      ["What you would do if you were rich?", "What would you do if you were rich?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verbs.",
      items: [
        "If I [[had]] a car, I [[would drive|'d drive]] to the beach every weekend. (have / drive)",
        "If she [[were|was]] taller, she [[could]] play basketball. (be / can)",
        "What [[would]] you do if you [[found]] a wallet in the street? (do / find)",
        "I [[wouldn't|would not]] quit my job if I [[won]] the lottery. (not quit / win)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio game show where callers answer a hypothetical question.",
      title: "What would you do?",
      script: [
        { who: "Host", line: "Good afternoon and welcome to What Would You Do? Today's question: If you had one million dollars, but you had to spend it in one week, what would you do? First caller, Mónica." },
        { who: "Mónica", line: "Hi! That's easy. First, I'd pay off my parents' mortgage. Then I'd buy a small apartment for myself. And with the rest, I'd organize a big trip for all my cousins to Japan." },
        { who: "Host", line: "Japan! Why Japan?" },
        { who: "Mónica", line: "Because we all love anime, and we've always dreamed about going together. If we went, it would be the best week of our lives." },
        { who: "Host", line: "Wonderful. Second caller, Raúl." },
        { who: "Raúl", line: "Hello. I'm a teacher in a small town in the Sierra Norte. If I had a million dollars, I'd build a new school with a library and computers. The kids there don't have internet." },
        { who: "Host", line: "That's very generous. Wouldn't you buy anything for yourself?" },
        { who: "Raúl", line: "Maybe a new bicycle! Mine is really old. But honestly, if the kids had better opportunities, I'd be the happiest man in the world." },
        { who: "Host", line: "Thank you both. Listeners, vote for your favorite answer on our website!" }
      ],
      activities: [
        {
          type: "sort", title: "Mónica or Raúl?",
          prompt: "Listen. What would each person do?",
          bins: ["Mónica", "Raúl"],
          items: [
            { text: "pay off a mortgage", bin: 0 }, { text: "buy a small apartment", bin: 0 }, { text: "take cousins to Japan", bin: 0 },
            { text: "build a school", bin: 1 }, { text: "buy computers for kids", bin: 1 }, { text: "buy a new bicycle", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The callers have to spend the money in one month.", a: false },
            { s: "Mónica and her cousins love anime.", a: true },
            { s: "Raúl is a doctor.", a: false },
            { s: "The kids in Raúl's town don't have internet.", a: true },
            { s: "Raúl wouldn't buy anything for himself.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about what really happens to lottery winners.",
      title: "Would winning the lottery make you happy?",
      text: [
        { body: "Most people think that if they won the lottery, all their problems would disappear. But research shows a more complicated picture." },
        { body: "In a famous study from 1978, psychologists compared lottery winners with people who hadn't won. After a year, the winners weren't much happier than the others. The reason? Humans get used to good things very quickly. If you bought a mansion, it would feel amazing for a few months, but then it would feel normal." },
        { body: "There are also practical problems. Many winners receive hundreds of requests for money from friends, family and strangers. Some lose all their money in a few years because they don't know how to manage it." },
        { body: "However, more recent studies show that money can improve life satisfaction, especially if winners use it to reduce stress, help others or have experiences instead of buying things. So, if you won tomorrow, what would you do? Experts would tell you: pay your debts, get advice, and don't tell everyone!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The 1978 study found winners were much happier after a year.", a: false },
            { s: "People get used to good things quickly.", a: true },
            { s: "Some winners lose all their money in a few years.", a: true },
            { s: "Recent studies say money can never improve life satisfaction.", a: false },
            { s: "Experts recommend telling everyone about your win.", a: false }
          ]
        },
        {
          type: "match", title: "Complete the conditionals",
          prompt: "Match the halves to make sentences from the article.",
          pairs: [
            ["If you bought a mansion,", "it would feel amazing for a few months."],
            ["If you won tomorrow,", "what would you do?"],
            ["If winners used money to help others,", "they would be more satisfied."],
            ["If I were a lottery winner,", "I'd pay my debts first."]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the second conditional, then write about your dreams.",
      activities: [
        {
          type: "rewrite", title: "Make it imaginary",
          prompt: "Rewrite each sentence as a second conditional.",
          items: [
            { q: "I don't have a car, so I can't drive to work.", a: ["If I had a car, I could drive to work.", "If I had a car, I would drive to work."] },
            { q: "She isn't here, so she can't help us.", a: ["If she were here, she could help us.", "If she was here, she could help us.", "If she were here, she would help us."] },
            { q: "I don't speak Japanese, so I won't apply for the job.", a: ["If I spoke Japanese, I would apply for the job.", "If I spoke Japanese, I'd apply for the job."] },
            { q: "We live in a small apartment, so we can't have a dog.", a: ["If we didn't live in a small apartment, we could have a dog.", "If we lived in a big apartment, we could have a dog.", "If we lived in a bigger apartment, we could have a dog."] }
          ]
        },
        {
          type: "sort", title: "First or second conditional?",
          prompt: "Is the situation real/likely or imaginary/unlikely?",
          bins: ["First (real, likely)", "Second (imaginary, unlikely)"],
          items: [
            { text: "If I study, I'll pass.", bin: 0 }, { text: "If it's sunny tomorrow, we'll go to the park.", bin: 0 }, { text: "If you call me, I'll answer.", bin: 0 },
            { text: "If I were a bird, I'd fly to Paris.", bin: 1 }, { text: "If I met the president, I'd ask about education.", bin: 1 }, { text: "If dogs could talk, they'd complain a lot.", bin: 1 }
          ]
        },
        {
          type: "write", title: "If I were a millionaire",
          prompt: "Write a text (120–150 words) answering the question: *What would you do if you won the lottery?* Talk about how you'd spend, save or share the money, how your life would change and what wouldn't change. Use the second conditional at least six times.",
          minWords: 120, maxWords: 150,
          model: "If I won the lottery, the first thing I'd do is cry! Then I'd call my mom. I think I'd give a big part of the money to my family. If my parents didn't have to work so hard, they could finally enjoy life. I'd buy them a house in Veracruz, near the sea, because they love it there. I wouldn't quit my studies, because I really enjoy architecture. However, if I had more money, I could study a master's degree in Barcelona. I'd also donate money to an animal shelter in my city. I wouldn't buy a mansion or an expensive car, because I don't need luxury to be happy. If I became rich, I hope I wouldn't change. I'd still eat tacos with my friends every Friday!",
          bank: ["If I won the lottery,…", "I'd…", "I wouldn't…", "If my… didn't have to…, they could…", "If I had more money, I could…", "I hope I wouldn't change."],
          checklist: [
            "I used the **second conditional** at least six times.",
            "I used *if* + **past simple** (not *would*) in the *if* clause.",
            "I used **could** or **might** at least once.",
            "I talked about what **would** and **wouldn't** change."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the short form *I'd*.",
          items: [
            "If I won the lottery, I'd buy a house.",
            "What would you do with the money?",
            "I'd travel around the world.",
            "If I were rich, I'd help my family.",
            "If I had time, I could learn to surf.",
            "I wouldn't quit my job."
          ]
        },
        {
          type: "speak", title: "What would you do?",
          prompt: "Record yourself for one to two minutes answering two of these questions: *What would you do if you won a million dollars? What would you do if you could live anywhere in the world? What would you do if you were the president for one day?*",
          language: ["If I…, I'd…", "The first thing I'd do is…", "I'd probably…", "I could…", "I wouldn't…", "It would be…"],
          seconds: 120,
          checklist: ["answer two questions?", "use the second conditional correctly?", "use I'd and I wouldn't?", "give reasons?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about imaginary situations.", review: "Explanation: second conditional" },
    { can: "I can form the second conditional with *if* + past simple and *would*.", review: "Explanation: second conditional; Writing activity 1" },
    { can: "I can use *If I were…*", review: "Explanation: If I were…" },
    { can: "I can use *could* and *might* in the result clause.", review: "Explanation: second conditional" },
    { can: "I can tell the difference between the first and second conditional.", review: "Explanation: first or second conditional; Writing activity 2" },
    { can: "I can talk and write about my dreams.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
