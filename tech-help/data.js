window.UNIT = {
  slug: "tech-help",
  number: 41,
  title: "Tech Help",
  level: "B1",
  minutes: 60,
  speakers: { "Abuelo Memo": "m", "Valeria": "f", "Technician": "m", "Customer": "f" },
  focus: ["technology phrasal verbs: turn on, log in, set up, back up…", "separable phrasal verbs with pronouns", "giving step-by-step instructions", "describing technical problems", "sequencing: first, then, once, after that"],

  presentation: {
    scene: "💻👴🔌🛠️",
    situation: "Valeria's grandfather, Memo, got a new tablet for his birthday. Valeria is helping him set it up.",
    warmup: {
      prompt: "Which tech problems have you had? Choose all.",
      options: ["forgot my password", "the screen froze", "the battery died", "no Wi-Fi", "lost my files", "a virus", "the app crashed", "the phone won't turn on", "no storage space", "a cracked screen", "the printer doesn't work", "too many notifications"],
      response: "Technology isn't always easy! In this unit you'll learn phrasal verbs to talk about tech problems and solutions."
    },
    dialogueTitle: "Grandpa's new tablet",
    dialogue: [
      { who: "Abuelo Memo", line: "Valeria, how do I *turn* this thing *on*?" },
      { who: "Valeria", line: "Press this button on the side. Hold it for three seconds. There, it's on!" },
      { who: "Abuelo Memo", line: "Now it says \"*Set up* your device.\" What does that mean?" },
      { who: "Valeria", line: "Don't worry, I'll *set* it *up* for you. First, we need to *log in* to your email account." },
      { who: "Abuelo Memo", line: "My password? I *wrote* it *down* somewhere…" },
      { who: "Valeria", line: "Ha! OK. Once we're in, I'll *back up* your photos so you don't lose them. And I'll *turn off* all these notifications." },
      { who: "Abuelo Memo", line: "And how do I *video call* you?" },
      { who: "Valeria", line: "Just tap my photo. And when you finish, *hang up* with the red button!" }
    ]
  },

  objectives: [
    "I can use common phrasal verbs about technology.",
    "I can put pronouns in the correct position with phrasal verbs.",
    "I can describe a technical problem.",
    "I can give clear step-by-step instructions."
  ],

  explanation: {
    vocabTitle: "Tech phrasal verbs",
    vocab: [
      { word: "turn on / off", icon: "🔌", say: "turn on, turn off" }, { word: "log in / log out", icon: "🔐", say: "log in, log out" }, { word: "set up", icon: "⚙️" },
      { word: "back up", icon: "💾" }, { word: "plug in", icon: "🔋" }, { word: "unplug", icon: "🔌" },
      { word: "sign up (for)", icon: "📝" }, { word: "shut down", icon: "🖥️" }, { word: "restart", icon: "🔄" },
      { word: "zoom in / out", icon: "🔍", say: "zoom in, zoom out" }, { word: "scroll down / up", icon: "📜", say: "scroll down, scroll up" }, { word: "type in", icon: "⌨️" },
      { word: "freeze", icon: "🧊" }, { word: "crash", icon: "💥" }, { word: "run out of (battery)", icon: "🪫" }
    ],
    grammar: [
      {
        title: "Phrasal verbs and pronouns",
        head: ["Type", "With a noun", "With a pronoun"],
        rows: [
          ["separable", "*Turn on* the tablet. / *Turn* the tablet *on*.", "*Turn* it *on*. (not *Turn on it*)"],
          ["separable", "I'll *set up* your account.", "I'll *set* it *up*."],
          ["separable", "*Back up* your photos.", "*Back* them *up*."],
          ["inseparable / no object", "*Log in to* your account. / The app *crashed*.", "*Log in to* it."]
        ],
        note: "With separable phrasal verbs, a pronoun (*it, them*) always goes between the verb and the particle."
      },
      {
        title: "Giving instructions",
        head: ["Step", "Language"],
        rows: [
          ["start", "*First,… / To start,…*"],
          ["continue", "*Then,… / Next,… / After that,…*"],
          ["condition", "*Once you've…, / When it asks for…,*"],
          ["warning", "*Make sure you… / Be careful not to…*"],
          ["finish", "*Finally,… / And that's it!*"]
        ],
        note: "Use the imperative for instructions: *Press the button. Don't unplug it.*"
      }
    ],
    watchOut: [
      ["Turn on it.", "Turn it on."],
      ["I need to back up them.", "I need to back them up."],
      ["Log in your account.", "Log in to your account."],
      ["The computer is frozen up.", "The computer has frozen. / The screen froze."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the missing particle.",
      items: [
        "Don't forget to turn the lights [[off]] when you leave.",
        "Can you help me set [[up]] my new phone?",
        "You need to log [[in]] with your student number.",
        "My phone ran [[out]] of battery during the call."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a customer calling a tech support line.",
      title: "Tech support",
      script: [
        { who: "Technician", line: "Thank you for calling TecnoAyuda. How can I help you?" },
        { who: "Customer", line: "Hi. My laptop is really slow and this morning it froze completely. I couldn't do anything." },
        { who: "Technician", line: "I understand. Let's try a few things. First, did you turn it off and on again?" },
        { who: "Customer", line: "Yes, I restarted it twice. It's still slow." },
        { who: "Technician", line: "OK. How much free storage do you have? Go to Settings, then Storage." },
        { who: "Customer", line: "Let me see… it says only two gigabytes free." },
        { who: "Technician", line: "That's the problem. Your hard drive is almost full. I recommend you back up your photos and videos to the cloud or an external drive. Then delete them from the laptop." },
        { who: "Customer", line: "Will I lose them?" },
        { who: "Technician", line: "Not if you back them up first. Also, check if you have programs that start automatically. Turn them off. And make sure you install the latest updates." },
        { who: "Customer", line: "Great, thank you. I'll try that now." }
      ],
      activities: [
        {
          type: "tiles", title: "The steps",
          prompt: "Make the technician's instructions.",
          items: [
            { a: "Turn it off and on again." },
            { a: "Back up your photos to the cloud." },
            { a: "Then delete them from the laptop." },
            { a: "Make sure you install the latest updates." }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The customer's laptop froze this morning.", a: true },
            { s: "She didn't restart the laptop.", a: false },
            { s: "She has only two gigabytes of free storage.", a: true },
            { s: "The technician says she will lose her photos.", a: false },
            { s: "She should turn off programs that start automatically.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a help page from a university website.",
      title: "How to set up your student email",
      text: [
        { body: "**Step 1.** Go to the university website and click on *Student Services*. Then choose *Email*." },
        { body: "**Step 2.** Type in your student ID number and the temporary password you received when you signed up for your courses." },
        { body: "**Step 3.** The system will ask you to create a new password. Make sure it has at least ten characters, including a number and a symbol. Write it down somewhere safe, but don't share it with anyone!" },
        { body: "**Step 4.** Once you've logged in, set up two-step verification. This means you'll receive a code on your phone every time you log in from a new device. It protects your account from hackers." },
        { body: "**Step 5.** Download the email app on your phone and log in with your new password. Turn on notifications so you don't miss important messages from your teachers." },
        { body: "**Problems?** If the page freezes or you get locked out, contact the IT help desk in Building 3 or write to soporte@universidad.mx." }
      ],
      activities: [
        {
          type: "match", title: "Match the steps",
          prompt: "Match each step with its purpose.",
          pairs: [
            ["Type in your ID number", "to access the system for the first time."],
            ["Create a new password", "with at least ten characters."],
            ["Set up two-step verification", "to protect your account from hackers."],
            ["Turn on notifications", "so you don't miss messages from teachers."],
            ["Contact the IT help desk", "if you get locked out."]
          ]
        },
        {
          type: "rewrite", title: "Use a pronoun",
          prompt: "Rewrite each instruction replacing the words in **bold** with *it* or *them*.",
          items: [
            { q: "Write down **your password**.", a: ["Write it down."] },
            { q: "Turn on **notifications**.", a: ["Turn them on."] },
            { q: "Set up **two-step verification**.", a: ["Set it up."] },
            { q: "Back up **your files**.", a: ["Back them up."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice phrasal verbs, then write instructions.",
      activities: [
        {
          type: "gap", title: "Complete the problems",
          prompt: "Complete with a phrasal verb in the correct form: *run out of, log out, plug in, shut down, back up*.",
          items: [
            "My phone [[ran out of]] battery, so I couldn't call you.",
            "I didn't [[back up]] my thesis and the computer crashed!",
            "Always [[log out]] of your account on public computers.",
            "The charger isn't working. Did you [[plug]] it [[in]]?",
            "The computer [[shut down]] suddenly while I was working."
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "Turn off it, please.", a: ["Turn it off, please.", "Please turn it off."] },
            { q: "I need to set up it tonight.", a: ["I need to set it up tonight."] },
            { q: "Can you log in your account?", a: ["Can you log in to your account?", "Can you log into your account?"] },
            { q: "Don't forget to back up them.", a: ["Don't forget to back them up."] }
          ]
        },
        {
          type: "write", title: "How to…",
          prompt: "Write clear step-by-step instructions (110–140 words) for a family member who doesn't know much about technology. Choose one: *how to make a video call, how to back up photos, how to create a strong password, how to use a banking app safely.* Use at least six phrasal verbs and sequencing words.",
          minWords: 110, maxWords: 140,
          model: "How to back up your photos, Mom:<br>First, make sure your phone is plugged in, because this can take a long time and the battery might run out. Then, connect to the Wi-Fi at home. Don't use mobile data, or it will be very expensive. Next, open the Google Photos app. If it asks you to log in, type in your email and password. I wrote them down for you on the paper in the kitchen drawer. After that, tap your photo in the top corner and turn on \"Backup.\" The app will start backing up all your photos automatically. Once it finishes, you'll see a small cloud icon on each photo. That means they're safe! Finally, don't delete anything from the phone until you check that the photos are in the cloud. And that's it!",
          bank: ["First,", "Then,", "Next,", "After that,", "Once…,", "Make sure you…", "Finally,", "And that's it!"],
          checklist: [
            "I used at least **six** phrasal verbs.",
            "I put pronouns in the **correct position**.",
            "I used **sequencing** words.",
            "I used the **imperative** for instructions."
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
            "How do I turn this thing on?",
            "I'll set it up for you.",
            "Did you turn it off and on again?",
            "Back up your photos first.",
            "My phone ran out of battery.",
            "Don't forget to log out."
          ]
        },
        {
          type: "speak", title: "Be the tech support",
          prompt: "Record yourself for one to two minutes explaining how to do something on a phone or computer, step by step, as if you were helping a grandparent. Be patient and clear!",
          language: ["Don't worry, it's easy.", "First, turn it on…", "Then, log in to…", "Once you've…,", "Make sure you…", "And that's it!"],
          seconds: 120,
          checklist: ["give clear steps in order?", "use at least five phrasal verbs?", "use pronouns correctly (turn it on)?", "speak patiently and clearly?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use phrasal verbs about technology.", review: "Explanation: the vocabulary cards" },
    { can: "I can put *it / them* in the right place with phrasal verbs.", review: "Explanation: phrasal verbs and pronouns; Reading activity 2" },
    { can: "I can describe a technical problem.", review: "Listening; Writing activity 1" },
    { can: "I can understand instructions on a help page.", review: "Reading activities 1 and 2" },
    { can: "I can understand a tech support call.", review: "Listening activities 1 and 2" },
    { can: "I can give clear step-by-step instructions.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
