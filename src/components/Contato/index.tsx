import './Contato.css';
import modelo from '../../assets/modelo-skincare.png'
import Formulario from '../Formulario';

const Contato = () => {
   return (
      <section className='contato' id='contato'>
         <Formulario />
         <img className='image' src={modelo} alt="" />
      </section>
   )
}
export default Contato;