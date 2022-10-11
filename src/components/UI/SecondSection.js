import React from "react";

const SecondSection = () => {
  return (
    <div className="main-section">
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

export default SecondSection;
