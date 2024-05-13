import { useTranslations } from "next-intl";

export const useTranslate = (section, name) => {
  const t = useTranslations(section);
  return t(name);
};
