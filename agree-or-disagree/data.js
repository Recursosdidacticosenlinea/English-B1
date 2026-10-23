window.UNIT = {
  slug: "agree-or-disagree",
  number: 37,
  title: "Agree or Disagree?",
  level: "B1",
  minutes: 60,
  speakers: { "Moderator": "f", "Gerardo": "m", "Dulce": "f", "Iñaki": "m" },
  focus: ["giving opinions: In my view, As far as I'm concerned", "agreeing and partly agreeing", "disagreeing politely", "interrupting and asking for opinions", "supporting opinions with reasons and examples"],

  presentation: {
    scene: "🗣️🤔👍👎",
    situation: "Three students are in a debate class. Today's topic: *Should university be free for everyone?*",
    warmup: {
      prompt: "What do you think? Choose the statements you agree with.",
      options: ["University should be free.", "Homework should be banned.", "Uniforms are a good idea.", "Everyone should learn English.", "Video games are a waste of time.", "Zoos should be closed.", "Social media should have age limits.", "Exams are the best way to evaluate students.", "Fast food should be taxed.", "Public transport should be free."],
      response: "Interesting opinions! In this unit you'll learn to express, defend and discuss your opinions politely."
    },
    dialogueTitle: "The debate",
    dialogue: [
      { who: "Moderator", line: "Today's question: should university be free for everyone? Gerardo, *what's your view*?" },
      { who: "Gerardo", line: "*In my view*, yes. Education is a right, not a privilege. *For example*, many talented students can't study because of money." },
      { who: "Dulce", line: "*I see your point, but* someone has to pay. *As far as I'm concerned*, free universities would mean higher taxes." },
      { who: "Iñaki", line: "*I partly agree with* Dulce. *However*, the money we invest in education comes back to society." },
      { who: "Dulce", line: "*Sorry to interrupt, but* what about quality? If it's free, there might be too many students and not enough teachers." },
      { who: "Gerardo", line: "*That's a fair point.* But *I'm afraid I disagree*. Many countries, like Germany, have free universities with high quality." },
      { who: "Moderator", line: "Great arguments, everyone. Let's hear from the audience." }
    ]
  },

  objectives: [
    "I can give my opinion and support it with reasons and examples.",
    "I can agree, partly agree and disagree politely.",
    "I can interrupt politely and ask for other people's opinions.",
    "I can take part in a discussion on a social topic."
  ],

  explanation: {
    vocabTitle: "Discussion language",
    vocab: [
      { word: "In my view,…", icon: "👁️" }, { word: "As far as I'm concerned,…", icon: "🙋" }, { word: "Personally, I think…", icon: "💭" },
      { word: "I totally agree.", icon: "👍" }, { word: "I partly agree.", icon: "🤏" }, { word: "I see your point, but…", icon: "🤔" },
      { word: "I'm afraid I disagree.", icon: "🙅" }, { word: "That's a fair point.", icon: "⚖️" }, { word: "Sorry to interrupt, but…", icon: "✋" },
      { word: "What do you think?", icon: "❓" }, { word: "For example,…", icon: "📌" }, { word: "On the other hand,…", icon: "🔄" },
      { word: "That's not always true.", icon: "❗" }, { word: "an argument", icon: "🧩" }, { word: "a debate", icon: "🎤" }
    ],
    grammar: [
      {
        title: "Giving and asking for opinions",
        head: ["Function", "Expressions"],
        rows: [
          ["giving opinions", "*In my view / opinion,… / As far as I'm concerned,… / Personally, I think… / I'm convinced that…*"],
          ["giving reasons", "*The main reason is that… / This is because… / For example,… / For instance,…*"],
          ["asking", "*What's your view? / What do you think about…? / Do you agree?*"],
          ["interrupting", "*Sorry to interrupt, but… / Can I just say something? / If I could just add…*"]
        ]
      },
      {
        title: "Agreeing and disagreeing",
        head: ["Strong agreement", "Partial agreement", "Polite disagreement"],
        rows: [
          ["*I totally agree.*", "*I partly agree, but…*", "*I'm afraid I disagree.*"],
          ["*Absolutely!*", "*That's a fair point, but…*", "*I see your point, but…*"],
          ["*You're absolutely right.*", "*Up to a point.*", "*I'm not so sure about that.*"],
          ["*That's exactly what I think.*", "*Maybe, but on the other hand…*", "*That's not always true.*"]
        ],
        note: "Say *I agree* (not *I am agree*). Avoid *You're wrong!* in a discussion; it sounds rude."
      }
    ],
    watchOut: [
      ["I am agree with you.", "I agree with you."],
      ["In my opinion, I think…", "In my opinion,… / I think… (not both)"],
      ["I'm agree with you in some things.", "I partly agree with you."],
      ["According to me,…", "In my opinion,… / As far as I'm concerned,…"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the expressions.",
      items: [
        "As far as I'm [[concerned]], uniforms are unnecessary.",
        "I see your [[point]], but I don't agree.",
        "Sorry to [[interrupt]], but can I add something?",
        "I [[partly]] agree. It depends on the situation."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio debate about whether homework should be banned in primary schools.",
      title: "Should homework be banned?",
      script: [
        { who: "Moderator", line: "Today's debate: should homework be banned in primary schools? Dulce, you're a primary teacher. What's your view?" },
        { who: "Dulce", line: "As far as I'm concerned, young children need time to play and be with their families. The main reason is that play is how they learn social skills. Studies show that homework doesn't improve results much at that age." },
        { who: "Iñaki", line: "I see your point, but I'm afraid I disagree. Homework teaches responsibility. For example, my son has to organize his time to finish his tasks, and that's an important skill." },
        { who: "Dulce", line: "That's a fair point. But a lot of homework is just repetition. And not all children have parents who can help them. That's not fair." },
        { who: "Iñaki", line: "Sorry to interrupt, but that's a different problem. Schools could offer homework clubs." },
        { who: "Dulce", line: "I partly agree. Maybe the answer is less homework, but better homework: reading for fun, for instance." },
        { who: "Iñaki", line: "Absolutely. That's exactly what I think. Fifteen or twenty minutes of reading is perfect." },
        { who: "Moderator", line: "So you found something in common! Thank you both." }
      ],
      activities: [
        {
          type: "sort", title: "Dulce or Iñaki?",
          prompt: "Listen. Whose argument is it?",
          bins: ["Dulce (against homework)", "Iñaki (for homework)"],
          items: [
            { text: "Children need time to play.", bin: 0 }, { text: "Homework doesn't improve results much.", bin: 0 }, { text: "Not all parents can help.", bin: 0 }, { text: "A lot of homework is repetition.", bin: 0 },
            { text: "Homework teaches responsibility.", bin: 1 }, { text: "Children learn to organize their time.", bin: 1 }, { text: "Schools could offer homework clubs.", bin: 1 }
          ]
        },
        {
          type: "match", title: "Function",
          prompt: "Match each expression from the debate with its function.",
          pairs: [
            ["\"As far as I'm concerned,…\"", "giving an opinion"],
            ["\"I'm afraid I disagree.\"", "disagreeing politely"],
            ["\"Sorry to interrupt, but…\"", "interrupting"],
            ["\"I partly agree.\"", "partial agreement"],
            ["\"That's exactly what I think.\"", "strong agreement"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read two opinion articles from a student newspaper.",
      title: "Should zoos be closed?",
      text: [
        { author: "YES — by Andrea Ríos", body: "In my opinion, zoos belong to the past. Wild animals need huge spaces: an elephant can walk fifty kilometers a day in nature, but in a zoo it lives in a small area. Many animals in zoos show signs of stress, like walking in circles. Today, we can learn about animals through documentaries and virtual reality. As far as I'm concerned, we should put the money into protecting animals in their natural habitats." },
        { author: "NO — by Jaime Ortega", body: "I see why some people want to close zoos, but I'm afraid I disagree. Modern zoos are not just for entertainment. They save species from extinction. For example, the Mexican wolf almost disappeared, but thanks to breeding programs in zoos, there are now wolves living free again in Chihuahua. Of course, bad zoos should be closed. However, good zoos educate millions of children every year. Personally, I think the answer is better zoos, not no zoos." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "Andrea thinks zoos are the best way to learn about animals.", a: false },
            { s: "According to Andrea, elephants can walk 50 km a day in nature.", a: true },
            { s: "Jaime thinks all zoos should be closed.", a: false },
            { s: "The Mexican wolf was saved partly by zoos.", a: true },
            { s: "Jaime partly agrees with Andrea about bad zoos.", a: true }
          ]
        },
        {
          type: "sort", title: "For or against zoos?",
          prompt: "Sort the arguments.",
          bins: ["Against zoos", "For zoos"],
          items: [
            { text: "Animals need huge spaces.", bin: 0 }, { text: "Many animals show signs of stress.", bin: 0 }, { text: "We can learn from documentaries.", bin: 0 },
            { text: "They save species from extinction.", bin: 1 }, { text: "They educate millions of children.", bin: 1 }, { text: "Breeding programs work.", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice discussion language, then write an opinion essay.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "I am agree with your idea.", a: ["I agree with your idea."] },
            { q: "According to me, homework is useful.", a: ["In my opinion, homework is useful.", "In my view, homework is useful.", "Personally, I think homework is useful.", "As far as I'm concerned, homework is useful."] },
            { q: "I see your point, and I disagree.", a: ["I see your point, but I disagree."] },
            { q: "As far as I concerned, zoos are cruel.", a: ["As far as I'm concerned, zoos are cruel.", "As far as I am concerned, zoos are cruel."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I see your point, but I disagree." },
            { a: "As far as I'm concerned, it's unfair." },
            { a: "Sorry to interrupt, but can I add something?" },
            { a: "That's a fair point." }
          ]
        },
        {
          type: "write", title: "My opinion",
          prompt: "Choose one topic: *Should university be free? / Should zoos be closed? / Should homework be banned?* Write an opinion essay (140–170 words) with an introduction, two arguments for your opinion with examples, one argument from the other side (and your answer to it), and a conclusion.",
          minWords: 140, maxWords: 170,
          model: "Should public transport be free? This is a question that many cities are discussing. In my view, it should be free, at least for students and older people. The main reason is that free public transport would reduce traffic and pollution. For example, when the city of Tallinn, in Estonia, made buses free, the number of passengers increased by fourteen percent. Another reason is that it would help families with low incomes. In Mexico, many workers spend up to a quarter of their salary on transport. On the other hand, some people argue that free transport is too expensive for the government. I see their point, but I think the money saved in health care and road repairs would cover a large part of the cost. To sum up, as far as I'm concerned, free public transport is an investment in a cleaner and fairer city.",
          bank: ["In my view,…", "The main reason is that…", "For example,…", "Another reason is…", "On the other hand, some people argue that…", "I see their point, but…", "To sum up,…"],
          checklist: [
            "I gave my **opinion** clearly in the introduction.",
            "I gave **two** arguments with **examples**.",
            "I included an argument from the **other side** and answered it.",
            "I wrote a **conclusion**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Use polite intonation.",
          items: [
            "In my view, education is a right.",
            "I see your point, but I disagree.",
            "As far as I'm concerned, it's unfair.",
            "That's a fair point.",
            "Sorry to interrupt, but what about quality?",
            "I partly agree with you."
          ]
        },
        {
          type: "speak", title: "Join the debate",
          prompt: "Choose a topic from the warm-up. Record yourself for about two minutes: give your opinion with two reasons and examples, then imagine someone disagrees with you and respond politely.",
          language: ["In my view,…", "The main reason is that…", "For example,…", "Some people might say that…", "I see their point, but…", "To sum up,…"],
          seconds: 150,
          checklist: ["give a clear opinion?", "support it with reasons and examples?", "respond to the other side politely?", "use at least five discussion expressions?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can give my opinion with a range of expressions.", review: "Explanation: giving and asking for opinions" },
    { can: "I can support my opinion with reasons and examples.", review: "Reading; Writing activity 3" },
    { can: "I can agree and partly agree.", review: "Explanation: agreeing and disagreeing" },
    { can: "I can disagree politely.", review: "Explanation: agreeing and disagreeing; Writing activity 1" },
    { can: "I can follow a debate and identify arguments.", review: "Listening activities 1 and 2" },
    { can: "I can write an opinion essay and take part in a debate.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
