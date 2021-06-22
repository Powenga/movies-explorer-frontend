import "./Header.css";
import logoPath from "../../images/logo.svg";

function Header({ classes, isMain, children }) {
  return (
    <header
      className={`header ${classes ? classes : ''}`}
      style={isMain && { background: "#073042" }}
    >
      <div className="header__container">
        <div className="header__logo-wrap">
          <a className="header__logo-link" href="/" target="_self">
            <img className="header__logo" src={logoPath} alt="Логотип" />
          </a>
        </div>
        {children}
      </div>
    </header>
  );
}

export default Header;
