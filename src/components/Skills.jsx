import React, { useState } from "react";
import { Icon } from "@iconify/react";

// スキルデータの定義
const skillData = [
  {
    name: "HTML",
    icon: "logos:html-5",
    description: "高校３年の授業から使ってる。",
  },
  {
    name: "CSS",
    icon: "logos:css-3",
    description:
      "高校３年の授業から使ってる。ある程度のデザインはできるが、アニメーションやレスポンシブルデザインが苦手である",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    description: "高校３年の時から使ってる。ToDoリストくらいなら作れる。",
  },
  {
    name: "C",
    icon: "logos:c",
    description: "file操作が苦手。簡単なゲームができるくらい",
  },
  {
    name: "React",
    icon: "logos:react",
    description:
      "最近特に勉強してる。このportfolioもreactで作ってる。今後はtsのフレームワークで使っていきたい",
  },
  {
    name: "GitHub",
    icon: "logos:github-icon",
    description:
      "pushくらいしか使ってない。ブランチなどは理解できるが使用したことがない。今後チーム開発の時に実践したい。",
  },
];

function Skills() {
  // 選択されたスキルを管理するステート
  const [selectedItem, setSelectedItem] = useState(null);

  // スキルアイテムがクリックされたときのハンドラー
  const handleItemClick = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
  };

  return (
    <section id="projects" className={selectedItem ? "expanded" : ""}>
      <h2>Skills</h2>
      <div className="yok">
        {/* スキル一覧を表示 */}
        <ul className="tec">
          {skillData.map((skill) => (
            <li key={skill.name} onClick={() => handleItemClick(skill)}>
              <Icon className="skill_icon" icon={skill.icon} />
            </li>
          ))}
        </ul>

        {/* 選択されたスキルの詳細情報を表示 */}
        {selectedItem && (
          <div className="dropdown">
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
