import React from "react";
import Card from "./Card";
import cards from "./Cards";
import Navbar from "./Navbar";

const Portfolio = () => {
  const mappedCards = [...cards].map((card, index) => (
    <Card
      key={index}
      title={card.title}
      description={card.description}
      liveLink={card.liveLink}
      gitHubLink={card.gitHubLink}
      icon={card.icon}
      image={card.image}
    />
  ));
  console.log(mappedCards);
  return <section className="portfolio-section">{[...mappedCards]}</section>;
};

export default Portfolio;
