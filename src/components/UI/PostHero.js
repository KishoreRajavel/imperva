import React from "react";

const PostHero = ({ list }) => {
  return (
    <div className="post-hero">
      {list.map((item, index) => (
        <div className="single-item" key={index}>
          <div className="post-hero-image">
            <img src={item.node.icon.url} />
          </div>
          <div className="post-hero-content">
            <h3>{item.node.mainHeading}</h3>
            <p>{item.node.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostHero;
