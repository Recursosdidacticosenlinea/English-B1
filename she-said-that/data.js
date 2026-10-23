window.UNIT = {
  slug: "she-said-that",
  number: 31,
  title: "She Said That…",
  level: "B1",
  minutes: 65,
  speakers: { "Karla": "f", "Uriel": "m", "Reporter": "f", "Mayor": "m", "Neighbor": "f" },
  focus: ["gossip and news vocabulary", "reported speech: say and tell", "tense changes (backshift)", "changes in pronouns, time and place words", "reporting conversations"],

  presentation: {
    scene: "🗣️👂💬🤭",
    situation: "Karla tells her friend Uriel about a conversation she had with their classmate Renata, who has big news.",
    warmup: {
      prompt: "How do you usually hear news about friends? Choose all.",
      options: ["face to face", "WhatsApp", "Instagram stories", "phone calls", "a friend tells me", "family", "TikTok", "at school or work", "group chats", "I'm always the last to know!"],
      response: "Ha! In this unit you'll learn to report what other people said."
    },
    dialogueTitle: "Did you hear about Renata?",
    dialogue: [
      { who: "Karla", line: "Uriel! I talked to Renata yesterday. She *said she was moving* to Canada!" },
      { who: "Uriel", line: "What? When?" },
      { who: "Karla", line: "She *told me she had got* a scholarship at a university in Vancouver. She *said she was leaving* in August." },
      { who: "Uriel", line: "Wow! But she *told me* last month *that she didn't want* to leave Puebla." },
      { who: "Karla", line: "I know. She *said she had changed* her mind after visiting the campus." },
      { who: "Uriel", line: "Did she say anything about her boyfriend?" },
      { who: "Karla", line: "Yes. She *said* they *would try* a long-distance relationship. And she *said she would miss* us a lot." }
    ]
  },

  objectives: [
    "I can report what other people said.",
    "I can use *say* and *tell* correctly.",
    "I can change verb tenses in reported speech.",
    "I can change pronouns and time expressions when I report."
  ],

  explanation: {
    vocabTitle: "Gossip and news",
    vocab: [
      { word: "gossip", icon: "🤭" }, { word: "a rumor", icon: "🗣️" }, { word: "big news", icon: "📣" },
      { word: "announce", icon: "📢" }, { word: "mention", icon: "💬" }, { word: "explain", icon: "🧑‍🏫" },
      { word: "admit", icon: "😅" }, { word: "claim", icon: "☝️" }, { word: "reply", icon: "↩️" },
      { word: "whisper", icon: "🤫" }, { word: "a secret", icon: "🔒" }, { word: "spread", icon: "📡" },
      { word: "according to", icon: "📰" }, { word: "apparently", icon: "🤷" }, { word: "keep it to yourself", icon: "🤐" }
    ],
    grammar: [
      {
        title: "Say and tell",
        head: ["Verb", "Pattern", "Example"],
        rows: [
          ["*say*", "*say* (that)…", "She *said* (that) she was moving."],
          ["*say*", "*say* something *to* someone", "She *said* goodbye *to* us."],
          ["*tell*", "*tell* + person + (that)…", "She *told me* (that) she was moving."]
        ],
        note: "*Tell* always needs a person: *She told me*, not *She told that…* or *She said me…*"
      },
      {
        title: "Tense changes (backshift)",
        intro: "When the reporting verb is in the past (*said, told*), the tense usually moves one step back.",
        head: ["Direct speech", "Reported speech"],
        rows: [
          ["\"I *am* tired.\" (present simple)", "She said she *was* tired."],
          ["\"I*'m moving*.\" (present continuous)", "She said she *was moving*."],
          ["\"I *got* a scholarship.\" (past simple)", "She said she *had got* a scholarship."],
          ["\"I*'ve changed* my mind.\" (present perfect)", "She said she *had changed* her mind."],
          ["\"I*'ll miss* you.\" (will)", "She said she *would miss* us."],
          ["\"I *can* come.\" (can)", "She said she *could* come."]
        ],
        note: "If the information is still true, the backshift is optional: *She said she loves Puebla.*"
      },
      {
        title: "Pronouns, time and place",
        head: ["Direct speech", "Reported speech"],
        rows: [
          ["*I / my / we*", "*she / her / they*"],
          ["*today / tonight*", "*that day / that night*"],
          ["*tomorrow*", "*the next day / the following day*"],
          ["*yesterday*", "*the day before / the previous day*"],
          ["*next week / last week*", "*the following week / the week before*"],
          ["*here / this*", "*there / that*"]
        ]
      }
    ],
    watchOut: [
      ["She said me that she was tired.", "She told me that she was tired."],
      ["He told that he was busy.", "He said that he was busy."],
      ["She said she will call me.", "She said she would call me."],
      ["He said he is coming tomorrow. (reported a week later)", "He said he was coming the next day."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Report the sentences.",
      items: [
        "\"I'm hungry.\" → He said he [[was]] hungry.",
        "\"We've finished the project.\" → They said they [[had finished]] the project.",
        "\"I'll help you.\" → She told me she [[would]] help me.",
        "\"I can't come tomorrow.\" → He said he [[couldn't|could not]] come the next day."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a local news report about a new park in the city.",
      title: "A new park for the neighborhood",
      script: [
        { who: "Reporter", line: "Good evening. I'm in the San Manuel neighborhood, where the city government has announced a new park. I spoke to the mayor this morning." },
        { who: "Mayor", line: "The park will open in March. It's going to have a running track, a playground and a community garden. We've invested twenty million pesos in this project." },
        { who: "Reporter", line: "I also talked to some neighbors. Here's what they told me." },
        { who: "Neighbor", line: "I'm very happy. My kids don't have a safe place to play. But I'm worried about security at night. The city should install more lights." },
        { who: "Reporter", line: "So, to summarize: the mayor said that the park would open in March. He said it was going to have a running track, a playground and a community garden. He told us that the government had invested twenty million pesos." },
        { who: "Reporter", line: "One neighbor told me she was very happy because her kids didn't have a safe place to play. However, she said she was worried about security, and she said the city should install more lights. Back to you in the studio." }
      ],
      activities: [
        {
          type: "gap", title: "Reported details",
          prompt: "Listen and complete the reported sentences.",
          items: [
            "The mayor said the park [[would]] open in March.",
            "He said it was going to have a running [[track]], a playground and a garden.",
            "He said the government [[had invested]] twenty million pesos.",
            "The neighbor said her kids [[didn't have|did not have]] a safe place to play.",
            "She said she [[was]] worried about security at night."
          ]
        },
        {
          type: "match", title: "Direct → reported",
          prompt: "Match the direct speech with the reported speech.",
          pairs: [
            ["\"The park will open in March.\"", "He said the park would open in March."],
            ["\"We've invested twenty million.\"", "He said they had invested twenty million."],
            ["\"I'm very happy.\"", "She said she was very happy."],
            ["\"My kids don't have a safe place.\"", "She said her kids didn't have a safe place."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short story about a misunderstanding.",
      title: "Broken telephone",
      text: [
        { body: "On Monday, Lucía told her roommate Paty that she was tired of her job at the café. \"I'm going to look for something better,\" she said." },
        { body: "On Tuesday, Paty told her friend Óscar that Lucía was looking for a new job. Óscar, who also worked at the café, told his manager that Lucía had found a job somewhere else." },
        { body: "On Wednesday, the manager called Lucía into his office. He said he was sorry she was leaving, and he asked when her last day would be. Lucía was shocked. She said she wasn't leaving; she had only said she was tired!" },
        { body: "The manager laughed and said he understood. Then he told her that he had been thinking about giving her a promotion. \"Well,\" Lucía said, \"maybe I'm not so tired after all.\" Now she is the café's supervisor, and she tells everyone: be careful what you say!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "Lucía told Paty she was tired of her job.", a: true },
            { s: "Lucía had already found a new job.", a: false },
            { s: "Óscar told the manager that Lucía was leaving.", a: true },
            { s: "The manager was angry with Lucía.", a: false },
            { s: "Lucía got a promotion.", a: true }
          ]
        },
        {
          type: "rewrite", title: "What did they actually say?",
          prompt: "Write the direct speech for each reported sentence.",
          items: [
            { q: "Lucía said she was tired of her job.", a: ["I'm tired of my job.", "I am tired of my job."] },
            { q: "Lucía said she wasn't leaving.", a: ["I'm not leaving.", "I am not leaving."] },
            { q: "The manager said he had been thinking about giving her a promotion.", a: ["I've been thinking about giving you a promotion.", "I have been thinking about giving you a promotion."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice reporting, then write about a conversation.",
      activities: [
        {
          type: "rewrite", title: "Report it",
          prompt: "Report each sentence. Start with the words given.",
          items: [
            { q: "\"I love this song.\" (She said…)", a: ["She said she loved that song.", "She said that she loved that song.", "She said she loved this song."] },
            { q: "\"We're having a party tomorrow.\" (They told me…)", a: ["They told me they were having a party the next day.", "They told me that they were having a party the next day.", "They told me they were having a party the following day."] },
            { q: "\"I didn't see you yesterday.\" (He said…)", a: ["He said he hadn't seen me the day before.", "He said that he hadn't seen me the day before.", "He said he had not seen me the day before.", "He said he hadn't seen me the previous day."] },
            { q: "\"I'll call you tonight.\" (She told him…)", a: ["She told him she would call him that night.", "She told him that she would call him that night."] }
          ]
        },
        {
          type: "gap", title: "Say or tell?",
          prompt: "Complete with the correct form of *say* or *tell*.",
          items: [
            "She [[told]] me that she was pregnant.",
            "He [[said]] that the exam was easy.",
            "Did you [[tell]] your parents about the trip?",
            "They [[said]] goodbye to everyone and left."
          ]
        },
        {
          type: "write", title: "Guess what they told me!",
          prompt: "Write a message to a friend (120–150 words) reporting a conversation you had with someone (real or invented) who had interesting news. Use *say* and *tell* and at least six reported sentences with correct tense changes.",
          minWords: 120, maxWords: 150,
          model: "Hi Dani! You won't believe who I saw yesterday at the mall: Professor Ramírez, our old high school teacher! She recognized me immediately. She told me that she had retired last year and that she was living in Cholula now. She said she had started painting and that she was going to have her first exhibition in December. She also said she remembered our class very well. Apparently, she told me we had been her most difficult group, but also her favorite! Then she asked about you. I told her you were studying medicine in Mexico City, and she said she wasn't surprised because you had always been very smart. Before she left, she said she would send me an invitation to the exhibition. Do you want to come with me?",
          bank: ["She told me that…", "He said that…", "Apparently,…", "She said she had…", "He said he would…", "Then I told her that…"],
          checklist: [
            "I used both **say** and **tell** correctly.",
            "I wrote at least **six** reported sentences.",
            "I changed the **tenses** (backshift).",
            "I changed **pronouns** and **time words**."
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
            "She said she was moving to Canada.",
            "She told me she had got a scholarship.",
            "He said he would miss us.",
            "She said she had changed her mind.",
            "They told me they were busy.",
            "Apparently, it's true."
          ]
        },
        {
          type: "speak", title: "Report the news",
          prompt: "Think of a recent conversation with a friend or family member about something interesting. Record yourself for one to two minutes reporting what they said and what you said. Use at least six reported sentences.",
          language: ["The other day, I talked to…", "He / She told me that…", "He / She said that…", "I told him / her that…", "Apparently,…", "In the end, he / she said…"],
          seconds: 120,
          checklist: ["use say and tell correctly?", "change the tenses?", "change pronouns and time words?", "report at least six sentences?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *say* and *tell* correctly.", review: "Explanation: say and tell; Writing activity 2" },
    { can: "I can change tenses in reported speech.", review: "Explanation: tense changes" },
    { can: "I can change pronouns, time and place words.", review: "Explanation: pronouns, time and place" },
    { can: "I can understand a news report with reported speech.", review: "Listening activities 1 and 2" },
    { can: "I can change reported speech back into direct speech.", review: "Reading activity 2" },
    { can: "I can report a conversation in writing and speaking.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
