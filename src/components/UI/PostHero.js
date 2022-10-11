import React from "react";

const PostHero = ({ list }) => {
  return (
    <div className="post-hero">
      {list.map((item, index) => (
        <div className="single-item" key={index}>
          <h3>{item.node.mainHeading}</h3>
          <p>{item.node.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PostHero;
