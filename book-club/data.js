window.UNIT = {
  slug: "book-club",
  number: 10,
  title: "Book Club",
  level: "B1",
  minutes: 65,
  speakers: { "Karen": "f", "Emilio": "m", "Moderator": "f", "Ricardo": "m", "Itzel": "f" },
  focus: ["books and genres vocabulary", "summarizing a plot in the present tense", "contrast: although, even though, however", "despite / in spite of + noun or -ing", "writing a review"],

  presentation: {
    scene: "📚☕🗣️⭐",
    situation: "Karen and Emilio are members of a book club at the university library. Today they're discussing the novel of the month.",
    warmup: {
      prompt: "What kinds of books or stories do you enjoy? Choose all.",
      options: ["mystery", "science fiction", "fantasy", "romance", "biography", "horror", "comics / manga", "historical fiction", "self-help", "poetry", "thrillers", "classics"],
      response: "Great taste! In this unit you'll learn to summarize a story and give a balanced opinion."
    },
    dialogueTitle: "The novel of the month",
    dialogue: [
      { who: "Karen", line: "So, what did you think of the novel?" },
      { who: "Emilio", line: "I enjoyed it, *although* the beginning was a bit slow." },
      { who: "Karen", line: "I agree. *However*, once the main character *arrives* in the city, it *becomes* really exciting." },
      { who: "Emilio", line: "Definitely. *Despite* the long descriptions, I couldn't stop reading." },
      { who: "Karen", line: "What about the ending? I didn't like it. *Even though* she *finds* her brother, she *decides* to leave him." },
      { who: "Emilio", line: "Really? I loved it! It was sad, but realistic." },
      { who: "Karen", line: "Well, *in spite of* the ending, I'd give it four stars out of five." }
    ]
  },

  objectives: [
    "I can summarize the plot of a book, film or series.",
    "I can use *although, even though* and *however* to show contrast.",
    "I can use *despite / in spite of* with a noun or *-ing*.",
    "I can write a short, balanced review."
  ],

  explanation: {
    vocabTitle: "Talking about books",
    vocab: [
      { word: "plot", icon: "🧵" }, { word: "main character", icon: "🧑" }, { word: "setting", icon: "🏙️" },
      { word: "author", icon: "✍️" }, { word: "chapter", icon: "📖" }, { word: "ending", icon: "🔚" },
      { word: "a page-turner", icon: "📚" }, { word: "gripping", icon: "😮" }, { word: "predictable", icon: "🥱" },
      { word: "moving", icon: "🥹" }, { word: "well-written", icon: "🖋️" }, { word: "slow-paced", icon: "🐢" },
      { word: "a twist", icon: "🌀" }, { word: "it's set in…", icon: "📍" }, { word: "I'd recommend it", icon: "👍" }
    ],
    grammar: [
      {
        title: "Summarizing a plot",
        intro: "When we tell the plot of a book or film, we usually use the **present simple** (and present perfect for earlier events).",
        head: ["", "Example"],
        rows: [
          ["setting", "The story *is set* in Guadalajara in the 1990s."],
          ["main character", "It *'s about* a girl who *wants* to be a boxer."],
          ["events", "When her father *loses* his job, she *decides* to work."],
          ["earlier events", "Her brother *has disappeared*, so she *goes* to look for him."]
        ]
      },
      {
        title: "Contrast linkers",
        head: ["Linker", "Grammar", "Example"],
        rows: [
          ["*although / even though*", "+ subject + verb", "I enjoyed it, *although* the beginning *was* slow."],
          ["*however*", "new sentence, followed by a comma", "The beginning was slow. *However*, the ending was great."],
          ["*despite / in spite of*", "+ noun or -ing", "*Despite* the long descriptions, I loved it. / *In spite of being* long, it's a page-turner."],
          ["*but*", "joins two clauses (informal)", "It's long, *but* it's worth it."]
        ],
        note: "*Even though* is stronger than *although*. Never say *despite of*. Say *despite* or *in spite of*."
      }
    ],
    watchOut: [
      ["Despite of the ending, I liked it.", "Despite the ending, I liked it."],
      ["Although it was long, but I enjoyed it.", "Although it was long, I enjoyed it."],
      ["Despite it was boring, I finished it.", "Although it was boring, I finished it."],
      ["The story was about a girl who wanted to be a boxer. (summary)", "The story is about a girl who wants to be a boxer."]
    ],
    check: {
      type: "gap", title: "Quick check",
      prompt: "Complete with *although, however* or *despite*.",
      items: [
        "[[Although|Even though]] the book is long, it's easy to read.",
        "The characters are great. [[However]], the plot is predictable.",
        "[[Despite|In spite of]] the bad reviews, the movie was a big success.",
        "I finished the novel [[despite|in spite of]] being very busy."
      ]
    }
  },

  skills: {
    listening: {
      intro: "Listen to a book club discussion on a cultural radio program.",
      title: "Readers' corner",
      script: [
        { who: "Moderator", line: "Welcome to Readers' Corner. This month we read a science fiction novel, *The Last Garden*. Ricardo, can you summarize the plot?" },
        { who: "Ricardo", line: "Sure. It's set in the year 2150. The Earth is almost a desert, and people live in giant domes. The main character, Lía, is a young scientist who discovers the last natural garden on the planet." },
        { who: "Moderator", line: "And what happens next?" },
        { who: "Ricardo", line: "The government wants to destroy the garden and build a factory, so Lía tries to protect it with the help of an old gardener. I won't tell you the ending!" },
        { who: "Moderator", line: "Ha! Thank you. Itzel, did you like it?" },
        { who: "Itzel", line: "I really did. Although it's science fiction, it feels very real, because it talks about climate change. However, I think some chapters are too long." },
        { who: "Ricardo", line: "I agree. Despite that, the characters are amazing. Lía is brave, but she's also afraid, and that makes her human." },
        { who: "Moderator", line: "So, would you recommend it?" },
        { who: "Itzel", line: "Definitely. In spite of the slow chapters, it's a page-turner. I'd give it four and a half stars." },
        { who: "Ricardo", line: "Five for me. It's the best book I've read this year." }
      ],
      activities: [
        {
          type: "gap", title: "The plot",
          prompt: "Listen and complete the summary.",
          items: [
            "The story is set in the year [[2150]].",
            "People live in giant [[domes]].",
            "Lía is a young [[scientist]].",
            "The government wants to build a [[factory]].",
            "An old [[gardener]] helps her."
          ]
        },
        {
          type: "sort", title: "Positive or negative opinion?",
          prompt: "Listen again. Sort the comments.",
          bins: ["Positive 👍", "Negative 👎"],
          items: [
            { text: "It feels very real.", bin: 0 }, { text: "The characters are amazing.", bin: 0 }, { text: "Lía is brave and human.", bin: 0 }, { text: "It's a page-turner.", bin: 0 }, { text: "It's the best book of the year.", bin: 0 },
            { text: "Some chapters are too long.", bin: 1 }, { text: "Some chapters are slow.", bin: 1 }
          ]
        }
      ]
    },

    reading: {
      intro: "Read two short reviews from a book website.",
      title: "Readers' reviews",
      text: [
        { author: "⭐⭐⭐⭐⭐ by Fer_lee", body: "*The Silent Island* is a gripping mystery set on a small island in Baja California. When a famous writer disappears, a young journalist, Inés, travels there to investigate. Everyone on the island seems to have a secret. Although the book is almost 500 pages long, I read it in three days. The descriptions of the island are beautiful, and the final twist is incredible. I'd recommend it to anyone who likes mysteries." },
        { author: "⭐⭐ by Mau_lector", body: "Despite all the good reviews, I was disappointed by *The Silent Island*. The setting is lovely and the first chapters are exciting. However, the middle part is slow and the characters are not very well developed. Inés makes some strange decisions that don't make sense. Even though the ending has a surprising twist, it felt too rushed. In my opinion, it's an OK book for the beach, but not a masterpiece." }
      ],
      activities: [
        {
          type: "sort", title: "Who says it?",
          prompt: "Read the reviews. Which reviewer has each opinion?",
          bins: ["Fer_lee (5 stars)", "Mau_lector (2 stars)"],
          items: [
            { text: "read it in three days", bin: 0 }, { text: "the final twist is incredible", bin: 0 }, { text: "recommends it to mystery fans", bin: 0 },
            { text: "the middle part is slow", bin: 1 }, { text: "the characters aren't well developed", bin: 1 }, { text: "the ending felt too rushed", bin: 1 }
          ]
        },
        {
          type: "rewrite", title: "Rewrite with the linker",
          prompt: "Rewrite each sentence with the word in parentheses. Keep the same meaning.",
          items: [
            { q: "The book is long, but I read it in three days. (although)", a: ["Although the book is long, I read it in three days.", "I read it in three days although the book is long.", "Although it is long, I read it in three days."] },
            { q: "There were good reviews, but I was disappointed. (despite)", a: ["Despite the good reviews, I was disappointed.", "I was disappointed despite the good reviews."] },
            { q: "The setting is lovely, but the middle is slow. (however)", a: ["The setting is lovely. However, the middle is slow.", "The setting is lovely; however, the middle is slow."] }
          ]
        }
      ]
    },

    writing: {
      intro: "Practice contrast linkers, then write your own review.",
      activities: [
        {
          type: "rewrite", title: "Correct the mistakes",
          prompt: "Each sentence has a mistake with a contrast linker. Write it correctly.",
          items: [
            { q: "Despite of the rain, we went to the book fair.", a: ["Despite the rain, we went to the book fair.", "In spite of the rain, we went to the book fair."] },
            { q: "Although I was tired, but I finished the chapter.", a: ["Although I was tired, I finished the chapter.", "I was tired, but I finished the chapter."] },
            { q: "In spite of it was expensive, I bought the book.", a: ["Although it was expensive, I bought the book.", "In spite of being expensive, I bought the book.", "Even though it was expensive, I bought the book."] },
            { q: "The movie was long. Although, it was great.", a: ["The movie was long. However, it was great."] }
          ]
        },
        {
          type: "tiles", title: "Put the words in order",
          items: [
            { a: "The story is set in Mexico City." },
            { a: "It's about a boy who wants to be a chef." },
            { a: "Despite the slow start, it's a page-turner." },
            { a: "I'd recommend it to anyone who likes mysteries." }
          ]
        },
        {
          type: "write", title: "My review",
          prompt: "Write a review (130–160 words) of a book, movie or series you know well. Include: the setting, a short plot summary in the present tense (no spoilers!), what you liked and didn't like, a star rating and a recommendation. Use at least three different contrast linkers.",
          minWords: 130, maxWords: 160,
          model: "*Coco* is an animated movie set in a small Mexican town during the Day of the Dead. It's about Miguel, a twelve-year-old boy who dreams of becoming a musician, even though his family hates music. When he plays the guitar of a famous dead singer, he travels to the Land of the Dead, where he meets his ancestors. Although it's a children's movie, adults love it too. The colors and the music are beautiful, and the story about family is very moving. However, the middle part is a little long, and some jokes are predictable. Despite these small problems, the ending made me cry, and I've watched it four times. I'd give it four and a half stars. I'd recommend it to anyone who wants to learn about Mexican traditions, or who simply loves a good family story.",
          bank: ["It's set in…", "It's about…", "When…, he / she…", "Although…", "However,", "Despite…", "I'd give it… stars.", "I'd recommend it to…"],
          checklist: [
            "I described the **setting** and the **main character**.",
            "I summarized the plot in the **present tense** without spoilers.",
            "I used at least **three** contrast linkers.",
            "I gave a **rating** and a **recommendation**."
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
            "I enjoyed it, although the beginning was slow.",
            "The story is set in the future.",
            "Despite the long descriptions, I loved it.",
            "However, the ending was a bit rushed.",
            "It's a real page-turner.",
            "I'd give it four stars."
          ]
        },
        {
          type: "speak", title: "Book club recommendation",
          prompt: "Record a one- to two-minute recommendation for the CAA book club. Talk about a book, film or series: setting, plot (no spoilers), main characters, positive and negative points and your rating.",
          language: ["I'd like to recommend…", "It's set in…", "It's about…", "Although…", "Despite…", "I'd give it… out of five."],
          seconds: 120,
          checklist: ["summarize the plot in the present tense?", "use at least three contrast linkers?", "give positive and negative points?", "give a rating?"]
        }
      ]
    }
  },

  selfAssessment: [
    { can: "I can summarize a plot in the present tense.", review: "Explanation: summarizing a plot" },
    { can: "I can use *although* and *even though* correctly.", review: "Explanation: contrast linkers" },
    { can: "I can use *however* at the start of a new sentence.", review: "Explanation: contrast linkers; Reading activity 2" },
    { can: "I can use *despite / in spite of* with a noun or *-ing*.", review: "Writing activity 1" },
    { can: "I can follow a discussion about a book.", review: "Listening activities 1 and 2" },
    { can: "I can write and give a balanced review.", review: "Writing activity 3 and Speaking activity 2" }
  ]
};
