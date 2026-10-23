window.UNIT = {
  slug: "this-time-next-year",
  number: 30,
  title: "This Time Next Year",
  level: "B1",
  minutes: 60,
  speakers: { "Sofía": "f", "Andrés": "m", "Host": "f", "Dr. Nakamura": "m" },
  focus: ["life goals vocabulary", "future continuous: will be + -ing", "future perfect: will have + past participle", "by + time expression", "making predictions about your life"],

  presentation: {
    scene: "📅🎓🚀🔮",
    situation: "Sofía and Andrés are about to graduate. They're imagining where they'll be one year from now.",
    warmup: {
      prompt: "Where do you think you'll be in five years? Choose all that are possible.",
      options: ["working", "studying a master's", "living abroad", "married", "with kids", "running my own business", "traveling", "living alone", "speaking English fluently", "living with my family", "still in Puebla", "somewhere completely new"],
      response: "Exciting! In this unit you'll learn to talk about the future in more detail."
    },
    dialogueTitle: "Graduation plans",
    dialogue: [
      { who: "Andrés", line: "Can you believe it? This time next year, we *won't be* students any more." },
      { who: "Sofía", line: "I know! This time next year, *I'll be working* at an architecture firm in Mexico City, I hope." },
      { who: "Andrés", line: "And *I'll be traveling* around South America. *By* December, *I'll have visited* five countries." },
      { who: "Sofía", line: "Lucky you! *Will* you *be working* while you travel?" },
      { who: "Andrés", line: "Yes, a little, online. *By* the end of the trip, *I'll have saved* enough to start my master's." },
      { who: "Sofía", line: "That's a great plan. *By* the time you come back, *I'll have found* an apartment, so you can visit me." },
      { who: "Andrés", line: "Deal! And in ten years, *we'll* both *be living* our dreams." }
    ]
  },

  objectives: [
    "I can talk about actions in progress at a specific time in the future.",
    "I can use the future perfect for actions completed before a future time.",
    "I can use *by* + time expression with the future perfect.",
    "I can describe my goals and predictions for the future."
  ],

  explanation: {
    vocabTitle: "Goals and the future",
    vocab: [
      { word: "graduate", icon: "🎓" }, { word: "a goal", icon: "🎯" }, { word: "achieve", icon: "🏆" },
      { word: "a milestone", icon: "🪨" }, { word: "settle down", icon: "🏡" }, { word: "get promoted", icon: "📈" },
      { word: "start a family", icon: "👨‍👩‍👧" }, { word: "move abroad", icon: "✈️" }, { word: "pay off a loan", icon: "💳" },
      { word: "set up a business", icon: "🏪" }, { word: "become fluent", icon: "🗣️" }, { word: "in the long term", icon: "🔭" },
      { word: "in the short term", icon: "⏱️" }, { word: "by then", icon: "📍" }, { word: "a five-year plan", icon: "🗓️" }
    ],
    grammar: [
      {
        title: "Future continuous",
        intro: "Use it for an action that will be **in progress** at a specific time in the future.",
        head: ["Form", "Example"],
        rows: [
          ["*will be* + -ing", "This time next year, I*'ll be working* in Mexico City."],
          ["negative", "At 8 p.m. tomorrow, I *won't be studying*. I'll be at the concert."],
          ["question (polite)", "*Will* you *be using* the car tonight?"]
        ]
      },
      {
        title: "Future perfect",
        intro: "Use it for an action that will be **completed before** a specific time in the future.",
        head: ["Form", "Example"],
        rows: [
          ["*will have* + past participle", "By December, I*'ll have visited* five countries."],
          ["negative", "I *won't have finished* by Friday."],
          ["question", "*Will* you *have graduated* by 2027?"]
        ],
        note: "Common time expressions: *by* + time (*by Friday, by 2030, by the time…*), *before*, *in five years' time*."
      },
      {
        title: "Compare",
        head: ["Future continuous (in progress)", "Future perfect (finished)"],
        rows: [
          ["At 10 a.m., I*'ll be taking* the exam.", "By 1 p.m., I*'ll have finished* the exam."],
          ["In 2030, she*'ll be living* in Canada.", "By 2030, she*'ll have lived* there for five years."]
        ]
      }
    ],
    watchOut: [
      ["This time tomorrow I will lie on the beach.", "This time tomorrow I'll be lying on the beach."],
      ["By 2030, I will finish my degree.", "By 2030, I will have finished my degree."],
      ["I'll have finish by Friday.", "I'll have finished by Friday."],
      ["Until next year, I'll have graduated.", "By next year, I'll have graduated."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the future continuous or future perfect.",
      items: [
        "Don't call me at nine. I [[will be having|'ll be having]] dinner with my family. (have)",
        "By the end of this course, we [[will have finished|'ll have finished]] 50 units. (finish)",
        "This time next week, I [[will be lying|'ll be lying]] on a beach in Huatulco. (lie)",
        "[[Will]] you [[have saved]] enough money by July? (save)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a science podcast about life in the year 2050.",
      title: "Life in 2050",
      script: [
        { who: "Host", line: "Welcome to Tomorrow Today. My guest is Dr. Nakamura, a futurist. Doctor, what will life be like in 2050?" },
        { who: "Dr. Nakamura", line: "Well, I think by 2050, most countries will have stopped using gasoline cars. We'll be driving electric or self-driving cars, or maybe we won't be driving at all." },
        { who: "Host", line: "What about work?" },
        { who: "Dr. Nakamura", line: "Artificial intelligence will have replaced many routine jobs by then. But I believe most people will be working in creative jobs, in health care and in education." },
        { who: "Host", line: "And where will people be living?" },
        { who: "Dr. Nakamura", line: "Almost seventy percent of the world's population will be living in cities. Because of that, cities will have become greener: more parks, vertical gardens and public transport." },
        { who: "Host", line: "Will we have traveled to Mars?" },
        { who: "Dr. Nakamura", line: "I think by 2050 a few astronauts will have landed on Mars. But ordinary people won't be taking vacations there, sorry!" },
        { who: "Host", line: "Ha! And what's your biggest hope?" },
        { who: "Dr. Nakamura", line: "That by 2050 we will have solved the climate crisis. If we act now, it's possible." }
      ],
      activities: [
        {
          type: "sort", title: "In progress or completed?",
          prompt: "Listen. Sort Dr. Nakamura's predictions.",
          bins: ["will be + -ing (in progress)", "will have + participle (completed)"],
          items: [
            { text: "We'll be driving electric cars.", bin: 0 }, { text: "Most people will be working in creative jobs.", bin: 0 }, { text: "70% of people will be living in cities.", bin: 0 },
            { text: "Countries will have stopped using gasoline cars.", bin: 1 }, { text: "AI will have replaced routine jobs.", bin: 1 }, { text: "A few astronauts will have landed on Mars.", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Dr. Nakamura is a historian.", a: false },
            { s: "He thinks AI will replace all jobs.", a: false },
            { s: "Cities will have more parks and vertical gardens.", a: true },
            { s: "Ordinary people will be taking vacations on Mars.", a: false },
            { s: "He hopes we will have solved the climate crisis.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a letter that a student wrote to her future self.",
      title: "Dear Future Me",
      text: [
        { body: "Dear Future Me," },
        { body: "I'm writing this on my 20th birthday. When you read this letter, you'll be thirty, and I hope you'll be smiling." },
        { body: "By now, you'll have finished your degree in biology. I'm sure the thesis was hard, but you did it! I hope you'll have traveled to at least three countries and that you'll have learned to speak English fluently (please tell me you didn't give up!)." },
        { body: "I imagine you'll be working in a marine research center, maybe in Baja California, studying whales or sea turtles. You'll probably be living near the ocean with a dog. I hope you won't be working in an office you hate." },
        { body: "Most of all, I hope you'll have stayed close to Mom, Dad and Valeria. And I hope you'll be taking care of yourself: sleeping well, exercising and laughing a lot." },
        { body: "Don't forget the girl who wrote this. She believed in you.<br>Love, Me (20)" }
      ],
      activities: [
        {
          type: "match", title: "Her hopes",
          prompt: "Match the beginnings and endings.",
          pairs: [
            ["By thirty, she hopes she'll have finished", "her degree in biology."],
            ["She hopes she'll have traveled", "to at least three countries."],
            ["She imagines she'll be working", "in a marine research center."],
            ["She'll probably be living", "near the ocean with a dog."],
            ["She hopes she'll have stayed close", "to her family."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "She wrote the letter on her 30th birthday.", a: false },
            { s: "She's studying biology.", a: true },
            { s: "She wants to work in an office.", a: false },
            { s: "Valeria is probably her sister.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the two future forms, then write a letter to your future self.",
      activities: [
        {
          type: "rewrite", title: "Rewrite with the future form",
          prompt: "Rewrite each sentence with the future continuous or future perfect.",
          items: [
            { q: "Tomorrow at 10, I'm in the middle of my exam.", a: ["Tomorrow at 10, I'll be taking my exam.", "Tomorrow at 10, I will be taking my exam.", "At 10 tomorrow, I'll be taking my exam."] },
            { q: "Before 2030, I'll finish paying my student loan. (by 2030)", a: ["By 2030, I'll have paid off my student loan.", "By 2030, I will have paid off my student loan.", "By 2030, I'll have paid my student loan.", "By 2030, I will have paid my student loan.", "I'll have paid off my student loan by 2030."] },
            { q: "Next summer, we're in the middle of traveling around Europe.", a: ["Next summer, we'll be traveling around Europe.", "Next summer, we will be traveling around Europe.", "Next summer, we'll be travelling around Europe."] },
            { q: "Before you arrive, we'll finish dinner. (by the time)", a: ["By the time you arrive, we'll have finished dinner.", "By the time you arrive, we will have finished dinner."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "This time next year, I'll be working." },
            { a: "By December, I'll have visited five countries." },
            { a: "Will you be using the car tonight?" },
            { a: "I won't have finished by Friday." }
          ]
        },
        {
          type: "write", title: "Dear Future Me",
          prompt: "Write a letter (130–160 words) to yourself in ten years. Say what you imagine you'll be doing then and what you hope you'll have achieved by then (studies, work, travel, family, skills). Use the future continuous at least three times and the future perfect at least three times.",
          minWords: 130, maxWords: 160,
          model: "Dear Future Me,<br>When you read this, you'll be thirty-one. I wonder what you'll be doing right now. I imagine you'll be working as a software developer, maybe for an international company. I hope you'll be working from home, so you can spend time with your family. By now, you'll have finished your master's degree, and I hope you'll have paid off your student loan. I also hope you'll have learned to cook properly, because right now you only know how to make quesadillas! I imagine you'll be living in your own apartment, and maybe you'll be planning a trip to Japan, which has always been your dream. Most of all, I hope you'll have stayed the same person: kind, curious and always laughing with your friends.<br>Good luck!<br>Me (21)",
          bank: ["When you read this, you'll be…", "I imagine you'll be…ing", "I hope you'll be…ing", "By now, you'll have…", "I hope you'll have…", "Most of all,"],
          checklist: [
            "I used the **future continuous** at least three times.",
            "I used the **future perfect** at least three times.",
            "I used *by* + time expression.",
            "I wrote it as a **letter** with a greeting and ending."
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
            "This time next year, I'll be working.",
            "By December, I'll have visited five countries.",
            "Will you be working while you travel?",
            "By then, I'll have found an apartment.",
            "We'll be living our dreams.",
            "I won't have finished by Friday."
          ]
        },
        {
          type: "speak", title: "My five-year plan",
          prompt: "Record yourself for one to two minutes describing your life in five years. What will you be doing (work, home, hobbies)? What will you have achieved by then? What will you not have done yet?",
          language: ["In five years' time,…", "I'll be working / living…", "I'll probably be…", "By then, I'll have…", "I hope I'll have…", "I won't have… yet."],
          seconds: 120,
          checklist: ["use the future continuous?", "use the future perfect?", "use by + time expression?", "talk about different areas of your life?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about actions in progress in the future.", review: "Explanation: future continuous" },
    { can: "I can talk about actions completed before a future time.", review: "Explanation: future perfect" },
    { can: "I can choose between the future continuous and future perfect.", review: "Explanation: compare; Listening activity 1" },
    { can: "I can use *by* + time expression correctly.", review: "Explanation: future perfect note; Writing activity 1" },
    { can: "I can understand predictions about the future.", review: "Listening and Reading activities" },
    { can: "I can describe my goals and future life.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
