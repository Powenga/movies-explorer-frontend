import { useContext, useState, useRef } from 'react';
import Button from '../Button/Button';
import SignForm from '../SignForm/SignForm';
import SignToggleLink from '../SignToggleLink/SignToggleLink';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { useValidation } from '../../hooks/useValidation';

function Login({ classes, onLogin }) {
  const { loginError } = useContext(ErrorsContext);
  const [userData, setUserData] = useState({
    userEmail: '',
    userPass: '',
  });
  const { errors, isValid, handleValidation } = useValidation();
  const formRef = useRef(null);

  function handleChange(evt) {
    handleValidation(evt, formRef.current);
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(userData.userEmail, userData.userPass);
  }
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SignForm
          formRef={formRef}
          classes="main__section-inner"
          formTitle="Рады видеть!"
          formName="login-form"
          onSubmit={handleSubmit}
        >
          <label className="sign-form__field">
            Е-mail
            <input
              className="sign-form__input"
              id="user-email"
              name="userEmail"
              type="email"
              minLength="2"
              maxLength="30"
              value={userData.userEmail}
              onChange={handleChange}
              required
            />
            {errors.userEmail && (
              <span className="sign-form__error">{errors.userEmail}</span>
            )}
          </label>
          <label className="sign-form__field">
            Пароль
            <input
              className="sign-form__input"
              id="user-pass"
              name="userPass"
              type="password"
              minLength="8"
              maxLength="30"
              value={userData.userPass}
              onChange={handleChange}
              required
            />
            {errors.userPass && (
              <span className="sign-form__error">{errors.userPass}</span>
            )}
          </label>
          <Button
            classes={`btn_type_sign ${isValid && 'btn_type_sign_active'}`}
            type="submit"
            disabled={!isValid}
          >
            Войти
          </Button>
          {loginError && (
            <ErrorMessage classes="error-message_active" text={loginError} />
          )}
        </SignForm>
        <SignToggleLink
          text="Ещё не зарегистрированы?"
          linkText="Регистрация"
          link="/signup"
        />
      </section>
    </main>
  );
}

export default Login;
