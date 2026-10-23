window.UNIT = {
  slug: "how-do-you-feel",
  number: 3,
  title: "How Do You Feel?",
  level: "B1",
  minutes: 60,
  speakers: { "Camila": "f", "Rodrigo": "m", "Presenter": "m", "Elena": "f", "Hugo": "m" },
  focus: ["feelings and emotions", "-ed adjectives (how you feel) vs. -ing adjectives (what causes it)", "adjective + preposition: afraid of, good at, interested in…", "talking about emotional experiences", "showing empathy"],

  presentation: {
    scene: "😊😰😡😴",
    situation: "Camila just got her exam results and calls her brother Rodrigo. It's been an emotional week.",
    warmup: {
      prompt: "How have you felt this week? Choose all that are true.",
      options: ["excited", "tired", "relaxed", "stressed", "bored", "proud", "worried", "annoyed", "confused", "happy", "nervous", "disappointed"],
      response: "Thanks for sharing! In this unit you'll learn to describe your feelings more precisely."
    },
    dialogueTitle: "Exam results",
    dialogue: [
      { who: "Rodrigo", line: "Hey! So, did you get the results? You sound *excited*!" },
      { who: "Camila", line: "I passed statistics! I'm so *proud of* myself. The exam was really *confusing*, so I was *worried about* it." },
      { who: "Rodrigo", line: "Congratulations! You were so *stressed* last week." },
      { who: "Camila", line: "I know. I'm *terrible at* math, and that teacher is *frightening*!" },
      { who: "Rodrigo", line: "Ha! Well, now you can relax. Are you still *interested in* the trip to Veracruz?" },
      { who: "Camila", line: "Of course! I'm *tired of* studying. A weekend at the beach sounds *amazing*." },
      { who: "Rodrigo", line: "Great. Mom will be *pleased with* your results, too." }
    ]
  },

  objectives: [
    "I can describe feelings and emotions precisely.",
    "I can choose between *-ed* and *-ing* adjectives.",
    "I can use common adjectives with the correct preposition.",
    "I can talk about an emotional experience and react with empathy."
  ],

  explanation: {
    vocabTitle: "Feelings",
    vocab: [
      { word: "thrilled", icon: "🤩" }, { word: "relieved", icon: "😮‍💨" }, { word: "proud", icon: "🏅" },
      { word: "anxious", icon: "😰" }, { word: "annoyed", icon: "😒" }, { word: "furious", icon: "😡" },
      { word: "disappointed", icon: "😞" }, { word: "embarrassed", icon: "😳" }, { word: "confused", icon: "😕" },
      { word: "exhausted", icon: "🥱" }, { word: "grateful", icon: "🙏" }, { word: "jealous", icon: "😤" },
      { word: "lonely", icon: "🌧️" }, { word: "homesick", icon: "🏠" }, { word: "upset", icon: "😢" }
    ],
    grammar: [
      {
        title: "-ed or -ing?",
        head: ["Ending", "Meaning", "Example"],
        rows: [
          ["*-ed*", "how a person **feels**", "I was *bored* in the class."],
          ["*-ing*", "the thing or person that **causes** the feeling", "The class was *boring*."],
          ["*-ed*", "", "She's *interested* in art."],
          ["*-ing*", "", "Art is *interesting*."]
        ],
        note: "Be careful: *I'm boring* = people think I'm not interesting! *I'm bored* = I have nothing fun to do."
      },
      {
        title: "Adjective + preposition",
        head: ["Preposition", "Adjectives", "Example"],
        rows: [
          ["*of*", "*afraid, scared, proud, tired, jealous, fond*", "I'm *afraid of* spiders."],
          ["*about*", "*worried, excited, nervous, upset, angry (sth)*", "She's *nervous about* the interview."],
          ["*at*", "*good, bad, terrible, surprised*", "He's *good at* drawing."],
          ["*in*", "*interested*", "Are you *interested in* history?"],
          ["*with*", "*pleased, bored, angry (sb), happy*", "My boss is *pleased with* my work."]
        ],
        note: "After a preposition, use a noun or *-ing*: *I'm tired of studying.* (not *tired of study*)"
      }
    ],
    watchOut: [
      ["I'm very interesting in music.", "I'm very interested in music."],
      ["The movie was very bored.", "The movie was very boring."],
      ["She's afraid from dogs.", "She's afraid of dogs."],
      ["I'm good in cooking.", "I'm good at cooking."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct adjective ending or preposition.",
      items: [
        "The news was really shock[[ing]].",
        "I was so embarrass[[ed]] when I fell in class.",
        "Are you worried [[about]] the exam?",
        "My parents are proud [[of]] me."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a podcast episode, *Feelings Matter*. Two listeners talk about an emotional moment.",
      title: "Feelings Matter",
      script: [
        { who: "Presenter", line: "Welcome to Feelings Matter. Today's question is: what's the most embarrassing or most exciting moment of your year? Elena, you first." },
        { who: "Elena", line: "OK. Last month I gave a presentation in English at work. I was terrified. I'm not very good at speaking in public." },
        { who: "Presenter", line: "What happened?" },
        { who: "Elena", line: "In the middle of the presentation, my laptop turned off! It was so embarrassing. But my manager helped me, and I continued without slides. In the end, everybody said it was interesting. I was really relieved." },
        { who: "Presenter", line: "Wow. You should be proud of yourself. Hugo, what about you?" },
        { who: "Hugo", line: "My moment was exciting, not embarrassing. I'm a big fan of astronomy, and in April I saw the solar eclipse in Torreón. I was thrilled." },
        { who: "Presenter", line: "Was it worth the trip?" },
        { who: "Hugo", line: "Totally. The trip was exhausting: twelve hours by bus! But when the sky went dark, I almost cried. It was the most amazing experience of my life." },
        { who: "Presenter", line: "Thank you both. Remember, listeners: all feelings matter!" }
      ],
      activities: [
        {
          type: "sort", title: "Who felt it?",
          prompt: "Listen. Who had each feeling or experience?",
          bins: ["Elena", "Hugo"],
          items: [
            { text: "was terrified", bin: 0 }, { text: "isn't good at public speaking", bin: 0 }, { text: "felt embarrassed", bin: 0 }, { text: "was relieved in the end", bin: 0 },
            { text: "is a fan of astronomy", bin: 1 }, { text: "was thrilled", bin: 1 }, { text: "had an exhausting trip", bin: 1 }, { text: "almost cried", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word.",
          items: [
            "Elena's [[laptop]] turned off during the presentation.",
            "Her [[manager]] helped her.",
            "Hugo saw the eclipse in [[April]].",
            "The bus trip took [[twelve|12]] hours.",
            "It was the most [[amazing]] experience of his life."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short article from a well-being website.",
      title: "Name it to tame it",
      text: [
        { body: "Psychologists say that when we put our feelings into words, they become less powerful. They call this \"name it to tame it.\" Instead of saying \"I feel bad,\" try to find the exact word: are you *disappointed*, *lonely*, *anxious* or *exhausted*? Each feeling needs a different solution." },
        { body: "For example, if you're *exhausted*, you need rest, not a party. If you're *lonely*, a call to a friend can help. If you're *anxious about* an exam, making a study plan can make you feel more in control." },
        { body: "Many university students feel *homesick* in their first year, especially when they move to a new city. It's a normal feeling, and it usually gets better after a few months. Talking about it is the first step." },
        { body: "Finally, remember that positive feelings need names too. Are you *grateful*, *proud* or *relieved*? Noticing good emotions makes them last longer." }
      ],
      activities: [
        {
          type: "match", title: "Feeling and solution",
          prompt: "Match each feeling with the solution from the article.",
          pairs: [
            ["If you're exhausted,", "you need rest."],
            ["If you're lonely,", "call a friend."],
            ["If you're anxious about an exam,", "make a study plan."],
            ["If you're homesick,", "talk about it."],
            ["If you feel grateful or proud,", "notice it so it lasts longer."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Naming a feeling makes it more powerful.", a: false },
            { s: "\"I feel bad\" is a precise description.", a: false },
            { s: "Homesickness is common in the first year of university.", a: true },
            { s: "Homesickness usually lasts for many years.", a: false },
            { s: "The article says positive feelings also need names.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice adjectives and prepositions, then write about an emotional moment.",
      activities: [
        {
          type: "gap", title: "Which preposition?",
          prompt: "Complete with *of, about, at, in* or *with*.",
          bank: ["of", "about", "at", "in", "with", "of"],
          items: [
            "I'm really bad [[at]] remembering names.",
            "She's tired [[of]] waiting for the bus.",
            "We're excited [[about]] the concert.",
            "He isn't interested [[in]] football.",
            "The teacher was pleased [[with]] our project.",
            "My little brother is scared [[of]] the dark."
          ]
        },
        {
          type: "rewrite", title: "-ed or -ing?",
          prompt: "Rewrite the sentence using the word in parentheses.",
          items: [
            { q: "The movie bored me. (bored)", a: ["I was bored by the movie.", "I was bored with the movie.", "I was bored."] },
            { q: "The results surprised us. (surprising)", a: ["The results were surprising."] },
            { q: "The instructions confused me. (confusing)", a: ["The instructions were confusing."] },
            { q: "The trip exhausted them. (exhausted)", a: ["They were exhausted.", "They were exhausted after the trip."] }
          ]
        },
        {
          type: "write", title: "An emotional moment",
          prompt: "Write a blog post (100–140 words) about a moment when you felt a strong emotion (for example, very nervous, proud or embarrassed). Say what happened, how you felt at the beginning and at the end, and why. Use at least two *-ed / -ing* pairs and three adjective + preposition combinations.",
          minWords: 100, maxWords: 140,
          model: "Last year I sang in front of my whole university. I'm not very good at singing, but my friends were excited about the talent show and they convinced me to participate. Before the show, I was terrified. My hands were shaking and I felt sick. When I got on stage, the lights were blinding and the room was very quiet. It was frightening! But then I started to sing and people began to clap. At the end, everybody cheered. I was so relieved and proud of myself. It was one of the most exciting nights of my life, and now I'm not so afraid of speaking in public.",
          bank: ["I was terrified / thrilled", "It was frightening / exciting", "I'm not very good at", "I was proud of", "I was worried about", "In the end, I felt", "It was one of the most… moments"],
          checklist: [
            "I used at least two **-ed / -ing** adjective pairs.",
            "I used **three** adjectives with prepositions.",
            "I described my feelings at the **beginning** and at the **end**.",
            "I explained **why** I felt that way."
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
            "I'm so proud of myself.",
            "The exam was really confusing.",
            "I'm tired of studying.",
            "She's nervous about the interview.",
            "It was so embarrassing!",
            "I was really relieved."
          ]
        },
        {
          type: "speak", title: "My emotional rollercoaster",
          prompt: "Record yourself for one to two minutes. Talk about three moments from this year: one exciting, one stressful and one embarrassing or funny. Say how you felt and why.",
          language: ["I was thrilled when…", "It was really stressful because…", "I felt so embarrassed!", "I'm not very good at…", "In the end, I was relieved.", "I'm proud of…"],
          seconds: 120,
          checklist: ["describe three different moments?", "use -ed and -ing adjectives correctly?", "use adjectives with prepositions?", "explain why you felt that way?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe my feelings with precise words.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can choose between *-ed* and *-ing* adjectives.", review: "Explanation: -ed or -ing; Writing activity 2" },
    { can: "I can use adjectives with the correct preposition.", review: "Explanation: adjective + preposition; Writing activity 1" },
    { can: "I can understand people describing an emotional experience.", review: "Listening activities 1 and 2" },
    { can: "I can understand advice about emotions in an article.", review: "Reading activities 1 and 2" },
    { can: "I can talk and write about an emotional moment.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
