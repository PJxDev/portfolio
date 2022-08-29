import React from "react";
import { useState } from "react";
import ButtonEnFlag from "../buttons/ButtonEnFlag";
import "./nav.css";

window.addEventListener("scroll", () => {
  const navBar = document.querySelector('nav')
  const navLinks = document.querySelector('.nav__links')
  const navLogo = document.querySelector('.nav__logo')
  navBar.classList.toggle("coloredNav", window.scrollY>500)
  navLinks.classList.toggle("coloredLinks", window.scrollY>500)
  navLogo.classList.toggle("coloredLogo", window.scrollY>500)

})

const Nav = () => {
  return (
    <nav >
      <div className="container nav__container">
          <div className="nav__logo">
            <span>PJDev</span>
          </div>
          <div className="nav__links">  
            <a className="links" href="#">Inicio</a>
            <a className="links" href="#about">Sobre mí</a>
            <a className="links" href="#contact">Contacto</a>
            <ButtonEnFlag />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
