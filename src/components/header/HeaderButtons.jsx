import React from "react";
import ButtonMail from "../buttons/ButtonMail"
import ButtonCV from "../buttons/ButtonCV"

const HeaderButtons = () => {
  return (
    <div className="header__buttons">
      <ButtonMail/>
      <ButtonCV />
    </div>
  );
};

export default HeaderButtons;
