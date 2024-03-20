import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://tunjan.site/", // replace this with your deployed domain
  author: "Alberto Trigo Medina",
  desc: "A personal blog",
  title: "tunjan",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/tunjan",
    linkTitle: `GitHub profile`,
    active: true,
  },
  {
    name: "Facebook",
    href: "#",
    linkTitle: `#`,
    active: false,
  },
  {
    name: "Instagram",
    href: "#",
    linkTitle: `#`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/alberto-trigo-medina/",
    linkTitle: `${SITE.title} on Linkedin`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:trigo@inventati.org",
    linkTitle: `Email`,
    active: true,
  },
  {
    name: "Twitter",
    href: "#",
    linkTitle: `Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "#",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "#",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "#",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "#",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "#",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "#",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "#",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "#",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "#",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "#",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "#",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "#",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/vegertus",
    linkTitle: `Telegram`,
    active: true,
  },
  {
    name: "Mastodon",
    href: "https://scicomm.xyz/@tunjan",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
