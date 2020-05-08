import React from "react";

import img from "../../assets/pen.jpg";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">
        Famous Random Quotes...
        <span>
          <img className="img" src={img} alt="" />
        </span>
      </h1>
    </nav>
  );
};

export default Navbar;
