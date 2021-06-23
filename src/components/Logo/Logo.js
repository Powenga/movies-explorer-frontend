import logoPath from '../../images/logo.svg';
import './Logo.css';

function Logo({ classes }) {
  return (
    <a className="logo" href="/" target="_self">
      <img src={logoPath} alt="Логотип" />
    </a>
  );
}

export default Logo;
