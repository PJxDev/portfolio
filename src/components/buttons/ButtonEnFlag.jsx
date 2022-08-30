import React from "react";

const EnFlag = (
  <svg
    id="button__enflag"
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 38 38"
  >
    <defs>
      <clipPath id="clipPath">
        <circle
          id="Elipse_1"
          data-name="Elipse 1"
          cx="19"
          cy="19"
          r="19"
          transform="translate(1762 74)"
          fill="#fff"
          stroke="#707070"
          strokeWidth="1"
        />
      </clipPath>
      <clipPath id="clipPath-2">
        <path id="Trazado_7" data-name="Trazado 7" d="M0,0V38H76V0Z" />
      </clipPath>
      <clipPath id="clipPath-3">
        <path
          id="Trazado_4"
          data-name="Trazado 4"
          d="M38,19H76V38Zm0,0V38H0Zm0,0H0V0Zm0,0V0H76Z"
        />
      </clipPath>
    </defs>
    <g
      id="Enmascarar_grupo_1"
      data-name="Enmascarar grupo 1"
      transform="translate(-1762 -74)"
      clipPath="url(#clipPath)"
    >
      <g
        id="Flag_of_the_United_Kingdom"
        transform="translate(1743 74)"
        clipPath="url(#clipPath-2)"
      >
        <path
          id="Trazado_1"
          data-name="Trazado 1"
          d="M0,0V38H76V0Z"
          fill="#012169"
        />
        <path
          id="Trazado_2"
          data-name="Trazado 2"
          d="M0,0,76,38M76,0,0,38"
          stroke="#fff"
          strokeWidth="3.8"
        />
        <g id="Grupo_1" data-name="Grupo 1" clipPath="url(#clipPath-3)">
          <path
            id="Trazado_3"
            data-name="Trazado 3"
            d="M0,0,76,38M76,0,0,38"
            stroke="#c8102e"
            strokeWidth="2.533"
          />
        </g>
        <path
          id="Trazado_5"
          data-name="Trazado 5"
          d="M38,0V38M0,19H76"
          stroke="#fff"
          strokeWidth="6.333"
        />
        <path
          id="Trazado_6"
          data-name="Trazado 6"
          d="M38,0V38M0,19H76"
          stroke="#c8102e"
          strokeWidth="3.8"
        />
      </g>
    </g>
  </svg>
);

const ButtonEnFlag = () => {
  return (
    <a href="#">
      <i>{EnFlag}</i>
    </a>
  );
};

export default ButtonEnFlag;
