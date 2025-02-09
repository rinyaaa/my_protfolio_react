import React from "react";

function Licenses() {
  return (
    <section id="licenses" className="licenses-container">
      <h2 className="license-title">Licenses</h2>
      <div className="license-list">
        <div className="license-item">
          <p className="license-date">R3.9月26日</p>
          <p className="license-name">全商情報処理検定プログラミング部門２級</p>
        </div>
        <div className="license-item">
          <p className="license-date">R4.9月25日</p>
          <p className="license-name">全商情報処理検定ビジネス情報部門１級</p>
        </div>
        <div className="license-item">
          <p className="license-date">R4.12月27日</p>
          <p className="license-name">基本情報技術者試験</p>
        </div>
      </div>
    </section>
  );
}

export default Licenses;
