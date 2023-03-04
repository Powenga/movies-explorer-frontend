import {
  useContext,
  useState,
  useRef,
  FC,
  ChangeEvent,
  SyntheticEvent,
} from 'react';
import Button, { ButtonType } from '../Button/Button';
import SignForm from '../SignForm/SignForm';
import SignToggleLink from '../SignToggleLink/SignToggleLink';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { ErrorsContext } from '../../contexts/ErrorsContext';
import { useValidation } from '../../hooks/useValidation';
import Preloader from '../Preloader/Preloader';

const EMAIL_MIN_LENGTH = 2;
const PASSWORD_MIN_LENGTH = 8;
const INPUT_MAX_LENGTH = 30;

interface Props {
  classes?: string;
  onLogin: (userEmail: string, userPass: string) => void;
  isLoading: boolean;
}

const Login: FC<Props> = ({ classes, onLogin, isLoading }) => {
  const { loginError } = useContext(ErrorsContext);
  const [userData, setUserData] = useState({
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
    onLogin(userData.userEmail, userData.userPass);
  }
  return (
    <>
      {isLoading ? (
        <div className="preloader-wrapper">
          <Preloader />
        </div>
      ) : (
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
                Войти
              </Button>
              {loginError && (
                <ErrorMessage
                  classes="error-message_active"
                  text={loginError}
                />
              )}
            </SignForm>
            <SignToggleLink
              text="Ещё не зарегистрированы?"
              linkText="Регистрация"
              link="/signup"
            />
          </section>
        </main>
      )}
    </>
  );
};

export default Login;
