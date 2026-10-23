window.UNIT = {
  slug: "getting-along",
  number: 4,
  title: "Getting Along",
  level: "B1",
  minutes: 60,
  speakers: { "Natalia": "f", "Pablo": "m", "Host": "m", "Ms. Vega": "f", "Caller": "f" },
  focus: ["relationship phrasal verbs", "get on with, fall out, make up, break up", "separable and inseparable phrasal verbs", "talking about friends and conflicts", "giving relationship advice"],

  presentation: {
    scene: "👫💔🤝💬",
    situation: "Natalia and Pablo share an apartment near the university. Pablo comes home and finds Natalia upset.",
    warmup: {
      prompt: "What's important in a good friendship? Choose all that you think are important.",
      options: ["honesty", "having fun together", "the same hobbies", "trust", "listening", "living near each other", "talking every day", "respect", "helping each other", "a good sense of humor"],
      response: "Good! In this unit you'll learn useful phrasal verbs to talk about relationships."
    },
    dialogueTitle: "A problem with a friend",
    dialogue: [
      { who: "Pablo", line: "Hey, what's wrong? You look upset." },
      { who: "Natalia", line: "I've *fallen out* with Mariana. We had a big argument about the trip." },
      { who: "Pablo", line: "Oh no. But you two always *get on* so well!" },
      { who: "Natalia", line: "I know. She *let me down*. She promised to come, and yesterday she canceled. Now I have to pay for everything." },
      { who: "Pablo", line: "That's annoying. Have you talked to her?" },
      { who: "Natalia", line: "No, I'm too angry. I don't want to *put up with* this any more." },
      { who: "Pablo", line: "I understand, but don't *give up on* her. Call her tomorrow, and *make up*. She's been your best friend since high school!" }
    ]
  },

  objectives: [
    "I can talk about relationships with common phrasal verbs.",
    "I can use separable and inseparable phrasal verbs correctly.",
    "I can describe a conflict between friends and how it ended.",
    "I can give advice about relationship problems."
  ],

  explanation: {
    vocabTitle: "Relationship phrasal verbs",
    vocab: [
      { word: "get on (well) with", icon: "🤝", say: "get on well with. To have a good relationship." },
      { word: "fall out (with)", icon: "💢", say: "fall out with. To argue and stop being friends." },
      { word: "make up", icon: "🫂", say: "make up. To become friends again after an argument." },
      { word: "break up (with)", icon: "💔", say: "break up with. To end a romantic relationship." },
      { word: "let (sb) down", icon: "😞", say: "let someone down. To disappoint someone." },
      { word: "put up with", icon: "😖", say: "put up with. To accept something annoying." },
      { word: "look up to", icon: "⬆️", say: "look up to. To admire someone." },
      { word: "count on", icon: "🙌", say: "count on. To trust that someone will help you." },
      { word: "ask (sb) out", icon: "🌹", say: "ask someone out. To invite someone on a date." },
      { word: "go out (with)", icon: "🍿", say: "go out with. To have a romantic relationship." },
      { word: "bring (sb) up", icon: "👶", say: "bring someone up. To raise a child." },
      { word: "grow up", icon: "🌱", say: "grow up. To become an adult." },
      { word: "get together", icon: "🎉", say: "get together. To meet socially." },
      { word: "give up on", icon: "🏳️", say: "give up on. To stop hoping that someone will change." },
      { word: "catch up (with)", icon: "☕", say: "catch up with. To talk about recent news with a friend." }
    ],
    grammar: [
      {
        title: "Phrasal verbs: three types",
        head: ["Type", "Example", "Rule"],
        rows: [
          ["no object", "They *made up* after a week. / We *grew up* in Cholula.", "Nothing comes after the particle."],
          ["separable", "She *let* me *down*. / She *let down* her team.", "A pronoun (*me, him, it*) must go **between** verb and particle."],
          ["inseparable", "I *look up to* my aunt. / I *look up to* her.", "The object always goes **after** the particle."]
        ],
        note: "With separable verbs: *She let down me* is wrong. Say *She let me down.*"
      },
      {
        title: "Three-part phrasal verbs",
        head: ["Phrasal verb", "Example"],
        rows: [
          ["*get on with*", "I *get on* really well *with* my sister."],
          ["*put up with*", "I can't *put up with* his jokes any more."],
          ["*fall out with*", "He *fell out with* his roommate."],
          ["*catch up with*", "Let's get together and *catch up with* each other."]
        ],
        note: "Three-part phrasal verbs are always inseparable."
      }
    ],
    watchOut: [
      ["She let down me.", "She let me down."],
      ["They made it up after the fight.", "They made up after the fight."],
      ["I look up her.", "I look up to her."],
      ["He broke with his girlfriend.", "He broke up with his girlfriend."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the missing particle(s).",
      items: [
        "I get [[on]] well with my cousins.",
        "Don't worry, you can count [[on]] me.",
        "My grandparents brought me [[up]].",
        "I can't put [[up with]] this noise!"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio advice program. A listener calls to ask for help.",
      title: "Ask Ms. Vega",
      script: [
        { who: "Host", line: "Welcome back to Ask Ms. Vega. We have a caller on the line. Go ahead, you're on the air." },
        { who: "Caller", line: "Hi, Ms. Vega. I have a problem with my best friend, Paty. We grew up together and I've always looked up to her." },
        { who: "Ms. Vega", line: "That sounds like a special friendship. What's the problem?" },
        { who: "Caller", line: "She started going out with a new guy three months ago, and now she never has time for me. Last week we planned to get together for my birthday, and she didn't come. She really let me down." },
        { who: "Ms. Vega", line: "I'm sorry. That hurts. Have you told her how you feel?" },
        { who: "Caller", line: "Not really. I don't want to fall out with her." },
        { who: "Ms. Vega", line: "Here's my advice. First, don't give up on her. New relationships take a lot of time at the beginning. Second, talk to her honestly but calmly. Say, \"I miss you,\" not \"You're a bad friend.\" And third, suggest a regular plan, like coffee every Sunday to catch up." },
        { who: "Caller", line: "That's a great idea. Thank you so much." },
        { who: "Ms. Vega", line: "Good luck. Real friends can always count on each other." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide if each sentence is true or false.",
          items: [
            { s: "The caller and Paty met at university.", a: false },
            { s: "Paty has a new boyfriend.", a: true },
            { s: "Paty didn't come to the caller's birthday plan.", a: true },
            { s: "The caller has already fallen out with Paty.", a: false },
            { s: "Ms. Vega says the caller should give up on Paty.", a: false },
            { s: "Ms. Vega suggests a regular meeting to catch up.", a: true }
          ]
        },
        {
          type: "match", title: "Ms. Vega's advice",
          prompt: "Match the advice with the reason.",
          pairs: [
            ["Don't give up on her,", "because new relationships take time."],
            ["Talk calmly and honestly,", "so she understands how you feel."],
            ["Say \"I miss you\",", "not \"You're a bad friend.\""],
            ["Suggest coffee every Sunday", "to catch up regularly."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short story from a magazine for young adults.",
      title: "The friendship test",
      text: [
        { body: "Jimena and Karla grew up on the same street in Atlixco. They were inseparable: they went to the same school, they joined the same dance group, and they could always count on each other." },
        { body: "Then, at nineteen, they both applied for a scholarship to study in Canada. Only one of them got it: Karla. Jimena was happy for her friend, but she was also jealous. She stopped answering Karla's messages, and the two friends fell out." },
        { body: "For a year they didn't speak. Karla was lonely in Canada, and Jimena felt guilty. She knew she had let her friend down. Finally, on Karla's birthday, Jimena sent a long voice message: \"I'm sorry. I was jealous, and I was wrong. I miss you.\"" },
        { body: "Karla called her back immediately. They talked for three hours and made up. Now they video-chat every week to catch up, and Jimena is saving money to visit Toronto next summer." }
      ],
      activities: [
        {
          type: "tiles", title: "Put the story in order",
          prompt: "Put the words in order to make sentences about the story.",
          items: [
            { a: "They grew up on the same street." },
            { a: "Karla got the scholarship." },
            { a: "Jimena knew she had let her friend down." },
            { a: "They talked for hours and made up." }
          ]
        },
        {
          type: "rewrite", title: "Use a phrasal verb",
          prompt: "Rewrite each sentence with a phrasal verb from the unit.",
          items: [
            { q: "Jimena and Karla became adults in Atlixco.", a: ["Jimena and Karla grew up in Atlixco.", "They grew up in Atlixco."] },
            { q: "They could always trust each other.", a: ["They could always count on each other."] },
            { q: "The two friends had an argument and stopped talking.", a: ["The two friends fell out.", "They fell out."] },
            { q: "They became friends again.", a: ["They made up."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice word order with phrasal verbs, then write an advice email.",
      activities: [
        {
          type: "rewrite", title: "Replace the noun with a pronoun",
          prompt: "Replace the words in **bold** with *him, her, it* or *them*. Be careful with word order!",
          items: [
            { q: "Don't let down **your team**.", a: ["Don't let them down."] },
            { q: "I really look up to **my grandmother**.", a: ["I really look up to her."] },
            { q: "She asked out **Leo**.", a: ["She asked him out."] },
            { q: "My aunt brought up **my cousin and me**.", a: ["My aunt brought us up."] },
            { q: "I can't put up with **this noise**.", a: ["I can't put up with it."] }
          ]
        },
        {
          type: "gap", title: "Complete the email",
          prompt: "Complete with the correct form of a phrasal verb: *get on, fall out, make up, catch up, count on*.",
          items: [
            "Hi Beto! It's been ages. Let's meet and [[catch up]] soon.",
            "Do you remember Sergio? He [[fell out]] with his brother last year.",
            "They didn't talk for months, but now they've [[made up]].",
            "Actually, they [[get on]] better than ever.",
            "Anyway, if you need help with your move, you can [[count on]] me."
          ]
        },
        {
          type: "write", title: "Dear advice column",
          prompt: "A reader writes: *\"I've fallen out with my roommate because she never cleans and she invites friends over late at night. What should I do?\"* Write a reply (110–140 words). Show empathy, give at least three pieces of advice and use at least five phrasal verbs from the unit.",
          minWords: 110, maxWords: 140,
          model: "Dear reader,<br>I'm sorry to hear that you've fallen out with your roommate. Living with someone is not easy, and nobody wants to put up with a dirty kitchen or noise at midnight. Here's my advice. First, don't give up on her yet. Maybe she doesn't know how you feel. Second, choose a calm moment, get together and talk honestly. Explain the problem without shouting. Third, make a cleaning schedule together and agree on a time for visitors. If you both follow the rules, I'm sure you'll make up and get on better. Finally, remember that good roommates can count on each other.<br>Good luck!",
          bank: ["I'm sorry to hear that…", "Don't give up on…", "You shouldn't put up with…", "Get together and talk", "I'm sure you'll make up", "You can count on…"],
          checklist: [
            "I showed **empathy** at the beginning.",
            "I gave at least **three** pieces of advice.",
            "I used at least **five** phrasal verbs.",
            "I put pronouns in the **correct place** with separable verbs."
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
            "We always get on so well.",
            "She really let me down.",
            "Don't give up on her.",
            "They made up after a week.",
            "You can always count on me.",
            "Let's get together and catch up."
          ]
        },
        {
          type: "speak", title: "A friendship story",
          prompt: "Record yourself for one to two minutes. Talk about an important friend: how you met, why you get on well, a time you fell out or had a problem (if any) and how you made up. Use at least five phrasal verbs.",
          language: ["We grew up…", "We get on well because…", "I look up to him / her because…", "Once, we fell out about…", "We made up when…", "I can always count on…"],
          seconds: 120,
          checklist: ["use at least five phrasal verbs?", "describe a problem and how it ended?", "put pronouns in the correct place?", "speak for at least one minute?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can understand and use 15 relationship phrasal verbs.", review: "Explanation: the vocabulary cards" },
    { can: "I can put pronouns in the right place with separable phrasal verbs.", review: "Explanation: three types; Writing activity 1" },
    { can: "I can use three-part phrasal verbs like *put up with*.", review: "Explanation: three-part phrasal verbs" },
    { can: "I can follow a radio advice program.", review: "Listening activities 1 and 2" },
    { can: "I can understand a short story about a friendship.", review: "Reading activities 1 and 2" },
    { can: "I can give advice about a relationship problem.", review: "Writing activity 3" }
  ]
};
