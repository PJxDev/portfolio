import React from "react";
import ButtonGithub from "../buttons/ButtonGithub";
import ButtonLinkedin from "../buttons/ButtonLinkedin";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <ButtonLinkedin />
      <ButtonGithub />
    </div>
  );
};

export default HeaderSocials;
