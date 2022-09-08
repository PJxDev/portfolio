import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const BlueBG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1920.001"
    height="562.293"
    viewBox="0 0 1920.001 562.293"
    fill="#00b9ff"
  >
    <path
      id="Sustracción_3"
      data-name="Sustracción 3"
      className="cls-1"
      d="M144.044,562.293h0V0h1920V247.646l-1920,314.647Z"
      transform="translate(-144.044)"
    />
  </svg>
);

const Contact = () => {
  const [txt, i18n] = useTranslation("global");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <article className="container contact__container">
        <h1>{txt("contact.title")}</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={`${txt("contact.ph-name")}`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={`${txt("contact.ph-email")}`}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={`${txt("contact.ph-msg")}`}
            required
          ></textarea>
          <button type="submit" className="btn">
            {txt("contact.btn-send")}
          </button>
        </form>
      </article>
      <div className="contact__bg">{BlueBG}</div>
    </section>
  );
};
export default Contact;
