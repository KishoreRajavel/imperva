import React, { useState } from "react";

const Overview = ({ img, img2 }) => {
  const [itemState, setItemState] = useState(false);
  return (
    <div>
      <div className="ds">
        <h1>Data Security</h1>
        <div className="link-area">
          <h2 onClick={() => setItemState(false)}>Data Security Fabric</h2>
          <h2 onClick={() => setItemState(true)}>Cloud Data Security</h2>
        </div>
        {!itemState && (
          <div className="content">
            <div className="left">
              <h3>Overview</h3>
              <p>
                Imperva Data Security Fabric, purpose-built for hybrid
                multicloud environments, protects all your data assets – giving
                you the risk visibility to prevent data breaches and avoid
                compliance incidents.
              </p>
              <button className="btn-yellow">Learn More</button>
            </div>
            <div className="right">
              <img src={img} alt="img" />
            </div>
          </div>
        )}
        {itemState && (
          <div className="content">
            <div className="left">
              <h3>Overview</h3>
              <p>
                Imperva Cloud Data Security delivers data discovery,
                classification, and protection for AWS and Azure managed
                database services beyond what is available from cloud service
                providers.
              </p>
              <button className="btn-yellow">Learn More</button>
            </div>
            <div className="right">
              {" "}
              <img src={img2} alt="img" />
            </div>
          </div>
        )}
      </div>
      <div className="quotes">
        <blockquote class="holder" style={{ color: "#000000" }}>
          <p class="quote">
            <span class="start-quote"></span>Imperva Data Security saved the
            bank over $90 million by streamlining hardware and software
            spending, eliminating database server load, and reducing manual
            processes that relied upon built-in database auditing.
            <span class="end-quote"></span>
          </p>{" "}
        </blockquote>
        <div class="author-block">
          <cite>
            <strong class="name">Global Leading Bank</strong>{" "}
          </cite>
        </div>
        <button className="btn-yellow">Full customer story</button>{" "}
      </div>
    </div>
  );
};

export default Overview;
