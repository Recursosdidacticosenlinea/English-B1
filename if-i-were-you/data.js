window.UNIT = {
  slug: "if-i-were-you",
  number: 22,
  title: "If I Were You",
  level: "B1",
  minutes: 60,
  speakers: { "Gaby": "f", "Toño": "m", "Host": "f", "Caller": "m", "Dr. Ruiz": "f" },
  focus: ["common health problems and remedies", "should / ought to", "had better (not) for strong advice", "If I were you, I'd…", "Why don't you…? / You could try…"],

  presentation: {
    scene: "🤧🍵💊🛌",
    situation: "Toño has had a bad cold for a week, but he doesn't want to miss his soccer final on Saturday. His friend Gaby gives him advice.",
    warmup: {
      prompt: "What do you usually do when you have a cold? Choose all.",
      options: ["drink tea with honey", "take medicine", "rest", "go to the doctor", "eat soup", "keep going to school or work", "drink orange juice", "take a hot shower", "sleep a lot", "ask my mom", "use a home remedy", "ignore it"],
      response: "Everyone has their own remedies! In this unit you'll learn different ways to give advice."
    },
    dialogueTitle: "The soccer final",
    dialogue: [
      { who: "Gaby", line: "You sound terrible, Toño. You *should* stay home today." },
      { who: "Toño", line: "I can't. The final is on Saturday and we *ought to* train every day." },
      { who: "Gaby", line: "*If I were you*, *I'd* rest for two days. You won't play well if you're sick." },
      { who: "Toño", line: "Maybe. But the coach will be angry." },
      { who: "Gaby", line: "*Why don't you* call him and explain? And you*'d better* see a doctor. You've been coughing for a week!" },
      { who: "Toño", line: "OK, OK. Any other ideas?" },
      { who: "Gaby", line: "*You could try* my grandma's tea: ginger, lemon and honey. It works every time!" }
    ]
  },

  objectives: [
    "I can describe common health problems.",
    "I can give advice with *should, ought to* and *If I were you…*",
    "I can give strong advice or warnings with *had better*.",
    "I can make suggestions with *Why don't you…?* and *You could…*"
  ],

  explanation: {
    vocabTitle: "Health problems and remedies",
    vocab: [
      { word: "a sore throat", icon: "🗣️" }, { word: "a cough", icon: "😷" }, { word: "a runny nose", icon: "🤧" },
      { word: "a fever", icon: "🌡️" }, { word: "a headache", icon: "🤕" }, { word: "a sprained ankle", icon: "🦶" },
      { word: "a rash", icon: "🔴" }, { word: "an allergy", icon: "🌼" }, { word: "dizzy", icon: "😵‍💫" },
      { word: "a prescription", icon: "📋" }, { word: "painkillers", icon: "💊" }, { word: "a home remedy", icon: "🍯" },
      { word: "get some rest", icon: "🛌" }, { word: "an ice pack", icon: "🧊" }, { word: "recover", icon: "💪" }
    ],
    grammar: [
      {
        title: "Giving advice",
        head: ["Expression", "Strength", "Example"],
        rows: [
          ["*should / shouldn't* + verb", "normal advice", "You *should* stay home."],
          ["*ought to* + verb", "same as *should* (a bit more formal)", "You *ought to* see a doctor."],
          ["*If I were you, I'd (not)* + verb", "personal advice", "*If I were you, I'd* rest for two days."],
          ["*had better (not)* + verb", "strong advice / warning", "You*'d better* see a doctor. (or there will be a problem)"]
        ],
        note: "*Had better* refers to now or the future, not the past: *You'd better go now.* The negative is *had better not*: *You'd better not eat that.*"
      },
      {
        title: "Making suggestions",
        head: ["Expression", "Example"],
        rows: [
          ["*Why don't you* + verb?", "*Why don't you* call the coach?"],
          ["*You could (try)* + noun / -ing", "*You could try* ginger tea. / *You could try* sleeping more."],
          ["*Have you tried* + -ing?", "*Have you tried* putting ice on it?"],
          ["*It might be a good idea to…*", "*It might be a good idea to* take a break."]
        ]
      }
    ],
    watchOut: [
      ["You should to rest.", "You should rest."],
      ["If I was you, I'd rest.", "If I were you, I'd rest."],
      ["You had better to go to the doctor.", "You'd better go to the doctor."],
      ["You ought see a doctor.", "You ought to see a doctor."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "If I [[were]] you, I'd take a painkiller.",
        "You ought [[to]] drink more water.",
        "You'd [[better]] not play with a sprained ankle.",
        "[[Why]] don't you go to bed early tonight?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio health program where listeners call for advice.",
      title: "Ask the doctor",
      script: [
        { who: "Host", line: "Welcome to Ask the Doctor. Dr. Ruiz is here to answer your questions. First caller, go ahead." },
        { who: "Caller", line: "Hi, doctor. I sprained my ankle playing basketball yesterday. It's very swollen. What should I do?" },
        { who: "Dr. Ruiz", line: "First, you'd better not walk on it. Rest is essential. You should put ice on it for twenty minutes every two hours." },
        { who: "Caller", line: "Should I use a bandage?" },
        { who: "Dr. Ruiz", line: "Yes, a light one. And keep your foot up, above the level of your heart, especially at night. If I were you, I'd also get an X-ray, just to be sure nothing is broken." },
        { who: "Caller", line: "How long will it take?" },
        { who: "Dr. Ruiz", line: "Usually two to four weeks. You ought to wait until there's no pain before you play again. If you go back too soon, it could get worse." },
        { who: "Caller", line: "But I have a tournament in ten days!" },
        { who: "Dr. Ruiz", line: "I understand, but your health is more important. Why don't you talk to your coach about it? You could help the team in other ways." },
        { who: "Caller", line: "OK. Thank you, doctor." }
      ],
      activities: [
        {
          type: "sort", title: "Do or don't?",
          prompt: "Listen. What does Dr. Ruiz recommend?",
          bins: ["Do ✅", "Don't ❌"],
          items: [
            { text: "put ice on it", bin: 0 }, { text: "use a light bandage", bin: 0 }, { text: "keep your foot up", bin: 0 }, { text: "get an X-ray", bin: 0 }, { text: "talk to your coach", bin: 0 },
            { text: "walk on it", bin: 1 }, { text: "play before the pain stops", bin: 1 }, { text: "play in the tournament in ten days", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete.",
          items: [
            "He sprained his ankle playing [[basketball]].",
            "Put ice on it for [[twenty|20]] minutes every two hours.",
            "Keep your foot above the level of your [[heart]].",
            "It usually takes two to [[four|4]] weeks to recover.",
            "The tournament is in [[ten|10]] days."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a magazine column where readers ask for advice.",
      title: "Dear Dr. Ana",
      text: [
        { author: "Question from Iris, 22", body: "Dear Dr. Ana, I get terrible headaches almost every afternoon. I work at a computer for eight hours a day and I drink a lot of coffee to stay awake. Painkillers help, but the headaches always come back. What should I do?" },
        { author: "Dr. Ana's answer", body: "Dear Iris, your headaches might be caused by several things. First, you ought to check your eyes. Many people need glasses and don't know it. Second, you should take a short break every hour: stand up, look out of the window and stretch your neck. Third, if I were you, I'd cut down on coffee slowly. Too much caffeine can cause headaches, and so can stopping suddenly! Drink plenty of water, too. Finally, you'd better not take painkillers every day, because this can make headaches worse. If they continue for more than two weeks, why don't you make an appointment with a neurologist? Take care, Dr. Ana" }
      ],
      activities: [
        {
          type: "match", title: "Dr. Ana's advice",
          prompt: "Match the advice with the reason.",
          pairs: [
            ["Check your eyes", "because you might need glasses."],
            ["Take a break every hour", "to stand up and stretch your neck."],
            ["Cut down on coffee slowly", "because stopping suddenly can cause headaches."],
            ["Don't take painkillers every day", "because this can make headaches worse."],
            ["See a neurologist", "if headaches continue for two weeks."]
          ]
        },
        {
          type: "rewrite", title: "Change the expression",
          prompt: "Rewrite each piece of advice using the expression in parentheses.",
          items: [
            { q: "You should check your eyes. (ought to)", a: ["You ought to check your eyes."] },
            { q: "You should cut down on coffee. (If I were you)", a: ["If I were you, I'd cut down on coffee.", "If I were you, I would cut down on coffee."] },
            { q: "Don't take painkillers every day. (had better)", a: ["You'd better not take painkillers every day.", "You had better not take painkillers every day."] },
            { q: "You should see a neurologist. (Why don't you)", a: ["Why don't you see a neurologist?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice advice expressions, then write a reply to a reader.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "You should to drink more water.", a: ["You should drink more water."] },
            { q: "If I was you, I'd see a dentist.", a: ["If I were you, I'd see a dentist.", "If I were you, I would see a dentist."] },
            { q: "You'd better to stay in bed.", a: ["You'd better stay in bed.", "You had better stay in bed."] },
            { q: "Why you don't take a break?", a: ["Why don't you take a break?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "If I were you, I'd rest." },
            { a: "You'd better not walk on it." },
            { a: "Why don't you call the coach?" },
            { a: "You could try ginger tea." },
            { a: "You ought to see a doctor." }
          ]
        },
        {
          type: "write", title: "Reply to a reader",
          prompt: "A reader writes: *\"I can't sleep well. I go to bed at 1 a.m. after watching videos on my phone, and I wake up tired. I also drink energy drinks to study. What should I do?\"* Write a reply (120–150 words) with at least five pieces of advice using different expressions.",
          minWords: 120, maxWords: 150,
          model: "Dear reader,<br>Thank you for writing. Many students have the same problem, so don't worry. First, you'd better stop using your phone at least an hour before bed. The blue light tells your brain it's daytime. If I were you, I'd leave the phone in another room and read a book instead. Second, you ought to go to bed at the same time every night, even on weekends. Your body loves routines. Third, you should cut down on energy drinks. They contain a lot of caffeine and sugar, which stay in your body for hours. Why don't you try a short walk or a glass of cold water when you feel sleepy? Finally, you could try relaxing music or breathing exercises. If nothing works after a month, it might be a good idea to see a doctor.<br>Sweet dreams!",
          bank: ["You'd better (not)…", "If I were you, I'd…", "You ought to…", "You should…", "Why don't you…?", "You could try…", "It might be a good idea to…"],
          checklist: [
            "I gave at least **five** pieces of advice.",
            "I used at least **four** different expressions.",
            "I explained **why** for some of the advice.",
            "I used *were* in *If I were you*."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the short forms *I'd* and *you'd*.",
          items: [
            "If I were you, I'd rest.",
            "You'd better see a doctor.",
            "You ought to drink more water.",
            "Why don't you call him?",
            "You could try my grandma's tea.",
            "I've had a sore throat for days."
          ]
        },
        {
          type: "speak", title: "The advice line",
          prompt: "Choose two problems: a health problem (headache, cold, back pain…) and a lifestyle problem (stress, no time to exercise…). Record yourself for one to two minutes giving advice for each one, as if you were a radio doctor. Use at least five different expressions.",
          language: ["For a…, you should…", "If I were you, I'd…", "You'd better not…", "You ought to…", "Why don't you…?", "You could try…"],
          seconds: 120,
          checklist: ["give advice for two problems?", "use at least five expressions?", "use had better for a warning?", "explain your reasons?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe common health problems.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *should* and *ought to* to give advice.", review: "Explanation: giving advice" },
    { can: "I can use *If I were you, I'd…*", review: "Explanation: giving advice; Reading activity 2" },
    { can: "I can use *had better (not)* for warnings.", review: "Explanation: giving advice note" },
    { can: "I can make suggestions with *Why don't you…?* and *You could…*", review: "Explanation: making suggestions" },
    { can: "I can give detailed advice to someone with a problem.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
