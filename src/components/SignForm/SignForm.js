import Logo from '../Logo/Logo';
import './SignForm.css';

function SignForm({ classes, formTitle, formName, onSubmit, children }) {
  return (
    <div className={`sign-form ${classes ? classes : ''}`}>
      <Logo classes="sign-form__logo" />
      <h1 className="sign-form__title">{formTitle}</h1>
      <form
        className="sign-form__form"
        name={formName}
        noValidate
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </div>
  );
}

export default SignForm;
