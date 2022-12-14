import React, { useState } from "react";
import ButtonFlag from "../buttons/ButtonFlag";
import ButtonDark from "../buttons/ButtonDark";
import "./nav.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

window.addEventListener("scroll", () => {
  const $ = (el) => document.querySelector(el);

  $('nav').classList.toggle("coloredNav", window.scrollY > 800);
  $('.nav__links').classList.toggle("coloredLinks", window.scrollY > 800);
  $('.nav__logo').classList.toggle("coloredLogo", window.scrollY > 800);
});

const Nav = () => {
  const [txt, i18n] = useTranslation("global");
  const [isMenuActive, setMenutoActive] = useState(false);

  const checkMenuActive = () => {
    isMenuActive ? setMenutoActive(false) : setMenutoActive(true);
  };

  const closeMenu = () => setMenutoActive(false);

  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__logo">
          <span>PJDev</span>
        </div>

        <div className="nav__menu">
          <div
            id="menu-bar"
            onClick={checkMenuActive}
            className={`${isMenuActive ? "change" : ""}`}
          >
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>

          <div
            className={`nav__links ${isMenuActive ? "change-links" : ""}`}
            style={{ display: `${isMenuActive ? "flex" : ""}` }}
          >
            <a onClick={() => closeMenu()} className="links" href="#">
              {txt("nav.home")}
            </a>
            <a onClick={() => closeMenu()} className="links" href="#about">
              {txt("nav.about")}
            </a>
            <a onClick={() => closeMenu()} className="links" href="#contact">
              {txt("nav.contact")}
            </a>
            <ButtonFlag />
            <ButtonDark />
          </div>
          <div
            className={`menu-bg ${isMenuActive ? "change-bg" : ""}`}
            id="menu-bg"
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
