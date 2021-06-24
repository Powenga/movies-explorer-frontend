import logoPath from '../../images/logo.svg';
import './Logo.css';
import { Link } from 'react-router-dom';

function Logo({ classes }) {
  return (
    <Link className="logo transition" to="/">
      <img src={logoPath} alt="Логотип" />
    </Link>
  );
}

export default Logo;
