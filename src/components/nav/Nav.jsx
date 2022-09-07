import React, { useState, useEffect } from "react";
import ButtonFlag from "../buttons/ButtonFlag";
import "./nav.css";
import {useTranslation} from "react-i18next"

window.addEventListener("scroll", () => {
  const navBar = document.querySelector("nav");
  const navLinks = document.querySelector(".nav__links");
  const navLogo = document.querySelector(".nav__logo");
  
  navBar.classList.toggle("coloredNav", window.scrollY > 800);
  navLinks.classList.toggle("coloredLinks", window.scrollY > 800);
  navLogo.classList.toggle("coloredLogo", window.scrollY > 800);
});

const Nav = () => {
  const [txt, i18n] = useTranslation("global")
  const [isMenuActive, setMenutoActive] = useState(false);
  
  const checkMenuActive = () =>
  isMenuActive ? setMenutoActive(false) : setMenutoActive(true);
  
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
