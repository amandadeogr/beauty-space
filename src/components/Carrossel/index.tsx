import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrossel.css'
import CardDepoimentos from '../CardDepoimentos';


const depoiments = [
   {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reprehenderit accusamus rerum voluptas at. Cupiditate odit earum ex modi reiciendis dolore molestias quia recusandae eveniet totam, perspiciatis temporibus. Quia, modi.',
      image: 'https://github.com/amandadeogr.png',
      alt: 'imagem amanda',
      author: 'Amanda Ramirez',
   },
   {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reprehenderit accusamus rerum voluptas at. Cupiditate odit earum ex modi reiciendis dolore molestias quia recusandae eveniet totam, perspiciatis temporibus. Quia, modi.',
      image: 'https://github.com/ramirezmz.png',
      alt: 'imagem amanda',
      author: 'Roberto Ramirez',
   },
   {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reprehenderit accusamus rerum voluptas at. Cupiditate odit earum ex modi reiciendis dolore molestias quia recusandae eveniet totam, perspiciatis temporibus. Quia, modi.',
      image: 'https://github.com/amandadeogr.png',
      alt: 'imagem amanda',
      author: 'Amanda Ramirez',
   },
   {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reprehenderit accusamus rerum voluptas at. Cupiditate odit earum ex modi reiciendis dolore molestias quia recusandae eveniet totam, perspiciatis temporibus. Quia, modi.',
      image: 'https://github.com/ramirezmz.png',
      alt: 'imagem amanda',
      author: 'Roberto Ramirez',
   },
   {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reprehenderit accusamus rerum voluptas at. Cupiditate odit earum ex modi reiciendis dolore molestias quia recusandae eveniet totam, perspiciatis temporibus. Quia, modi.',
      image: 'https://github.com/amandadeogr.png',
      alt: 'imagem amanda',
      author: 'Amanda Ramirez',
   },
   {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione reprehenderit accusamus rerum voluptas at. Cupiditate odit earum ex modi reiciendis dolore molestias quia recusandae eveniet totam, perspiciatis temporibus. Quia, modi.',
      image: 'https://github.com/ramirezmz.png',
      alt: 'imagem amanda',
      author: 'Roberto Ramirez',
   },
   
]

const Carrossel = () => {
   const settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 2,
     slidesToScroll: 1,

     responsive: [
      {
        breakpoint: 700, // tamanho da tela em que as configurações abaixo se aplicam
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   };
   
   return (
     <Slider {...settings}>
       {
         depoiments.map( (item) => {
            return (
               <CardDepoimentos description={item.description} image={item.image} alt={item.alt} author={item.author}/>
            )
         })
      }
     </Slider>
   );
 }
 
 export default Carrossel;