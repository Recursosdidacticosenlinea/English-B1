window.UNIT = {
  slug: "then-and-now",
  number: 5,
  title: "Then and Now",
  level: "B1",
  minutes: 60,
  speakers: { "Abuela Rosa": "f", "Iker": "m", "Interviewer": "f", "Don Felipe": "m" },
  focus: ["used to for past habits and states", "would for repeated past actions", "didn't use to / never used to", "any more / no longer / still", "comparing life then and now"],

  presentation: {
    scene: "📻🕰️📱🏘️",
    situation: "Iker is doing a school project about how life has changed. He interviews his grandmother, Rosa, who grew up in a small town in Puebla.",
    warmup: {
      prompt: "Which of these things did your grandparents probably have when they were young? Choose all.",
      options: ["a radio", "a smartphone", "a typewriter", "the internet", "letters by mail", "a black-and-white TV", "a car", "video games", "a landline phone", "a microwave"],
      response: "Life has changed a lot! In this unit you'll learn to talk about past habits and compare then and now."
    },
    dialogueTitle: "When Grandma was young",
    dialogue: [
      { who: "Iker", line: "Grandma, what was life like when you were a teenager?" },
      { who: "Abuela Rosa", line: "Very different, *mijo*. We *didn't use to* have a TV. In the evenings, my family *would* sit together and listen to the radio." },
      { who: "Iker", line: "No TV? What *did* you *use to* do on weekends?" },
      { who: "Abuela Rosa", line: "On Sundays we *would* walk to the plaza. The boys *would* walk around one way, and the girls the other way. That's how I met your grandfather!" },
      { who: "Iker", line: "Ha! And how *did* you *use to* talk to your friends?" },
      { who: "Abuela Rosa", line: "We *used to* write letters. My best friend *used to* live in Mexico City, so I *would* wait weeks for her answer." },
      { who: "Iker", line: "Wow. Do you *still* write letters?" },
      { who: "Abuela Rosa", line: "Not *any more*. Now I send voice messages, like you!" }
    ]
  },

  objectives: [
    "I can talk about past habits and states with *used to*.",
    "I can use *would* for repeated actions in the past.",
    "I can use *still, any more* and *no longer* to compare past and present.",
    "I can describe how a place or a way of life has changed."
  ],

  explanation: {
    vocabTitle: "Then and now",
    vocab: [
      { word: "landline", icon: "☎️" }, { word: "letter", icon: "✉️" }, { word: "typewriter", icon: "⌨️" },
      { word: "record player", icon: "📀" }, { word: "cassette", icon: "📼" }, { word: "film camera", icon: "📷" },
      { word: "town square", icon: "⛲" }, { word: "corner shop", icon: "🏪" }, { word: "dirt road", icon: "🛤️" },
      { word: "nowadays", icon: "📅" }, { word: "back then", icon: "🕰️" }, { word: "in those days", icon: "📜" },
      { word: "convenient", icon: "👍" }, { word: "old-fashioned", icon: "🎩" }, { word: "simpler", icon: "🌿" }
    ],
    grammar: [
      {
        title: "Used to",
        intro: "*Used to* + base verb describes past habits and past states that are not true now.",
        head: ["Form", "Example"],
        rows: [
          ["positive", "We *used to* write letters."],
          ["negative", "We *didn't use to* have a TV. / I *never used to* eat vegetables."],
          ["question", "What *did* you *use to* do on weekends?"],
          ["past state", "My friend *used to* live in Mexico City."]
        ],
        note: "In negatives and questions, write *use to* (no *d*): *Did you use to…? / I didn't use to…*"
      },
      {
        title: "Would for repeated past actions",
        head: ["", "used to", "would"],
        rows: [
          ["repeated actions", "On Sundays we *used to* walk to the plaza. ✅", "On Sundays we *would* walk to the plaza. ✅"],
          ["states (be, have, live, like, know)", "I *used to* have long hair. ✅", "I *would* have long hair. ❌"]
        ],
        note: "*Would* is common in stories and memories, usually after we set the time: *When I was a child, my grandmother would tell us stories.*"
      },
      {
        title: "Still, any more, no longer",
        head: ["Word", "Meaning", "Example"],
        rows: [
          ["*still*", "it continues now", "She *still* lives in the same house."],
          ["*not … any more*", "it stopped (end of sentence)", "I *don't* write letters *any more*."],
          ["*no longer*", "it stopped (more formal, before the verb)", "People *no longer* use typewriters."]
        ]
      }
    ],
    watchOut: [
      ["I use to play soccer when I was a kid.", "I used to play soccer when I was a kid."],
      ["Did you used to live here?", "Did you use to live here?"],
      ["I would have a dog when I was young.", "I used to have a dog when I was young."],
      ["I don't play the guitar no more.", "I don't play the guitar any more."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *used to, use to, would* or *any more*.",
      items: [
        "I [[used to]] be very shy at school.",
        "Did your parents [[use to]] work on Saturdays?",
        "Every summer, my uncle [[would|used to]] take us to the beach.",
        "She doesn't live in Tlaxcala [[any more|anymore]]."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a local radio interview with Don Felipe, who has lived in Cholula all his life.",
      title: "Cholula: then and now",
      script: [
        { who: "Interviewer", line: "Don Felipe, you've lived in Cholula for seventy-five years. How has it changed?" },
        { who: "Don Felipe", line: "Oh, completely! When I was a boy, Cholula used to be a quiet town. There were only dirt roads and very few cars." },
        { who: "Interviewer", line: "What did people use to do for work?" },
        { who: "Don Felipe", line: "Most families used to grow corn and beans. My father would get up at five every morning and work in the fields until sunset." },
        { who: "Interviewer", line: "And what about the pyramid?" },
        { who: "Don Felipe", line: "We would climb it every Sunday after church. There weren't any tourists back then. Now thousands of people visit it every week." },
        { who: "Interviewer", line: "Is there anything you miss?" },
        { who: "Don Felipe", line: "I miss the silence. And the corner shops. Everybody used to know everybody. Nowadays there are big supermarkets, and people no longer talk to their neighbors." },
        { who: "Interviewer", line: "Is anything better now?" },
        { who: "Don Felipe", line: "Of course. There are good hospitals and the university. My granddaughter is studying architecture here. I didn't use to imagine that!" }
      ],
      activities: [
        {
          type: "sort", title: "Then or now?",
          prompt: "Listen. Is each sentence about Cholula in the past or today?",
          bins: ["Then 🕰️", "Now 📱"],
          items: [
            { text: "There were only dirt roads.", bin: 0 }, { text: "Most families grew corn and beans.", bin: 0 }, { text: "There weren't any tourists.", bin: 0 }, { text: "Everybody knew everybody.", bin: 0 },
            { text: "Thousands of people visit the pyramid.", bin: 1 }, { text: "There are big supermarkets.", bin: 1 }, { text: "There are good hospitals.", bin: 1 }, { text: "His granddaughter studies architecture.", bin: 1 }
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete.",
          items: [
            "Don Felipe has lived in Cholula for [[seventy-five|75|seventy five]] years.",
            "His father would get up at [[five|5]] every morning.",
            "They would climb the pyramid every [[Sunday]].",
            "He misses the silence and the corner [[shops]].",
            "People no longer talk to their [[neighbors|neighbours]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read an article from a technology magazine.",
      title: "Twenty years ago, students used to…",
      text: [
        { body: "**Research.** Students used to spend hours in the library. They would look for books in huge card catalogs and copy information by hand. Today, most students no longer visit the library for research; they search online in seconds." },
        { body: "**Communication.** If you wanted to talk to a friend, you used to call their house on the landline. Often their mom would answer first! Nowadays, almost nobody calls; we send messages." },
        { body: "**Music.** People used to record songs from the radio onto cassettes and make mixtapes for their friends. It took a long time, but it was a sign of real friendship. Now we just share a playlist link." },
        { body: "**Photos.** With film cameras, you didn't use to see your photos immediately. You would wait a week for the photos from the shop, and half of them were blurry. Today we take hundreds of photos a day, but we still rarely print them." }
      ],
      activities: [
        {
          type: "match", title: "Then → now",
          prompt: "Match the past habit with the modern version.",
          pairs: [
            ["Looking for books in card catalogs", "searching online in seconds"],
            ["Calling a friend's landline", "sending messages"],
            ["Making mixtapes from the radio", "sharing a playlist link"],
            ["Waiting a week for photos", "taking hundreds of photos a day"]
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "Students used to copy information by hand.", a: true },
            { s: "Most students still go to the library for research.", a: false },
            { s: "When you called a friend, their mom would sometimes answer.", a: true },
            { s: "Making a mixtape was quick and easy.", a: false },
            { s: "Today, people print most of their photos.", a: false }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice *used to* and *would*, then write about how your life has changed.",
      activities: [
        {
          type: "rewrite", title: "Used to or would?",
          prompt: "Rewrite each sentence with *used to* or *would*. Use *would* only when it's possible.",
          items: [
            { q: "When I was a kid, I had a red bike.", a: ["When I was a kid, I used to have a red bike."] },
            { q: "Every summer, my family went to Acapulco.", a: ["Every summer, my family would go to Acapulco.", "Every summer, my family used to go to Acapulco."] },
            { q: "My brother didn't like vegetables.", a: ["My brother didn't use to like vegetables.", "My brother never used to like vegetables."] },
            { q: "Did you live in Puebla as a child?", a: ["Did you use to live in Puebla as a child?"] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "She still lives in the same house." },
            { a: "I don't play video games any more." },
            { a: "People no longer use typewriters." },
            { a: "What did you use to do on weekends?" },
            { a: "My grandfather would tell us stories." }
          ]
        },
        {
          type: "write", title: "Me then and now",
          prompt: "Write a text (110–140 words) comparing your life ten years ago and now. Talk about your habits, your hobbies, your appearance or your town. Use *used to* (positive and negative), *would* at least once and *still / any more / no longer*.",
          minWords: 110, maxWords: 140,
          model: "Ten years ago, my life was very different. I used to live in a small town near Teziutlán with my parents and my two sisters. I didn't use to like school, but I loved football. Every afternoon, my friends and I would play in the street until it got dark. I used to have very long hair, and my mom would complain about it all the time! Now I live in Puebla and study engineering. I don't play football any more because I don't have time, but I still watch every match on TV. I no longer have long hair, and I actually enjoy studying now. Some things change, but my love for football hasn't!",
          bank: ["Ten years ago,", "I used to…", "I didn't use to…", "Every… I would…", "Now,", "I still…", "I don't… any more."],
          checklist: [
            "I used **used to** for habits and states.",
            "I used **would** for a repeated action (not a state).",
            "I used **still** and **any more / no longer**.",
            "I compared **then** and **now** clearly."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence from this unit. Notice how *used to* sounds like \"yoosta\".",
          items: [
            "We used to write letters.",
            "We didn't use to have a TV.",
            "What did you use to do?",
            "My father would get up at five.",
            "She still lives in the same house.",
            "I don't do that any more."
          ]
        },
        {
          type: "speak", title: "Interview an older person",
          prompt: "Talk to a parent, grandparent or older neighbor about their childhood (in Spanish is OK). Then record yourself for one to two minutes in English, describing how their life used to be and what has changed.",
          language: ["When my… was young,", "He / She used to…", "He / She didn't use to…", "Every weekend, they would…", "Nowadays,…", "He / She still… / doesn't… any more."],
          seconds: 120,
          checklist: ["use used to and didn't use to?", "use would for repeated actions?", "use still or any more?", "compare then and now?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can use *used to* in positive, negative and question forms.", review: "Explanation: used to" },
    { can: "I can use *would* for repeated past actions (not states).", review: "Explanation: would for repeated past actions; Writing activity 1" },
    { can: "I can use *still, any more* and *no longer*.", review: "Explanation: still, any more, no longer" },
    { can: "I can understand someone describing how a place has changed.", review: "Listening activities 1 and 2" },
    { can: "I can understand an article comparing past and present.", review: "Reading activities 1 and 2" },
    { can: "I can talk and write about how my life has changed.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
