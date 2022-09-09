import React from "react";
import {useTranslation} from "react-i18next"
  

const ProjectBox = ({
  id,
  title,
  image = "https://www.kalypsofarms.com/wp-content/uploads/2019/08/dummy-300x207.png",
  link,
  description,
}) => {

  const [txt, i18n] = useTranslation("global")
  
  return (
    <div key={id} className="projects__box">
      <img src={image} alt={title} />

      {link ? (
        <a href={link}>
          <h3>{title}</h3>
        </a>
      ) : (
        <h3>{title}</h3>
      )}
      
      <span>{description}</span>
    </div>
  );
};

export default ProjectBox;
