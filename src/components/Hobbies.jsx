import React from "react";
import "../hobbies.css";
import { Icon } from "@iconify/react";

function Hobbies() {
  return (
    <section id="hobby">
      <h2>HOBBIES</h2>
      <ul className="hobby-list">
        <li>
          <h3>
            <Icon
              className="hobby_icon"
              width={40}
              height={50}
              icon="map:swimming"
            />
            Swimming
          </h3>

          {
            "中学校から初めて高校までは競技でやっていました。(九州大会出場)\n今は運動程度で泳いでいます"
          }
        </li>
        <li>
          <h3>
            <Icon
              className="hobby_icon"
              width={40}
              hanging={50}
              icon="material-symbols:cooking-rounded"
            />
            Cooking
          </h3>
          {"愛知に来てから作ってたらはまった。最近ではお菓子なども作っている"}
        </li>
        <li>
          <h3>
            <Icon
              className="hobby_icon"
              width={40}
              hanging={50}
              icon="material-symbols:keyboard-previous-language"
            />
            Programming
          </h3>
          {"高校の時からペチペチしてる。ペチペチしてるだけでなにもできない。"}
        </li>
        <li>
          <h3>
            <Icon
              className="hobby_icon"
              width={40}
              hanging={50}
              icon="material-symbols:googler-travel"
            />
            Travel
          </h3>
          {
            "最近入ってないが大分の温泉巡りなどいった。誰かどっか連れていってーーーーー"
          }
        </li>
        <li>
          <h3>
            <Icon
              className="hobby_icon"
              width={40}
              hanging={50}
              icon="ph:game-controller-fill"
            />
            Gaming
          </h3>
          {
            "中学校くら今でガチってた。今はあんまりやってないですけどapexとかvaloとか色々やってました。今はストレス発散でGTAします"
          }
        </li>
      </ul>
    </section>
  );
}

export default Hobbies;
