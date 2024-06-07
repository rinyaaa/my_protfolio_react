import React, { useState } from "react";
import html from "./images/html.png";

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
    <section id="projects" className={expanded ? "expanded" : ""}>
      <h2>Skills</h2>
      <div className="yok">
        <ul className="tec">
          <li onClick={() => handleItemClick("HTML")}>
            <img className="skill_img_wrap" src={html} alt="html" />
          </li>
          <li onClick={() => handleItemClick("CSS")}>
            <img
              className="skill_img_wrap"
              width="96"
              height="96"
              src="https://img.icons8.com/color/96/css3.png"
              alt="css3"
            />
          </li>
          <li onClick={() => handleItemClick("JavaScript")}>
            <img
              className="skill_img_wrap"
              width="96"
              height="96"
              src="https://img.icons8.com/nolan/96/javascript-logo.png"
              alt="javascript-logo"
            />
          </li>
          <li onClick={() => handleItemClick("C")}>
            <img
              className="skill_img_wrap"
              width="96"
              height="96"
              src="https://img.icons8.com/color/96/c-programming.png"
              alt="c-programming"
            />
          </li>
          <li onClick={() => handleItemClick("React")}>
            <img
              className="skill_img_wrap"
              width="80"
              height="80"
              src="https://img.icons8.com/officel/80/react.png"
              alt="react"
            />
          </li>
          <li onClick={() => handleItemClick("Github")}>
            <img
              className="skill_img_wrap"
              width="90"
              height="90"
              src="https://img.icons8.com/ios-glyphs/90/github.png"
              alt="github"
            />
          </li>
          {/* 他のリストアイテムについても同様に処理を追加 */}
        </ul>
        {/* 選択されたアイテムに関連する情報を表示 */}
        {selectedItem && (
          <div className="dropdown">
            {selectedItem === "HTML" && <p>{"高校３年の授業から使ってる。"}</p>}
            {selectedItem === "CSS" && (
              <p>
                {
                  "高校３年の授業から使ってる。まだ初期のことしかできなくて幅などの計算が苦手"
                }
              </p>
            )}
            {selectedItem === "JavaScript" && (
              <p>
                {
                  "高校３年の時から使ってる。簡単なものしか作れなくまだまだ勉強中"
                }
              </p>
            )}
            {selectedItem === "C" && (
              <p>{"大学の授業から触り始めたんで特に何もつくれない"}</p>
            )}
            {selectedItem === "React" && (
              <p>{"最近特に勉強してる。このportfolioもreatcで作ってる"}</p>
            )}
            {selectedItem === "Github" && (
              <p>
                {"pushくらいしか使ってない。まだブランチとか何も理解してない"}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
