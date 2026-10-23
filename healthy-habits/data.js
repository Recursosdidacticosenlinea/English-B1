window.UNIT = {
  slug: "healthy-habits",
  number: 21,
  title: "Healthy Habits",
  level: "B1",
  minutes: 60,
  speakers: { "Nutritionist": "f", "Rafael": "m", "Host": "m", "Dra. Méndez": "f" },
  focus: ["food, nutrition and lifestyle vocabulary", "few / a few (countable)", "little / a little (uncountable)", "plenty of, hardly any, a great deal of", "giving and understanding health advice"],

  presentation: {
    scene: "🥗💧🏃‍♀️😴",
    situation: "Rafael is a university student. He has an appointment with a nutritionist at the university health center because he feels tired all the time.",
    warmup: {
      prompt: "Which of these do you do regularly? Choose all.",
      options: ["drink plenty of water", "eat fruit every day", "sleep 8 hours", "skip breakfast", "eat fast food", "exercise 3 times a week", "drink a lot of coffee", "eat vegetables", "walk to school or work", "drink soda", "eat late at night", "stretch"],
      response: "Thanks for being honest! In this unit you'll learn to talk about quantities and healthy habits."
    },
    dialogueTitle: "At the nutritionist",
    dialogue: [
      { who: "Nutritionist", line: "So, Rafael, tell me about your typical day. Do you eat breakfast?" },
      { who: "Rafael", line: "Not really. I just drink *a little* coffee. Well, actually, *a lot of* coffee." },
      { who: "Nutritionist", line: "And how many vegetables do you eat?" },
      { who: "Rafael", line: "Very *few*. Maybe *a few* pieces of lettuce in my tacos." },
      { who: "Nutritionist", line: "Hmm. And water?" },
      { who: "Rafael", line: "I drink *hardly any* water. I prefer soda." },
      { who: "Nutritionist", line: "OK. That explains a lot. You have *little* energy because your body has *very little* fuel. Let's make a plan: *plenty of* water, *a few* changes at breakfast, and *a little* exercise every day." }
    ]
  },

  objectives: [
    "I can talk about diet, exercise and lifestyle.",
    "I can use *few / a few* and *little / a little* correctly.",
    "I can use quantifiers like *plenty of* and *hardly any*.",
    "I can give and understand practical health advice."
  ],

  explanation: {
    vocabTitle: "Healthy living",
    vocab: [
      { word: "nutrients", icon: "🧬" }, { word: "protein", icon: "🥚" }, { word: "fiber", icon: "🌾" },
      { word: "sugar", icon: "🍬" }, { word: "processed food", icon: "🍟" }, { word: "a balanced diet", icon: "⚖️" },
      { word: "a portion", icon: "🍽️" }, { word: "hydrated", icon: "💧" }, { word: "skip a meal", icon: "⏭️" },
      { word: "a snack", icon: "🍎" }, { word: "work out", icon: "🏋️" }, { word: "stretch", icon: "🧘" },
      { word: "sedentary", icon: "🛋️" }, { word: "energy levels", icon: "🔋" }, { word: "cut down on", icon: "✂️" }
    ],
    grammar: [
      {
        title: "Few, a few, little, a little",
        head: ["Quantifier", "Used with", "Meaning", "Example"],
        rows: [
          ["*a few*", "countable plural", "some (positive)", "I eat *a few* vegetables. (some, it's OK)"],
          ["*few*", "countable plural", "not many (negative)", "I eat very *few* vegetables. (not enough)"],
          ["*a little*", "uncountable", "some (positive)", "Add *a little* salt."],
          ["*little*", "uncountable", "not much (negative)", "You have *little* energy."]
        ],
        note: "*Few* and *little* alone sound formal or negative. In conversation, we often say *not many / not much* or *very few / very little*."
      },
      {
        title: "Other quantifiers",
        head: ["Quantifier", "Used with", "Example"],
        rows: [
          ["*plenty of*", "countable & uncountable (more than enough)", "Drink *plenty of* water."],
          ["*a lot of / lots of*", "countable & uncountable", "He eats *a lot of* fruit."],
          ["*hardly any*", "countable & uncountable (almost none)", "I drink *hardly any* water."],
          ["*too much / too many*", "more than is good", "You eat *too much* sugar / *too many* snacks."],
          ["*a great deal of*", "uncountable (formal)", "It takes *a great deal of* discipline."]
        ]
      }
    ],
    watchOut: [
      ["I drink a few water.", "I drink a little water."],
      ["She has little friends.", "She has few friends. / She has a few friends."],
      ["I eat hardly no vegetables.", "I eat hardly any vegetables."],
      ["There's plenty fruit.", "There's plenty of fruit."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *few, a few, little* or *a little*.",
      items: [
        "Could I have [[a little]] milk in my coffee, please?",
        "I've made [[a few]] changes to my diet, and I feel better.",
        "There's very [[little]] sugar in this yogurt. It's healthy.",
        "Very [[few]] students eat breakfast before class."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with a doctor about healthy habits for students.",
      title: "Healthy student, happy student",
      script: [
        { who: "Host", line: "Good morning. Today we're talking about student health with Dr. Méndez. Doctor, what's the biggest problem you see?" },
        { who: "Dra. Méndez", line: "Lack of sleep. Very few students sleep seven or eight hours. They stay up late on their phones and then they have very little energy in class." },
        { who: "Host", line: "What about food?" },
        { who: "Dra. Méndez", line: "Many students skip breakfast and then eat a lot of processed food at lunch. They eat hardly any fruit or vegetables. My advice is simple: have a few healthy snacks in your backpack, like nuts or an apple." },
        { who: "Host", line: "And exercise?" },
        { who: "Dra. Méndez", line: "You don't need to spend hours in a gym. Even a little exercise helps. Walk to class, take the stairs, or do a few minutes of stretching between study sessions." },
        { who: "Host", line: "What about coffee and energy drinks?" },
        { who: "Dra. Méndez", line: "A little coffee is fine. But energy drinks contain too much sugar and caffeine. They give you energy for an hour and then you feel worse." },
        { who: "Host", line: "Any final tip?" },
        { who: "Dra. Méndez", line: "Drink plenty of water. Many people think they're hungry or tired, but actually they're just dehydrated." }
      ],
      activities: [
        {
          type: "match", title: "Problem and advice",
          prompt: "Match each problem with Dr. Méndez's advice.",
          pairs: [
            ["Students eat hardly any fruit.", "Carry a few healthy snacks."],
            ["Students don't exercise.", "Walk to class or take the stairs."],
            ["Energy drinks have too much sugar.", "A little coffee is fine instead."],
            ["People feel tired or hungry.", "Drink plenty of water."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Most students sleep seven or eight hours.", a: false },
            { s: "Many students skip breakfast.", a: true },
            { s: "Dr. Méndez says you need to go to the gym every day.", a: false },
            { s: "Energy drinks make you feel worse after an hour.", a: true },
            { s: "Sometimes people are dehydrated, not hungry.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about the Blue Zones, places where people live the longest.",
      title: "The secrets of the Blue Zones",
      text: [
        { body: "In a few places in the world, people live much longer than average. Researchers call them \"Blue Zones.\" They include Okinawa in Japan, Sardinia in Italy, Ikaria in Greece, Loma Linda in the US and the Nicoya Peninsula in Costa Rica." },
        { body: "What do these places have in common? First, people eat plenty of vegetables and beans, and very little meat: usually only a few times a month. They eat hardly any processed food." },
        { body: "Second, they move naturally. Very few of them go to a gym, but they walk a lot, work in their gardens and do housework. Third, they have strong social connections. They spend a great deal of time with family and friends." },
        { body: "Finally, they have a purpose in life. In Okinawa, it's called *ikigai*; in Nicoya, *plan de vida*. Having a reason to get up in the morning seems to add years to people's lives. Maybe a little more purpose and a little less stress is the real secret." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "There are Blue Zones on four continents.", a: false },
            { s: "People in Blue Zones eat a lot of meat.", a: false },
            { s: "Most people in Blue Zones go to the gym.", a: false },
            { s: "They spend a lot of time with family and friends.", a: true },
            { s: "Having a purpose in life seems important for a long life.", a: true }
          ]
        },
        {
          type: "gap", title: "Quantifiers in the text",
          prompt: "Complete the sentences about the article.",
          items: [
            "People eat [[plenty of|a lot of|lots of]] vegetables and beans.",
            "They eat meat only [[a few]] times a month.",
            "They eat [[hardly any]] processed food.",
            "Very [[few]] of them go to a gym."
          ]
        }
      ]
    },

    writing: {
      intro: "Practice quantifiers, then write a plan for healthier habits.",
      activities: [
        {
          type: "sort", title: "Countable or uncountable?",
          prompt: "Which quantifier can you use? Sort the nouns.",
          bins: ["a few / few + …", "a little / little + …"],
          items: [
            { text: "vegetables", bin: 0 }, { text: "snacks", bin: 0 }, { text: "hours of sleep", bin: 0 }, { text: "apples", bin: 0 }, { text: "minutes", bin: 0 },
            { text: "water", bin: 1 }, { text: "sugar", bin: 1 }, { text: "exercise", bin: 1 }, { text: "energy", bin: 1 }, { text: "time", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I eat a little vegetables every day.", a: ["I eat a few vegetables every day."] },
            { q: "There's hardly no sugar in this juice.", a: ["There's hardly any sugar in this juice.", "There is hardly any sugar in this juice."] },
            { q: "You should drink plenty water.", a: ["You should drink plenty of water."] },
            { q: "He eats too much snacks.", a: ["He eats too many snacks."] }
          ]
        },
        {
          type: "write", title: "My healthy habits plan",
          prompt: "Write a text (120–150 words) about your current habits (food, drinks, sleep, exercise) and a plan to improve them. Use at least six quantifiers: *few, a few, little, a little, plenty of, hardly any, too much / too many*.",
          minWords: 120, maxWords: 150,
          model: "To be honest, my habits aren't very healthy right now. I drink too much coffee, at least four cups a day, and hardly any water. I eat a lot of processed food because I have very little time between classes. I eat a few vegetables, but very few fruits. I also sleep very few hours, usually only five or six. So here's my plan. First, I'm going to carry a bottle and drink plenty of water. Second, I'll take a few healthy snacks to school, like nuts and bananas. Third, I'll reduce coffee to a little in the morning. Finally, I'll do a little exercise every day, maybe a twenty-minute walk. I know it won't be easy, but I hope to have more energy in a few weeks.",
          bank: ["I drink too much / hardly any…", "I eat very few / a few…", "I have very little / a little…", "plenty of", "So here's my plan.", "First,", "I'm going to…"],
          checklist: [
            "I used at least **six** quantifiers.",
            "I used **few / a few** with countable nouns.",
            "I used **little / a little** with uncountable nouns.",
            "I described my **current habits** and a **plan**."
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
            "I drink hardly any water.",
            "Drink plenty of water every day.",
            "Very few students sleep enough.",
            "Even a little exercise helps.",
            "Have a few healthy snacks.",
            "You eat too much sugar."
          ]
        },
        {
          type: "speak", title: "Health check",
          prompt: "Record yourself for one to two minutes. Describe your eating, sleeping and exercise habits honestly. Then say what three changes you'd like to make and why.",
          language: ["I eat a few / very few…", "I drink a little / too much…", "I get hardly any…", "I'd like to…", "I'm going to cut down on…", "That way, I'll have more…"],
          seconds: 120,
          checklist: ["describe food, sleep and exercise?", "use few / a few and little / a little?", "use plenty of or hardly any?", "explain three changes?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about diet, exercise and lifestyle.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *a few / few* with countable nouns.", review: "Explanation: few, a few, little, a little" },
    { can: "I can use *a little / little* with uncountable nouns.", review: "Explanation: few, a few, little, a little; Writing activity 1" },
    { can: "I can use *plenty of, hardly any, too much / too many*.", review: "Explanation: other quantifiers; Writing activity 2" },
    { can: "I can understand health advice on the radio and in articles.", review: "Listening and Reading activities" },
    { can: "I can describe my habits and a plan to improve them.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
