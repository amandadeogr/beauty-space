import './Input.css';

interface Props {
   placeholder: string,
   type: string,
   value: string,
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({placeholder, type, value, onChange}: Props) => {
  return (
    <input className="input" type={type} value={value} placeholder={placeholder} onChange={onChange}/>
  )
}

export default Input;