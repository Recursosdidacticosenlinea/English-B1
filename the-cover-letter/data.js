window.UNIT = {
  slug: "the-cover-letter",
  number: 12,
  title: "The Cover Letter",
  level: "B1",
  minutes: 65,
  speakers: { "Daniel": "m", "Ms. Lara": "f", "Adviser": "f", "Student": "m" },
  focus: ["formal vs. informal register", "structure of a formal email or cover letter", "formal phrases: I am writing to…, I would be grateful if…", "avoiding contractions and slang", "applying for a job or internship"],

  presentation: {
    scene: "📧🖋️💼📄",
    situation: "Daniel wants to apply for a summer internship at a tourism company. He asks Ms. Lara, the CAA adviser, to check his email.",
    warmup: {
      prompt: "Which of these are OK in a formal email? Choose all.",
      options: ["Dear Ms. Pérez,", "Hey there!", "I am writing to…", "Thx!", "I look forward to hearing from you.", "Wanna meet?", "Yours sincerely,", "LOL", "Best regards,", "I would be grateful if…"],
      response: "Good eye! In this unit you'll learn to write formal emails and cover letters."
    },
    dialogueTitle: "Checking the email",
    dialogue: [
      { who: "Daniel", line: "Ms. Lara, could you check my email for the internship? Here it is: \"Hi! I wanna apply for the job. I'm super good at English. Thx!\"" },
      { who: "Ms. Lara", line: "Hmm. It's friendly, but it's too informal for a company. Let's change it." },
      { who: "Daniel", line: "What's wrong with it?" },
      { who: "Ms. Lara", line: "First, start with *Dear* and the person's name: *Dear Mr. Ortiz*. Then say why you're writing: *I am writing to apply for the summer internship.*" },
      { who: "Daniel", line: "OK. And no contractions, right?" },
      { who: "Ms. Lara", line: "Exactly. And instead of \"super good,\" give evidence: *I have a B1 level of English and experience working with tourists.*" },
      { who: "Daniel", line: "And the ending?" },
      { who: "Ms. Lara", line: "*I look forward to hearing from you. Yours sincerely, Daniel Ramos.* Much better!" }
    ]
  },

  objectives: [
    "I can recognize the difference between formal and informal language.",
    "I can organize a formal email or cover letter in clear paragraphs.",
    "I can use standard formal phrases to begin and end an email.",
    "I can write a cover letter for a job or internship."
  ],

  explanation: {
    vocabTitle: "Formal email phrases",
    vocab: [
      { word: "Dear Sir or Madam,", icon: "📨" }, { word: "Dear Ms. Pérez,", icon: "👩‍💼" }, { word: "I am writing to apply for…", icon: "✍️" },
      { word: "I am writing to enquire about…", icon: "❓" }, { word: "I saw your advertisement on…", icon: "📰" }, { word: "I am currently studying…", icon: "🎓" },
      { word: "I have experience in…", icon: "🛠️" }, { word: "I would be grateful if…", icon: "🙏" }, { word: "Please find attached my CV.", icon: "📎" },
      { word: "I am available for an interview.", icon: "📅" }, { word: "Do not hesitate to contact me.", icon: "📞" }, { word: "I look forward to hearing from you.", icon: "👀" },
      { word: "Yours sincerely,", icon: "🖋️" }, { word: "Yours faithfully,", icon: "🖊️" }, { word: "Best regards,", icon: "🤝" }
    ],
    grammar: [
      {
        title: "Formal or informal?",
        head: ["Informal", "Formal"],
        rows: [
          ["Hi Ana! / Hey!", "*Dear Ms. Ruiz,* / *Dear Sir or Madam,*"],
          ["I want to…", "*I would like to…*"],
          ["Can you…?", "*Could you…? / I would be grateful if you could…*"],
          ["I'm, don't, can't", "*I am, do not, cannot* (no contractions)"],
          ["Thanks a lot!", "*Thank you for your time and consideration.*"],
          ["about / get", "*regarding / receive, obtain*"],
          ["Bye! / See you!", "*I look forward to hearing from you. Yours sincerely,*"]
        ],
        note: "*Yours sincerely* when you know the name (*Dear Mr. Ortiz*). *Yours faithfully* when you don't (*Dear Sir or Madam*). *Best regards* is OK for most emails."
      },
      {
        title: "Structure of a cover letter",
        head: ["Paragraph", "Content", "Useful phrase"],
        rows: [
          ["1 · Reason", "which job and where you saw it", "*I am writing to apply for the position of… advertised on…*"],
          ["2 · Who you are", "studies, experience, skills", "*I am currently studying… I have experience in…*"],
          ["3 · Why you", "why you are a good candidate", "*I believe I would be a good candidate because…*"],
          ["4 · Closing", "availability and thanks", "*I am available for an interview… I look forward to hearing from you.*"]
        ]
      }
    ],
    watchOut: [
      ["Dear Mr. Carlos,", "Dear Mr. Ortiz, (surname, not first name)"],
      ["I'm writing because I wanna apply.", "I am writing to apply for…"],
      ["I look forward to hear from you.", "I look forward to hearing from you."],
      ["Dear Sir or Madam, … Yours sincerely,", "Dear Sir or Madam, … Yours faithfully,"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the formal phrases.",
      items: [
        "I am [[writing]] to apply for the position of receptionist.",
        "Please find [[attached]] my CV.",
        "I would be [[grateful]] if you could send me more information.",
        "I look forward to [[hearing]] from you."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a career adviser giving a student tips about cover letters.",
      title: "Five cover letter mistakes",
      script: [
        { who: "Adviser", line: "Hi, come in. So you want help with your cover letter?" },
        { who: "Student", line: "Yes, please. I've sent it to five companies, but nobody has answered." },
        { who: "Adviser", line: "Let's see. Mistake number one: you wrote \"To whom it may concern.\" Always try to find the name of the person. It shows you've done your research." },
        { who: "Student", line: "OK. I didn't know that." },
        { who: "Adviser", line: "Number two: your letter is too long. Recruiters spend about thirty seconds on each one. Keep it to one page, four short paragraphs." },
        { who: "Student", line: "Mine is almost two pages." },
        { who: "Adviser", line: "Number three: you say \"I'm a hard-working person,\" but you don't give examples. Write something like \"I organized a charity event for two hundred people.\"" },
        { who: "Student", line: "That makes sense." },
        { who: "Adviser", line: "Number four: you sent the same letter to every company. Change it for each job. And number five: check your spelling! You wrote \"maneger\" instead of \"manager.\"" },
        { who: "Student", line: "Oh no. That's embarrassing. Thank you!" }
      ],
      activities: [
        {
          type: "match", title: "Mistakes and solutions",
          prompt: "Match each mistake with the adviser's solution.",
          pairs: [
            ["\"To whom it may concern\"", "Find the person's name."],
            ["A letter of almost two pages", "Keep it to one page."],
            ["\"I'm a hard-working person\"", "Give a real example."],
            ["The same letter for every company", "Change it for each job."],
            ["\"maneger\"", "Check your spelling."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The student has sent the letter to five companies.", a: true },
            { s: "Recruiters spend about three minutes on each letter.", a: false },
            { s: "The adviser recommends four short paragraphs.", a: true },
            { s: "The student organized an event for two hundred people.", a: false },
            { s: "The student made a spelling mistake.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a cover letter for an internship at a hotel in Cancún.",
      title: "A cover letter",
      text: [
        { body: "Dear Ms. Herrera," },
        { body: "I am writing to apply for the summer internship in Guest Services, which I saw advertised on the Hotel Caribe Azul website." },
        { body: "I am currently in my sixth semester of Tourism at BUAP, and I have a B1 level of English. Last summer I worked as a part-time tour guide in Puebla, where I helped groups of up to thirty international visitors. This experience taught me to stay calm and solve problems quickly." },
        { body: "I believe I would be a good candidate for this position because I enjoy working with people from different cultures, and I am organized and reliable. I am also learning French, which I hope to practice with your guests." },
        { body: "Please find attached my CV. I am available for an interview at any time, either in person or online. Thank you for your time and consideration. I look forward to hearing from you." },
        { body: "Yours sincerely,<br>Daniel Ramos" }
      ],
      activities: [
        {
          type: "match", title: "The structure",
          prompt: "Match each paragraph with its purpose.",
          pairs: [
            ["\"I am writing to apply for…\"", "the reason for writing"],
            ["\"I am currently in my sixth semester…\"", "studies and experience"],
            ["\"I believe I would be a good candidate…\"", "why he is a good candidate"],
            ["\"I am available for an interview…\"", "availability and closing"]
          ]
        },
        {
          type: "rewrite", title: "Make it formal",
          prompt: "Rewrite these informal sentences in formal language from the letter.",
          items: [
            { q: "Hi Ms. Herrera!", a: ["Dear Ms. Herrera,", "Dear Ms. Herrera"] },
            { q: "I want the summer internship.", a: ["I am writing to apply for the summer internship.", "I would like to apply for the summer internship."] },
            { q: "My CV is here.", a: ["Please find attached my CV.", "Please find my CV attached."] },
            { q: "Talk soon!", a: ["I look forward to hearing from you."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice formal language, then write your own cover letter.",
      activities: [
        {
          type: "sort", title: "Formal or informal?",
          prompt: "Sort the expressions.",
          bins: ["Formal 🎩", "Informal 👕"],
          items: [
            { text: "I would be grateful if…", bin: 0 }, { text: "Yours faithfully,", bin: 0 }, { text: "regarding", bin: 0 }, { text: "I look forward to hearing from you.", bin: 0 }, { text: "Do not hesitate to contact me.", bin: 0 },
            { text: "Thanks a lot!", bin: 1 }, { text: "Hey!", bin: 1 }, { text: "about", bin: 1 }, { text: "See you soon!", bin: 1 }, { text: "Can you…?", bin: 1 }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I am writing to apply for the position." },
            { a: "I have experience in customer service." },
            { a: "I am available for an interview next week." },
            { a: "Thank you for your time and consideration." }
          ]
        },
        {
          type: "write", title: "My cover letter",
          prompt: "Choose a real or imaginary job or internship. Write a cover letter (140–170 words) with four paragraphs: reason for writing, your studies and experience, why you are a good candidate, and closing. Use formal language and no contractions.",
          minWords: 140, maxWords: 170,
          model: "Dear Mr. Castillo,<br>I am writing to apply for the position of part-time assistant at the Amparo Museum, which I saw advertised on your website.<br>I am currently studying History at BUAP, and I have a B1 level of English. Last year I volunteered at my university library, where I helped organize two exhibitions about local history. I also have experience giving short presentations to groups of students.<br>I believe I would be a good candidate for this position because I am passionate about art and history, and I enjoy explaining them to visitors. I am responsible and punctual, and I work well in a team. I am also available to work on weekends.<br>Please find attached my CV and a letter of recommendation. I would be grateful for the opportunity to discuss my application in an interview. Thank you for your time and consideration. I look forward to hearing from you.<br>Yours sincerely,<br>Ana Morales",
          bank: ["Dear Mr. / Ms.…,", "I am writing to apply for…", "I am currently studying…", "I have experience in…", "I believe I would be a good candidate because…", "Please find attached…", "I look forward to hearing from you.", "Yours sincerely,"],
          checklist: [
            "I used a formal **greeting** and **ending**.",
            "I wrote **four** clear paragraphs.",
            "I gave **examples** of my experience.",
            "I did not use **contractions** or slang."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each formal sentence. Then say it and check your pronunciation.",
          items: [
            "I am writing to apply for the internship.",
            "Please find attached my CV.",
            "I have experience in customer service.",
            "I would be grateful for an interview.",
            "I look forward to hearing from you.",
            "Thank you for your time."
          ]
        },
        {
          type: "speak", title: "A video application",
          prompt: "Some companies ask for a short video instead of a letter. Record a one- to two-minute formal video application: introduce yourself, say which job you're applying for, describe your studies and experience, and explain why you're a good candidate.",
          language: ["Good morning. My name is…", "I would like to apply for…", "I am currently studying…", "I have experience in…", "I believe I am a good candidate because…", "Thank you for your time."],
          seconds: 120,
          checklist: ["use formal language?", "follow a clear structure?", "give examples of your experience?", "close politely?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can tell the difference between formal and informal language.", review: "Explanation: formal or informal; Writing activity 1" },
    { can: "I can begin and end a formal email correctly.", review: "Explanation: the vocabulary cards; watch out" },
    { can: "I can organize a cover letter in four paragraphs.", review: "Explanation: structure of a cover letter; Reading activity 1" },
    { can: "I can understand advice about writing cover letters.", review: "Listening activities 1 and 2" },
    { can: "I can change informal sentences into formal ones.", review: "Reading activity 2" },
    { can: "I can write a cover letter for a job or internship.", review: "Writing activity 3" }
  ]
};
