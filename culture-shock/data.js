window.UNIT = {
  slug: "culture-shock",
  number: 17,
  title: "Culture Shock",
  level: "B1",
  minutes: 60,
  speakers: { "Samantha": "f", "Héctor": "m", "Presenter": "f", "Aiko": "f", "Lars": "m" },
  focus: ["customs and etiquette vocabulary", "be supposed to / not supposed to", "be allowed to / not allowed to", "it's polite / rude / normal to…", "the stages of culture shock"],

  presentation: {
    scene: "🌏🙇🍽️🤔",
    situation: "Samantha is from Canada. She's been living in Puebla for two months on an exchange program. She's having lunch with her Mexican friend Héctor.",
    warmup: {
      prompt: "Which customs are typical in Mexico? Choose all.",
      options: ["greeting with a kiss on the cheek", "arriving exactly on time to a party", "saying \"provecho\" to people eating", "tipping in restaurants", "taking off your shoes at home", "eating lunch at 2 or 3 p.m.", "bowing to greet people", "using \"usted\" with older people", "eating with your hands (tacos!)", "calling people after 10 p.m."],
      response: "Every culture has its own rules! In this unit you'll learn to talk about customs and expectations."
    },
    dialogueTitle: "Lunch with Héctor",
    dialogue: [
      { who: "Samantha", line: "Héctor, can I ask you something? When I enter a restaurant, people say \"provecho\" to me. *Am I supposed to* answer?" },
      { who: "Héctor", line: "Ha! Yes, you just say \"gracias.\" *It's polite to* say \"provecho\" when you pass people who are eating." },
      { who: "Samantha", line: "In Canada we don't do that. Another thing: my friend invited me to a party at eight, and I arrived at eight. Nobody was there!" },
      { who: "Héctor", line: "Oh no. You're *not supposed to* arrive on time to a party here. Thirty minutes late is normal." },
      { who: "Samantha", line: "But for class we *aren't allowed to* arrive late!" },
      { who: "Héctor", line: "That's different. Parties are flexible, school and work aren't." },
      { who: "Samantha", line: "This is so confusing. I think I have culture shock!" }
    ]
  },

  objectives: [
    "I can talk about customs and etiquette in different countries.",
    "I can use *be supposed to* for expectations and rules.",
    "I can use *be allowed to* for permission.",
    "I can give advice to a visitor about my culture."
  ],

  explanation: {
    vocabTitle: "Customs and etiquette",
    vocab: [
      { word: "a custom", icon: "🎎" }, { word: "etiquette", icon: "🎩" }, { word: "polite", icon: "🙂" },
      { word: "rude", icon: "😠" }, { word: "offend", icon: "😤" }, { word: "bow", icon: "🙇" },
      { word: "shake hands", icon: "🤝" }, { word: "kiss on the cheek", icon: "😘" }, { word: "tip", icon: "💵" },
      { word: "punctual", icon: "⏰" }, { word: "a taboo", icon: "🚫" }, { word: "a host / a guest", icon: "🏠" },
      { word: "homesick", icon: "🏡" }, { word: "adapt", icon: "🦎" }, { word: "a misunderstanding", icon: "❓" }
    ],
    grammar: [
      {
        title: "Be supposed to",
        intro: "*Be supposed to* = what people expect you to do because of a rule or custom (but people don't always do it).",
        head: ["Form", "Example"],
        rows: [
          ["positive", "You*'re supposed to* take off your shoes in Japanese homes."],
          ["negative", "You*'re not supposed to* arrive on time to a party."],
          ["question", "*Am I supposed to* answer?"],
          ["past (expected but didn't happen)", "The bus *was supposed to* arrive at six, but it came at seven."]
        ]
      },
      {
        title: "Be allowed to and other expressions",
        head: ["Expression", "Meaning", "Example"],
        rows: [
          ["*be allowed to*", "it's permitted", "You*'re allowed to* bring your own wine."],
          ["*not be allowed to*", "it's prohibited", "You*'re not allowed to* smoke inside."],
          ["*It's polite / rude to…*", "social opinion", "*It's rude to* point at people."],
          ["*It's normal / common to…*", "what usually happens", "*It's common to* greet everyone in the room."]
        ],
        note: "*Supposed* is pronounced /səˈpoʊstə/. Don't forget *be*: *You're supposed to*, not *You supposed to*."
      }
    ],
    watchOut: [
      ["You supposed to tip the waiter.", "You're supposed to tip the waiter."],
      ["We don't allowed to use phones.", "We aren't allowed to use phones."],
      ["Is rude to point at people.", "It's rude to point at people."],
      ["Am I suppose to bring a gift?", "Am I supposed to bring a gift?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *supposed* or *allowed* and the correct form of *be*.",
      items: [
        "In Japan, you [[are supposed|'re supposed]] to bow when you greet someone.",
        "You [[aren't allowed|are not allowed|'re not allowed]] to take photos in the museum.",
        "The meeting [[was supposed]] to start at nine, but it started at ten.",
        "[[Are]] we [[allowed]] to use dictionaries in the exam?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio program where two exchange students talk about culture shock in Mexico.",
      title: "Culture shock stories",
      script: [
        { who: "Presenter", line: "Today we're talking to two exchange students about culture shock. Aiko, you're from Japan. What surprised you most in Mexico?" },
        { who: "Aiko", line: "The greetings! In Japan we bow, and we don't touch people we don't know. Here, the first day, a woman kissed me on the cheek. I was so shocked that I didn't move!" },
        { who: "Presenter", line: "Ha! And now?" },
        { who: "Aiko", line: "Now I'm used to it. I even like it. Another thing: in Japan you're not supposed to eat while walking in the street. Here everybody eats tacos and elotes on the street!" },
        { who: "Presenter", line: "Lars, you're from Norway." },
        { who: "Lars", line: "Yes. For me, the biggest shock was time. In Norway, if a meeting is at nine, you're supposed to be there at five to nine. Here, nine can mean nine thirty." },
        { who: "Presenter", line: "Does that annoy you?" },
        { who: "Lars", line: "At first, yes. But I learned that relationships are more important than the clock here. People talk more and they're very warm. And I love that you're allowed to bring your dog to many cafés!" },
        { who: "Presenter", line: "Any advice for new exchange students?" },
        { who: "Aiko", line: "Be patient with yourself. The first months are hard, but it gets better." }
      ],
      activities: [
        {
          type: "sort", title: "Aiko or Lars?",
          prompt: "Listen. Who mentioned each thing?",
          bins: ["Aiko (Japan)", "Lars (Norway)"],
          items: [
            { text: "bowing", bin: 0 }, { text: "a kiss on the cheek", bin: 0 }, { text: "eating while walking", bin: 0 }, { text: "being patient with yourself", bin: 0 },
            { text: "arriving at five to nine", bin: 1 }, { text: "relationships vs. the clock", bin: 1 }, { text: "dogs in cafés", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "In Japan, people usually kiss when they meet.", a: false },
            { s: "Aiko still doesn't like Mexican greetings.", a: false },
            { s: "In Japan, you're not supposed to eat while walking in the street.", a: true },
            { s: "In Norway, people are very punctual.", a: true },
            { s: "Lars is still very annoyed about time in Mexico.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from an international students' magazine.",
      title: "The four stages of culture shock",
      text: [
        { body: "**1. The honeymoon stage.** Everything is new and exciting. You love the food, the people and the streets. You take hundreds of photos. This stage can last a few days or a few weeks." },
        { body: "**2. The frustration stage.** The differences start to annoy you. You don't understand what you're supposed to do in many situations, and small problems feel huge. Many people feel homesick, tired or even angry. This is the hardest stage." },
        { body: "**3. The adjustment stage.** Slowly, you start to understand the culture. You learn the unwritten rules: when it's polite to arrive, how you're supposed to greet people, what you're not allowed to say. You make local friends and feel more comfortable." },
        { body: "**4. The acceptance stage.** You feel at home. You don't love everything, but you accept the differences. Some people even experience \"reverse culture shock\" when they go back to their own country!" }
      ],
      activities: [
        {
          type: "match", title: "The stages",
          prompt: "Match each stage with a typical feeling or experience.",
          pairs: [
            ["The honeymoon stage", "Everything is new and exciting."],
            ["The frustration stage", "Small problems feel huge."],
            ["The adjustment stage", "You learn the unwritten rules."],
            ["The acceptance stage", "You feel at home."],
            ["Reverse culture shock", "You feel strange back in your own country."]
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          prompt: "Make sentences from the article.",
          items: [
            { a: "This is the hardest stage." },
            { a: "Many people feel homesick." },
            { a: "You make local friends." },
            { a: "You accept the differences." }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the expressions, then write a guide for visitors to Mexico.",
      activities: [
        {
          type: "rewrite", title: "Rewrite the rules",
          prompt: "Rewrite each sentence with the expression in parentheses.",
          items: [
            { q: "People expect you to tip about ten percent. (supposed)", a: ["You're supposed to tip about ten percent.", "You are supposed to tip about ten percent."] },
            { q: "Smoking in restaurants is prohibited. (allowed)", a: ["You aren't allowed to smoke in restaurants.", "You're not allowed to smoke in restaurants.", "You are not allowed to smoke in restaurants."] },
            { q: "Pointing at people isn't polite. (rude)", a: ["It's rude to point at people.", "It is rude to point at people."] },
            { q: "The train was expected at five, but it was late. (supposed)", a: ["The train was supposed to arrive at five, but it was late.", "The train was supposed to be here at five, but it was late."] }
          ]
        },
        {
          type: "gap", title: "Customs around the world",
          prompt: "Complete with *supposed, allowed, polite* or *rude*.",
          items: [
            "In China, it's [[rude]] to write someone's name in red ink.",
            "In Germany, you're [[supposed]] to be very punctual.",
            "In Brazil, it's [[polite]] to greet everyone with a kiss.",
            "In Singapore, you aren't [[allowed]] to chew gum in public places."
          ]
        },
        {
          type: "write", title: "A guide for visitors",
          prompt: "Write a short guide (130–160 words) for an exchange student coming to Mexico (or your region). Explain at least five customs: greetings, punctuality, eating, visiting homes, tipping… Use *be supposed to, be allowed to* and *it's polite / rude to*.",
          minWords: 130, maxWords: 160,
          model: "Welcome to Puebla! Here are some tips to avoid misunderstandings. First, greetings: when you meet friends, it's normal to kiss on the cheek, but in formal situations you're supposed to shake hands. Second, time: you're supposed to arrive on time for classes and work, but at parties, nobody expects you to be punctual. If you're invited to someone's home, it's polite to bring something, like dessert or drinks. At lunch, which is usually at two or three, it's rude to leave right after eating; people like to stay and talk. This is called \"sobremesa.\" In restaurants, you're supposed to leave a tip of about ten or fifteen percent. Finally, you aren't allowed to drink alcohol in the street, so be careful. Don't worry if you make mistakes: Mexicans are very friendly and patient!",
          bank: ["You're supposed to…", "You're not supposed to…", "You aren't allowed to…", "It's polite to…", "It's rude to…", "It's normal to…"],
          checklist: [
            "I explained at least **five** customs.",
            "I used **be supposed to** correctly.",
            "I used **be allowed to** correctly.",
            "I used **It's polite / rude to…**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the pronunciation of *supposed to*.",
          items: [
            "Am I supposed to answer?",
            "You're not supposed to arrive on time.",
            "It's polite to say thank you.",
            "We aren't allowed to arrive late.",
            "It's rude to point at people.",
            "I think I have culture shock!"
          ]
        },
        {
          type: "speak", title: "Explain your culture",
          prompt: "A foreign student asks you: *\"What should I know about Mexican customs?\"* Record yourself for one to two minutes explaining at least five customs and what visitors are supposed to do, are allowed to do and shouldn't do.",
          language: ["In Mexico, it's normal to…", "You're supposed to…", "You're not allowed to…", "It's considered rude to…", "Don't worry if…", "My best advice is…"],
          seconds: 120,
          checklist: ["explain at least five customs?", "use be supposed to?", "use be allowed to?", "give friendly advice?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about customs and etiquette.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *be supposed to* for expectations.", review: "Explanation: be supposed to; Writing activity 1" },
    { can: "I can use *be allowed to* for permission and prohibition.", review: "Explanation: be allowed to" },
    { can: "I can use *It's polite / rude to…*", review: "Writing activity 2" },
    { can: "I can understand people describing culture shock.", review: "Listening and Reading activities" },
    { can: "I can explain my culture to a visitor.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
