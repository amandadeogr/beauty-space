import './Button.css';

interface Props {
   message: string,
}

const Button = ({message} : Props) => {

   return (
      <button className='btn'>{message}</button>
   )
}

export default Button;