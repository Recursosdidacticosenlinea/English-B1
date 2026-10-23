window.UNIT = {
  slug: "making-a-difference",
  number: 38,
  title: "Making a Difference",
  level: "B1",
  minutes: 60,
  speakers: { "Abigail": "f", "Gustavo": "m", "Host": "m", "Volunteer": "f" },
  focus: ["volunteering and social causes vocabulary", "a / an: first mention, jobs, one of many", "the: second mention, unique things, specific things", "no article: general plural and uncountable nouns", "articles with places and institutions"],

  presentation: {
    scene: "🤝❤️🌍🏠",
    situation: "Abigail volunteers on weekends. She's telling her classmate Gustavo about her experience.",
    warmup: {
      prompt: "Which causes would you like to help? Choose all.",
      options: ["animals", "the environment", "children", "older people", "education", "homeless people", "health", "refugees", "women's rights", "indigenous communities", "disaster relief", "people with disabilities"],
      response: "There are many ways to make a difference! In this unit you'll practice articles while talking about volunteering."
    },
    dialogueTitle: "Weekend volunteer",
    dialogue: [
      { who: "Gustavo", line: "What do you do on weekends? You're never free!" },
      { who: "Abigail", line: "I volunteer at *an* animal shelter. *The* shelter is near *the* airport." },
      { who: "Gustavo", line: "Cool! What do you do there?" },
      { who: "Abigail", line: "I walk *the* dogs, clean *the* cages and help at adoption events. Last week, *a* family adopted *an* old dog called Firulais. *The* family was so happy!" },
      { who: "Gustavo", line: "That's lovely. I love *dogs*, but I don't have *time* to volunteer." },
      { who: "Abigail", line: "It's only three hours on Saturdays. And *volunteering* is good for *the* mind." },
      { who: "Gustavo", line: "OK, you convinced me. I'll come with you next Saturday!" }
    ]
  },

  objectives: [
    "I can talk about volunteering and social causes.",
    "I can use *a / an* and *the* correctly.",
    "I can recognize when no article is needed.",
    "I can describe a cause I care about."
  ],

  explanation: {
    vocabTitle: "Volunteering",
    vocab: [
      { word: "volunteer", icon: "🙋" }, { word: "a charity", icon: "❤️" }, { word: "a nonprofit organization", icon: "🏢" },
      { word: "donate", icon: "🎁" }, { word: "raise money", icon: "💰" }, { word: "a fundraiser", icon: "🎟️" },
      { word: "a shelter", icon: "🏠" }, { word: "a food bank", icon: "🥫" }, { word: "make a difference", icon: "✨" },
      { word: "give back", icon: "🔄" }, { word: "take part in", icon: "🧩" }, { word: "a campaign", icon: "📣" },
      { word: "people in need", icon: "🫂" }, { word: "community service", icon: "🏘️" }, { word: "rewarding", icon: "🌟" }
    ],
    grammar: [
      {
        title: "A / an or the?",
        head: ["Article", "Use", "Example"],
        rows: [
          ["*a / an*", "first time we mention something", "I volunteer at *an* animal shelter."],
          ["*a / an*", "jobs", "She's *a* nurse. He's *an* engineer."],
          ["*a / an*", "one of many", "*A* family adopted *an* old dog."],
          ["*the*", "second mention / we know which one", "*The* shelter is near the airport. *The* family was happy."],
          ["*the*", "unique things", "*the* sun, *the* environment, *the* internet, *the* world"],
          ["*the*", "superlatives and ordinals", "*the* best day, *the* first time"]
        ]
      },
      {
        title: "No article",
        head: ["Use", "Example"],
        rows: [
          ["general plural nouns", "I love *dogs*. *Children* need love."],
          ["general uncountable nouns", "I don't have *time*. *Volunteering* is rewarding."],
          ["most cities and countries", "*Mexico*, *Puebla* (but *the* United States, *the* UK)"],
          ["*go to* + school / work / bed / church (for its purpose)", "I *go to work* by bus. She's *in hospital*. (UK)"],
          ["meals, days, months", "*for lunch*, *on Saturday*, *in May*"]
        ],
        note: "Compare: *I love dogs* (all dogs) vs. *I love the dogs at the shelter* (specific dogs)."
      }
    ],
    watchOut: [
      ["The volunteering is good for you.", "Volunteering is good for you."],
      ["She is nurse.", "She is a nurse."],
      ["I love the animals. (in general)", "I love animals."],
      ["We must protect environment.", "We must protect the environment."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *a, an, the* or write *x* for no article.",
      items: [
        "My sister is [[an]] architect.",
        "We need to take care of [[the]] planet.",
        "[[x|—|-|0]] Older people often feel lonely.",
        "I found [[a]] kitten in the street. [[The]] kitten was very hungry."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a radio interview with a young volunteer.",
      title: "Teaching in the mountains",
      script: [
        { who: "Host", line: "Today we're talking to Fernanda, a volunteer with an education charity. Fernanda, tell us about the project." },
        { who: "Volunteer", line: "Sure. I spent six months teaching in a small village in the Sierra Negra, in the south of Puebla. The village is very isolated. The nearest town is three hours away by car." },
        { who: "Host", line: "What did you teach?" },
        { who: "Volunteer", line: "Mainly math and reading. The children spoke Nahuatl at home, so I also learned some words. They taught me as much as I taught them!" },
        { who: "Host", line: "What was the hardest part?" },
        { who: "Volunteer", line: "The cold! And there was no internet, so I wrote letters to my family. But the people were incredibly generous. Every Sunday, a different family invited me for lunch." },
        { who: "Host", line: "What advice would you give to people who want to volunteer?" },
        { who: "Volunteer", line: "Choose a cause you really care about. Volunteering isn't a vacation; it's a commitment. But it's the most rewarding experience of my life." }
      ],
      activities: [
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen and complete.",
          items: [
            "Fernanda spent [[six|6]] months in the village.",
            "The nearest town is [[three|3]] hours away by car.",
            "She taught math and [[reading]].",
            "The children spoke [[Nahuatl]] at home.",
            "Every [[Sunday]], a family invited her for lunch."
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Listen again. True or false?",
          items: [
            { s: "The village is in the north of Puebla.", a: false },
            { s: "Fernanda learned some words in Nahuatl.", a: true },
            { s: "The village had good internet.", a: false },
            { s: "She says volunteering is like a vacation.", a: false },
            { s: "It was the most rewarding experience of her life.", a: true }
          ]
        }
      ]
    },

    reading: {
      intro: "Read a profile from a website about young people who make a difference.",
      title: "The girl who feeds a neighborhood",
      text: [
        { body: "When Daniela Paredes was sixteen, she noticed something that worried her: every night, a bakery near her house threw away bags of bread. At the same time, an old man slept outside the church on her street and asked for food every day." },
        { body: "Daniela talked to the owner of the bakery. She asked if she could take the bread instead of throwing it away. The owner agreed. That night, Daniela gave the bread to the old man and to two families who lived nearby." },
        { body: "Today, five years later, Daniela runs a small nonprofit organization called *Pan para Todos*. The organization collects food from twelve bakeries and three restaurants and gives it to more than two hundred people every week. More than fifty volunteers help her." },
        { body: "\"People think you need money to help,\" Daniela says. \"But you just need an idea and a little time. The world changes one small action at a time.\"" }
      ],
      activities: [
        {
          type: "match", title: "Match the details",
          prompt: "Match the beginnings and endings.",
          pairs: [
            ["Every night, a bakery", "threw away bags of bread."],
            ["An old man", "slept outside the church."],
            ["The owner of the bakery", "agreed to give her the bread."],
            ["Today, the organization", "collects food from twelve bakeries."],
            ["More than fifty volunteers", "help Daniela."]
          ]
        },
        {
          type: "sort", title: "Why this article?",
          prompt: "Sort the phrases from the text by the article rule.",
          bins: ["a / an (first mention)", "the (already known / specific)", "no article (general)"],
          items: [
            { text: "a bakery near her house", bin: 0 }, { text: "an old man slept outside", bin: 0 }, { text: "a small nonprofit", bin: 0 },
            { text: "the owner of the bakery", bin: 1 }, { text: "the old man", bin: 1 }, { text: "the world", bin: 1 },
            { text: "people think…", bin: 2 }, { text: "you need money", bin: 2 }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice articles, then write about a cause you care about.",
      activities: [
        {
          type: "gap", title: "Complete the story",
          prompt: "Complete with *a, an, the* or write *x* for no article.",
          items: [
            "Last year I joined [[a]] environmental group. Actually, it's [[an]] international organization.",
            "[[The]] group cleans beaches in Veracruz.",
            "[[x|—|-|0]] Plastic is a big problem for [[x|—|-|0]] sea turtles.",
            "On [[the]] first day, we collected 200 kilos of trash. It was [[the]] best day of my summer."
          ]
        },
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has one mistake with articles. Write it correctly.",
          items: [
            { q: "My brother is engineer.", a: ["My brother is an engineer."] },
            { q: "The children need love and attention.", a: ["Children need love and attention."] },
            { q: "We should protect nature and environment.", a: ["We should protect nature and the environment."] },
            { q: "I have a idea for a project.", a: ["I have an idea for a project."] }
          ]
        },
        {
          type: "write", title: "A cause I care about",
          prompt: "Write a text (120–150 words) about a cause you care about or an organization you admire. Explain the problem, what the organization (or you) does, and how other people can help. Pay attention to articles.",
          minWords: 120, maxWords: 150,
          model: "The cause I care about most is animal welfare. In my city, there are thousands of street dogs and cats. Many of them are sick or hungry, and people often ignore them. Two years ago, I started volunteering at a shelter called Huellitas. The shelter rescues abandoned animals, takes them to a vet and looks for families who can adopt them. I go every Saturday morning. I feed the dogs, clean the cages and take photos of the animals for the shelter's social media. The photos help a lot: last month, fifteen animals were adopted! If you want to help, you don't need to be a vet. You can donate food, share posts online or adopt a pet instead of buying one. Animals can't speak, so we need to speak for them.",
          bank: ["The cause I care about is…", "There are…", "I started volunteering at a…", "The… rescues / helps…", "If you want to help,…", "You can…"],
          checklist: [
            "I used **a / an** for first mentions and jobs.",
            "I used **the** for second mentions and unique things.",
            "I used **no article** for general plural and uncountable nouns.",
            "I explained how **others** can help."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Notice how *the* sounds before vowels (/ði/).",
          items: [
            "I volunteer at an animal shelter.",
            "The shelter is near the airport.",
            "A family adopted an old dog.",
            "Volunteering is good for the mind.",
            "We must protect the environment.",
            "It's the most rewarding experience."
          ]
        },
        {
          type: "speak", title: "Make a difference",
          prompt: "Record yourself for one to two minutes. Talk about a cause you care about and a person or organization that makes a difference. What do they do? How could you or your classmates help?",
          language: ["A cause I really care about is…", "There's an organization called…", "The organization…", "Volunteers…", "If people want to help, they can…", "I'd like to…"],
          seconds: 120,
          checklist: ["describe a cause and an organization?", "use a / an and the correctly?", "use general nouns without the?", "explain how to help?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can talk about volunteering and social causes.", review: "Explanation: the vocabulary cards; Reading" },
    { can: "I can use *a / an* for first mentions and jobs.", review: "Explanation: a / an or the?" },
    { can: "I can use *the* for second mentions and unique things.", review: "Explanation: a / an or the?; Reading activity 2" },
    { can: "I can use no article for general nouns.", review: "Explanation: no article; Writing activity 2" },
    { can: "I can understand a volunteer's story.", review: "Listening activities 1 and 2" },
    { can: "I can describe a cause I care about.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
