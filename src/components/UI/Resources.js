import React from "react";
import { BsThreeDots } from "react-icons/bs";

const Resources = ({ list }) => {
  return (
    <div className="resources">
      <h1>Related Resources</h1>
      <div className="row">
        {list.map((item, index) => (
          <div className="single-item" key={index}>
            <div className="img">
              <img src={item.node.image1.url} />
            </div>
            <div className="content">
              <div className="btn-area">
                <button className="btn">Report</button>
                <div className="dots">
                  <BsThreeDots />
                </div>
              </div>
              <p>{item.node.mainHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
