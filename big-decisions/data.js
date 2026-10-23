window.UNIT = {
  slug: "big-decisions",
  number: 46,
  title: "Big Decisions",
  level: "B1",
  minutes: 60,
  speakers: { "Ana Paula": "f", "Memo": "m", "Coach": "f", "Caller": "m" },
  focus: ["decision-making vocabulary", "will for instant decisions and promises", "going to for plans and intentions", "present continuous for fixed arrangements", "weighing pros and cons"],

  presentation: {
    scene: "🤔⚖️🛣️✅",
    situation: "Ana Paula has received two job offers: one in Mexico City and one in her hometown, Puebla. She talks to her friend Memo.",
    warmup: {
      prompt: "Which big decisions have you made or will you make soon? Choose all.",
      options: ["choosing a career", "moving out", "changing jobs", "studying abroad", "getting a pet", "buying a car", "ending a relationship", "starting a business", "learning a new language", "moving to another city"],
      response: "Big decisions! In this unit you'll practice future forms to talk about plans, decisions and arrangements."
    },
    dialogueTitle: "Two job offers",
    dialogue: [
      { who: "Memo", line: "So, have you decided? Mexico City or Puebla?" },
      { who: "Ana Paula", line: "Not yet. The job in Mexico City pays more, but I'*m going to* think about the cost of living." },
      { who: "Memo", line: "That's smart. When do you have to answer?" },
      { who: "Ana Paula", line: "On Friday. *I'm meeting* the manager from Mexico City on Thursday to ask more questions." },
      { who: "Memo", line: "Do you want me to help you make a list of pros and cons?" },
      { who: "Ana Paula", line: "Yes, please! Oh, wait, my phone… It's my mom. *I'll call* her back later." },
      { who: "Memo", line: "OK, let's start. I'*ll get* a pen." },
      { who: "Ana Paula", line: "Thanks, Memo. Whatever I decide, I promise *I'll invite* you to my new apartment!" }
    ]
  },

  objectives: [
    "I can talk about decisions, plans and arrangements.",
    "I can use *will* for instant decisions, offers and promises.",
    "I can use *going to* for plans and *present continuous* for arrangements.",
    "I can compare options and explain a decision."
  ],

  explanation: {
    vocabTitle: "Making decisions",
    vocab: [
      { word: "pros and cons", icon: "⚖️" }, { word: "an option", icon: "🔀" }, { word: "a dilemma", icon: "🤯" },
      { word: "weigh up", icon: "🏋️" }, { word: "make up your mind", icon: "🧠" }, { word: "change your mind", icon: "🔄" },
      { word: "a gut feeling", icon: "💓" }, { word: "a risk", icon: "🎲" }, { word: "the cost of living", icon: "💸" },
      { word: "commit to", icon: "🤝" }, { word: "hesitate", icon: "⏸️" }, { word: "regret", icon: "😔" },
      { word: "go for it", icon: "🚀" }, { word: "sleep on it", icon: "🛏️" }, { word: "a turning point", icon: "↪️" }
    ],
    grammar: [
      {
        title: "Future forms: which one?",
        head: ["Form", "Use", "Example"],
        rows: [
          ["*will* + verb", "instant decisions (decided now)", "My phone… *I'll call* her back later."],
          ["*will* + verb", "offers and promises", "*I'll get* a pen. / I promise *I'll invite* you."],
          ["*going to* + verb", "plans and intentions (decided before)", "*I'm going to* think about the cost of living."],
          ["*going to* + verb", "predictions with evidence", "Look at those clouds. It*'s going to* rain."],
          ["present continuous", "fixed arrangements (time, place, people)", "*I'm meeting* the manager on Thursday."],
          ["present simple", "timetables and schedules", "The train *leaves* at 7:15."]
        ],
        note: "The difference is often how and when we decided: *I'll…* (now), *I'm going to…* (already decided), *I'm …ing* (organized with other people)."
      }
    ],
    watchOut: [
      ["The phone is ringing. I'm going to answer it! (decided now)", "The phone is ringing. I'll answer it!"],
      ["I will meet my boss tomorrow at 10. (arranged)", "I'm meeting my boss tomorrow at 10."],
      ["Next year I study in Canada. (plan)", "Next year I'm going to study in Canada."],
      ["I promise I'm calling you.", "I promise I'll call you."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Choose the best future form.",
      items: [
        "\"I'm thirsty.\" – \"Wait, I [[will get|'ll get]] you some water.\" (get)",
        "We [[are flying|'re flying]] to Cancún on Saturday. We've got our tickets. (fly)",
        "I've decided. I [[am going to study|'m going to study]] psychology. (study)",
        "The bus [[leaves]] at 6:30 every morning. (leave)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a life coach answering a caller on a radio program about decisions.",
      title: "Should I stay or should I go?",
      script: [
        { who: "Coach", line: "Welcome to Life Choices. Our first caller has a big decision to make. Go ahead." },
        { who: "Caller", line: "Hi. I'm twenty-four and I work at a bank. It's a stable job, but I'm not happy. I've always wanted to be a chef. I've been offered a place at a cooking school in Oaxaca, but the course starts in January and I have to answer this week." },
        { who: "Coach", line: "That's a big decision. What's stopping you?" },
        { who: "Caller", line: "Money, mostly. And my parents. They think I'm going to regret leaving the bank." },
        { who: "Coach", line: "OK. Here's what I suggest. First, make a list of pros and cons. Second, talk to people who work as chefs. Are you seeing anyone from the school soon?" },
        { who: "Caller", line: "Yes, I'm visiting the school on Saturday." },
        { who: "Coach", line: "Perfect. Ask about real salaries and jobs after the course. And third, think about your plan B. If it doesn't work, could you go back to banking?" },
        { who: "Caller", line: "Probably, yes." },
        { who: "Coach", line: "Then the risk isn't so big. My advice? Sleep on it, but don't let fear make the decision for you." },
        { who: "Caller", line: "You're right. I'll talk to my parents tonight. Thank you!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The caller is twenty-four.", a: true },
            { s: "The caller is very happy at the bank.", a: false },
            { s: "The cooking school is in Oaxaca.", a: true },
            { s: "The course starts in March.", a: false },
            { s: "The caller is visiting the school on Saturday.", a: true },
            { s: "The coach tells him to decide immediately.", a: false }
          ]
        },
        {
          type: "match", title: "Which future form?",
          prompt: "Match each sentence from the call with its use.",
          pairs: [
            ["\"The course starts in January.\"", "a timetable (present simple)"],
            ["\"I'm visiting the school on Saturday.\"", "an arrangement (present continuous)"],
            ["\"You're going to regret leaving the bank.\"", "a prediction (going to)"],
            ["\"I'll talk to my parents tonight.\"", "an instant decision (will)"]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article about how to make good decisions.",
      title: "Five tips for big decisions",
      text: [
        { body: "**1. Don't decide when you're emotional.** If you're angry, sad or very excited, your judgment isn't clear. Wait until you're calm." },
        { body: "**2. Make a list.** Writing the pros and cons on paper helps you see the options more clearly. Some people give each point a score from 1 to 5." },
        { body: "**3. Think about the future you.** Ask yourself: \"How am I going to feel about this decision in ten minutes, ten months and ten years?\" This is called the 10-10-10 rule." },
        { body: "**4. Talk, but not too much.** Ask two or three people you trust. If you ask everyone, you'll get confused by too many opinions." },
        { body: "**5. Listen to your gut.** After analyzing everything, notice how you feel. If one option makes you feel relieved, that's important information. And remember: not deciding is also a decision!" }
      ],
      activities: [
        {
          type: "match", title: "Match the tips",
          prompt: "Match each tip with the reason or detail.",
          pairs: [
            ["Don't decide when you're emotional", "because your judgment isn't clear."],
            ["Make a list", "to see the options more clearly."],
            ["Use the 10-10-10 rule", "to imagine how you'll feel in the future."],
            ["Ask only two or three people", "so you don't get confused."],
            ["Listen to your gut", "because feelings are important information."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "You should decide when you're very excited.", a: false },
            { s: "Some people give each point a score.", a: true },
            { s: "You should ask as many people as possible.", a: false },
            { s: "The article says not deciding is also a decision.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice future forms, then write about a decision.",
      activities: [
        {
          type: "sort", title: "Which future form?",
          prompt: "Sort the sentences by the use of the future form.",
          bins: ["will (instant decision / offer / promise)", "going to (plan / evidence)", "present continuous (arrangement)"],
          items: [
            { text: "I'll help you with your bags.", bin: 0 }, { text: "I promise I'll be on time.", bin: 0 }, { text: "I'll have the chicken, please.", bin: 0 },
            { text: "I'm going to save money this year.", bin: 1 }, { text: "Be careful! You're going to fall!", bin: 1 },
            { text: "I'm having dinner with Ana tonight.", bin: 2 }, { text: "We're leaving at eight tomorrow.", bin: 2 }
          ]
        },
        {
          type: "rewrite", title: "Correct the future form",
          prompt: "Each sentence uses the wrong future form. Write it correctly.",
          items: [
            { q: "Someone is at the door. I'm going to open it!", a: ["Someone is at the door. I'll open it!", "I'll open it!", "I'll get it!"] },
            { q: "I will see the dentist tomorrow at 4. It's booked.", a: ["I'm seeing the dentist tomorrow at 4.", "I'm seeing the dentist tomorrow at 4. It's booked.", "I am seeing the dentist tomorrow at 4."] },
            { q: "I promise I'm going to call you every day.", a: ["I promise I'll call you every day.", "I promise I will call you every day."] },
            { q: "Look at those black clouds! It will rain.", a: ["Look at those black clouds! It's going to rain.", "It's going to rain.", "Look at those black clouds! It is going to rain."] }
          ]
        },
        {
          type: "write", title: "My big decision",
          prompt: "Write a text (130–160 words) about a big decision you need to make now or soon (studies, work, moving, a trip…). Describe the options and the pros and cons, what you're going to do to decide, any arrangements you have, and what you think you'll choose. Use *will, going to* and the present continuous.",
          minWords: 130, maxWords: 160,
          model: "Next semester I have to choose my specialization in psychology, and it's a really difficult decision. The two options are clinical psychology and organizational psychology. Clinical psychology is my passion: I want to help people with anxiety and depression. However, it's going to take more years of study, and the salaries at the beginning are low. Organizational psychology is more practical. I'm going to do my social service in a company, so I'll get experience, and there are more jobs. To make the decision, I'm going to talk to some professionals. I'm meeting a clinical psychologist on Tuesday, and next week I'm visiting the HR department of a big company. I think I'll probably choose clinical psychology in the end, because I don't want to regret it. But I'm going to sleep on it first!",
          bank: ["I have to choose between… and…", "On the one hand,…", "On the other hand,…", "I'm going to…", "I'm meeting / visiting…", "I think I'll probably…"],
          checklist: [
            "I described the **options** with pros and cons.",
            "I used **going to** for plans.",
            "I used the **present continuous** for arrangements.",
            "I used **will** for a prediction or decision."
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
            "I'll call her back later.",
            "I'm meeting the manager on Thursday.",
            "I'm going to think about it.",
            "I promise I'll invite you.",
            "Let me sleep on it.",
            "It's going to rain."
          ]
        },
        {
          type: "speak", title: "Help me decide!",
          prompt: "Record yourself for one to two minutes. Explain a decision you have to make (real or imaginary). Describe the options, the pros and cons, your plans to decide and your arrangements. Then say what you'll probably do.",
          language: ["I have to decide whether…", "The pros are… / The cons are…", "I'm going to…", "I'm meeting / talking to… on…", "I think I'll…", "I'll let you know!"],
          seconds: 120,
          checklist: ["explain the options clearly?", "use going to for plans?", "use the present continuous for an arrangement?", "use will for a decision or prediction?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about decisions with useful vocabulary.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *will* for instant decisions, offers and promises.", review: "Explanation: future forms" },
    { can: "I can use *going to* for plans and predictions with evidence.", review: "Explanation: future forms; Writing activity 1" },
    { can: "I can use the present continuous for arrangements.", review: "Explanation: future forms; Writing activity 2" },
    { can: "I can understand advice about decisions.", review: "Listening and Reading activities" },
    { can: "I can explain a decision and my plans.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
