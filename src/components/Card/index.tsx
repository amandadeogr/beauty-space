import './Card.css';

interface Props {
   image: string,
   alt: string,
   title: string,
}

const Card = ({ image, alt, title }: Props) => {
   return (
      <div className="card">
         <img className="card-image" src={image} alt={alt} />
         <h3 className="card-title">{title}</h3>
      </div>
         
   )
}

export default Card;