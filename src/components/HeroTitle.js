import React from "react";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroTitle = () => {
  const socialHover = {
    cursor: "pointer",
    color: "#0099ff",
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  };

  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        x: { type: "spring", stiffness: 300, duration: 2 },
        duration: 0.5,
      }}
      className="hero-title-container"
    >
      <div className="hero-text-wrap">
        <h2 className="hero-text-sebastian">Sebastian</h2>
        <h1 className="hero-text-mietka">Miętka</h1>
        <h6 className="hero-text-junior">Junior Web Developer</h6>
      </div>
      <div className="hero-social-wrap">
        <motion.div className="hero-social-icon" whileHover={socialHover}>
          <FaGithubSquare />
        </motion.div>
        <motion.div className="hero-social-icon" whileHover={socialHover}>
          <FaFacebookSquare />
        </motion.div>
        <motion.div className="hero-social-icon" whileHover={socialHover}>
          <FaLinkedin />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroTitle;
