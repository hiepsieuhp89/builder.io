import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ToggleLang = (_props) => {
  const router = useRouter();
  const { t, i18n } = useTranslation("common");

  const changeTo = router.locale === "en" ? "de" : "en";

  return (
    <div>
      <Link href="/" locale={changeTo}>
        <button>{t("change-locale", { changeTo })}</button>
      </Link>
      <Link href="/second-page">
        <button type="button">{t("to-second-page")}</button>
      </Link>
    </div>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common", "footer"])),
  },
});

export default ToggleLang;
