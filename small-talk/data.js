window.UNIT = {
  slug: "small-talk",
  number: 2,
  title: "Small Talk",
  level: "B1",
  minutes: 60,
  speakers: { "Regina": "f", "Tomás": "m", "Coach": "f", "Iván": "m", "Lupita": "f" },
  focus: ["small talk topics and phrases", "question tags: isn't it? don't you?", "rising and falling intonation", "agreeing: so do I / neither do I", "keeping a conversation going"],

  presentation: {
    scene: "☕💬🌤️🙂",
    situation: "Regina is waiting for the elevator at a conference in Puebla. A man from another university starts a conversation.",
    warmup: {
      prompt: "Which topics are good for small talk with someone you just met? Choose all.",
      options: ["the weather", "the event you're at", "salary", "travel", "politics", "weekend plans", "food", "religion", "movies and series", "someone's weight", "sports", "music"],
      response: "Good choices! Safe topics help you start a friendly conversation. Let's learn how to keep it going."
    },
    dialogueTitle: "Waiting for the elevator",
    dialogue: [
      { who: "Tomás", line: "This elevator is really slow, *isn't it*?" },
      { who: "Regina", line: "Yes, it is! I've been waiting for five minutes. You're here for the conference, *aren't you*?" },
      { who: "Tomás", line: "That's right. I'm Tomás, from Monterrey. The talks this morning were great, *weren't they*?" },
      { who: "Regina", line: "Absolutely. I loved the one about climate change." },
      { who: "Tomás", line: "*So did I*! I don't usually enjoy long talks, but that one was fascinating." },
      { who: "Regina", line: "*Neither do I*, usually. By the way, I'm Regina. You haven't tried the coffee here yet, *have you*?" },
      { who: "Tomás", line: "No, I haven't. Is it good?" },
      { who: "Regina", line: "It's the best in the building. Come on, I'll show you!" }
    ]
  },

  objectives: [
    "I can start and continue a conversation with someone I don't know well.",
    "I can use question tags to check information or invite agreement.",
    "I can agree with people using *so do I / neither do I*.",
    "I can use follow-up questions to keep a conversation going."
  ],

  explanation: {
    vocabTitle: "Small talk phrases",
    vocab: [
      { word: "Lovely day, isn't it?", icon: "🌤️" }, { word: "How do you know…?", icon: "🤝" }, { word: "Have you been here before?", icon: "📍" },
      { word: "What brings you here?", icon: "🧳" }, { word: "By the way,…", icon: "↪️" }, { word: "Really? Tell me more.", icon: "👂" },
      { word: "That sounds interesting.", icon: "✨" }, { word: "Same here!", icon: "🙌" }, { word: "Me neither.", icon: "🙅" },
      { word: "What do you do?", icon: "💼" }, { word: "It was nice talking to you.", icon: "👋" }, { word: "Anyway,…", icon: "➡️" },
      { word: "I'd better go.", icon: "🏃" }, { word: "Let's keep in touch.", icon: "📱" }, { word: "See you around!", icon: "😊" }
    ],
    grammar: [
      {
        title: "Question tags",
        intro: "A question tag is a short question at the end of a sentence. Positive sentence → negative tag. Negative sentence → positive tag.",
        head: ["Sentence", "Tag", "Rule"],
        rows: [
          ["It's cold today,", "*isn't it?*", "*be* → repeat *be*"],
          ["You live near here,", "*don't you?*", "present simple → *do / does*"],
          ["She went to the party,", "*didn't she?*", "past simple → *did*"],
          ["They haven't arrived yet,", "*have they?*", "perfect → *have / has*"],
          ["You can swim,", "*can't you?*", "modal → repeat the modal"],
          ["I'm late,", "*aren't I?*", "special: *I am* → *aren't I?*"]
        ],
        note: "Intonation: falling ↘ = you're sure and want agreement. Rising ↗ = you're not sure and want information."
      },
      {
        title: "Agreeing: so / neither",
        head: ["Statement", "Agree", "Disagree"],
        rows: [
          ["I love jazz. (positive)", "*So do I.* / *Me too.*", "*Oh, I don't.*"],
          ["I don't like rain. (negative)", "*Neither do I.* / *Me neither.*", "*Oh, I do.*"],
          ["I went to the concert.", "*So did I.*", "*Oh, I didn't.*"],
          ["I can't dance.", "*Neither can I.*", "*Oh, I can.*"],
          ["I've been to Oaxaca.", "*So have I.*", "*Oh, I haven't.*"]
        ],
        note: "Use the same auxiliary as the statement: *I'm tired. – So am I.*"
      }
    ],
    watchOut: [
      ["You like coffee, isn't it?", "You like coffee, don't you?"],
      ["I don't like spiders. – So do I.", "I don't like spiders. – Neither do I."],
      ["She's from Puebla, is she?", "She's from Puebla, isn't she?"],
      ["I went to the party. – So went I.", "I went to the party. – So did I."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct question tag or reply.",
      items: [
        "You're a student here, [[aren't you]]?",
        "He didn't call you, [[did he]]?",
        "I can't stand traffic. – [[Neither can I|Me neither]].",
        "I've finished my project. – [[So have I|Me too]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a communication coach giving a short workshop. Then listen to two students practicing small talk.",
      title: "The art of small talk",
      script: [
        { who: "Coach", line: "Small talk is not about the weather. It's about connection. The secret is simple: ask questions and really listen." },
        { who: "Coach", line: "My three rules are: one, start with something you both share, like the place or the event. Two, ask open questions that start with how, what or why. Three, give a little information about yourself too." },
        { who: "Coach", line: "Now let's listen to Iván and Lupita. They've just met at a friend's birthday party." },
        { who: "Iván", line: "Great party, isn't it? How do you know Sara?" },
        { who: "Lupita", line: "We work together at the hospital. I'm a nurse. And you?" },
        { who: "Iván", line: "We studied engineering together. You work night shifts, don't you? Sara told me." },
        { who: "Lupita", line: "Sometimes, yes. It's hard, but I love my job. What do you do now?" },
        { who: "Iván", line: "I design apps for a small company. I don't like working in an office, so I work from home." },
        { who: "Lupita", line: "Neither do I! That's why I like the hospital: it's never boring." },
        { who: "Coach", line: "Excellent. Did you notice? They found something in common and they asked follow-up questions." }
      ],
      activities: [
        {
          type: "match", title: "The coach's rules",
          prompt: "Match the beginnings and endings.",
          pairs: [
            ["Small talk is about", "connection, not the weather."],
            ["Start with something", "you both share."],
            ["Ask open questions", "that start with how, what or why."],
            ["Give a little information", "about yourself too."],
            ["Iván and Lupita found", "something in common."]
          ]
        },
        {
          type: "tf", title: "Iván and Lupita",
          prompt: "Listen to the conversation again. True or false?",
          items: [
            { s: "Lupita and Sara work at a hospital.", a: true },
            { s: "Iván and Sara studied medicine together.", a: false },
            { s: "Lupita always works night shifts.", a: false },
            { s: "Iván works from home.", a: true },
            { s: "Lupita thinks the hospital is boring.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a student magazine.",
      title: "Five ways to survive small talk",
      text: [
        { body: "**1. Use the situation.** You're at the same place for a reason. Comment on it: *\"This line is really long, isn't it?\"* It's an easy way to start." },
        { body: "**2. Ask follow-up questions.** If someone says, *\"I just got back from Chiapas,\"* don't just say *\"Cool.\"* Ask, *\"What was the best part?\"* People love talking about their experiences." },
        { body: "**3. Find common ground.** Listen for things you share. When you find one, say it: *\"So do I!\"* or *\"Neither have I!\"* Common ground makes people feel closer." },
        { body: "**4. Avoid heavy topics.** Money, politics and religion can make people uncomfortable when you don't know them well. Keep it light." },
        { body: "**5. End politely.** Nobody wants to talk forever. Say something like *\"It was really nice talking to you. I'd better go and find my friends.\"* A good ending leaves a good impression." }
      ],
      activities: [
        {
          type: "sort", title: "Do or don't?",
          prompt: "According to the article, which are good ideas?",
          bins: ["Do ✅", "Don't ❌"],
          items: [
            { text: "comment on the place you're in", bin: 0 }, { text: "ask what was the best part of a trip", bin: 0 }, { text: "say \"So do I!\" when you share something", bin: 0 }, { text: "end with \"Nice talking to you\"", bin: 0 },
            { text: "just say \"Cool.\" and stop", bin: 1 }, { text: "ask how much someone earns", bin: 1 }, { text: "talk about politics with a stranger", bin: 1 }, { text: "talk forever without stopping", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Add a question tag",
          prompt: "Rewrite each sentence with a question tag.",
          items: [
            { q: "This line is really long.", a: ["This line is really long, isn't it?"] },
            { q: "You just got back from Chiapas.", a: ["You just got back from Chiapas, didn't you?"] },
            { q: "You don't know many people here.", a: ["You don't know many people here, do you?"] },
            { q: "She has been to Spain.", a: ["She has been to Spain, hasn't she?", "She's been to Spain, hasn't she?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice tags and agreeing, then write a small talk conversation.",
      activities: [
        {
          type: "gap", title: "Agree!",
          prompt: "Agree with each person. Use *So… I* or *Neither… I*.",
          items: [
            "I'm hungry. – [[So am I]].",
            "I didn't sleep well. – [[Neither did I]].",
            "I can speak French. – [[So can I]].",
            "I haven't seen that movie. – [[Neither have I]].",
            "I love tacos al pastor. – [[So do I]].",
            "I won't be at the party. – [[Neither will I]]."
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "You're new here, aren't you?" },
            { a: "How do you know the host?" },
            { a: "It was really nice talking to you." },
            { a: "They haven't arrived yet, have they?" },
            { a: "What brings you to Puebla?" }
          ]
        },
        {
          type: "write", title: "A conversation at a party",
          prompt: "Write a short conversation (100–130 words) between two people who meet for the first time at a party or event. Include at least three question tags, one *So… I / Neither… I*, two follow-up questions and a polite ending.",
          minWords: 100, maxWords: 130,
          model: "A: The music is great, isn't it?<br>B: Yes, I love this band. How do you know Daniel?<br>A: We play soccer together on Saturdays. You're his cousin, aren't you?<br>B: That's right. I just moved here from Toluca.<br>A: Really? What made you move?<br>B: I got a job at a design studio. I didn't want to leave my family, but it's a great opportunity.<br>A: That sounds exciting! I don't really like big cities.<br>B: Neither do I, but Puebla is OK. You haven't seen the new park downtown, have you?<br>A: No, not yet. Is it nice?<br>B: It's beautiful. Anyway, it was nice talking to you. I'd better find Daniel.",
          bank: ["…, isn't it?", "…, aren't you?", "How do you know…?", "Really? What…?", "So do I. / Neither do I.", "Anyway, it was nice talking to you."],
          checklist: [
            "I used at least **three** question tags.",
            "I used **So… I** or **Neither… I** correctly.",
            "I included **follow-up** questions.",
            "I ended the conversation **politely**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Pay attention to the falling intonation of the tags.",
          items: [
            "This elevator is really slow, isn't it?",
            "You're here for the conference, aren't you?",
            "So did I!",
            "Neither do I.",
            "It was really nice talking to you.",
            "What brings you here?"
          ]
        },
        {
          type: "speak", title: "Meet me!",
          prompt: "Imagine you meet a new classmate at the university. Record yourself for one to two minutes: start the conversation, introduce yourself, ask three questions (two with question tags) and say what you have in common. End the conversation politely.",
          language: ["Great day, isn't it?", "You study…, don't you?", "So do I! / Neither do I!", "Really? Tell me more.", "By the way,…", "It was nice talking to you."],
          seconds: 120,
          checklist: ["start with something about the situation?", "use at least two question tags?", "mention something in common?", "end the conversation politely?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can start a conversation with someone I don't know.", review: "Explanation: small talk phrases; Reading" },
    { can: "I can form question tags with different tenses.", review: "Explanation: question tags; Reading activity 2" },
    { can: "I can use falling intonation to invite agreement.", review: "Explanation: question tags note; Speaking activity 1" },
    { can: "I can agree with *so… I* and *neither… I*.", review: "Explanation: agreeing; Writing activity 1" },
    { can: "I can ask follow-up questions to keep a conversation going.", review: "Listening activity 1; Reading tip 2" },
    { can: "I can end a conversation politely.", review: "Reading tip 5; Speaking activity 2" }
  ]
};
