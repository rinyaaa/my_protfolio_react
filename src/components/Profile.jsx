import React from "react";
import ira from "./images/ira.png";

function Profile() {
  return (
    <section id="about">
      <h2>Profile</h2>
      <div className="pro-text">
        <img src={ira} alt="Profile" />
        <p className="text">
          {
            "こんにちは!初めまして。石丸凜弥と申します。\n2005年7月18日生まれ長崎出身です。\nB1の愛知工業のコンピューターシステム専攻です\nまだまだプログラムは勉強中です。\n最近はReactを特にしてます\nよろしくお願いします"
          }
        </p>
      </div>
    </section>
  );
}

export default Profile;
