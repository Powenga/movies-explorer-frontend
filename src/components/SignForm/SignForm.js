import { useContext } from 'react';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Logo from '../Logo/Logo';
import './SignForm.css';

function SignForm({ classes, formTitle, formName, onSubmit, children }) {
  const { registerError } = useContext(ErrorsContext);
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
        {registerError && (
          <ErrorMessage classes="error-message_active" text={registerError} />
        )}
      </form>
    </div>
  );
}

export default SignForm;
