import './Services.css';
import Card from "../Card";

import cabelo from '../../assets/cabelo.png';
import manicure from '../../assets/manicure.png';
import pedicure from '../../assets/pedicure.png';
import massagem from '../../assets/massagem.png';
import skincare from '../../assets/skincare.png';
import aromaterapia from '../../assets/aromaterapia.png'

const items = [
   {
      image: manicure,
      alt: 'ilustração de uma mão feminina',
      title: 'Manicure e Nail Designer',
   },
   {
      image: pedicure,
      alt: 'ilustração de um pé',
      title: 'Pedicure',
   },
   {
      image: cabelo,
      alt: 'ilustração de uma pessoa de lado e com cabelos compridos',
      title: 'Tratamentos Capilares',
   },
   {
      image: massagem,
      alt: 'ilustração de uma pessoa deitada recebendo uma massagem nas costas',
      title: 'Massagens Terapêuticas',
   },
   {
      image: skincare,
      alt: 'ilustração de um rosto brilhando devido a um tratamento cosmético',
      title: 'Skin Care',
   },
   {
      image: aromaterapia,
      alt: 'ilustração de uma flor acompanhada de um aromatizante',
      title: 'Aromaterapia',
   }
]

const Services = () => {
   return (
      <section className="services" id='especialidades'>
         <h2 className='services-title'>NOSSAS ESPECIALIDADES</h2>
         <div className='services-cards'>
            {
               items.map( (items) => {
                  return (
                     <Card image={items.image} alt={items.alt} title={items.title}/>
                  )
               })
            }
         </div>
         
      </section>
   )
}

export default Services;