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
    background: "/images/month3bg.gif",
    music: "/music/mo1.mp3",
    sections: [
      letter("/images/letter3.jpg"),
      gift(),
      {
        slug: "case-003",
        label: "Case 003: Fractured Memory",
        type: "mystery",
        content: {
          title: "Case 003: Fractured Memory",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Happy Fourth Monthsary ❤️",
    subtitle: "A little machine filled with little pieces of my love.",
    background: "/images/month4bg.jpeg",
    music: "/music/gift.mp3",
    sections: [
      {
        slug: "vending",
        label: "Vending Machine",
        type: "vending",
        music: "/music/gift.mp3",
        content: {
          title: "The Love Vending Machine",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Happy Fifth Monthsary ❤️",
    subtitle: "Relationship Systems Bureau v5.0",
    background: null,
    music: "/music/gift.mp3",
    sections: [
      {
        slug: "exam",
        label: "Girlfriend Certification Exam.exe 💻",
        type: "exam",
        music: "/music/gift.mp3",
        content: {
          title: "GIRLFRIEND CERTIFICATION EXAM.exe",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Happy Sixth Monthsary ❤️",
    subtitle: "The Museum of Us — Our Albion Online Adventures",
    background: null,
    music: "/music/mo1.mp3",
    sections: [
      {
        slug: "museum",
        label: "The Museum of Us 🏰",
        type: "museum",
        music: "/music/mo1.mp3",
        content: {
          title: "The Museum of Us",
        },
      },
    ],
  },
];