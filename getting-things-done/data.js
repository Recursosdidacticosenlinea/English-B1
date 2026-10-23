window.UNIT = {
  slug: "getting-things-done",
  number: 42,
  title: "Getting Things Done",
  level: "B1",
  minutes: 60,
  speakers: { "Lupita": "f", "Mauricio": "m", "Receptionist": "f", "Client": "m" },
  focus: ["services and repairs vocabulary", "have something done", "get something done", "causative in different tenses", "talking about services we pay for"],

  presentation: {
    scene: "✂️🔧🚗🏠",
    situation: "Lupita and Mauricio are getting ready for their sister's wedding next weekend. They have a lot to organize.",
    warmup: {
      prompt: "Which of these do you do yourself, and which do you pay someone to do? Choose the ones you DO yourself.",
      options: ["cut my hair", "repair my phone", "clean my house", "wash my car", "paint my nails", "fix my bike", "make my clothes", "cook my meals", "iron my clothes", "check my eyes"],
      response: "Interesting! In this unit you'll learn to talk about things other people do for you."
    },
    dialogueTitle: "Wedding preparations",
    dialogue: [
      { who: "Lupita", line: "OK, let's check the list. Have you *had your suit cleaned*?" },
      { who: "Mauricio", line: "Yes, I *had it dry-cleaned* yesterday. And I'm *having my hair cut* on Friday." },
      { who: "Lupita", line: "Good. I'm *getting my nails done* on Saturday morning. What about the car?" },
      { who: "Mauricio", line: "I *got the car washed* this morning, but the air conditioning isn't working. I need to *have it repaired*." },
      { who: "Lupita", line: "There's no time! Can't you fix it yourself?" },
      { who: "Mauricio", line: "Me? No way. Last time I tried, I broke it more. I'll *get it checked* at the garage tomorrow." },
      { who: "Lupita", line: "OK. And remember, we're *having the photos printed* for the album too!" }
    ]
  },

  objectives: [
    "I can talk about services and things other people do for me.",
    "I can use *have something done*.",
    "I can use *get something done* in informal situations.",
    "I can use the causative in different tenses."
  ],

  explanation: {
    vocabTitle: "Services",
    vocab: [
      { word: "a haircut", icon: "💇" }, { word: "a manicure", icon: "💅" }, { word: "a mechanic", icon: "🔧" },
      { word: "a garage", icon: "🚗" }, { word: "dry-clean", icon: "👔" }, { word: "a tailor", icon: "🧵" },
      { word: "repair / fix", icon: "🛠️" }, { word: "deliver", icon: "📦" }, { word: "install", icon: "🔩" },
      { word: "a plumber", icon: "🚿" }, { word: "an electrician", icon: "⚡" }, { word: "a locksmith", icon: "🔑" },
      { word: "an appointment", icon: "📅" }, { word: "an estimate / a quote", icon: "🧾" }, { word: "DIY (do it yourself)", icon: "🔨" }
    ],
    grammar: [
      {
        title: "Have / get something done",
        intro: "Use the causative when someone else does something for you (usually a service you pay for).",
        head: ["Structure", "Example"],
        rows: [
          ["*have* + object + past participle", "I *had my suit cleaned*. (someone cleaned it for me)"],
          ["*get* + object + past participle (informal)", "I *got the car washed*."],
          ["compare", "I *cut my hair*. (I did it) / I *had my hair cut*. (a hairdresser did it)"]
        ],
        note: "Word order matters: *I had my hair cut* (causative), not *I had cut my hair* (past perfect)."
      },
      {
        title: "Different tenses",
        head: ["Tense", "Example"],
        rows: [
          ["present simple", "I *have my eyes checked* every year."],
          ["present continuous", "I*'m having my hair cut* on Friday."],
          ["past simple", "She *had her phone repaired* last week."],
          ["present perfect", "*Have* you *had your suit cleaned*?"],
          ["future / going to", "I*'ll get it checked* tomorrow. / I*'m going to have the house painted*."],
          ["modals", "You *should get your bike fixed*. / I *need to have it repaired*."]
        ]
      }
    ],
    watchOut: [
      ["I cut my hair at the hairdresser's.", "I had my hair cut at the hairdresser's."],
      ["I had repaired my phone. (someone else did it)", "I had my phone repaired."],
      ["I'm going to have painted my house.", "I'm going to have my house painted."],
      ["She got her nails do.", "She got her nails done."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *have / get* + object + past participle.",
      items: [
        "I [[had my car washed|got my car washed]] yesterday. (car / wash – past)",
        "She's [[having her hair dyed|getting her hair dyed]] tomorrow. (hair / dye – present continuous)",
        "You should [[have your eyes checked|get your eyes checked]]. (eyes / check)",
        "We've just [[had the kitchen painted|got the kitchen painted|gotten the kitchen painted]]. (kitchen / paint)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a phone call to a phone repair shop.",
      title: "At the repair shop",
      script: [
        { who: "Receptionist", line: "Good morning, CelularFix. How can I help you?" },
        { who: "Client", line: "Hi. I dropped my phone yesterday and the screen cracked. I'd like to have it replaced." },
        { who: "Receptionist", line: "Of course. What model is it?" },
        { who: "Client", line: "It's a Samsung A54. How much does it cost to have the screen changed?" },
        { who: "Receptionist", line: "For that model, it's one thousand eight hundred pesos, and it takes about two hours." },
        { who: "Client", line: "OK. And the battery dies very quickly. Can I have it checked too?" },
        { who: "Receptionist", line: "Sure. A battery check is free. If you need to have it replaced, it's six hundred pesos more." },
        { who: "Client", line: "Great. Can I also get a screen protector put on?" },
        { who: "Receptionist", line: "Yes, that's one hundred and fifty. Would you like to make an appointment?" },
        { who: "Client", line: "Yes, please. Tomorrow at ten?" },
        { who: "Receptionist", line: "Perfect. Remember to back up your data before you come. See you tomorrow!" }
      ],
      activities: [
        {
          type: "gap", title: "The prices",
          prompt: "Listen and complete the information.",
          items: [
            "New screen: [[1,800|1800|one thousand eight hundred]] pesos",
            "Time: about [[two|2]] hours",
            "Battery check: [[free]]",
            "New battery: [[600|six hundred]] pesos more",
            "Screen protector: [[150|one hundred and fifty|one hundred fifty]] pesos",
            "Appointment: tomorrow at [[ten|10]]"
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The client cracked the screen yesterday.", a: true },
            { s: "Replacing the screen takes two days.", a: false },
            { s: "The client wants to have the battery checked.", a: true },
            { s: "The client should back up the phone before the appointment.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a blog post about DIY and paying for services.",
      title: "DIY or pay a professional?",
      text: [
        { body: "These days, you can learn almost anything on YouTube. Many people have stopped having things repaired and do it themselves instead. But is it always a good idea?" },
        { body: "**Do it yourself:** Simple things like changing a light bulb, painting a wall or fixing a bike tire are easy to learn. You save money and feel proud. My neighbor learned to cut his own hair during the pandemic, and now he never goes to the barber!" },
        { body: "**Get it done by a professional:** Some jobs are dangerous or complicated. You should always have electrical problems checked by an electrician and gas installations done by a certified technician. Mistakes can be very expensive, or even deadly." },
        { body: "**My experience:** Last year, I tried to fix a leak in my bathroom by myself. I made it much worse and flooded the apartment downstairs! In the end, I had to have the whole pipe replaced by a plumber, and I paid for my neighbor's ceiling to be repaired. Lesson learned: know your limits!" }
      ],
      activities: [
        {
          type: "sort", title: "DIY or professional?",
          prompt: "According to the article, which jobs can you do yourself and which should a professional do?",
          bins: ["DIY 🔨", "Professional 🧑‍🔧"],
          items: [
            { text: "changing a light bulb", bin: 0 }, { text: "painting a wall", bin: 0 }, { text: "fixing a bike tire", bin: 0 }, { text: "cutting your hair (maybe!)", bin: 0 },
            { text: "electrical problems", bin: 1 }, { text: "gas installations", bin: 1 }, { text: "replacing a pipe", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "DIY or causative?",
          prompt: "Rewrite each sentence with *have* + object + past participle.",
          items: [
            { q: "A plumber replaced the pipe for me.", a: ["I had the pipe replaced.", "I had the pipe replaced by a plumber."] },
            { q: "An electrician checked our wiring.", a: ["We had our wiring checked.", "We had our wiring checked by an electrician."] },
            { q: "A barber cuts my neighbor's hair. (not any more!)", a: ["My neighbor has his hair cut.", "My neighbor used to have his hair cut.", "He has his hair cut."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice the causative, then write about services you use.",
      activities: [
        {
          type: "rewrite", title: "Who did it?",
          prompt: "Rewrite each sentence with the causative and the tense in parentheses.",
          items: [
            { q: "A mechanic is repairing my car. (present continuous)", a: ["I'm having my car repaired.", "I am having my car repaired.", "I'm getting my car repaired."] },
            { q: "A photographer took our wedding photos. (past)", a: ["We had our wedding photos taken.", "We got our wedding photos taken."] },
            { q: "A tailor will shorten my pants. (going to)", a: ["I'm going to have my pants shortened.", "I'm going to get my pants shortened.", "I am going to have my pants shortened."] },
            { q: "Someone has delivered our new sofa. (present perfect)", a: ["We've had our new sofa delivered.", "We have had our new sofa delivered."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "I had my suit dry-cleaned yesterday." },
            { a: "I'm having my hair cut on Friday." },
            { a: "You should get your eyes checked." },
            { a: "Have you had your car washed?" }
          ]
        },
        {
          type: "write", title: "A busy week",
          prompt: "Write a message (110–140 words) to a friend explaining why you're so busy this week before a big event (a trip, a party, moving house, a graduation). Talk about things you've already had done, things you're having done and things you need to get done. Use the causative at least six times.",
          minWords: 110, maxWords: 140,
          model: "Hi Luis! Sorry I didn't answer yesterday. I'm moving to my new apartment on Saturday and I'm super busy. I've already had the walls painted and I've had a new lock installed, because the old one was broken. Tomorrow I'm having the internet connected, which I need for my online classes. I also need to get my washing machine repaired before the move, but the technician can only come on Friday. My mom says I should have the windows cleaned too, but honestly, I'll do that myself! On Saturday, I'm having all my furniture moved by a small company. It's expensive, but I can't carry my bed down five floors. Do you want to come over on Sunday and see the place? I'll have pizza delivered!",
          bank: ["I've already had… done", "I'm having… done tomorrow", "I need to get… done", "I should have… done", "I'll have… delivered", "I'll do it myself."],
          checklist: [
            "I used the causative at least **six** times.",
            "I used **different tenses**.",
            "I put the **object** before the past participle.",
            "I included something I'll do **myself**."
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
            "I had my suit cleaned.",
            "I'm having my hair cut on Friday.",
            "I need to have it repaired.",
            "I got the car washed this morning.",
            "I'd like to have it replaced.",
            "You should get your eyes checked."
          ]
        },
        {
          type: "speak", title: "Services in my life",
          prompt: "Record yourself for one to two minutes. Talk about services you use: where you have your hair cut, if you've ever had something repaired, what you do yourself and what you'd like to have done if you had more money.",
          language: ["I usually have my hair cut at…", "Last month, I had my… repaired.", "I'm getting… done next week.", "I do… myself.", "If I had more money, I'd have… done.", "It's worth paying for…"],
          seconds: 120,
          checklist: ["use have / get something done?", "use at least three different tenses?", "mention things you do yourself?", "speak for at least one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about services and repairs.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *have something done*.", review: "Explanation: have / get something done" },
    { can: "I can use *get something done* informally.", review: "Explanation: have / get something done" },
    { can: "I can use the causative in different tenses.", review: "Explanation: different tenses; Writing activity 1" },
    { can: "I can understand a call to a repair shop.", review: "Listening activities 1 and 2" },
    { can: "I can describe the services I use and need.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
