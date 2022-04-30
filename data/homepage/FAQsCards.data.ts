import { v4 as uuidv4 } from "uuid";

export const faqsCards = [
  {
    id: uuidv4(),
    title: "Help center",
    body: "Use our UI to build your solutions without writing no to very little code in order to get your projects going. Customize and own your apps on the most popular Blockchains without developers or knowledge of code. Then manage everything from your dashboard.",
    bg: true,
    imageSrc: "Help-Center",
    themeColor: "--primary-two",
    url: "#",
  },
  {
    id: uuidv4(),
    title: "Talk to us",
    body: "Need infrastructure? Save time + cost of bulding your own back-end infrastructure and use our fully managed, infinitely scalable enterprise-grade infrastructure. Then use exactly what you need to extend what you’ve already built, or add entirely new components to fill in what you’re missing.",
    bg: true,
    imageSrc: "Support",
    themeColor: "--primary-two",
    url: "#",
  },
];
