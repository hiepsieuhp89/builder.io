import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { useConstants } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { useTranslate } from "../../hooks/useTranslate";
import { useTranslations } from "next-intl";

const RealEstateListings = () => {
  const t = useTranslations("Title");
  const constants = useConstants();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("Real Estate Listings")}</p>
        <a target="_blank" className="underline" href="https://housing.xuntun.site/">
          <h2 className={styles.sectionHeadText}>
            {t("Real Estate Listings Description")}.
          </h2>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(RealEstateListings, "listings");
