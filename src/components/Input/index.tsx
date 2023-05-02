import './Input.css';

interface Props {
   placeholder: string,
   type: string,
}

const Input = ({placeholder, type}: Props) => {
  return (
    <input className="input" type={type} placeholder={placeholder}/>
  )
}

export default Input;