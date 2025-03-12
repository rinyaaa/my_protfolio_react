import React, { useState } from "react";
import git from "./images/github.png";
import x from "./images/x.png";

const socialLinks = [
  { href: "https://github.com/rinyaaa", src: git, alt: "GitHub" },
  {
    href: "https://x.com/r2e8l?s=21&t=Psy62Q1lSvn6-zXj3_gXZQ",
    src: x,
    alt: "X",
  },
];

const menuItems = [
  { href: "#about", label: "私について" },
  { href: "#projects", label: "プロジェクト" },
  { href: "#contact", label: "問い合わせ" },
];

function SocialLinks() {
  return (
    <div className="link_icon">
      {socialLinks.map(({ href, src, alt }) => (
        <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
          <img className="img_wrap" src={src} alt={alt} />
        </a>
      ))}
    </div>
  );
}

function MenuToggle({ menuOpen, toggleMenu }) {
  return (
    <div
      className={`menu-toggle ${menuOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="bar top-bar"></div>
      <div className="bar middle-bar"></div>
      <div className="bar bottom-bar"></div>
    </div>
  );
}

function Navigation({ menuOpen, currentSection, setCurrentSection }) {
  return (
    <ul className={`gnavi ${menuOpen ? "active" : ""}`}>
      {menuItems.map(({ href, label }) => (
        <li
          key={label}
          className={currentSection === href ? "current" : ""}
          onClick={() => setCurrentSection(href)}
        >
          <a href={href}>
            <span>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("#about"); // 最初は #about を選択状態にする

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <SocialLinks />
      <h1>Myportfolio</h1>
      <nav>
        <MenuToggle menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <Navigation
          menuOpen={menuOpen}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      </nav>
    </header>
  );
}

export default Header;
