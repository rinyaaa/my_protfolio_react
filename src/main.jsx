import React from "react";
import { createRoot } from "react-dom/client";

import Load from "./components/Load.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Load />
  </React.StrictMode>
);
