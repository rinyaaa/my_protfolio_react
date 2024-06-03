import React from 'react';

function Skills() {
  return (
    <section id="projects">
      <h2>Skills</h2>
      <div className="yok">
        <ul className="tec">
          <li>言語</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>C</li>
          <li>VBA</li>
        </ul>

        <ul className="tec">
          <li>経験年数</li>
          <li>1年</li>
          <li>1年</li>
          <li>半年</li>
          <li>最近</li>
          <li>2年</li>
        </ul>

        <ul className="tec">
          <li>どのくらいできるか</li>
          <li><span className="starsorange">★ ★ ★</span><span className="stars gray"> ☆ ☆</span></li>
          <li><span className="starsorange">★ ★</span><span className="stars gray"> ☆ ☆ ☆</span></li>
          <li><span className="starsorange">★</span><span className="stars gray"> ☆ ☆ ☆ ☆</span></li>
          <li><span className="starsorange">★</span><span className="stars gray"> ☆ ☆ ☆ ☆</span></li>
          <li><span className="starsorange">★ ★ ★</span><span className="stars gray"> ☆ ☆</span></li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
