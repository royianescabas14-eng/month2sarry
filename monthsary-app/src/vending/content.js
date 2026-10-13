/**
 * The Love Vending Machine Content & Customization File
 *
 * Customize any of the messages, promises, challenges, or the golden letter below!
 * Placeholders are marked clearly with [CUSTOMIZE] for easy personal edits.
 */

export const VENDING_INTRO = {
  title: "The Love Vending Machine",
  badge: "Month 4 Gift 💗",
  tagline: "A little machine filled with little pieces of my love.",
  description:
    "Every capsule holds a tiny piece of my heart—sweet reminders, warm hugs, fun little adventures for us, and an extra special golden surprise just for you, Gwenyy.",
  buttonText: "Let's see what's inside ✨",
};

export const CATEGORIES = {
  words: {
    id: "words",
    name: "Words of Love",
    icon: "💌",
    color: "#ff6f91",
    accentBg: "rgba(255, 111, 145, 0.15)",
    glowColor: "rgba(255, 111, 145, 0.45)",
    tagline: "Sweet little reminders of how precious you are to me.",
    surprises: [
      {
        id: "words-1",
        title: "Your Brightest Smile 🌸",
        message:
          "Whenever I see you smile or hear your laughter, my entire world feels lighter. Never forget how much warmth you bring into my life just by being you.",
        tag: "Affection",
      },
      {
        id: "words-2",
        title: "My Favorite Notification 📱",
        message:
          "Out of all the messages I receive throughout the day, seeing your name pop up on my screen is always the highlight of my day.",
        tag: "Daily Reminder",
      },
      {
        id: "words-3",
        title: "You Are My Safe Space 🤍",
        message:
          "With you, I can be completely myself. Thank you for your patience, your kindness, and the gentle way you understand me.",
        tag: "Gratitude",
      },
      {
        id: "words-4",
        title: "Four Months & Counting ⏳",
        message:
          "Four months might just be the beginning, but every single day with you feels special. I appreciate every moment we share together.",
        tag: "Monthsary Note",
      },
      {
        id: "words-5",
        title: "The Little Things You Do ✨",
        message:
          "The way you share your day with me, your little thoughts, and your care—it's all the small things about you that make me fall for you more.",
        tag: "Sweet Thought",
      },
      {
        id: "words-6",
        title: "Always Cheering for You 🌟",
        message:
          "Whatever you're facing today, remember that you are strong, capable, and never alone. I am always in your corner cheering you on!",
        tag: "Encouragement",
      },
    ],
  },

  hugs: {
    id: "hugs",
    name: "Virtual Hugs",
    icon: "🫂",
    color: "#ff8fa3",
    accentBg: "rgba(255, 143, 163, 0.15)",
    glowColor: "rgba(255, 143, 163, 0.45)",
    tagline: "A warm squeeze across the distance whenever you need comfort.",
    surprises: [
      {
        id: "hugs-1",
        title: "The Cozy Long Hug 🧸",
        message:
          "Close your eyes for three seconds and take a deep breath. Imagine me wrapping my arms around you and holding you tight until all your tiredness melts away.",
        tag: "Comfort",
        hugEmoji: "🫂",
      },
      {
        id: "hugs-2",
        title: "The 'Everything Will Be Okay' Hug ☁️",
        message:
          "For days when things feel overwhelming or heavy: here is a quiet, steady hug just to remind you that you don't have to carry everything alone.",
        tag: "Reassurance",
        hugEmoji: "🤍",
      },
      {
        id: "hugs-3",
        title: "The Sudden Squeeze 🤗",
        message:
          "Surprise! A spontaneous, energetic hug because I suddenly missed you so much and wanted you to feel loved right at this exact second.",
        tag: "Playful",
        hugEmoji: "💖",
      },
      {
        id: "hugs-4",
        title: "Goodnight Pillow Hug 🌙",
        message:
          "Tuck yourself in warm and snug. Sending you the softest virtual hug to keep you safe and comfortable until morning comes.",
        tag: "Nighttime",
        hugEmoji: "✨",
      },
      {
        id: "hugs-5",
        title: "The Forever Blanket Hug 🛋️",
        message:
          "Distance can't stop me from sending you warmth. Consider this a permanent coupon for an unlimited supply of hugs whenever you ask.",
        tag: "Warmth",
        hugEmoji: "🧸",
      },
    ],
  },

  challenges: {
    id: "challenges",
    name: "Little Challenges",
    icon: "🎮",
    color: "#9d72ff",
    accentBg: "rgba(157, 114, 255, 0.15)",
    glowColor: "rgba(157, 114, 255, 0.45)",
    tagline: "Fun, cozy little missions for our long-distance bond.",
    surprises: [
      {
        id: "chal-1",
        title: "Challenge: The Melody Exchange 🎵",
        message:
          "Send each other one song that reminds you of us or one song you've had on repeat today. Listen to them at the same time!",
        tag: "Music Date",
        actionText: "Send our song",
      },
      {
        id: "chal-2",
        title: "Challenge: Cozy Watch Party 🎬",
        message:
          "Pick a short video, an anime episode, or a movie clip for us to sync up and watch together tonight while sharing our reactions.",
        tag: "Watch Together",
        actionText: "Plan our watch date",
      },
      {
        id: "chal-3",
        title: "Challenge: Fun Question Time 💬",
        message:
          "Ask me one question—anything from something silly, a deep thought, or what my favorite memory of us is. I promise to answer honestly!",
        tag: "Late-night Talks",
        actionText: "Ask me a question",
      },
      {
        id: "chal-4",
        title: "Challenge: Photo of the Day 📸",
        message:
          "Snap a quick picture of something around you right now (the sky, your desk, a snack, or your view) and send it over so I can see your world.",
        tag: "Little Moments",
        actionText: "Snap a photo",
      },
      {
        id: "chal-5",
        title: "Challenge: Food Delivery / Snack Sync 🍓",
        message:
          "Let's both grab a favorite drink or treat at the same time and enjoy a sweet snack break together across our screens.",
        tag: "Treat Break",
        actionText: "Grab a snack",
      },
    ],
  },

  promises: {
    id: "promises",
    name: "Our Little Promises",
    icon: "🤍",
    color: "#38bdf8",
    accentBg: "rgba(56, 189, 248, 0.15)",
    glowColor: "rgba(56, 189, 248, 0.45)",
    tagline: "Sincere intentions and promises kept close to heart.",
    surprises: [
      {
        id: "prom-1",
        title: "Promise to Always Listen 🎧",
        message:
          "I promise to always listen to you with an open heart—not just when you are happy, but especially on the days when you need someone to lean on.",
        tag: "My Promise",
      },
      {
        id: "prom-2",
        title: "Promise of Honesty & Patience 🕊️",
        message:
          "I promise to be gentle, patient, and honest with you. Relationships take effort and care, and I want to keep choosing you every day.",
        tag: "My Promise",
      },
      {
        id: "prom-3",
        title: "Promise to Celebrate Your Wins 🎉",
        message:
          "I promise to celebrate every victory of yours, big or small, and to remind you how proud I am of the person you are.",
        tag: "My Promise",
      },
      {
        id: "prom-4",
        title: "Promise Across the Miles 🌍",
        message:
          "I promise that no matter the distance between us, my effort and affection will never fade. You will never have to doubt where you stand in my life.",
        tag: "My Promise",
      },
      {
        id: "prom-5",
        title: "Promise for Our Future 🌟",
        message:
          "I promise to keep building towards our shared dreams and the day when distance won't be between us anymore.",
        tag: "My Promise",
      },
    ],
  },

  mystery: {
    id: "mystery",
    name: "Mystery Capsules",
    icon: "✨",
    color: "#e879f9",
    accentBg: "rgba(232, 121, 249, 0.15)",
    glowColor: "rgba(232, 121, 249, 0.45)",
    tagline: "Hidden secrets, playful surprises, and rare little gems.",
    surprises: [
      {
        id: "myst-1",
        title: "Secret Note: A Midnight Thought 🌙",
        message:
          "Fun fact: Sometimes I look at our chat history and smile like an idiot when rereading our silly little inside jokes.",
        tag: "Secret",
      },
      {
        id: "myst-2",
        title: "Lucky Star: Wish Granted 🌠",
        message:
          "You just found a Lucky Star Capsule! You may redeem one wish from me anytime: ask me to sing for you, send a voice note, or give you full control of our next activity.",
        tag: "Free Wish",
      },
      {
        id: "myst-3",
        title: "Secret Note: The Warmest Feeling ☕",
        message:
          "Did you know? Knowing that I get to talk to you after a long, tiring day gives me something genuinely comforting to look forward to.",
        tag: "Secret",
      },
      {
        id: "myst-4",
        title: "Little Love Coupon 🎟️",
        message:
          "Valid for: 1 hour of undivided attention with zero distractions, doing whatever you feel like doing together.",
        tag: "Coupon",
      },
      {
        id: "myst-5",
        title: "Bonus Affirmation 💫",
        message:
          "You are beautiful, you are deeply cherished, and having you in my life makes my days a whole lot brighter.",
        tag: "Bonus",
      },
    ],
  },
};

export const GOLDEN_CAPSULE = {
  id: "golden-capsule",
  name: "Special Golden Heart",
  icon: "💛",
  color: "#f59e0b",
  accentBg: "rgba(245, 158, 11, 0.18)",
  glowColor: "rgba(245, 158, 11, 0.7)",
  badge: "Special 4th Monthsary Gift 🌟",
  title: "A Letter from My Heart",
  salutation: "Dearest Gwenyy,",
  // Placeholders clearly labeled for easy customization:
  paragraphs: [
    "Happy 4th Monthsary, my love! 💗",
    "It feels so surreal that four months have passed by since we started this journey together. Every month brings new moments, new memories, and new reasons for me to appreciate just how wonderful you are.",
    "Even with the distance, having you in my days gives me so much peace and happiness. Thank you for your sweet laughter, your genuine care, and for choosing to share your heart with me.",
    "This Love Vending Machine was made so that whenever you feel tired, whenever you miss me, or whenever you just want a little smile, you can always come here and pick a piece of my love.",
    "I'm so grateful for you, Gwenyy. Here's to four wonderful months and to so many more memories waiting for us ahead.",
  ],
  signoff: "With all my love and devotion,",
  signature: "Forever yours 💖",
};

