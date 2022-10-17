import React from "react";
import { AiOutlineArrowRight } from "react-icons/Ai";

const HomePageHeroComp = ({ list }) => {
  return (
    <div className="HomePageHeroComp">
      <h1>Comprehensive Digital Security</h1>
      <div className="HomePageHeroComp-content">
        {list.content.map((item) => (
          <div className="HomePageHeroComp-content-card">
            <img src={item.imgUrl} alt="" />
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
        {/* <div className="HomePageHeroComp-content-card">
          <img
            src="https://www.imperva.com/wp-content/uploads/2022/10/Application-Security_LI.svg"
            alt=""
          />
          <h2>Appls security</h2>
          <ul>
            <li>Automatically protect applications and APIs anywhere</li>
            <li>
              Protect applications from DDoS, bot, and supply chain attacks
            </li>
          </ul>
          <h2>Read more</h2>
        </div>
        <div className="HomePageHeroComp-content-card">
          <img
            src="https://www.imperva.com/wp-content/uploads/2022/10/Application-Security_LI.svg"
            alt=""
          />
          <h2>Appls security</h2>
          <ul>
            <li>Automatically protect applications and APIs anywhere</li>
            <li>
              Protect applications from DDoS, bot, and supply chain attacks
            </li>
          </ul>
          <h2>Read more</h2>
        </div>
        <div className="HomePageHeroComp-content-card">
          <img
            src="https://www.imperva.com/wp-content/uploads/2022/10/Application-Security_LI.svg"
            alt=""
          />
          <h2>Appls security</h2>
          <ul>
            <li>Automatically protect applications and APIs anywhere</li>
            <li>
              Protect applications from DDoS, bot, and supply chain attacks
            </li>
          </ul>
          <h2>Read more</h2>
        </div>
        <div className="HomePageHeroComp-content-card">
          <img
            src="https://www.imperva.com/wp-content/uploads/2022/10/Application-Security_LI.svg"
            alt=""
          />
          <h2>Appls security</h2>
          <ul>
            <li>Automatically protect applications and APIs anywhere</li>
            <li>
              Protect applications from DDoS, bot, and supply chain attacks
            </li>
          </ul>
          <h2>Read more</h2>
        </div> */}
      </div>
    </div>
  );
};

export default HomePageHeroComp;
