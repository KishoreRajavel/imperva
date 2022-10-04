import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Logo from "../../images/logo.svg";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const data = useStaticQuery(graphql`
    query header {
      contentfulHeader {
        title
        button1
        button2
        optionsList {
          mainTitle
          path
          options {
            list {
              path
              title
            }
            sub_option
          }
        }
      }
    }
  `);

  const title = data.contentfulHeader.title;
  const optionsList = data.contentfulHeader.optionsList;

  console.log(optionsList);

  const button1 = data.contentfulHeader.button1;
  const button2 = data.contentfulHeader.button2;
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      {/* <div>{title}</div> */}
      <ul className="list">
        {optionsList.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="link">
              {item.mainTitle}
            </Link>
          </li>
        ))}
      </ul>
      <div className="btn-area">
        <button className="btn-yellow">{button1}</button>
        <button className="btn-black">{button2}</button>
      </div>
    </header>
  );
};

export default Header;
