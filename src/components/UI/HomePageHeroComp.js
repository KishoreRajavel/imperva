import React from "react";
import { AiOutlineArrowRight } from "react-icons/Ai";
import { BiGame } from "react-icons/bi";
import img from "../../images/homepage-comp-bg.jpg";

const HomePageHeroComp = ({ list }) => {
  return (
    <div
      className="HomePageHeroComp"
      style={{ backgroundImage: `url(${img})` }}
    >
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
            <h3>
              {item.link} &nbsp;<AiOutlineArrowRight />
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageHeroComp;
