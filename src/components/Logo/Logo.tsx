import './Logo.css';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Logo({ classes }) {
  return (
    <Link className={`logo transition ${classes ? classes : ''}`} to="/">
      <img src={logoPath} alt="Логотип" />
    </Link>
  );
}

export default Logo;
