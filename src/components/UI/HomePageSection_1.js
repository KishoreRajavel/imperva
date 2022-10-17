import React from "react";

const HomePageSection_1 = ({ list }) => {
  return (
    <div className="homePageSection_1">
      <div className="homePageSection_1-top">
        <div className="homePageSection_1-top-content">
          <h1>{list.heading}</h1>
          <p>{list.subHeading}</p>
          <img src={list.buttonLink} alt="img" />
        </div>
      </div>
      <div className="homePageSection_1-bottom">
        <div className="homePageSection_1-bottom-content">
          <h1>{list.heading2}</h1>
          <p>{list.link}</p>
          <div className="homePageSection_1-bottom-content-dflex">
            {list.content.map((item) => (
              <div className="homePageSection_1-bottom-content-dflex-image">
                <img src={item.imgUrl} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageSection_1;
