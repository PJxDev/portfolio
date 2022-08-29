import React from "react";
import "./projects.css";
import BlueBG from "../../assets/svgs/blue.svg";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <div className="projects__bg">
        <img src={BlueBG} alt="fondo azul" />
      </div>
      <article className="projects__main">
        <h1>Proyectos</h1>
        <div className="projects__boxes">
          <ProjectBox/>
          <ProjectBox/>
          <ProjectBox/>
          <ProjectBox/>
          <ProjectBox/>
        </div>
      </article>
    </section>
  );
};

export default Projects;
