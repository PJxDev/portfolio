import React from "react";
import "./tecnologies.css";
import { useSVGArray } from "../hooks/useSvgArray";

const Tecnologies = () => {
  const {svgArray} = useSVGArray()
  
    return (
      <section id="tecnologies" className="container">
        <article className="tecnologies__container">
          <h1>Tecnologías</h1>
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
          <h1>Aprendiendo</h1>
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

export default Tecnologies;
