import { Pathnames } from "next-intl/navigation";

export const defaultLocale = "en" as const;
export const locales = ["en", "vi", "kr", "ja", "zh"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    vi: "/pathnames",
    kr: "/pathnames",
    ja: "/pathnames",
    zh: "/pathnames",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
