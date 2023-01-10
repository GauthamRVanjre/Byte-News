import React, { useState } from "react";
import "./Home.css";

const InputArea = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

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

  function handleInputText(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function handleCategoryNewsClick(name) {
    setInputText(name);
    console.log(inputText);
  }

  return (
    <>
      <div className="inputField">
        <input
          onChange={handleInputText}
          value={inputText}
          placeholder="Enter a keyword like 'Bitcoin'"
          type="text"
        />
        <button
          onClick={() => {
            onSearch(inputText);
            setInputText("");
          }}
          className="submitBtn"
        >
          Search
        </button>
      </div>

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
    </>
  );
};

export default InputArea;
