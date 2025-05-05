"use client";

import { usePathname, useRouter } from "@/navigation";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition, useState } from "react";

const LangSwitcher = (_props) => {
  const t = useTranslations("IndexPage");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const flagUrls = {
    en: "https://flagcdn.com/w80/us.png",
    kr: "https://flagcdn.com/w80/kr.png",
    vi: "https://flagcdn.com/w80/vn.png",
    ja: "https://flagcdn.com/w80/jp.png",
    zh: "https://flagcdn.com/w80/cn.png"
  };

  const languageNames = {
    en: "English",
    kr: "한국어",
    vi: "Tiếng Việt",
    ja: "日本語",
    zh: "中文"
  };

  const handleChangeLanguage = (newLocale) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: newLocale }
      );
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center h-8 px-3 py-1 rounded bg-primary text-lang-switcher-text border border-lang-switcher-border hover:bg-tertiary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={flagUrls[locale]} 
          alt={languageNames[locale]}
          className="w-5 h-3 object-cover mr-2"
        />
        <span className="text-sm font-medium">{languageNames[locale]}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 z-10 w-40 bg-dropdown-bg border border-lang-switcher-border rounded shadow-dropdown py-1">
          {Object.keys(flagUrls).map((lang) => (
            <button
              key={lang}
              className={`w-full text-left px-3 py-2 flex items-center hover:bg-dropdown-hover transition-colors ${
                locale === lang ? "bg-lang-switcher-active text-lang-switcher-text" : "text-lang-switcher-text-dim"
              }`}
              onClick={() => handleChangeLanguage(lang)}
            >
              <img 
                src={flagUrls[lang]} 
                alt={languageNames[lang]} 
                className="w-5 h-3 object-cover mr-2"
              />
              <span className="text-sm">{languageNames[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
