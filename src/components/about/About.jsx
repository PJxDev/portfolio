import React, { useEffect, useState, useRef } from "react";
import "./about.css";
import Me2 from "../../assets/imgs/img2.webp";
import ButtonMail from "../buttons/ButtonMail";
import { useTranslation } from "react-i18next";

const About = () => {
  const [txt, i18n] = useTranslation("global");

  return (
    <section id="about">
      <div className="container about__container">
        <h1>{txt("about.title")}</h1>
        <article className="about__main">
          <img src={Me2} loading="lazy" alt="Me computing" />
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

export default function LazyAbout() {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(function() {
    console.log(show, 'show');

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "0px",
      threshold: 0.5
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return (
    <div className={`${show ? "show-about" : ""}`} ref={elementRef}>
      <About />
    </div>
  );
}
