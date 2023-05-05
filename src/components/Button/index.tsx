import './Button.css';

interface Props {
   message: string,
   action: string,
}

const Button = ({message, action} : Props) => {
   const number : number = +5522998052982;

   const handleClick = () => {
      if(action === 'whatsapp') {
         window.location.href = `https://api.whatsapp.com/send?phone=${number}`
      }
      
   }
   return (
      <button className='btn' type='submit' name={action} onClick={handleClick}>{message}</button>
   )
}

export default Button;