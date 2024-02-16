import React, { useState } from "react";
import { motion } from "framer-motion";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

const linkOptions = {
  initial: {
    scale: 0.1,
    opacity: 0,
  },
  whileInView: {
    scale: 1,
    opacity: 1,
  },
  Transition: {
    delay: 1,
  },
};

const Intro = () => {
  return (
    <div>
      <motion.ul {...linkOptions}>
        <div className="text-white h-screen mt-[180px] flex flex-col">
          <span className="font-section sm:leading-[80px] md:leading-[140px] leading-[80px] sm:text-[30px] md:text-[40px] text-[30px]">
            Hi,
          </span>
          <span className="font-name sm:text-[140px] md:text-[200px] text-[80px]">
            <h1 className="md:leading-[150px] leading-[60px] sm:leading-[110px]">
              KAJU
            </h1>
            <h1 className="md:leading-[150px] leading-[60px] sm:leading-[110px]">
              SAIKIA
            </h1>
          </span>
        </div>
      </motion.ul>

      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Intro;
