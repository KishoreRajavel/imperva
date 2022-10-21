import React from "react";
import { BsArrowRight } from "react-icons/bs";
import img from "../../images/imperva-security.png.webp";

const PreFooter = () => {
  return (
    <div className="final">
      <div className="left">
        <h1>See how we can help you secure your web applications and data</h1>
        <div className="btn-area">
          <button className="btn-yellow"> Free Trial&nbsp;<BsArrowRight/></button>
          <button className="btn-black">Schedule Demo</button>
        </div>
      </div>
      <div className="right">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default PreFooter;
