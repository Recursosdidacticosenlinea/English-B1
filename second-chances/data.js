window.UNIT = {
  slug: "second-chances",
  number: 28,
  title: "Second Chances",
  level: "B1",
  minutes: 65,
  speakers: { "Rocío": "f", "Javier": "m", "Narrator": "m", "Host": "f", "Ernesto": "m" },
  focus: ["life decisions vocabulary", "third conditional: if + past perfect, would have + participle", "imagining a different past", "could have / might have in the result clause", "talking about luck and important moments"],

  presentation: {
    scene: "🔀⏪🍀🛤️",
    situation: "Rocío and Javier are celebrating their fifth anniversary. They remember how they met, by pure chance.",
    warmup: {
      prompt: "Which of these decisions have changed your life? Choose all.",
      options: ["choosing my university", "moving to a new city", "meeting a friend", "starting a job", "learning English", "a trip", "joining a club", "changing my major", "a missed bus or flight", "a conversation with a stranger"],
      response: "Small moments can change everything! In this unit you'll learn to imagine how the past could have been different."
    },
    dialogueTitle: "How we met",
    dialogue: [
      { who: "Javier", line: "Do you remember the day we met? It was raining and you didn't have an umbrella." },
      { who: "Rocío", line: "Of course! *If I hadn't missed* my bus, *I wouldn't have been* at that bus stop." },
      { who: "Javier", line: "And *if I hadn't offered* you my umbrella, *we wouldn't have started* talking." },
      { who: "Rocío", line: "True. And *if you hadn't told* me that terrible joke, *I might not have laughed*!" },
      { who: "Javier", line: "Hey, the joke was great! *If it hadn't rained* that day, *we would never have met*." },
      { who: "Rocío", line: "Life is strange. Just one missed bus…" },
      { who: "Javier", line: "Best missed bus in history. Happy anniversary!" }
    ]
  },

  objectives: [
    "I can imagine how past events could have been different.",
    "I can form the third conditional correctly.",
    "I can use *could have / might have* to talk about past possibilities.",
    "I can describe important moments and decisions in my life."
  ],

  explanation: {
    vocabTitle: "Life decisions and luck",
    vocab: [
      { word: "by chance", icon: "🎲" }, { word: "a coincidence", icon: "🔁" }, { word: "luck", icon: "🍀" },
      { word: "fate", icon: "✨" }, { word: "a turning point", icon: "↪️" }, { word: "a decision", icon: "⚖️" },
      { word: "an opportunity", icon: "🚪" }, { word: "take a risk", icon: "🎯" }, { word: "miss a chance", icon: "🙈" },
      { word: "a regret", icon: "😔" }, { word: "a lucky escape", icon: "😮‍💨" }, { word: "a narrow escape", icon: "🏃" },
      { word: "change your mind", icon: "🔄" }, { word: "be in the right place at the right time", icon: "📍" }, { word: "life-changing", icon: "🌟" }
    ],
    grammar: [
      {
        title: "Third conditional",
        intro: "Use it to imagine a different past: the situation didn't happen, and we imagine the result.",
        head: ["If clause", "Result clause", "Example"],
        rows: [
          ["*if* + past perfect", "*would have* + past participle", "*If I hadn't missed* the bus, *I wouldn't have met* you."],
          ["*if* + past perfect", "*could have* + past participle", "*If I had studied* more, *I could have passed*."],
          ["*if* + past perfect", "*might have* + past participle", "*If you had asked* me, *I might have helped*."],
          ["question", "", "What *would* you *have done* if you *had lost* your passport?"]
        ],
        note: "Short forms: *I'd have* (= I would have), *I'd* (= I had in the if clause): *If I'd known, I'd have called.* In speaking, *would have* sounds like \"would've\"."
      },
      {
        title: "Second or third conditional?",
        head: ["Second (imaginary present / future)", "Third (imaginary past)"],
        rows: [
          ["*If I had* a car, *I'd drive* to work.", "*If I had had* a car, *I would have driven* to work yesterday."],
          ["*If it didn't rain*, *we'd go* out.", "*If it hadn't rained*, *we would have gone* out."]
        ]
      }
    ],
    watchOut: [
      ["If I would have known, I would have called.", "If I had known, I would have called."],
      ["If I hadn't missed the bus, I wouldn't meet you.", "If I hadn't missed the bus, I wouldn't have met you."],
      ["If she had study, she would have passed.", "If she had studied, she would have passed."],
      ["I would of helped you.", "I would have helped you."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the third conditional.",
      items: [
        "If I [[had left|'d left]] earlier, I wouldn't have missed the flight. (leave)",
        "If you had told me, I [[would have helped|'d have helped]] you. (help)",
        "We [[wouldn't have met|would not have met]] if it hadn't rained. (not meet)",
        "If she [[hadn't studied|had not studied]] English, she wouldn't have got the job. (not study)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a podcast about lucky escapes and coincidences.",
      title: "Sliding doors",
      script: [
        { who: "Host", line: "Welcome to Sliding Doors, the show about moments that changed everything. My guest today is Ernesto, an engineer from Querétaro. Ernesto, tell us your story." },
        { who: "Ernesto", line: "Sure. Twelve years ago I was a waiter. I loved math, but my family couldn't pay for university." },
        { who: "Host", line: "What happened?" },
        { who: "Ernesto", line: "One day, a customer left his notebook on the table. It was full of equations. I ran after him and gave it back. He was a professor at the Tec, and we started talking about math." },
        { who: "Host", line: "And that changed your life?" },
        { who: "Ernesto", line: "Completely. He told me about a scholarship and helped me apply. If he hadn't forgotten his notebook, I would never have known about it. And if I hadn't run after him, I might still be a waiter." },
        { who: "Host", line: "Do you think about how different your life could have been?" },
        { who: "Ernesto", line: "All the time. If I had stayed in the kitchen that day, I wouldn't have met him. I wouldn't have studied engineering, and I wouldn't have met my wife at university either!" },
        { who: "Host", line: "Do you still see the professor?" },
        { who: "Ernesto", line: "Yes, every year. I always say: you changed my life. He always says: no, you changed it when you ran after me." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the story in order",
          prompt: "Make sentences from Ernesto's story.",
          items: [
            { a: "A customer left his notebook on the table." },
            { a: "Ernesto ran after him." },
            { a: "The professor told him about a scholarship." },
            { a: "He met his wife at university." }
          ]
        },
        {
          type: "match", title: "If…",
          prompt: "Match the halves to make third conditional sentences.",
          pairs: [
            ["If the professor hadn't forgotten his notebook,", "Ernesto would never have known about the scholarship."],
            ["If Ernesto hadn't run after him,", "he might still be a waiter."],
            ["If he had stayed in the kitchen,", "he wouldn't have met the professor."],
            ["If he hadn't studied engineering,", "he wouldn't have met his wife."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read about a famous historical \"what if\".",
      title: "History's lucky accidents",
      text: [
        { body: "Many important discoveries happened by accident. In 1928, the Scottish scientist Alexander Fleming went on vacation and left his laboratory in a mess. When he came back, he noticed that a mold had grown on one of his dishes and had killed the bacteria around it. That mold became penicillin, the first antibiotic." },
        { body: "If Fleming had cleaned his lab before his vacation, he wouldn't have discovered penicillin, at least not then. And if penicillin hadn't been discovered, millions of people might have died from infections in the following decades." },
        { body: "Another example is the microwave oven. In 1945, engineer Percy Spencer was working with radar equipment when he noticed that a chocolate bar in his pocket had melted. If he hadn't had that chocolate in his pocket, he might not have realized that microwaves could cook food." },
        { body: "These stories show that luck is important. But they also show something else: Fleming and Spencer were curious. If they hadn't paid attention, these accidents would have been just accidents." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "Fleming discovered penicillin in 1928.", a: true },
            { s: "Fleming cleaned his lab before his vacation.", a: false },
            { s: "Percy Spencer was working with radar equipment.", a: true },
            { s: "Spencer's sandwich melted in his pocket.", a: false },
            { s: "The article says curiosity was also important.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Write the third conditional",
          prompt: "Write a third conditional sentence for each fact.",
          items: [
            { q: "Fleming didn't clean his lab, so he discovered penicillin.", a: ["If Fleming had cleaned his lab, he wouldn't have discovered penicillin.", "If Fleming had cleaned his lab, he would not have discovered penicillin."] },
            { q: "Spencer had chocolate in his pocket, so he noticed the effect.", a: ["If Spencer hadn't had chocolate in his pocket, he wouldn't have noticed the effect.", "If Spencer had not had chocolate in his pocket, he would not have noticed the effect.", "If Spencer hadn't had chocolate in his pocket, he might not have noticed the effect."] },
            { q: "They paid attention, so the accidents became discoveries.", a: ["If they hadn't paid attention, the accidents wouldn't have become discoveries.", "If they had not paid attention, the accidents would not have become discoveries."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the third conditional, then write about a turning point in your life.",
      activities: [
        {
          type: "gap", title: "A chain of events",
          prompt: "Complete the chain with the third conditional.",
          items: [
            "If I hadn't overslept, I [[wouldn't have missed|would not have missed]] the bus. (not miss)",
            "If I hadn't missed the bus, I [[wouldn't have taken|would not have taken]] a taxi. (not take)",
            "If I [[hadn't taken|had not taken]] a taxi, I wouldn't have met the driver, Don Pepe. (not take)",
            "If I hadn't met Don Pepe, I [[wouldn't have found|would not have found]] my part-time job at his restaurant! (not find)"
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "If I would have known, I would have come.", a: ["If I had known, I would have come.", "If I'd known, I would have come.", "If I'd known, I'd have come."] },
            { q: "If she had asked me, I would helped her.", a: ["If she had asked me, I would have helped her."] },
            { q: "If we hadn't got lost, we would arrive on time.", a: ["If we hadn't got lost, we would have arrived on time.", "If we hadn't gotten lost, we would have arrived on time."] },
            { q: "I would of called you if I had had your number.", a: ["I would have called you if I had had your number."] }
          ]
        },
        {
          type: "write", title: "A turning point",
          prompt: "Write a text (130–160 words) about a turning point in your life: a decision, a coincidence or a lucky (or unlucky) moment. Describe what happened and imagine how your life would have been different. Use the third conditional at least five times.",
          minWords: 130, maxWords: 160,
          model: "The biggest turning point in my life was a decision I made when I was seventeen. I wanted to study medicine, like my father, but I failed the entrance exam. I was devastated. My cousin suggested that I take a free graphic design course while I prepared for the exam again. I loved it immediately. If I had passed the medicine exam, I would never have taken that course. And if I hadn't taken the course, I wouldn't have discovered my passion for design. Now I'm in my sixth semester of graphic design and I have a part-time job at an agency. If my cousin hadn't given me that idea, I might have spent years studying something I didn't enjoy. Sometimes I wonder: if I had become a doctor, would I have been happy? Maybe. But I'm grateful for that failure.",
          bank: ["The biggest turning point was…", "If I had…, I would have…", "If I hadn't…, I wouldn't have…", "I might have…", "I could have…", "Sometimes I wonder…"],
          checklist: [
            "I used the **third conditional** at least five times.",
            "I used *if* + **past perfect** (not *would have*) in the *if* clause.",
            "I used **might have** or **could have** at least once.",
            "I described what **really** happened and the **imaginary** alternative."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice how *would have* sounds like \"would've\".",
          items: [
            "If I hadn't missed the bus, we wouldn't have met.",
            "We would never have met.",
            "If I had known, I would have called.",
            "I might not have laughed.",
            "If it hadn't rained, we'd have gone out.",
            "It was a turning point."
          ]
        },
        {
          type: "speak", title: "What if…?",
          prompt: "Record yourself for one to two minutes. Tell the story of an important moment in your life (or someone you know) and imagine how things would have been different. Use the third conditional at least four times.",
          language: ["It all started when…", "If I hadn't…, I wouldn't have…", "If I had…, I would have…", "I might have…", "Looking back,…", "I'm glad that…"],
          seconds: 120,
          checklist: ["tell what really happened?", "use the third conditional at least four times?", "use might have or could have?", "say how you feel about it now?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can imagine how the past could have been different.", review: "Explanation: third conditional" },
    { can: "I can form the third conditional correctly.", review: "Explanation: third conditional; Writing activity 2" },
    { can: "I can use *could have / might have* for past possibilities.", review: "Explanation: third conditional" },
    { can: "I can tell the difference between the second and third conditional.", review: "Explanation: second or third conditional" },
    { can: "I can follow stories about lucky moments and discoveries.", review: "Listening and Reading activities" },
    { can: "I can describe a turning point in my life.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
