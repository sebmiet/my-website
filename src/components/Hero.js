import React from "react";
import Blob from "./Blob";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";

import Laptop from "./Laptop";
import Navbar from "./Navbar";
import Wave from "./Wave";

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <Blob />
      <HeroTitle />
      <Laptop />
      <Wave />
      <motion.button
        // animate={{
        //   // background: ["#0099ff", "#72C6FF", "#0099ff"],
        //   y: [0, 3, 0],
        // }}
        // transition={{
        //   duration: 0.5,
        //   loop: Infinity,
        //   type: "spring",
        //   damping: 10,
        //   stiffness: 100,
        //   // ease: "easeInOut",
        // }}
        className="hero-portfolio-btn"
      >
        portfolio
      </motion.button>
    </div>
  );
};

export default Hero;
