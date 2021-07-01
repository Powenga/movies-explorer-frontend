import Social from '../Social/Social';
import './Footer.css';
import { footerLinks } from '../../utils/constants.js';

function Footer({ classes, children }) {
  return (
    <footer className={`footer ${classes ? classes : ''}`}>
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__row">
          <p className="footer__copy">&copy; {new Date().getFullYear()}</p>
          <Social
            classes="social__list_type_column"
            itemClasses="social__item_type_centered"
            linkClasses="social__link_type_thin"
            links={footerLinks}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
