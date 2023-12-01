import aboutbanner from '../../assets/about_banner.png'
;import Collapse from '../utils/Collapse';

export const AboutSection = () => {
  const links = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
  const texts = {
    'Fiabilité': <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>,
    'Respect': <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>,
    'Service': <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme</p>,
    'Sécurité': <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>,
  };


  return (
    <section>
      <div className="banner-container">
        <img src={aboutbanner} alt="Bannière" className="banner" />
      </div>
      <div className='about-button'>
        {links.map(link => (
          <div key={link}>
            <Collapse title={link} content={texts[link]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};