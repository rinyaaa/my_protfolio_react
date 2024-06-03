import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Licenses from './components/License';

import './style.css';
import './nav.css';
import './profile.css';
import './skills.css';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
      <Licenses />
    </div>
  );
}

export default App;
