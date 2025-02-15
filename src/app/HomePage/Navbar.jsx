"use client";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useConstants } from "../../constants";
import { styles } from "../../styles";
import LangSwitcher from "./components/LangSwitcher";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const [counter, setCounter] = useState(0);
  const constant = useConstants();
  const [showCVPopup, setShowCVPopup] = useState(false);
  //mobile
  // const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a className="flex">
            {/* <img src={logo.src} alt="logo" className="w-9 h-9 object-contain" /> */}
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Maverick Can &nbsp;
              <span className="sm:block hidden"> | Professional JavaScript Developer</span>
            </p>
          </a>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {constant.navLinks?.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a 
                  href={nav.id === "cv" 
                    ? "https://www.topcv.vn/xem-cv/AlEDAQdUUQBQV1ZRUlFdVVMDAgYMAFdVAVZVXA6c55" 
                    : `#${nav.id}`}
                  target={nav.id === "cv" ? "_blank" : "_self"}
                  rel={nav.id === "cv" ? "noopener noreferrer" : ""}
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <LangSwitcher />
          </ul>
        </div>
        <motion.div className="progress-bar" style={{ scaleX }} />
      </nav>
      {/* <motion.nav
        className="mobile-nav"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav> */}
      <AnimatePresence>
        {showCVPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowCVPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="bg-white rounded-lg p-6 w-full max-w-md text-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCVPopup(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">View My CV</h2>
              <p className="mb-6">Choose how you&apos;d like to view my CV:</p>
              <div className="space-y-4">
                <a
                  href="https://www.topcv.vn/xem-cv/AlEDAQdUUQBQV1ZRUlFdVVMDAgYMAFdVAVZVXA6c55"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                >
                  Open in New Tab
                </a>
                {/* Add download link if you have a PDF version */}
                <a
                  href="/path-to-your-cv.pdf"
                  download
                  className="block w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};
const MenuItem = ({ i }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
const Navigation = () => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return (
    <motion.ul variants={variants}>
      {[0, 1, 2, 3, 4].map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};
const MenuToggle = ({ toggle }) => {
  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  return (
    <button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default Navbar;
