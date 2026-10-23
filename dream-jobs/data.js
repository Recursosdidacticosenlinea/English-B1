window.UNIT = {
  slug: "dream-jobs",
  number: 11,
  title: "Dream Jobs",
  level: "B1",
  minutes: 60,
  speakers: { "Fernanda": "f", "Arturo": "m", "Host": "f", "Leonardo": "m", "Gabriela": "f" },
  focus: ["jobs and work vocabulary", "verb + -ing: enjoy, avoid, mind, consider…", "verb + to: want, hope, decide, plan…", "-ing after prepositions", "talking about career goals"],

  presentation: {
    scene: "💼🌎🎨🩺",
    situation: "Fernanda and Arturo are in their last year of university. They're talking about what they want to do after graduation.",
    warmup: {
      prompt: "Which things are important for your dream job? Choose all.",
      options: ["a high salary", "traveling", "working from home", "helping people", "being creative", "flexible hours", "working outdoors", "a good team", "learning new things", "being my own boss", "job security", "long vacations"],
      response: "Great! In this unit you'll learn to talk about jobs and career goals using verb patterns."
    },
    dialogueTitle: "After graduation",
    dialogue: [
      { who: "Arturo", line: "Have you *decided to apply* for the master's degree?" },
      { who: "Fernanda", line: "Not yet. I'm *thinking about working* for a year first. I *want to get* some experience." },
      { who: "Arturo", line: "Makes sense. What kind of job?" },
      { who: "Fernanda", line: "I *enjoy working* with kids, so maybe something in education. I *hope to find* a job at a museum." },
      { who: "Arturo", line: "That sounds perfect for you. I *can't stand sitting* in an office all day, so I'm *planning to work* as a tour guide." },
      { who: "Fernanda", line: "You'd be great! You *love talking* to people. Would you *consider moving* to another city?" },
      { who: "Arturo", line: "Definitely. I *don't mind living* far from home if the job is interesting." }
    ]
  },

  objectives: [
    "I can talk about jobs and what I like or dislike about them.",
    "I can use verbs followed by *-ing* or by *to* + infinitive.",
    "I can use *-ing* after prepositions.",
    "I can describe my career goals and plans."
  ],

  explanation: {
    vocabTitle: "Work and careers",
    vocab: [
      { word: "salary", icon: "💰" }, { word: "career", icon: "📈" }, { word: "full-time", icon: "🕘" },
      { word: "part-time", icon: "🕐" }, { word: "freelance", icon: "💻" }, { word: "promotion", icon: "⬆️" },
      { word: "internship", icon: "🎓" }, { word: "colleague", icon: "👥" }, { word: "deadline", icon: "⏰" },
      { word: "rewarding", icon: "🌟" }, { word: "demanding", icon: "🏋️" }, { word: "well-paid", icon: "💵" },
      { word: "flexible hours", icon: "🔄" }, { word: "work outdoors", icon: "🌳" }, { word: "be self-employed", icon: "🧑‍💼" }
    ],
    grammar: [
      {
        title: "Verb + -ing or verb + to?",
        head: ["Pattern", "Verbs", "Example"],
        rows: [
          ["verb + *-ing*", "*enjoy, avoid, mind, finish, consider, can't stand, keep, practice, miss, suggest*", "I *enjoy working* with kids. / Would you *consider moving*?"],
          ["verb + *to* + verb", "*want, hope, decide, plan, need, would like, learn, agree, offer, refuse, expect*", "I *hope to find* a job at a museum."],
          ["both (same meaning)", "*like, love, hate, start, begin, prefer*", "I *love talking* / I *love to talk* to people."]
        ],
        note: "After *would like / would love / would prefer*, always use *to*: *I'd like to work abroad.*"
      },
      {
        title: "Preposition + -ing",
        intro: "After a preposition (*about, of, in, at, for, without, before, after*), use the *-ing* form.",
        head: ["Expression", "Example"],
        rows: [
          ["*think about*", "I'm *thinking about working* for a year."],
          ["*interested in*", "She's *interested in studying* abroad."],
          ["*good at*", "He's *good at solving* problems."],
          ["*look forward to*", "I *look forward to hearing* from you."],
          ["*before / after*", "*Before starting* the job, I took a course."]
        ],
        note: "In *look forward to*, *to* is a preposition, so use *-ing*: *I look forward to meeting you.*"
      }
    ],
    watchOut: [
      ["I enjoy to work with people.", "I enjoy working with people."],
      ["I decided studying law.", "I decided to study law."],
      ["I'm interested in work abroad.", "I'm interested in working abroad."],
      ["I look forward to hear from you.", "I look forward to hearing from you."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the *-ing* form or *to* + verb.",
      items: [
        "She avoids [[working]] on weekends. (work)",
        "We've decided [[to open]] a small café. (open)",
        "I'm good at [[organizing]] events. (organize)",
        "Would you like [[to be]] a teacher? (be)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a podcast about unusual dream jobs. Two guests describe their work.",
      title: "Unusual dream jobs",
      script: [
        { who: "Host", line: "Welcome to Work Life. Today we're talking about unusual jobs. My first guest is Leonardo. Leonardo, what do you do?" },
        { who: "Leonardo", line: "I'm a professional video game tester. Companies pay me to play their games before they come out and find problems." },
        { who: "Host", line: "That sounds like a dream! Do you enjoy it?" },
        { who: "Leonardo", line: "Most of the time, yes. But people imagine I just have fun. Actually, I sometimes have to play the same level a hundred times. You can't avoid getting bored sometimes." },
        { who: "Host", line: "How did you start?" },
        { who: "Leonardo", line: "I studied computer science, and I was always good at finding mistakes. I applied for an internship and they offered to hire me." },
        { who: "Host", line: "Thank you. Gabriela, your job is very different." },
        { who: "Gabriela", line: "Yes! I'm a marine biologist. I work on a boat in the Gulf of California, studying whales." },
        { who: "Host", line: "Wow. What's the best part?" },
        { who: "Gabriela", line: "Being outdoors and seeing whales up close. I can't stand sitting at a desk. The worst part is being away from my family for weeks. But I hope to continue doing this for the rest of my life." }
      ],
      activities: [
        {
          type: "sort", title: "Leonardo or Gabriela?",
          prompt: "Listen. Who says what?",
          bins: ["Leonardo", "Gabriela"],
          items: [
            { text: "tests games before they come out", bin: 0 }, { text: "sometimes plays the same level many times", bin: 0 }, { text: "studied computer science", bin: 0 }, { text: "started with an internship", bin: 0 },
            { text: "works on a boat", bin: 1 }, { text: "studies whales", bin: 1 }, { text: "can't stand sitting at a desk", bin: 1 }, { text: "is away from family for weeks", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Complete what they said",
          prompt: "Listen again and complete with the correct form.",
          items: [
            "You can't avoid [[getting]] bored sometimes.",
            "I was always good at [[finding]] mistakes.",
            "They offered [[to hire]] me.",
            "I can't stand [[sitting]] at a desk.",
            "I hope [[to continue]] doing this."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three profiles from a career website for young professionals.",
      title: "How I found my dream job",
      text: [
        { author: "Mónica, 27 · UX designer", body: "At university I studied architecture, but I realized I didn't enjoy designing buildings. I was more interested in designing apps. So after graduating, I decided to take an online course in UX design. I now work for a startup in Querétaro, and I love solving problems for users." },
        { author: "Sergio, 30 · Chef", body: "My parents wanted me to become a lawyer, and I agreed to study law. But I kept cooking for my friends every weekend. In my third year, I stopped pretending. I left law school and trained as a chef. Now I have my own small restaurant. I don't mind working long hours because I'm doing what I love." },
        { author: "Laura, 25 · Translator", body: "I've always loved learning languages. I'm a freelance translator, so I can work from anywhere. The best part is choosing my own hours. The worst part is not knowing how much I'll earn each month. I'm planning to learn Japanese next year." }
      ],
      activities: [
        {
          type: "match", title: "Match the details",
          prompt: "Match the beginnings and endings.",
          pairs: [
            ["Mónica realized she didn't enjoy", "designing buildings."],
            ["Mónica decided", "to take an online course."],
            ["Sergio's parents wanted him", "to become a lawyer."],
            ["Sergio doesn't mind", "working long hours."],
            ["Laura is planning", "to learn Japanese."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Mónica works for a big company in Mexico City.", a: false },
            { s: "Sergio finished his law degree.", a: false },
            { s: "Sergio has his own restaurant.", a: true },
            { s: "Laura knows exactly how much she'll earn every month.", a: false },
            { s: "Laura can choose her own working hours.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice verb patterns, then write about your dream job.",
      activities: [
        {
          type: "sort", title: "-ing or to?",
          prompt: "Which pattern follows each verb?",
          bins: ["+ -ing", "+ to + verb"],
          items: [
            { text: "enjoy", bin: 0 }, { text: "avoid", bin: 0 }, { text: "don't mind", bin: 0 }, { text: "consider", bin: 0 }, { text: "can't stand", bin: 0 },
            { text: "decide", bin: 1 }, { text: "hope", bin: 1 }, { text: "plan", bin: 1 }, { text: "would like", bin: 1 }, { text: "refuse", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write the correct sentence.",
          items: [
            { q: "I'm considering to change my major.", a: ["I'm considering changing my major.", "I am considering changing my major."] },
            { q: "She refused working on Sundays.", a: ["She refused to work on Sundays."] },
            { q: "He's interested in learn programming.", a: ["He's interested in learning programming.", "He is interested in learning programming."] },
            { q: "We look forward to meet you.", a: ["We look forward to meeting you."] },
            { q: "I'd like being a pilot.", a: ["I'd like to be a pilot.", "I would like to be a pilot."] }
          ]
        },
        {
          type: "write", title: "My dream job",
          prompt: "Write a profile (120–150 words) for a career website about your dream job. Say what the job is, why you'd like to do it, what you enjoy and what you don't mind, and what you plan to do to get it. Use at least four *-ing* verbs and four *to* + verb patterns.",
          minWords: 120, maxWords: 150,
          model: "My dream job is to be a wildlife photographer for a nature magazine. I've always enjoyed taking photos, and I love being outdoors. I'm also interested in protecting endangered animals, so this job would be perfect for me. I know it isn't easy. Photographers often have to wait for hours to get one good picture, but I don't mind waiting. I can't stand working in an office, so traveling to forests and deserts sounds amazing. To get this job, I'm planning to take a professional photography course next year. I also hope to do an internship with a conservation organization. In the future, I'd like to publish a book of photos of Mexican animals. I'm really looking forward to starting this adventure!",
          bank: ["My dream job is to…", "I've always enjoyed…", "I'm interested in…", "I don't mind…", "I can't stand…", "I'm planning to…", "I hope to…", "I'm looking forward to…"],
          checklist: [
            "I used at least **four** verb + *-ing* patterns.",
            "I used at least **four** verb + *to* patterns.",
            "I used *-ing* after **prepositions**.",
            "I explained **why** and **how** I want to get this job."
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
            "I enjoy working with kids.",
            "I hope to find a job soon.",
            "I can't stand sitting in an office.",
            "I don't mind living far from home.",
            "I'm thinking about working for a year.",
            "I'm planning to work as a guide."
          ]
        },
        {
          type: "speak", title: "Career goals",
          prompt: "Imagine a career adviser asks you about your plans. Record yourself for one to two minutes: describe your dream job, what you enjoy and can't stand doing, and your plans to get it.",
          language: ["I'd like to work as…", "I really enjoy…", "I can't stand…", "I don't mind…", "I'm planning to…", "I'm interested in…"],
          seconds: 120,
          checklist: ["describe your dream job?", "use verb + -ing patterns?", "use verb + to patterns?", "explain your plans?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about jobs with a range of vocabulary.", review: "Explanation: the vocabulary cards" },
    { can: "I can use verbs followed by *-ing*.", review: "Explanation: verb + -ing or verb + to; Writing activity 1" },
    { can: "I can use verbs followed by *to* + verb.", review: "Explanation: verb + -ing or verb + to; Writing activity 1" },
    { can: "I can use *-ing* after prepositions.", review: "Explanation: preposition + -ing; Writing activity 2" },
    { can: "I can understand people describing their jobs.", review: "Listening and Reading activities" },
    { can: "I can talk and write about my career goals.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
