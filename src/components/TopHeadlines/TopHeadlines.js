import React, { useEffect, useState } from "react";
import "./TopHeadlines.css";
import { API_KEY } from "../../contants";
import loading_img from "../../images/loading_img.jpg";

const TopHeadlines = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(articles);

  // Fetching top 10 trending news articles by using pageSize
  // updating the results into articles state
  useEffect(() => {
    const abortController = new AbortController();
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=10&page=1`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then(
        (response) => {
          setIsLoaded(true);
          setError(null);
          setArticles(response.articles);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    return () => {
      abortController.abort();
    };
  }, []);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return (
      <div className="loadingDiv">
        <img src={loading_img} alt="loading_img" />
      </div>
    );
  } else {
    return (
      <>
        <div className="TopHeadlinesMain">
          {articles.map((article, index) => (
            <div key={index} className="TopHeadlinesPost">
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
      </>
    );
  }
};

export default TopHeadlines;
