import React from "react";
import "./header.css";
import Me from "../../assets/imgs/img1.jpg";
import HeaderSocials from "./HeaderSocials";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <HeaderSocials />
        <h3>Hola! soy</h3>
        <h2>Pedro J. Cruces</h2>
        <div className="header__img">
          <HeaderButtons />
          <img src={Me} alt="me" />
        </div>
        <div>
          <h1>Desarrollador Web</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
