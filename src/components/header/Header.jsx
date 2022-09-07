import React from "react";
import "./header.css";
import Me from "../../assets/imgs/img1.jpg";
import HeaderSocials from "./HeaderSocials";
import HeaderButtons from "./HeaderButtons";
import BackgroundSpecial from "../services/BackgroundSpecial";

const Header = () => {
  return (
    <header>
      <BackgroundSpecial />
      <div className="container header__container">
        <div className="header__title">
          <h3>Hola! soy</h3>
          <h2>Pedro J. Cruces</h2>
          <h1 id="title__hided">Desarrollador Web</h1>
        </div>
        <div className="header__img">
          <HeaderButtons />
          <img src={Me} alt="me" />
        </div>
        <div>
          <h1>Desarrollador Web</h1>
        </div>
      </div>
      <HeaderSocials />
    </header>
  );
};

export default Header;
