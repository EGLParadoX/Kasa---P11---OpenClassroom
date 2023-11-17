import { useState } from "react";
import { useParams } from "react-router-dom";

export const Article = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === id);

  console.log("Article:", article);

  if (!article) {
    return <div>Article not found</div>;
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % article.pictures.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? article.pictures.length - 1 : prevSlide - 1
    );
  };

  return (
    <div>
      <div className="slider">
        {article.pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? "active" : ""}
          />
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <div className="article-info">
        <div>
          <h1>{article.title}</h1>
          <p>{article.location}</p>
          <div className="tags">
            {article.tags.map((tag) => (
              <div key={tag} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="host-info">
            <p>{article.host.name}</p>
            <img src={article.host.picture} alt="" />
          </div>
          <div className="rating">
            {(() => {
              const stars = [];
              for (let i = 0; i < 5; i++) {
                const starClass = i < parseInt(article.rating, 10) ? "red" : "";
                stars.push(
                  <span key={i} className={`star ${starClass}`}>
                    &#9733;
                  </span>
                );
              }
              return stars;
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
