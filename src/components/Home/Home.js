import React, { useEffect, useState } from "react";
import "./Home.css";
import InputArea from "./InputArea";
import { API_KEY } from "../../contants";
import loading_img from "../../images/loading_img.jpg";

const Home = () => {
  const [searchQueryNews, setSearchQueryNews] = useState("bitcoin");
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // taking the search input from the input area component
  function SearchNews(inputText) {
    console.log(inputText);
    setSearchQueryNews(inputText);
  }

  // fetching data from the search input and updating the newsArticles state
  // Fetching top 10 trending news articles by using pageSize
  useEffect(() => {
    const abortController = new AbortController();
    fetch(
      `https://newsapi.org/v2/everything?q=${searchQueryNews}&pageSize=10&page=1&from=2022-12-10&sortBy=publishedAt`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then(
        (response) => {
          setError(null);
          setIsLoaded(true);
          setNewsArticles(response.articles);
        },
        (error) => {
          setError(error);
        }
      );
    return () => {
      abortController.abort();
    };
  }, [searchQueryNews]);

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
        <div className="HomeMain">
          <h1 className="HomeTitle">
            <span>Byte</span> News
          </h1>
          <p className="HomeDescription">
            Your one stop for latest news article
          </p>
        </div>
        <InputArea onSearch={SearchNews} />

        <div className="articlesNews">
          {newsArticles.map((article, index) => (
            <div key={index} className="post">
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

export default Home;
