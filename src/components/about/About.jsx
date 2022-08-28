import React from "react";
import "./about.css";
import Me2 from "../../assets/imgs/img2.jpg";

const About = () => {
  return (
    <section>
      <div className="container about__container">
        <h1>Sobre mí</h1>
        <div className="about__main">
          <img src={Me2} alt="me computing" />
          <div className="about__text">
            <p>Nací en Málaga con dos pasiones: la música y la programación.</p>
            <p>
              Actualmente me encuentro inmerso en el CFGS de Desarrollo de
              Aplicaciones Web, mientras que al mismo tiempo, me dedico a
              investigar y a aprender nuevas tecnologías
            </p>
          </div>
          <button></button>
        </div>
      </div>
    </section>
  );
};

export default About;
