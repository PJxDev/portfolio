import React from "react";
import "./header.css";
import Me from "../../assets/imgs/img1.webp";
import HeaderSocials from "./HeaderSocials";
import HeaderButtons from "./HeaderButtons";
import BackgroundSpecial from "../services/BackgroundSpecial";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [txt, i18n] = useTranslation("global");

  return (
    <header id="header">
      <section >
        <h3>{txt("header.title-1")}</h3>
        <HeaderSocials />
      </section>
      <section className="container header__container">
        <header className="header__title">
          <h2>Pedro J. Cruces</h2>
          <h1 id="title__hided">{txt("header.title-3")}</h1>
        </header>
        <picture className="header__img">
          <HeaderButtons />
          <img src={Me} loading="lazy" alt="me" />
        </picture>
        <div>
          <h1>{txt("header.title-3")}</h1>
        </div>
      </section>
      <BackgroundSpecial />
      
    </header>
  );
};

export default Header;
