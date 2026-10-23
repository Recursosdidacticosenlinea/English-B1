window.UNIT = {
  slug: "online-life",
  number: 35,
  title: "Online Life",
  level: "B1",
  minutes: 60,
  speakers: { "Majo": "f", "Rodrigo": "m", "Host": "f", "Expert": "m" },
  focus: ["social media and internet vocabulary", "noun suffixes: -ness, -ment, -tion, -ity", "adjective suffixes: -ful, -less, -able, -ive", "negative prefixes: un-, dis-, im-, in-", "talking about digital well-being"],

  presentation: {
    scene: "📱💻🌐👍",
    situation: "Majo is trying a \"digital detox\" week. Her friend Rodrigo can't believe it.",
    warmup: {
      prompt: "How do you use the internet every day? Choose all.",
      options: ["social media", "messaging", "studying", "watching videos", "online shopping", "gaming", "reading news", "listening to music", "work", "video calls", "learning languages", "banking"],
      response: "The internet is part of everything! In this unit you'll learn to build words and talk about online life."
    },
    dialogueTitle: "Digital detox",
    dialogue: [
      { who: "Rodrigo", line: "A week without social media? That sounds *impossible*!" },
      { who: "Majo", line: "It's not easy, but I needed it. I felt *stressful*… I mean, *stressed*, all the time. The *pressure* to post was *endless*." },
      { who: "Rodrigo", line: "And how's it going?" },
      { who: "Majo", line: "Honestly? Better than I expected. My *concentration* has improved, and I sleep better. I'm *happier*." },
      { who: "Rodrigo", line: "Don't you miss anything?" },
      { who: "Majo", line: "Sometimes. Social media is *useful* for staying in touch. But a lot of it is *pointless*: I used to spend hours watching *meaningless* videos." },
      { who: "Rodrigo", line: "Maybe I should try it. My screen time is *unbelievable*: seven hours a day!" }
    ]
  },

  objectives: [
    "I can talk about the internet and social media.",
    "I can form nouns with suffixes like *-ness, -ment, -tion, -ity*.",
    "I can form adjectives with *-ful, -less, -able, -ive* and negative prefixes.",
    "I can discuss the advantages and disadvantages of online life."
  ],

  explanation: {
    vocabTitle: "Online life",
    vocab: [
      { word: "screen time", icon: "⏱️" }, { word: "a notification", icon: "🔔" }, { word: "scroll", icon: "📜" },
      { word: "a feed", icon: "📲" }, { word: "followers", icon: "👥" }, { word: "post / upload", icon: "⬆️" },
      { word: "a digital detox", icon: "🌿" }, { word: "addiction", icon: "🔗" }, { word: "privacy", icon: "🔒" },
      { word: "cyberbullying", icon: "😡" }, { word: "an algorithm", icon: "🤖" }, { word: "a troll", icon: "👹" },
      { word: "go offline", icon: "📴" }, { word: "FOMO (fear of missing out)", icon: "😰" }, { word: "a password", icon: "🔑" }
    ],
    grammar: [
      {
        title: "Making nouns",
        head: ["Suffix", "From", "Examples"],
        rows: [
          ["*-ness*", "adjectives", "happy → *happiness*, kind → *kindness*, lonely → *loneliness*"],
          ["*-ment*", "verbs", "improve → *improvement*, develop → *development*, entertain → *entertainment*"],
          ["*-tion / -sion*", "verbs", "concentrate → *concentration*, connect → *connection*, decide → *decision*"],
          ["*-ity*", "adjectives", "popular → *popularity*, creative → *creativity*, possible → *possibility*"]
        ],
        note: "Spelling changes: *happy → happiness* (y → i), *decide → decision*."
      },
      {
        title: "Making adjectives",
        head: ["Suffix / prefix", "Meaning", "Examples"],
        rows: [
          ["*-ful*", "with / full of", "*useful, helpful, stressful, meaningful*"],
          ["*-less*", "without", "*useless, pointless, endless, meaningless*"],
          ["*-able / -ible*", "can be done", "*enjoyable, reliable, flexible*"],
          ["*-ive*", "having this quality", "*addictive, creative, attractive*"],
          ["*un- / dis- / im- / in-*", "not / the opposite", "*unbelievable, dishonest, impossible, inactive*"]
        ],
        note: "*-ful* has one *l*: *useful*, not *usefull*. *Stressful* = causes stress; *stressed* = you feel stress."
      }
    ],
    watchOut: [
      ["Social media is very usefull.", "Social media is very useful."],
      ["I want more happyness in my life.", "I want more happiness in my life."],
      ["This app is very addiction.", "This app is very addictive."],
      ["It's unpossible to live without internet.", "It's impossible to live without the internet."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with the correct form of the word in parentheses.",
      items: [
        "Online games can be very [[addictive]]. (addict)",
        "My [[concentration]] is better without my phone. (concentrate)",
        "These videos are completely [[pointless]]. (point – without)",
        "It's [[impossible]] to read all my notifications. (possible – opposite)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with an expert on digital well-being.",
      title: "Are we addicted to our phones?",
      script: [
        { who: "Host", line: "Today we're talking about our relationship with technology. Is phone addiction real?" },
        { who: "Expert", line: "Many experts prefer the term \"problematic use.\" But yes, apps are designed to be addictive. Every notification and every like gives us a small amount of dopamine, a chemical connected to happiness." },
        { who: "Host", line: "So we keep scrolling." },
        { who: "Expert", line: "Exactly. The feed is endless, so there's no natural moment to stop. The average Mexican spends almost nine hours a day online, one of the highest numbers in the world." },
        { who: "Host", line: "What are the effects?" },
        { who: "Expert", line: "Studies show connections between heavy social media use and loneliness, anxiety and poor sleep, especially in teenagers. Our concentration also suffers: some people can't read for twenty minutes without checking their phone." },
        { who: "Host", line: "Is it all negative?" },
        { who: "Expert", line: "Not at all. The internet is incredibly useful. It gives us education, entertainment and connection with people far away. The key is balance. Turn off unnecessary notifications, keep your phone out of the bedroom, and use your time online in a meaningful way." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Apps are designed to be addictive.", a: true },
            { s: "Dopamine is connected to sadness.", a: false },
            { s: "The average Mexican spends almost nine hours a day online.", a: true },
            { s: "Heavy use is connected to loneliness and poor sleep.", a: true },
            { s: "The expert thinks the internet is completely negative.", a: false }
          ]
        },
        {
          type: "gap", title: "Word forms",
          prompt: "Listen again and complete with the word you hear.",
          items: [
            "Apps are designed to be [[addictive]].",
            "Dopamine is connected to [[happiness]].",
            "The feed is [[endless]].",
            "Our [[concentration]] also suffers.",
            "Turn off [[unnecessary]] notifications."
          ]
        }
      ]
    },

    reading: {
      intro: "Read three opinions from a student forum about social media.",
      title: "Is social media good for us?",
      text: [
        { author: "Natalia, 20 · YES", body: "Social media has been really helpful for my creativity. I post my illustrations on Instagram, and I've received commissions from people in other countries. Without it, my art would be invisible. It's also a powerful tool for activism: people can organize and share important information quickly." },
        { author: "Rafa, 22 · NO", body: "I deleted my accounts last year and it was the best decision of my life. I was always comparing myself with others, and I felt worthless. The pressure to be perfect online is unhealthy. Now I have more real friendships and much more free time." },
        { author: "Carmen, 19 · IT DEPENDS", body: "I think the problem isn't social media; it's how we use it. Following inspiring accounts and staying in touch with family is meaningful. Scrolling for hours at 2 a.m. is not. Self-control is the key, but I admit it's difficult." }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Match each idea with the writer.",
          bins: ["Natalia", "Rafa", "Carmen"],
          items: [
            { text: "helps her creativity", bin: 0 }, { text: "a tool for activism", bin: 0 },
            { text: "deleted their accounts", bin: 1 }, { text: "felt worthless", bin: 1 }, { text: "has more real friendships now", bin: 1 },
            { text: "it depends on how we use it", bin: 2 }, { text: "self-control is the key", bin: 2 }
          ]
        },
        {
          type: "match", title: "Word families",
          prompt: "Match the word from the text with its base word.",
          pairs: [
            ["creativity", "create"],
            ["invisible", "visible"],
            ["decision", "decide"],
            ["worthless", "worth"],
            ["unhealthy", "healthy"],
            ["friendship", "friend"]
          ]
        }
      ]
    },

    writing: {
      intro: "Practice word formation, then write an opinion paragraph.",
      activities: [
        {
          type: "gap", title: "Build the word",
          prompt: "Complete with the correct form of the word in parentheses.",
          items: [
            "Too much screen time can cause [[loneliness]]. (lonely)",
            "There's been a big [[improvement]] in my sleep. (improve)",
            "Some comments online are really [[hurtful]]. (hurt)",
            "My old phone is [[useless]] now. It doesn't turn on. (use)",
            "The [[popularity]] of TikTok has grown very fast. (popular)",
            "It's [[dishonest]] to use fake photos. (honest – opposite)"
          ]
        },
        {
          type: "sort", title: "Noun or adjective?",
          prompt: "Is each word a noun or an adjective?",
          bins: ["Noun", "Adjective"],
          items: [
            { text: "happiness", bin: 0 }, { text: "entertainment", bin: 0 }, { text: "connection", bin: 0 }, { text: "privacy", bin: 0 }, { text: "creativity", bin: 0 },
            { text: "helpful", bin: 1 }, { text: "endless", bin: 1 }, { text: "addictive", bin: 1 }, { text: "unbelievable", bin: 1 }, { text: "enjoyable", bin: 1 }
          ]
        },
        {
          type: "write", title: "My online life",
          prompt: "Write an opinion paragraph (120–150 words): *Is social media good or bad for young people?* Give arguments for both sides and your conclusion. Use at least eight words with suffixes or prefixes from this unit.",
          minWords: 120, maxWords: 150,
          model: "Social media can be both useful and harmful for young people. On the one hand, it offers entertainment, information and connection. For example, I stay in touch with my cousins in the United States every day, and I've learned a lot from educational accounts. It can also help young artists share their creativity with the world. On the other hand, social media is designed to be addictive, and the feed seems endless. Many teenagers spend hours scrolling, which affects their concentration and their sleep. Some also suffer from loneliness or feel worthless when they compare themselves with others. In my opinion, the problem is not the technology itself, but the lack of self-control. If we use it in a meaningful way and set limits, social media can be an enjoyable and positive part of our lives.",
          bank: ["useful / harmful", "entertainment", "connection", "creativity", "addictive", "endless", "concentration", "loneliness", "meaningful", "enjoyable"],
          checklist: [
            "I used at least **eight** words with suffixes or prefixes.",
            "I gave arguments **for** and **against**.",
            "I used linkers like *on the one hand / on the other hand*.",
            "I wrote a clear **conclusion**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Pay attention to word stress.",
          items: [
            "That sounds impossible!",
            "My concentration has improved.",
            "Social media is useful.",
            "A lot of it is pointless.",
            "My screen time is unbelievable.",
            "Apps are designed to be addictive."
          ]
        },
        {
          type: "speak", title: "My digital habits",
          prompt: "Record yourself for one to two minutes. Describe your online habits: how many hours you spend online, which apps you use, what's useful and what's pointless. Would you try a digital detox? Why or why not?",
          language: ["I spend about… hours online.", "It's really useful for…", "Some apps are addictive.", "Scrolling can be pointless.", "A digital detox would be…", "In my opinion,…"],
          seconds: 120,
          checklist: ["describe your habits?", "use words with -ful, -less, -ive?", "use nouns with -ness, -ment, -tion?", "give your opinion?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about the internet and social media.", review: "Explanation: the vocabulary cards" },
    { can: "I can form nouns with *-ness, -ment, -tion, -ity*.", review: "Explanation: making nouns; Writing activity 1" },
    { can: "I can form adjectives with *-ful, -less, -able, -ive*.", review: "Explanation: making adjectives" },
    { can: "I can use negative prefixes *un-, dis-, im-, in-*.", review: "Explanation: making adjectives" },
    { can: "I can understand opinions about social media.", review: "Listening and Reading activities" },
    { can: "I can give a balanced opinion about online life.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
