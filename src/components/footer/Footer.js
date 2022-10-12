import React from "react";
import Logo from "../../images/Digimeta_logo.png";
import { graphql, useStaticQuery } from "gatsby";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaVimeoV,
} from "react-icons/fa";
import { SiGlassdoor, SiSoundcloud } from "react-icons/si";

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

  const Icons = [
    <FaLinkedinIn />,
    <FaFacebookF />,
    <FaTwitter />,
    <FaYoutube />,
    <SiGlassdoor />,
    <SiSoundcloud />,
    <FaVimeoV />,
  ];

  const list = data.contentfulFooter.optiionsList;

  return (
    <footer>
      <div className="logo">
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
        <div className="social">
          {Icons.map((item, index) => (
            <div className="icon" key={index}>
              {item}
            </div>
          ))}
        </div>
        <div>English</div>
      </div>
    </footer>
  );
};

export default Footer;
