window.UNIT = {
  slug: "i-wish",
  number: 27,
  title: "I Wish…",
  level: "B1",
  minutes: 60,
  speakers: { "Pamela": "f", "Alan": "m", "Host": "f", "Grandpa Luis": "m", "Teen": "f" },
  focus: ["wishes about the present", "wish + past simple", "wish + could", "If only…", "wish + would for annoying habits"],

  presentation: {
    scene: "🌠🙏💭✨",
    situation: "Pamela and Alan are stuck in traffic on the way to the university. They're both in a bad mood.",
    warmup: {
      prompt: "Which of these do you sometimes wish for? Choose all.",
      options: ["more free time", "a bigger house", "more money", "to speak more languages", "to live closer to school", "better weather", "more friends", "to be taller", "a car", "a pet", "to sleep more", "to travel more"],
      response: "We all have wishes! In this unit you'll learn to talk about things you'd like to be different."
    },
    dialogueTitle: "Stuck in traffic",
    dialogue: [
      { who: "Alan", line: "Ugh, this traffic is terrible. *I wish I had* a motorcycle." },
      { who: "Pamela", line: "*I wish we lived* closer to the university. We spend two hours a day on this bus!" },
      { who: "Alan", line: "*If only* the metro *came* to Puebla. It would be so much faster." },
      { who: "Pamela", line: "And *I wish* that man *would stop* playing his music so loud." },
      { who: "Alan", line: "Ha! *I wish I could* tell him, but he looks a bit scary." },
      { who: "Pamela", line: "Well, at least we have each other. *I wish* every journey *was* this fun!" },
      { who: "Alan", line: "Fun? *I wish I were* as positive as you." }
    ]
  },

  objectives: [
    "I can express wishes about the present situation.",
    "I can use *wish* + past simple and *wish* + *could*.",
    "I can use *If only…* for strong wishes.",
    "I can use *wish* + *would* to complain about other people's habits."
  ],

  explanation: {
    vocabTitle: "Wishes and regrets",
    vocab: [
      { word: "a wish", icon: "🌠" }, { word: "make a wish", icon: "🎂" }, { word: "a dream", icon: "💭" },
      { word: "frustrated", icon: "😤" }, { word: "envious", icon: "😒" }, { word: "fed up with", icon: "🙄" },
      { word: "if only", icon: "🙏" }, { word: "lucky", icon: "🍀" }, { word: "a genie", icon: "🧞" },
      { word: "three wishes", icon: "3️⃣" }, { word: "a shooting star", icon: "☄️" }, { word: "come true", icon: "✅" },
      { word: "imaginary", icon: "🦄" }, { word: "real life", icon: "🌍" }, { word: "be satisfied", icon: "😌" }
    ],
    grammar: [
      {
        title: "Wishes about the present",
        intro: "We use *wish* + past simple to say we want the present to be different. The past form shows it's not real.",
        head: ["Reality", "Wish", "Form"],
        rows: [
          ["I don't have a motorcycle.", "*I wish I had* a motorcycle.", "*wish* + past simple"],
          ["We live far from the university.", "*I wish we lived* closer.", "*wish* + past simple"],
          ["I'm not tall.", "*I wish I were* taller.", "*wish* + *were*"],
          ["I can't speak French.", "*I wish I could* speak French.", "*wish* + *could*"]
        ],
        note: "*If only* is a stronger, more emotional *I wish*: *If only I had more time!*"
      },
      {
        title: "Wish + would",
        intro: "Use *wish* + someone + *would* to complain about other people's actions or habits that you want to change.",
        head: ["Example", "Meaning"],
        rows: [
          ["*I wish* that man *would stop* playing music so loud.", "He's annoying me."],
          ["*I wish* my brother *would clean* his room.", "He never cleans it."],
          ["*I wish* it *would stop* raining.", "Things we can't control."]
        ],
        note: "Don't use *wish* + *would* about yourself: *I wish I would have…* is wrong. Say *I wish I had…*"
      }
    ],
    watchOut: [
      ["I wish I have more money.", "I wish I had more money."],
      ["I wish I can fly.", "I wish I could fly."],
      ["I wish I would be taller.", "I wish I were taller."],
      ["I wish you stop talking.", "I wish you would stop talking."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the wishes.",
      items: [
        "I don't know how to swim. → I wish I [[knew]] how to swim.",
        "I can't go to the concert. → I wish I [[could]] go to the concert.",
        "My neighbor's dog barks all night. → I wish it [[would]] stop barking.",
        "I'm not on vacation. → If only I [[were|was]] on vacation!"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio program where people of different ages talk about their wishes.",
      title: "Three generations, three wishes",
      script: [
        { who: "Host", line: "Today on Voices, we asked people of different ages: what do you wish for? Let's start with Grandpa Luis, who is seventy-eight." },
        { who: "Grandpa Luis", line: "I wish I could see my grandchildren more. They live in Monterrey and I only see them at Christmas. I also wish my knees were stronger, so I could go for long walks again." },
        { who: "Host", line: "And if you had one big wish?" },
        { who: "Grandpa Luis", line: "I wish people talked to each other more. Everybody is always looking at their phones. If only we could go back to sitting together after dinner." },
        { who: "Host", line: "Thank you. Now let's hear from a sixteen-year-old." },
        { who: "Teen", line: "Honestly, I wish I didn't have so much homework. I have no time for my hobbies. I play the guitar and I wish I were better at it." },
        { who: "Host", line: "Anything else?" },
        { who: "Teen", line: "I wish my parents would let me go to concerts alone. They always say I'm too young. And I wish adults would listen to young people more about climate change." },
        { who: "Host", line: "Interesting! Different ages, but some similar wishes: more time and more real connection." }
      ],
      activities: [
        {
          type: "sort", title: "Grandpa or teen?",
          prompt: "Listen. Who has each wish?",
          bins: ["Grandpa Luis (78)", "The teenager (16)"],
          items: [
            { text: "to see the grandchildren more", bin: 0 }, { text: "stronger knees", bin: 0 }, { text: "people talking more", bin: 0 }, { text: "sitting together after dinner", bin: 0 },
            { text: "less homework", bin: 1 }, { text: "to be better at the guitar", bin: 1 }, { text: "permission to go to concerts", bin: 1 }, { text: "adults listening about climate change", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Complete the wishes",
          prompt: "Listen again and complete with one word.",
          items: [
            "I wish I [[could]] see my grandchildren more.",
            "I wish my knees [[were]] stronger.",
            "I wish I [[didn't|did not]] have so much homework.",
            "I wish my parents [[would]] let me go to concerts alone."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short story.",
      title: "The genie in the bottle",
      text: [
        { body: "Mateo was walking on the beach in Puerto Escondido when he found an old blue bottle. He opened it, and a cloud of smoke came out. In front of him stood a genie. \"You have three wishes,\" the genie said. \"Choose carefully.\"" },
        { body: "Mateo didn't think twice. \"I wish I were rich!\" Suddenly, there were bags of gold all around him. \"I wish I had a beautiful house!\" A mansion appeared on the hill behind the beach." },
        { body: "But that night, Mateo couldn't sleep. His friends wanted to borrow money, strangers knocked on his door, and he was afraid of thieves. He sat alone in his huge house and thought, \"I wish I could go back to my old life. If only I hadn't been so greedy.\"" },
        { body: "He found the bottle and called the genie. \"For my last wish, I wish everything were the way it was before.\" The genie smiled. In a second, Mateo was back on the beach with his old surfboard, and he had never felt so happy." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "Mateo found the bottle in Puerto Escondido.", a: true },
            { s: "His first wish was to have a house.", a: false },
            { s: "Mateo slept very well in his mansion.", a: false },
            { s: "Strangers knocked on his door.", a: true },
            { s: "His last wish was to have more gold.", a: false },
            { s: "In the end, Mateo was happy with his old life.", a: true }
          ]
        },
        {
          type: "match", title: "Mateo's wishes",
          prompt: "Match each wish with what happened.",
          pairs: [
            ["\"I wish I were rich!\"", "Bags of gold appeared."],
            ["\"I wish I had a beautiful house!\"", "A mansion appeared on the hill."],
            ["\"I wish I could go back to my old life.\"", "He felt alone and afraid."],
            ["\"I wish everything were the way it was.\"", "He was back on the beach, happy."]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice wishes, then write your own.",
      activities: [
        {
          type: "rewrite", title: "Make a wish",
          prompt: "Write a wish for each situation. Start with *I wish…*",
          items: [
            { q: "I don't have a pet.", a: ["I wish I had a pet."] },
            { q: "I can't play the piano.", a: ["I wish I could play the piano."] },
            { q: "My roommate never washes the dishes.", a: ["I wish my roommate would wash the dishes."] },
            { q: "It's very cold today.", a: ["I wish it weren't so cold today.", "I wish it wasn't so cold today.", "I wish it were warmer today.", "I wish it was warmer today.", "I wish it weren't so cold.", "I wish it wasn't so cold."] },
            { q: "I live far from my family.", a: ["I wish I lived closer to my family.", "I wish I didn't live far from my family.", "I wish I didn't live so far from my family."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I wish I could speak Italian." },
            { a: "If only I had more time!" },
            { a: "I wish my brother would turn down the music." },
            { a: "I wish I were on a beach right now." }
          ]
        },
        {
          type: "write", title: "My three wishes",
          prompt: "A genie gives you three wishes, but they must be about your present life (not the past). Write a text (110–140 words) explaining your three wishes, why you want them, and one thing you wish other people would do or stop doing.",
          minWords: 110, maxWords: 140,
          model: "If a genie gave me three wishes, this is what I'd choose. First, I wish I could speak five languages perfectly. I love traveling, and I wish I could talk to people everywhere without a translator. Second, I wish I lived in a house with a garden. Right now I live in a small apartment, and I wish I had space for plants and a dog. Third, I wish my grandmother were healthier. She's been sick for a long time, and I wish she could enjoy life again. Finally, I wish people would stop throwing trash in the street. My city would be so beautiful if everyone took care of it. If only wishes came true!",
          bank: ["First, I wish I could…", "Second, I wish I lived / had…", "I wish… were…", "I wish people would stop…", "If only…!", "because…"],
          checklist: [
            "I wrote **three** wishes about the present.",
            "I used *wish* + **past simple** and *wish* + **could**.",
            "I used *wish* + **would** for other people's habits.",
            "I explained **why** I want each thing."
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
            "I wish I had a motorcycle.",
            "I wish we lived closer.",
            "I wish I could speak French.",
            "If only I had more time!",
            "I wish it would stop raining.",
            "I wish I were taller."
          ]
        },
        {
          type: "speak", title: "If only…",
          prompt: "Record yourself for one to two minutes. Talk about your wishes for different areas of your life: studies or work, home, family, skills and your city. Include at least one complaint with *I wish… would*.",
          language: ["I wish I had…", "I wish I could…", "I wish I were…", "I wish my… would…", "If only…", "It would be great because…"],
          seconds: 120,
          checklist: ["talk about at least four wishes?", "use wish + past simple?", "use wish + could?", "use wish + would for a complaint?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can express wishes about the present.", review: "Explanation: wishes about the present" },
    { can: "I can use *wish* + past simple and *were*.", review: "Explanation: wishes about the present; Writing activity 1" },
    { can: "I can use *wish* + *could* for abilities.", review: "Explanation: wishes about the present" },
    { can: "I can use *If only…* for strong wishes.", review: "Explanation: note; Reading" },
    { can: "I can use *wish* + *would* to complain about habits.", review: "Explanation: wish + would" },
    { can: "I can talk and write about my wishes.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
