window.UNIT = {
  slug: "tell-me-about-yourself",
  number: 13,
  title: "Tell Me About Yourself",
  level: "B1",
  minutes: 60,
  speakers: { "Ms. Rangel": "f", "Joaquín": "m", "Recruiter": "m", "Candidate": "f" },
  focus: ["job interview questions and answers", "indirect questions: Could you tell me…?", "word order in indirect questions", "if / whether in indirect questions", "talking about strengths and weaknesses"],

  presentation: {
    scene: "🧑‍💼🤝❓✅",
    situation: "Joaquín is having a job interview for a position as a junior web developer at a company in Puebla.",
    warmup: {
      prompt: "Which questions do interviewers often ask? Choose all.",
      options: ["Tell me about yourself.", "What are your strengths?", "How much do you weigh?", "Why do you want this job?", "Are you married?", "Where do you see yourself in five years?", "What's your biggest weakness?", "Do you have any questions for us?", "What's your religion?", "Why should we hire you?"],
      response: "Good! Some questions are very common, and others are not appropriate. Let's practice for an interview."
    },
    dialogueTitle: "The interview",
    dialogue: [
      { who: "Ms. Rangel", line: "Good morning, Joaquín. Please sit down. *Could you tell me a little about yourself?*" },
      { who: "Joaquín", line: "Of course. I recently graduated in computer engineering, and I've been working as a freelance web designer for a year." },
      { who: "Ms. Rangel", line: "I see. *I'd like to know why you're interested in this position.*" },
      { who: "Joaquín", line: "I want to work in a team, and I really admire your company's apps." },
      { who: "Ms. Rangel", line: "Thank you. *Can you tell me what your biggest weakness is?*" },
      { who: "Joaquín", line: "Sometimes I spend too much time on details, but I'm learning to manage my time better." },
      { who: "Ms. Rangel", line: "Good answer. Do you have any questions for me?" },
      { who: "Joaquín", line: "Yes. *Could you tell me when the job starts?* And *do you know if there's training for new employees?*" }
    ]
  },

  objectives: [
    "I can understand and answer common job interview questions.",
    "I can ask polite indirect questions.",
    "I can use the correct word order in indirect questions.",
    "I can talk about my strengths, weaknesses and goals."
  ],

  explanation: {
    vocabTitle: "Interview language",
    vocab: [
      { word: "strength", icon: "💪" }, { word: "weakness", icon: "🩹" }, { word: "skills", icon: "🛠️" },
      { word: "qualifications", icon: "🎓" }, { word: "experience", icon: "📋" }, { word: "achievement", icon: "🏆" },
      { word: "a team player", icon: "🤝" }, { word: "a fast learner", icon: "⚡" }, { word: "work under pressure", icon: "⏱️" },
      { word: "meet deadlines", icon: "📅" }, { word: "solve problems", icon: "🧩" }, { word: "take responsibility", icon: "✋" },
      { word: "salary", icon: "💰" }, { word: "benefits", icon: "🎁" }, { word: "training", icon: "📚" }
    ],
    grammar: [
      {
        title: "Indirect questions",
        intro: "Indirect questions are more polite. After the opening phrase, use **statement word order** (subject + verb) and no *do / does / did*.",
        head: ["Direct question", "Indirect question"],
        rows: [
          ["Where *is* the office?", "*Could you tell me where* the office *is*?"],
          ["When *does* the job *start*?", "*Do you know when* the job *starts*?"],
          ["Why *did* you *leave* your last job?", "*I'd like to know why* you *left* your last job."],
          ["What *is* your biggest weakness?", "*Can you tell me what* your biggest weakness *is*?"]
        ],
        note: "Opening phrases: *Could you tell me…? / Do you know…? / I'd like to know… / I was wondering…* (the last two end with a period, not a question mark)."
      },
      {
        title: "Yes / no questions: if / whether",
        head: ["Direct question", "Indirect question"],
        rows: [
          ["*Is* there training?", "*Do you know if* there *is* training?"],
          ["*Can* I work from home?", "*Could you tell me whether* I *can* work from home?"],
          ["*Did* they receive my CV?", "*I was wondering if* they *received* my CV."]
        ]
      }
    ],
    watchOut: [
      ["Could you tell me where is the office?", "Could you tell me where the office is?"],
      ["Do you know when does the job start?", "Do you know when the job starts?"],
      ["Can you tell me is there parking?", "Can you tell me if there is parking?"],
      ["I'd like to know what time is it?", "I'd like to know what time it is."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the indirect questions.",
      items: [
        "Where is the meeting room? → Could you tell me where the meeting room [[is]]?",
        "When did you graduate? → I'd like to know when you [[graduated]].",
        "Is the job full-time? → Do you know [[if|whether]] the job is full-time?",
        "How much does it pay? → Can you tell me how much it [[pays]]?"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to part of a real-style interview for a customer service job at an airline.",
      title: "Customer service interview",
      script: [
        { who: "Recruiter", line: "Thanks for coming in. To start, could you tell me why you applied for this job?" },
        { who: "Candidate", line: "Sure. I love traveling and meeting people, and I speak English and some Portuguese. I think customer service at an airline is perfect for me." },
        { who: "Recruiter", line: "Great. I'd like to know if you've ever worked under pressure." },
        { who: "Candidate", line: "Yes, many times. I worked at a busy café near the cathedral for two years. On weekends we served more than three hundred customers a day." },
        { who: "Recruiter", line: "And can you tell me how you deal with angry customers?" },
        { who: "Candidate", line: "First, I listen without interrupting. Then I apologize and look for a solution. Once, a customer was furious because his order was wrong. I gave him a free dessert, and he came back the next week!" },
        { who: "Recruiter", line: "Ha! Very good. Do you have any questions for us?" },
        { who: "Candidate", line: "Yes, two. Could you tell me what the working hours are? And I was wondering whether employees get discounts on flights." },
        { who: "Recruiter", line: "We work in shifts of eight hours, and yes, after six months you get fifty percent off flights." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "The candidate speaks English and some Portuguese.", a: true },
            { s: "She worked at a café for two months.", a: false },
            { s: "The café served more than three hundred customers a day on weekends.", a: true },
            { s: "She gave the angry customer his money back.", a: false },
            { s: "Employees work in shifts of eight hours.", a: true },
            { s: "Employees get flight discounts from the first day.", a: false }
          ]
        },
        {
          type: "match", title: "The candidate's questions",
          prompt: "Match the direct question with its indirect form from the interview.",
          pairs: [
            ["Why did you apply?", "Could you tell me why you applied?"],
            ["Have you ever worked under pressure?", "I'd like to know if you've ever worked under pressure."],
            ["What are the working hours?", "Could you tell me what the working hours are?"],
            ["Do employees get discounts?", "I was wondering whether employees get discounts."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a careers blog.",
      title: "How to answer the three hardest interview questions",
      text: [
        { body: "**\"Tell me about yourself.\"** This is not an invitation to tell your life story. Talk for about one minute: your studies, your most relevant experience and why you're interested in the job. Practice it at home until it sounds natural." },
        { body: "**\"What's your biggest weakness?\"** Don't say \"I'm a perfectionist\" or \"I have no weaknesses.\" Interviewers have heard that a thousand times. Choose a real weakness that isn't essential for the job, and explain what you're doing to improve it." },
        { body: "**\"Where do you see yourself in five years?\"** The interviewer wants to know if you're ambitious and if you'll stay with the company. Show that you want to grow: \"I'd like to have more responsibility, maybe leading a small team.\"" },
        { body: "**And remember:** at the end, always ask one or two questions. Asking nothing can suggest that you're not really interested. Use polite, indirect questions, like \"Could you tell me what a typical day looks like?\"" }
      ],
      activities: [
        {
          type: "sort", title: "Good idea or bad idea?",
          prompt: "According to the article, sort the actions.",
          bins: ["Good idea ✅", "Bad idea ❌"],
          items: [
            { text: "talk for about one minute about yourself", bin: 0 }, { text: "choose a real weakness", bin: 0 }, { text: "explain how you're improving", bin: 0 }, { text: "ask one or two questions at the end", bin: 0 },
            { text: "tell your whole life story", bin: 1 }, { text: "say you have no weaknesses", bin: 1 }, { text: "say \"I'm a perfectionist\"", bin: 1 }, { text: "ask nothing at the end", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Make it indirect",
          prompt: "Rewrite the questions starting with the words given.",
          items: [
            { q: "What does a typical day look like? (Could you tell me…)", a: ["Could you tell me what a typical day looks like?"] },
            { q: "When will you make a decision? (Do you know…)", a: ["Do you know when you will make a decision?", "Do you know when you'll make a decision?"] },
            { q: "Is there a dress code? (I was wondering…)", a: ["I was wondering if there is a dress code.", "I was wondering whether there is a dress code.", "I was wondering if there's a dress code."] },
            { q: "How many people work in the team? (Can you tell me…)", a: ["Can you tell me how many people work in the team?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice indirect questions, then prepare your interview answers.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Could you tell me where the office is?" },
            { a: "Do you know if the job is full-time?" },
            { a: "I'd like to know why you left your job." },
            { a: "Can you tell me when the interview starts?" },
            { a: "I was wondering whether I can work from home." }
          ]
        },
        {
          type: "rewrite", title: "Correct the word order",
          prompt: "Each indirect question has a mistake. Write it correctly.",
          items: [
            { q: "Could you tell me what time does the meeting start?", a: ["Could you tell me what time the meeting starts?"] },
            { q: "Do you know where is the bathroom?", a: ["Do you know where the bathroom is?"] },
            { q: "I'd like to know how much is the salary.", a: ["I'd like to know how much the salary is.", "I would like to know how much the salary is."] },
            { q: "Can you tell me did you receive my CV?", a: ["Can you tell me if you received my CV?", "Can you tell me whether you received my CV?"] }
          ]
        },
        {
          type: "write", title: "Prepare your answers",
          prompt: "Write your answers (130–160 words in total) to three interview questions: *Tell me about yourself. What's your biggest strength and weakness? Where do you see yourself in five years?* Then write two indirect questions you'd ask the interviewer.",
          minWords: 130, maxWords: 160,
          model: "Tell me about yourself: I'm in my last year of Business Administration at BUAP. For the past year, I've been working part-time at a bank, where I help customers open accounts. I'm interested in this job because I'd like to work in marketing.<br>Strength and weakness: My biggest strength is that I'm a good communicator. I gave presentations in every semester, and I'm comfortable speaking in public. My weakness is that I find it hard to say no, so sometimes I have too much work. I'm learning to organize my priorities with a planner.<br>In five years: I'd like to have more responsibility and maybe lead a small team. I also hope to finish a master's degree.<br>My questions: Could you tell me what a typical day looks like? I was wondering if there are opportunities for training.",
          bank: ["I'm currently…", "I've been working as…", "My biggest strength is…", "My weakness is…, but I'm…", "In five years, I'd like to…", "Could you tell me…?", "I was wondering if…"],
          checklist: [
            "I answered all **three** questions.",
            "I gave **examples** for my strength.",
            "I explained how I'm **improving** my weakness.",
            "I wrote **two** indirect questions with correct word order."
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
            "Could you tell me about yourself?",
            "Could you tell me when the job starts?",
            "Do you know if there is training?",
            "I'd like to know why you applied.",
            "My biggest strength is solving problems.",
            "I'm learning to manage my time better."
          ]
        },
        {
          type: "speak", title: "My interview",
          prompt: "Record yourself answering the question *\"Tell me about yourself\"* and talking about your strengths, a weakness and your five-year plan (about two minutes). Finish with two indirect questions for the interviewer.",
          language: ["I recently graduated / I'm studying…", "I have experience in…", "My biggest strength is…", "One weakness is…, but…", "In five years,…", "Could you tell me…?"],
          seconds: 150,
          checklist: ["answer \"Tell me about yourself\" in about one minute?", "give an example of a strength?", "explain how you're improving a weakness?", "ask two indirect questions?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand common job interview questions.", review: "Listening; Reading" },
    { can: "I can form indirect questions with *Could you tell me…?* and *Do you know…?*", review: "Explanation: indirect questions" },
    { can: "I can use statement word order in indirect questions.", review: "Writing activities 1 and 2" },
    { can: "I can use *if / whether* in yes / no indirect questions.", review: "Explanation: if / whether" },
    { can: "I can talk about my strengths and weaknesses.", review: "Reading paragraph 2; Writing activity 3" },
    { can: "I can answer interview questions with confidence.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
