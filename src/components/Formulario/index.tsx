import "./Formulario.css";
import Button from "../Button";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../Input";
import Feedback from "../Feedback";

const KEY = import.meta.env;

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState<{ message: string, messageType: 'success' | 'warning' | 'error' }>();

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => {
        setFeedback(undefined);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
   }

    if(name === '' || email === '' || message === '') {
      setFeedback({ message: 'O preenchimento de todos os campos é requerido', messageType: 'warning' });
       return
    }      

    {
      emailjs.send(KEY.VITE_API_SERVICE_KEY, KEY.VITE_API_TEMPLATE_KEY, templateParams, KEY.VITE_PUBLIC_KEY)
      .then((response) => {
       setFeedback({ message: 'Mensagem enviada com sucesso!', messageType: 'success' });
         setName('');
         setEmail('');
         setMessage('');
      }, (err) => {
       setFeedback({ message: 'Errr' + err, messageType: 'error' });
      })
    }
  };

  return (
    <div className="formulario">
      <h2 className="title">Entre em Contato</h2>
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
        
        {
          feedback && <Feedback message={feedback.message} messageType={feedback.messageType}/>
        }

        <Button action="email" message="Enviar mensagem" />
      </form>
    </div>
  );
};

export default Formulario;
