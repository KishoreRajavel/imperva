import React from "react";
import { AiOutlineArrowRight } from "react-icons/Ai";

const HomePageHeroComp = ({ list }) => {
  return (
    <div className="HomePageHeroComp">
      <h1>Comprehensive Digital Security</h1>
      <div className="HomePageHeroComp-content">
        {list.content.map((item, index) => (
          <div key={index} className="HomePageHeroComp-content-card">
            <img src={item.imgUrl} alt="img" />
            <h2>{item.title}</h2>
            <ul>
              <li>{item.desc_1}</li>
              <li>{item.desc_2}</li>
            </ul>
            <h2>
              {item.link} <AiOutlineArrowRight />
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageHeroComp;
