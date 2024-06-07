import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Licenses from "./components/License";
import Timeline from "./components/Timeline";

import "./style.css";
import "./nav.css";
import "./profile.css";
import "./skills.css";
import "./timeline.css";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
      <Licenses />
      <Timeline />
    </div>
  );
}

export default App;
