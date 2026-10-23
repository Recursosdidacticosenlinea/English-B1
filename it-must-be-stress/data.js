window.UNIT = {
  slug: "it-must-be-stress",
  number: 23,
  title: "It Must Be Stress",
  level: "B1",
  minutes: 60,
  speakers: { "Daniela": "f", "Marcos": "m", "Psychologist": "f", "Student": "m" },
  focus: ["stress and mental health vocabulary", "must for logical certainty", "might / may / could for possibility", "can't for logical impossibility", "speculating about causes"],

  presentation: {
    scene: "😓📚🧩🧘",
    situation: "Daniela and Marcos are worried about their friend Aldo. He hasn't come to class for a week and he isn't answering messages.",
    warmup: {
      prompt: "What are common causes of stress for students? Choose all.",
      options: ["exams", "money", "family problems", "too much homework", "relationships", "the future", "lack of sleep", "social media", "a part-time job", "public speaking", "traffic", "health problems"],
      response: "That's a lot of pressure! In this unit you'll learn to talk about stress and speculate about causes."
    },
    dialogueTitle: "Where's Aldo?",
    dialogue: [
      { who: "Daniela", line: "Aldo hasn't come to class all week. Something *must* be wrong." },
      { who: "Marcos", line: "He *might* be sick. There's a flu going around." },
      { who: "Daniela", line: "It *can't* be the flu. I saw him at the supermarket on Tuesday, and he looked fine." },
      { who: "Marcos", line: "Then it *could* be stress. He's working at night and studying full-time." },
      { who: "Daniela", line: "You're right. He *must* be exhausted. And his final project is due next week." },
      { who: "Marcos", line: "He *may* not want to talk about it. Let's go to his apartment after class." },
      { who: "Daniela", line: "Good idea. Let's bring him some food. He *can't* be eating well." }
    ]
  },

  objectives: [
    "I can talk about stress, its causes and its effects.",
    "I can use *must* when I'm almost sure something is true.",
    "I can use *might, may* and *could* for possibilities.",
    "I can use *can't* when I'm almost sure something is not true."
  ],

  explanation: {
    vocabTitle: "Stress and well-being",
    vocab: [
      { word: "overwhelmed", icon: "🌊" }, { word: "under pressure", icon: "🗜️" }, { word: "burnout", icon: "🔥" },
      { word: "anxiety", icon: "😰" }, { word: "insomnia", icon: "🌙" }, { word: "mood swings", icon: "🎢" },
      { word: "cope with", icon: "🛟" }, { word: "unwind", icon: "🧶" }, { word: "take a break", icon: "⏸️" },
      { word: "breathing exercises", icon: "🌬️" }, { word: "mindfulness", icon: "🧘" }, { word: "support", icon: "🤝" },
      { word: "a counselor", icon: "🧑‍⚕️" }, { word: "self-care", icon: "💆" }, { word: "set boundaries", icon: "🚧" }
    ],
    grammar: [
      {
        title: "Modals of deduction (present)",
        intro: "We use these modals to guess or make conclusions based on evidence.",
        head: ["Modal", "How sure?", "Example"],
        rows: [
          ["*must*", "about 95% sure it's **true**", "He's working and studying. He *must* be exhausted."],
          ["*might / may / could*", "about 50%: it's **possible**", "He *might* be sick. / It *could* be stress."],
          ["*might not / may not*", "it's possible it's **not** true", "He *may not* want to talk."],
          ["*can't*", "about 95% sure it's **not true**", "It *can't* be the flu. He looked fine."]
        ],
        note: "Don't use *mustn't* for deduction. *Mustn't* means prohibition. For impossibility, use *can't*."
      },
      {
        title: "Form: modal + base verb / be + -ing",
        head: ["Structure", "Example"],
        rows: [
          ["modal + base verb", "She *must know* the answer."],
          ["modal + *be* + adjective / noun", "They *might be* at home. / It *could be* a virus."],
          ["modal + *be* + -ing (now)", "He *can't be eating* well. / She *must be studying*."]
        ]
      }
    ],
    watchOut: [
      ["He mustn't be at home. The lights are off.", "He can't be at home. The lights are off."],
      ["She must to be tired.", "She must be tired."],
      ["Maybe he might be sick.", "He might be sick. / Maybe he's sick."],
      ["It can be the flu. (possibility now)", "It could / might be the flu."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *must, might* or *can't*.",
      items: [
        "She studied all night. She [[must]] be tired.",
        "I'm not sure where Luis is. He [[might|may|could]] be at the library.",
        "That [[can't]] be Ana's car. She doesn't have a car.",
        "They've been waiting for hours. They [[must]] be bored."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a university psychologist talking to a student about stress.",
      title: "At the counseling center",
      script: [
        { who: "Psychologist", line: "Hello, come in. How can I help you today?" },
        { who: "Student", line: "I don't know. I've been feeling strange lately. I can't sleep, I have headaches, and I get angry with my family for no reason." },
        { who: "Psychologist", line: "I see. How long have you felt like this?" },
        { who: "Student", line: "About a month. At first I thought it might be a physical problem, but the doctor said I'm healthy." },
        { who: "Psychologist", line: "Then it could be stress. Is anything different in your life right now?" },
        { who: "Student", line: "Well, I started a part-time job, I'm doing my social service, and my exams start in two weeks." },
        { who: "Psychologist", line: "That's a lot. You must feel overwhelmed. It can't be easy to do all of that at the same time." },
        { who: "Student", line: "It isn't. Sometimes I think I might drop out." },
        { who: "Psychologist", line: "Let's not make big decisions yet. First, let's work on coping strategies: a sleep routine, breathing exercises and a weekly plan. And it may be a good idea to talk to your boss about your hours during exams." },
        { who: "Student", line: "OK. Thank you. I feel better just talking about it." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The student can't sleep and has headaches.", a: true },
            { s: "The doctor found a physical problem.", a: false },
            { s: "The student has a part-time job.", a: true },
            { s: "The student's exams start tomorrow.", a: false },
            { s: "The psychologist recommends dropping out.", a: false },
            { s: "The student feels better after talking.", a: true }
          ]
        },
        {
          type: "match", title: "Deductions",
          prompt: "Match each piece of evidence with the deduction.",
          pairs: [
            ["The doctor says he's healthy.", "It could be stress."],
            ["He has a job, social service and exams.", "He must feel overwhelmed."],
            ["He's doing three things at the same time.", "It can't be easy."],
            ["His exams are coming.", "It may be a good idea to talk to his boss."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a university well-being website.",
      title: "Is it stress or something else?",
      text: [
        { body: "Stress is a normal reaction to pressure. A little stress can even be good: it helps you focus before an exam. But when stress continues for weeks, it can affect your body and mind." },
        { body: "**Physical signs.** If you often have headaches, stomachaches or muscle pain and the doctor can't find a cause, it might be stress. Problems with sleep are also very common." },
        { body: "**Emotional signs.** You may feel irritable, anxious or sad without a clear reason. Some people feel that they can't enjoy things they used to love." },
        { body: "**What can you do?** Exercise, even a 20-minute walk, reduces stress hormones. Talking to friends helps too. And remember, asking for help is not a weakness. Most universities, including BUAP, have free counseling services. If you're reading this article, you might be stressed. Don't wait: take care of yourself today." }
      ],
      activities: [
        {
          type: "sort", title: "Physical or emotional sign?",
          prompt: "Sort the signs of stress from the article.",
          bins: ["Physical 🫀", "Emotional 💭"],
          items: [
            { text: "headaches", bin: 0 }, { text: "stomachaches", bin: 0 }, { text: "muscle pain", bin: 0 }, { text: "sleep problems", bin: 0 },
            { text: "feeling irritable", bin: 1 }, { text: "feeling anxious", bin: 1 }, { text: "not enjoying things you love", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "All stress is bad for you.", a: false },
            { s: "A 20-minute walk can reduce stress hormones.", a: true },
            { s: "The article says asking for help is a weakness.", a: false },
            { s: "Counseling at BUAP is expensive.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice deduction, then write a message to a friend who's stressed.",
      activities: [
        {
          type: "rewrite", title: "Make a deduction",
          prompt: "Rewrite each sentence with *must, might* or *can't*.",
          items: [
            { q: "I'm sure he's tired. He worked all night.", a: ["He must be tired. He worked all night.", "He must be tired."] },
            { q: "Maybe she's at the gym.", a: ["She might be at the gym.", "She may be at the gym.", "She could be at the gym."] },
            { q: "I'm sure it isn't true. He never lies.", a: ["It can't be true. He never lies.", "It can't be true."] },
            { q: "Perhaps they don't know about the party.", a: ["They might not know about the party.", "They may not know about the party."] }
          ]
        },
        {
          type: "gap", title: "Who is it?",
          prompt: "Read the clues and complete with *must, might* or *can't*.",
          items: [
            "Someone is knocking. It [[can't]] be Rosa: she's in Cancún this week.",
            "It [[might|may|could]] be the delivery guy. I ordered a pizza an hour ago.",
            "Oh, I can hear a dog barking. It [[must]] be my neighbor. She always brings her dog.",
            "She [[must]] want her sugar back. I borrowed some yesterday!"
          ]
        },
        {
          type: "write", title: "A message to a stressed friend",
          prompt: "Your friend has seemed stressed lately: they look tired, they don't come to parties and they're always on their computer. Write a message (110–140 words). Say what you've noticed, guess what the problem might be (use *must, might, can't*) and offer support and advice.",
          minWords: 110, maxWords: 140,
          model: "Hi Lalo,<br>I hope you're OK. I've noticed you look really tired lately, and you didn't come to Sofi's party on Saturday. You must have a lot of work with your thesis. It can't be easy to finish it and work at the same time. Or maybe it's something else. You might be worried about your family, or you may just need a break. Anyway, I want you to know that I'm here for you. If you want to talk, I can come over and bring some tacos. Also, why don't we go for a walk on Sunday morning? A little fresh air might help. And remember, the university has free counseling. It could be a good idea to try it.<br>Take care of yourself!<br>Mariana",
          bank: ["I've noticed that…", "You must be…", "It can't be easy to…", "You might / may…", "I'm here for you.", "Why don't we…?", "It could be a good idea to…"],
          checklist: [
            "I used **must** for something I'm almost sure about.",
            "I used **might / may / could** for possibilities.",
            "I used **can't** for something I think isn't true.",
            "I offered **support** and advice."
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
            "Something must be wrong.",
            "He might be sick.",
            "It can't be the flu.",
            "He must be exhausted.",
            "It could be stress.",
            "You must feel overwhelmed."
          ]
        },
        {
          type: "speak", title: "What's going on?",
          prompt: "Look at these situations and speculate about each one for about two minutes in total: *1) Your neighbor's lights have been off for three days. 2) Your classmate is smiling all the time this week. 3) Your friend hasn't posted on social media for a month.* Use *must, might, may, could* and *can't*.",
          language: ["He / She must be…", "He / She might…", "It could be that…", "He / She can't be…", "Maybe…", "I'm almost sure that…"],
          seconds: 120,
          checklist: ["speculate about all three situations?", "use must, might and can't?", "give reasons for your deductions?", "use modal + be + -ing at least once?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about stress, its signs and how to cope.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can use *must* to show I'm almost sure.", review: "Explanation: modals of deduction" },
    { can: "I can use *might, may, could* for possibilities.", review: "Explanation: modals of deduction; Writing activity 1" },
    { can: "I can use *can't* (not *mustn't*) for impossibility.", review: "Explanation: modals of deduction note; Writing activity 2" },
    { can: "I can understand a conversation about stress.", review: "Listening activities 1 and 2" },
    { can: "I can speculate about situations and offer support.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
