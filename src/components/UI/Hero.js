import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroComponent = ({ title, desc, BG, image }) => {
  return (
    <div className="hero">
      <img src={BG} alt="bg" />
      <div className="content">
        <div className="content-text">
          <h1>{title}</h1>
          <p>{desc}</p>
          <button className="btn-yellow">Register Now</button>
        </div>
        {image && (
          <div className="content-image">
            <img src={image} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroComponent;
