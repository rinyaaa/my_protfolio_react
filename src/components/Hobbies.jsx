import React from "react";
import "../hobbies.css";
import { Icon } from "@iconify/react";

const hobbiesList = [
  {
    name: "Swimming",
    icon: "map:swimming",
    description:
      "中学校から初めて高校までは競技でやっていました。(九州大会出場)\n今は運動程度で泳いでいます",
  },
  {
    name: "Cooking",
    icon: "material-symbols:cooking-rounded",
    description:
      "愛知に来てから作ってたらはまった。最近ではお菓子なども作っている",
  },
  {
    name: "Programming",
    icon: "material-symbols:keyboard-previous-language",
    description:
      "高校の時からペチペチしてる。ペチペチしてる。最近はフロント系をやっている",
  },
  {
    name: "Travel",
    icon: "material-symbols:googler-travel",
    description: "春休みに北海道に行ったり、初の海外旅行に行く",
  },
  {
    name: "Gaming",
    icon: "ph:game-controller-fill",
    description: "FPSやRPGが好き。最近はApex Legendsをやっている",
  },
];

function Hobbies() {
  return (
    <section id="hobby">
      <h2>HOBBIES</h2>
      <ul className="hobby-list">
        {hobbiesList.map((hobby) => (
          <li key={hobby.name}>
            <h3>
              <Icon
                className="hobby-icon"
                icon={hobby.icon}
                width={40}
                hanging={50}
              />
              {hobby.name}
            </h3>
            <p>{hobby.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Hobbies;
