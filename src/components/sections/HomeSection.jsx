import PropTypes from 'prop-types';
import banner from '../../assets/bannière.png';
import { Link } from 'react-router-dom';

const HomeSection = ({ articles }) => {
  return (
    <section>
      <div className="banner-container">
        <img src={banner} alt="Bannière" className="banner" />
        <div className="banner-text">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>

      <div className="articles">
        {articles.map((article, index) => (
          <Link key={index} to={`/article/${article.id}`} className="article-container" style={{ backgroundImage: `url(${article.cover})` }}>
            <h2>{article.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
};

HomeSection.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default HomeSection;
