import React from "react";
import "./projects.css";
import ProjectBox from "./ProjectBox";

const BlueBG= (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1920.001"
    height="562.293"
    viewBox="0 0 1920.001 562.293"
    fill="#00b9ff"
  >
    <path
      id="Sustracción_3"
      data-name="Sustracción 3"
      className="cls-1"
      d="M144.044,562.293h0V0h1920V247.646l-1920,314.647Z"
      transform="translate(-144.044)"
    />
  </svg>
);


const data = [
{
  id: 1,
  title: "Concesionario BBDD",
  description: "App java diseñada una BBDD para un concesionario"
}, {
  id: 2,
  title: "Portfolio",
  description: ""
}]

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="projects__bg">
        {BlueBG}
      </div>
      <article className="projects__main">
        <h1>Proyectos</h1>
        <div className="projects__boxes">
          {
          data.map(({ id, title, description, image, link }) => {
            return (
              <ProjectBox
                key={id}
                title={title}
                description={description}
                image={image}
                link={link}
              />
            );
          })}
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </div>
      </article>
    </section>
  );
};

export default Projects;
