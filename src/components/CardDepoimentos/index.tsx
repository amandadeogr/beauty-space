import './CardDepoimentos.css';
import icon from '../../assets/quote.svg';

interface Props {
   description: string,
   image: string,
   alt: string;
   author: string
}

const CardDepoimentos = ({ description, image, alt, author } : Props) => {
   return (
      <div className='depoiments-container'>
            <div className='depoiments-body'>
               <img className='depoiments-icon' src={icon}/>
               <p className='depoiments-description'>{description}</p>
            </div>
            <div className='depoiments-author'>
               <img src={image} alt={alt} />
               <h4>{author}</h4>
            </div>
         </div>
   )
}

export default CardDepoimentos;