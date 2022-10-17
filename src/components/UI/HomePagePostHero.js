import React from "react";

const HomePagePostHero = ({ list }) => {
  return (
    <div className="homePage-postHero">
      <div className="homePage-postHero-content">
        {list.map((item) => (
          <div className="homePage-postHero-content-item">
            <div className="homePage-postHero-content-item-text">
              <h2>{item.mainHeading}</h2>
              <p>{item.description}</p>
            </div>
            <div className="homePage-postHero-content-item-image">
              <img src={item.icon.url} alt="img" />
            </div>
          </div>
        ))}
        {/* <div className="homePage-postHero-content-item">
          <div className="homePage-postHero-content-item-text">
            <h2>DDoS Threat Landscape Report Q2 2022</h2>
            <p>Read more</p>
          </div>
          <div className="homePage-postHero-content-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/DDoS-landscape-report-2022.png.webp"
              alt="img"
            />
          </div>
        </div>
        <div className="homePage-postHero-content-item">
          <div className="homePage-postHero-content-item-text">
            <h2>DDoS Threat Landscape Report Q2 2022</h2>
            <p>Read more</p>
          </div>
          <div className="homePage-postHero-content-item-image">
            <img
              src="https://www.imperva.com/wp-content/uploads/2022/09/DDoS-landscape-report-2022.png.webp"
              alt="img"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePagePostHero;
