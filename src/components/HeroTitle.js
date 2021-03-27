import React from "react";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import {motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <div className="hero-title-container">
      <div className="hero-text-wrap">
        <h2 className="hero-text-sebastian">Sebastian</h2>
        <h1 className="hero-text-mietka">Miętka</h1>
        <h6 className="hero-text-junior">Junior Web Developer</h6>
      </div>
      <div className="hero-social-wrap">
        <motion.div className="hero-social-icon"
          whileHover={{
            cursor: "pointer",
            color: "#0099ff",
          }}
          transition={{
            duration: .7,
            ease: "easeIn"
          }}
        ><FaGithubSquare /></motion.div>       
        <motion.div className="hero-social-icon"
          whileHover={{
            cursor: "pointer",
            color: "#0099ff",
          }}
          transition={{
            duration: .7,
            ease: "easeIn"
          }}><FaFacebookSquare /></motion.div>
        <motion.div className="hero-social-icon"
          whileHover={{
            cursor: "pointer",
            color: "#0099ff",
          }}
          transition={{
            duration: .7,
            ease: "easeIn"
          }}><FaLinkedin /></motion.div> 
        </div>
    </div>
  );
};

export default HeroTitle;
