window.UNIT = {
  slug: "a-greener-city",
  number: 36,
  title: "A Greener City",
  level: "B1",
  minutes: 60,
  speakers: { "Elisa": "f", "Ramón": "m", "Chair": "f", "Mr. Lozano": "m", "Student": "f" },
  focus: ["urban and environmental vocabulary", "suggestions: How about / What about + -ing", "Why don't we / Let's / Shall we + verb", "I suggest (that) / I recommend + -ing", "responding to suggestions"],

  presentation: {
    scene: "🌳🚲🏙️♻️",
    situation: "Elisa and Ramón are members of the environmental club at the university. They're planning a project to make their campus greener.",
    warmup: {
      prompt: "Which of these would make your city greener? Choose all.",
      options: ["more trees", "bike lanes", "better public transport", "recycling bins", "rooftop gardens", "fewer cars downtown", "solar panels", "more parks", "electric buses", "community gardens", "water fountains", "car-free Sundays"],
      response: "Great ideas! In this unit you'll learn to make and respond to suggestions."
    },
    dialogueTitle: "Planning the project",
    dialogue: [
      { who: "Ramón", line: "OK, we have a small budget. What should we do first?" },
      { who: "Elisa", line: "*How about planting* trees in the parking lot? It's so hot there." },
      { who: "Ramón", line: "Good idea, but it's expensive. *Why don't we start* with recycling bins? We could put them in every building." },
      { who: "Elisa", line: "*That's a great idea.* And *what about organizing* a bike-to-school day once a month?" },
      { who: "Ramón", line: "*I'm not sure about that.* A lot of students live far away. *I suggest asking* the students first." },
      { who: "Elisa", line: "Fair enough. *Let's create* an online survey." },
      { who: "Ramón", line: "Perfect. *Shall we meet* again on Friday to see the results?" }
    ]
  },

  objectives: [
    "I can talk about environmental problems in cities.",
    "I can make suggestions with different structures.",
    "I can accept or reject suggestions politely.",
    "I can participate in a discussion to plan a project."
  ],

  explanation: {
    vocabTitle: "A green city",
    vocab: [
      { word: "air pollution", icon: "🏭" }, { word: "traffic congestion", icon: "🚗" }, { word: "a bike lane", icon: "🚲" },
      { word: "public transport", icon: "🚌" }, { word: "green spaces", icon: "🌳" }, { word: "a rooftop garden", icon: "🪴" },
      { word: "recycling", icon: "♻️" }, { word: "compost", icon: "🍂" }, { word: "renewable energy", icon: "☀️" },
      { word: "a carbon footprint", icon: "👣" }, { word: "pedestrian", icon: "🚶" }, { word: "litter", icon: "🗑️" },
      { word: "sustainable", icon: "🌱" }, { word: "reduce, reuse, recycle", icon: "🔄" }, { word: "single-use plastic", icon: "🥤" }
    ],
    grammar: [
      {
        title: "Making suggestions",
        head: ["Structure", "Example"],
        rows: [
          ["*How about / What about* + -ing?", "*How about planting* trees?"],
          ["*Why don't we / you* + base verb?", "*Why don't we start* with recycling bins?"],
          ["*Let's* + base verb", "*Let's create* an online survey."],
          ["*Shall we* + base verb?", "*Shall we meet* on Friday?"],
          ["*We could* + base verb", "*We could put* bins in every building."],
          ["*I suggest* + -ing / *I suggest (that) we* + base verb", "*I suggest asking* the students. / *I suggest that we ask* them."]
        ],
        note: "Never say *I suggest to ask*. Use *I suggest asking* or *I suggest that we ask*."
      },
      {
        title: "Responding to suggestions",
        head: ["Accepting", "Not sure / rejecting politely"],
        rows: [
          ["*That's a great idea!*", "*I'm not sure about that.*"],
          ["*Sounds good to me.*", "*That might be difficult because…*"],
          ["*Why not?*", "*I see your point, but…*"],
          ["*Fair enough.*", "*What if we… instead?*"]
        ]
      }
    ],
    watchOut: [
      ["How about to plant trees?", "How about planting trees?"],
      ["I suggest to recycle more.", "I suggest recycling more."],
      ["Why we don't use bikes?", "Why don't we use bikes?"],
      ["Let's to go by bus.", "Let's go by bus."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb.",
      items: [
        "How about [[using]] public transport? (use)",
        "Why don't we [[organize]] a cleanup day? (organize)",
        "I suggest [[reducing]] single-use plastic. (reduce)",
        "Let's [[plant]] some trees this weekend. (plant)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a neighborhood meeting about how to improve a local park.",
      title: "The neighborhood meeting",
      script: [
        { who: "Chair", line: "Good evening, everyone. Tonight we're discussing ideas for Parque Juárez. The city has given us one hundred and fifty thousand pesos. Who wants to start?" },
        { who: "Mr. Lozano", line: "I'll start. The park is very dark at night. I suggest installing solar lights. They're safe and they don't use electricity from the grid." },
        { who: "Chair", line: "That's a good point. Any other ideas?" },
        { who: "Student", line: "What about creating a community garden? Families could grow vegetables, and kids could learn about nature." },
        { who: "Mr. Lozano", line: "I like that, but who would take care of it?" },
        { who: "Student", line: "Why don't we ask the local school? The students could help as part of their science class." },
        { who: "Chair", line: "Sounds good to me. We also have a problem with litter." },
        { who: "Mr. Lozano", line: "How about putting recycling bins near the entrances? And we could organize a cleanup day once a month." },
        { who: "Chair", line: "Great. Shall we vote? First option: solar lights. Second: community garden. Third: recycling bins and cleanup days." }
      ],
      activities: [
        {
          type: "match", title: "Who suggested what?",
          prompt: "Match each suggestion with the reason or detail.",
          pairs: [
            ["Solar lights", "because the park is dark at night."],
            ["A community garden", "so families can grow vegetables."],
            ["Asking the local school", "so students can take care of the garden."],
            ["Recycling bins", "near the entrances."],
            ["A cleanup day", "once a month."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The city gave them 150,000 pesos.", a: true },
            { s: "Mr. Lozano suggested a community garden.", a: false },
            { s: "Solar lights don't use electricity from the grid.", a: true },
            { s: "The park has a problem with litter.", a: true },
            { s: "They decided on solar lights at the end.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about green ideas from cities around the world.",
      title: "Five cities, five green ideas",
      text: [
        { body: "**Copenhagen, Denmark.** More than 60% of people go to work or school by bike. How? The city built bike \"highways\" with traffic lights for cyclists." },
        { body: "**Curitiba, Brazil.** Instead of building an expensive metro, Curitiba created a fast bus system with special lanes. It's cheap, efficient and copied by more than 150 cities." },
        { body: "**Singapore.** The government requires new buildings to replace the green space they use with gardens on rooftops and walls. Today, the city has \"vertical forests.\"" },
        { body: "**Mexico City.** On Sundays, the Paseo de la Reforma is closed to cars, and thousands of people walk, run and cycle. The program, *Muévete en Bici*, started in 2007." },
        { body: "**Medellín, Colombia.** The city created \"green corridors\": streets full of trees and plants that reduce the temperature by up to 2°C. Why don't more cities try this? It's cheap and it works." }
      ],
      activities: [
        {
          type: "match", title: "City and idea",
          prompt: "Match each city with its green idea.",
          pairs: [
            ["Copenhagen", "bike highways with special traffic lights"],
            ["Curitiba", "a fast bus system with special lanes"],
            ["Singapore", "gardens on rooftops and walls"],
            ["Mexico City", "streets closed to cars on Sundays"],
            ["Medellín", "green corridors that reduce the temperature"]
          ]
        },
        {
          type: "rewrite", title: "Suggest it for your city",
          prompt: "Make suggestions for your city with the structure in parentheses.",
          items: [
            { q: "build bike highways (Why don't we…?)", a: ["Why don't we build bike highways?"] },
            { q: "close the main street to cars on Sundays (How about…?)", a: ["How about closing the main street to cars on Sundays?"] },
            { q: "plant green corridors (I suggest…)", a: ["I suggest planting green corridors.", "I suggest that we plant green corridors."] },
            { q: "create rooftop gardens (Let's…)", a: ["Let's create rooftop gardens."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice suggestion structures, then write a proposal.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each suggestion has one mistake. Write it correctly.",
          items: [
            { q: "What about to use reusable bags?", a: ["What about using reusable bags?"] },
            { q: "I suggest to take the bus.", a: ["I suggest taking the bus.", "I suggest that we take the bus.", "I suggest that you take the bus."] },
            { q: "Why we don't plant more trees?", a: ["Why don't we plant more trees?"] },
            { q: "Shall we to meet tomorrow?", a: ["Shall we meet tomorrow?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "How about planting trees in the parking lot?" },
            { a: "Why don't we start with recycling bins?" },
            { a: "I suggest asking the students first." },
            { a: "That might be difficult because of the cost." }
          ]
        },
        {
          type: "write", title: "A proposal for a greener campus",
          prompt: "Write an email (130–160 words) to your university's environmental committee suggesting how to make your campus or neighborhood greener. Describe the problem, make at least four suggestions using different structures, and explain the benefits.",
          minWords: 130, maxWords: 160,
          model: "Dear members of the Environmental Committee,<br>I am writing to suggest some ideas to make our campus greener. At the moment, there is a lot of litter near the cafeterias, and many students use single-use plastic bottles every day. First, I suggest installing water fountains in every building, so students can refill their bottles. Second, why don't we put recycling bins for plastic, paper and organic waste next to each cafeteria? Third, how about creating a small community garden behind the library? Students from biology and agronomy could take care of it, and we could use the compost from the cafeterias. Finally, we could organize a \"Green Week\" every semester with workshops and a campus cleanup. These ideas are not expensive, and they would reduce waste and help students learn about sustainability.<br>Best regards,<br>Diana Flores",
          bank: ["I am writing to suggest…", "I suggest -ing…", "Why don't we…?", "How about -ing…?", "We could…", "This would…", "Best regards,"],
          checklist: [
            "I described the **problem**.",
            "I made at least **four** suggestions with **different** structures.",
            "I used the **-ing** form after *how about* and *suggest*.",
            "I explained the **benefits**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Use friendly intonation.",
          items: [
            "How about planting trees?",
            "Why don't we start with recycling?",
            "I suggest asking the students first.",
            "Let's create an online survey.",
            "Shall we meet again on Friday?",
            "That's a great idea!"
          ]
        },
        {
          type: "speak", title: "Pitch your idea",
          prompt: "Record a one- to two-minute presentation for your city council. Describe an environmental problem in your city (traffic, pollution, litter, lack of parks…) and suggest at least four solutions. Use different structures for suggestions.",
          language: ["One big problem in my city is…", "I suggest -ing…", "Why don't we…?", "How about -ing…?", "We could…", "This would help because…"],
          seconds: 120,
          checklist: ["describe a problem clearly?", "make at least four suggestions?", "use different structures?", "explain the benefits?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about environmental problems in cities.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can use *How about / What about* + *-ing*.", review: "Explanation: making suggestions" },
    { can: "I can use *Why don't we / Let's / Shall we*.", review: "Explanation: making suggestions" },
    { can: "I can use *suggest* correctly.", review: "Explanation: making suggestions note; Writing activity 1" },
    { can: "I can accept or reject suggestions politely.", review: "Explanation: responding to suggestions" },
    { can: "I can propose a plan to make my city greener.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
