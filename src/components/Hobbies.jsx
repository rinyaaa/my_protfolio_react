import React from "react";
import "../hobbies.css";

function Hobbies() {
  return (
    <section id="hobby">
      <h2>HOBBIES</h2>
      <ul className="hobby-list">
        <li>
          <h3>Swimming</h3>
          {
            "中学校から初めて高校までは競技でやっていました。(九州大会出場)\n今は運動程度で泳いでいます"
          }
        </li>
        <li>
          <h3>Cooking</h3>
          Exploring new places and experiencing different cultures is my
          passion.
        </li>
        <li>
          <h3>Programing</h3>
          Experimenting with new recipes and cuisines in the kitchen is a
          favorite pastime.
        </li>
        <li>
          <h3>travel</h3>
          Capturing moments through the lens of my camera is a hobby I deeply
          enjoy.
        </li>
        <li>
          <h3>gaming</h3>
          Capturing moments through the lens of my camera is a hobby I deeply
          enjoy.
        </li>
      </ul>
    </section>
  );
}

export default Hobbies;
