import Logo from '../Logo/Logo';
import './SignForm.css';

function SignForm({ classes, formTitle, formName, children }) {
  return (
    <div className={`sign-form ${classes ? classes : ''}`}>
      <Logo />
      <h1 className="sign-form__title">{formTitle}</h1>
      <form className="sign-form__form" name={formName}>
        {children}
      </form>
    </div>
  );
}

export default SignForm;
