import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../../styles";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { useConstants } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import { useTranslations } from "next-intl";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        onClick={() => {
          if (web_link) window.open(web_link, "_blank");
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          onClick={() => {
            if (web_link) window.open(web_link, "_blank");
          }}
          className="relative w-full h-[230px] cursor-pointer"
        >
          <Image
            src={image.src}
            alt="project_image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src={github.src}
                alt="source code"
                width={20}
                height={20}
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const t = useTranslations("Index");

  return (
    <>
    {console.log(t)}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('my_work')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('projects')}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t('projects_description')}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {useConstants().projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
