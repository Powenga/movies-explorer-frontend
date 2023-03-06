import { FC, useRef } from 'react';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './Main.module.css';

const b = block(styles);

interface Props {
  classes?: string;
}

const Main: FC<Props> = ({ classes }) => {
  const aboutProjectRef = useRef<HTMLElement>(null);

  function learnMoreHandler() {
    if (aboutProjectRef.current) {
      aboutProjectRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <main className={cn(b(), classes)}>
      <section className={b('section', { type: 'promo' })}>
        <Promo
          onLearnMoreClick={learnMoreHandler}
          classes={b('section-inner')}
        />
      </section>
      <section ref={aboutProjectRef} className={b('section')}>
        <AboutProject classes={b('section-inner')}>
          <h2 className={b('section-title', { type: 'about-project' })}>
            О проекте
          </h2>
        </AboutProject>
      </section>
      <section className={b('section', { type: 'techs' })}>
        <Techs classes={b('section-inner')}>
          <h2 className={b('section-title', { type: 'techs' })}>Технологии</h2>
        </Techs>
      </section>
      <section className={b('section', { type: 'about-me' })}>
        <AboutMe classes={b('section-inner')}>
          <h2 className={b('section-title', { type: 'type_about-me' })}>
            Cтудент
          </h2>
        </AboutMe>
      </section>
    </main>
  );
};

export default Main;
