import React from "react";
import Blob from "./Blob";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";

import Laptop from "./Laptop";
import Navbar from "./Navbar";
import Wave from "./Wave";

const Hero = () => {
  const btnAnimation = {
    cursor: "pointer",
    backgroundColor: "#f9b934",
    y: -5,
    transition: {
      y: {
        type: "spring",
        stiffness: 400,
      },
      duration: 1,
    },
  };

  return (
    <section className="hero-section">
      <Navbar />
      <Blob />
      <HeroTitle />
      <Laptop />
      <Wave />
      <motion.button whileHover={btnAnimation} className="hero-portfolio-btn">
        portfolio
      </motion.button>
    </section>
  );
};

export default Hero;
