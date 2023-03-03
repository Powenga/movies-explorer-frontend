import './ErrorMessage.css';

function ErrorMessage({classes, text}){
  return (
    <p className={`error-message ${classes ? classes : ''}`}>{text}</p>
  );
}

export default ErrorMessage;