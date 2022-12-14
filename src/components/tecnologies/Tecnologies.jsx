import React, { useState, useRef, useEffect } from "react";
import "./tecnologies.css";
import { useSVGArray } from "../hooks/useSvgArray";
import { useTranslation } from "react-i18next";

const Tecnologies = () => {
  const [txt, i18n] = useTranslation("global");

  const { svgArray } = useSVGArray();

  return (
    <section id="tecnologies" className="container">
      <article className="tecnologies__container">
        <h1>{txt("tecnologies.title-1")}</h1>
        <div className="tecnologies__tecnologies">
          <div className="tech">
            <i>{svgArray[0]}</i>
            <span>HTML5</span>
          </div>
          <div className="tech">
            <i>{svgArray[1]}</i>
            <span>CSS3</span>
          </div>
          <div className="tech">
            <i>{svgArray[2]}</i>
            <span>JavaScript</span>
          </div>
          <div className="tech">
            <i>{svgArray[3]}</i>
            <span>React</span>
          </div>
        </div>
        <h1>{txt("tecnologies.title-2")}</h1>
        <div className="tecnologies__inproject">
          <div className="tech">
            <i>{svgArray[4]}</i>
            <span>MongoDB</span>
          </div>
          <div className="tech">
            <i>{svgArray[5]}</i>
            <span>Astro</span>
          </div>
          <div className="tech">
            <i>{svgArray[6]}</i>
            <span>TailwindCSS</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default function LazyTecnologies() {
  const [show2, setShow2] = useState(false);
  const elementRef = useRef();

  useEffect(function() {
    console.log(show2, 'show2');
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow2(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "0px",
      threshold:0.5
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  });

  return (
    <div className={`${show2 ? "show-tech" : ""}`} ref={elementRef}>
      <Tecnologies />
    </div>
  );
}
