import React from "react";
import "../App.css";

function NavBar() {
  return (
    <header>
      <div className="nav-container">
        <ul>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#portfolio">
            <li>Portfolio</li>
          </a>
          <a href="#resume">
            <li>Resume</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
