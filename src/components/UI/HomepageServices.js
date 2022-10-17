import React from "react";
import { AiOutlineArrowRight } from "react-icons/Ai";

const HomepageServices = ({ list }) => {
  console.log(list);
  return (
    <div className="homePage-services">
      <h1>Enterprises move to Imperva for world class security</h1>
      <div className="homePage-services-content">
        {list.map((item) => (
          <div className="homePage-services-content-card">
            <h2>{item.heading}</h2>
            <p>{item.subheading}</p>
            <div className="homePage-services-content-card-links">
              <p className="homePage-services-content-card-links-link_1">
                <a>
                  {item.link_1} <AiOutlineArrowRight />
                </a>
              </p>
              <p className="homePage-services-content-card-links-link_2">
                <a>
                  {item.link_1} <AiOutlineArrowRight />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageServices;
