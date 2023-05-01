import './Card.css';

interface Props {
   image: string,
   alt: string,
   title: string,
   description: string
}

const Card = ({ image, alt, title, description }: Props) => {
   return (
      <div className="card">
         <img className="card-image" src={image} alt={alt} />
         <h3 className="card-title">{title}</h3>
         <p className="card-description">{description}</p>
      </div>
         
   )
}

export default Card;