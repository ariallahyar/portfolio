import React from "react";
import "./Header.css";
import headshot from "../assets/allahyar.jpg";
import linkedin from "../assets/linkedin_white.svg";
import github from "../assets/github_white.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-socials-groups">
          <a href="https://www.linkedin.com/in/ariannaallahyar/">
            <img className="header-social-icon" src={linkedin} alt="LinkedIn logo"></img>
          </a>
          <a href="https://github.com/ariallahyar">
            <img className="header-social-icon" src={github} alt="GitHub logo"></img>
          </a>
        </div>
        <img className="header-image" src={headshot} alt="headshot of Arianna"></img>
        <div className="header-text-group">
          <p className="header-portfolio">
            PORTFOLIO: <span className="header-name">ARIANNA ALLAHYAR</span>
          </p>
          <h1>web developer</h1>
          <p className="header-title-extra">with sustainable mobility in focus</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
