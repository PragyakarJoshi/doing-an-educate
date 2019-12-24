import React from 'react';
import './App.css';
import content from './constants/content.json';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import InfoBlock from './Components/InfoBlock';
import Catalogue from './Components/Catalogue/Catalogue';

function App() {
  return (
    <div className="App">
	    <Navbar />
      <Landing tagline={content.tagline}/>
      <InfoBlock infos={content.infoBlock}/>
      <Catalogue courses={content.courses} />
    </div>
  );
}

export default App;
