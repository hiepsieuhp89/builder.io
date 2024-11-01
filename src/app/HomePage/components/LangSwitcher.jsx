"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useState, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

const LangSwitcher = (_props) => {
  const t = useTranslations("IndexPage");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const handleLangSwitcheruage = () => {
    const nextLocale = locale == "en" ? "kr" : "en";

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };
  return (
    <div>
      <div
        className="switch"
        data-isOn={locale == "en"}
        onClick={handleLangSwitcheruage}
      >
        <motion.div className="handle" layout transition={spring}>
          {locale == "kr" ? (
            <img src="./south-korea.256x256.png" />
          ) : (
            <img src="./united-states.256x256.png" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LangSwitcher;
