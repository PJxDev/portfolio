import React from "react";
import CV from "../../assets/CV sp.pdf";

const documentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.1rem"
    height="1.1rem"
    viewBox="0 0 21.486 28.648"
  >
    <path
      id="file-lines-solid"
      d="M14.324,0V7.162h7.162Zm-1.79,7.162V0H2.686A2.686,2.686,0,0,0,0,2.686V25.962a2.686,2.686,0,0,0,2.686,2.686H18.8a2.686,2.686,0,0,0,2.686-2.686V8.952H14.374A1.8,1.8,0,0,1,12.533,7.162Zm2.686,16.114H6.267a.9.9,0,0,1,0-1.79h8.952a.9.9,0,0,1,0,1.79Zm0-3.581H6.267a.9.9,0,0,1,0-1.79h8.952a.9.9,0,1,1,0,1.79Zm.9-4.476a.9.9,0,0,1-.9.9H6.267a.9.9,0,0,1,0-1.79h8.952A.9.9,0,0,1,16.114,15.219Z"
      fill="currentColor"
    />
  </svg>
);

const ButtonCV = () => {
  return (
    <a href={CV} target="_blank" className="btn" rel="noopener">
      <i>{documentIcon}</i> Currículum
    </a>
  );
};

export default ButtonCV;
