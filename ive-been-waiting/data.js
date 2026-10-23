window.UNIT = {
  slug: "ive-been-waiting",
  number: 8,
  title: "I've Been Waiting for Ages!",
  level: "B1",
  minutes: 60,
  speakers: { "Andrea": "f", "Luis": "m", "Reporter": "f", "Mrs. Torres": "f", "Kevin": "m" },
  focus: ["present perfect continuous: have been + -ing", "how long…? for / since", "activities that explain present results", "present perfect simple vs. continuous", "complaining about waiting"],

  presentation: {
    scene: "⏳☕📱😤",
    situation: "Andrea is sitting in a café. Her friend Luis arrives forty minutes late.",
    warmup: {
      prompt: "How long have you been doing these things? Choose the ones you've been doing for more than a year.",
      options: ["studying English", "living in my home", "using my phone", "studying at university", "working", "playing a sport", "learning to cook", "watching a series", "following an artist", "saving money"],
      response: "Interesting! In this unit you'll learn to talk about actions that started in the past and continue now."
    },
    dialogueTitle: "Sorry I'm late!",
    dialogue: [
      { who: "Andrea", line: "Luis! Finally! *I've been waiting* for forty minutes!" },
      { who: "Luis", line: "I'm so sorry. *I've been running* all the way from the metro. Look, I'm all sweaty." },
      { who: "Andrea", line: "Why didn't you answer my messages? *I've been calling* you since six." },
      { who: "Luis", line: "My phone died. *I've been using* it all day for my project, and the battery is old." },
      { who: "Andrea", line: "You always say that! How long *have* you *been having* problems with that phone?" },
      { who: "Luis", line: "Since January. OK, OK, I'll buy a new one. Let me buy you a coffee." },
      { who: "Andrea", line: "*I've already had* two coffees while I was waiting! But you can buy me a cake." }
    ]
  },

  objectives: [
    "I can use the present perfect continuous for activities that continue to now.",
    "I can ask and answer *How long have you been…?*",
    "I can explain present results with recent activities.",
    "I can choose between the present perfect simple and continuous."
  ],

  explanation: {
    vocabTitle: "Long activities",
    vocab: [
      { word: "wait for ages", icon: "⏳" }, { word: "queue / line up", icon: "🧍‍♂️" }, { word: "practice", icon: "🎸" },
      { word: "train", icon: "🏋️" }, { word: "save up", icon: "🐷" }, { word: "look for", icon: "🔍" },
      { word: "work on", icon: "🛠️" }, { word: "rain", icon: "🌧️" }, { word: "sweaty", icon: "💦" },
      { word: "out of breath", icon: "😮‍💨" }, { word: "worn out", icon: "🥱" }, { word: "lately", icon: "🗓️" },
      { word: "recently", icon: "🆕" }, { word: "all day", icon: "🌞" }, { word: "non-stop", icon: "🔁" }
    ],
    grammar: [
      {
        title: "Present perfect continuous: form",
        head: ["", "Example"],
        rows: [
          ["positive", "I've / You've / They've *been waiting*. She's / He's *been working*."],
          ["negative", "I *haven't been sleeping* well lately."],
          ["question", "How long *have* you *been studying* English?"],
          ["short answers", "*Have* you *been running*? – Yes, I *have*. / No, I *haven't*."]
        ]
      },
      {
        title: "Two uses",
        head: ["Use", "Example"],
        rows: [
          ["an activity that started in the past and **continues now** (with *for / since / how long*)", "I've *been waiting* **for** forty minutes. / She's *been living* here **since** 2021."],
          ["a recent activity that **explains a present result**", "I'm sweaty because I've *been running*. / Your eyes are red. Have you *been crying*?"]
        ]
      },
      {
        title: "Simple or continuous?",
        head: ["Present perfect continuous: the activity / how long", "Present perfect simple: the result / how many"],
        rows: [
          ["I've *been reading* this book all week.", "I've *read* 200 pages. / I've *finished* it."],
          ["She's *been calling* you since six.", "She's *called* you five times."],
          ["(not with stative verbs)", "I've *known* him for years. (not *been knowing*)"]
        ]
      }
    ],
    watchOut: [
      ["I'm waiting here since six.", "I've been waiting here since six."],
      ["I've been knowing her for ten years.", "I've known her for ten years."],
      ["I've been drinking three coffees today.", "I've drunk three coffees today."],
      ["How long are you studying English?", "How long have you been studying English?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present perfect continuous or simple.",
      items: [
        "It [[has been raining|'s been raining]] all morning. (rain)",
        "I [[have written|'ve written]] three emails so far. (write)",
        "How long [[have]] you [[been learning]] to drive? (learn)",
        "She's tired because she [[has been working|'s been working]] all night. (work)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a news report from a long line outside a concert ticket office.",
      title: "The longest line in town",
      script: [
        { who: "Reporter", line: "Good morning. I'm outside the Auditorio Metropolitano, where hundreds of fans have been waiting for tickets to tomorrow's concert. Let's talk to some of them. Hello, how long have you been waiting?" },
        { who: "Mrs. Torres", line: "Since four o'clock yesterday afternoon! I've been sitting on this little chair all night. My back hurts." },
        { who: "Reporter", line: "That's incredible. Who are you buying tickets for?" },
        { who: "Mrs. Torres", line: "For my daughter. She's been saving up for months, but she has exams today, so I came for her." },
        { who: "Reporter", line: "What a great mom! And you, young man?" },
        { who: "Kevin", line: "I've been here since midnight. I've been listening to the band's songs on my phone to stay awake. I've listened to their new album four times!" },
        { who: "Reporter", line: "Have you ever seen them live?" },
        { who: "Kevin", line: "Yes, I've seen them three times. I've been following them since I was fifteen." },
        { who: "Reporter", line: "The ticket office opens in ten minutes. Good luck, everybody! Back to the studio." }
      ],
      activities: [
        {
          type: "match", title: "Who said it?",
          prompt: "Match the beginnings and endings.",
          pairs: [
            ["Mrs. Torres has been waiting", "since four o'clock yesterday."],
            ["She has been sitting", "on a little chair all night."],
            ["Her daughter has been saving up", "for months."],
            ["Kevin has been listening", "to the band's songs to stay awake."],
            ["He has been following the band", "since he was fifteen."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The concert is today.", a: false },
            { s: "Mrs. Torres is buying tickets for herself.", a: false },
            { s: "Kevin has been waiting since midnight.", a: true },
            { s: "Kevin has listened to the new album four times.", a: true },
            { s: "Kevin has never seen the band live.", a: false },
            { s: "The ticket office opens in ten minutes.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three posts from a language-learning forum.",
      title: "How long have you been learning?",
      text: [
        { author: "Mariel, 24", body: "I've been learning English for six years, but I've only been speaking it confidently for one. What changed? I've been talking to a language partner from Canada every Tuesday since last year. We've had more than fifty conversations!" },
        { author: "Joel, 20", body: "I've been watching series in English with English subtitles since January. At first I understood nothing. Now I can follow most episodes. I've finished three complete series this year." },
        { author: "Renata, 31", body: "I haven't been studying much lately because I've been working long hours. But I've been listening to podcasts on the bus every day. It's only twenty minutes, but I've learned so many new expressions." }
      ],
      activities: [
        {
          type: "sort", title: "Activity or result?",
          prompt: "Is each sentence about the activity (continuous) or a result / number (simple)?",
          bins: ["Activity (been + -ing)", "Result / number"],
          items: [
            { text: "Mariel has been learning English for six years.", bin: 0 }, { text: "Joel has been watching series since January.", bin: 0 }, { text: "Renata has been working long hours.", bin: 0 }, { text: "Renata has been listening to podcasts.", bin: 0 },
            { text: "Mariel has had more than fifty conversations.", bin: 1 }, { text: "Joel has finished three series.", bin: 1 }, { text: "Renata has learned many new expressions.", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Write the question",
          prompt: "Write the *How long…?* question for each answer.",
          items: [
            { q: "Mariel: For six years. (learn English)", a: ["How long have you been learning English?"] },
            { q: "Joel: Since January. (watch series in English)", a: ["How long have you been watching series in English?"] },
            { q: "Renata: Since last month. (work long hours)", a: ["How long have you been working long hours?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the two tenses, then write about what you've been doing lately.",
      activities: [
        {
          type: "gap", title: "Explain the result",
          prompt: "Complete with the present perfect continuous of a verb from the box.",
          bank: ["cry", "cook", "run", "paint", "study", "swim"],
          items: [
            "Your hair is wet. Have you [[been swimming]]?",
            "The kitchen smells amazing! I [[have been cooking|'ve been cooking]] all afternoon.",
            "Why are your eyes red? Have you [[been crying]]?",
            "My hands are blue because I [[have been painting|'ve been painting]] my room.",
            "He's out of breath. He [[has been running|'s been running]].",
            "I'm worn out. I [[have been studying|'ve been studying]] since seven."
          ]
        },
        {
          type: "rewrite", title: "Correct the mistake",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I'm living in Puebla since 2020.", a: ["I've been living in Puebla since 2020.", "I have been living in Puebla since 2020.", "I've lived in Puebla since 2020."] },
            { q: "She's been knowing him for years.", a: ["She's known him for years.", "She has known him for years."] },
            { q: "We've been visiting four museums today.", a: ["We've visited four museums today.", "We have visited four museums today."] },
            { q: "How long do you wait?", a: ["How long have you been waiting?"] }
          ]
        },
        {
          type: "write", title: "What I've been doing lately",
          prompt: "Write an email to a friend you haven't seen for a long time (110–140 words). Tell them what you've been doing lately (studies, work, hobbies, plans). Use the present perfect continuous at least four times and the present perfect simple at least twice.",
          minWords: 110, maxWords: 140,
          model: "Hi Carla!<br>Sorry I haven't written for so long. I've been working really hard lately. I started a part-time job at a bookstore in March, so I've been studying in the mornings and working in the afternoons. It's tiring, but I love it. I've already read ten new books this year!<br>I've also been learning to play the guitar. My cousin has been teaching me every Sunday, and I've learned five songs so far. My fingers hurt, though!<br>And guess what? I've been saving up for a trip to Oaxaca in December. Have you ever been there? Maybe you can come with me!<br>What have you been doing? Write soon!<br>Hugs,<br>Sofía",
          bank: ["I've been working / studying…", "lately", "since…", "for…", "I've already…", "so far", "What have you been doing?"],
          checklist: [
            "I used the **present perfect continuous** at least four times.",
            "I used the **present perfect simple** for results or numbers.",
            "I used *for, since, lately* or *recently*.",
            "I didn't use stative verbs in the continuous."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the weak form of *been* (/bɪn/).",
          items: [
            "I've been waiting for forty minutes.",
            "I've been running all the way.",
            "How long have you been studying English?",
            "She's been living here since January.",
            "Have you been crying?",
            "I haven't been sleeping well lately."
          ]
        },
        {
          type: "speak", title: "My life right now",
          prompt: "Record yourself for one to two minutes. Talk about three activities you've been doing lately (studying, a hobby, a series, a sport…). Say how long you've been doing them and what results you've had so far.",
          language: ["Lately, I've been…", "I've been… for / since…", "So far, I've…", "I've already…", "That's why I'm…", "I haven't been… because…"],
          seconds: 120,
          checklist: ["talk about three activities?", "say how long with for or since?", "mention a result with the present perfect simple?", "use the weak form of been?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the present perfect continuous.", review: "Explanation: form" },
    { can: "I can say how long an activity has been happening.", review: "Explanation: two uses; Reading activity 2" },
    { can: "I can explain a present result with a recent activity.", review: "Writing activity 1" },
    { can: "I can choose between the present perfect simple and continuous.", review: "Explanation: simple or continuous; Reading activity 1" },
    { can: "I can understand people in a short news report.", review: "Listening activities 1 and 2" },
    { can: "I can write and talk about what I've been doing lately.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
