import React from "react";
import ButtonGithub from "../buttons/ButtonGithub";
import ButtonLinkedin from "../buttons/ButtonLinkedin";

const FooterSocials = () => {
  return (
    <div className="footer__socials">
      <ButtonLinkedin />
      <ButtonGithub />
    </div>
  );
};

export default FooterSocials;
