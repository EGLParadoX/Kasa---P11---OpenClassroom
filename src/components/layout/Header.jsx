import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo Kasa" className="header-logo"/>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
