import React from "react";
import {useTranslation} from "react-i18next"
import img1 from "../../assets/imgs/project-pong.webp"
import img2 from "../../assets/imgs/project-cats.webp"
  
const images = [img1, img2]
const ProjectBox = ({
  id,
  title,
  img,
  link,
  description,
}) => {

  const [txt, i18n] = useTranslation("global")
  
  return (
    <div key={id} className="projects__box">

        <img src={images[img]} alt={title} />
      
      <h3>{title}</h3>
      <span>{description}</span>
      
      {link && (
        <a href={link} target="_blank">
        demo</a>
      )}
      
    </div>
  );
};

export default ProjectBox;
