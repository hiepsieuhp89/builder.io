import React from "react";
import { motion, Variants } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 about">
      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          className="card-container"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="splash" />
          <motion.div
            className="card"
            variants={{
              offscreen: {
                y: 300,
              },
              onscreen: {
                y: 50,
                rotate: -10,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                },
              },
            }}
          >
            <img src={technology.icon.src} alt="" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
{
  /* <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon.src} />
        </div> */
}

export default SectionWrapper(Tech, "");
