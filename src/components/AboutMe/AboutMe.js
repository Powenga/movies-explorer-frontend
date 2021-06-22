import "./AboutMe.css";
import { aboutMeLinks } from "../../utils/constants";
import avatarPath from "../../images/about-me-avatar.jpg";
import Social from "../Social/Social";
import Portfolio from "../Portfolio/Portfolio";

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
      <Portfolio />
    </div>
  );
}

export default AboutMe;
