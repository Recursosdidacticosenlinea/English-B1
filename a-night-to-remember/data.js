window.UNIT = {
  slug: "a-night-to-remember",
  number: 7,
  title: "A Night to Remember",
  level: "B1",
  minutes: 65,
  speakers: { "Ximena": "f", "Mateo": "m", "Storyteller": "m", "Paola": "f" },
  focus: ["narrative tenses together", "past continuous for background", "past simple for main events", "past perfect for earlier events", "story structure and linkers"],

  presentation: {
    scene: "🌙⛈️🔦🏚️",
    situation: "Ximena tells her friend Mateo about a strange night during a camping trip in Zacatlán.",
    warmup: {
      prompt: "What makes a story interesting? Choose all.",
      options: ["a surprising ending", "interesting characters", "a lot of details", "a scary moment", "humor", "a clear beginning", "dialogue", "a mystery", "emotions", "a happy ending"],
      response: "Exactly! In this unit you'll learn to use three past tenses to tell a great story."
    },
    dialogueTitle: "The noise in the forest",
    dialogue: [
      { who: "Mateo", line: "So, how was the camping trip?" },
      { who: "Ximena", line: "Unforgettable! On the second night, it *was raining* and we *were sitting* in the tent, telling stories." },
      { who: "Mateo", line: "Sounds cozy." },
      { who: "Ximena", line: "It was, until we *heard* a loud noise outside. Something *was walking* around the tent!" },
      { who: "Mateo", line: "No way! What did you do?" },
      { who: "Ximena", line: "Andrea *took* her flashlight and *opened* the tent very slowly. We were terrified." },
      { who: "Mateo", line: "And?" },
      { who: "Ximena", line: "It was a dog! It *had smelled* the sandwiches that we *had left* outside. It *was eating* our breakfast!" }
    ]
  },

  objectives: [
    "I can use the past continuous to set the scene of a story.",
    "I can use the past simple for the main events.",
    "I can use the past perfect for events that happened earlier.",
    "I can tell a well-organized story with linkers."
  ],

  explanation: {
    vocabTitle: "Storytelling words",
    vocab: [
      { word: "suddenly", icon: "⚡" }, { word: "at first", icon: "1️⃣" }, { word: "meanwhile", icon: "🔀" },
      { word: "a few minutes later", icon: "⏱️" }, { word: "luckily", icon: "🍀" }, { word: "unfortunately", icon: "😬" },
      { word: "in the end", icon: "🏁" }, { word: "to my surprise", icon: "😲" }, { word: "terrified", icon: "😱" },
      { word: "whisper", icon: "🤫" }, { word: "scream", icon: "😫" }, { word: "creak", icon: "🚪" },
      { word: "a flashlight", icon: "🔦" }, { word: "pitch dark", icon: "🌑" }, { word: "spooky", icon: "👻" }
    ],
    grammar: [
      {
        title: "Three tenses, three jobs",
        head: ["Tense", "Job in the story", "Example"],
        rows: [
          ["past continuous", "background: what was happening", "It *was raining* and we *were sitting* in the tent."],
          ["past simple", "main events, in order", "We *heard* a noise. Andrea *opened* the tent."],
          ["past perfect", "events before the story time", "The dog *had smelled* the sandwiches."]
        ],
        note: "A good story starts with the background (continuous), moves with events (simple) and explains with flashbacks (perfect)."
      },
      {
        title: "When, while, as",
        head: ["Linker", "Example"],
        rows: [
          ["*while / as* + past continuous", "*While* we *were telling* stories, we heard a noise."],
          ["*when* + past simple", "We were telling stories *when* we *heard* a noise."],
          ["*when* + past perfect", "*When* we went out, the dog *had eaten* everything."]
        ]
      }
    ],
    watchOut: [
      ["While I walked home, I was seeing a fox.", "While I was walking home, I saw a fox."],
      ["When I arrived, she was leaving already. (she wasn't there)", "When I arrived, she had already left."],
      ["It was raining and suddenly the lights were going out.", "It was raining and suddenly the lights went out."],
      ["I was knowing the answer.", "I knew the answer."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the past simple, past continuous or past perfect.",
      items: [
        "We [[were having|was having]] dinner when the lights [[went]] out. (have / go)",
        "When I got to the station, the train [[had left|had already left]]. (leave)",
        "While she [[was driving]], it started to snow. (drive)",
        "I [[recognized]] him because I [[had met]] him before. (recognize / meet)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a storyteller at a festival in San Miguel de Allende telling a short mystery.",
      title: "The last bus",
      script: [
        { who: "Storyteller", line: "It was a cold night in November. The wind was blowing and the streets were empty." },
        { who: "Storyteller", line: "Paola was waiting for the last bus home. She had worked late at the library and she was very tired." },
        { who: "Storyteller", line: "At eleven o'clock, the bus arrived. It was completely empty, except for an old man who was sitting at the back. He was wearing a gray hat and he was reading a newspaper." },
        { who: "Storyteller", line: "Paola sat down near the door. A few minutes later, she looked at the man again and noticed something strange. The newspaper was from 1975." },
        { who: "Paola", line: "Excuse me, sir, is that an old newspaper?" },
        { who: "Storyteller", line: "The man smiled, but he didn't answer. Suddenly, the bus stopped, the lights went off, and when they came back on… the man had disappeared." },
        { who: "Storyteller", line: "Paola ran to the driver. \"Where did the old man go?\" she asked. The driver looked confused. \"What old man? You were the only passenger tonight.\"" },
        { who: "Storyteller", line: "The next day, Paola found an article at the library. In 1975, a man in a gray hat had died in an accident on that same bus route." }
      ],
      activities: [
        {
          type: "sort", title: "Background or event?",
          prompt: "Listen. Is each part of the story background (past continuous) or an event (past simple)?",
          bins: ["Background 🌫️", "Event ⚡"],
          items: [
            { text: "The wind was blowing.", bin: 0 }, { text: "Paola was waiting for the bus.", bin: 0 }, { text: "The man was wearing a gray hat.", bin: 0 }, { text: "He was reading a newspaper.", bin: 0 },
            { text: "The bus arrived.", bin: 1 }, { text: "She noticed something strange.", bin: 1 }, { text: "The lights went off.", bin: 1 }, { text: "Paola ran to the driver.", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete.",
          items: [
            "The story happened in [[November]].",
            "Paola had worked late at the [[library]].",
            "The bus arrived at [[eleven|11]] o'clock.",
            "The newspaper was from [[1975]].",
            "In 1975, a man had died in an [[accident]] on that route."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a winning story from a university short-story contest.",
      title: "The wrong apartment",
      text: [
        { body: "It was my first week in Mexico City and I was living in a huge apartment building in Narvarte. All the floors looked exactly the same: the same gray doors, the same plants, the same smell of coffee." },
        { body: "One evening I came home after a long day. I had been to three job interviews and I was exhausted. I took the elevator to the fifth floor, walked to door 502 and tried my key. It didn't work. I tried again. Nothing." },
        { body: "Suddenly, the door opened. A woman was standing there with a baby in her arms. She was looking at me as if I were a thief. \"Can I help you?\" she asked. I didn't understand. Who was this woman in my apartment?" },
        { body: "Then I looked at the number on the wall. I wasn't on the fifth floor at all: I had pressed the button for the fourth floor by mistake! I apologized about ten times and ran upstairs. Now, whenever I see her in the elevator, we both laugh." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The writer had lived in Mexico City for years.", a: false },
            { s: "All the floors in the building looked the same.", a: true },
            { s: "The writer had been to three job interviews that day.", a: true },
            { s: "A man opened the door.", a: false },
            { s: "The writer had pressed the wrong button in the elevator.", a: true },
            { s: "The woman and the writer are now angry with each other.", a: false }
          ]
        },
        {
          type: "match", title: "Find the tense",
          prompt: "Match each sentence from the story with its job.",
          pairs: [
            ["I was living in a huge building.", "background (past continuous)"],
            ["I tried my key. It didn't work.", "main event (past simple)"],
            ["I had been to three job interviews.", "earlier event (past perfect)"],
            ["Now we both laugh.", "the present situation (present simple)"]
          ]
        }
      ]
    },

    writing: {
      intro: "Build a story step by step, then write your own.",
      activities: [
        {
          type: "gap", title: "Complete the story",
          prompt: "Put the verbs in the correct narrative tense.",
          items: [
            "It was a beautiful Saturday. The sun [[was shining]] and the birds [[were singing]]. (shine / sing)",
            "I [[was walking]] in the park when I [[saw]] a wallet on the ground. (walk / see)",
            "I [[opened]] it. Somebody [[had left]] two thousand pesos inside! (open / leave)",
            "I [[took]] it to the police station. The owner [[had reported|had already reported]] it an hour before. (take / report)"
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "While we were having dinner, the phone rang." },
            { a: "Suddenly, the lights went out." },
            { a: "Luckily, somebody had brought a flashlight." },
            { a: "In the end, we all laughed about it." },
            { a: "It was raining when we left." }
          ]
        },
        {
          type: "write", title: "A night to remember",
          prompt: "Write a story (130–160 words) that begins: *\"It was a dark and stormy night…\"* or *\"I'll never forget the night when…\"*. Use the past continuous for the background, the past simple for events and the past perfect at least twice. Use at least four storytelling linkers.",
          minWords: 130, maxWords: 160,
          model: "I'll never forget the night when I got locked out of my house. It was raining heavily and I was walking home from my friend's party. It was almost two in the morning. When I got to the door, I looked in my bag for my keys, but they weren't there. I had left them at the party! I called my roommate, but she didn't answer because she had gone to her parents' house for the weekend. At first, I didn't know what to do. Then I saw that the kitchen window was open. Luckily, I'm quite small, so I climbed in. Suddenly, a light came on. My neighbor was standing at his window with a baseball bat! He had thought I was a thief. In the end, we both laughed, and now we're good friends.",
          bank: ["It was raining / dark", "I was walking / waiting", "Suddenly,", "At first,", "I had left / forgotten", "Luckily,", "In the end,"],
          checklist: [
            "I set the scene with the **past continuous**.",
            "I told the main events in the **past simple**.",
            "I used the **past perfect** at least twice.",
            "I used at least **four** storytelling linkers."
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
            "It was raining and the wind was blowing.",
            "Suddenly, we heard a loud noise.",
            "The man had disappeared.",
            "We were sitting in the tent.",
            "Luckily, it was only a dog.",
            "In the end, we all laughed."
          ]
        },
        {
          type: "speak", title: "Tell a story",
          prompt: "Record yourself telling a true or invented story for about two minutes (a strange, funny or scary night). Set the scene, tell the main events and explain what had happened before. Try to make your voice interesting!",
          language: ["It was a… night.", "I was… when…", "Suddenly,…", "I realized that… had…", "To my surprise,…", "In the end,…"],
          seconds: 150,
          checklist: ["set the scene with the past continuous?", "use the past simple for the events?", "use the past perfect at least twice?", "use linkers like suddenly and in the end?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can set the scene of a story with the past continuous.", review: "Explanation: three tenses, three jobs" },
    { can: "I can tell main events in order with the past simple.", review: "Listening activity 1" },
    { can: "I can explain earlier events with the past perfect.", review: "Reading activity 2; Writing activity 1" },
    { can: "I can use *when, while* and *as* correctly.", review: "Explanation: when, while, as" },
    { can: "I can follow a mystery story told aloud.", review: "Listening activities 1 and 2" },
    { can: "I can write and tell a well-organized story.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
