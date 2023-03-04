import { Link } from 'react-router-dom';
import logoPath from './logo.svg';
import block from 'bem-css-modules';
import cn from 'classnames';
import styles from './Logo.module.css';
import { FC } from 'react';

const b = block(styles);

interface Props {
  classes?: string;
}

const Logo: FC<Props> = ({ classes }) => {
  return (
    <Link className={cn(b(), 'transition', classes)} to="/">
      <img src={logoPath} alt="Логотип" />
    </Link>
  );
};

export default Logo;
