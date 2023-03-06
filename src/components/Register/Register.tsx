import {
  useContext,
  useState,
  useRef,
  FC,
  ChangeEvent,
  SyntheticEvent,
} from 'react';
import './Register.css';
import Button, { ButtonType } from '../Button/Button';
import SignForm from '../SignForm/SignForm';
import SignToggleLink from '../SignToggleLink/SignToggleLink';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { useValidation } from '../../hooks/useValidation';
import Preloader from '../Preloader/Preloader';
import {
  EMAIL_MIN_LENGTH,
  INPUT_MAX_LENGTH,
  NAME_MIN_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '../../config';

interface Props {
  classes?: string;
  onRegister: (
    userName: string,
    userEmail: string,
    userPassword: string
  ) => void;
  isLoading: boolean;
}

const Register: FC<Props> = ({ classes, onRegister, isLoading }) => {
  const { registerError } = useContext(ErrorsContext);
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    userPass: '',
  });
  const { errors, isValid, handleValidation } = useValidation();
  const formRef = useRef(null);

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    handleValidation(evt, formRef.current);
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  }

  function handleSubmit(evt: SyntheticEvent) {
    evt.preventDefault();
    onRegister(userData.userName, userData.userEmail, userData.userPass);
  }

  return (
    <>
      {isLoading ? (
        <div className="preloader-wrapper">
          <Preloader />
        </div>
      ) : (
        <main className={`main ${classes ? classes : ''}`}>
          <section className="main__section register">
            <SignForm
              formRef={formRef}
              classes="main__section-inner"
              formTitle="Добро пожаловать!"
              formName="register-form"
              onSubmit={handleSubmit}
            >
              <label className="sign-form__field">
                Имя
                <input
                  className="sign-form__input"
                  id="user-name"
                  name="userName"
                  type="text"
                  minLength={NAME_MIN_LENGTH}
                  maxLength={INPUT_MAX_LENGTH}
                  value={userData.userName}
                  onChange={handleChange}
                  required
                />
                {errors.userName && (
                  <span className="sign-form__error">{errors.userName}</span>
                )}
              </label>
              <label className="sign-form__field">
                Е-mail
                <input
                  className="sign-form__input"
                  id="user-email"
                  name="userEmail"
                  type="email"
                  minLength={EMAIL_MIN_LENGTH}
                  maxLength={INPUT_MAX_LENGTH}
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
                  minLength={PASSWORD_MIN_LENGTH}
                  maxLength={INPUT_MAX_LENGTH}
                  value={userData.userPass}
                  onChange={handleChange}
                  required
                />
                {errors.userPass && (
                  <span className="sign-form__error">{errors.userPass}</span>
                )}
              </label>
              <Button
                classes={`btn_type_sign ${!isValid && 'btn_disabled'}`}
                type={ButtonType.submit}
                disabled={!isValid}
              >
                Зарегистрироваться
              </Button>
              {registerError && (
                <ErrorMessage
                  classes="error-message_active"
                  text={registerError}
                />
              )}
            </SignForm>
            <SignToggleLink
              text="Уже зарегистрированы?"
              linkText="Войти"
              link="/signin"
            />
          </section>
        </main>
      )}
    </>
  );
};

export default Register;
