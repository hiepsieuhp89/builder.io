import { getIntl } from "next-intl";

export const useTranslate = (id) => {
  const intl = getIntl();
  return intl.formatMessage({ id });
};
