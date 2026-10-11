// Sections that every month has
const letter = (image) => ({
  slug: "words",
  label: "Love Letter",
  type: "words",
  music: "/music/bg-music.mp3",
  content: { title: "Love Letter 💌", image },
});

const gift = ({ image = "/images/gift.gif", description = "On Delivery ✨" } = {}) => ({
  slug: "gift",
  label: "Gift",
  type: "gift",
  music: "/music/gift.mp3",
  content: { title: "Gifts 🎁", image, description },
});

export const months = [
  {
    id: 1,
    title: "Happy First Monthsary ❤️",
    subtitle: "Open the things you received this month ❤️",
    background: null,
    music: "/music/mo1.mp3",
    sections: [
      letter("/images/letter.png"),
      gift(),
      {
        slug: "touch",
        label: "Ticket",
        type: "tickets",
        music: null,
        content: {
          title: "Tickets 💞",
          intro: "Redeem your tickets anytime you want 💌",
          images: [
            { src: "/images/tick1.jpg", alt: "Ticket 1" },
            { src: "/images/tick2.jpg", alt: "Ticket 2" },
            { src: "/images/tick3.jpg", alt: "Ticket 3" },
          ],
          caption: "Each ticket lets you ask me anything you want 💖",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Happy Second Monthsary ❤️",
    background: "/images/month2bg.gif",
    music: "/music/mo1.mp3",
    sections: [
      letter("/images/letter2.jpg"),
      gift(),
      {
        slug: "music",
        label: "Music",
        type: "music",
        music: null,
        overlay: true,
        content: {
          title: "A song I made For You",
          topImage: "/images/top.gif",
          song: "/music/song1.mp3",
          paragraphs: [
            "This month taught me how important it is to listen, to be patient, and to understand you more deeply.",
            "I may not always say the right words, but I hope you feel how sincere my heart is.",
          ],
        },
      },
    ],
  },
  {
    id: 3,
    title: "Happy Third Monthsary ❤️",
    subtitle: "Three months of us ❤️",
    background: null,
    music: "/music/mo1.mp3",
    sections: [
      letter("/images/letter3.jpg"),
      gift(),
      {
        slug: "quality-time",
        label: "Quality Time",
        type: "quality",
        content: {
          title: "Quality Time 💖",
          intro: "My favorite moment with you this month",
          photo: "/images/quality1.jpg",
          caption: "Write a short sentence about this memory here.",
        },
      },
    ],
  },
];