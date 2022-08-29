import React from "react";
import "./projects.css";
import BlueBG from "../../assets/svgs/blue.svg";
import ProjectBox from "./ProjectBox";


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
        <img src={BlueBG} alt="fondo azul" />
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
