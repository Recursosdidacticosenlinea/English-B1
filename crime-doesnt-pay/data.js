window.UNIT = {
  slug: "crime-doesnt-pay",
  number: 40,
  title: "Crime Doesn't Pay",
  level: "B1",
  minutes: 65,
  speakers: { "Detective Ramos": "f", "Officer Gil": "m", "Narrator": "m", "Podcaster": "f", "Guest": "m" },
  focus: ["crime and mystery vocabulary", "must have + past participle (almost certain)", "might / may / could have + past participle (possible)", "can't / couldn't have + past participle (impossible)", "solving a mystery"],

  presentation: {
    scene: "🕵️‍♀️🔍🖼️🚔",
    situation: "A famous painting has disappeared from a small museum in Puebla. Detective Ramos and Officer Gil arrive at the scene.",
    warmup: {
      prompt: "Do you like mystery stories? Which of these do you enjoy? Choose all.",
      options: ["detective series", "true crime podcasts", "mystery novels", "escape rooms", "crime documentaries", "Sherlock Holmes", "board games like Clue", "puzzles", "horror movies", "murder mystery parties"],
      response: "Great! In this unit you'll learn to make deductions about the past, like a real detective."
    },
    dialogueTitle: "The missing painting",
    dialogue: [
      { who: "Officer Gil", line: "The painting was here at closing time, at six. The guard found the empty wall at seven." },
      { who: "Detective Ramos", line: "So the thief *must have entered* between six and seven. Is there any sign of a break-in?" },
      { who: "Officer Gil", line: "No. The doors and windows were locked." },
      { who: "Detective Ramos", line: "Then the thief *can't have come* from outside. They *must have had* a key." },
      { who: "Officer Gil", line: "Only three people have keys: the director, the guard and the cleaner." },
      { who: "Detective Ramos", line: "The director was at a dinner with the mayor, so she *couldn't have done* it. The guard *might have* fallen asleep…" },
      { who: "Officer Gil", line: "Or the cleaner *may have* hidden it in her cart. Look, there's blue paint on the floor near the cart!" },
      { who: "Detective Ramos", line: "Interesting. Let's talk to the cleaner." }
    ]
  },

  objectives: [
    "I can talk about crime and mysteries.",
    "I can use *must have* when I'm almost sure about the past.",
    "I can use *might / may / could have* for past possibilities.",
    "I can use *can't / couldn't have* when something in the past was impossible."
  ],

  explanation: {
    vocabTitle: "Crime and mystery",
    vocab: [
      { word: "a thief", icon: "🦹" }, { word: "steal", icon: "💰" }, { word: "a break-in", icon: "🚪" },
      { word: "a suspect", icon: "🤨" }, { word: "a witness", icon: "👁️" }, { word: "evidence", icon: "🧾" },
      { word: "a clue", icon: "🔍" }, { word: "fingerprints", icon: "🖐️" }, { word: "an alibi", icon: "🗓️" },
      { word: "a detective", icon: "🕵️" }, { word: "arrest", icon: "🚔" }, { word: "guilty / innocent", icon: "⚖️" },
      { word: "a security camera", icon: "📹" }, { word: "solve a case", icon: "✅" }, { word: "a motive", icon: "🎯" }
    ],
    grammar: [
      {
        title: "Modals of deduction: the past",
        intro: "Use modal + *have* + past participle to make deductions about the past, based on evidence.",
        head: ["Modal", "How sure?", "Example"],
        rows: [
          ["*must have* + participle", "about 95% sure it happened", "The thief *must have had* a key."],
          ["*might / may / could have* + participle", "about 50%: it possibly happened", "The guard *might have fallen* asleep."],
          ["*might not / may not have* + participle", "possibly it didn't happen", "She *may not have seen* the thief."],
          ["*can't / couldn't have* + participle", "about 95% sure it didn't happen", "The director *can't have done* it. She was at a dinner."]
        ],
        note: "Pronunciation: *must have* → \"must've\", *might have* → \"might've\", *can't have* → \"can't've\"."
      },
      {
        title: "Present or past deduction?",
        head: ["Present", "Past"],
        rows: [
          ["He *must be* tired. (now)", "He *must have been* tired. (yesterday)"],
          ["She *might be* at home.", "She *might have been* at home."],
          ["It *can't be* true.", "It *can't have been* true."]
        ]
      }
    ],
    watchOut: [
      ["He must stole the money.", "He must have stolen the money."],
      ["She mustn't have seen it. (impossible)", "She can't have seen it."],
      ["They might have went home.", "They might have gone home."],
      ["He must of forgotten.", "He must have forgotten."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *must have, might have* or *can't have* + participle.",
      items: [
        "The floor is wet. It [[must have rained|must've rained]] last night. (rain)",
        "I'm not sure where my keys are. I [[might have left|may have left|could have left]] them at work. (leave)",
        "She [[can't have stolen|couldn't have stolen]] the money. She was in Mexico City all week. (steal)",
        "Luis didn't answer my call. He [[must have been|might have been|may have been]] asleep. (be)"
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to the end of a true crime podcast episode about a strange theft.",
      title: "The case of the missing cheese",
      script: [
        { who: "Podcaster", line: "Welcome back to Cold Cases. Today's story is unusual: forty kilos of cheese disappeared from a farm in Chiapas. My guest is a retired police officer. What happened?" },
        { who: "Guest", line: "The farmer kept the cheese in a small storage room. One morning, the door was open and the shelves were empty. There were no fingerprints." },
        { who: "Podcaster", line: "So who did it?" },
        { who: "Guest", line: "At first, we thought it must have been a professional thief, because cheese is valuable. But there were no car tracks, and forty kilos is heavy." },
        { who: "Podcaster", line: "So the thief can't have carried it far." },
        { who: "Guest", line: "Exactly. Then we found pieces of cheese on a path into the forest, and some very strange footprints." },
        { who: "Podcaster", line: "Animal footprints?" },
        { who: "Guest", line: "Yes! A group of coatis. They must have smelled the cheese. The farmer might have left the door open, or the wind could have opened it." },
        { who: "Podcaster", line: "So the thieves were animals!" },
        { who: "Guest", line: "That's right. We couldn't arrest them, of course. But the farmer put a stronger lock on the door." }
      ],
      activities: [
        {
          type: "tf", title: "True or false?",
          prompt: "Listen and decide.",
          items: [
            { s: "Forty kilos of cheese disappeared.", a: true },
            { s: "The police found fingerprints.", a: false },
            { s: "There were car tracks near the storage room.", a: false },
            { s: "Pieces of cheese were found on a path into the forest.", a: true },
            { s: "The thieves were a group of coatis.", a: true },
            { s: "The farmer moved the cheese to another farm.", a: false }
          ]
        },
        {
          type: "match", title: "Evidence and deduction",
          prompt: "Match the evidence with the deduction.",
          pairs: [
            ["Cheese is valuable.", "It must have been a professional thief (first theory)."],
            ["Forty kilos is heavy and there were no car tracks.", "The thief can't have carried it far."],
            ["There were animal footprints.", "Coatis must have smelled the cheese."],
            ["The door was open.", "The wind could have opened it."]
          ]
        }
      ]
    },

    reading: {
      intro: "Read a short mystery. Can you solve it?",
      title: "Who ate the birthday cake?",
      text: [
        { body: "It was Grandma Lupe's 80th birthday. At three o'clock, the chocolate cake was in the kitchen. At four, when the family went to get it, half of the cake was missing. There were four people in the house: Uncle Beto, cousin Fer, little Santi (6) and Aunt Marta." },
        { body: "Uncle Beto had been in the garden all afternoon, cooking carne asada. Several people saw him there. Aunt Marta is allergic to chocolate; she can't eat even a small piece. Cousin Fer had gone to buy ice at the store at 3:15 and came back at 4:10 with a receipt." },
        { body: "Little Santi said he had been playing video games in his room. But when his mother looked at him, she noticed something brown on his T-shirt. Santi said it was mud from the garden. However, it hadn't rained for weeks." },
        { body: "His mom smiled. She didn't need a detective to solve this case." }
      ],
      activities: [
        {
          type: "sort", title: "Who could have done it?",
          prompt: "Read the clues. Sort each statement.",
          bins: ["Must / might have done it", "Can't have done it"],
          items: [
            { text: "Santi had something brown on his T-shirt.", bin: 0 }, { text: "Santi said it was mud, but it hadn't rained.", bin: 0 },
            { text: "Uncle Beto was in the garden all afternoon.", bin: 1 }, { text: "Aunt Marta is allergic to chocolate.", bin: 1 }, { text: "Fer was at the store from 3:15 to 4:10.", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Make deductions",
          prompt: "Write a deduction about each person with *must have, might have* or *can't have*.",
          items: [
            { q: "Uncle Beto (several people saw him in the garden)", a: ["Uncle Beto can't have eaten the cake.", "Uncle Beto couldn't have eaten the cake.", "He can't have eaten the cake."] },
            { q: "Aunt Marta (allergic to chocolate)", a: ["Aunt Marta can't have eaten the cake.", "Aunt Marta couldn't have eaten the cake.", "She can't have eaten the cake."] },
            { q: "Santi (chocolate on his T-shirt)", a: ["Santi must have eaten the cake.", "He must have eaten the cake."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice past deductions, then write your own mystery.",
      activities: [
        {
          type: "rewrite", title: "What happened?",
          prompt: "Write a deduction for each situation with the modal in parentheses.",
          items: [
            { q: "Ana's eyes are red and her face is wet. (must / cry)", a: ["She must have cried.", "Ana must have cried.", "She must have been crying.", "Ana must have been crying."] },
            { q: "The window is broken and there's a ball on the floor. (must / break)", a: ["Someone must have broken the window with the ball.", "Someone must have broken the window.", "The ball must have broken the window."] },
            { q: "Pedro didn't come to the party. (might / forget)", a: ["He might have forgotten.", "Pedro might have forgotten.", "He might have forgotten about the party.", "Pedro might have forgotten about the party."] },
            { q: "Luisa says she saw me downtown at 5, but I was at home. (can't / see)", a: ["She can't have seen me.", "Luisa can't have seen me.", "She can't have seen me downtown."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The thief must have had a key." },
            { a: "She can't have done it." },
            { a: "The guard might have fallen asleep." },
            { a: "They may have hidden it in the cart." }
          ]
        },
        {
          type: "write", title: "Write a mini mystery",
          prompt: "Write a short mystery (130–160 words). Describe the situation, give three or four suspects with clues, and then explain who did it using past deductions (*must have, might have, can't have*). Use at least six past modals.",
          minWords: 130, maxWords: 160,
          model: "On Monday morning, the teacher's laptop disappeared from the classroom. It was there at 8:00, but at 8:30 it was gone. Four students were in the room: Ximena, Paco, Leo and Rosa. Ximena can't have taken it, because she was presenting her project in front of everyone the whole time. Paco might have taken it; he left the room for five minutes to go to the bathroom. However, he came back with empty hands, and the laptop is too big for his pockets. Leo could have hidden it in his backpack, but when the teacher checked, it was empty. Rosa said she had been in the library, but the librarian said she hadn't seen her. Then the teacher found the laptop in the library, behind some books. Rosa must have taken it there. Later, she admitted it: she must have wanted to delete a bad grade!",
          bank: ["… can't have…, because…", "… might have…", "… could have…", "… must have…", "However,…", "In the end,…"],
          checklist: [
            "I used at least **six** past modals of deduction.",
            "I used **must have, might have** and **can't have**.",
            "I used correct **past participles**.",
            "My mystery has **clues** and a **solution**."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice the short forms like \"must've\".",
          items: [
            "The thief must have had a key.",
            "She can't have done it.",
            "The guard might have fallen asleep.",
            "They must have smelled the cheese.",
            "It must have been a professional.",
            "He may have hidden it."
          ]
        },
        {
          type: "speak", title: "Be the detective",
          prompt: "Record yourself for one to two minutes explaining the solution to the museum mystery from the presentation, or to your own mystery. Go through each suspect and explain who could or couldn't have done it and why.",
          language: ["Let's look at the evidence.", "… can't have done it because…", "… might have…", "… could have…", "So the thief must have been…", "Case closed!"],
          seconds: 120,
          checklist: ["talk about each suspect?", "use must have, might have and can't have?", "give evidence for each deduction?", "give a final solution?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about crime and mysteries.", review: "Explanation: the vocabulary cards" },
    { can: "I can use *must have* + past participle.", review: "Explanation: modals of deduction: the past" },
    { can: "I can use *might / may / could have* + past participle.", review: "Explanation: modals of deduction: the past" },
    { can: "I can use *can't / couldn't have* + past participle.", review: "Explanation: modals of deduction; Reading activity 2" },
    { can: "I can follow a story and make deductions.", review: "Listening and Reading activities" },
    { can: "I can explain the solution to a mystery.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
