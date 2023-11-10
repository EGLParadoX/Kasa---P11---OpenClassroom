import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">Logo Here</div>
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
