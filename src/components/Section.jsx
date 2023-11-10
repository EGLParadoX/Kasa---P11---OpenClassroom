export const HomeSection = () => {
  return (
    <section>
      <img src="header-image.jpg" alt="Header Image" />
      <div className="articles">
        
      </div>
    </section>
  );
};

export const AboutSection = () => {
    const links = ['Fiabilité', 'Respect', 'Service', 'Sécurité']

    return (
      <div>
        <img src="about-header-image.jpg" alt="About Header Image" />
        <div>
          {links.map(link => <button key={link}>{link}</button>)}
        </div>
      </div>
    );
  };