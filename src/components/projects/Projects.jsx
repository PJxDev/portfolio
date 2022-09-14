import React from "react";
import "./projects.css";
import ProjectBox from "./ProjectBox";
import BlueBG from "../../assets/svgs/blue.svg"
import {useTranslation} from "react-i18next"
  
const data = []


const Projects = () => {
  const [txt, i18n] = useTranslation("global")
  
  for (let i=1;i<=2;i++){
    let el = {
      id: i,
      img: i-1,
      title: `${txt(`projects.box-${i}-title`)}`,
      description: `${txt(`projects.box-${i}-desc`)}`,
      link: `${txt(`projects.box-${i}-link`)}`,
      image: `${txt(`projects.box-${i}-image`)}`,
    }
    data[i] = el
  }

  return (
    <section id="projects" className="container">
      <div className="projects__bg">
        <img src={BlueBG} alt="fondo" />
      </div>
      <article className="projects__main">
        <h1>{txt("projects.title")}</h1>
        <div className="projects__boxes">
          {
          data.map(({ id, title, description, img, link }) => {
            return (
              <ProjectBox
                key={id}
                title={title}
                img={img}
                description={description}
                link={link}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Projects;
