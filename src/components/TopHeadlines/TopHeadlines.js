import React, { useEffect, useState } from "react";
import "./TopHeadlines.css";
import { API_KEY } from "../../contants";
import loading_img from "../../images/loading_img.jpg";
import ArticleCard from "../ArticleCard/ArticleCard";
import Intro from "../Home/Intro";

const TopHeadlines = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categoryNews, setCategoryNews] = useState("Sports");
  console.log(articles);

  // categories news for India
  const categories = [
    {
      id: 1,
      name: "Sports",
    },
    {
      id: 2,
      name: "Business",
    },
    {
      id: 3,
      name: "Technology",
    },
    {
      id: 4,
      name: "Entertainment",
    },
  ];

  // updating the category state for the click user in the category object
  function handleCategoryNewsClick(name) {
    setCategoryNews(name);
    console.log(categoryNews);
  }

  // Fetching top 10 trending news articles by using pageSize
  // updating the results into articles state
  useEffect(() => {
    const abortController = new AbortController();
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${categoryNews}&pageSize=10&page=1`,
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
  }, [categoryNews]);

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
        <Intro />
        <h2>Trending {categoryNews} news in India</h2>

        {/* printing categories and let user to select */}
        <div className="categoryNews">
          {categories.map((category) => (
            <div
              onClick={() => handleCategoryNewsClick(category.name)}
              key={category.id}
              value={category.name}
            >
              {category.name}
            </div>
          ))}
        </div>

        {/* orinting articles */}
        <ArticleCard articles={articles} />
      </>
    );
  }
};

export default TopHeadlines;
