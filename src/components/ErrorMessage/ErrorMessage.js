import './ErrorMessage.css';

function ErrorMessage({classes}){
  return (
    <p className={`error-message ${classes ? classes : ''}`}>Что-то пошло не так...</p>
  );
}

export default ErrorMessage;