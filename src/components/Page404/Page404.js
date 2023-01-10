import React from "react";
import error404 from "../../images/error404.svg";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="errorContainer">
      <img src={error404} alt="error 404" />
      <p>Whoops, that page is gone.</p>
    </div>
  );
};

export default Page404;
