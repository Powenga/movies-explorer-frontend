import Button from '../Button/Button';
import SignForm from '../SignForm/SignForm';
import { Link } from 'react-router-dom';

function Login({ classes }) {
  const user = {
    email: 'pochta@yandex.ru',
    pass: 'пароль-король',
  };
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SignForm
          classes="main__section-inner"
          formTitle="Рады видеть!"
          formName="login-form"
        >
          <label className="sign-form__field">
            Е-mail
            <input
              className="sign-form__input sign-form__input_type_error"
              id="user-email"
              name="userEmail"
              type="email"
              minLength="2"
              maxLength="30"
              defaultValue={user.email}
              required
            />
            <span className="sign-form__error sign-form__error_active">
              Текст должен быть не короче 8 симв. Длина текста сейчас: 1 символ.
            </span>
          </label>
          <label className="sign-form__field">
            Имя
            <input
              className="sign-form__input"
              id="user-pass"
              name="userPass"
              type="password"
              minLength="8"
              maxLength="30"
              defaultValue={user.pass}
              required
            />
            <span className="sign-form__error"></span>
          </label>
          <Button classes="btn_type_sign" type="submit">
            Войти
          </Button>
          <p className="sign-form__link-wrap">
            Ещё не зарегистрированы?&nbsp;
            <Link to="/signup" className="sign-form__link">
              Регистрация
            </Link>
          </p>
        </SignForm>
      </section>
    </main>
  );
}

export default Login;
