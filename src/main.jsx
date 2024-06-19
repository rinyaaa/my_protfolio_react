import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import Load from "./components/Load.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Load />
    <App />
  </React.StrictMode>
);
