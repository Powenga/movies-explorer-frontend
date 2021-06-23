import Button from '../Button/Button';
import './Profile.css';

function Profile({ classes }) {
  const user = {
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  };
  return (
    <main className={`main ${classes ? classes : ''}`}>
      <section className="main__section">
        <div className="profile main__section-inner">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form " name="profile">
            <label className="profile__form-field">
              <input
                className="profile__input"
                id="user-name"
                name="userName"
                type="text"
                minLength="2"
                maxLength="30"
                defaultValue={user.name}
                required
              />
              <span className="profile__input-label">Имя</span>
            </label>
            <label className="profile__form-field">
              <input
                className="profile__input profile__input-label_style_borderless"
                id="user-email"
                name="userEmail"
                type="email"
                minLength="2"
                maxLength="30"
                defaultValue={user.email}
                required
              />
              <span className="profile__input-label">E-mail</span>
            </label>
            <Button classes="btn_type_profile-submit" type="submit">Редактировать</Button>
            <Button classes="btn_type_profile-logout" type="button">Выйти из аккаунта</Button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Profile;
