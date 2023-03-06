import { FC } from 'react';
import Social from '../Social/Social';
import { footerLinks } from '../../utils/constants';
import styles from './Footer.module.css';
import block from 'bem-css-modules';
import cn from 'classnames';

const b = block(styles);

interface Props {
  classes?: string;
}

const Footer: FC<Props> = ({ classes = undefined }) => {
  return (
    <footer className={cn(b(), classes)}>
      <div className={b('container')}>
        <h2 className={b('title')}>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className={b('row')}>
          <p className={b('copy')}>&copy; {new Date().getFullYear()}</p>
          <Social links={footerLinks} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
