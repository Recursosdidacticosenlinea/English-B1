window.UNIT = {
  slug: "he-asked-me",
  number: 32,
  title: "He Asked Me…",
  level: "B1",
  minutes: 60,
  speakers: { "Itzel": "f", "Bruno": "m", "Officer": "m", "Traveler": "f" },
  focus: ["reported yes / no questions: ask if / whether", "reported wh- questions", "statement word order in reported questions", "tense and pronoun changes", "reporting interviews and official questions"],

  presentation: {
    scene: "🛂❓🧳🗂️",
    situation: "Itzel has just come back from a trip to the United States. She tells her brother Bruno about the questions the immigration officer asked her.",
    warmup: {
      prompt: "In which situations do people ask you a lot of questions? Choose all.",
      options: ["at immigration", "in a job interview", "at the doctor's", "in a survey", "at the bank", "on a first date", "at a police checkpoint", "when renting an apartment", "with my parents", "in an exam"],
      response: "Right! In this unit you'll learn to report the questions people ask you."
    },
    dialogueTitle: "At immigration",
    dialogue: [
      { who: "Bruno", line: "So, was immigration difficult?" },
      { who: "Itzel", line: "Not really, but the officer asked a lot of questions. First, he *asked me why I was visiting* the US." },
      { who: "Bruno", line: "And what did you say?" },
      { who: "Itzel", line: "I said I was going to a conference. Then he *asked how long I was going to stay*." },
      { who: "Bruno", line: "Normal questions." },
      { who: "Itzel", line: "Yes, but then he *asked if I had* any food in my suitcase. I had forgotten about the mole my aunt gave me!" },
      { who: "Bruno", line: "Oh no! What happened?" },
      { who: "Itzel", line: "He *asked whether it contained* meat. I said no, and he let me keep it. Phew!" }
    ]
  },

  objectives: [
    "I can report yes / no questions with *ask if / whether*.",
    "I can report *wh-* questions with the correct word order.",
    "I can change tenses and pronouns in reported questions.",
    "I can report an interview or official conversation."
  ],

  explanation: {
    vocabTitle: "Official situations",
    vocab: [
      { word: "immigration", icon: "🛂" }, { word: "customs", icon: "🧳" }, { word: "an officer", icon: "👮" },
      { word: "a form", icon: "📝" }, { word: "a visa", icon: "🪪" }, { word: "purpose of visit", icon: "🎯" },
      { word: "declare", icon: "📋" }, { word: "a survey", icon: "📊" }, { word: "an interviewer", icon: "🎤" },
      { word: "an applicant", icon: "🙋" }, { word: "a requirement", icon: "✅" }, { word: "proof of address", icon: "🏠" },
      { word: "fill in", icon: "🖊️" }, { word: "inquire", icon: "❓" }, { word: "wonder", icon: "🤔" }
    ],
    grammar: [
      {
        title: "Reported yes / no questions",
        intro: "Use *ask (+ person) + if / whether*. Use statement word order and no question mark.",
        head: ["Direct question", "Reported question"],
        rows: [
          ["\"*Do* you *have* any food?\"", "He asked me *if I had* any food."],
          ["\"*Is* this your first visit?\"", "He asked *whether it was* my first visit."],
          ["\"*Have* you *been* here before?\"", "He asked *if I had been* there before."],
          ["\"*Will* you *come* back?\"", "She asked *if I would come* back."]
        ]
      },
      {
        title: "Reported wh- questions",
        head: ["Direct question", "Reported question"],
        rows: [
          ["\"*Why are* you visiting?\"", "He asked me *why I was visiting*."],
          ["\"How long *are* you *going to* stay?\"", "He asked *how long I was going to stay*."],
          ["\"Where *do* you *live*?\"", "She asked *where I lived*."],
          ["\"What *did* you *study*?\"", "They asked *what I had studied*."]
        ],
        note: "No *do / does / did* in reported questions, and no question mark: *He asked where I lived.* (not *where did I live?*)"
      }
    ],
    watchOut: [
      ["He asked me where did I live.", "He asked me where I lived."],
      ["She asked me if I am hungry.", "She asked me if I was hungry."],
      ["They asked me what was my name.", "They asked me what my name was."],
      ["He asked to me if I was OK.", "He asked me if I was OK."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the reported questions.",
      items: [
        "\"Where do you work?\" → She asked me where I [[worked]].",
        "\"Are you a student?\" → He asked [[if|whether]] I was a student.",
        "\"What time does the bank open?\" → I asked what time the bank [[opened]].",
        "\"Have you seen my keys?\" → She asked if I [[had seen]] her keys."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a traveler at a customs desk at Mexico City airport.",
      title: "Anything to declare?",
      script: [
        { who: "Officer", line: "Good afternoon. Passport, please. Where are you coming from?" },
        { who: "Traveler", line: "From Madrid. I was visiting my sister." },
        { who: "Officer", line: "How long did you stay in Spain?" },
        { who: "Traveler", line: "Three weeks." },
        { who: "Officer", line: "Are you carrying more than ten thousand dollars in cash?" },
        { who: "Traveler", line: "No, not at all." },
        { who: "Officer", line: "Did you buy any electronics abroad?" },
        { who: "Traveler", line: "Yes, a laptop. Here's the receipt. It cost eight hundred euros." },
        { who: "Officer", line: "OK. Do you have any fruit, plants or cheese in your luggage?" },
        { who: "Traveler", line: "Just some chocolate. Is that a problem?" },
        { who: "Officer", line: "No, chocolate is fine. Please press the button. Green light, you can go. Welcome back to Mexico." }
      ],
      activities: [
        {
          type: "match", title: "What did the officer ask?",
          prompt: "Match the direct question with the reported question.",
          pairs: [
            ["\"Where are you coming from?\"", "He asked where she was coming from."],
            ["\"How long did you stay?\"", "He asked how long she had stayed."],
            ["\"Are you carrying more than $10,000?\"", "He asked if she was carrying more than $10,000."],
            ["\"Did you buy any electronics?\"", "He asked whether she had bought any electronics."],
            ["\"Is that a problem?\"", "She asked if that was a problem."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The traveler was visiting her brother.", a: false },
            { s: "She stayed in Spain for three weeks.", a: true },
            { s: "She bought a laptop.", a: true },
            { s: "She has cheese in her luggage.", a: false },
            { s: "She got a red light.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a blog post about a very unusual job interview.",
      title: "The strangest interview of my life",
      text: [
        { body: "Last month I had an interview for a marketing job at a big tech company. I had prepared answers to all the typical questions, but nothing prepared me for this." },
        { body: "The interviewer, a young man in a hoodie, started normally. He asked me where I had studied and what my last job had been. Then, suddenly, he asked me how many tacos were sold in Mexico City every day!" },
        { body: "I was shocked. I asked him if he was serious. He smiled and said yes; he wanted to see how I solved problems. So I started calculating: population, how many people eat tacos, how many tacos each person eats…" },
        { body: "Then he asked whether I would prefer to fight one horse-sized duck or a hundred duck-sized horses. I laughed and said a hundred tiny horses, because they would be easier to catch. Finally, he asked me what superpower I would choose. I said I would choose to speak every language in the world." },
        { body: "A week later, they called me. I got the job! I later asked my boss why he had asked such strange questions. He said he wanted people who could think fast and keep calm." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the questions in order",
          prompt: "Make the reported questions from the text.",
          items: [
            { a: "He asked me where I had studied." },
            { a: "I asked him if he was serious." },
            { a: "He asked me what superpower I would choose." },
            { a: "I asked my boss why he had asked such strange questions." }
          ]
        },
        {
          type: "rewrite", title: "What were the original questions?",
          prompt: "Write the direct question for each reported question.",
          items: [
            { q: "He asked me what my last job had been.", a: ["What was your last job?", "What has your last job been?"] },
            { q: "I asked him if he was serious.", a: ["Are you serious?"] },
            { q: "He asked me what superpower I would choose.", a: ["What superpower would you choose?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice reported questions, then report an interview.",
      activities: [
        {
          type: "rewrite", title: "Report the questions",
          prompt: "Report each question. Start with *She asked me…*",
          items: [
            { q: "\"What's your name?\"", a: ["She asked me what my name was."] },
            { q: "\"Do you speak English?\"", a: ["She asked me if I spoke English.", "She asked me whether I spoke English."] },
            { q: "\"Where did you go on vacation?\"", a: ["She asked me where I had gone on vacation.", "She asked me where I went on vacation."] },
            { q: "\"Can you work on Saturdays?\"", a: ["She asked me if I could work on Saturdays.", "She asked me whether I could work on Saturdays."] },
            { q: "\"Why are you learning English?\"", a: ["She asked me why I was learning English."] }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each reported question has one mistake. Write it correctly.",
          items: [
            { q: "He asked me where did I work.", a: ["He asked me where I worked."] },
            { q: "She asked me if I am tired.", a: ["She asked me if I was tired."] },
            { q: "They asked me what time was it.", a: ["They asked me what time it was."] },
            { q: "He asked me that if I liked coffee.", a: ["He asked me if I liked coffee.", "He asked me whether I liked coffee."] }
          ]
        },
        {
          type: "write", title: "Report an interview",
          prompt: "Think of a time someone asked you a lot of questions (a job interview, a doctor, a survey, a first date, a teacher, your parents…). Write a text (120–150 words) reporting at least six questions and your answers.",
          minWords: 120, maxWords: 150,
          model: "Last week I went to a bank to open my first account, and the bank employee asked me a lot of questions. First, she asked me what my full name was and where I lived. Then she asked if I had an official ID and proof of address. I gave her my INE and an electricity bill. After that, she asked whether I was a student or if I worked. I told her I was studying nursing and working part-time at a pharmacy. She also asked how much money I earned every month, which was a bit uncomfortable! Then she wanted to know if I needed a credit card. I said I didn't want one yet. Finally, she asked me if I had any questions. I asked her how long it would take to receive my card, and she said it would arrive in a week.",
          bank: ["First, she asked me what…", "Then he asked if…", "She wanted to know whether…", "He asked me how…", "I told her that…", "Finally, I asked…"],
          checklist: [
            "I reported at least **six** questions.",
            "I used **if / whether** for yes / no questions.",
            "I used **statement word order** (no *did*, no question mark).",
            "I changed the **tenses** correctly."
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
            "He asked me why I was visiting.",
            "He asked if I had any food.",
            "She asked where I lived.",
            "They asked whether it contained meat.",
            "He asked how long I was staying.",
            "I asked him if he was serious."
          ]
        },
        {
          type: "speak", title: "Twenty questions",
          prompt: "Record yourself for one to two minutes. Imagine you just had a strange job interview or met someone very curious at a party. Report at least six of the questions they asked you and what you answered.",
          language: ["He / She asked me what…", "Then he / she asked if…", "He / She wanted to know…", "I told him / her that…", "I asked him / her whether…", "The strangest question was…"],
          seconds: 120,
          checklist: ["report at least six questions?", "use if or whether?", "use statement word order?", "report your answers too?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can report yes / no questions with *if / whether*.", review: "Explanation: reported yes / no questions" },
    { can: "I can report *wh-* questions.", review: "Explanation: reported wh- questions" },
    { can: "I can use statement word order in reported questions.", review: "Writing activity 2" },
    { can: "I can change tenses and pronouns when I report questions.", review: "Writing activity 1" },
    { can: "I can follow conversations at immigration or customs.", review: "Listening activities 1 and 2" },
    { can: "I can report an interview in writing and speaking.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
