import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const HomePageCarousel = ({ list }) => {
  return (
    <div className="HomePageCarousel">
      <h1>Recognized Leadership</h1>
      <div className="HomePageCarousel-carousel">
        {list.content.map((item) => (
          <div className="HomePageCarousel-carousel-item">
            <div className="HomePageCarousel-carousel-item-text">
              <img src={item.img_1Url} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <h3>
                {item.link} <BiRightArrowAlt />
              </h3>
            </div>
            <div className="HomePageCarousel-carousel-item-image">
              <img src={item.img_2Url} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageCarousel;
