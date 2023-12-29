import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import Collapse from "../utils/Collapse";
import Gallery from "../utils/Gallery";
import { Navigate } from 'react-router-dom';


const Article = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

    if (!article) {
      return <Navigate to="/404" />;
    }

  const links = ['Description', 'Equipements'];
  const texts = {
    'Description' : <p>{article.description}</p>,
    'Equipements': article.equipments.map((equipment, index) => (
      <p key={index}>{equipment}</p>
    )),
  };


  return (
    <div className="article-section">
      <Gallery pictures={article.pictures} />

      <div className="article-info">
        <div>
          <h1>{article.title}</h1>
          <p className="article-info-location">{article.location}</p>
          <div className="tags">
            {article.tags.map((tag) => (
              <div key={tag} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
          <div className="host-info">
            <div  className="host-name"><p>{article.host.name}</p>
            <img src={article.host.picture} alt="" /></div>
            
            <div className="rating">
            {(() => {
              const stars = [];
              for (let i = 0; i < 5; i++) {
                const starClass = i < parseInt(article.rating) ? "red" : "";
                stars.push(
                  <span key={i} className={`star ${starClass}`}>
                    <i className="fa-solid fa-star"></i>
                  </span>
                );
              }
              return stars;
            })()}
          </div>
         
        </div>
      </div>

      <div className="article-button">
        {links.map((link) => (
          <Collapse
            key={link}
            title={link}
            content={texts[link]}
          />
        ))}
      </div>
    </div>
  );
};

Article.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default Article;