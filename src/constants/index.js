import { useTranslations } from "next-intl";

const useNavLinks = () => {
  const t = useTranslations("navLinks");
  return [
    {
      id: "about",
      title: t("about"),
    },
    {
      id: "work",
      title: t("work"),
    },
    // {
    //   id: "listings",
    //   title: t("Real Estate Listings"),
    // },
    {
      id: "cv",
      title: "CV",
    },
    {
      id: "contact",
      title: t("contact"),
    },
  ];
};

const useConstants = () => {
  const t = useTranslations("Index");
  const navLinks = useNavLinks();
  return {
    navLinks,
    overview: t("overview"),
    services: [
      {
        title: t("web_developer"),
        icon: "/icons/web.png",
      },
      {
        title: t("react_next_developer"),
        icon: "/icons/mobile.png",
      },
      {
        title: t("backend_developer"),
        icon: "/icons/backend.png",
      },
      {
        title: t("model_designer"),
        icon: "/icons/creator.png",
      },
    ],

    technologies: [
      {
        name: "HTML 5",
        icon: "/icons/html.png",
      },
      {
        name: "CSS 3",
        icon: "/icons/css.png",
      },
      {
        name: "JavaScript",
        icon: "/icons/javascript.png",
      },
      {
        name: "C#",
        icon: "/icons/csharp.png",
      },
      {
        name: "Php",
        icon: "/icons/php.png",
      },
      {
        name: "Golang",
        icon: "/icons/golang.png",
      },
      {
        name: "TypeScript",
        icon: "/icons/typescript.png",
      },
      {
        name: "React",
        icon: "/icons/reactjs.png",
      },
      {
        name: "Redux Toolkit",
        icon: "/icons/redux.png",
      },
      {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.png",
      },
      {
        name: "Laravel",
        icon: "/icons/laravel.png",
      },
      {
        name: "Node JS",
        icon: "/icons/nodejs.png",
      },
      {
        name: "MongoDB",
        icon: "/icons/mongodb.png",
      },
      {
        name: "Three JS",
        icon: "/icons/threejs.png",
      },
      {
        name: "git",
        icon: "/icons/git.png",
      },
      {
        name: "figma",
        icon: "/icons/figma.png",
      },
      {
        name: "docker",
        icon: "/icons/docker.png",
      },
    ],

    experiences: [
      {
        title: t("fullstack_developer"),
        company_name: "Haedap JSC",
        icon: "/icons/mobifone.png",
        iconBg: "#383E56",
        date: "April 2019 - March 2022",
        points: [
          t("develop_web_application"),
          t("collaborating_with_cross_functional_teams"),
          t("implementing_responsive_design"),
          t("participating_in_code_reviews"),
        ],
      },
      {
        title: t("backend_developer"),
        company_name: "FPT Software",
        icon: "/icons/fpt.png",
        iconBg: "#E6DEDD",
        date: "October 2020 - April 2021",
        points: [
          t("developing_and_maintaining_web_applications"),
          t("collaborating_with_cross_functional_teams"),
          t("implementing_apis_service"),
          t("maintain_mobile_apps"),
        ],
      },
      {
        title: t("frontend_developer"),
        company_name: "NaviSoft (Nam Viet Software)",
        icon: "/icons/navisoft.png",
        iconBg: "#383E56",
        date: "April 2021 - October 2022",
        points: [
          t("write_code_and_develop_web_application"),
          t("providing_software_services"),
          t("build_and_maintain_financial_front_office"),
          t("handling_customer_requests"),
        ],
      },
      {
        title: t("fullstack_developer"),
        company_name: "Binh Minh Group",
        icon: "/icons/binhminh.png",
        iconBg: "#E6DEDD",
        date: "December 2023 - May 2025",
        points: [
          t("develop_and_build_web_apps"),
          t("collaborating_with_cross_functional_teams"),
          t("implementing_responsive_design"),
          t("develop_app_components"),
        ],
      },
      {
        title: t("fullstack_developer"),
        company_name: "Del Qui",
        icon: "/icons/delqui.png",
        iconBg: "#383E56",
        date: t("august_2024_present"),
        points: [
          t("develop_and_build_web_apps"),
          t("collaborating_with_cross_functional_teams"),
          t("implementing_responsive_design"),
          t("develop_app_components"),
        ],
      },
    ],

    testimonials: [
      {
        testimonial: t("testimonial_minh"),
        name: "Minh",
        designation: t("designer"),
        company: "NaviSoft",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial: t("testimonial_ha"),
        name: "Ha",
        designation: t("tester"),
        company: "Dft",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial: t("testimonial_phuong"),
        name: "Phuong",
        designation: t("ba"),
        company: "Navisoft",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ],

    projects: [
      {
        name: "Challengr",
        description: t("challengr_description"),
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
        image: "/icons/challengr.png",
        source_code_link: "https://github.com/",
        web_link: "https://next-staging.challengr.be/",
      },
      {
        name: "SSI Supercore",
        description: t("ssi_supercore_description"),
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
        image: "/icons/supercore.png",
        source_code_link: "https://github.com/",
        web_link: "https://iboard.ssi.com.vn/",
      },
      {
        name: "Unity 3d Games",
        description: t("unity_3d_games_description"),
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
        image: "/icons/fpsunity.png",
        source_code_link: "https://github.com/",
      },
      {
        name: "Flashscore - Sport news",
        description: t("flashscore_sport_news_description"),
        tags: [
          {
            name: "bootstrap",
            color: "blue-text-gradient",
          },
          {
            name: "angular 2",
            color: "pink-text-gradient",
          },
          {
            name: "c#",
            color: "blue-text-gradient",
          },
          {
            name: "mongodb",
            color: "pink-text-gradient",
          },
        ],
        image: "/icons/flashscore.png",
        source_code_link: "https://github.com/",
        web_link: "https://www.flashscore.com/",
      },
      {
        name: "Stoned Ape Crew",
        description: t("stoned_ape_crew_description"),
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "solana",
            color: "green-text-gradient",
          },
          {
            name: "typescript",
            color: "blue-text-gradient",
          },
          {
            name: "web3",
            color: "pink-text-gradient",
          },
        ],
        image: "/icons/stonedapecrew.png",
        source_code_link: "https://github.com/",
        web_link: "https://www.stonedapecrew.com/",
      },
      {
        name: "Del Qui - Business Platform",
        description: t("del_qui_description"),
        tags: [
          {
            name: "next.js",
            color: "blue-text-gradient",
          },
          {
            name: "typescript",
            color: "blue-text-gradient",
          },
          {
            name: "tailwindcss",
            color: "pink-text-gradient",
          },
          {
            name: "baas",
            color: "green-text-gradient",
          },
        ],
        image: "/icons/delqui_pj.png",
        source_code_link: "https://github.com/",
        web_link: "https://del-qui.com/",
      },
      {
        name: "Kosenoba - Web Development",
        description: t("kosenoba_description"),
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "javascript",
            color: "blue-text-gradient",
          },
          {
            name: "css",
            color: "pink-text-gradient",
          },
          {
            name: "responsive",
            color: "green-text-gradient",
          },
        ],
        image: "/icons/kosenoba.png",
        source_code_link: "https://github.com/",
        web_link: "https://www.kosenoba.com/web",
      },
    ],
  };
};

export { useConstants };

