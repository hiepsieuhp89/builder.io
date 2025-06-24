import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

// Metadata configuration
export const metadata = {
  title: {
    default: "Portfolio | Maverick Can - Full Stack Developer",
    template: "%s | Maverick Can",
  },
  description:
    "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable web applications and innovative digital solutions.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Maverick Can",
  ],
  authors: [{ name: "Maverick Can" }],
  creator: "Maverick Can",
  publisher: "Maverick Can",
  applicationName: "Maverick Can Portfolio",

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Maverick Can Portfolio",
    title: "Maverick Can - Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable web applications and innovative digital solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maverick Can - Full Stack Developer",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Maverick Can - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    images: ["/twitter-image.jpg"],
    creator: "@maverickcan",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Theme color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },

  // Category
  category: "technology",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1208870163572573"
          crossOrigin="anonymous"
        />

        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Maverick Can",
              jobTitle: "Full Stack Developer",
              description:
                "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies",
              url: "https://your-domain.com",
              sameAs: [
                "https://github.com/maverickcan",
                "https://linkedin.com/in/maverickcan",
                // Add your social media links
              ],
              knowsAbout: [
                "JavaScript",
                "React",
                "Node.js",
                "Full Stack Development",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
