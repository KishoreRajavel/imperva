import React from "react";

const Quotes = ({ desc, bg, name }) => {
  return (
    <div className="quotes">
      <blockquote className="holder" style={{ color: "#000000" }}>
        <p className="quote">
          <span className="start-quote"></span>
          {desc}
          <span className="end-quote"></span>
        </p>
      </blockquote>
      <div className="author-block">
        <cite>
          <strong className="name">{name}</strong>{" "}
        </cite>
      </div>
      <button className="btn-yellow">Full customer story</button>{" "}
    </div>
  );
};

export default Quotes;
