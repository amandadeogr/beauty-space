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
      alt: 'Dois pares de mãos femininas, um par com luvas rosa e a outra sem luvas',
      title: 'Manicure e Nail Designer',
   },
   {
      image: pedicure,
      alt: 'Pés sendo lavado em uma banheira',
      title: 'Pedicure',
   },
   {
      image: cabelo,
      alt: 'Cabelo comprido sendo alisado com uma chapinha',
      title: 'Tratamentos Capilares',
   },
   {
      image: massagem,
      alt: 'Maos massageando um corpo feminino',
      title: 'Massagens Terapêuticas',
   },
   {
      image: skincare,
      alt: 'Pés sendo lavado em uma banheira',
      title: 'Skin Care',
   },
   {
      image: aromaterapia,
      alt: 'Pés sendo lavado em uma banheira',
      title: 'Aromaterapia',
   }
]

const Services = () => {
   return (
      <section className="services">
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