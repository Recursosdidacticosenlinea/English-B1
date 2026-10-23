window.UNIT = {
  slug: "study-smarter",
  number: 15,
  title: "Study Smarter",
  level: "B1",
  minutes: 60,
  speakers: { "Alejandra": "f", "Rubén": "m", "Professor": "f", "Mr. Kim": "m" },
  focus: ["study habits and techniques", "had to / didn't have to (past obligation)", "was / were allowed to, could / couldn't (past permission)", "needed to / didn't need to", "comparing school rules then and now"],

  presentation: {
    scene: "📚🧠⏲️✏️",
    situation: "Alejandra and Rubén are comparing their high schools while they study together for a big exam.",
    warmup: {
      prompt: "Which study techniques do you use? Choose all.",
      options: ["making summaries", "flashcards", "mind maps", "studying the night before", "studying in a group", "teaching someone else", "practice tests", "highlighting", "listening to music", "the Pomodoro technique", "recording myself", "rereading notes"],
      response: "Interesting! In this unit you'll learn about study techniques and talk about rules in the past."
    },
    dialogueTitle: "School rules",
    dialogue: [
      { who: "Rubén", line: "In my high school we *had to* wear a uniform every day, even on Fridays." },
      { who: "Alejandra", line: "Really? We *didn't have to* wear one. But we *weren't allowed to* use our phones in class." },
      { who: "Rubén", line: "Same! The teachers took them if they saw them. *Could* you leave school at lunchtime?" },
      { who: "Alejandra", line: "No, we *couldn't*. We *had to* stay inside until two." },
      { who: "Rubén", line: "And did you *have to* do a lot of homework?" },
      { who: "Alejandra", line: "Tons. But I *didn't need to* study much for exams, because the teachers repeated everything." },
      { who: "Rubén", line: "Well, now we *need to* study smarter. This exam is in two days!" }
    ]
  },

  objectives: [
    "I can talk about study habits and effective techniques.",
    "I can use *had to / didn't have to* for past obligation.",
    "I can use *was allowed to* and *could* for past permission.",
    "I can compare rules and habits in the past and present."
  ],

  explanation: {
    vocabTitle: "Studying",
    vocab: [
      { word: "revise / review", icon: "🔁" }, { word: "memorize", icon: "🧠" }, { word: "take notes", icon: "📝" },
      { word: "cram", icon: "🌙" }, { word: "fall behind", icon: "🐢" }, { word: "catch up", icon: "🏃" },
      { word: "a deadline", icon: "⏰" }, { word: "an assignment", icon: "📄" }, { word: "a grade", icon: "🅰️" },
      { word: "pass / fail", icon: "✅" }, { word: "a mind map", icon: "🗺️" }, { word: "flashcards", icon: "🃏" },
      { word: "procrastinate", icon: "📱" }, { word: "focus", icon: "🎯" }, { word: "a study group", icon: "👥" }
    ],
    grammar: [
      {
        title: "Past obligation",
        head: ["Present", "Past", "Example"],
        rows: [
          ["*must / have to*", "*had to*", "We *had to* wear a uniform."],
          ["*don't have to*", "*didn't have to*", "We *didn't have to* wear a uniform."],
          ["*need to*", "*needed to*", "I *needed to* study more."],
          ["*don't need to*", "*didn't need to*", "I *didn't need to* study much."]
        ],
        note: "There is no past form of *must*. Use *had to*: *Yesterday I had to get up at six.*"
      },
      {
        title: "Past permission and prohibition",
        head: ["Present", "Past", "Example"],
        rows: [
          ["*can / can't*", "*could / couldn't*", "We *couldn't* leave at lunchtime."],
          ["*am / is / are allowed to*", "*was / were allowed to*", "We *were allowed to* use calculators."],
          ["*mustn't / not allowed to*", "*wasn't / weren't allowed to*", "We *weren't allowed to* use phones."],
          ["question", "", "*Were* you *allowed to* bring food? / *Did* you *have to* do homework?"]
        ]
      }
    ],
    watchOut: [
      ["Yesterday I must study until midnight.", "Yesterday I had to study until midnight."],
      ["We didn't had to wear a uniform.", "We didn't have to wear a uniform."],
      ["We weren't allowed use phones.", "We weren't allowed to use phones."],
      ["Did you had to do homework?", "Did you have to do homework?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *had to, didn't have to, could, couldn't, was / were (not) allowed to*.",
      items: [
        "It was a holiday, so I [[didn't have to|did not have to]] go to school.",
        "In my primary school, we [[weren't allowed to|were not allowed to|couldn't]] run in the halls.",
        "I missed the bus, so I [[had to]] walk home.",
        "When I was sixteen, I [[could|was allowed to]] stay out until ten."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to part of a university workshop about study techniques.",
      title: "Learning how to learn",
      script: [
        { who: "Professor", line: "Good afternoon. Let me start with a question: how many of you studied for your last exam the night before? Yes, almost everyone." },
        { who: "Professor", line: "That technique is called cramming. It feels productive, but research shows you forget most of the information in a few days." },
        { who: "Professor", line: "When I was a student, I had to learn everything by memory. We weren't allowed to use books in exams, and we didn't have computers. So I needed to find good techniques." },
        { who: "Professor", line: "The first one is spaced repetition. Instead of studying for five hours on one day, you study for one hour on five different days. Your brain remembers better." },
        { who: "Professor", line: "The second is active recall. Don't just reread your notes. Close the book and try to remember. Use flashcards or practice tests." },
        { who: "Professor", line: "The third is the Pomodoro technique: twenty-five minutes of focus, then a five-minute break. And no phone on the desk!" },
        { who: "Mr. Kim", line: "Excuse me, professor. Can we listen to music while we study?" },
        { who: "Professor", line: "Good question. Music without words is OK for some people. But songs with lyrics usually make it harder to focus." }
      ],
      activities: [
        {
          type: "match", title: "The techniques",
          prompt: "Match each technique with its description.",
          pairs: [
            ["Cramming", "studying everything the night before"],
            ["Spaced repetition", "one hour on five different days"],
            ["Active recall", "closing the book and trying to remember"],
            ["Pomodoro", "twenty-five minutes of focus and a short break"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Very few students in the workshop crammed for their last exam.", a: false },
            { s: "When the professor was a student, they were allowed to use books in exams.", a: false },
            { s: "The professor had to learn everything by memory.", a: true },
            { s: "Rereading notes is the best way to study.", a: false },
            { s: "Songs with lyrics can make it harder to focus.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two people's memories of studying in very different places.",
      title: "School days around the world",
      text: [
        { author: "Min-jun, 26 · South Korea", body: "In high school, I had to study from eight in the morning until ten at night. After normal classes, we had to stay for \"self-study\" in the classroom. We weren't allowed to dye our hair or wear makeup. It was very stressful, but I learned to be disciplined. When I came to Mexico for my master's degree, I was surprised: I didn't have to stay at school all day!" },
        { author: "Valentina, 22 · Mexico", body: "My high school in Tlaxcala was quite relaxed. We had to wear a uniform, but we were allowed to use our phones during breaks. We didn't have to do much homework, so I didn't learn good study habits. When I started university, I fell behind in my first semester. I needed to learn how to organize my time quickly. Now I use a planner and the Pomodoro technique." }
      ],
      activities: [
        {
          type: "sort", title: "Min-jun or Valentina?",
          prompt: "Who had each experience?",
          bins: ["Min-jun", "Valentina"],
          items: [
            { text: "had to study until ten at night", bin: 0 }, { text: "wasn't allowed to dye their hair", bin: 0 }, { text: "learned to be disciplined", bin: 0 },
            { text: "was allowed to use a phone during breaks", bin: 1 }, { text: "didn't have to do much homework", bin: 1 }, { text: "fell behind in the first semester", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Rewrite in the past",
          prompt: "Rewrite these present rules in the past.",
          items: [
            { q: "We have to wear a uniform.", a: ["We had to wear a uniform."] },
            { q: "We aren't allowed to use phones in class.", a: ["We weren't allowed to use phones in class.", "We were not allowed to use phones in class."] },
            { q: "I don't need to study on weekends.", a: ["I didn't need to study on weekends.", "I did not need to study on weekends."] },
            { q: "Can you leave at lunchtime?", a: ["Could you leave at lunchtime?", "Were you allowed to leave at lunchtime?"] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice past obligation and permission, then write about your school.",
      activities: [
        {
          type: "gap", title: "Complete the memories",
          prompt: "Complete with the past form of the expression in parentheses.",
          items: [
            "In primary school, we [[had to]] stand up when the teacher came in. (have to)",
            "We [[weren't allowed to|were not allowed to]] eat in the classroom. (not be allowed to)",
            "On Fridays we [[didn't have to|did not have to]] wear the uniform. (not have to)",
            "[[Were]] you allowed to bring your phone? (be)",
            "I [[couldn't|could not]] go out on school nights. (can't)"
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "We had to wear a uniform every day." },
            { a: "We weren't allowed to use our phones." },
            { a: "Did you have to do a lot of homework?" },
            { a: "I didn't need to study much." }
          ]
        },
        {
          type: "write", title: "My high school rules",
          prompt: "Write a text (120–150 words) for an international student website about your high school. Describe the rules (what you had to do, didn't have to do, were allowed to and weren't allowed to do), your study habits then, and how you study now.",
          minWords: 120, maxWords: 150,
          model: "I went to a public high school in Puebla. The rules were quite strict. We had to arrive at seven, and if we were late, we weren't allowed to go in until the second class. We had to wear a uniform from Monday to Thursday, but on Fridays we didn't have to wear it. We weren't allowed to use our phones in class, but we could use them during breaks. My study habits were terrible! I didn't need to study much, because the exams were easy, so I always crammed the night before. At university that didn't work, and I failed my first math exam. Now I use spaced repetition and practice tests, and I study in a group twice a week. My grades are much better.",
          bank: ["We had to…", "We didn't have to…", "We were allowed to…", "We weren't allowed to…", "We could / couldn't…", "Back then, I…", "Now I…"],
          checklist: [
            "I used **had to** and **didn't have to**.",
            "I used **was / were (not) allowed to** or **could / couldn't**.",
            "I described my study habits **then** and **now**.",
            "I didn't use *must* for the past."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the pronunciation of *had to* (/hætə/).",
          items: [
            "We had to wear a uniform.",
            "We didn't have to wear one.",
            "We weren't allowed to use our phones.",
            "Could you leave at lunchtime?",
            "I didn't need to study much.",
            "Now we need to study smarter."
          ]
        },
        {
          type: "speak", title: "Then and now: studying",
          prompt: "Record yourself for one to two minutes. Compare your primary or high school with your university or CAA studies now: rules, obligations, freedom and study techniques. Which do you prefer and why?",
          language: ["In high school, we had to…", "We didn't have to…", "We weren't allowed to…", "Now I can…", "The best technique for me is…", "I prefer… because…"],
          seconds: 120,
          checklist: ["use had to / didn't have to?", "use was allowed to or could?", "mention a study technique?", "give your opinion?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about study habits and techniques.", review: "Explanation: the vocabulary cards; Listening" },
    { can: "I can use *had to / didn't have to* for past obligation.", review: "Explanation: past obligation" },
    { can: "I can use *could* and *was allowed to* for past permission.", review: "Explanation: past permission and prohibition" },
    { can: "I can change present rules into the past.", review: "Reading activity 2; Writing activity 1" },
    { can: "I can understand a workshop about study techniques.", review: "Listening activities 1 and 2" },
    { can: "I can compare school rules and habits then and now.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
