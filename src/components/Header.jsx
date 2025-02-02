import React, { useState } from "react";
import git from "./images/github.png";
import x from "./images/x.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="link_icon">
        <a
          href="https://github.com/rinyaaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img_wrap" src={git} alt="GitHub" />
        </a>
        <a
          href="https://x.com/r2e8l?s=21&t=Psy62Q1lSvn6-zXj3_gXZQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img_wrap" src={x} alt="X" />
        </a>
      </div>
      <h1>Myportfolio</h1>
      <nav>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar top-bar"></div>
          <div className="bar middle-bar"></div>
          <div className="bar bottom-bar"></div>
        </div>
        <ul className={`gnavi ${menuOpen ? "active" : ""}`}>
          <li className="current">
            <a href="#about">
              <span>私について</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>プロジェクト</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>問い合わせ</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
