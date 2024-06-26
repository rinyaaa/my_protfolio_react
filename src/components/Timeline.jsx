import React from "react";

function Timeline() {
  return (
    <div className="timecolor">
      <h2>History</h2>

      <section class="timeline">
        <div class="container left">
          <div class="content">
            <h3>
              誕生日<p>2005年7月</p>
            </h3>
            <p>長崎県で生まれる</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h3>
              高校入学<p>2021-2024</p>
            </h3>
            <p>長崎県立諫早商業高等学校情報科</p>
          </div>
        </div>
        <div class="container left">
          <div class="content">
            <h3>
              愛知工業大学入学<p>2024-2028（予定）</p>
            </h3>
            <p>愛知工業大学情報科学科コンピューターシステム専攻</p>
          </div>
        </div>
        <div class="container right">
          <div class="content">
            <h3>
              システム工学研究会入サ<p>2024年4月</p>
            </h3>
            <p>システム工学研究会にはいる</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
