import React from "react";

const SecondSection = ({ list, BG, title, desc }) => {
  return (
    <div className="main-section">
      <div className="section-2bg">
        <section className="section-2">
          <div className="content">
            <div className="left">
              <h1>{title}</h1>
              <p>{desc}</p>
            </div>
            <div className="right">
              <ul>
                {list.map((item, index) => (
                  <li key={index}>
                    <h2>{item.heading}</h2>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecondSection;
