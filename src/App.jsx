import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Licenses from "./components/License";
import Timeline from "./components/Timeline";
import Hobbies from "./components/Hobbies";

import "./style.css";
import "./nav.css";
import "./profile.css";
import "./skills.css";
import "./timeline.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Profile />
        <Skills />
        <Licenses />
        <Timeline />
        <Hobbies />
      </main>
    </div>
  );
}

export default App;
