import './Feedback.css';

interface Props {
   message: string,
   messageType:  'success' | 'warning' | 'error';
}

const Feedback = ({ message, messageType } : Props) => {
  return (
      <div className={`message ${messageType}`}>
         <p>{message}</p>
      </div>
  )
}

export default Feedback;