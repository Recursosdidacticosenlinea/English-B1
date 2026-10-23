window.UNIT = {
  slug: "smart-homes",
  number: 43,
  title: "Smart Homes",
  level: "B1",
  minutes: 60,
  speakers: { "Sales Assistant": "m", "Karina": "f", "Presenter": "f", "Engineer": "m" },
  focus: ["smart home and technology vocabulary", "future time clauses: when, as soon as, before, after, until + present", "will in the main clause", "present perfect in time clauses", "explaining how devices work"],

  presentation: {
    scene: "🏠🤖💡📲",
    situation: "Karina is in an electronics store. She wants to make her apartment \"smart\". A sales assistant explains how the system works.",
    warmup: {
      prompt: "Which smart devices do you have or would you like? Choose all.",
      options: ["a voice assistant", "smart lights", "a robot vacuum", "a smart TV", "a security camera", "a smart lock", "a smartwatch", "a smart fridge", "a smart plug", "a video doorbell", "automatic curtains", "a smart thermostat"],
      response: "The future is here! In this unit you'll learn to talk about future actions with time clauses."
    },
    dialogueTitle: "In the electronics store",
    dialogue: [
      { who: "Karina", line: "So how does the smart lighting work?" },
      { who: "Sales Assistant", line: "It's simple. *When* you *arrive* home, the lights *will turn* on automatically." },
      { who: "Karina", line: "And what about the security camera?" },
      { who: "Sales Assistant", line: "*As soon as* it *detects* movement, you'*ll get* a notification on your phone." },
      { who: "Karina", line: "Nice. Is it difficult to install?" },
      { who: "Sales Assistant", line: "Not at all. *Before* you *install* it, you'll need to download the app. *After* you'*ve connected* it to the Wi-Fi, it'll be ready." },
      { who: "Karina", line: "And will it keep recording all the time?" },
      { who: "Sales Assistant", line: "No, it'll record *until* you *turn* it off from the app. Shall I put it in a bag for you?" }
    ]
  },

  objectives: [
    "I can talk about smart devices and technology at home.",
    "I can use the present tense after *when, as soon as, before, after, until* for the future.",
    "I can use the present perfect in time clauses to stress completion.",
    "I can explain how a device or system will work."
  ],

  explanation: {
    vocabTitle: "Smart homes",
    vocab: [
      { word: "a device", icon: "📱" }, { word: "a sensor", icon: "📡" }, { word: "a voice assistant", icon: "🗣️" },
      { word: "a smart plug", icon: "🔌" }, { word: "a thermostat", icon: "🌡️" }, { word: "a robot vacuum", icon: "🤖" },
      { word: "detect", icon: "👁️" }, { word: "connect to Wi-Fi", icon: "📶" }, { word: "control remotely", icon: "🎮" },
      { word: "automatically", icon: "⚙️" }, { word: "energy-saving", icon: "🌿" }, { word: "an app", icon: "📲" },
      { word: "a notification", icon: "🔔" }, { word: "privacy", icon: "🔒" }, { word: "a schedule", icon: "🗓️" }
    ],
    grammar: [
      {
        title: "Future time clauses",
        intro: "After *when, as soon as, before, after, until, once*, use the **present** to talk about the future. Use *will* in the main clause.",
        head: ["Time clause (present)", "Main clause (will)"],
        rows: [
          ["*When* you *arrive* home,", "the lights *will turn* on."],
          ["*As soon as* it *detects* movement,", "you*'ll get* a notification."],
          ["*Before* you *install* it,", "you*'ll need* to download the app."],
          ["It *will* record", "*until* you *turn* it off."]
        ],
        note: "Don't use *will* after these words: *When you will arrive* is wrong."
      },
      {
        title: "Present perfect in time clauses",
        intro: "Use the present perfect to show that the first action will be **completed** before the second one.",
        head: ["Example", "Meaning"],
        rows: [
          ["*After* you*'ve connected* it, it'll be ready.", "first connect completely, then it's ready"],
          ["I'll call you *when* I*'ve finished* the installation.", "the installation will be complete"],
          ["*Once* the robot *has cleaned* the room, it'll go back to its base.", "cleaning finished → then it returns"]
        ]
      }
    ],
    watchOut: [
      ["When I will get home, I'll call you.", "When I get home, I'll call you."],
      ["I'll wait until you will finish.", "I'll wait until you finish."],
      ["As soon as it will detect movement, it records.", "As soon as it detects movement, it'll record."],
      ["After I will have finished, I'll help you.", "After I've finished, I'll help you."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the verb.",
      items: [
        "When you [[say]] \"good night,\" the lights will turn off. (say)",
        "I'll call you as soon as I [[get]] home. (get)",
        "The vacuum [[will clean|'ll clean]] until the battery runs out. (clean)",
        "After you [[have downloaded|'ve downloaded|download]] the app, you can start. (download)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a technology program about a smart home of the future.",
      title: "A day in the house of the future",
      script: [
        { who: "Presenter", line: "Today we're visiting a prototype smart house in Monterrey. The engineer who designed it will tell us how it works. Good morning!" },
        { who: "Engineer", line: "Good morning. Let me describe a typical day. At six thirty, the curtains open slowly. As soon as the light enters the room, the coffee machine starts." },
        { who: "Presenter", line: "That's my dream! What happens next?" },
        { who: "Engineer", line: "When you go into the bathroom, the shower will already be at your favorite temperature. And before you leave for work, the voice assistant will tell you about the traffic and the weather." },
        { who: "Presenter", line: "And when nobody's home?" },
        { who: "Engineer", line: "Once everyone has left, the house goes into energy-saving mode. The robot vacuum will clean the floors, and the lights and air conditioning will turn off. The cameras will stay on until someone comes back." },
        { who: "Presenter", line: "What about when you return in the evening?" },
        { who: "Engineer", line: "The house knows when you're coming because of your phone's location. Fifteen minutes before you arrive, it will turn on the air conditioning. And as soon as you open the door, your favorite music will start playing." },
        { who: "Presenter", line: "Amazing. When will these houses be available?" },
        { who: "Engineer", line: "Many of these devices already exist. When prices go down, I think most new homes will have them." }
      ],
      activities: [
        {
          type: "match", title: "When… then…",
          prompt: "Match each event with what the house does.",
          pairs: [
            ["As soon as the light enters the room,", "the coffee machine starts."],
            ["When you go into the bathroom,", "the shower is at your favorite temperature."],
            ["Before you leave for work,", "the assistant tells you about the traffic."],
            ["Once everyone has left,", "the house goes into energy-saving mode."],
            ["As soon as you open the door,", "your favorite music starts."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The prototype house is in Guadalajara.", a: false },
            { s: "The curtains open at six thirty.", a: true },
            { s: "The cameras turn off when nobody's home.", a: false },
            { s: "The house turns on the air conditioning fifteen minutes before you arrive.", a: true },
            { s: "The engineer says none of these devices exist yet.", a: false }
          ]
        }
      ]
    },

    reading: {
      intro: "Read the quick-start guide for a robot vacuum.",
      title: "CleanBot 3000: Quick-start guide",
      text: [
        { body: "**1. Charge it.** Before you use CleanBot for the first time, charge it for at least four hours. The light will turn green when the battery is full." },
        { body: "**2. Connect it.** Download the CleanBot app. As soon as you open it, the app will search for your robot. Follow the instructions until you see the message \"Connected.\"" },
        { body: "**3. Map your home.** The first time CleanBot cleans, it will create a map of your home. Don't move furniture until it has finished the map." },
        { body: "**4. Set a schedule.** Once you've created a schedule in the app, CleanBot will clean automatically. For example, it can clean every day after you leave for work." },
        { body: "**5. Empty the bin.** When the bin is full, you'll receive a notification. Empty it before you start the next cleaning." },
        { body: "**Warning:** Pick up cables and socks from the floor before CleanBot starts. It will try to eat them!" }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "You should charge CleanBot for at least four hours before using it.", a: true },
            { s: "The light turns red when the battery is full.", a: false },
            { s: "You can move furniture while it makes the first map.", a: false },
            { s: "You'll get a notification when the bin is full.", a: true },
            { s: "CleanBot is good at picking up socks.", a: false }
          ]
        },
        {
          type: "rewrite", title: "Join the instructions",
          prompt: "Join the two sentences with the word in parentheses.",
          items: [
            { q: "The battery is full. The light will turn green. (when)", a: ["When the battery is full, the light will turn green.", "The light will turn green when the battery is full."] },
            { q: "You open the app. It will search for your robot. (as soon as)", a: ["As soon as you open the app, it will search for your robot.", "It will search for your robot as soon as you open the app."] },
            { q: "Don't move furniture. It has finished the map. (until)", a: ["Don't move furniture until it has finished the map.", "Don't move furniture until it finishes the map."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice time clauses, then describe your ideal smart home.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake. Write it correctly.",
          items: [
            { q: "When I will get home, I'll turn on the lights.", a: ["When I get home, I'll turn on the lights.", "When I get home, I will turn on the lights."] },
            { q: "I'll wait here until the delivery will arrive.", a: ["I'll wait here until the delivery arrives.", "I will wait here until the delivery arrives."] },
            { q: "As soon as you will finish, call me.", a: ["As soon as you finish, call me.", "As soon as you've finished, call me."] },
            { q: "Before you will leave, turn off the AC.", a: ["Before you leave, turn off the AC."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "When you arrive home, the lights will turn on." },
            { a: "I'll call you as soon as I get home." },
            { a: "It'll record until you turn it off." },
            { a: "After you've connected it, it'll be ready." }
          ]
        },
        {
          type: "write", title: "My smart home",
          prompt: "Imagine your ideal smart home in ten years. Write a text (120–150 words) describing a typical day: what will happen when you wake up, before you leave, while you're out and when you come back. Use at least six future time clauses.",
          minWords: 120, maxWords: 150,
          model: "In my ideal smart home, every morning will start perfectly. When my alarm goes off, the curtains will open and soft music will start. As soon as I get out of bed, the coffee machine will prepare a cappuccino. Before I leave the house, my voice assistant will remind me about my meetings and tell me if I need an umbrella. Once I've closed the front door, everything will turn off automatically to save energy. While I'm at work, a robot will clean the floors and water the plants. It won't stop until everything is clean. Then, when I'm on my way home, the house will turn on the air conditioning. After I've had dinner, the dishwasher will start, and when I say \"good night,\" all the lights will go off. It sounds lazy, but I'd love it!",
          bank: ["When…, … will…", "As soon as…,", "Before I leave,…", "Once I've…,", "… until…", "After I've…,"],
          checklist: [
            "I used at least **six** future time clauses.",
            "I used the **present** (not *will*) after *when, as soon as, before…*",
            "I used the **present perfect** in at least one time clause.",
            "I described a **whole day**."
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
            "When you arrive, the lights will turn on.",
            "As soon as it detects movement, you'll know.",
            "It'll record until you turn it off.",
            "I'll call you when I get home.",
            "After you've connected it, it'll be ready.",
            "Before you leave, check the app."
          ]
        },
        {
          type: "speak", title: "Sell a smart device",
          prompt: "Imagine you work in an electronics store. Record a one- to two-minute presentation of a smart device (real or invented). Explain what it does and how it works, using future time clauses.",
          language: ["This is the…", "When you…, it will…", "As soon as…,", "Before you…, you'll need to…", "Once you've…,", "It's perfect for people who…"],
          seconds: 120,
          checklist: ["explain what the device does?", "use at least five time clauses?", "use the present after when / as soon as?", "sound convincing?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about smart devices and home technology.", review: "Explanation: the vocabulary cards" },
    { can: "I can use the present after *when, as soon as, before, after, until*.", review: "Explanation: future time clauses" },
    { can: "I can use *will* in the main clause.", review: "Explanation: future time clauses; Writing activity 1" },
    { can: "I can use the present perfect in time clauses.", review: "Explanation: present perfect in time clauses" },
    { can: "I can understand instructions and descriptions of devices.", review: "Listening and Reading activities" },
    { can: "I can explain how a device or system will work.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
