import React from "react";
import {useTranslation} from "react-i18next"
    
const MailIcon = (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1rem"
  height="1rem"
  viewBox="0 0 38.197 28.648"
  >
    <path
      id="envelope-solid"
      d="M34.616,7.5a3.581,3.581,0,0,1,2.149,6.446L20.531,26.121a2.4,2.4,0,0,1-2.865,0L1.432,13.946A3.581,3.581,0,0,1,3.581,7.5ZM16.234,28.031a4.767,4.767,0,0,0,5.73,0L38.2,15.856V31.373a4.779,4.779,0,0,1-4.775,4.775H4.775A4.777,4.777,0,0,1,0,31.373V15.856Z"
      transform="translate(0 -7.5)"
      fill="currentColor"
      />
  </svg>
);

const ButtonMail = () => {
  
  const [txt, i18n] = useTranslation("global")
  
  return (
    <a href="#contact" className="btn">
      <i>{MailIcon}</i> {txt("header.btn-talk")}
    </a>
  );
};

export default ButtonMail;
