window.UNIT = {
  slug: "giving-a-presentation",
  number: 47,
  title: "Giving a Presentation",
  level: "B1",
  minutes: 65,
  speakers: { "Gaby": "f", "Prof. Ortega": "m", "Speaker": "f" },
  focus: ["presentation vocabulary", "signposting: introducing, sequencing, moving on", "referring to visuals", "summarizing and concluding", "handling questions"],

  presentation: {
    scene: "🎤📊🧑‍🏫👏",
    situation: "Gaby has to give her first presentation in English at a student conference. She's practicing with her professor.",
    warmup: {
      prompt: "What makes a presentation good? Choose all.",
      options: ["a clear structure", "eye contact", "a lot of text on slides", "examples and stories", "reading from notes all the time", "good images", "speaking slowly", "humor", "a strong ending", "speaking very fast", "asking the audience questions", "practicing before"],
      response: "Good choices! In this unit you'll learn the language to give a clear, well-organized presentation."
    },
    dialogueTitle: "Practice session",
    dialogue: [
      { who: "Gaby", line: "*Good morning, everyone. Today I'm going to talk about* plastic pollution in Mexican rivers." },
      { who: "Prof. Ortega", line: "Good start. Now tell us how the talk is organized." },
      { who: "Gaby", line: "OK. *My presentation is divided into three parts. First, I'll* describe the problem. *Then, I'll* show some data. *Finally, I'll* suggest some solutions." },
      { who: "Prof. Ortega", line: "Excellent. That helps the audience follow you. What happens when you change topic?" },
      { who: "Gaby", line: "*Now let's move on to* the data. *As you can see in this graph,* plastic waste has doubled since 2010." },
      { who: "Prof. Ortega", line: "Very clear. And the end?" },
      { who: "Gaby", line: "*To sum up,* plastic is a serious problem, but we can reduce it. *Thank you for your attention. Are there any questions?*" },
      { who: "Prof. Ortega", line: "Perfect! You're ready." }
    ]
  },

  objectives: [
    "I can introduce a presentation and explain its structure.",
    "I can use signposting language to move between parts.",
    "I can refer to visuals like graphs and images.",
    "I can conclude a presentation and answer questions."
  ],

  explanation: {
    vocabTitle: "Presentations",
    vocab: [
      { word: "a slide", icon: "🖼️" }, { word: "a graph / chart", icon: "📊" }, { word: "the audience", icon: "👥" },
      { word: "a speaker", icon: "🎤" }, { word: "an outline", icon: "📝" }, { word: "a handout", icon: "📄" },
      { word: "eye contact", icon: "👀" }, { word: "body language", icon: "🙌" }, { word: "stage fright", icon: "😰" },
      { word: "rehearse", icon: "🔁" }, { word: "a key point", icon: "🔑" }, { word: "data", icon: "📈" },
      { word: "a question-and-answer session", icon: "❓" }, { word: "confident", icon: "😎" }, { word: "engaging", icon: "✨" }
    ],
    grammar: [
      {
        title: "Signposting language",
        head: ["Stage", "Expressions"],
        rows: [
          ["opening", "*Good morning, everyone. / Today I'm going to talk about… / The purpose of this talk is to…*"],
          ["structure", "*My presentation is divided into three parts. / First, I'll… Then, I'll… Finally, I'll…*"],
          ["moving on", "*Now let's move on to… / Let's turn to… / That brings me to my next point.*"],
          ["examples", "*For example,… / Let me give you an example. / A good example of this is…*"],
          ["visuals", "*As you can see in this graph,… / This chart shows… / If you look at this slide,…*"],
          ["concluding", "*To sum up,… / In conclusion,… / To finish, I'd like to…*"],
          ["questions", "*Are there any questions? / That's a great question. / I'm not sure, but I'll find out.*"]
        ]
      },
      {
        title: "Describing data",
        head: ["Movement", "Example"],
        rows: [
          ["up ↗", "Plastic waste *increased / rose / doubled* between 2010 and 2020."],
          ["down ↘", "The number of fish *decreased / fell / dropped* by 30%."],
          ["no change →", "The price *remained stable / stayed the same*."],
          ["speed", "*sharply / dramatically* (fast) – *slightly / gradually* (slow)"]
        ]
      }
    ],
    watchOut: [
      ["Today I will talk you about plastic.", "Today I'm going to talk about plastic."],
      ["As you can see in this graphic,…", "As you can see in this graph / chart,…"],
      ["In resume,…", "To sum up,… / In summary,…"],
      ["Thank you for your attention. Questions?", "Thank you for your attention. Are there any questions?"]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete the signposting expressions.",
      items: [
        "Today I'm going to [[talk]] about sleep and memory.",
        "My presentation is [[divided]] into three parts.",
        "Now let's [[move]] on to the results.",
        "To [[sum]] up, sleep is essential for learning."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a short presentation by a student about coffee in Mexico.",
      title: "Mexican coffee: from the mountain to your cup",
      script: [
        { who: "Speaker", line: "Good afternoon, everyone. Thank you for coming. Today I'm going to talk about coffee production in Mexico, especially in Veracruz, Chiapas and Puebla." },
        { who: "Speaker", line: "My presentation is divided into three parts. First, I'll give you some background. Then, I'll explain the main problems that farmers face. And finally, I'll suggest what consumers can do." },
        { who: "Speaker", line: "Let's start with the background. Mexico is one of the ten biggest coffee producers in the world, and more than half a million families depend on it." },
        { who: "Speaker", line: "Now let's move on to the problems. As you can see in this graph, coffee production fell sharply between 2012 and 2016. This was mainly because of a disease called roya, which attacks the leaves. Climate change is another big problem." },
        { who: "Speaker", line: "That brings me to my last point: what can we do? For example, we can buy coffee from local cooperatives and pay a fair price. A good example is the Tosepan cooperative in Cuetzalan." },
        { who: "Speaker", line: "To sum up, Mexican coffee is delicious and important, but farmers need our support. Thank you for your attention. Are there any questions?" }
      ],
      activities: [
        {
          type: "match", title: "Signposting",
          prompt: "Match each expression from the talk with its function.",
          pairs: [
            ["\"Today I'm going to talk about…\"", "introducing the topic"],
            ["\"My presentation is divided into three parts.\"", "explaining the structure"],
            ["\"Now let's move on to the problems.\"", "changing to a new part"],
            ["\"As you can see in this graph,…\"", "referring to a visual"],
            ["\"To sum up,…\"", "concluding"]
          ]
        },
        {
          type: "gap", title: "Listen for details",
          prompt: "Listen again and complete.",
          items: [
            "Mexico is one of the [[ten|10]] biggest coffee producers in the world.",
            "More than half a [[million]] families depend on coffee.",
            "Production fell sharply between 2012 and [[2016]].",
            "A disease called [[roya]] attacks the leaves.",
            "The Tosepan cooperative is in [[Cuetzalan]]."
          ]
        }
      ]
    },

    reading: {
      intro: "Read a guide with tips for presentations in English.",
      title: "How to survive your first presentation in English",
      text: [
        { body: "**Before.** Don't write your whole speech and memorize it; you'll sound like a robot and panic if you forget one word. Instead, write key points on small cards. Rehearse at least three times, preferably in front of a friend or a mirror. Time yourself!" },
        { body: "**Your slides.** Use more images and less text. A good rule is six words maximum per slide. Your audience should listen to you, not read your slides." },
        { body: "**During.** Start with something interesting: a question, a surprising fact or a short story. Speak more slowly than normal; nervous speakers always go too fast. Make eye contact with different people in the room. And don't apologize for your English: you're doing great!" },
        { body: "**Questions.** If you don't understand a question, ask the person to repeat it: \"Sorry, could you repeat the question?\" If you don't know the answer, be honest: \"That's a great question. I'm not sure, but I'll find out and let you know.\"" }
      ],
      activities: [
        {
          type: "sort", title: "Do or don't?",
          prompt: "According to the guide, sort the actions.",
          bins: ["Do ✅", "Don't ❌"],
          items: [
            { text: "write key points on cards", bin: 0 }, { text: "rehearse three times", bin: 0 }, { text: "start with a surprising fact", bin: 0 }, { text: "make eye contact", bin: 0 }, { text: "ask someone to repeat a question", bin: 0 },
            { text: "memorize the whole speech", bin: 1 }, { text: "put a lot of text on slides", bin: 1 }, { text: "speak very fast", bin: 1 }, { text: "apologize for your English", bin: 1 }
          ]
        },
        {
          type: "tf", title: "True or false?",
          prompt: "Read again. True or false?",
          items: [
            { s: "The guide recommends six words maximum per slide.", a: true },
            { s: "Nervous speakers usually speak too slowly.", a: false },
            { s: "If you don't know an answer, you should invent one.", a: false },
            { s: "You can start with a short story.", a: true }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice signposting and describing data, then prepare your own presentation.",
      activities: [
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "Today I'm going to talk about social media." },
            { a: "My presentation is divided into three parts." },
            { a: "Now let's move on to the results." },
            { a: "As you can see in this chart, sales increased." },
            { a: "Thank you for your attention." }
          ]
        },
        {
          type: "gap", title: "Describe the data",
          prompt: "Complete with *increased, fell, doubled, remained* or *slightly*.",
          items: [
            "The number of students [[increased]] from 200 to 350.",
            "Sales [[fell]] from 80% to 40%.",
            "The price [[remained]] stable at 50 pesos.",
            "Visitors went from 1,000 to 2,000. They [[doubled]].",
            "Temperatures rose [[slightly]], only half a degree."
          ]
        },
        {
          type: "write", title: "My presentation script",
          prompt: "Write the script (140–170 words) for a short presentation on a topic you know well (your city, your career, a hobby, an environmental problem…). Include an introduction with the structure, at least three parts with signposting, a reference to a visual (graph or image) and a conclusion.",
          minWords: 140, maxWords: 170,
          model: "Good morning, everyone. Today I'm going to talk about the benefits of cycling in Puebla. My presentation is divided into three parts. First, I'll describe the current situation. Then, I'll explain the benefits of cycling. Finally, I'll suggest how the city can improve. Let's start with the situation. As you can see in this graph, the number of cyclists in Puebla increased dramatically between 2019 and 2023, but there are still very few bike lanes. Now let's move on to the benefits. Cycling is good for your health, it's cheap and it doesn't pollute. For example, if you cycle ten kilometers a day instead of driving, you save more than one ton of CO2 per year. That brings me to my last point: what can the city do? It could build safe bike lanes and offer public bikes, like Mexico City's Ecobici. To sum up, cycling can make our city healthier and cleaner. Thank you for your attention. Are there any questions?",
          bank: ["Good morning, everyone.", "Today I'm going to talk about…", "My presentation is divided into…", "Let's start with…", "Now let's move on to…", "As you can see in this graph,…", "To sum up,…", "Are there any questions?"],
          checklist: [
            "I introduced the topic and the **structure**.",
            "I used **signposting** to move between parts.",
            "I referred to a **visual**.",
            "I wrote a **conclusion** and invited questions."
          ]
        }
      ]
    },

    speaking: {
      intro: "First listen and repeat sentences from the unit and check your pronunciation. Then record your evidence.",
      activities: [
        {
          type: "repeat", title: "Listen and repeat",
          prompt: "Listen to each sentence. Speak slowly and clearly, like a presenter.",
          items: [
            "Good morning, everyone.",
            "Today I'm going to talk about plastic.",
            "My presentation is divided into three parts.",
            "Now let's move on to the data.",
            "As you can see, sales rose sharply.",
            "Are there any questions?"
          ]
        },
        {
          type: "speak", title: "Present it!",
          prompt: "Record your presentation from Writing activity 3 (or a new one) for about two minutes. Don't read; use key points. Speak slowly, pause between parts and use signposting language.",
          language: ["Good morning, everyone.", "Today I'm going to talk about…", "First,… Then,… Finally,…", "Now let's move on to…", "As you can see…", "To sum up,…"],
          seconds: 150,
          checklist: ["introduce the topic and structure?", "use signposting between parts?", "speak slowly with pauses?", "conclude and invite questions?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can introduce a presentation and its structure.", review: "Explanation: signposting language (opening, structure)" },
    { can: "I can use signposting to move between parts.", review: "Explanation: signposting language; Listening activity 1" },
    { can: "I can refer to visuals and describe data.", review: "Explanation: describing data; Writing activity 2" },
    { can: "I can conclude and handle questions.", review: "Explanation: signposting (concluding, questions); Reading" },
    { can: "I can follow a short, well-organized presentation.", review: "Listening activities 1 and 2" },
    { can: "I can prepare and give a short presentation.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
