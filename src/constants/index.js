import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mobifone,
  dft,
  fpt,
  vitex,
  navisoft,
  vccorp,
  okvip,
  okchoi,
  supercore,
  challengr,
  fpsunity,
  csharp,
  php,
  laravel,
} from "../assets";
import { useTranslations } from "next-intl";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const useConstants = () => {
  const t = useTranslations("Index");
  return {
    overview: t("overview"),
    services: [
      {
        title: "Web Developer",
        icon: web,
      },
      {
        title: "ReactJs Developer",
        icon: mobile,
      },
      {
        title: "Backend Developer",
        icon: backend,
      },
      {
        title: "Model Designer",
        icon: creator,
      },
    ],

    technologies: [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "C#",
        icon: csharp,
      },
      {
        name: "Php",
        icon: php,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Laravel",
        icon: laravel,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "figma",
        icon: figma,
      },
      {
        name: "docker",
        icon: docker,
      },
    ],

    experiences: [
      {
        title: "Web Developer",
        company_name: "Haedap JSC/Mobifone",
        icon: mobifone,
        iconBg: "#383E56",
        date: "April 2021 - April 2022",
        points: [
          "Develop web application, build app structure by admin panel framework Laravel Admin",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      },
      {
        title: "Backend Developer",
        company_name: "FPT Software",
        icon: fpt,
        iconBg: "#E6DEDD",
        date: "May 2021 - December 2022",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing apis service using c# .NET framework",
          "Maintain mobile apps based on angular 2, modify themes, layouts, build new pages...",
        ],
      },
      {
        title: "Fullstack Developer",
        company_name: "NaviSoft",
        icon: navisoft,
        iconBg: "#383E56",
        date: "May 2022 - Nov 2023",
        points: [
          "Write code and develop Web application for DEPOSITORY AND SURVEILLANCE BANK SOLUTION",
          "Providing software services and solutions in securities, banking and financial sectors",
          "Build and maintain Financial Front Office web app and Back Office app",
          "Handling customer requests and requirements- Optimize database, code convention.",
        ],
      },
      {
        title: "Frontend Developer",
        company_name: "VCCorp",
        icon: vccorp,
        iconBg: "#E6DEDD",
        date: "Nov 2023 - Mar 2024",
        points: [
          "Develop IMS, site editor, build app structure, config SEO contents, analyze and optimize codes and flows",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Build and develop Site Editor.",
        ],
      },
      {
        title: "Backend Developer",
        company_name: "Okvip",
        icon: okvip,
        iconBg: "#E6DEDD",
        date: "Nov 2023 - Mar 2024",
        points: [
          "Develop and build Authentications, CMS client and web client for sport streaming website",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Develop CMS API, Client Api, Chatting Realtime Handling",
        ],
      },
      {
        title: "Fullstack Developer",
        company_name: "Vitex",
        icon: vitex,
        iconBg: "#E6DEDD",
        date: "Mar 2024 - Now",
        points: [
          "Develop and build web apps, mobile apps, Authentications, CMS client and web client for sport streaming website",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Develop app components, apis, mail handling",
        ],
      },
    ],

    testimonials: [
      {
        testimonial:
          "You're the MVP of teamwork—like a glue that holds us together, always there with a helping hand and a smile.",
        name: "Minh",
        designation: "Designer",
        company: "NaviSoft",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial:
          "You're the lone wolf of productivity—fearless, self-reliant, and blazing your trail through challenges with ease.",
        name: "Ha",
        designation: "Tester",
        company: "Dft",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial:
          "You're the after-hours hero of the project—always there, full of energy, and ready to save the day!",
        name: "Phuong",
        designation: "BA",
        company: "Navisoft",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],

    projects: [
      {
        name: "Challengr",
        description: `A Web/mobile app based on old strava location tracking which allow user to share and start sport challenges, share their post, a social network for sports and company teams to track their activities process... `,
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "c#",
            color: "blue-text-gradient",
          },
          {
            name: "tailwindcss",
            color: "pink-text-gradient",
          },
          {
            name: "laravel",
            color: "green-text-gradient",
          },
        ],
        image: challengr,
        source_code_link: "https://github.com/",
        web_link: "https://next-staging.challengr.be/"
      },
      {
        name: "SSI Supercore",
        description: `A Web application contains BO and FO, BO to manage customer, staffs, securities, stock
        depository transactions, money exchanges, money transfers, FO to send and get orders
        messages, place buy and sell orders,...`,
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "c#",
            color: "blue-text-gradient",
          },
          {
            name: "antdesign",
            color: "pink-text-gradient",
          },
          {
            name: "oracle",
            color: "green-text-gradient",
          },
        ],
        image: supercore,
        source_code_link: "https://github.com/",
        web_link: "https://iboard.ssi.com.vn/"
      },
      {
        name: "Unity 3d Games",
        description: `A Web app allows users to manage their favorite football teams, leagues, watch live
        match, chating in match room`,
        tags: [
          {
            name: "unity",
            color: "blue-text-gradient",
          },
          {
            name: "c#",
            color: "blue-text-gradient",
          },
          {
            name: "modeling",
            color: "pink-text-gradient",
          },
        ],
        image: fpsunity,
        source_code_link: "https://github.com/",
      },
      {
        name: "OkChoi - Sport Live",
        description: `A Web app allows users to manage their favorite football teams, leagues, watch live
        match, chating in match room`,
        tags: [
          {
            name: "reactjs",
            color: "blue-text-gradient",
          },
          {
            name: "c#",
            color: "blue-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
        ],
        image: okchoi,
        source_code_link: "https://github.com/",
        web_link: "https://dev.banhgio88.com/",
      },
    ],
  };
};

export { useConstants };
