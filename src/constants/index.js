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
    {
      id: "listings",
      title: t("Real Estate Listings"),
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
        icon: web,
      },
      {
        title: t("react_next_developer"),
        icon: mobile,
      },
      {
        title: t("backend_developer"),
        icon: backend,
      },
      {
        title: t("model_designer"),
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
        name: "React",
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
        title: t("web_developer"),
        company_name: "Haedap JSC/Mobifone",
        icon: mobifone,
        iconBg: "#383E56",
        date: t("april_2021_april_2022"),
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
        icon: fpt,
        iconBg: "#E6DEDD",
        date: t("may_2021_december_2022"),
        points: [
          t("developing_and_maintaining_web_applications"),
          t("collaborating_with_cross_functional_teams"),
          t("implementing_apis_service"),
          t("maintain_mobile_apps"),
        ],
      },
      {
        title: t("fullstack_developer"),
        company_name: "NaviSoft",
        icon: navisoft,
        iconBg: "#383E56",
        date: t("may_2022_nov_2023"),
        points: [
          t("write_code_and_develop_web_application"),
          t("providing_software_services"),
          t("build_and_maintain_financial_front_office"),
          t("handling_customer_requests"),
        ],
      },
      {
        title: t("frontend_developer"),
        company_name: "VCCorp",
        icon: vccorp,
        iconBg: "#E6DEDD",
        date: t("nov_2023_mar_2024"),
        points: [
          t("develop_ims_site_editor"),
          t("collaborating_with_cross_functional_teams"),
          t("implementing_responsive_design"),
          t("build_and_develop_site_editor"),
        ],
      },
      {
        title: t("backend_developer"),
        company_name: "Okvip",
        icon: okvip,
        iconBg: "#E6DEDD",
        date: t("nov_2023_mar_2024"),
        points: [
          t("develop_and_build_authentications"),
          t("collaborating_with_cross_functional_teams"),
          t("implementing_responsive_design"),
          t("develop_cms_api"),
        ],
      },
      {
        title: t("fullstack_developer"),
        company_name: "Vitex",
        icon: vitex,
        iconBg: "#E6DEDD",
        date: t("mar_2024_now"),
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
        testimonial: t("mvp_of_teamwork"),
        name: "Minh",
        designation: t("designer"),
        company: "NaviSoft",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial: t("lone_wolf_of_productivity"),
        name: "Ha",
        designation: t("tester"),
        company: "Dft",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial: t("after_hours_hero"),
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
        image: challengr,
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
        image: supercore,
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
        image: fpsunity,
        source_code_link: "https://github.com/",
      },
      {
        name: "OkChoi - Sport Live",
        description: t("okchoi_sport_live_description"),
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
