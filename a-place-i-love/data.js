window.UNIT = {
  slug: "a-place-i-love",
  number: 20,
  title: "A Place I Love",
  level: "B1",
  minutes: 60,
  speakers: { "Carolina": "f", "Ethan": "m", "Host": "f", "Benjamín": "m" },
  focus: ["describing places", "defining relative clauses: who, which, that, where, whose", "non-defining relative clauses with commas", "omitting the relative pronoun", "descriptive writing"],

  presentation: {
    scene: "🏞️🌉☕📸",
    situation: "Ethan is an American student who is going to travel around Puebla. His classmate Carolina shows him photos of her favorite places.",
    warmup: {
      prompt: "What makes a place special for you? Choose all.",
      options: ["the views", "the food", "the people", "memories", "the history", "the silence", "the architecture", "nature", "the music", "the weather", "the colors", "feeling safe"],
      response: "Lovely! In this unit you'll learn to describe places in more detail with relative clauses."
    },
    dialogueTitle: "My favorite places",
    dialogue: [
      { who: "Carolina", line: "This is Cuetzalan, the town *where* my grandparents live. It's in the mountains." },
      { who: "Ethan", line: "Wow, it's so green! Who's the woman in the photo?" },
      { who: "Carolina", line: "That's my aunt Lupe, *who* sells coffee in the market. The coffee *that* she grows is the best in Mexico!" },
      { who: "Ethan", line: "And this waterfall?" },
      { who: "Carolina", line: "That's Las Brisas, *which* is about an hour's walk from the town. It's the place *where* I learned to swim." },
      { who: "Ethan", line: "Is there anywhere to stay?" },
      { who: "Carolina", line: "Yes, there's a small hotel *whose* owner is a friend of my family. I'll give you her number." }
    ]
  },

  objectives: [
    "I can describe places and why they are special to me.",
    "I can use defining relative clauses to identify people, things and places.",
    "I can use non-defining relative clauses to add extra information.",
    "I can write a descriptive text about a place I love."
  ],

  explanation: {
    vocabTitle: "Describing places",
    vocab: [
      { word: "breathtaking", icon: "😮" }, { word: "picturesque", icon: "🖼️" }, { word: "lively", icon: "🎶" },
      { word: "peaceful", icon: "🕊️" }, { word: "crowded", icon: "👥" }, { word: "cobblestone streets", icon: "🧱" },
      { word: "a viewpoint", icon: "🔭" }, { word: "a waterfall", icon: "💦" }, { word: "a hidden gem", icon: "💎" },
      { word: "off the beaten track", icon: "🥾" }, { word: "surrounded by", icon: "⭕" }, { word: "located in", icon: "📍" },
      { word: "the atmosphere", icon: "✨" }, { word: "a landmark", icon: "🗼" }, { word: "unforgettable", icon: "💖" }
    ],
    grammar: [
      {
        title: "Defining relative clauses",
        intro: "They give **essential** information: they tell us which person, thing or place. No commas.",
        head: ["Pronoun", "For", "Example"],
        rows: [
          ["*who / that*", "people", "The woman *who* sells coffee is my aunt."],
          ["*which / that*", "things", "The coffee *that* she grows is the best."],
          ["*where*", "places", "This is the town *where* my grandparents live."],
          ["*whose*", "possession", "There's a hotel *whose* owner is a friend."]
        ],
        note: "When *who / which / that* is the **object** of the clause, you can omit it: *The coffee (that) she grows…* But not when it's the subject: *The woman who sells coffee…*"
      },
      {
        title: "Non-defining relative clauses",
        intro: "They give **extra** information about something already identified. Use commas, and never use *that*.",
        head: ["Example", "Note"],
        rows: [
          ["My aunt Lupe, *who* sells coffee, lives in Cuetzalan.", "We already know which aunt."],
          ["Las Brisas, *which* is an hour away, is beautiful.", "Not *that*."],
          ["Cuetzalan, *where* my grandparents live, is in the mountains.", "Commas around the clause."]
        ]
      }
    ],
    watchOut: [
      ["The man which lives next door is a chef.", "The man who lives next door is a chef."],
      ["Puebla, that is my city, is beautiful.", "Puebla, which is my city, is beautiful."],
      ["This is the town where I was born there.", "This is the town where I was born."],
      ["The girl who her father is a doctor…", "The girl whose father is a doctor…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *who, which, where* or *whose*.",
      items: [
        "That's the café [[where]] we first met.",
        "My cousin, [[who]] lives in Tijuana, is visiting next week.",
        "The museum, [[which]] opened in 2018, is free on Sundays.",
        "I have a friend [[whose]] brother is a famous chef."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a travel podcast where a guest describes his favorite place.",
      title: "My happy place",
      script: [
        { who: "Host", line: "Welcome back to Places That Matter. Today's guest is Benjamín, a photographer who has traveled to more than forty countries. Benjamín, what's your favorite place in the world?" },
        { who: "Benjamín", line: "That's easy: Bacalar, in Quintana Roo. It's a small town that's located next to a huge lagoon." },
        { who: "Host", line: "The lagoon of seven colors, right?" },
        { who: "Benjamín", line: "Exactly. The water, which is fresh water, not sea water, changes from light blue to dark blue. The first time I saw it, I couldn't believe it was real." },
        { who: "Host", line: "Where do you stay when you go there?" },
        { who: "Benjamín", line: "There's a small cabin by the water whose owner, Don Chucho, is a fisherman. He's the person who taught me to kayak. Every morning I kayak to a place where you can see the stromatolites." },
        { who: "Host", line: "What are stromatolites?" },
        { who: "Benjamín", line: "They're like living rocks, which are some of the oldest life forms on Earth. That's why you're not allowed to touch them or stand on them." },
        { who: "Host", line: "Why is Bacalar so special for you?" },
        { who: "Benjamín", line: "It's the place where I feel calm. After weeks of airports and noise, it's where I come back to myself." }
      ],
      activities: [
        {
          type: "match", title: "Who or what?",
          prompt: "Listen and match.",
          pairs: [
            ["Benjamín is a photographer", "who has visited more than forty countries."],
            ["Bacalar is a small town", "that's next to a huge lagoon."],
            ["Don Chucho is the person", "who taught him to kayak."],
            ["Stromatolites are living rocks,", "which are some of the oldest life forms."],
            ["Bacalar is the place", "where he feels calm."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The lagoon in Bacalar has sea water.", a: false },
            { s: "The water changes color.", a: true },
            { s: "Don Chucho is a fisherman.", a: true },
            { s: "Visitors can stand on the stromatolites.", a: false },
            { s: "Benjamín feels stressed in Bacalar.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a winning entry from a writing contest called *A Place I Love*.",
      title: "The rooftop",
      text: [
        { body: "Everyone has a place where they feel safe. Mine isn't a beach or a mountain. It's the rooftop of my grandmother's house in Barrio de Analco, which is one of the oldest neighborhoods in Puebla." },
        { body: "To get there, you have to climb a narrow staircase that is painted bright yellow. At the top, there's a small terrace full of plants that my grandmother has been growing for forty years: geraniums, mint, a lemon tree and even chiles." },
        { body: "From the rooftop you can see the domes of the churches, the volcanoes and, on clear days, the snow of the Pico de Orizaba. In the evenings, you can hear the bells and the music from the street vendors whose carts pass below." },
        { body: "This is the place where I studied for my university entrance exam, where I cried after my first breakup and where my grandmother taught me to make mole. Whenever I feel lost, I go up those yellow stairs, and everything makes sense again." }
      ],
      activities: [
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join each pair of sentences with a relative pronoun.",
          items: [
            { q: "Analco is a neighborhood. It's one of the oldest in Puebla.", a: ["Analco is a neighborhood which is one of the oldest in Puebla.", "Analco is a neighborhood that is one of the oldest in Puebla."] },
            { q: "There is a staircase. It's painted bright yellow.", a: ["There is a staircase which is painted bright yellow.", "There is a staircase that is painted bright yellow.", "There's a staircase that is painted bright yellow.", "There's a staircase which is painted bright yellow."] },
            { q: "This is the place. I studied for my exam there.", a: ["This is the place where I studied for my exam."] },
            { q: "Street vendors pass below. Their carts play music.", a: ["Street vendors whose carts play music pass below.", "Street vendors, whose carts play music, pass below."] }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The writer's favorite place is a beach.", a: false },
            { s: "The grandmother has been growing plants for forty years.", a: true },
            { s: "You can see the Pico de Orizaba every day.", a: false },
            { s: "The writer learned to make mole on the rooftop.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice relative clauses, then describe your favorite place.",
      activities: [
        {
          type: "sort", title: "Defining or non-defining?",
          prompt: "Does the clause give essential or extra information?",
          bins: ["Defining (essential, no commas)", "Non-defining (extra, commas)"],
          items: [
            { text: "The man who lives next door is a chef.", bin: 0 }, { text: "This is the house where I grew up.", bin: 0 }, { text: "I lost the book that you gave me.", bin: 0 },
            { text: "Mexico City, which is huge, has great museums.", bin: 1 }, { text: "My mother, who is a nurse, works at night.", bin: 1 }, { text: "Cholula, where the pyramid is, is near Puebla.", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "The teacher which helped me is from Chile.", a: ["The teacher who helped me is from Chile.", "The teacher that helped me is from Chile."] },
            { q: "Oaxaca, that is famous for mole, is in the south.", a: ["Oaxaca, which is famous for mole, is in the south."] },
            { q: "This is the park where we played there.", a: ["This is the park where we played."] },
            { q: "She's the girl who her sister is a singer.", a: ["She's the girl whose sister is a singer.", "She is the girl whose sister is a singer."] }
          ]
        },
        {
          type: "write", title: "A place I love",
          prompt: "Write a descriptive text (140–170 words) for the contest *A Place I Love*. Describe a special place: where it is, what you can see, hear and smell, the people connected to it and why it's important to you. Use at least six relative clauses (defining and non-defining).",
          minWords: 140, maxWords: 170,
          model: "The place I love most is a small beach in Mazunte, which is a village on the coast of Oaxaca. To get there, you walk along a path that goes through the jungle, and suddenly the ocean appears in front of you. The sand, which is almost white, is surrounded by huge rocks. In the morning you can hear the waves and the birds, and in the afternoon you can smell the fish that the local families cook on the beach. My favorite person there is Doña Mari, who has a tiny restaurant where we always eat. Her son, whose name is Toño, taught me to surf when I was twelve. Mazunte is the place where I spent every summer of my childhood with my cousins. It's also where I saw sea turtles for the first time. Whenever life is stressful, I close my eyes and imagine that beach.",
          bank: ["The place I love most is…, which…", "…, where…", "a path that…", "…, who…", "whose name is…", "It's the place where I…"],
          checklist: [
            "I used at least **six** relative clauses.",
            "I used **commas** with non-defining clauses.",
            "I didn't use *that* in non-defining clauses.",
            "I described **senses** (see, hear, smell) and **feelings**."
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
            "This is the town where my grandparents live.",
            "That's my aunt, who sells coffee.",
            "The coffee she grows is the best.",
            "It's the place where I feel calm.",
            "There's a hotel whose owner is a friend.",
            "It's a hidden gem."
          ]
        },
        {
          type: "speak", title: "Show and tell",
          prompt: "Choose a photo of a place you love (or imagine one). Record yourself for one to two minutes describing it as if you were showing the photo to a friend: where it is, what's in it, the people connected to it and why it's special.",
          language: ["This is…, which is…", "It's the place where…", "The person who…", "…, whose…", "You can see / hear…", "It's special because…"],
          seconds: 120,
          checklist: ["use who, which and where?", "use at least one non-defining clause?", "describe what you can see or hear?", "explain why the place is special?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe places with a range of adjectives.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *who, which, that, where* and *whose*.", review: "Explanation: defining relative clauses" },
    { can: "I can use non-defining clauses with commas.", review: "Explanation: non-defining relative clauses; Writing activity 1" },
    { can: "I can omit the pronoun when it's the object.", review: "Explanation: defining relative clauses note" },
    { can: "I can understand people describing a special place.", review: "Listening and Reading activities" },
    { can: "I can write and talk about a place I love.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
