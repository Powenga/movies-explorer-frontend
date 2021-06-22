import './Button.css';

function Button ({ classes, onClick, children}) {
  return (
    <button className={`btn ${classes ? classes : ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;