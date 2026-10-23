window.UNIT = {
  slug: "it-had-already-started",
  number: 6,
  title: "It Had Already Started",
  level: "B1",
  minutes: 60,
  speakers: { "Sebastián": "m", "Daniela": "f", "Narrator": "f", "Gael": "m" },
  focus: ["past perfect: had + past participle", "the earlier of two past actions", "already, just, never, by the time + past perfect", "past simple vs. past perfect", "explaining what went wrong"],

  presentation: {
    scene: "🎬⏰🏃‍♂️😩",
    situation: "Sebastián arrives at the cinema very late for the premiere of a movie. His friend Daniela is waiting outside.",
    warmup: {
      prompt: "Have you ever arrived late to one of these? Choose all.",
      options: ["a movie", "a class", "an exam", "a flight", "a bus", "a concert", "a party", "a job interview", "a wedding", "a doctor's appointment"],
      response: "It happens to everyone! In this unit you'll learn to explain what had happened before something else."
    },
    dialogueTitle: "Too late for the movie",
    dialogue: [
      { who: "Daniela", line: "Sebastián! Finally! The movie *had already started* when I came out to look for you." },
      { who: "Sebastián", line: "I'm so sorry. It was a disaster. When I got to the bus stop, the bus *had just left*." },
      { who: "Daniela", line: "Why didn't you take a taxi?" },
      { who: "Sebastián", line: "I tried, but I realized I *had left* my wallet at home!" },
      { who: "Daniela", line: "Oh no. So what did you do?" },
      { who: "Sebastián", line: "I went back home, got my wallet and took an Uber. By the time I arrived, the tickets *had sold out*, so I couldn't buy one at the door." },
      { who: "Daniela", line: "Don't worry, I *had bought* your ticket online. Come on, let's go in quickly!" }
    ]
  },

  objectives: [
    "I can form the past perfect with *had* + past participle.",
    "I can show which of two past actions happened first.",
    "I can use *already, just, never* and *by the time* with the past perfect.",
    "I can explain what went wrong in a past situation."
  ],

  explanation: {
    vocabTitle: "When things go wrong",
    vocab: [
      { word: "miss the bus", icon: "🚌" }, { word: "oversleep", icon: "😴" }, { word: "forget", icon: "🤦" },
      { word: "leave behind", icon: "👜" }, { word: "sell out", icon: "🎟️" }, { word: "run out of", icon: "🪫" },
      { word: "break down", icon: "🚗" }, { word: "get stuck", icon: "🚦" }, { word: "realize", icon: "💡" },
      { word: "turn up", icon: "🚪" }, { word: "cancel", icon: "❌" }, { word: "be too late", icon: "⏰" },
      { word: "a traffic jam", icon: "🚙" }, { word: "a dead battery", icon: "🔋" }, { word: "a disaster", icon: "🌪️" }
    ],
    grammar: [
      {
        title: "Past perfect: form",
        head: ["", "Example"],
        rows: [
          ["positive", "I / she / they *had* (= *'d*) *left*."],
          ["negative", "We *hadn't* (*had not*) *eaten*."],
          ["question", "*Had* you *seen* the movie before? – Yes, I *had*. / No, I *hadn't*."]
        ],
        note: "Same form for all persons: *had* + past participle."
      },
      {
        title: "Two past actions",
        intro: "Use the past perfect for the action that happened **first**, when you are already talking about the past.",
        head: ["Sentence", "What happened first?"],
        rows: [
          ["When I *got* to the stop, the bus *had left*.", "The bus left → then I arrived."],
          ["When I *got* to the stop, the bus *left*.", "I arrived → then the bus left (I saw it)."],
          ["I *realized* I *had left* my wallet at home.", "I left my wallet → then I realized."]
        ],
        note: "If the order is clear (with *before, after*), the past simple is also OK: *After I finished, I went home.*"
      },
      {
        title: "Common words with the past perfect",
        head: ["Word", "Example"],
        rows: [
          ["*already*", "The movie *had already started*."],
          ["*just*", "The bus *had just left*."],
          ["*never … before*", "I *had never flown* before that trip."],
          ["*by the time*", "*By the time* I arrived, the tickets *had sold out*."]
        ]
      }
    ],
    watchOut: [
      ["When I arrived, the class already started.", "When I arrived, the class had already started."],
      ["I had went to the store.", "I had gone to the store."],
      ["She had saw the movie before.", "She had seen the movie before."],
      ["I had never flew before 2022.", "I had never flown before 2022."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the past perfect of the verb in parentheses.",
      items: [
        "When we arrived, the party [[had finished|'d finished]]. (finish)",
        "I [[had never seen|'d never seen]] the ocean before that trip. (never see)",
        "She was angry because I [[had forgotten|'d forgotten]] her birthday. (forget)",
        "[[Had]] you [[eaten]] mole before you came to Puebla? (eat)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to Gael telling a friend about the worst morning of his life.",
      title: "The worst morning ever",
      script: [
        { who: "Gael", line: "Last Monday was the worst morning of my life. I had an important exam at eight." },
        { who: "Narrator", line: "Gael had studied all weekend, so he went to bed very late on Sunday." },
        { who: "Gael", line: "When I woke up, it was seven thirty. I hadn't heard my alarm because my phone had died during the night." },
        { who: "Gael", line: "I got dressed in two minutes and ran to the bus stop. Of course, the bus had just left." },
        { who: "Gael", line: "I decided to take a taxi, but then I realized I had left my backpack at home, with my student ID inside. I needed it for the exam!" },
        { who: "Gael", line: "I ran back home, got the backpack and finally found a taxi. But there was a huge traffic jam on the main avenue." },
        { who: "Gael", line: "By the time I got to the classroom, the exam had already started. The teacher looked at me and said, \"You're thirty minutes late.\"" },
        { who: "Narrator", line: "Luckily, the teacher let him take the exam." },
        { who: "Gael", line: "And guess what? I got a nine! All that studying had been worth it." }
      ],
      activities: [
        {
          type: "tiles", title: "What happened first?",
          prompt: "Listen. Put the words in order to make sentences from the story.",
          items: [
            { a: "His phone had died during the night." },
            { a: "The bus had just left." },
            { a: "He had left his backpack at home." },
            { a: "The exam had already started." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Gael's exam was at eight o'clock.", a: true },
            { s: "He didn't hear his alarm because he was too tired.", a: false },
            { s: "He needed his student ID for the exam.", a: true },
            { s: "He arrived fifteen minutes late.", a: false },
            { s: "The teacher didn't let him take the exam.", a: false },
            { s: "He got a good grade.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a true-style story from a travel blog.",
      title: "The passport that traveled alone",
      text: [
        { body: "Last December, my sister Lorena and I flew to Bogotá for a cousin's wedding. We had planned the trip for months and we had never been to Colombia before, so we were very excited." },
        { body: "When we got to the airport in Mexico City, Lorena opened her bag and went pale. She had packed her passport in her big suitcase, and she had already checked the suitcase in! We ran to the airline desk. The suitcase had already gone to the plane." },
        { body: "The agent called the baggage team. Twenty minutes later, a man appeared with the suitcase. By then, the airline had called our names twice. Lorena took out her passport, the man took the suitcase again, and we ran to the gate." },
        { body: "When we sat down, we were exhausted, but we laughed for the whole flight. Now Lorena always keeps her passport in her jacket!" }
      ],
      activities: [
        {
          type: "match", title: "Why?",
          prompt: "Match each fact with the reason.",
          pairs: [
            ["They were excited because", "they had never been to Colombia."],
            ["Lorena went pale because", "she had packed her passport in the suitcase."],
            ["They couldn't get the suitcase easily because", "it had already gone to the plane."],
            ["They ran to the gate because", "the airline had called their names twice."]
          ]
        },
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the two sentences with *when* and the past perfect.",
          items: [
            { q: "The suitcase went to the plane. Then they got to the desk.", a: ["When they got to the desk, the suitcase had gone to the plane.", "When they got to the desk, the suitcase had already gone to the plane."] },
            { q: "Lorena checked in her suitcase. Then she remembered the passport.", a: ["When Lorena remembered the passport, she had checked in her suitcase.", "When she remembered the passport, she had already checked in her suitcase.", "When Lorena remembered the passport, she had already checked in her suitcase."] },
            { q: "The airline called their names twice. Then they arrived at the gate.", a: ["When they arrived at the gate, the airline had called their names twice."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice choosing tenses, then tell the story of a bad day.",
      activities: [
        {
          type: "gap", title: "Past simple or past perfect?",
          prompt: "Complete with the correct form of the verb.",
          items: [
            "When I [[got]] home, I saw that someone [[had broken]] the window. (get / break)",
            "We [[were|felt]] hungry because we [[hadn't eaten|had not eaten]] all day. (be / not eat)",
            "By the time the police [[arrived]], the thief [[had escaped]]. (arrive / escape)",
            "She [[didn't recognize|did not recognize]] me because I [[had cut]] my hair. (not recognize / cut)"
          ]
        },
        {
          type: "rewrite", title: "Correct the mistake",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "When I arrived, the movie already started.", a: ["When I arrived, the movie had already started."] },
            { q: "I had never ate sushi before that night.", a: ["I had never eaten sushi before that night."] },
            { q: "She was sad because she had lose her phone.", a: ["She was sad because she had lost her phone."] },
            { q: "By the time we got there, everyone had leave.", a: ["By the time we got there, everyone had left."] }
          ]
        },
        {
          type: "write", title: "My worst day",
          prompt: "Write a story (120–150 words) about a day when everything went wrong. Use the past simple for the main events and the past perfect at least four times to explain what had happened before. Use *already, just* or *by the time*.",
          minWords: 120, maxWords: 150,
          model: "Last year I had a terrible day. I had an interview for a summer job at a hotel in Cancún, and I had prepared for a whole week. On the day of the interview, I woke up late because there had been a power cut during the night and my alarm hadn't worked. I got dressed quickly and ran outside, but it had just started to rain and I had forgotten my umbrella. When I got to the hotel, I was completely wet. Then the receptionist told me the manager had already left for lunch! I waited for an hour. By the time she came back, my clothes were almost dry. In the end, the interview went well and I got the job. It was a crazy day, but it had a happy ending.",
          bank: ["I had prepared…", "because I had forgotten…", "it had just started to…", "had already left", "By the time…", "In the end,"],
          checklist: [
            "I used the **past perfect** at least four times.",
            "I used the **past simple** for the main events.",
            "I used *already, just* or *by the time*.",
            "I checked my **past participles** (*gone, eaten, left…*)."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the short form *I'd* and *it'd*.",
          items: [
            "The movie had already started.",
            "The bus had just left.",
            "I'd left my wallet at home.",
            "I had never flown before.",
            "By the time I arrived, they'd gone.",
            "We hadn't eaten all day."
          ]
        },
        {
          type: "speak", title: "Excuses, excuses!",
          prompt: "Record yourself for one to two minutes. Tell the story of a time you arrived late or missed something important. Explain everything that had happened before. Use the past perfect at least four times.",
          language: ["It was a disaster.", "When I got there,… had already…", "I realized I had…", "…had just…", "By the time I arrived,…", "In the end,…"],
          seconds: 120,
          checklist: ["tell the events in a clear order?", "use the past perfect at least four times?", "use already, just or by the time?", "give an ending to your story?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can form the past perfect correctly.", review: "Explanation: past perfect form" },
    { can: "I can show which past action happened first.", review: "Explanation: two past actions; Reading activity 2" },
    { can: "I can use *already, just, never* and *by the time*.", review: "Explanation: common words with the past perfect" },
    { can: "I can choose between the past simple and the past perfect.", review: "Writing activities 1 and 2" },
    { can: "I can follow a story told with narrative tenses.", review: "Listening and Reading activities" },
    { can: "I can tell a story about a day when things went wrong.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
