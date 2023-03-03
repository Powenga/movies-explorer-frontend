import './Header.css';
import Logo from '../Logo/Logo';

function Header({ classes, isMain, children }) {
  return (
    <header
      className={`header ${classes ? classes : ''}`}
      style={isMain && { background: '#073042' }}
    >
      <div className="header__container">
        <div className="header__logo-wrap">
          <Logo />
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;
