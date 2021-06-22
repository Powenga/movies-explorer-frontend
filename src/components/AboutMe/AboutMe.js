import "./AboutMe.css";
import { aboutMeLinks } from "../../utils/constants";
import avatarPath from "../../images/about-me-avatar.jpg";
import Social from "../Social/Social";

function AboutMe({ classes, children }) {
  return (
    <div className={`about-me ${classes ? classes : ""}`}>
      {children}
      <div className="about-me__person">
        <div className="about-me__content">
          <h3 className="about-me__title">Дмитрий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 33 года</p>
          <p className="about-me__text">
            Живу в Липецке. Учился здесь же, закончил физико-технологический
            факультет ЛГТУ по специальности "Промышленная теплоэнергика". 10 лет
            работал инженером в энергетической отрасли. В 2016 году
            заинтересовался веб-разработкой, кодил для себя и брал небольшие
            заказы. Сейчас разработка на фрилансе - моя основная сфера
            деятельности. Люблю походы, и хорошие фильмы.
          </p>
          <Social classes="about-me__social" links={aboutMeLinks} />
        </div>
        <img
            className="about-me__avatar"
            src={avatarPath}
            alt="аватар студента"
          />
      </div>
      <h4 className="about-me__portfolio-title">Портфолио</h4>
      <ul className="about-me__portfolio-list">
        <li className="about-me__porfolio-item">
          <a
            className="about-me__portfolio-link"
            href="https://github.com/Powenga/how-to-learn"
            target="_blank"
            rel="noreferrer noopener"
          >
            Статичный сайт
          </a>
        </li>
        <li className="about-me__porfolio-item">
          <a
            className="about-me__portfolio-link"
            href="https://github.com/Powenga/russian-travel"
            target="_blank"
            rel="noreferrer noopener"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="about-me__porfolio-item">
          <a
            className="about-me__portfolio-link"
            href="https://github.com/Powenga/react-mesto-api-full"
            target="_blank"
            rel="noreferrer noopener"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}

export default AboutMe;
