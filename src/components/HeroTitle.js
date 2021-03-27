import React from "react";
import { FaGithubSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const HeroTitle = () => {
  return (
    <div className="hero-title-container">
      <div className="hero-text-wrap">
        <h2 className="hero-text-sebastian">Sebastian</h2>
        <h1 className="hero-text-mietka">Miętka</h1>
        <h6 className="hero-text-junior">Junior Web Developer</h6>
      </div>
      <div className="hero-social-wrap">
        <FaGithubSquare />
        <FaFacebookSquare />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default HeroTitle;
