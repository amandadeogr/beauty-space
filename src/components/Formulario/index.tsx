import './Formulario.css'
import Input from "../Input";
import Button from '../Button';

const Formulario = () => {
   return (
      <div className="formulario">
         <h2>Entre em Contato</h2>
         <form className="form">
            <Input placeholder="Digite seu nome" type="text"/>
            <Input placeholder="Digite seu email"  type="email"/>
            <Input placeholder="Digite seu telefone para contato" type="tel"/>
            <textarea className='text-area' placeholder='Digite sua mensagem' name="" id="" cols="30" rows="5"></textarea>
         </form>
         <Button message='Enviar mensagem'/>
      </div>
   )
}

export default Formulario;