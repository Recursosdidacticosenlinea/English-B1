window.UNIT = {
  slug: "where-to-stay",
  number: 18,
  title: "Where to Stay",
  level: "B1",
  minutes: 60,
  speakers: { "Lucía": "f", "Marco": "m", "Receptionist": "f", "Guest": "m" },
  focus: ["types of accommodation", "much / far / a lot / a bit + comparative", "not nearly as… as / nowhere near as", "the more…, the more…", "comparing and choosing options"],

  presentation: {
    scene: "🏨🏕️🏡🛏️",
    situation: "Lucía and Marco are planning a weekend trip to Valle de Bravo. They are comparing places to stay on their laptops.",
    warmup: {
      prompt: "Where do you prefer to stay when you travel? Choose all.",
      options: ["a hotel", "a hostel", "an apartment rental", "a campsite", "a cabin", "a friend's house", "a resort", "a bed and breakfast", "a glamping tent", "a boutique hotel"],
      response: "Nice! In this unit you'll learn to compare options in more detail."
    },
    dialogueTitle: "Comparing options",
    dialogue: [
      { who: "Lucía", line: "Look at this cabin. It's *much cheaper than* the hotel, and it has a view of the lake." },
      { who: "Marco", line: "Yes, but it's *far more basic*. There's no Wi-Fi!" },
      { who: "Lucía", line: "That's the point! We need to relax. *The less* we use our phones, *the better*." },
      { who: "Marco", line: "Hmm. What about this apartment? It's *a bit more expensive than* the cabin, but it's *a lot closer to* the town." },
      { who: "Lucía", line: "True, but the reviews are *nowhere near as good as* the cabin's." },
      { who: "Marco", line: "OK, you win. *The sooner* we book, *the better*. There aren't many free dates." },
      { who: "Lucía", line: "Booking now!" }
    ]
  },

  objectives: [
    "I can talk about different types of accommodation.",
    "I can make comparisons stronger or weaker with *much, far, a bit*.",
    "I can use *the more…, the more…* to show how things change together.",
    "I can compare options and justify a choice."
  ],

  explanation: {
    vocabTitle: "Accommodation",
    vocab: [
      { word: "a hostel", icon: "🛏️" }, { word: "a cabin", icon: "🏡" }, { word: "a campsite", icon: "⛺" },
      { word: "a resort", icon: "🏝️" }, { word: "a vacation rental", icon: "🔑" }, { word: "a single / double room", icon: "🚪" },
      { word: "a shared bathroom", icon: "🚿" }, { word: "check in / check out", icon: "🛎️" }, { word: "fully booked", icon: "📅" },
      { word: "all-inclusive", icon: "🍹" }, { word: "breakfast included", icon: "🥐" }, { word: "spacious", icon: "📐" },
      { word: "cozy", icon: "🧸" }, { word: "basic", icon: "📦" }, { word: "good value", icon: "💲" }
    ],
    grammar: [
      {
        title: "Big and small differences",
        head: ["Difference", "Modifier", "Example"],
        rows: [
          ["big", "*much / far / a lot* + comparative", "The cabin is *much cheaper than* the hotel. / It's *far more basic*."],
          ["small", "*a bit / slightly / a little* + comparative", "The apartment is *a bit more expensive*."],
          ["not equal (big)", "*not nearly as / nowhere near as… as*", "The reviews are *nowhere near as good as* the cabin's."],
          ["almost equal", "*almost / nearly as… as*", "The hostel is *almost as comfortable as* a hotel."]
        ],
        note: "Don't use *very* with comparatives: *much better*, not *very better*."
      },
      {
        title: "The more…, the more…",
        intro: "Use this structure to show that two things change together.",
        head: ["Structure", "Example"],
        rows: [
          ["*the* + comparative, *the* + comparative", "*The more* you pay, *the better* the room."],
          ["*the more / less* + noun", "*The more* stars a hotel has, *the more* services it offers."],
          ["short expressions", "*The sooner, the better.* / *The bigger, the better.*"]
        ]
      }
    ],
    watchOut: [
      ["The hotel is very more expensive.", "The hotel is much more expensive."],
      ["More you travel, more you learn.", "The more you travel, the more you learn."],
      ["It's a bit more cheaper.", "It's a bit cheaper."],
      ["It's not nearly as good than the cabin.", "It's not nearly as good as the cabin."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "This room is [[much|far|a lot]] bigger than the other one. (big difference)",
        "The hostel is [[slightly|a bit|a little]] more expensive than the campsite. (small difference)",
        "The [[more]] you book in advance, the cheaper it is.",
        "The cabin isn't nearly [[as]] comfortable as the hotel."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a guest calling a hotel to ask about rooms.",
      title: "Booking a room",
      script: [
        { who: "Receptionist", line: "Good morning, Hotel Mirador. How can I help you?" },
        { who: "Guest", line: "Hi. I'd like some information about rooms for next weekend, Friday and Saturday." },
        { who: "Receptionist", line: "Of course. We have standard rooms and superior rooms. The standard rooms are one thousand two hundred pesos per night." },
        { who: "Guest", line: "And the superior rooms?" },
        { who: "Receptionist", line: "They're one thousand five hundred. They're slightly more expensive, but they're much bigger and they have a balcony with a view of the lake." },
        { who: "Guest", line: "Is breakfast included?" },
        { who: "Receptionist", line: "Yes, in both. And if you stay three nights or more, you get a fifteen percent discount. The longer you stay, the more you save." },
        { who: "Guest", line: "Interesting. What time is check-out?" },
        { who: "Receptionist", line: "Twelve noon. But late check-out until three is possible for an extra three hundred pesos." },
        { who: "Guest", line: "OK. I'll take a superior room for two nights, please. The name is Arturo Medina." }
      ],
      activities: [
        {
          type: "gap", title: "Booking details",
          prompt: "Listen and complete the information.",
          items: [
            "Standard room: [[1,200|1200|one thousand two hundred]] pesos per night",
            "Superior room: [[1,500|1500|one thousand five hundred]] pesos per night",
            "Superior rooms have a [[balcony]] with a view of the lake.",
            "Discount for three nights or more: [[15|fifteen]] percent",
            "Late check-out until three costs [[300|three hundred]] pesos."
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The guest wants a room for Friday and Saturday.", a: true },
            { s: "Superior rooms are much more expensive than standard rooms.", a: false },
            { s: "Breakfast is only included in superior rooms.", a: false },
            { s: "Check-out is at twelve noon.", a: true },
            { s: "The guest books a standard room.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read three online reviews of places to stay in San Cristóbal de las Casas.",
      title: "Reviews: where to stay in San Cristóbal",
      text: [
        { author: "Casa Luna Hostel ★★★★☆", body: "Perfect for backpackers! It's far cheaper than a hotel (only 250 pesos for a bed in a shared room), and the atmosphere is great. The bathrooms are a bit basic, but they're clean. The more people you meet, the more fun it is, and here you meet everyone." },
        { author: "Hotel Colonial Real ★★★★★", body: "A beautiful old building with a garden. It's much more expensive than other places in the area, but the rooms are spacious and the breakfast is amazing. If you want comfort and quiet, this is the place. It's slightly far from the center: about fifteen minutes on foot." },
        { author: "Cabañas del Bosque ★★★☆☆", body: "The cabins are cozy and the forest is beautiful, but it's nowhere near as convenient as staying in town. You need a car or a taxi for everything. It was also a lot colder than we expected at night. Bring warm clothes!" }
      ],
      activities: [
        {
          type: "sort", title: "Which place?",
          prompt: "Match each description with the place.",
          bins: ["Casa Luna Hostel", "Hotel Colonial Real", "Cabañas del Bosque"],
          items: [
            { text: "cheapest option", bin: 0 }, { text: "good for meeting people", bin: 0 },
            { text: "spacious rooms and a garden", bin: 1 }, { text: "fifteen minutes from the center", bin: 1 },
            { text: "in a forest", bin: 2 }, { text: "cold at night", bin: 2 }, { text: "you need a car or taxi", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Compare the places",
          prompt: "Rewrite using the words in parentheses.",
          items: [
            { q: "The hostel is cheaper than the hotel. (far)", a: ["The hostel is far cheaper than the hotel."] },
            { q: "The cabins are less convenient than the town. (nowhere near as)", a: ["The cabins are nowhere near as convenient as the town.", "Staying in the cabins is nowhere near as convenient as staying in town."] },
            { q: "If you meet more people, it's more fun. (the more…)", a: ["The more people you meet, the more fun it is."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice comparisons, then recommend a place to stay.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "This hotel is very more comfortable.", a: ["This hotel is much more comfortable.", "This hotel is far more comfortable.", "This hotel is a lot more comfortable."] },
            { q: "The more you pay, better the service.", a: ["The more you pay, the better the service."] },
            { q: "The cabin is a bit more bigger.", a: ["The cabin is a bit bigger."] },
            { q: "The hostel isn't nearly as quiet than the hotel.", a: ["The hostel isn't nearly as quiet as the hotel.", "The hostel is not nearly as quiet as the hotel."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The sooner we book, the better." },
            { a: "It's much cheaper than the hotel." },
            { a: "The room is slightly bigger." },
            { a: "It's nowhere near as good as the cabin." }
          ]
        },
        {
          type: "write", title: "My recommendation",
          prompt: "A friend is visiting your city or a place you know. Write a message (120–150 words) comparing two or three places to stay and recommending one. Use *much / far / a bit* + comparative, *not nearly as… as* and *the more…, the more…*.",
          minWords: 120, maxWords: 150,
          model: "Hi Elena! I've been looking at places for your visit to Puebla. There are three good options. The first is a hostel in the historic center. It's far cheaper than the others, only 300 pesos a night, but the rooms are shared and it's a bit noisy at night. The second is an apartment in Cholula. It's slightly more expensive, but it's much more spacious and it has a kitchen. However, it's nowhere near as central as the hostel, so you'd need Uber. The third is a boutique hotel. It's beautiful, but it costs a lot more than the others. I recommend the apartment. You're staying for a week, and the longer you stay, the more useful a kitchen is! Let me know soon. The sooner you book, the better.",
          bank: ["far cheaper than", "slightly more expensive", "much more spacious", "nowhere near as… as", "The longer you stay, the…", "I recommend…", "The sooner, the better."],
          checklist: [
            "I compared at least **two** places.",
            "I used **much / far / a bit** with comparatives.",
            "I used **not nearly / nowhere near as… as**.",
            "I used **the more…, the more…** and made a recommendation."
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
            "It's much cheaper than the hotel.",
            "It's a bit more expensive.",
            "The less we use our phones, the better.",
            "The sooner we book, the better.",
            "It's nowhere near as good.",
            "Is breakfast included?"
          ]
        },
        {
          type: "speak", title: "Hotel, hostel or cabin?",
          prompt: "Record yourself for one to two minutes. Compare three types of accommodation (for example: hotel, hostel and cabin). Talk about price, comfort, location and atmosphere, and say which one you'd choose for a weekend trip and why.",
          language: ["A hotel is much more… than…", "A hostel is far cheaper…", "A cabin isn't nearly as… as…", "The more…, the more…", "Personally, I'd choose…", "because…"],
          seconds: 120,
          checklist: ["compare three types of accommodation?", "use much / far / a bit + comparative?", "use the more…, the more…?", "explain your choice?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about different types of accommodation.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can use *much, far, a lot* for big differences.", review: "Explanation: big and small differences" },
    { can: "I can use *a bit, slightly* for small differences.", review: "Explanation: big and small differences" },
    { can: "I can use *the more…, the more…*", review: "Explanation: the more…, the more…; Reading activity 2" },
    { can: "I can get information when booking a room.", review: "Listening activities 1 and 2" },
    { can: "I can compare options and recommend one.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
