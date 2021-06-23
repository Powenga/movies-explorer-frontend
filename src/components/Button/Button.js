import './Button.css';

function Button({ classes, type, areaLabel, onClick, children }) {
  return (
    <button
      className={`btn ${classes ? classes : ''}`}
      type={type}
      onClick={onClick}
      arealabel={areaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
