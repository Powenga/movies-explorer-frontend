import Logo from '../Logo/Logo';
import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import block from 'bem-css-modules';
import styles from './Header.module.css';

const b = block(styles);

export enum HeaderStyle {
  main = 'main',
}

interface Props {
  classes?: string;
  style?: HeaderStyle;
}

const Header: FC<PropsWithChildren<Props>> = ({
  classes = undefined,
  style,
  children,
}) => {
  return (
    <header className={cn(b({ style }), classes)}>
      <div className={b('container')}>
        <div className="header__logo-wrap">
          <Logo />
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
