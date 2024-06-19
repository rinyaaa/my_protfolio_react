import React, { useState } from "react";
import { Icon } from "@iconify/react";

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
            <Icon className="skill_icon" icon="logos:html-5" />
          </li>
          <li onClick={() => handleItemClick("CSS")}>
            <Icon className="skill_icon" icon="logos:css-3" />
          </li>
          <li onClick={() => handleItemClick("JavaScript")}>
            <Icon className="skill_icon" icon="logos:javascript" />
          </li>
          <li onClick={() => handleItemClick("C")}>
            <Icon className="skill_icon" icon="logos:c" />
          </li>
          <li onClick={() => handleItemClick("React")}>
            <Icon className="skill_icon" icon="logos:react" />
          </li>
          <li onClick={() => handleItemClick("Github")}>
            <Icon className="skill_icon" icon="logos:github-icon" />
          </li>
          {/* 他のリストアイテムについても同様に処理を追加 */}
        </ul>
        {/* 選択されたアイテムに関連する情報を表示 */}
        {selectedItem && (
          <div className="dropdown">
            {selectedItem === "HTML" && (
              <p>
                <h3>HTML</h3>
                {"高校３年の授業から使ってる。"}
              </p>
            )}

            {selectedItem === "CSS" && (
              <p>
                <h3>CSS</h3>
                {
                  "高校３年の授業から使ってる。まだ初期のことしかできなくて幅などの計算が苦手"
                }
              </p>
            )}
            {selectedItem === "JavaScript" && (
              <p>
                <h3>Javascript</h3>
                {
                  "高校３年の時から使ってる。簡単なものしか作れなくまだまだ勉強中"
                }
              </p>
            )}
            {selectedItem === "C" && (
              <p>
                <h3>C</h3>
                {"大学の授業から触り始めたんで特に何もつくれない"}
              </p>
            )}
            {selectedItem === "React" && (
              <p>
                <h3>React</h3>
                {"最近特に勉強してる。このportfolioもreactで作ってる"}
              </p>
            )}
            {selectedItem === "Github" && (
              <p>
                <h3>Github</h3>
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
