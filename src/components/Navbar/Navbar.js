import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="NavMain">
        <div className="NavLogo">
          <span>BYTE</span> NEWS
        </div>
        <div className="Navlinks">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/top-headlines">
            <div>Top National Headlines</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
