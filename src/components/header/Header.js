import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Logo from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

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

  const [menuBarState, setMenuBarState] = useState(false);

  const optionsList = data.contentfulHeader.optionsList;

  const menuClass = menuBarState ? `true` : "false";

  const button1 = data.contentfulHeader.button1;
  const button2 = data.contentfulHeader.button2;

  const menuBarHandler = () => {
    setMenuBarState((prev) => !prev);
  };

  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <div className="menu-bar-icon" onClick={menuBarHandler}>
        <GiHamburgerMenu />
      </div>
      <ul className={menuClass}>
        {optionsList.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="link">
              <div className="row">
                <div>{item.mainTitle}</div>
                <div className="arrow">
                  <BsArrowRight />
                </div>
              </div>
            </Link>
          </li>
        ))}
        <div className="btn-area hided-list">
          <button className="btn-yellow">{button1}</button>
          <button className="btn-black">{button2}</button>
        </div>
      </ul>
      <div className="btn-area">
        <button className="btn-yellow">{button1}</button>
        <button className="btn-black">{button2}</button>
      </div>
    </header>
  );
};

export default Header;
