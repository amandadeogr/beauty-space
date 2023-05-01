import './Services.css';
import Card from "../Card";

import image1 from '../../assets/chapinha.jpg';
import image2 from '../../assets/corte-cabelo.jpg';
import image3 from '../../assets/massagem.png';
import image4 from '../../assets/manicure.jpeg';
import image5 from '../../assets/pedicure.jpg';

const items = [
   {
      image: image1,
      alt: 'Cabelo comprido sendo alisado com uma chapinha',
      title: 'Alisamentos',
      description: 'Diversos tipos de alisamentos',
   },
   {
      image: image2,
      alt: 'Cabelo sendo cortado com uma tesoura',
      title: 'Cortes',
      description: 'Diversos tipos de cortes de cabelo',
   },
   {
      image: image3,
      alt: 'Maos massageando um corpo feminino',
      title: 'Massagem',
      description: 'Diversos tipos de massagem',
   },
   {
      image: image4,
      alt: 'Dois pares de mãos femininas, um par com luvas rosa e a outra sem luvas',
      title: 'Manicure',
      description: 'Diversos tipos de manicure',
   },
   {
      image: image5,
      alt: 'Pés sendo lavado em uma banheira',
      title: 'Pedicure',
      description: 'Diversos tipos de pedicure',
   },
]

const Services = () => {
   return (
      <section className="services">
         <h2 className='services-title'>NOSSAS ESPECIALIDADES</h2>
         <div className='services-cards'>
            {
               items.map( (items) => {
                  return (
                     <Card image={items.image} alt={items.alt} title={items.title} description={items.description}/>
                  )
               })
            }
         </div>
         
      </section>
   )
}

export default Services;