window.UNIT = {
  slug: "mind-over-matter",
  number: 25,
  title: "Mind Over Matter",
  level: "B1",
  minutes: 60,
  speakers: { "Coach": "f", "Brandon": "m", "Presenter": "m", "Dr. Silva": "f" },
  focus: ["mind-body connection vocabulary", "cause: because, because of, due to, since, as", "result: so, therefore, as a result, that's why", "linking ideas in a paragraph", "explaining causes and effects"],

  presentation: {
    scene: "🧠💪🏃📈",
    situation: "Brandon is a university runner. He lost an important race and is talking to his coach about what happened.",
    warmup: {
      prompt: "Which of these can affect your performance in an exam or a sport? Choose all.",
      options: ["nerves", "lack of sleep", "positive thinking", "breakfast", "music", "pressure from family", "confidence", "practice", "the weather", "your friends", "fear of failure", "visualization"],
      response: "Your mind is powerful! In this unit you'll learn to explain causes and results."
    },
    dialogueTitle: "After the race",
    dialogue: [
      { who: "Coach", line: "Brandon, what happened today? You were the favorite." },
      { who: "Brandon", line: "I don't know. I couldn't breathe well *because* I was so nervous." },
      { who: "Coach", line: "Nerves are normal. But you stopped believing in yourself after the first lap. *That's why* you slowed down." },
      { who: "Brandon", line: "Maybe. I didn't sleep *because of* the pressure. My whole family came to watch." },
      { who: "Coach", line: "I understand. *Since* this is your first big race, you didn't know how to manage it. *As a result*, your body reacted to your fear." },
      { who: "Brandon", line: "So what can I do?" },
      { who: "Coach", line: "We'll train your mind as well as your legs. Athletes who visualize success perform better. *Therefore*, from tomorrow, ten minutes of visualization before every training!" }
    ]
  },

  objectives: [
    "I can talk about the connection between the mind and the body.",
    "I can express causes with *because, because of, due to, since* and *as*.",
    "I can express results with *so, therefore, as a result* and *that's why*.",
    "I can write a paragraph explaining causes and effects."
  ],

  explanation: {
    vocabTitle: "Mind and body",
    vocab: [
      { word: "performance", icon: "🏅" }, { word: "confidence", icon: "😎" }, { word: "self-doubt", icon: "🤔" },
      { word: "motivation", icon: "🔥" }, { word: "visualize", icon: "👁️" }, { word: "the placebo effect", icon: "💊" },
      { word: "a mindset", icon: "🧠" }, { word: "resilience", icon: "🌱" }, { word: "pressure", icon: "🗜️" },
      { word: "adrenaline", icon: "⚡" }, { word: "heart rate", icon: "💓" }, { word: "focus", icon: "🎯" },
      { word: "a setback", icon: "↩️" }, { word: "bounce back", icon: "🏀" }, { word: "overcome", icon: "⛰️" }
    ],
    grammar: [
      {
        title: "Cause",
        head: ["Linker", "Followed by", "Example"],
        rows: [
          ["*because / since / as*", "subject + verb", "I couldn't breathe *because* I was nervous. / *Since* it was his first race, he panicked."],
          ["*because of / due to*", "noun or noun phrase", "I didn't sleep *because of* the pressure. / The race was delayed *due to* the rain."],
          ["*owing to*", "noun (formal)", "*Owing to* an injury, she withdrew."]
        ],
        note: "*Since* and *as* often go at the start of the sentence. *Due to* is more formal than *because of*."
      },
      {
        title: "Result",
        head: ["Linker", "Position", "Example"],
        rows: [
          ["*so*", "joins two clauses (with a comma)", "I was nervous, *so* I couldn't breathe well."],
          ["*therefore*", "new sentence or after a semicolon (formal)", "Athletes who visualize perform better. *Therefore*, we'll practice it."],
          ["*as a result*", "start of a new sentence", "He was afraid. *As a result*, his body reacted."],
          ["*that's why*", "start of a sentence (informal)", "You stopped believing. *That's why* you slowed down."]
        ]
      }
    ],
    watchOut: [
      ["I didn't sleep because the pressure.", "I didn't sleep because of the pressure."],
      ["Due to it was raining, we stayed home.", "Because it was raining, we stayed home. / Due to the rain,…"],
      ["I was tired, therefore, I went to bed.", "I was tired. Therefore, I went to bed."],
      ["Because of I was sick, I missed the class.", "Because I was sick, I missed the class."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *because, because of, so* or *as a result*.",
      items: [
        "The match was canceled [[because of|due to]] the storm.",
        "She trained every day, [[so]] she won the race.",
        "I was late [[because|since|as]] the bus didn't come.",
        "He didn't eat breakfast. [[As a result|Therefore]], he felt dizzy."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a science podcast about the placebo effect.",
      title: "The power of belief",
      script: [
        { who: "Presenter", line: "Welcome to Brain Matters. Today: the placebo effect. Dr. Silva, what is it exactly?" },
        { who: "Dr. Silva", line: "A placebo is a treatment with no medical effect, like a sugar pill. But some patients feel better after taking it simply because they believe it will help them." },
        { who: "Presenter", line: "How is that possible?" },
        { who: "Dr. Silva", line: "When we expect to feel better, the brain releases natural chemicals that reduce pain. As a result, the patient really feels less pain. It isn't imaginary." },
        { who: "Presenter", line: "Does it work for everything?" },
        { who: "Dr. Silva", line: "No. It works best for pain, nausea and stress, but it can't cure serious diseases. Therefore, it's never a replacement for real treatment." },
        { who: "Presenter", line: "Is there anything else surprising?" },
        { who: "Dr. Silva", line: "Yes! Expensive placebos work better than cheap ones, and two pills work better than one. Even the color matters: blue pills often help people relax, due to the calm associations of the color." },
        { who: "Presenter", line: "Amazing. So our expectations really change our bodies." },
        { who: "Dr. Silva", line: "Exactly. That's why doctors say a positive attitude is part of healing." }
      ],
      activities: [
        {
          type: "match", title: "Cause and result",
          prompt: "Match each cause with its result.",
          pairs: [
            ["Patients believe the pill will help,", "so some feel better."],
            ["The brain releases natural chemicals.", "As a result, the patient feels less pain."],
            ["Placebos can't cure serious diseases.", "Therefore, they don't replace real treatment."],
            ["Blue has calm associations.", "That's why blue pills help people relax."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "A placebo has a strong medical effect.", a: false },
            { s: "The pain reduction from a placebo is imaginary.", a: false },
            { s: "Placebos work well for pain and stress.", a: true },
            { s: "Cheap placebos work better than expensive ones.", a: false },
            { s: "Two pills work better than one.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the psychology of success.",
      title: "Fixed or growth mindset?",
      text: [
        { body: "Psychologist Carol Dweck spent decades studying why some people succeed and others give up. Her conclusion: it often depends on their *mindset*." },
        { body: "People with a **fixed mindset** believe that intelligence and talent can't change. Because of this belief, they avoid challenges, since failing would \"prove\" that they're not smart. As a result, they often stop learning." },
        { body: "People with a **growth mindset** believe that abilities can develop with effort. Therefore, they see mistakes as opportunities. When they fail an exam, they think, \"I need a better strategy,\" not \"I'm stupid.\"" },
        { body: "The good news is that mindsets can change. In one study, students who learned that the brain grows like a muscle got better grades in math, due to their new attitude. So next time you say \"I'm bad at English,\" try adding one small word: \"I'm bad at English… *yet*.\"" }
      ],
      activities: [
        {
          type: "sort", title: "Fixed or growth?",
          prompt: "Which mindset does each sentence describe?",
          bins: ["Fixed mindset 🧱", "Growth mindset 🌱"],
          items: [
            { text: "Talent can't change.", bin: 0 }, { text: "They avoid challenges.", bin: 0 }, { text: "\"I'm stupid.\"", bin: 0 }, { text: "They often stop learning.", bin: 0 },
            { text: "Abilities develop with effort.", bin: 1 }, { text: "Mistakes are opportunities.", bin: 1 }, { text: "\"I need a better strategy.\"", bin: 1 }, { text: "\"I'm bad at English… yet.\"", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Change the linker",
          prompt: "Rewrite each sentence with the linker in parentheses.",
          items: [
            { q: "They believe talent can't change, so they avoid challenges. (because)", a: ["They avoid challenges because they believe talent can't change.", "Because they believe talent can't change, they avoid challenges."] },
            { q: "They got better grades because of their new attitude. (due to)", a: ["They got better grades due to their new attitude."] },
            { q: "They see mistakes as opportunities, so they keep learning. (as a result)", a: ["They see mistakes as opportunities. As a result, they keep learning."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice cause and result linkers, then write a cause-and-effect paragraph.",
      activities: [
        {
          type: "sort", title: "Cause or result?",
          prompt: "Which linkers introduce a cause and which introduce a result?",
          bins: ["Cause ⬅️", "Result ➡️"],
          items: [
            { text: "because", bin: 0 }, { text: "because of", bin: 0 }, { text: "due to", bin: 0 }, { text: "since", bin: 0 }, { text: "owing to", bin: 0 },
            { text: "so", bin: 1 }, { text: "therefore", bin: 1 }, { text: "as a result", bin: 1 }, { text: "that's why", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "The flight was delayed because the fog.", a: ["The flight was delayed because of the fog.", "The flight was delayed due to the fog."] },
            { q: "Due to she was sick, she stayed home.", a: ["Because she was sick, she stayed home.", "Since she was sick, she stayed home.", "As she was sick, she stayed home."] },
            { q: "I practiced a lot, therefore I passed.", a: ["I practiced a lot. Therefore, I passed.", "I practiced a lot; therefore, I passed.", "I practiced a lot, so I passed."] },
            { q: "Because of I was tired, I went to bed.", a: ["Because I was tired, I went to bed."] }
          ]
        },
        {
          type: "write", title: "Causes and effects",
          prompt: "Write a paragraph (120–150 words) about a time when your mind affected your performance (positively or negatively): an exam, a game, a presentation, an interview… Explain the causes and the results using at least six different linkers.",
          minWords: 120, maxWords: 150,
          model: "Last semester I had to give a presentation in English in front of thirty classmates. I was terrified because I had never spoken in public in another language. The night before, I couldn't sleep due to my nerves, so I was very tired the next morning. Since I was so nervous, I started speaking very fast, and I forgot two important points. As a result, my presentation was much shorter than expected. However, I learned from the experience. For the next presentation, I practiced in front of my family three times and I visualized myself speaking calmly. Therefore, I felt much more confident. Because of this preparation, I spoke slowly and clearly, and I even made a joke. That's why I now believe that the mind can make a big difference.",
          bank: ["because", "because of / due to", "since / as", "so", "As a result,", "Therefore,", "That's why…"],
          checklist: [
            "I used at least **six** different linkers.",
            "I used **because of / due to** + noun.",
            "I used **therefore / as a result** at the start of a sentence.",
            "I explained both **causes** and **results**."
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
            "I didn't sleep because of the pressure.",
            "That's why you slowed down.",
            "As a result, the patient feels better.",
            "Since it was his first race, he panicked.",
            "The race was delayed due to the rain.",
            "Therefore, we'll practice every day."
          ]
        },
        {
          type: "speak", title: "Explain it!",
          prompt: "Choose one topic: *Why do some students fail exams even when they study?* or *Why do some athletes win and others lose?* Record yourself for one to two minutes explaining causes and results. Use at least five different linkers.",
          language: ["One reason is that…", "because / because of…", "due to…", "As a result,…", "Therefore,…", "That's why…"],
          seconds: 120,
          checklist: ["explain at least three causes?", "use cause and result linkers?", "use because of / due to + noun?", "give a clear conclusion?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about the mind-body connection.", review: "Explanation: the vocabulary cards; Listening" },
    { can: "I can use *because, since, as* + clause.", review: "Explanation: cause" },
    { can: "I can use *because of / due to* + noun.", review: "Explanation: cause; Writing activity 2" },
    { can: "I can use *so, therefore, as a result, that's why*.", review: "Explanation: result" },
    { can: "I can understand texts that explain causes and effects.", review: "Listening and Reading activities" },
    { can: "I can explain causes and results in writing and speaking.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
