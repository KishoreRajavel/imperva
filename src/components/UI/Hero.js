import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroComponent = ({ title, desc, BG }) => {
  return (
    <div className="hero">
      <img src={BG} alt="bg" />
      <div className="content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <button className="btn-yellow">Get more info</button>
      </div>
    </div>
  );
};

export default HeroComponent;
