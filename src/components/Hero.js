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
     
          whileHover={{
            cursor: "pointer",
            backgroundColor: "#f9b934",
            y: 5,
            
          }}
          transition={{
            type: "spring",
            duration: .7,
            ease: "easeIn"
            
          }}
        className="hero-portfolio-btn"
      >
        portfolio
      </motion.button>
    </div>
  );
};

export default Hero;
