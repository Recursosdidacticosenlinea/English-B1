window.UNIT = {
  slug: "fake-news",
  number: 33,
  title: "Fake News",
  level: "B1",
  minutes: 60,
  speakers: { "Lorena": "f", "Hugo": "m", "Teacher": "f", "Journalist": "m" },
  focus: ["media and fake news vocabulary", "reporting verbs + infinitive: tell, ask, warn, advise, remind", "reporting verbs + to: promise, agree, refuse, offer", "negative: tell / warn somebody not to", "checking information online"],

  presentation: {
    scene: "📰🕵️📱⚠️",
    situation: "Lorena's grandmother sent a voice message to the family group saying that drinking hot water with lemon cures all diseases. Lorena talks to her cousin Hugo.",
    warmup: {
      prompt: "Have you seen fake news about these topics? Choose all.",
      options: ["health", "celebrities", "politics", "earthquakes", "money and scams", "science", "food", "technology", "sports", "aliens", "school closures", "free gifts or prizes"],
      response: "Fake news is everywhere! In this unit you'll learn to identify it and report what people told you to do."
    },
    dialogueTitle: "The family group chat",
    dialogue: [
      { who: "Lorena", line: "Did you see Grandma's message? She *told us to drink* hot water with lemon every morning to cure everything." },
      { who: "Hugo", line: "Yes. And yesterday she *warned us not to use* our phones during storms." },
      { who: "Lorena", line: "I *advised her to check* the source before sharing things, but she *refused to listen*." },
      { who: "Hugo", line: "Ha! I *offered to show* her how to check news online." },
      { who: "Lorena", line: "And did she accept?" },
      { who: "Hugo", line: "She *agreed to try* on Sunday. I *promised to bring* tamales." },
      { who: "Lorena", line: "Smart! *Remind me to come* too. I want to see that." }
    ]
  },

  objectives: [
    "I can talk about fake news and how to identify it.",
    "I can report orders, requests and advice with *tell / ask / advise* + object + infinitive.",
    "I can use verbs like *promise, offer, agree, refuse* + infinitive.",
    "I can report negative instructions with *not to*."
  ],

  explanation: {
    vocabTitle: "Media and fake news",
    vocab: [
      { word: "a headline", icon: "📰" }, { word: "a source", icon: "🔎" }, { word: "reliable", icon: "✅" },
      { word: "misleading", icon: "🌀" }, { word: "fact-check", icon: "☑️" }, { word: "go viral", icon: "🦠" },
      { word: "clickbait", icon: "🎣" }, { word: "a hoax", icon: "🃏" }, { word: "a conspiracy theory", icon: "👽" },
      { word: "share", icon: "🔁" }, { word: "biased", icon: "⚖️" }, { word: "evidence", icon: "🧾" },
      { word: "manipulated photo", icon: "🖼️" }, { word: "an influencer", icon: "🤳" }, { word: "spread misinformation", icon: "📡" }
    ],
    grammar: [
      {
        title: "Verb + object + (not) to + infinitive",
        head: ["Verb", "Direct speech", "Reported"],
        rows: [
          ["*tell*", "\"Drink hot water.\"", "She *told us to drink* hot water."],
          ["*ask*", "\"Can you help me, please?\"", "He *asked me to help* him."],
          ["*warn*", "\"Don't use your phone in a storm!\"", "She *warned us not to use* our phones."],
          ["*advise*", "\"You should check the source.\"", "I *advised her to check* the source."],
          ["*remind*", "\"Don't forget to come.\"", "She *reminded me to come*."]
        ],
        note: "For negative orders, put *not* before *to*: *He told me not to worry.*"
      },
      {
        title: "Verb + to + infinitive (no object)",
        head: ["Verb", "Direct speech", "Reported"],
        rows: [
          ["*promise*", "\"I'll bring tamales.\"", "He *promised to bring* tamales."],
          ["*offer*", "\"Shall I show you?\"", "He *offered to show* her."],
          ["*agree*", "\"OK, I'll try.\"", "She *agreed to try*."],
          ["*refuse*", "\"No, I won't listen.\"", "She *refused to listen*."],
          ["*threaten*", "\"I'll call the police!\"", "He *threatened to call* the police."]
        ]
      }
    ],
    watchOut: [
      ["She told me that I check the news.", "She told me to check the news."],
      ["He told me don't share it.", "He told me not to share it."],
      ["I offered him to help.", "I offered to help him."],
      ["She said me to wait.", "She told me to wait."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the reported sentences.",
      items: [
        "\"Please close the door.\" → She asked me [[to close]] the door.",
        "\"Don't believe everything online.\" → My teacher told us [[not to believe]] everything online.",
        "\"I'll call you later.\" → He promised [[to call]] me later.",
        "\"Shall I carry your bag?\" → He offered [[to carry]] my bag."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a teacher and a journalist giving a workshop on fake news to university students.",
      title: "How to spot fake news",
      script: [
        { who: "Teacher", line: "Good morning, everyone. Today we have a special guest, a fact-checking journalist. He's going to tell you how to identify fake news." },
        { who: "Journalist", line: "Thank you. First, check the source. If you've never heard of the website, be careful. Look at the URL: fake sites often copy the names of real newspapers." },
        { who: "Journalist", line: "Second, don't just read the headline. Clickbait headlines are designed to make you angry or scared, so you share without reading." },
        { who: "Journalist", line: "Third, check the date. Many viral stories are old news from years ago." },
        { who: "Journalist", line: "Fourth, search for the same story on two or three reliable news sites. If nobody else is reporting it, it's probably false." },
        { who: "Journalist", line: "And finally, never share something just because a friend sent it. Ask yourself: who benefits if people believe this?" },
        { who: "Teacher", line: "Thank you. Students, for homework, find one fake news story and explain how you know it's false. And please, don't forget to cite your sources!" }
      ],
      activities: [
        {
          type: "match", title: "What did the journalist tell them?",
          prompt: "Match the advice with the reported version.",
          pairs: [
            ["\"Check the source.\"", "He told them to check the source."],
            ["\"Don't just read the headline.\"", "He told them not to just read the headline."],
            ["\"Check the date.\"", "He advised them to check the date."],
            ["\"Never share something just because a friend sent it.\"", "He warned them not to share things without checking."],
            ["\"Don't forget to cite your sources!\"", "The teacher reminded them to cite their sources."]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "Fake websites sometimes copy the names of real newspapers.", a: true },
            { s: "Clickbait headlines are designed to make you calm.", a: false },
            { s: "Many viral stories are old news.", a: true },
            { s: "If only one website reports a story, it's probably true.", a: false },
            { s: "The homework is to find a fake news story.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read about a famous fake news story that went viral.",
      title: "The shark on the highway",
      text: [
        { body: "Every time there's a big hurricane, the same photo goes viral: a shark swimming on a flooded highway. People share it with messages like \"Unbelievable! Stay safe!\" But the photo is fake. It was manipulated in 2011, and it has appeared after almost every hurricane since then." },
        { body: "Why do people keep sharing it? Experts say that fake news spreads faster than real news because it's surprising and emotional. A study by MIT found that false stories on Twitter were 70% more likely to be shared than true ones." },
        { body: "Some journalists have tried to stop it. One reporter tweeted the original photos and warned people not to share the image. Others asked platforms to label the photo as false. Some platforms agreed to add warnings, but others refused to do anything." },
        { body: "Fact-checkers advise everyone to do a reverse image search before sharing a photo. It takes less than a minute, and it can stop a hoax." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Read and decide.",
          items: [
            { s: "The shark photo is real.", a: false },
            { s: "The photo was manipulated in 2011.", a: true },
            { s: "Fake news spreads more slowly than real news.", a: false },
            { s: "All platforms agreed to label the photo.", a: false },
            { s: "A reverse image search takes less than a minute.", a: true }
          ]
        },
        {
          type: "rewrite", title: "Report it",
          prompt: "Report the sentences using the verb in parentheses.",
          items: [
            { q: "Reporter: \"Don't share this image.\" (warned people)", a: ["The reporter warned people not to share the image.", "He warned people not to share the image.", "The reporter warned people not to share this image."] },
            { q: "Platform: \"OK, we'll add warnings.\" (agreed)", a: ["The platform agreed to add warnings.", "Some platforms agreed to add warnings.", "It agreed to add warnings."] },
            { q: "Fact-checkers: \"Do a reverse image search.\" (advise everyone)", a: ["Fact-checkers advise everyone to do a reverse image search.", "Fact-checkers advised everyone to do a reverse image search."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice reporting verbs, then write about a time someone believed fake news.",
      activities: [
        {
          type: "sort", title: "Object or no object?",
          prompt: "Which verbs need a person before *to*?",
          bins: ["verb + person + to (told me to)", "verb + to (promised to)"],
          items: [
            { text: "tell", bin: 0 }, { text: "ask", bin: 0 }, { text: "warn", bin: 0 }, { text: "advise", bin: 0 }, { text: "remind", bin: 0 },
            { text: "promise", bin: 1 }, { text: "agree", bin: 1 }, { text: "refuse", bin: 1 }, { text: "offer", bin: 1 }, { text: "threaten", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Report it",
          prompt: "Report each sentence with the verb in parentheses.",
          items: [
            { q: "Mom: \"Don't forget your keys.\" (remind)", a: ["Mom reminded me not to forget my keys.", "My mom reminded me not to forget my keys.", "She reminded me not to forget my keys."] },
            { q: "Leo: \"I'll pay you back tomorrow.\" (promise)", a: ["Leo promised to pay me back the next day.", "Leo promised to pay me back the following day.", "He promised to pay me back the next day."] },
            { q: "Doctor: \"You should rest for a week.\" (advise)", a: ["The doctor advised me to rest for a week.", "The doctor advised me to rest for a week."] },
            { q: "Ana: \"No, I won't apologize!\" (refuse)", a: ["Ana refused to apologize.", "She refused to apologize."] }
          ]
        },
        {
          type: "write", title: "The day someone believed fake news",
          prompt: "Write a story (120–150 words) about a time someone you know believed or shared fake news (real or invented). Report what people told, asked, warned, advised and promised. Use at least six reporting verbs.",
          minWords: 120, maxWords: 150,
          model: "Last year, my uncle Beto received a message saying that a famous supermarket was giving away free TVs for its anniversary. The message told people to click on a link and enter their bank details. He was so excited that he forwarded it to the whole family. My cousin, who studies computer science, immediately warned him not to click on the link. She explained that it was a scam and advised him to delete the message. At first, my uncle refused to believe her. He said the message looked very professional. So my cousin offered to show him how to check the supermarket's official website. There was a big warning about the scam on the homepage! My uncle finally agreed to delete the message, and he promised to check everything before sharing it in the future.",
          bank: ["told him to / not to…", "warned him not to…", "advised him to…", "refused to…", "offered to…", "agreed to…", "promised to…"],
          checklist: [
            "I used at least **six** reporting verbs.",
            "I put a **person** after *tell, ask, warn, advise, remind*.",
            "I used **not to** for negative instructions.",
            "I explained how the problem was **solved**."
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
            "She told us to drink hot water.",
            "She warned us not to use our phones.",
            "I advised her to check the source.",
            "He offered to show her.",
            "She agreed to try on Sunday.",
            "Remind me to come too."
          ]
        },
        {
          type: "speak", title: "Advice from the past",
          prompt: "Record yourself for one to two minutes. Talk about the best and worst advice people have given you: what did your parents, teachers or friends tell you to do or not to do? What did you promise or refuse to do? Was the advice good?",
          language: ["My mom always told me to…", "My teacher advised me to…", "My friend warned me not to…", "I promised to…", "I refused to…", "Looking back, the advice was…"],
          seconds: 120,
          checklist: ["use at least five reporting verbs?", "use not to for negative advice?", "put the person after tell / advise / warn?", "give your opinion of the advice?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about fake news and how to check it.", review: "Explanation: the vocabulary cards; Listening" },
    { can: "I can use *tell / ask / warn / advise / remind* + person + *to*.", review: "Explanation: verb + object + to" },
    { can: "I can use *promise / offer / agree / refuse* + *to*.", review: "Explanation: verb + to; Writing activity 1" },
    { can: "I can report negative instructions with *not to*.", review: "Explanation: note; Reading activity 2" },
    { can: "I can understand advice about identifying fake news.", review: "Listening and Reading activities" },
    { can: "I can report what people told me to do.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
