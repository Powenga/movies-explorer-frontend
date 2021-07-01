import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Logo from '../Logo/Logo';
import './SignForm.css';

function SignForm({ classes, formTitle, formName, onSubmit, children }) {


  return (
    <div className={`sign-form ${classes ? classes : ''}`}>
      <Logo classes="sign-form__logo"/>
      <h1 className="sign-form__title">{formTitle}</h1>
      <form className="sign-form__form" name={formName} noValidate>
        {children}
        <ErrorMessage classes="error-message_active"/>
      </form>
    </div>
  );
}

export default SignForm;
