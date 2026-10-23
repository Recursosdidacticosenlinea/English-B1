window.UNIT = {
  slug: "working-from-home",
  number: 14,
  title: "Working From Home",
  level: "B1",
  minutes: 60,
  speakers: { "Patricia": "f", "Eduardo": "m", "Host": "m", "Lorena": "f", "Hiroshi": "m" },
  focus: ["remote work and online study vocabulary", "be used to + -ing / noun (a habit)", "get used to + -ing / noun (a process)", "used to vs. be used to", "adapting to changes"],

  presentation: {
    scene: "🏠💻🐶☕",
    situation: "Patricia started working from home three months ago. She's on a video call with her friend Eduardo, who still works in an office.",
    warmup: {
      prompt: "What's difficult about working or studying from home? Choose all.",
      options: ["noise", "distractions", "loneliness", "a bad internet connection", "no fixed schedule", "too much screen time", "family interruptions", "no colleagues to ask", "working too many hours", "sitting all day"],
      response: "True! In this unit you'll learn to talk about adapting to new situations."
    },
    dialogueTitle: "Three months at home",
    dialogue: [
      { who: "Eduardo", line: "So, how's life working from home?" },
      { who: "Patricia", line: "Good, but it was hard at first. I *wasn't used to being* alone all day." },
      { who: "Eduardo", line: "I can imagine. You *used to* talk to everybody in the office!" },
      { who: "Patricia", line: "Exactly. And my dog barks every time someone passes the house. I'm *getting used to* it, slowly." },
      { who: "Eduardo", line: "What about the schedule?" },
      { who: "Patricia", line: "That was the biggest change. Now I start at seven. I'm *not used to getting up* so early, but I finish at three." },
      { who: "Eduardo", line: "Lucky you! I *am used to* the traffic, but I'll never *get used to* spending two hours on the bus." }
    ]
  },

  objectives: [
    "I can talk about remote work and online study.",
    "I can use *be used to* for things that are familiar or normal.",
    "I can use *get used to* to describe the process of adapting.",
    "I can tell the difference between *used to*, *be used to* and *get used to*."
  ],

  explanation: {
    vocabTitle: "Working remotely",
    vocab: [
      { word: "remote work", icon: "🌐" }, { word: "home office", icon: "🏠" }, { word: "commute", icon: "🚌" },
      { word: "video call", icon: "📹" }, { word: "mute / unmute", icon: "🔇" }, { word: "screen time", icon: "🖥️" },
      { word: "a distraction", icon: "📺" }, { word: "self-discipline", icon: "🎯" }, { word: "work-life balance", icon: "⚖️" },
      { word: "a routine", icon: "🔁" }, { word: "isolated", icon: "🏝️" }, { word: "productive", icon: "📈" },
      { word: "a time zone", icon: "🌍" }, { word: "log on / log off", icon: "🔌" }, { word: "hybrid", icon: "🔀" }
    ],
    grammar: [
      {
        title: "Be used to and get used to",
        head: ["Form", "Meaning", "Example"],
        rows: [
          ["*be used to* + noun / -ing", "it's normal for me; I'm familiar with it", "I'*m used to* the traffic. / I'*m not used to getting* up early."],
          ["*get used to* + noun / -ing", "the process of becoming familiar", "I'm *getting used to* the noise. / You'll *get used to working* alone."]
        ],
        note: "*To* is a preposition here, so use a noun or *-ing*: *I'm used to working*, not *I'm used to work*."
      },
      {
        title: "Three different structures",
        head: ["Structure", "Meaning", "Example"],
        rows: [
          ["*used to* + base verb", "a past habit (not now)", "I *used to work* in an office."],
          ["*be used to* + -ing", "a current familiar situation", "I*'m used to working* at home now."],
          ["*get used to* + -ing", "adapting (in any tense)", "It took me months to *get used to working* at home."]
        ],
        note: "*Be* and *get* can change tense: *I wasn't used to…, I'll get used to…, I've got used to…*"
      }
    ],
    watchOut: [
      ["I'm used to wake up early.", "I'm used to waking up early."],
      ["I am use to the noise.", "I am used to the noise."],
      ["I used to working at home. (now)", "I'm used to working at home."],
      ["She can't get used to live alone.", "She can't get used to living alone."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of *be used to* or *get used to*.",
      items: [
        "I've lived here for years, so I [[am used to|'m used to]] the cold.",
        "It's my first week. I'm still [[getting used to]] the new system.",
        "She [[wasn't used to|was not used to]] speaking English at work, but now it's easy.",
        "Don't worry. You'll [[get used to]] it soon."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a podcast about people who changed the way they work.",
      title: "New ways of working",
      script: [
        { who: "Host", line: "Welcome to Future of Work. Today we have two guests who changed their work life completely. Lorena, you moved from Mexico City to a small town in Oaxaca, right?" },
        { who: "Lorena", line: "Yes. I'm a graphic designer and my company let me work remotely. I used to spend three hours a day commuting. Now my office is a terrace with a view of the mountains." },
        { who: "Host", line: "That sounds perfect. Was it easy?" },
        { who: "Lorena", line: "Not at first. I wasn't used to the slow internet, and I had to get used to living without supermarkets nearby. But after six months, I can't imagine going back." },
        { who: "Host", line: "Hiroshi, your story is the opposite." },
        { who: "Hiroshi", line: "Right. I'm from Japan, and I worked from home for four years. Last year I joined a company in Guadalajara where everyone works in the office." },
        { who: "Host", line: "How was that change?" },
        { who: "Hiroshi", line: "Strange! I was used to wearing comfortable clothes and working in silence. Now I have to dress formally and there's a lot of noise. But I'm getting used to it, and honestly, I'm less lonely now." }
      ],
      activities: [
        {
          type: "sort", title: "Lorena or Hiroshi?",
          prompt: "Listen. Who does each sentence describe?",
          bins: ["Lorena", "Hiroshi"],
          items: [
            { text: "used to commute three hours a day", bin: 0 }, { text: "wasn't used to slow internet", bin: 0 }, { text: "works on a terrace", bin: 0 }, { text: "got used to living without supermarkets", bin: 0 },
            { text: "worked from home for four years", bin: 1 }, { text: "was used to working in silence", bin: 1 }, { text: "has to dress formally now", bin: 1 }, { text: "is less lonely now", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Lorena is a graphic designer.", a: true },
            { s: "Lorena wants to go back to Mexico City.", a: false },
            { s: "Hiroshi now works in Guadalajara.", a: true },
            { s: "Hiroshi's new office is very quiet.", a: false },
            { s: "Hiroshi is getting used to the change.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an online guide for students who are starting online classes.",
      title: "Surviving your first online semester",
      text: [
        { body: "Many students are used to having classes in a classroom, with a teacher who checks their progress every day. Online learning is different: you need a lot of self-discipline. Here's how to get used to it faster." },
        { body: "**Create a routine.** Get up at the same time every day and get dressed, even if nobody can see you. It may seem silly, but your brain will get used to \"going to school\" at home." },
        { body: "**Have a study space.** Don't study in bed. If you're used to relaxing there, you'll feel sleepy. A small table near a window is enough." },
        { body: "**Turn on your camera.** It's tempting to keep it off, but students who participate on camera feel less isolated and remember more. You'll soon get used to seeing your own face on the screen!" },
        { body: "**Take breaks.** Ten minutes every hour helps your eyes and your back. Remember: you're not used to sitting in front of a screen for eight hours, and you shouldn't be!" }
      ],
      activities: [
        {
          type: "match", title: "Tip and reason",
          prompt: "Match each tip with its reason.",
          pairs: [
            ["Get dressed every day", "so your brain gets used to \"going to school\"."],
            ["Don't study in bed", "because you'll feel sleepy."],
            ["Turn on your camera", "so you feel less isolated."],
            ["Take breaks every hour", "to help your eyes and your back."]
          ]
        },
        {
          type: "rewrite", title: "Used to, be used to or get used to?",
          prompt: "Rewrite the sentences with the words in parentheses.",
          items: [
            { q: "Having classes in a classroom is normal for me. (I'm used to)", a: ["I'm used to having classes in a classroom.", "I am used to having classes in a classroom."] },
            { q: "Seeing my face on the screen is becoming normal for me. (I'm getting used to)", a: ["I'm getting used to seeing my face on the screen.", "I am getting used to seeing my face on the screen."] },
            { q: "In the past, I studied in bed. (I used to)", a: ["I used to study in bed."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the three structures, then write about adapting to a change.",
      activities: [
        {
          type: "gap", title: "Choose the structure",
          prompt: "Complete with *used to, am / is / are used to* or *get / getting used to* and the correct verb form.",
          items: [
            "When I was a kid, I [[used to]] walk to school.",
            "I'm a nurse, so I [[am used to|'m used to]] working at night.",
            "My sister moved to Canada. She's still [[getting used to]] the weather.",
            "I can't [[get used to]] [[waking]] up at five. (wake)",
            "Are you used to [[speaking]] English in class? (speak)"
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I'm not used to working alone." },
            { a: "You'll get used to it soon." },
            { a: "She used to work in an office." },
            { a: "I'm getting used to the new schedule." }
          ]
        },
        {
          type: "write", title: "A big change",
          prompt: "Write a blog post (120–150 words) about a big change in your life (a new school, job, city, online classes, living alone…). Describe what was difficult at first, what you're getting used to and what you're already used to now. Use *used to*, *be used to* and *get used to*.",
          minWords: 120, maxWords: 150,
          model: "Two years ago, I moved from Tehuacán to Puebla to study at the university. I used to live with my parents, so at first everything was difficult. I wasn't used to cooking or doing my own laundry, and I missed my mom's food every day. The city was also a big change. I wasn't used to the traffic, and I got lost on the buses many times. Little by little, I got used to my new life. Now I'm used to taking two buses every morning, and I can cook five or six simple dishes. I'm still getting used to managing my money, because at the end of the month I'm always broke! But I'm happy. I've learned to be independent, and I think that's the most important thing.",
          bank: ["I used to…", "At first, I wasn't used to…", "It was hard to get used to…", "Little by little,", "Now I'm used to…", "I'm still getting used to…"],
          checklist: [
            "I used **used to** + base verb for the past.",
            "I used **be used to** + -ing / noun.",
            "I used **get used to** + -ing / noun.",
            "I described the change from **beginning** to **now**."
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
            "I wasn't used to being alone.",
            "I'm getting used to it slowly.",
            "I'm not used to getting up early.",
            "I used to work in an office.",
            "You'll get used to it soon.",
            "I'm used to the traffic."
          ]
        },
        {
          type: "speak", title: "Home or office?",
          prompt: "Record yourself for one to two minutes. Would you prefer to study or work from home or in an office/classroom? Talk about what you're used to, what would be hard to get used to and what you used to do before.",
          language: ["I'm used to…", "I'm not used to…", "It would be hard to get used to…", "I used to…, but now…", "I prefer… because…", "On the other hand,…"],
          seconds: 120,
          checklist: ["use be used to?", "use get used to?", "use used to for the past?", "give a clear preference with reasons?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about remote work and online study.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can use *be used to* + noun / *-ing*.", review: "Explanation: be used to and get used to" },
    { can: "I can use *get used to* to talk about adapting.", review: "Explanation: be used to and get used to; Writing activity 1" },
    { can: "I can tell the difference between the three structures.", review: "Explanation: three different structures; Reading activity 2" },
    { can: "I can follow people describing changes in their work.", review: "Listening activities 1 and 2" },
    { can: "I can describe how I adapted to a big change.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
