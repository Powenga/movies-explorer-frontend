import Button from '../Button/Button';
import SignForm from '../SignForm/SignForm';
import { Link } from 'react-router-dom';

function Register({ classes }) {
  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
    pass: 'пароль-король',
  };
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <SignForm
          classes="main__section-inner"
          formTitle="Добро пожаловать!"
          formName="register-form"
        >
          <label className="sign-form__field">
            Имя
            <input
              className="sign-form__input"
              id="user-name"
              name="userName"
              type="text"
              minLength="2"
              maxLength="30"
              defaultValue={user.name}
              required
            />
          </label>
          <label className="sign-form__field">
            Е-mail
            <input
              className="sign-form__input"
              id="user-email"
              name="userEmail"
              type="email"
              minLength="2"
              maxLength="30"
              defaultValue={user.email}
              required
            />
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
          </label>
          <Button classes="btn_type_sign" type="submit">
            Зарегистрироваться
          </Button>
          <p className="sign-form__link-wrap">
            Уже зарегистрированы?&nbsp;
            <Link to="/signin" className="sign-form__link">Войти</Link>
          </p>
        </SignForm>
      </section>
    </main>
  );
}

export default Register;