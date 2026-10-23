window.UNIT = {
  slug: "complaints-department",
  number: 44,
  title: "Complaints Department",
  level: "B1",
  minutes: 60,
  speakers: { "Customer Service": "f", "Óscar": "m", "Manager": "m", "Guest": "f" },
  focus: ["complaining about products and services", "polite requests: Would you mind + -ing?", "Could you possibly…? / I was wondering if…", "I'd like to complain about… / I'm afraid…", "writing a formal complaint email"],

  presentation: {
    scene: "📦😠📞✉️",
    situation: "Óscar ordered a pair of headphones online. When the package arrived, they were the wrong color and one side didn't work. He calls customer service.",
    warmup: {
      prompt: "Have you ever had one of these problems? Choose all.",
      options: ["a late delivery", "a broken product", "the wrong size", "a wrong charge on my card", "bad service in a restaurant", "a noisy hotel room", "a canceled order", "a missing item", "rude staff", "a product that looked different online", "no refund", "a long wait on the phone"],
      response: "Frustrating! In this unit you'll learn to complain politely and effectively."
    },
    dialogueTitle: "The wrong headphones",
    dialogue: [
      { who: "Customer Service", line: "Good afternoon, SoundShop. How can I help you?" },
      { who: "Óscar", line: "Hi. *I'd like to make a complaint.* I ordered black headphones, but I received white ones. *I'm afraid* the left side doesn't work, either." },
      { who: "Customer Service", line: "I'm very sorry to hear that. *Would you mind giving* me your order number?" },
      { who: "Óscar", line: "Sure, it's 4-5-8-2-7. *Could you possibly send* me the right ones this week? They're a birthday present." },
      { who: "Customer Service", line: "Let me check… Yes, we have them in stock. We'll send them tomorrow by express delivery." },
      { who: "Óscar", line: "Great. And *I was wondering if* you could pick up the wrong ones." },
      { who: "Customer Service", line: "Of course. A courier will collect them when he delivers the new pair. *I do apologize* for the inconvenience." },
      { who: "Óscar", line: "Thank you, that's very helpful." }
    ]
  },

  objectives: [
    "I can explain a problem with a product or service.",
    "I can make polite requests with *Would you mind…?* and *Could you possibly…?*",
    "I can complain firmly but politely.",
    "I can write a formal complaint email."
  ],

  explanation: {
    vocabTitle: "Complaints",
    vocab: [
      { word: "make a complaint", icon: "📢" }, { word: "faulty", icon: "⚠️" }, { word: "damaged", icon: "💔" },
      { word: "a refund", icon: "💳" }, { word: "an exchange", icon: "🔄" }, { word: "a replacement", icon: "📦" },
      { word: "a receipt", icon: "🧾" }, { word: "a warranty / guarantee", icon: "🛡️" }, { word: "an order number", icon: "🔢" },
      { word: "out of stock", icon: "🚫" }, { word: "an inconvenience", icon: "😩" }, { word: "compensation", icon: "🎟️" },
      { word: "unacceptable", icon: "❌" }, { word: "disappointed", icon: "😞" }, { word: "customer service", icon: "🎧" }
    ],
    grammar: [
      {
        title: "Polite requests",
        head: ["Structure", "Example"],
        rows: [
          ["*Would you mind* + -ing?", "*Would you mind giving* me your order number?"],
          ["*Could you possibly* + base verb?", "*Could you possibly send* them this week?"],
          ["*I was wondering if you could* + base verb", "*I was wondering if you could* pick them up."],
          ["*Would it be possible to* + base verb?", "*Would it be possible to* get a refund?"],
          ["*Do you think you could* + base verb?", "*Do you think you could* check it again?"]
        ],
        note: "Answering *Would you mind…?*: *Not at all.* / *No, of course not.* = Yes, I'll do it. (*Yes* would mean \"I do mind\"!)"
      },
      {
        title: "Complaining politely",
        head: ["Function", "Expressions"],
        rows: [
          ["starting", "*I'd like to make a complaint about… / I'm calling about…*"],
          ["explaining", "*I'm afraid… / Unfortunately,… / The problem is that…*"],
          ["being firm", "*I'm not happy with… / This is unacceptable. / I'd like a full refund.*"],
          ["apologizing (staff)", "*I'm very sorry to hear that. / I do apologize for the inconvenience.*"]
        ]
      }
    ],
    watchOut: [
      ["Would you mind to wait a moment?", "Would you mind waiting a moment?"],
      ["Could you possibly to help me?", "Could you possibly help me?"],
      ["Would you mind closing the window? – Yes, sure. (meaning OK)", "Would you mind closing the window? – Not at all."],
      ["I want my money back now!", "I'd like a full refund, please."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb.",
      items: [
        "Would you mind [[checking]] my order? (check)",
        "Could you possibly [[call]] me back later? (call)",
        "I was wondering if you could [[give]] me a refund. (give)",
        "Would it be possible [[to change|to exchange]] the size? (change)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a hotel guest complaining at the reception desk.",
      title: "A complaint at the hotel",
      script: [
        { who: "Manager", line: "Good morning. I'm the manager. I understand you have a problem with your room?" },
        { who: "Guest", line: "Yes. I'm afraid I'm not happy at all. I booked a quiet room with a sea view, but my room is next to the elevator and it looks at the parking lot." },
        { who: "Manager", line: "I'm very sorry to hear that." },
        { who: "Guest", line: "And that's not all. The air conditioning makes a terrible noise, and there was no hot water this morning. I couldn't sleep at all." },
        { who: "Manager", line: "I do apologize. That's unacceptable. Would you mind waiting a moment while I check our availability?" },
        { who: "Guest", line: "Not at all." },
        { who: "Manager", line: "Good news. We have a suite on the eighth floor with a sea view. We can move you there at no extra cost." },
        { who: "Guest", line: "That would be great. And I was wondering if you could do something about last night." },
        { who: "Manager", line: "Of course. We won't charge you for last night, and breakfast will be free for the rest of your stay." },
        { who: "Guest", line: "Thank you. That's very kind." }
      ],
      activities: [
        {
          type: "sort", title: "Problem or solution?",
          prompt: "Listen. Sort the sentences.",
          bins: ["Problem 😠", "Solution 🙂"],
          items: [
            { text: "The room is next to the elevator.", bin: 0 }, { text: "The room looks at the parking lot.", bin: 0 }, { text: "The air conditioning is noisy.", bin: 0 }, { text: "There was no hot water.", bin: 0 },
            { text: "a suite with a sea view", bin: 1 }, { text: "no charge for last night", bin: 1 }, { text: "free breakfast", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The guest booked a room with a sea view.", a: true },
            { s: "The guest slept very well.", a: false },
            { s: "The new suite is on the eighth floor.", a: true },
            { s: "The guest has to pay extra for the suite.", a: false },
            { s: "The guest says \"Not at all\" to mean she doesn't mind waiting.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a formal complaint email to an online store.",
      title: "A complaint email",
      text: [
        { body: "**Subject:** Complaint about order #78213" },
        { body: "Dear Customer Service Team," },
        { body: "I am writing to complain about a blender I ordered from your website on March 3rd (order #78213). I was told that it would arrive within three days, but it was delivered two weeks later." },
        { body: "Unfortunately, when I opened the box, I found that the glass jar was cracked. I have attached two photos of the damage. In addition, the instruction manual was missing." },
        { body: "As you can imagine, I am very disappointed, especially as the blender was quite expensive. I would be grateful if you could send me a replacement as soon as possible. Alternatively, I would like a full refund. Would you mind also arranging for the damaged blender to be collected from my home?" },
        { body: "I look forward to hearing from you soon.<br>Yours faithfully,<br>Patricia Gómez" }
      ],
      activities: [
        {
          type: "match", title: "The structure",
          prompt: "Match each part of the email with its purpose.",
          pairs: [
            ["\"I am writing to complain about…\"", "reason for writing"],
            ["\"Unfortunately, … the glass jar was cracked.\"", "describing the problem"],
            ["\"I have attached two photos…\"", "giving evidence"],
            ["\"I would be grateful if you could…\"", "requesting a solution"],
            ["\"I look forward to hearing from you.\"", "closing"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The blender arrived three days after the order.", a: false },
            { s: "The glass jar was damaged.", a: true },
            { s: "The manual was in the box.", a: false },
            { s: "Patricia wants a replacement or a refund.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice polite requests, then write a complaint email.",
      activities: [
        {
          type: "rewrite", title: "Make it polite",
          prompt: "Rewrite each request with the words in parentheses.",
          items: [
            { q: "Give me a refund. (Would it be possible…)", a: ["Would it be possible to give me a refund?", "Would it be possible to get a refund?"] },
            { q: "Check my order again. (Would you mind…)", a: ["Would you mind checking my order again?"] },
            { q: "Send me a new one. (Could you possibly…)", a: ["Could you possibly send me a new one?"] },
            { q: "Call me back. (I was wondering if…)", a: ["I was wondering if you could call me back."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I'd like to make a complaint." },
            { a: "Would you mind giving me your order number?" },
            { a: "I do apologize for the inconvenience." },
            { a: "I would be grateful if you could help." }
          ]
        },
        {
          type: "write", title: "My complaint email",
          prompt: "Write a formal complaint email (130–160 words) about a problem with a product or service (real or invented). Explain what you bought, what the problem is, how you feel, and what you want them to do. Use at least three polite request structures.",
          minWords: 130, maxWords: 160,
          model: "Subject: Complaint about my gym membership<br>Dear Sir or Madam,<br>I am writing to complain about the service at your gym on Avenida Juárez. I signed up for a one-year membership in January, which included access to the swimming pool and group classes. Unfortunately, the pool has been closed for repairs for six weeks, and nobody informed the members. In addition, three of my yoga classes were canceled at the last minute. I am very disappointed, as I chose your gym mainly because of the pool. I was wondering if you could tell me when the pool will open again. I would also be grateful if you could give me a partial refund or extend my membership by two months. Would you mind informing members by email when classes are canceled in the future?<br>I look forward to hearing from you.<br>Yours faithfully,<br>Héctor Salas",
          bank: ["I am writing to complain about…", "Unfortunately,…", "In addition,…", "I am very disappointed…", "I was wondering if you could…", "I would be grateful if you could…", "Would you mind…?", "Yours faithfully,"],
          checklist: [
            "I explained the **problem** clearly with details.",
            "I used at least **three** polite request structures.",
            "I said what **solution** I want.",
            "I used **formal** language (no contractions)."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Use a polite but firm tone.",
          items: [
            "I'd like to make a complaint.",
            "Would you mind giving me your number?",
            "Could you possibly send them this week?",
            "I'm afraid the left side doesn't work.",
            "I do apologize for the inconvenience.",
            "I'd like a full refund, please."
          ]
        },
        {
          type: "speak", title: "Make the call",
          prompt: "Choose a problem (a faulty product, a wrong order, a bad hotel room, a late delivery…). Record yourself for one to two minutes calling customer service: explain the problem, how it has affected you, and politely ask for a solution.",
          language: ["Hello, I'm calling about…", "I'd like to make a complaint.", "I'm afraid…", "Could you possibly…?", "Would you mind…?", "I'd like a refund / replacement."],
          seconds: 120,
          checklist: ["explain the problem with details?", "stay polite but firm?", "use at least three polite requests?", "ask for a specific solution?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can explain a problem with a product or service.", review: "Explanation: the vocabulary cards; Listening" },
    { can: "I can use *Would you mind* + *-ing*.", review: "Explanation: polite requests" },
    { can: "I can use *Could you possibly…?* and *I was wondering if…*", review: "Explanation: polite requests; Writing activity 1" },
    { can: "I can complain politely but firmly.", review: "Explanation: complaining politely" },
    { can: "I can understand a complaint conversation and email.", review: "Listening and Reading activities" },
    { can: "I can write a formal complaint email.", review: "Writing activity 3" }
  ]
};
