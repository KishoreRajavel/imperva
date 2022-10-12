import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Overview = ({ list, title }) => {
  const [activeItem, setActiveItem] = useState(list[0]);
  const [activeItemState, setActiveItemState] = useState(false);

  const ActiveHandler = (id) => {
    setActiveItem(...list.filter((item) => item.node.id === id));
    setActiveItemState((prev) => !prev);
  };

  return (
    <div className="ds">
      <h1>{title}</h1>
      <div className="link-area">
        {list.map((item, index) => (
          <div className="cont">
            <div className="head" onClick={() => ActiveHandler(item.node.id)}>
              <h2 key={index}>{item?.node?.mainHeading}</h2>
              <div className="arrow">
                <AiOutlineDown />
              </div>
            </div>
            {activeItemState && (
              <div>
                {item.node.id === activeItem.node.id ? (
                  <div className="inner-content">
                    <div className="left">
                      <h3>Overview</h3>
                      <p>{item?.node?.description}</p>
                      <button className="btn-yellow">Learn More</button>
                    </div>
                    <div className="right">
                      <div className="img">
                        <img src={item?.node?.image.url} alt="img" />
                      </div>
                    </div>
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
        <div className="left">
          <h3>Overview</h3>
          <p>{activeItem?.node?.description}</p>
          <button className="btn-yellow">Learn More</button>
        </div>
        <div className="right">
          <div className="img">
            <img src={activeItem?.node?.image.url} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
