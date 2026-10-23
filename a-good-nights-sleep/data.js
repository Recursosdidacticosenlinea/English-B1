window.UNIT = {
  slug: "a-good-nights-sleep",
  number: 24,
  title: "A Good Night's Sleep",
  level: "B1",
  minutes: 60,
  speakers: { "Ximena": "f", "Iván": "m", "Lecturer": "m", "Student": "f" },
  focus: ["sleep vocabulary", "purpose: to + infinitive", "in order to / so as to (formal)", "so that + can / could / will / would", "explaining reasons for habits"],

  presentation: {
    scene: "😴🌙⏰☕",
    situation: "Ximena is yawning in class. Her classmate Iván asks what's wrong.",
    warmup: {
      prompt: "What do you do before going to sleep? Choose all.",
      options: ["check my phone", "read a book", "take a shower", "drink tea", "watch a series", "listen to music", "brush my teeth", "set an alarm", "study", "meditate", "eat something", "talk to my family"],
      response: "Interesting! In this unit you'll learn to talk about sleep and explain the purpose of your actions."
    },
    dialogueTitle: "Too tired",
    dialogue: [
      { who: "Iván", line: "You look exhausted. Did you stay up late again?" },
      { who: "Ximena", line: "Yes. I stayed up until three *to finish* my essay." },
      { who: "Iván", line: "Again? You need a better routine." },
      { who: "Ximena", line: "I know. I drink coffee *so that* I *can* stay awake, but then I can't sleep." },
      { who: "Iván", line: "I had the same problem. Now I leave my phone in the kitchen *so that* I *don't* look at it in bed." },
      { who: "Ximena", line: "Does it work?" },
      { who: "Iván", line: "Totally. I also wake up at the same time every day *in order to* keep my body clock regular." },
      { who: "Ximena", line: "OK, tonight I'll try it. I'll go to bed early *so as not to* fall asleep in class tomorrow!" }
    ]
  },

  objectives: [
    "I can talk about sleep habits and problems.",
    "I can express purpose with *to* + infinitive.",
    "I can use *in order to* and *so as to* in more formal contexts.",
    "I can use *so that* + subject + modal to explain purpose."
  ],

  explanation: {
    vocabTitle: "Sleep",
    vocab: [
      { word: "fall asleep", icon: "😪" }, { word: "stay up late", icon: "🦉" }, { word: "oversleep", icon: "⏰" },
      { word: "a nap", icon: "💤" }, { word: "yawn", icon: "🥱" }, { word: "snore", icon: "😤" },
      { word: "a nightmare", icon: "👹" }, { word: "insomnia", icon: "👀" }, { word: "a light sleeper", icon: "🪶" },
      { word: "a heavy sleeper", icon: "🪨" }, { word: "body clock", icon: "🕰️" }, { word: "sleep deprivation", icon: "🧟" },
      { word: "toss and turn", icon: "🔄" }, { word: "wide awake", icon: "😳" }, { word: "an early bird / a night owl", icon: "🐦" }
    ],
    grammar: [
      {
        title: "Expressing purpose",
        head: ["Structure", "Register", "Example"],
        rows: [
          ["*to* + base verb", "neutral, very common", "I stayed up *to finish* my essay."],
          ["*in order to* + base verb", "more formal", "I wake up early *in order to* keep my body clock regular."],
          ["*so as to* + base verb", "formal", "Turn off the lights *so as to* save energy."],
          ["*in order not to / so as not to*", "negative purpose", "I went to bed early *so as not to* fall asleep in class."]
        ],
        note: "For a negative purpose, don't say *not to* alone: *I left early so as not to be late* (not *I left early not to be late* in formal writing)."
      },
      {
        title: "So that",
        intro: "Use *so that* + subject + verb, often with *can / could / will / would*. It's useful when the subject changes.",
        head: ["Example", "Note"],
        rows: [
          ["I drink coffee *so that I can* stay awake.", "present: *can / will*"],
          ["I left my phone in the kitchen *so that I wouldn't* look at it.", "past: *could / would*"],
          ["Speak quietly *so that* the baby *doesn't* wake up.", "different subject"]
        ]
      }
    ],
    watchOut: [
      ["I went to the store for buy milk.", "I went to the store to buy milk."],
      ["I study for pass the exam.", "I study to pass the exam."],
      ["I set two alarms so that I don't oversleep yesterday.", "I set two alarms so that I wouldn't oversleep."],
      ["She left early for not miss the bus.", "She left early so as not to miss the bus."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with one word.",
      items: [
        "I set an alarm [[to]] wake up at six.",
        "We whispered so [[that]] we wouldn't wake the baby.",
        "In [[order]] to sleep better, avoid screens before bed.",
        "Take a nap so as [[not]] to feel tired later."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to part of a university lecture about the science of sleep.",
      title: "Why do we sleep?",
      script: [
        { who: "Lecturer", line: "Good morning. Today's topic is something you're probably not getting enough of: sleep." },
        { who: "Lecturer", line: "Why do we sleep? For a long time, scientists didn't know. Now we know that we sleep for several reasons. First, we sleep in order to save the information we learned during the day. That's why sleeping after studying is so important." },
        { who: "Lecturer", line: "Second, the brain cleans itself during sleep. It removes waste products so that it can work properly the next day." },
        { who: "Lecturer", line: "Third, the body repairs muscles and produces hormones to help us grow and fight illness." },
        { who: "Student", line: "Professor, how many hours do university students need?" },
        { who: "Lecturer", line: "Between seven and nine hours. But studies show that most students sleep about six. And pulling an all-nighter to study is a terrible idea: your memory works up to forty percent worse after a night without sleep." },
        { who: "Student", line: "What about naps?" },
        { who: "Lecturer", line: "Short naps are great. Twenty minutes is ideal. Don't sleep more than thirty minutes so as not to feel groggy afterward. And try not to nap after four p.m., so that you can fall asleep at night." }
      ],
      activities: [
        {
          type: "match", title: "Why do we sleep?",
          prompt: "Match each process with its purpose.",
          pairs: [
            ["We sleep in order to", "save the information we learned."],
            ["The brain removes waste", "so that it can work properly."],
            ["The body produces hormones", "to help us grow and fight illness."],
            ["Don't nap more than thirty minutes", "so as not to feel groggy."],
            ["Don't nap after four p.m.", "so that you can fall asleep at night."]
          ]
        },
        {
          type: "gap", title: "Listen for numbers",
          prompt: "Listen again and complete with numbers.",
          items: [
            "Students need between seven and [[nine|9]] hours of sleep.",
            "Most students sleep about [[six|6]] hours.",
            "After a night without sleep, memory works up to [[forty|40]] percent worse.",
            "The ideal nap is [[twenty|20]] minutes."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article with tips for better sleep.",
      title: "Sleep like a baby (but not like a newborn!)",
      text: [
        { body: "**Keep a schedule.** Go to bed and get up at the same time every day, even on weekends, so that your body clock stays regular." },
        { body: "**Make your room a sleep zone.** Your bedroom should be dark, quiet and cool. Many people use blackout curtains to block the light, or earplugs so as not to hear street noise." },
        { body: "**Turn off screens.** Phones and laptops produce blue light, which tells your brain it's daytime. Stop using screens an hour before bed in order to give your brain time to relax. Read a paper book instead." },
        { body: "**Watch what you drink.** Caffeine stays in your body for up to eight hours. Avoid coffee after 2 p.m. so that it doesn't keep you awake. Alcohol might help you fall asleep, but it reduces the quality of your sleep." },
        { body: "**Don't fight it.** If you can't fall asleep after twenty minutes, get up and do something calm, like reading, so that your brain doesn't connect your bed with frustration." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "You can change your schedule on weekends.", a: false },
            { s: "A cool, dark room is best for sleeping.", a: true },
            { s: "Blue light tells your brain it's nighttime.", a: false },
            { s: "Caffeine can stay in your body for up to eight hours.", a: true },
            { s: "If you can't sleep, you should stay in bed and keep trying.", a: false }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          prompt: "Make sentences with purpose from the article.",
          items: [
            { a: "Use blackout curtains to block the light." },
            { a: "Avoid coffee so that it doesn't keep you awake." },
            { a: "Stop using screens in order to relax." },
            { a: "Use earplugs so as not to hear noise." }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice purpose expressions, then write about your sleep routine.",
      activities: [
        {
          type: "rewrite", title: "Join the sentences",
          prompt: "Join the sentences with the words in parentheses.",
          items: [
            { q: "I went to the pharmacy. I wanted to buy melatonin. (to)", a: ["I went to the pharmacy to buy melatonin."] },
            { q: "She turned off her phone. She didn't want to be distracted. (so as not to)", a: ["She turned off her phone so as not to be distracted."] },
            { q: "I set two alarms. I wanted to be sure I would wake up. (so that)", a: ["I set two alarms so that I would wake up.", "I set two alarms so that I would be sure to wake up.", "I set two alarms so that I could wake up."] },
            { q: "They closed the windows. The noise didn't come in. (so that)", a: ["They closed the windows so that the noise didn't come in.", "They closed the windows so that the noise wouldn't come in."] }
          ]
        },
        {
          type: "gap", title: "Correct form",
          prompt: "Complete with *to, in order to, so as not to* or *so that*.",
          items: [
            "I drink chamomile tea [[to|in order to]] relax before bed.",
            "Turn the volume down [[so that]] your roommate can sleep.",
            "I go to bed at eleven [[so as not to|in order not to]] feel tired in the morning.",
            "Many athletes take naps [[to|in order to]] recover faster."
          ]
        },
        {
          type: "write", title: "My sleep routine",
          prompt: "Write a text (120–150 words) describing your sleep habits: when you go to bed, what you do before, any problems you have and what you do (or will do) to sleep better. Use at least six purpose expressions (*to, in order to, so as not to, so that…*).",
          minWords: 120, maxWords: 150,
          model: "I'm definitely a night owl. During the week, I usually go to bed at about midnight, but I have to get up at six to catch the bus to the university. That's only six hours of sleep! Before bed, I often watch videos to relax, but I know it's a bad idea. Last month I started using a special app so that I could track my sleep. It showed that I toss and turn a lot. So I've made some changes. Now I leave my phone on my desk so that I can't use it in bed. I also drink herbal tea in order to feel calm, and I read a few pages of a novel to get sleepy. On weekends I don't sleep until noon any more, so as not to confuse my body clock. I feel much better already.",
          bank: ["I go to bed at… to…", "I use… so that I can…", "I drink… in order to…", "… so as not to…", "I've decided to…", "I feel…"],
          checklist: [
            "I used at least **six** purpose expressions.",
            "I used **so that** + subject + modal correctly.",
            "I didn't use *for* + base verb for purpose.",
            "I described problems and **solutions**."
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
            "I stayed up until three to finish my essay.",
            "I drink coffee so that I can stay awake.",
            "I leave my phone in the kitchen.",
            "Take a short nap to feel better.",
            "I go to bed early so as not to oversleep.",
            "I'm definitely a night owl."
          ]
        },
        {
          type: "speak", title: "Night owl or early bird?",
          prompt: "Record yourself for one to two minutes. Are you a night owl or an early bird? Describe your sleep routine, your sleep problems and what you do to sleep better. Explain the purpose of each habit.",
          language: ["I'm a night owl / an early bird.", "I usually go to bed at…", "I… to…", "I… so that I can…", "In order to…", "I'm going to… so as not to…"],
          seconds: 120,
          checklist: ["describe your routine?", "use to + infinitive?", "use so that + modal?", "use in order to or so as not to?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about sleep habits and problems.", review: "Explanation: the vocabulary cards" },
    { can: "I can express purpose with *to* + infinitive.", review: "Explanation: expressing purpose" },
    { can: "I can use *in order to* and *so as (not) to*.", review: "Explanation: expressing purpose; Writing activity 2" },
    { can: "I can use *so that* + subject + modal.", review: "Explanation: so that; Writing activity 1" },
    { can: "I can follow a short lecture about sleep.", review: "Listening activities 1 and 2" },
    { can: "I can describe my routine and explain my reasons.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
