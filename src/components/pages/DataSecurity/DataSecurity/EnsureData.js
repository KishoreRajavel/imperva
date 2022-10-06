import React from "react";
import img1 from "../../../../images/ensure/sensitive.png";
import img2 from "../../../../images/ensure/soc.png";
import img3 from "../../../../images/ensure/developer.png";

const EnsureData = () => {
  return (
    <div className="ensure-data">
      <h1>Ensure data security everywhere</h1>
      <div className="main">
        <div className="item">
          <img src={img1} alt="img" />
          <h2>Mitigate data risk</h2>
          <p>
            Imperva data security reveals critical insight including sensitive
            data location, users, access, and risk.
          </p>
        </div>
        <div className="item">
          <img src={img2} alt="img" />
          <h2>Gain clarity into threats</h2>
          <p>
            Understand context in data activity to rapidly fill in gaps for
            incident investigations.
          </p>
        </div>
        <div className="item">
          <img src={img3} alt="img" />
          <h2>Secure evolving data infrastructure</h2>
          <p>
            Only Imperva expands upon legacy structured database protection to
            secure modern cloud data architectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnsureData;
