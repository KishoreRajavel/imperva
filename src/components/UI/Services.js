import React from "react";

const Services = ({ title, list }) => {
  return (
    <div className="ensure-data">
      <h1>{title}</h1>
      <div className="main">
        {list.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.node.image.url} alt="img" />
            <h2>{item.node.mainHeading}</h2>
            <p>{item.node.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
