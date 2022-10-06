import React from "react";
import img1 from "../../../../images/main-1.jpg";

const MainSection = () => {
  return (
    <div className="main-section">
      <section className="section-1">
        <div className="content">
          <h1>Protect data in all phases of cloud adoption</h1>
          <p>
            Data is central to today’s digital economy and securing data during
            cloud adoption is critical to reduce risk.
          </p>
          <ul>
            <li>
              <h2>Security and innovation alignment</h2>
              <p>
                Data architectures evolve quickly and gain complexity requiring
                a shift in focus beyond users and systems to be effective
              </p>
            </li>
            <li>
              <h2>Visibility into data activity</h2>
              <p>Enterprise-wide visibility accelerates safe data migration</p>
            </li>
            <li>
              <h2>Deeper security and threat context</h2>
              <p>
                Native audit information rapidly becomes noise without insight
                from data security and event aggregation
              </p>
            </li>
            <li>
              <h2>Unify sensitive data protection</h2>
              <p>
                Protecting data requires discovery, classification, activity
                monitoring, and policy enforcement
              </p>
            </li>
          </ul>
        </div>
        <div className="img">
          <img src={img1} />
        </div>
      </section>
      <div className="section-2bg">
        <section className="section-2">
          <div className="content">
            <div className="left">
              <h1>Broad data security and risk protection</h1>
              <p>
                Imperva provides centralized data security across legacy and
                modern cloud environments by automating detection, protection,
                and risk response for compliance and security operations.
              </p>
            </div>
            <div className="right">
              <ul>
                <li>
                  <h2>Secure multi-cloud data architectures</h2>
                  <p>
                    Enterprise-wide protection for 65+ data repositories, from
                    legacy to cloud and hybrid
                  </p>
                </li>

                <li>
                  <h2>Unify data security and compliance</h2>
                  <p>
                    Simplified with a unified platform for discovery,
                    classification, and threat analytics{" "}
                  </p>
                </li>
                <li>
                  <h2>Extend data security to the SOC</h2>
                  <p>
                    Over 260 built-in integrations on an open platform to speed
                    investigation and response{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
