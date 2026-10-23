window.UNIT = {
  slug: "my-b1-journey",
  number: 50,
  title: "My B1 Journey",
  level: "B1",
  minutes: 70,
  speakers: { "Ms. Reyes": "f", "Paulina": "f", "Interviewer": "m", "Diego": "m" },
  focus: ["B1 review: narrative tenses and present perfect continuous", "conditionals, wishes and regrets", "the passive and reported speech", "modals of deduction and advice", "final project: My B1 Journey"],

  presentation: {
    scene: "🏁🎓🌟🗺️",
    situation: "It's the end of the B1 course. Paulina presents her final project, \"My B1 Journey\", to her group at the CAA.",
    warmup: {
      prompt: "What can you do in English now that you couldn't do before B1? Choose all.",
      options: ["tell a story with different past tenses", "give and defend my opinion", "write a formal email", "talk about hypothetical situations", "report what people said", "understand the news", "give a presentation", "speculate about situations", "complain politely", "talk about my regrets", "persuade someone", "describe a place in detail"],
      response: "Fantastic! You've become an independent user of English. In this final unit you'll review B1 and present your journey."
    },
    dialogueTitle: "Paulina's presentation",
    dialogue: [
      { who: "Paulina", line: "Good morning, everyone. Today I'm going to talk about my B1 journey. When I started this course, I *had* already *passed* A2, but I *was* still very nervous about speaking." },
      { who: "Paulina", line: "*I've been studying* at the CAA for eight months, and *I've completed* all fifty units." },
      { who: "Paulina", line: "The unit that *was* most useful for me *was* \"The Cover Letter\". Last month, I *was offered* an internship at a hotel, and my adviser *told me that* my letter *had been* excellent!" },
      { who: "Paulina", line: "Of course, there were difficult moments. *I should have practiced* speaking more at the beginning. *If I had recorded* myself more often, *I would have improved* faster." },
      { who: "Ms. Reyes", line: "That's a great reflection. What are your plans now?" },
      { who: "Paulina", line: "*I'm starting* B2 in January. *If I keep* practicing, *I'll take* the B2 exam next year. And *if I could* live anywhere, *I'd* study in Ireland!" },
      { who: "Paulina", line: "To sum up, *I wish I had* more time to study, but I'm proud of what I've achieved. Thank you for your attention. Are there any questions?" }
    ]
  },

  objectives: [
    "I can use the main B1 grammar structures correctly.",
    "I can describe my learning experience and progress in detail.",
    "I can reflect on mistakes and set realistic goals.",
    "I can give a prepared presentation about my B1 journey."
  ],

  explanation: {
    vocabTitle: "Reflecting on learning",
    vocab: [
      { word: "progress", icon: "📈" }, { word: "an achievement", icon: "🏆" }, { word: "a challenge", icon: "🧗" },
      { word: "a strength", icon: "💪" }, { word: "an area to improve", icon: "🎯" }, { word: "a learning strategy", icon: "🧠" },
      { word: "self-assessment", icon: "📋" }, { word: "fluency", icon: "🌊" }, { word: "accuracy", icon: "🎯" },
      { word: "confidence", icon: "😎" }, { word: "an independent user", icon: "🦋" }, { word: "keep it up", icon: "👍" },
      { word: "step out of my comfort zone", icon: "🚪" }, { word: "make the most of", icon: "✨" }, { word: "look back on", icon: "🔙" }
    ],
    grammar: [
      {
        title: "B1 grammar at a glance (1)",
        head: ["Use", "Form", "Example"],
        rows: [
          ["telling stories", "past simple, continuous, perfect", "I *was studying* when I *realized* I *had forgotten* my notes."],
          ["duration until now", "present perfect continuous", "I*'ve been studying* here for eight months."],
          ["imaginary present", "second conditional / *wish* + past", "If I *could* live anywhere, I*'d* go to Ireland. / I *wish* I *had* more time."],
          ["imaginary past / regrets", "third conditional / *should have*", "If I *had recorded* myself, I*'d have improved*. / I *should have practiced* more."],
          ["future", "*will, going to*, present continuous, future perfect", "I*'m starting* B2 in January. By 2027, I*'ll have passed* the exam."]
        ]
      },
      {
        title: "B1 grammar at a glance (2)",
        head: ["Use", "Form", "Example"],
        rows: [
          ["focus on the action", "passive (all tenses)", "I *was offered* an internship. / The results *will be published* soon."],
          ["reporting", "reported speech and verbs", "She *told me that* my letter *had been* excellent. / He *advised me to* apply."],
          ["deduction", "*must / might / can't (have)*", "It *must have been* hard. / She *can't be* tired."],
          ["advice", "*should, ought to, had better, If I were you*", "*If I were you*, I*'d* keep practicing."],
          ["linking ideas", "*although, despite, however, therefore, so that*", "*Although* it was hard, I finished. / I practiced *so that* I could improve."]
        ]
      }
    ],
    watchOut: [
      ["I'm studying here since January.", "I've been studying here since January."],
      ["If I would have more time, I'd study more.", "If I had more time, I'd study more."],
      ["She said me that I was ready.", "She told me that I was ready."],
      ["Despite it was difficult, I continued.", "Although it was difficult, I continued. / Despite the difficulty,…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb.",
      items: [
        "I [[have been learning|'ve been learning]] English for three years. (learn)",
        "If I [[had studied|'d studied]] more, I would have passed. (study)",
        "The new library [[will be opened]] next month. (open – future passive)",
        "My teacher told me [[to practice]] every day. (practice)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to an interview with Diego, a former CAA student who completed B1 two years ago.",
      title: "Life after B1",
      script: [
        { who: "Interviewer", line: "Diego, you finished the B1 course two years ago. What has changed since then?" },
        { who: "Diego", line: "A lot! When I started, I could only speak about simple things. By the end of B1, I had learned to give my opinion and tell long stories. That made a huge difference." },
        { who: "Interviewer", line: "What are you doing now?" },
        { who: "Diego", line: "I've been working for a tourism company in Mazatlán for a year. I talk to international tourists every day. If I hadn't learned English, I wouldn't have got this job." },
        { who: "Interviewer", line: "What was the most difficult part of B1?" },
        { who: "Diego", line: "The conditionals and reported speech. I used to mix them up all the time. My adviser told me to write example sentences about my own life, and that really helped." },
        { who: "Interviewer", line: "Any regrets?" },
        { who: "Diego", line: "I should have watched more series in English. I was too lazy! If I could go back, I'd also join a conversation club from the start." },
        { who: "Interviewer", line: "What advice would you give to students who are finishing B1?" },
        { who: "Diego", line: "Don't stop now! If you stop practicing, you'll forget things quickly. B2 is challenging, but if you got to B1, you can definitely do it." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Diego finished B1 two years ago.", a: true },
            { s: "He works for a tourism company in Cancún.", a: false },
            { s: "He thinks English helped him get his job.", a: true },
            { s: "Conditionals and reported speech were easy for him.", a: false },
            { s: "He regrets not watching more series in English.", a: true },
            { s: "He advises students to take a break after B1.", a: false }
          ]
        },
        {
          type: "match", title: "Identify the grammar",
          prompt: "Match each sentence from the interview with the grammar point.",
          pairs: [
            ["\"By the end of B1, I had learned to give my opinion.\"", "past perfect"],
            ["\"I've been working for a tourism company for a year.\"", "present perfect continuous"],
            ["\"If I hadn't learned English, I wouldn't have got this job.\"", "third conditional"],
            ["\"My adviser told me to write example sentences.\"", "reporting verb + infinitive"],
            ["\"I should have watched more series in English.\"", "regret with should have"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read the CEFR description of a B1 learner and a student's reflection.",
      title: "What does B1 mean?",
      text: [
        { body: "**The CEFR says:** A B1 learner is an *independent user*. They can understand the main points of clear standard language on familiar topics like work, school and free time. They can deal with most situations while traveling. They can write simple connected texts on familiar topics, and they can describe experiences, events, dreams, hopes and ambitions, and briefly give reasons and explanations for opinions and plans." },
        { author: "Reflection by Marisol, 22", body: "When I read this description at the start of the course, I didn't believe it was possible. Now I realize I can do most of these things. Last month, I was asked for directions by a tourist from Canada, and I explained everything without panicking! I've also written three formal emails for my social service. However, I still find it difficult to understand fast speakers in movies, and I sometimes forget to use the past perfect. If I keep watching series with subtitles, I think I'll improve. My goal is to reach B2 by the end of next year so that I can apply for an exchange program in Spain." }
      ],
      activities: [
        {
          type: "sort", title: "Strength or area to improve?",
          prompt: "Sort Marisol's comments.",
          bins: ["Strength 💪", "Area to improve 🎯"],
          items: [
            { text: "gave directions to a tourist", bin: 0 }, { text: "wrote three formal emails", bin: 0 }, { text: "can do most of the B1 descriptors", bin: 0 },
            { text: "understanding fast speakers in movies", bin: 1 }, { text: "remembering the past perfect", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "A B1 learner is called an independent user.", a: true },
            { s: "B1 learners can understand everything in movies.", a: false },
            { s: "Marisol panicked when the tourist asked for directions.", a: false },
            { s: "Marisol wants to reach B2 to apply for an exchange program.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Review B1 grammar, then write your final reflection.",
      activities: [
        {
          type: "rewrite", title: "B1 grammar challenge",
          prompt: "Rewrite each sentence using the structure in parentheses.",
          items: [
            { q: "I started studying here in January, and I still study here. (present perfect continuous + since)", a: ["I've been studying here since January.", "I have been studying here since January."] },
            { q: "I didn't practice speaking, so I was nervous in the exam. (third conditional)", a: ["If I had practiced speaking, I wouldn't have been nervous in the exam.", "If I had practiced speaking, I would not have been nervous in the exam.", "If I'd practiced speaking, I wouldn't have been nervous in the exam."] },
            { q: "My adviser said, \"You should join a conversation club.\" (advised me to)", a: ["My adviser advised me to join a conversation club."] },
            { q: "They will announce the results next week. (passive)", a: ["The results will be announced next week."] },
            { q: "I don't have more time to study. (I wish)", a: ["I wish I had more time to study."] }
          ]
        },
        {
          type: "rewrite", title: "Find the mistake",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "Despite it was hard, I finished all the units.", a: ["Although it was hard, I finished all the units.", "Despite the difficulty, I finished all the units.", "Even though it was hard, I finished all the units."] },
            { q: "If I will pass B1, I'll start B2.", a: ["If I pass B1, I'll start B2.", "If I pass B1, I will start B2."] },
            { q: "She told that I was ready.", a: ["She told me that I was ready.", "She said that I was ready.", "She told me I was ready."] },
            { q: "I'm used to speak English every day now.", a: ["I'm used to speaking English every day now.", "I am used to speaking English every day now."] }
          ]
        },
        {
          type: "write", title: "My B1 journey",
          prompt: "Write your final reflection (160–200 words). Describe where you started, what you've achieved, the most useful units, your difficulties and regrets, your strengths now and your plans for the future. Use as many B1 structures as you can: present perfect continuous, narrative tenses, conditionals, *wish / should have*, passive, reported speech and linkers.",
          minWords: 160, maxWords: 200,
          model: "When I started B1, I had just finished A2, and although I could understand quite a lot, I was terrified of speaking. I've been studying at the CAA for almost a year now, and I've completed all fifty units. The most useful units for me were \"Tell Me About Yourself\" and \"Giving a Presentation\", because I had my first real job interview in English last month. The interviewer told me that my English was very clear, and I was offered the job! Of course, it wasn't always easy. I found the conditionals really confusing, and I should have done more listening practice. If I had watched more series in English, I would have understood fast speakers better. I wish I had more time to read, too. Now, however, I feel much more confident. I can give my opinion, write formal emails and tell stories without stopping every two words. Next semester I'm starting B2, and I'm going to join a conversation club so that I can improve my fluency. If I keep practicing, I'm sure I'll reach my goal.",
          bank: ["When I started B1,…", "I've been studying… for…", "The most useful unit was… because…", "I should have…", "If I had…, I would have…", "I wish…", "Now I can…", "Next, I'm going to… so that…"],
          checklist: [
            "I described my **starting point** and my **progress**.",
            "I used at least **six** different B1 structures.",
            "I included a **regret** and a **goal**.",
            "I organized my text with **linkers**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your final presentation.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Then say it and check your pronunciation.",
          items: [
            "I've been studying here for eight months.",
            "I was offered an internship.",
            "I should have practiced speaking more.",
            "If I keep practicing, I'll pass.",
            "I wish I had more time.",
            "I'm proud of what I've achieved."
          ]
        },
        {
          type: "speak", title: "Final project: My B1 Journey",
          prompt: "Record a two- to three-minute presentation about your B1 journey. Use signposting language. Talk about where you started, your achievements, the most useful units, your difficulties and regrets, and your future plans. Use a wide range of B1 structures. Congratulations on finishing B1!",
          language: ["Good morning. Today I'm going to talk about…", "When I started,…", "I've been… for…", "If I had…, I would have…", "Next, I'm going to…", "To sum up,…"],
          seconds: 180,
          checklist: ["use signposting to organize your talk?", "describe your progress with examples?", "use at least six B1 structures?", "talk about future plans?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can tell stories with narrative tenses and talk about duration.", review: "Units 6, 7 and 8" },
    { can: "I can use conditionals, wishes and regrets.", review: "Units 26–29 and 49" },
    { can: "I can use the passive and reported speech.", review: "Units 19, 31–34" },
    { can: "I can give opinions, advice and make deductions.", review: "Units 22, 23, 37 and 40" },
    { can: "I can write formal emails, reviews and opinion essays.", review: "Units 10, 12, 37 and 44" },
    { can: "I can give a prepared presentation about my progress.", review: "Unit 47; this unit's Speaking activity 2" }
  ]
};
