window.UNIT = {
  slug: "urban-legends",
  number: 9,
  title: "Urban Legends",
  level: "B1",
  minutes: 60,
  speakers: { "Brenda": "f", "Óscar": "m", "Guide": "m", "Tourist": "f" },
  focus: ["legends and mysteries vocabulary", "time linkers: as soon as, by the time, until", "during vs. while", "eventually, in the end, at last", "retelling a legend"],

  presentation: {
    scene: "👻🌕🏛️📜",
    situation: "Brenda and Óscar are on a night tour of legends in downtown Puebla. They are talking while they wait for the guide.",
    warmup: {
      prompt: "Which legends or mysterious stories do you know? Choose all.",
      options: ["La Llorona", "El Callejón del Beso", "the Chupacabras", "La Casa de los Muñecos", "El Charro Negro", "the Bermuda Triangle", "Bigfoot", "the Loch Ness Monster", "La Nahuala", "aliens in Roswell"],
      response: "Spooky! In this unit you'll learn time linkers to tell legends and stories clearly."
    },
    dialogueTitle: "Waiting for the night tour",
    dialogue: [
      { who: "Óscar", line: "Do you believe in ghosts?" },
      { who: "Brenda", line: "Not really. But when I was a kid, I never went to bed *until* my parents turned on the hall light." },
      { who: "Óscar", line: "Ha! I was the same. My grandma told us about La Llorona, and *as soon as* she finished, we ran to our rooms." },
      { who: "Brenda", line: "Did you ever hear anything strange?" },
      { who: "Óscar", line: "Once, *during* a storm, I heard someone crying outside. *By the time* my dad opened the door, the noise had stopped." },
      { who: "Brenda", line: "Spooky! What was it?" },
      { who: "Óscar", line: "We never knew. *Eventually*, we decided it was the neighbor's cat. Look, the guide is here *at last*!" }
    ]
  },

  objectives: [
    "I can use time linkers to organize a story.",
    "I can use *as soon as, by the time* and *until* correctly.",
    "I can choose between *during* and *while*.",
    "I can retell a legend or mysterious story."
  ],

  explanation: {
    vocabTitle: "Legends and mysteries",
    vocab: [
      { word: "a legend", icon: "📜" }, { word: "a ghost", icon: "👻" }, { word: "haunted", icon: "🏚️" },
      { word: "a curse", icon: "🧿" }, { word: "a witness", icon: "👁️" }, { word: "a rumor", icon: "🗣️" },
      { word: "mysterious", icon: "❓" }, { word: "disappear", icon: "💨" }, { word: "appear", icon: "✨" },
      { word: "scream", icon: "😱" }, { word: "spirit", icon: "🌫️" }, { word: "be scared to death", icon: "😨" },
      { word: "the full moon", icon: "🌕" }, { word: "an alley", icon: "🏘️" }, { word: "it is said that…", icon: "💬" }
    ],
    grammar: [
      {
        title: "Time linkers",
        head: ["Linker", "Meaning", "Example"],
        rows: [
          ["*as soon as*", "immediately after", "*As soon as* she finished, we ran to our rooms."],
          ["*by the time*", "not later than; before (often + past perfect)", "*By the time* he opened the door, the noise *had stopped*."],
          ["*until / till*", "up to that moment", "I didn't sleep *until* they turned on the light."],
          ["*once*", "after; when", "*Once* the sun went down, the streets were empty."],
          ["*after* / *before* + -ing", "", "*After hearing* the story, I couldn't sleep."]
        ]
      },
      {
        title: "During or while?",
        head: ["Word", "+", "Example"],
        rows: [
          ["*during*", "a noun", "*during* the storm / *during* the night / *during* the war"],
          ["*while*", "subject + verb", "*while* it was raining / *while* I was walking home"]
        ],
        note: "Not *during it was raining*. Use *while it was raining*."
      },
      {
        title: "Endings: eventually, in the end, at last",
        head: ["Linker", "Use", "Example"],
        rows: [
          ["*eventually*", "after a long time or many problems", "*Eventually*, they found the house."],
          ["*in the end*", "the final result", "*In the end*, nobody believed him."],
          ["*at last*", "finally, with relief", "The guide is here *at last*!"]
        ]
      }
    ],
    watchOut: [
      ["During I was sleeping, I heard a noise.", "While I was sleeping, I heard a noise."],
      ["I'll call you as soon as I will arrive.", "I'll call you as soon as I arrive."],
      ["At the end, the ghost disappeared.", "In the end, the ghost disappeared."],
      ["Wait here until I don't come back.", "Wait here until I come back."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *as soon as, by the time, until, during* or *while*.",
      items: [
        "[[By the time]] we arrived, the tour had finished.",
        "I fell asleep [[during]] the movie.",
        "[[As soon as]] the lights went off, everybody screamed.",
        "We waited [[until]] midnight, but nothing happened."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a guide telling a ghost story on a night tour of downtown Puebla.",
      title: "The bride of the old house",
      script: [
        { who: "Guide", line: "Welcome, everyone. Tonight's first story is about a house on this street. It is said that in the 1800s, a young woman lived here with her rich father." },
        { who: "Guide", line: "She fell in love with a poor soldier. Her father was furious, and he locked her in her room until she agreed to marry a rich man." },
        { who: "Guide", line: "But one night, during a terrible storm, she escaped through the window. She waited for the soldier at the church until sunrise. He never came." },
        { who: "Guide", line: "As soon as the sun came up, she went back home in her wedding dress. By the time she arrived, she was so sad that she couldn't speak." },
        { who: "Tourist", line: "What happened to the soldier?" },
        { who: "Guide", line: "Nobody knows. Some say he had died in a battle. Others say he had left the city. Eventually, the young woman got sick and died. She was only twenty." },
        { who: "Guide", line: "And here's the scary part. Neighbors say that while it's raining, you can see a woman in a white dress at that window. She's still waiting." },
        { who: "Tourist", line: "Have you ever seen her?" },
        { who: "Guide", line: "Me? Never. But in the end, that's what makes a good legend: no one is completely sure." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the legend in order",
          prompt: "Make sentences from the story.",
          items: [
            { a: "Her father locked her in her room." },
            { a: "She escaped during a terrible storm." },
            { a: "She waited at the church until sunrise." },
            { a: "Eventually, she got sick and died." }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete with one word or number.",
          items: [
            "The story happened in the [[1800s]].",
            "She fell in love with a poor [[soldier]].",
            "She went home in her wedding [[dress]].",
            "She died when she was [[twenty|20]].",
            "People see her at the window while it's [[raining]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about a famous modern urban legend.",
      title: "The phantom hitchhiker",
      text: [
        { body: "The phantom hitchhiker is one of the most popular urban legends in the world. There are versions in Mexico, the United States, Spain and even Korea. The details change, but the story is always similar." },
        { body: "A driver is traveling alone at night when he sees a young woman by the road. She asks for a ride home. During the trip, she says very little. She just gives an address and looks out the window." },
        { body: "As soon as they arrive, the driver turns around to say goodbye, but the back seat is empty. Confused, he knocks on the door of the house. An old woman opens it. When he describes the girl, the woman starts to cry: \"That was my daughter. She died in an accident on that road ten years ago, on this same night.\"" },
        { body: "Why is this legend so popular? Experts say it combines two common fears: being alone on a dark road and meeting a stranger. It also spreads easily, because people always tell it as if it happened to \"a friend of a friend.\"" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The legend only exists in Mexico.", a: false },
            { s: "The young woman talks a lot during the trip.", a: false },
            { s: "When they arrive, the girl has disappeared.", a: true },
            { s: "The old woman is the girl's grandmother.", a: false },
            { s: "The girl had died on that road years before.", a: true },
            { s: "People usually say it happened to someone they know indirectly.", a: true }
          ]
        },
        {
          type: "match", title: "Linkers in the text",
          prompt: "Match the halves to make sentences.",
          pairs: [
            ["During the trip,", "she says very little."],
            ["As soon as they arrive,", "the driver turns around."],
            ["When he describes the girl,", "the woman starts to cry."],
            ["The legend spreads easily", "because people tell it as true."]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice time linkers, then retell a legend.",
      activities: [
        {
          type: "rewrite", title: "Join with a linker",
          prompt: "Join the sentences with the linker in parentheses.",
          items: [
            { q: "The guide finished the story. The lights went out. (as soon as)", a: ["As soon as the guide finished the story, the lights went out.", "The lights went out as soon as the guide finished the story."] },
            { q: "We waited. The rain stopped. (until)", a: ["We waited until the rain stopped."] },
            { q: "The police arrived. The thief had escaped. (by the time)", a: ["By the time the police arrived, the thief had escaped.", "The thief had escaped by the time the police arrived."] },
            { q: "I was walking home. I saw a strange light. (while)", a: ["While I was walking home, I saw a strange light.", "I saw a strange light while I was walking home."] }
          ]
        },
        {
          type: "gap", title: "During, while or until?",
          prompt: "Complete each sentence.",
          items: [
            "Somebody called me [[during]] the class.",
            "Don't open the door [[until]] I say so.",
            "[[While]] we were camping, we heard a howl.",
            "The power went off [[during]] the storm."
          ]
        },
        {
          type: "write", title: "Retell a legend",
          prompt: "Write a legend from your town, your family or the internet (130–160 words). Set the scene, tell the main events and give the ending. Use at least five time linkers (*as soon as, by the time, until, during, while, eventually, in the end…*).",
          minWords: 130, maxWords: 160,
          model: "In my grandmother's town, there is a legend about a black dog. It is said that many years ago, a farmer was walking home late at night after a party. While he was crossing the old bridge, he saw a huge black dog with red eyes. The dog followed him in silence until he reached his house. As soon as he opened the door, the dog disappeared. The farmer was so scared that he didn't leave his house for a week. By the time he told his neighbors, other people had seen the same dog on the same bridge. Eventually, the priest of the town blessed the bridge, and the dog never appeared again. In the end, nobody knows if it was a spirit or just a lost dog, but even today, people cross that bridge quickly at night.",
          bank: ["It is said that…", "While…", "until…", "As soon as…", "By the time…", "Eventually,", "In the end,"],
          checklist: [
            "I set the **scene** at the beginning.",
            "I used at least **five** time linkers.",
            "I used *during* + noun and *while* + verb correctly.",
            "My story has a clear **ending**."
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
            "It is said that she's still waiting.",
            "As soon as she finished, we ran.",
            "By the time he opened the door, it had stopped.",
            "She escaped during a terrible storm.",
            "Eventually, she got sick.",
            "The guide is here at last!"
          ]
        },
        {
          type: "speak", title: "Tell a legend",
          prompt: "Record yourself telling a legend or mysterious story for about two minutes, like a tour guide. Use time linkers to make the order clear and give the story a strong ending.",
          language: ["It is said that…", "One night, while…", "As soon as…", "By the time…", "Eventually,…", "Some people say that…"],
          seconds: 150,
          checklist: ["use at least five time linkers?", "use during and while correctly?", "tell the story in a clear order?", "give a strong ending?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *as soon as, by the time* and *until* correctly.", review: "Explanation: time linkers; Writing activity 1" },
    { can: "I can choose between *during* and *while*.", review: "Explanation: during or while; Writing activity 2" },
    { can: "I can end a story with *eventually, in the end* or *at last*.", review: "Explanation: endings" },
    { can: "I can follow a legend told by a guide.", review: "Listening activities 1 and 2" },
    { can: "I can understand an article about an urban legend.", review: "Reading activities 1 and 2" },
    { can: "I can retell a legend in clear order.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
