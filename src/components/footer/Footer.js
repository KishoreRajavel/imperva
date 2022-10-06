import React from "react";
import Logo from "../../images/logo.svg";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query footer {
      contentfulFooter {
        title
        optiionsList {
          options
          title
        }
      }
    }
  `);

  const list = data.contentfulFooter.optiionsList;

  return (
    <footer>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="list">
        {list.map((item, index) => (
          <div className="column" key={index}>
            <h3>{item.title}</h3>
            <div className="ul">
              {item.options.map((i, index) => (
                <div className="li" key={index}>
                  {i}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="lower-footer">
        <div className="contact">+1 866 926 4678</div>
      </div>
    </footer>
  );
};

export default Footer;
