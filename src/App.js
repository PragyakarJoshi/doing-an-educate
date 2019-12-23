import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import InfoBlock from './Components/InfoBlock';

import content from './constants/content.json';

function App() {
  return (
    <div className="App">
	    <Navbar />
      <Landing tagline={content.tagline}/>
      <InfoBlock infos={content.infoBlock}/>
    </div>
  );
}

export default App;
