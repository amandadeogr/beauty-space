import './Banner.css';
import modelo from '../../assets/modelo.png';
import Button from '../Button';

const Banner = () => {
   return (
      <section className="banner" id='banner'>
         <div className="right">
            <h1 className='banner-title'>MARIA</h1>
            <p className='banner-description'>O Espaço de Beleza mais completo do Brasil, onde você encontra os melhores tratamentos e técnicas de beleza, feitas pelos profissionais mais renomados do país, prontos para te atender.</p>
            <Button action='whatsapp' message='Agende seu horário'/>
         </div>

         <img className='banner-img' src={modelo} alt="Modelo de pele branca, olhos claros, e cabelos claros e ondulados" />

      </section>
   )
}

export default Banner;