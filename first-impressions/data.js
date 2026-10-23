window.UNIT = {
  slug: "first-impressions",
  number: 1,
  title: "First Impressions",
  level: "B1",
  minutes: 60,
  speakers: { "Valeria": "f", "Diego": "m", "Host": "f", "Dr. Okafor": "m", "Marina": "f" },
  focus: ["personality adjectives", "describing character with examples", "stative verbs: know, believe, seem, own…", "dynamic verbs in continuous forms", "verbs with two meanings: think, have, see"],

  presentation: {
    scene: "🤝👀💭🙂",
    situation: "It's the first day of a new semester. Valeria and Diego are in the university cafeteria talking about the new students in their group.",
    warmup: {
      prompt: "Which words describe you? Choose all that are true.",
      options: ["outgoing", "shy", "reliable", "easygoing", "hard-working", "creative", "patient", "talkative", "organized", "stubborn", "generous", "ambitious"],
      response: "Interesting! In this unit you'll learn to describe personalities and talk about first impressions."
    },
    dialogueTitle: "The new classmates",
    dialogue: [
      { who: "Valeria", line: "So, what do you *think* of the new guy, Andrés?" },
      { who: "Diego", line: "I'm not sure. He *seems* a bit arrogant. He *didn't say* hello to anyone." },
      { who: "Valeria", line: "Really? I *think* he's just shy. I *know* him from my English class and he's really kind." },
      { who: "Diego", line: "Maybe. First impressions aren't always right. *I'm thinking* of inviting him to our study group." },
      { who: "Valeria", line: "Good idea! He *seems* very organized. He *has* a planner for everything." },
      { who: "Diego", line: "Perfect, because we *need* someone reliable. Right now *we're having* problems with deadlines!" },
      { who: "Valeria", line: "Ha! That's true. I'll talk to him after class." }
    ]
  },

  objectives: [
    "I can describe people's personalities with a wide range of adjectives.",
    "I can support a description with examples of behavior.",
    "I can use stative verbs correctly, without the continuous form.",
    "I can talk about first impressions and how they can change."
  ],

  explanation: {
    vocabTitle: "Personality adjectives",
    vocab: [
      { word: "outgoing", icon: "🎉" }, { word: "shy", icon: "🙈" }, { word: "reliable", icon: "🤞" },
      { word: "easygoing", icon: "😌" }, { word: "hard-working", icon: "💼" }, { word: "bossy", icon: "👉" },
      { word: "stubborn", icon: "🐐" }, { word: "generous", icon: "🎁" }, { word: "selfish", icon: "🙅" },
      { word: "ambitious", icon: "🚀" }, { word: "sensitive", icon: "💧" }, { word: "arrogant", icon: "😤" },
      { word: "thoughtful", icon: "💐" }, { word: "moody", icon: "🌦️" }, { word: "trustworthy", icon: "🔐" }
    ],
    grammar: [
      {
        title: "Stative verbs: no continuous form",
        intro: "Stative verbs describe states (thoughts, feelings, possession, senses), not actions. We normally use them in simple forms.",
        head: ["Type", "Verbs", "Example"],
        rows: [
          ["thoughts / opinions", "*know, believe, understand, think (= opinion), remember, mean*", "I *know* him from class. (not *I'm knowing*)"],
          ["feelings", "*like, love, hate, prefer, want, need*", "We *need* someone reliable."],
          ["possession", "*have (= own), own, belong*", "He *has* a planner for everything."],
          ["senses / appearance", "*seem, look (= appear), sound, taste, smell*", "She *seems* very friendly."]
        ],
        note: "Even with *now* or *at the moment*, use the simple form: *I don't understand it right now.*"
      },
      {
        title: "Verbs with two meanings",
        head: ["Verb", "State (simple)", "Action (continuous OK)"],
        rows: [
          ["*think*", "*I think* he's shy. (= opinion)", "*I'm thinking* of inviting him. (= considering)"],
          ["*have*", "*She has* two brothers. (= possess)", "*We're having* lunch / problems. (= experience)"],
          ["*see*", "*I see* what you mean. (= understand)", "*I'm seeing* the doctor tomorrow. (= meeting)"],
          ["*look*", "*He looks* tired. (= appears)", "*She's looking* at the menu. (= action)"]
        ]
      },
      {
        title: "Describing with examples",
        head: ["Pattern", "Example"],
        rows: [
          ["*He's / She's quite / really / a bit* + adjective", "She's *a bit* bossy."],
          ["*…, for example, …*", "He's generous. *For example*, he always shares his notes."],
          ["*He tends to* + verb", "He *tends to* arrive late."],
          ["*She's the kind of person who…*", "She's *the kind of person who* never gives up."]
        ],
        note: "Use *a bit* with negative adjectives (*a bit selfish*), not with positive ones (not *a bit kind*)."
      }
    ],
    watchOut: [
      ["I'm knowing her since 2020.", "I've known her since 2020."],
      ["He is seeming very nice.", "He seems very nice."],
      ["I'm not understanding this exercise.", "I don't understand this exercise."],
      ["She is a bit intelligent.", "She's really intelligent."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the present simple or present continuous of the verb in parentheses.",
      items: [
        "I [[don't believe|do not believe]] he's arrogant. (not believe)",
        "We [[are having|'re having]] a great time at the party. (have)",
        "This soup [[tastes]] amazing! (taste)",
        "She [[is thinking|'s thinking]] about changing her major. (think)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio program about first impressions. A psychologist answers questions from listeners.",
      title: "The seven-second rule",
      script: [
        { who: "Host", line: "Good morning! Today we're talking about first impressions. Dr. Okafor, is it true that we judge people in seconds?" },
        { who: "Dr. Okafor", line: "Yes, it is. Studies show that we form an opinion about someone in about seven seconds. We notice their face, their clothes and their body language." },
        { who: "Host", line: "And are those first impressions usually right?" },
        { who: "Dr. Okafor", line: "Not always. For example, a shy person often seems cold or arrogant at first. In reality, they're just nervous." },
        { who: "Host", line: "We have a caller. Marina, go ahead." },
        { who: "Marina", line: "Hi! I have a job interview next week and I'm really worried. How can I make a good first impression?" },
        { who: "Dr. Okafor", line: "Great question. First, arrive on time. It shows that you're reliable. Second, smile and make eye contact. And finally, listen carefully. People like others who seem interested in them." },
        { who: "Marina", line: "What about clothes? I don't own a suit." },
        { who: "Dr. Okafor", line: "You don't need a suit. Just wear something clean and comfortable. If you feel good, you look confident." },
        { who: "Host", line: "Thank you, Dr. Okafor. And good luck, Marina!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide if each sentence is true or false.",
          items: [
            { s: "We form an opinion about someone in about seven minutes.", a: false },
            { s: "Shy people sometimes seem arrogant.", a: true },
            { s: "Marina has a job interview tomorrow.", a: false },
            { s: "Arriving on time shows that you're reliable.", a: true },
            { s: "Dr. Okafor says Marina needs to buy a suit.", a: false },
            { s: "People like others who seem interested in them.", a: true }
          ]
        },
        {
          type: "gap", title: "Dr. Okafor's tips",
          prompt: "Listen again and complete the tips with one word.",
          items: [
            "We notice people's face, clothes and body [[language]].",
            "Arrive on [[time]].",
            "Smile and make eye [[contact]].",
            "Listen [[carefully]].",
            "If you feel good, you look [[confident]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three posts from a forum: *My first impression was completely wrong!*",
      title: "My first impression was completely wrong!",
      text: [
        { author: "Fernanda, 20", body: "When I met my roommate, Lucía, I thought she was really unfriendly. She never talked at breakfast and she always had her headphones on. After a month, I discovered that she was just shy and stressed about her exams. Now she's my best friend. She's one of the most generous people I know: she cooks for me when I'm sick!" },
        { author: "Joaquín, 22", body: "My new boss seemed very easygoing at first. He made jokes and said, \"Don't worry about deadlines.\" But he's actually very demanding. He tends to change his mind every week, and he gets angry when things are late. I'm learning to be more organized because of him." },
        { author: "Ana Sofía, 19", body: "On the first day of class, a guy called Bruno arrived late, sat at the back and didn't say a word. I thought he was lazy. Then we did a group project, and he was the most hard-working person in the team. He did all the research and designed the presentation. I don't judge people so quickly any more." }
      ],
      activities: [
        {
          type: "match", title: "First impression vs. reality",
          prompt: "Match each person with the reality.",
          pairs: [
            ["Lucía seemed unfriendly, but", "she was shy and stressed about exams."],
            ["Joaquín's boss seemed easygoing, but", "he's very demanding."],
            ["Bruno seemed lazy, but", "he was the most hard-working in the team."],
            ["Lucía is very generous:", "she cooks for Fernanda when she's sick."],
            ["Because of his boss, Joaquín", "is learning to be more organized."]
          ]
        },
        {
          type: "sort", title: "Positive or negative?",
          prompt: "Sort the adjectives from the posts and the unit.",
          bins: ["Positive 🙂", "Negative 🙁"],
          items: [
            { text: "generous", bin: 0 }, { text: "hard-working", bin: 0 }, { text: "easygoing", bin: 0 }, { text: "reliable", bin: 0 }, { text: "thoughtful", bin: 0 },
            { text: "unfriendly", bin: 1 }, { text: "lazy", bin: 1 }, { text: "arrogant", bin: 1 }, { text: "selfish", bin: 1 }, { text: "moody", bin: 1 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice stative verbs and descriptions, then write about someone you misjudged.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake with a stative verb. Write the correct sentence.",
          items: [
            { q: "I'm not believing his story.", a: ["I don't believe his story.", "I do not believe his story."] },
            { q: "This bag is belonging to my sister.", a: ["This bag belongs to my sister."] },
            { q: "She is seeming nervous today.", a: ["She seems nervous today."] },
            { q: "Are you knowing the answer?", a: ["Do you know the answer?"] },
            { q: "We are needing more time.", a: ["We need more time."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "He tends to arrive late." },
            { a: "She's the kind of person who never gives up." },
            { a: "I think he's just a bit shy." },
            { a: "What do you think of my new boss?" },
            { a: "We're having problems with the project." }
          ]
        },
        {
          type: "write", title: "I was wrong about…",
          prompt: "Write a forum post (100–130 words) about a person you misjudged. Describe your first impression, what happened and what the person is really like. Use at least four personality adjectives and give examples of behavior.",
          minWords: 100, maxWords: 130,
          model: "When I started working at the library, I met Mr. Salinas, the manager. He seemed very strict and a bit arrogant. He never smiled and he tends to speak very little. I thought he didn't like me. However, one day I made a big mistake with the computer system, and he helped me patiently for two hours. He didn't get angry at all. Now I know he's actually a thoughtful and reliable person. He's just very quiet. For example, he remembers everyone's birthday and brings a cake. I've learned that first impressions are not always right, and I try to be more open with new people.",
          bank: ["At first, I thought…", "He / She seemed…", "However,", "He / She tends to…", "For example,", "Now I know he's / she's…", "I've learned that…"],
          checklist: [
            "I used at least **four** personality adjectives.",
            "I gave **examples** of the person's behavior.",
            "I used stative verbs (*seem, know, think*) in the **simple** form.",
            "I explained how my impression **changed**."
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
            "He seems a bit arrogant.",
            "I think he's just shy.",
            "She's really generous and thoughtful.",
            "We need someone reliable.",
            "First impressions aren't always right.",
            "He tends to arrive late."
          ]
        },
        {
          type: "speak", title: "Describe a person you admire",
          prompt: "Record yourself for one to two minutes. Describe a person you know well: what your first impression was, what their personality is really like (with examples) and why you admire them.",
          language: ["When I first met…", "He / She seemed…", "Actually, he's / she's…", "For example,…", "He / She tends to…", "What I admire most is…"],
          seconds: 120,
          checklist: ["use at least four personality adjectives?", "give examples of behavior?", "use stative verbs correctly?", "speak for at least one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can describe personalities with a wide range of adjectives.", review: "Explanation: the vocabulary cards" },
    { can: "I can support a description with examples.", review: "Explanation: describing with examples" },
    { can: "I can use stative verbs in the simple form.", review: "Explanation: stative verbs; Writing activity 1" },
    { can: "I can explain the two meanings of *think, have, see* and *look*.", review: "Explanation: verbs with two meanings" },
    { can: "I can understand a radio program about first impressions.", review: "Listening activities 1 and 2" },
    { can: "I can write and talk about how my impression of someone changed.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
