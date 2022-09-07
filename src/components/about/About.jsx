import React from "react";
import "./about.css";
import Me2 from "../../assets/imgs/img2.jpg";
import ButtonMail from "../buttons/ButtonMail";
import { useTranslation } from "react-i18next";

const About = () => {
  const [txt, i18n] = useTranslation("global");

  return (
    <section id="about">
      <div className="container about__container">
        <h1>{txt("about.title")}</h1>
        <article className="about__main">
          <img src={Me2} alt="Me computing" />
          <div className="about__text">
            <p>{txt("about.bio-1")}</p>
            <p>{txt("about.bio-2")}</p>
            <div className="about__button">
              <ButtonMail />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
