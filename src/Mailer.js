import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iyquvgg",
        "template_6v6d7gr",
        form.current,
        "oAQFGK8B3XKQZAK0h"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="text"
          name="user_email"
          className="form-control"
          placeholder="email@example.com"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input
          type="text"
          name="user_name"
          className="form-control"
          placeholder="Nombre"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Escriba aqui su mensaje
        </label>
        <textarea name="message" className="form-control" rows="3"></textarea>
      </div>
      <button type="submmit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default ContactUs;
