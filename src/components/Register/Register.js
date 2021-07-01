import Button from '../Button/Button';
import SignForm from '../SignForm/SignForm';
import SignToggleLink from '../SignToggleLink/SignToggleLink';
import './Register.css';

function Register({ classes }) {
  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
    pass: 'пароль-король',
  };
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section register">
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
            <span className="sign-form__error"></span>
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
            <span className="sign-form__error"></span>
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
          <Button
            classes="btn_type_sign"
            type="submit"
          >
            Зарегистрироваться
          </Button>
        </SignForm>
        <SignToggleLink
          text="Уже зарегистрированы?"
          linkText="Войти"
          link="/signin"
        />
      </section>
    </main>
  );
}

export default Register;
