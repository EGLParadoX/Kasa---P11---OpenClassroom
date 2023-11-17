import banner from '../assets/bannière.png';
import aboutbanner from '../assets/about_banner.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const HomeSection = ({ articles }) => {

  return (
    <section>
      <div className="banner-container">
        <img src={banner} alt="Bannière" className="banner"/>
        <div className="banner-text">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>

      <div className="articles">
        {articles.map((article, index) => (
          <Link key={index} to={`/article/${article.id}`} className="article-container" style={{ backgroundImage: `url(${article.cover})`}}>
            <h2>{article.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

export const AboutSection = () => {
  const links = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
  const [showBlock, setShowBlock] = useState({});
  const texts = {
    'Fiabilité': 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes',
    'Respect': 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
    'Service': 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
    'Sécurité': 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes',
  };

  const handleClick = (link) => {
    setShowBlock((prevState) => ({ ...prevState, [link]: !prevState[link] }));
  };

  return (
    <section>
      <div className="banner-container">
        <img src={aboutbanner} alt="Bannière" className="banner" />
      </div>
      <div className='about-button'>
        {links.map(link => (
          <div key={link}>
            <button>
              {link}
              <i onClick={() => handleClick(link)} className={`fa-solid fa-chevron-up ${showBlock[link] ? 'rotate' : 'reverse'}`}></i>
            </button>
            <div className={`block ${showBlock[link] ? 'open' : ''}`}>
              <p>{texts[link]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

