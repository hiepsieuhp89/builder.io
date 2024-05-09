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
  navisoft,
  vccorp,
  okvip,
} from "../assets";

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

const services = [
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
];

const technologies = [
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
];

const experiences = [
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
    title: "Fullstack Developer",
    company_name: "DFT JSC",
    icon: dft,
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
];

const testimonials = [
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
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
