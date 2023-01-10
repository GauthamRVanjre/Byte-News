import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ articles }) => {
  return (
    <div className="Article">
      {articles.map((article, index) => (
        <div key={index} className="ArticleHeading">
          <h1 onClick={() => (window.location.href = article.url)}>
            {article.title}
          </h1>
          <p>{article.description}</p>
          {!!article.urlToImage && (
            <img src={article.urlToImage} alt="article-img" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleCard;
