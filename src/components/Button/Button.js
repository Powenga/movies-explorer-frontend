import './Button.css';

function Button({ classes, type, areaLabel, onClick, disabled, children }) {
  return (
    <button
      className={`btn transition transiton_type_button ${classes ? classes : ''}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      arealabel={areaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
