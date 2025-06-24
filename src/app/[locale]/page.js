import "../../index.css";
import HomeClient from "./HomeClient";

// Page-specific metadata
export const metadata = {
  title: "Home - Full Stack Developer Portfolio",
  description: "Welcome to Maverick Can's portfolio. Explore my projects, skills, and experience in full-stack web development using React, Node.js, and modern technologies.",
  keywords: [
    "portfolio homepage",
    "web developer portfolio", 
    "React projects",
    "full stack projects",
    "JavaScript portfolio",
    "developer showcase"
  ],
  openGraph: {
    title: "Maverick Can - Full Stack Developer Portfolio",
    description: "Welcome to my portfolio showcasing full-stack web development projects and expertise in modern technologies.",
    images: [
      {
        url: "/og-home-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maverick Can Portfolio Homepage",
      },
    ],
  },
  twitter: {
    title: "Maverick Can - Full Stack Developer Portfolio", 
    description: "Welcome to my portfolio showcasing full-stack web development projects and expertise in modern technologies.",
  },
  alternates: {
    canonical: "/",
    languages: {
      'en': '/en',
      'vi': '/vi',
      'ja': '/ja',
      'ko': '/kr',
      'zh': '/zh'
    }
  }
};

export default function Home() {
  return <HomeClient />;
}
