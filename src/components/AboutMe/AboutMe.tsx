import { FC, PropsWithChildren } from 'react';
import avatarPath from '../../images/about-me-avatar.jpg';
import Social from '../Social/Social';
import Portfolio from '../Portfolio/Portfolio';
import { aboutMeLinks } from '../../utils/constants';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './AboutMe.module.css';

const b = block(styles);

interface Props {
  classes?: string;
}

const AboutMe: FC<PropsWithChildren<Props>> = ({
  classes = undefined,
  children,
}) => {
  return (
    <div className={cn(b(), classes)}>
      {children}
      <div className={b('person')}>
        <div className={b('content')}>
          <h3 className={b('title')}>Дмитрий</h3>
          <p className={b('subtitle')}>Web-разработчик, 35 года</p>
          <p className={b('text')}>
            Живу в Липецке. Учился здесь же, закончил физико-технологический
            факультет ЛГТУ по специальности "Промышленная теплоэнергика". 10 лет
            работал инженером в энергетической отрасли. В 2016 году
            заинтересовался веб-разработкой, кодил для себя и брал небольшие
            заказы. Сейчас разработка на фрилансе - моя основная сфера
            деятельности. Люблю походы, и хорошие фильмы.
          </p>
          <Social links={aboutMeLinks} />
        </div>
        <img className={b('avatar')} src={avatarPath} alt="аватар студента" />
      </div>
      <Portfolio />
    </div>
  );
};

export default AboutMe;
