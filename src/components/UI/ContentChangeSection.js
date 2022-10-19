import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const ContentChangeSection = ({ list, title }) => {
  const [activeItem, setActiveItem] = useState(list[0]);
  const [activeItemState, setActiveItemState] = useState(false);

  const ActiveHandler = (id) => {
    setActiveItem(...list.filter((item) => item.id === id));
    setActiveItemState((prev) => !prev);
  };

  return (
    <div className="home-overview">
      <h1>{title}</h1>
      <div className="link-area">
        {list.map((item, index) => (
          <div className="cont" key={index}>
            <div
              className="head"
              onClick={() => ActiveHandler(item.id)}
              onKeyDown={() => ActiveHandler(item.id)}
              tabIndex={index}
              role="presentation"
            >
              <h2 key={index}>{item.title}</h2>
              <div className="arrow">
                <AiOutlineDown />
              </div>
            </div>
            {activeItemState && (
              <div>
                {item.id === activeItem.id ? (
                  <div className="inner-content">
                    {item.content.map((item) => (
                      <div key={item.id} className="item">
                        <img src={item.imgUrl} />
                        <div className="content">
                          <h3>{item.mainHeading}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  ``
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="content">
        {activeItem.content.map((item) => (
          <div className="single-item">
            <div>
              <img src={item.imgUrl} />
            </div>
            <h3>{item.mainHeading}</h3>
            <p>{item.description}</p>
            <div className="link">Learn more</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentChangeSection;
