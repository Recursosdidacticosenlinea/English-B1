window.UNIT = {
  slug: "persuade-me",
  number: 48,
  title: "Persuade Me!",
  level: "B1",
  minutes: 60,
  speakers: { "Andrea": "f", "Toño": "m", "Narrator": "m", "Salesperson": "f", "Customer": "m" },
  focus: ["advertising and persuasion vocabulary", "negative questions: Don't you think…? Wouldn't it be…?", "persuasive expressions: Imagine…, Just think…", "emphasis with do / does / did", "persuading friends and customers"],

  presentation: {
    scene: "📣🛍️🗳️🤝",
    situation: "Andrea wants her friend Toño to join her on a volunteer trip to build houses in Chiapas. Toño isn't sure.",
    warmup: {
      prompt: "What usually persuades you to do or buy something? Choose all.",
      options: ["a friend's recommendation", "online reviews", "a discount", "an influencer", "a good ad", "free samples", "a famous brand", "a limited offer", "a good argument", "emotions", "a guarantee", "seeing it in real life"],
      response: "Interesting! In this unit you'll learn techniques and language to persuade people."
    },
    dialogueTitle: "Come with me!",
    dialogue: [
      { who: "Andrea", line: "Toño, come with me to Chiapas! *Don't you think* it would be an amazing experience?" },
      { who: "Toño", line: "I don't know. It's two weeks, and I was going to work this summer." },
      { who: "Andrea", line: "But *wouldn't it be* better to do something meaningful? *Imagine* building a house for a family!" },
      { who: "Toño", line: "It sounds nice, but it's expensive." },
      { who: "Andrea", line: "It *does* cost money, but the organization pays for food and accommodation. *Just think*: two weeks in the mountains, new friends, and you'll learn so much!" },
      { who: "Toño", line: "Hmm. *Isn't it* dangerous?" },
      { who: "Andrea", line: "Not at all. I went last year and I *did* love it. *Haven't you* always said you wanted to travel more?" },
      { who: "Toño", line: "OK, OK, you win. Send me the link!" }
    ]
  },

  objectives: [
    "I can use negative questions to persuade or check information.",
    "I can use persuasive expressions like *Imagine…* and *Just think…*",
    "I can add emphasis with *do / does / did*.",
    "I can persuade someone to do something or buy something."
  ],

  explanation: {
    vocabTitle: "Persuasion and advertising",
    vocab: [
      { word: "persuade", icon: "🤝" }, { word: "convince", icon: "✅" }, { word: "an argument", icon: "🧩" },
      { word: "an advertisement (ad)", icon: "📺" }, { word: "a slogan", icon: "💬" }, { word: "a target audience", icon: "🎯" },
      { word: "a limited offer", icon: "⏳" }, { word: "a benefit", icon: "🌟" }, { word: "a guarantee", icon: "🛡️" },
      { word: "appeal to emotions", icon: "❤️" }, { word: "worth it", icon: "💯" }, { word: "a once-in-a-lifetime chance", icon: "🌠" },
      { word: "a bargain", icon: "🏷️" }, { word: "irresistible", icon: "🤩" }, { word: "a call to action", icon: "📣" }
    ],
    grammar: [
      {
        title: "Negative questions",
        intro: "We use negative questions to persuade (we expect the answer \"yes\"), or to express surprise.",
        head: ["Structure", "Example", "Use"],
        rows: [
          ["*Don't you think…?*", "*Don't you think* it would be amazing?", "persuading"],
          ["*Wouldn't it be…?*", "*Wouldn't it be* better to do something meaningful?", "persuading"],
          ["*Isn't it / Aren't you…?*", "*Isn't it* dangerous?", "checking a belief"],
          ["*Haven't you / Didn't you…?*", "*Haven't you* always wanted to travel?", "reminding / persuading"]
        ],
        note: "Answering: *Don't you like it? – Yes, I do.* (I like it) / *No, I don't.* (I don't like it)"
      },
      {
        title: "Emphasis and persuasive expressions",
        head: ["Structure", "Example"],
        rows: [
          ["*do / does / did* + base verb (emphasis)", "It *does* cost money, but… / I *did* love it!"],
          ["*Imagine* + -ing / noun", "*Imagine building* a house for a family!"],
          ["*Just think (of)…*", "*Just think*: two weeks in the mountains!"],
          ["*You won't regret it.*", "Come with us. *You won't regret it.*"],
          ["*What have you got to lose?*", "It's free for the first month. *What have you got to lose?*"]
        ]
      }
    ],
    watchOut: [
      ["Don't you think is a good idea?", "Don't you think it's a good idea?"],
      ["Imagine to live by the sea!", "Imagine living by the sea!"],
      ["It does costs money.", "It does cost money."],
      ["Wouldn't be better to go by bus?", "Wouldn't it be better to go by bus?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "[[Don't]] you think we should try it?",
        "Wouldn't [[it]] be fun to go together?",
        "Imagine [[waking]] up with a view of the ocean! (wake)",
        "I know it's expensive, but it [[does]] look amazing."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a salesperson trying to persuade a customer in a gym.",
      title: "The gym membership",
      script: [
        { who: "Salesperson", line: "Hi! Welcome to FitZone. Are you interested in a membership?" },
        { who: "Customer", line: "Maybe. I'm just looking. I've never really been to a gym." },
        { who: "Salesperson", line: "Well, isn't this the perfect moment to start? We have a special offer this week only: the first month is free." },
        { who: "Customer", line: "Free? What's the catch?" },
        { who: "Salesperson", line: "No catch! If you don't like it, you can cancel. What have you got to lose? And don't you think it's time to invest in your health?" },
        { who: "Customer", line: "I do want to get fitter. But I don't know how to use the machines." },
        { who: "Salesperson", line: "That's no problem. Every new member gets three sessions with a personal trainer. Imagine having a plan designed just for you!" },
        { who: "Customer", line: "Hmm. How much is it after the first month?" },
        { who: "Salesperson", line: "Five hundred pesos a month, which includes all classes: yoga, spinning and boxing. Wouldn't it be great to try boxing?" },
        { who: "Customer", line: "OK, you've convinced me. I'll try the free month." }
      ],
      activities: [
        {
          type: "gap", title: "The offer",
          prompt: "Listen and complete.",
          items: [
            "The first [[month]] is free.",
            "The offer is for this [[week]] only.",
            "New members get [[three|3]] sessions with a personal trainer.",
            "After the first month, it costs [[500|five hundred]] pesos a month.",
            "Classes include yoga, spinning and [[boxing]]."
          ]
        },
        {
          type: "match", title: "Persuasion techniques",
          prompt: "Match each sentence with the technique.",
          pairs: [
            ["\"This week only.\"", "creating urgency"],
            ["\"What have you got to lose?\"", "reducing risk"],
            ["\"Don't you think it's time to invest in your health?\"", "a negative question"],
            ["\"Imagine having a plan designed just for you!\"", "helping the customer imagine"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the psychology of advertising.",
      title: "Why do we buy?",
      text: [
        { body: "Every day, we see thousands of ads. Most of them don't work. But some do, and that's because they use psychology." },
        { body: "**Scarcity.** \"Only 3 left!\" or \"Offer ends tonight!\" These messages make us afraid of missing out, so we buy quickly without thinking." },
        { body: "**Social proof.** \"9 out of 10 dentists recommend it.\" We tend to trust what other people do, especially experts or people like us. That's why reviews are so powerful." },
        { body: "**Emotions.** The best ads don't talk about products; they tell stories. A soda ad doesn't say \"It's sweet.\" It shows friends laughing at a party. Wouldn't you like to feel that happy?" },
        { body: "**Questions.** Good ads ask questions that we answer \"yes\" to in our heads: \"Don't you deserve a break?\" \"Isn't it time to treat yourself?\" Once we've said yes in our minds, it's easier to say yes with our wallets." },
        { body: "Next time you feel you really need something, ask yourself: do I really need it, or was I persuaded?" }
      ],
      activities: [
        {
          type: "match", title: "Techniques",
          prompt: "Match each technique with an example.",
          pairs: [
            ["Scarcity", "\"Only 3 left!\""],
            ["Social proof", "\"9 out of 10 dentists recommend it.\""],
            ["Emotions", "friends laughing at a party"],
            ["Questions", "\"Don't you deserve a break?\""]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Most ads we see work very well.", a: false },
            { s: "Scarcity makes us buy quickly.", a: true },
            { s: "We tend to trust what other people do.", a: true },
            { s: "The best ads focus on technical details.", a: false },
            { s: "Negative questions can make us say yes in our heads.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice persuasive language, then write an ad or a persuasive message.",
      activities: [
        {
          type: "rewrite", title: "Make it persuasive",
          prompt: "Rewrite each sentence with the words in parentheses.",
          items: [
            { q: "It would be fun to go camping. (Wouldn't it…?)", a: ["Wouldn't it be fun to go camping?"] },
            { q: "I think you should come with us. (Don't you think…?)", a: ["Don't you think you should come with us?"] },
            { q: "Live in a house by the beach! (Imagine…)", a: ["Imagine living in a house by the beach!"] },
            { q: "It costs a lot, but it's worth it. (does – emphasis)", a: ["It does cost a lot, but it's worth it.", "It does cost a lot, but it is worth it."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Don't you think it would be amazing?" },
            { a: "Wouldn't it be better to try?" },
            { a: "Imagine building a house for a family!" },
            { a: "What have you got to lose?" }
          ]
        },
        {
          type: "write", title: "Convince me!",
          prompt: "Choose one: (a) write an ad (120–150 words) for a product, place or service in your city, or (b) write a message (120–150 words) to persuade a friend to do something with you (a trip, a course, a sport, a volunteer project). Use at least three negative questions, one *Imagine…* and one emphatic *do / does / did*.",
          minWords: 120, maxWords: 150,
          model: "Hey Ceci! I know you're busy, but I really want you to join the salsa class with me on Thursdays. Don't you think it would be fun to learn something completely new together? I know you say you can't dance, but the teacher is amazing, and the first class is free. What have you got to lose? Imagine dancing at your cousin's wedding in December and surprising everyone! Plus, it's great exercise. Haven't you been saying that you want to move more? I did feel nervous in my first class, but after ten minutes I was laughing and enjoying it. The group is really friendly, and we always go for tacos afterward. Wouldn't that be a nice way to relax after work? Come on, give it a try. You won't regret it! I'll save you a place.",
          bank: ["Don't you think…?", "Wouldn't it be…?", "Haven't you…?", "Imagine -ing…!", "I did / It does…", "What have you got to lose?", "You won't regret it!"],
          checklist: [
            "I used at least **three** negative questions.",
            "I used **Imagine** + -ing.",
            "I used **do / does / did** for emphasis.",
            "I ended with a **call to action**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Use enthusiastic intonation!",
          items: [
            "Don't you think it would be amazing?",
            "Wouldn't it be better to try?",
            "Imagine building a house!",
            "It does cost money, but it's worth it.",
            "What have you got to lose?",
            "You won't regret it!"
          ]
        },
        {
          type: "speak", title: "The pitch",
          prompt: "Record a one- to two-minute persuasive \"pitch\". Choose: sell a product you love, convince people to visit your city, or persuade your classmates to join a project. Use negative questions, *Imagine…*, emphasis and a call to action.",
          language: ["Have you ever wanted to…?", "Don't you think…?", "Imagine…!", "It does… / I did…", "Wouldn't it be great to…?", "Don't wait! / You won't regret it!"],
          seconds: 120,
          checklist: ["use at least three negative questions?", "use Imagine…?", "use emphatic do / does / did?", "sound enthusiastic and convincing?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about advertising and persuasion.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can form negative questions to persuade.", review: "Explanation: negative questions" },
    { can: "I can answer negative questions correctly.", review: "Explanation: negative questions note" },
    { can: "I can use *Imagine…* and *Just think…*", review: "Explanation: emphasis and persuasive expressions" },
    { can: "I can add emphasis with *do / does / did*.", review: "Explanation: emphasis; Writing activity 1" },
    { can: "I can persuade someone in writing and speaking.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
