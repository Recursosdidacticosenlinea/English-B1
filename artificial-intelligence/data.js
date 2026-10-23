window.UNIT = {
  slug: "artificial-intelligence",
  number: 45,
  title: "Artificial Intelligence",
  level: "B1",
  minutes: 65,
  speakers: { "Professor": "f", "Esteban": "m", "Host": "m", "Researcher": "f" },
  focus: ["AI and technology vocabulary", "will / won't for confident predictions", "may / might / could for possible predictions", "be likely / unlikely to; be bound to", "definitely, probably, possibly"],

  presentation: {
    scene: "🤖🧠💬🔮",
    situation: "In a technology and society class, Professor Aguilar asks students about the future of artificial intelligence.",
    warmup: {
      prompt: "How do you use AI now? Choose all.",
      options: ["chatbots", "translation apps", "voice assistants", "photo filters", "music recommendations", "navigation apps", "writing help", "studying", "image generators", "I don't use AI", "spam filters", "video recommendations"],
      response: "AI is already everywhere! In this unit you'll learn to make predictions about the future with different levels of certainty."
    },
    dialogueTitle: "The future of AI",
    dialogue: [
      { who: "Professor", line: "So, Esteban, how *will* AI change education in the next ten years?" },
      { who: "Esteban", line: "I think every student *will probably* have a personal AI tutor. It *will definitely* help people learn faster." },
      { who: "Professor", line: "Interesting. Do you think teachers *will* disappear?" },
      { who: "Esteban", line: "No, I don't think so. Teachers *are unlikely to* disappear, because students need human support. But their role *might* change." },
      { who: "Professor", line: "What about jobs in general?" },
      { who: "Esteban", line: "Some jobs *are bound to* disappear, like data entry. But AI *could* also create new jobs that we can't imagine today." },
      { who: "Professor", line: "And the risks?" },
      { who: "Esteban", line: "People *may* trust AI too much. And fake videos *are likely to* become a big problem." }
    ]
  },

  objectives: [
    "I can talk about artificial intelligence and its effects.",
    "I can make confident predictions with *will / won't* and *definitely, probably*.",
    "I can make less certain predictions with *may, might, could*.",
    "I can use *be likely to, be unlikely to* and *be bound to*."
  ],

  explanation: {
    vocabTitle: "Artificial intelligence",
    vocab: [
      { word: "artificial intelligence (AI)", icon: "🤖" }, { word: "a chatbot", icon: "💬" }, { word: "an algorithm", icon: "🧮" },
      { word: "automation", icon: "⚙️" }, { word: "machine learning", icon: "🧠" }, { word: "data", icon: "📊" },
      { word: "a deepfake", icon: "🎭" }, { word: "replace", icon: "🔁" }, { word: "a breakthrough", icon: "💡" },
      { word: "ethical", icon: "⚖️" }, { word: "a risk", icon: "⚠️" }, { word: "a benefit", icon: "✅" },
      { word: "self-driving car", icon: "🚗" }, { word: "facial recognition", icon: "🙂" }, { word: "cheat", icon: "🙈" }
    ],
    grammar: [
      {
        title: "Predictions: how sure are you?",
        head: ["Certainty", "Structure", "Example"],
        rows: [
          ["100%", "*will definitely / be bound to*", "AI *will definitely* change education. / Some jobs *are bound to* disappear."],
          ["about 75%", "*will probably / be likely to*", "Fake videos *are likely to* become a problem. / Students *will probably* have AI tutors."],
          ["about 50%", "*may / might / could*", "Teachers' roles *might* change. / AI *could* create new jobs."],
          ["about 25%", "*probably won't / be unlikely to*", "Teachers *are unlikely to* disappear."],
          ["0%", "*definitely won't*", "Robots *definitely won't* replace friends."]
        ],
        note: "Word order: *will definitely / probably* (positive), but *definitely / probably won't* (negative)."
      },
      {
        title: "I think / I doubt",
        head: ["Structure", "Example"],
        rows: [
          ["*I think* + *will*", "*I think* AI *will* help doctors."],
          ["*I don't think* + *will*", "*I don't think* robots *will* take all jobs. (not *I think robots won't*)"],
          ["*I doubt* (+ that) + *will*", "*I doubt* AI *will* ever feel emotions."]
        ]
      }
    ],
    watchOut: [
      ["AI will probably not replace teachers.", "AI probably won't replace teachers."],
      ["It's likely that it to happen.", "It's likely to happen. / It's likely that it will happen."],
      ["Robots might to take our jobs.", "Robots might take our jobs."],
      ["I think AI won't replace doctors.", "I don't think AI will replace doctors."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "Self-driving cars are [[likely]] to be common by 2040.",
        "AI will [[definitely|probably]] change the way we work.",
        "Robots [[might|may|could]] help older people at home in the future.",
        "I [[doubt]] machines will ever fall in love."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with an AI researcher.",
      title: "AI: friend or enemy?",
      script: [
        { who: "Host", line: "Today we're talking to an AI researcher from the National Polytechnic Institute. Is AI going to take our jobs?" },
        { who: "Researcher", line: "Some jobs are bound to change. Tasks that are repetitive, like data entry or simple customer service, will probably be automated. But history shows that technology also creates new jobs. Fifty years ago, nobody worked as a social media manager!" },
        { who: "Host", line: "What about medicine?" },
        { who: "Researcher", line: "That's one of the most exciting areas. AI can already detect some cancers in X-rays faster than doctors. In ten years, it's likely to be a normal tool in hospitals. But doctors definitely won't disappear. Patients need empathy and human decisions." },
        { who: "Host", line: "And education? Teachers are worried about students cheating." },
        { who: "Researcher", line: "That's a real concern. Some students might use AI to write their essays. But schools could also use AI to give every student personalized help. I think assessment will have to change: more oral presentations and projects, fewer take-home essays." },
        { who: "Host", line: "What's the biggest risk?" },
        { who: "Researcher", line: "Misinformation. Deepfake videos are likely to become very realistic, and people may not be able to tell what's true. We need laws and education to deal with that." }
      ],
      activities: [
        {
          type: "sort", title: "How sure is she?",
          prompt: "Listen. Sort the researcher's predictions.",
          bins: ["Very sure / likely", "Possible", "Very unlikely"],
          items: [
            { text: "Some jobs are bound to change.", bin: 0 }, { text: "Repetitive tasks will probably be automated.", bin: 0 }, { text: "AI is likely to be normal in hospitals.", bin: 0 },
            { text: "Some students might use AI to write essays.", bin: 1 }, { text: "Schools could give personalized help.", bin: 1 }, { text: "People may not tell what's true.", bin: 1 },
            { text: "Doctors definitely won't disappear.", bin: 2 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The researcher thinks technology only destroys jobs.", a: false },
            { s: "AI can already detect some cancers in X-rays.", a: true },
            { s: "She thinks assessment in schools will have to change.", a: true },
            { s: "She thinks deepfakes are the biggest risk.", a: true },
            { s: "She says we don't need new laws.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a student magazine.",
      title: "Should students use AI?",
      text: [
        { body: "Since chatbots became popular, universities around the world have been debating one question: should students be allowed to use AI?" },
        { body: "Some universities banned it at first. But many experts say that bans are unlikely to work. \"Students are bound to use these tools,\" says one professor. \"It's better to teach them to use AI responsibly.\"" },
        { body: "Used well, AI could be a great study partner. It can explain difficult concepts, give examples, create practice questions and help with brainstorming. For language learners, it might be like having a patient conversation partner available 24 hours a day." },
        { body: "However, there are risks. AI sometimes invents information, so students may learn incorrect facts. And if students let AI do all the work, they probably won't develop important skills like critical thinking and writing. The key, experts say, is to use AI as a tool, not as a replacement for your own brain." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "All universities banned AI at first.", a: false },
            { s: "Many experts think bans are unlikely to work.", a: true },
            { s: "AI can help with brainstorming.", a: true },
            { s: "AI never invents information.", a: false },
            { s: "Experts say AI should replace students' own thinking.", a: false }
          ]
        },
        {
          type: "match", title: "Predictions from the text",
          prompt: "Match the beginnings and endings.",
          pairs: [
            ["Bans are unlikely", "to work."],
            ["Students are bound", "to use these tools."],
            ["AI could be", "a great study partner."],
            ["Students may", "learn incorrect facts."],
            ["They probably won't develop", "critical thinking."]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice predictions, then write about the future of AI.",
      activities: [
        {
          type: "rewrite", title: "Change the certainty",
          prompt: "Rewrite each prediction with the words in parentheses.",
          items: [
            { q: "Robots will possibly cook our meals. (might)", a: ["Robots might cook our meals."] },
            { q: "AI will very probably translate everything instantly. (likely)", a: ["AI is likely to translate everything instantly."] },
            { q: "Machines won't feel emotions, I'm almost sure. (unlikely)", a: ["Machines are unlikely to feel emotions."] },
            { q: "Some jobs will disappear, I'm 100% sure. (bound)", a: ["Some jobs are bound to disappear."] }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "AI will probably not replace teachers.", a: ["AI probably won't replace teachers.", "AI probably will not replace teachers."] },
            { q: "Self-driving cars might to be common.", a: ["Self-driving cars might be common."] },
            { q: "I think robots won't take all jobs.", a: ["I don't think robots will take all jobs."] },
            { q: "It's likely to AI help doctors.", a: ["AI is likely to help doctors.", "It's likely that AI will help doctors."] }
          ]
        },
        {
          type: "write", title: "AI in 2040",
          prompt: "Write an article (130–160 words) for a student magazine: *How will AI change our lives by 2040?* Make predictions about at least three areas (education, work, health, transport, entertainment, relationships…). Use different levels of certainty and give reasons.",
          minWords: 130, maxWords: 160,
          model: "By 2040, artificial intelligence is bound to be part of almost everything we do. In education, every student will probably have a personal AI tutor that adapts to their level. However, I don't think teachers will disappear, because learning is also about motivation and human connection. At work, many repetitive jobs are likely to be automated. This might be difficult for some people, but new jobs could also appear, especially in technology and creative industries. In health, AI will definitely help doctors detect diseases earlier, which could save millions of lives. Transport is another area that will change: self-driving taxis may be common in big cities like Mexico City. On the other hand, there are risks. Deepfakes are likely to make fake news even more dangerous, and people might spend even less time with each other. In my opinion, AI will be a powerful tool, but we must use it carefully.",
          bank: ["… is bound to…", "… will probably…", "I don't think… will…", "… is likely to…", "… might / could…", "… will definitely…", "In my opinion,…"],
          checklist: [
            "I made predictions about at least **three** areas.",
            "I used at least **five** different structures for predictions.",
            "I used **probably / definitely** in the correct position.",
            "I gave **reasons** and mentioned **risks**."
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
            "AI will definitely change education.",
            "Teachers are unlikely to disappear.",
            "Some jobs are bound to disappear.",
            "AI could create new jobs.",
            "Fake videos are likely to become a problem.",
            "I don't think robots will replace us."
          ]
        },
        {
          type: "speak", title: "Your predictions",
          prompt: "Record yourself for one to two minutes. How will AI change your future profession or your daily life? Make at least five predictions with different levels of certainty and explain your reasons. Mention one benefit and one risk.",
          language: ["In my field,…", "AI will definitely…", "It's likely to…", "It might…", "I doubt that…", "One risk is that…"],
          seconds: 120,
          checklist: ["make at least five predictions?", "use different levels of certainty?", "mention a benefit and a risk?", "give reasons?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about artificial intelligence and its effects.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can make predictions with *will* + *definitely / probably*.", review: "Explanation: predictions" },
    { can: "I can use *may, might, could* for possible predictions.", review: "Explanation: predictions; Writing activity 1" },
    { can: "I can use *be likely to, be unlikely to, be bound to*.", review: "Explanation: predictions; Writing activity 1" },
    { can: "I can use *I don't think… will* and *I doubt…*", review: "Explanation: I think / I doubt; Writing activity 2" },
    { can: "I can write and talk about the future of AI.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
