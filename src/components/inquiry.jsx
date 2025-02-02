import React, { useState } from "react";
import "./App.css"; // 必要ならCSSファイルを追加

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで送信処理を追加
    alert("送信されました！");
    setModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">氏名:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">電話番号:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">お問い合わせ内容:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="button" onClick={openModal}>
          確認画面
        </button>
      </form>
      {isModalOpen && (
        <Modal
          formData={formData}
          onClose={closeModal}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

function Modal({ formData, onClose, onSubmit }) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>入力内容の確認</h2>
        <p>
          <strong>氏名:</strong> {formData.name}
        </p>
        <p>
          <strong>電話番号:</strong> {formData.phone}
        </p>
        <p>
          <strong>メールアドレス:</strong> {formData.email}
        </p>
        <p>
          <strong>お問い合わせ内容:</strong> {formData.message}
        </p>
        <button onClick={onClose}>戻る</button>
        <button onClick={onSubmit}>送信</button>
      </div>
    </div>
  );
}

export default ContactForm;
