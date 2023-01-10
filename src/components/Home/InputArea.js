import React, { useState } from "react";
import "./Home.css";

const InputArea = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");

  function handleInputText(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  return (
    <>
      <div className="inputField">
        <input
          onChange={handleInputText}
          value={inputText}
          placeholder="Bitcoin"
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
    </>
  );
};

export default InputArea;
