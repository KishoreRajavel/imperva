import React from "react";
import { HiArrowRight } from "react-icons/hi";

const HomePagePostHero = ({ list }) => {
  return (
    <div className="homePage-postHero">
      <div className="homePage-postHero-content">
        {list.map((item) => (
          <div className="homePage-postHero-content-item">
            <div className="homePage-postHero-content-item-text">
              <h2>{item.mainHeading}</h2>
              <div>
                {item.description} <HiArrowRight />
              </div>
            </div>
            <div className="homePage-postHero-content-item-image">
              <img src={item.icon.url} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePagePostHero;
