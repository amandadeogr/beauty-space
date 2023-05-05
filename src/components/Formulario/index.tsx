import "./Formulario.css";
import Button from "../Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../Input";

const KEY = import.meta.env;

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    if(name === '' || email === '' || message === '') {
       alert('preencha todos os campos')
       return
    }
       const templateParams = {
          from_name: name,
          message: message,
          email: email
       }

       emailjs.send(KEY.VITE_API_SERVICE_KEY, KEY.VITE_API_TEMPLATE_KEY, templateParams, KEY.VITE_PUBLIC_KEY)
       .then((response) => {
          console.log('Email enviado', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
       }, (err) => {
          console.log('Error: ', err);
       })
  };

  return (
    <div className="formulario">
      <h2>Entre em Contato</h2>
      <form className="form" id="form" onSubmit={sendEmail}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="text-area"
          placeholder="Digite sua mensagem"
          name={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button action="email" message="Enviar mensagem" />
      </form>
    </div>
  );
};

export default Formulario;
