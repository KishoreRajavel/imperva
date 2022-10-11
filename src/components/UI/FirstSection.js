import React from "react";

const FirstSection = ({ heading, description, list, img }) => {
  return (
    <div className="main-section">
      <section className="section-1">
        <div className="content">
          <h1>{heading}</h1>
          <p>{description}</p>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <h2>{item.heading}</h2>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="img">
          <img src={img} />
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
