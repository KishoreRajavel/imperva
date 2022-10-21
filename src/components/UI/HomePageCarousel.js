import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";


const HomePageCarousel = ({ list }) => {
  const[counter, setCounter]= useState(25);
  // const[translator, setTranslator]= useState(-100)
  const incrementProgress=()=>{
    if(counter==100){
      return setCounter(100)
    }
    setCounter(counter+25)
  }

  const decrementProgress=()=>{
    if(counter==25){
      return setCounter(25)
    }
    setCounter(counter-25)
  }
  return (
    <div className="HomePageCarousel">
      <h1>Recognized Leadership</h1>
      <div className="HomePageCarousel-carousel">
        {list.content.map((item, index) => (
          <div key={index} className="HomePageCarousel-carousel-item">
            <div className="HomePageCarousel-carousel-item-text">
              <img src={item.img_1Url} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <h3 className="HomePageCarousel-carousel-item-text-link">
                {item.link} <BiRightArrowAlt />
              </h3>
            </div>
            <div className="HomePageCarousel-carousel-item-image">
              <img src={item.img_2Url} alt="img" />
            </div>
          </div>
        ))}
      </div>
      <div className="HomePageCarousel-bottom">
        <div className="HomePageCarousel-bottom-buttons">
          <div className="HomePageCarousel-bottom-buttons-left" onClick={decrementProgress}>
          <BsArrowLeftCircle/>
          </div>
          <div className="HomePageCarousel-bottom-buttons-right" onClick={incrementProgress}>
          <BsArrowRightCircle/>
          </div>
        </div>
        <div className="HomePageCarousel-bottom-progress">
          <progress id="progress-bar" max="100" value={counter}></progress>
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;
