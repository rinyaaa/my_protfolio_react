import React, { useState } from 'react';
import html from './images/html.png';


function Skills() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [expanded, setExpanded] = useState(false);

  // リストアイテムをクリックしたときのハンドラー
  const handleItemClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null);
      setExpanded(false);
    } else {
      setSelectedItem(item);
      setExpanded(true);
    }
  };

  return (
    <section id="projects" className={expanded ? 'expanded' : ''}>
      <h2>Skills</h2>
      <div className="yok">
        <ul className="tec">
          <li onClick={() => handleItemClick('HTML')}><img className="skill_img_wrap" src={html} alt="html" /></li>
          <li onClick={() => handleItemClick('CSS')}>CSS</li>
          {/* 他のリストアイテムについても同様に処理を追加 */}
        </ul>
        {/* 選択されたアイテムに関連する情報を表示 */}
        {selectedItem && (
          <div className="dropdown">
            {selectedItem === 'HTML' && <p>高３の時から打ってる。</p>}
            {selectedItem === 'CSS' && <p>CSSに関する情報をここに表示</p>}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
