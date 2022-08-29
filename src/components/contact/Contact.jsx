import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import BlueBG from "../../assets/svgs/blue.svg";

const Contact = () => {
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
        <h1>Contacto</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Introduzca su nombre"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Introduzca su email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Introduzca su mensaje"
            required
          ></textarea>
          <button type="submit" className="btn">
            Enviar Mensaje
          </button>
        </form>
      </article>
      <div className="contact__bg">
        <img src={BlueBG} alt="fondo azul" />
      </div>
    </section>
  );
};
export default Contact;
