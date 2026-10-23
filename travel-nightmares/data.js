window.UNIT = {
  slug: "travel-nightmares",
  number: 16,
  title: "Travel Nightmares",
  level: "B1",
  minutes: 60,
  speakers: { "Mariana": "f", "Jorge": "m", "Agent": "f", "Host": "m", "Wendy": "f" },
  focus: ["travel problems vocabulary", "so + adjective / adverb + that", "such (a / an) + adjective + noun + that", "so much / so many", "dealing with problems while traveling"],

  presentation: {
    scene: "✈️🧳⛈️😫",
    situation: "Mariana and Jorge are back from a trip to Peru. Jorge asks about the journey.",
    warmup: {
      prompt: "Which travel problems have you had? Choose all.",
      options: ["a delayed flight", "lost luggage", "a missed connection", "a bad hotel", "food poisoning", "a stolen wallet", "getting lost", "a canceled bus", "bad weather", "a sunburn", "an overbooked flight", "no phone signal"],
      response: "Oh no! In this unit you'll learn to describe travel problems and solve them."
    },
    dialogueTitle: "The trip from hell",
    dialogue: [
      { who: "Jorge", line: "So how was Peru? You look exhausted!" },
      { who: "Mariana", line: "Peru was amazing, but the journey was *such a nightmare that* I almost cried." },
      { who: "Jorge", line: "What happened?" },
      { who: "Mariana", line: "Our flight was delayed *for so long that* we missed our connection in Bogotá. Then the airline lost my suitcase." },
      { who: "Jorge", line: "No way! Did you get it back?" },
      { who: "Mariana", line: "Three days later. I had to buy clothes in Cusco. Everything was *so expensive that* I only bought two T-shirts." },
      { who: "Jorge", line: "At least you saw Machu Picchu, right?" },
      { who: "Mariana", line: "Yes, and it was *so beautiful that* I forgot all the problems. There were *so many* tourists, though!" }
    ]
  },

  objectives: [
    "I can describe common travel problems.",
    "I can use *so… that* and *such… that* to talk about results.",
    "I can use *so much* and *so many* for emphasis.",
    "I can explain a problem and ask for help while traveling."
  ],

  explanation: {
    vocabTitle: "Travel problems",
    vocab: [
      { word: "delayed", icon: "⏳" }, { word: "canceled", icon: "❌" }, { word: "miss a connection", icon: "🔗" },
      { word: "lost luggage", icon: "🧳" }, { word: "overbooked", icon: "💺" }, { word: "food poisoning", icon: "🤢" },
      { word: "jet lag", icon: "😵" }, { word: "pickpocket", icon: "👛" }, { word: "rip-off", icon: "💸" },
      { word: "a refund", icon: "💳" }, { word: "compensation", icon: "🎫" }, { word: "a complaint", icon: "📝" },
      { word: "the embassy", icon: "🏛️" }, { word: "travel insurance", icon: "🛡️" }, { word: "stranded", icon: "🏝️" }
    ],
    grammar: [
      {
        title: "So and such",
        head: ["Structure", "Example"],
        rows: [
          ["*so* + adjective + *that*", "It was *so expensive that* I only bought two T-shirts."],
          ["*so* + adverb + *that*", "He drove *so fast that* we were scared."],
          ["*such a / an* + adjective + singular noun + *that*", "It was *such a long flight that* I watched four movies."],
          ["*such* + adjective + plural / uncountable noun + *that*", "They were *such nice people that* we stayed in touch. / It was *such bad weather that*…"]
        ],
        note: "*That* is often omitted in speaking: *It was so cold we stayed inside.*"
      },
      {
        title: "So much / so many / so few / so little",
        head: ["Structure", "Example"],
        rows: [
          ["*so many* + plural noun", "There were *so many* tourists *that* we couldn't take photos."],
          ["*so much* + uncountable noun", "I had *so much* luggage *that* I paid extra."],
          ["*so few / so little*", "There were *so few* buses that we had to take a taxi."]
        ]
      }
    ],
    watchOut: [
      ["It was such expensive that I didn't buy it.", "It was so expensive that I didn't buy it."],
      ["It was so a long flight.", "It was such a long flight."],
      ["There were so much people.", "There were so many people."],
      ["They were such a nice people.", "They were such nice people."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *so, such, such a* or *so many*.",
      items: [
        "The hotel was [[so]] dirty that we left the next day.",
        "It was [[such a]] bad experience that I'll never forget it.",
        "There were [[so many]] people at the airport that we waited for hours.",
        "We had [[such]] terrible weather that we couldn't go to the beach."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to Mariana at the airline's lost luggage desk in Cusco.",
      title: "At the lost luggage desk",
      script: [
        { who: "Agent", line: "Good afternoon. How can I help you?" },
        { who: "Mariana", line: "Hi. I've just arrived from Bogotá on flight 284, and my suitcase didn't come out." },
        { who: "Agent", line: "I'm very sorry about that. Can you describe it, please?" },
        { who: "Mariana", line: "It's a large red suitcase with black wheels. It has a yellow ribbon on the handle." },
        { who: "Agent", line: "Thank you. Do you have your baggage tag?" },
        { who: "Mariana", line: "Yes, here it is. The thing is, I missed my original connection because the first flight was so late, so maybe the suitcase is still in Bogotá." },
        { who: "Agent", line: "That's very likely. It happens when connections are so short. I'll file a report now. We normally find bags within forty-eight hours." },
        { who: "Mariana", line: "Forty-eight hours? All my clothes are in it! Can I get compensation?" },
        { who: "Agent", line: "Yes. Keep the receipts for any essential things you buy, like clothes and toiletries, up to one hundred dollars. We'll send the suitcase to your hotel." },
        { who: "Mariana", line: "OK. I'm staying at the Hostal Inca, on Calle Plateros. Here's my phone number." }
      ],
      activities: [
        {
          type: "gap", title: "The report",
          prompt: "Listen and complete the lost luggage report.",
          items: [
            "Flight number: [[284]]",
            "Color of suitcase: [[red]]",
            "Something on the handle: a yellow [[ribbon]]",
            "Normal time to find bags: [[forty-eight|48|forty eight]] hours",
            "Maximum for essential things: [[one hundred|100|a hundred]] dollars",
            "Hotel: Hostal Inca, Calle [[Plateros]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Mariana's suitcase has black wheels.", a: true },
            { s: "Mariana doesn't have her baggage tag.", a: false },
            { s: "The suitcase is probably still in Bogotá.", a: true },
            { s: "The airline will pay for anything Mariana buys.", a: false },
            { s: "The airline will send the suitcase to her hotel.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three stories from a travel website: *My worst travel experience*.",
      title: "My worst travel experience",
      text: [
        { author: "Ulises, Monterrey", body: "I booked a \"beachfront\" hotel in Acapulco online. The photos looked so good that I didn't read the reviews. When I arrived, the beach was a twenty-minute drive away and the room had no window. It was such a rip-off that I complained to the website and got a fifty percent refund." },
        { author: "Diana, Mérida", body: "On a trip to Rome, a pickpocket stole my wallet on the metro. It happened so quickly that I didn't feel anything. I lost my cards, my cash and my ID. Luckily, my passport was in the hotel safe. My travel insurance paid for the cash, but canceling the cards took hours." },
        { author: "Tomás, Querétaro", body: "Our flight to Madrid was overbooked, and the airline asked for volunteers to take the next flight. My wife and I accepted. We got a night in a nice hotel, dinner and six hundred euros each in compensation. It was such a good deal that we celebrated! Sometimes problems become opportunities." }
      ],
      activities: [
        {
          type: "match", title: "Problem and result",
          prompt: "Match each problem with its result.",
          pairs: [
            ["Ulises's hotel was a rip-off,", "so he got a fifty percent refund."],
            ["The photos looked so good", "that Ulises didn't read the reviews."],
            ["The pickpocket was so quick", "that Diana didn't feel anything."],
            ["Tomás's flight was overbooked,", "so he took the next flight."],
            ["The compensation was so good", "that Tomás and his wife celebrated."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Ulises's hotel was on the beach.", a: false },
            { s: "Diana lost her passport.", a: false },
            { s: "Diana's insurance paid for the stolen cash.", a: true },
            { s: "Tomás was angry about the overbooked flight.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *so* and *such*, then write a complaint or a travel story.",
      activities: [
        {
          type: "rewrite", title: "So or such?",
          prompt: "Join the sentences with *so… that* or *such… that*.",
          items: [
            { q: "The flight was very long. I watched four movies. (such)", a: ["It was such a long flight that I watched four movies."] },
            { q: "The food was very spicy. I couldn't eat it. (so)", a: ["The food was so spicy that I couldn't eat it."] },
            { q: "They were very friendly people. We stayed in touch. (such)", a: ["They were such friendly people that we stayed in touch."] },
            { q: "There were a lot of mosquitoes. We couldn't sleep. (so many)", a: ["There were so many mosquitoes that we couldn't sleep."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "It was such a nightmare that I almost cried." },
            { a: "The hotel was so dirty that we left." },
            { a: "There were so many tourists at the pyramid." },
            { a: "Our flight was delayed for three hours." }
          ]
        },
        {
          type: "write", title: "A trip that went wrong",
          prompt: "Write a story (130–160 words) for a travel website about a trip that went wrong (real or invented). Describe the problems, how you solved them and what you learned. Use *so… that* and *such… that* at least four times in total.",
          minWords: 130, maxWords: 160,
          model: "Last December, my friends and I took a bus to Oaxaca for the holidays. It was such a cheap ticket that we didn't ask any questions. Big mistake! The bus was so old that the air conditioning didn't work, and after four hours it broke down in the middle of the mountains. We waited for so long that we ran out of water. Finally, another bus came, but it was so full that we had to stand for two hours. When we arrived, it was midnight and our hostel had given our beds to other people! The receptionist was such a kind woman that she called her cousin, who had a free room. In the end, the trip was great, but I learned two things: always read reviews, and always carry extra water.",
          bank: ["It was such a… that…", "It was so… that…", "There were so many…", "We waited for so long that…", "Luckily,", "In the end,", "I learned that…"],
          checklist: [
            "I used **so… that** at least twice.",
            "I used **such (a)… that** at least twice.",
            "I explained how the problems were **solved**.",
            "I said what I **learned**."
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
            "It was such a nightmare.",
            "It was so expensive that I didn't buy it.",
            "There were so many tourists.",
            "My suitcase didn't come out.",
            "Can I get compensation?",
            "Our flight was delayed for hours."
          ]
        },
        {
          type: "speak", title: "Report a problem",
          prompt: "Choose a travel problem (lost luggage, a bad hotel room, a canceled flight…). Record yourself for one to two minutes: first, explain the problem politely to the person who can help; then tell a friend about it using *so… that* and *such… that*.",
          language: ["Excuse me, I have a problem with…", "The thing is,…", "Could you…?", "It was so… that…", "It was such a… that…", "In the end,…"],
          seconds: 120,
          checklist: ["explain the problem politely?", "ask for a solution?", "use so… that and such… that?", "describe how it ended?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe common travel problems.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *so* + adjective + *that*.", review: "Explanation: so and such" },
    { can: "I can use *such (a)* + adjective + noun + *that*.", review: "Explanation: so and such; Writing activity 1" },
    { can: "I can use *so much* and *so many* correctly.", review: "Explanation: so much / so many" },
    { can: "I can report a lost suitcase or another problem.", review: "Listening activities 1 and 2" },
    { can: "I can tell a story about a trip that went wrong.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
