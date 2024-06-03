import React from 'react';
import git from './images/github.png';
import x from './images/x.png';


function Header() {
  return (
    <header>
          <div className="link_icon">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img className="img_wrap" src={git} alt="GitHub" />
          </a>
          
          <a href="https://x.com/r2e8l?s=21&t=Psy62Q1lSvn6-zXj3_gXZQ" target="_blank" rel="noopener noreferrer">
            <img  className="img_wrap"  src={x} alt="X" />
          </a>
          </div>
        
        <h1>私のポートフォリオ</h1>
      
      <nav>
            <ul class="gnavi">
                <li class="current"><a href="#about"><span>私について</span></a></li>
                <li><a href="#"><span>プロジェクト</span></a></li>
                <li><a href="#"><span>問い合わせ</span></a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
