import { v4 as uuidv4 } from "uuid";

export const flexibleCards = [
  {
    id: uuidv4(),
    title: "Low Config, Low Code",
    body: "Use our UI to build your solutions without writing no to very little code in order to get your projects going. Customize and own your apps on the most popular Blockchains without developers or knowledge of code. Then manage everything from your dashboard.",
    bg: true,
    imageSrc: "Dashboard-No-Code",
    themeColor: "--primary-one",
    url: "#",
  },
  {
    id: uuidv4(),
    title: "Powerful SDKs",
    body: "Need infrastructure? Save time + cost of bulding your own back-end infrastructure and use our fully managed, infinitely scalable enterprise-grade infrastructure. Then use exactly what you need to extend what you’ve already built, or add entirely new components to fill in what you’re missing.",
    bg: true,
    imageSrc: "SDK",
    themeColor: "--supporting-tealish-green-500",
    url: "#",
  },
];
