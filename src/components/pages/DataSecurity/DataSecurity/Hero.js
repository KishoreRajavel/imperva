import React from "react";
import BG from "../../../../images/BG-02.jpg";

const Hero = () => {
  return (
    <div className="data-security-hero">
      <img src={BG} alt="bg" />
      <div className="content">
        <h1>Data Security</h1>
        <p>
          Protecting the sensitive data that fuels your business requires a
          great deal more than encryption and backup. Security teams need to
          know where sensitive data resides, who accesses it, and when abuse
          occurs in order to take immediate action.
        </p>
        <button className="btn-yellow">Get more info</button>
      </div>
    </div>
  );
};

export default Hero;
