import React from 'react';
import './App.css';
import content from './constants/content.json';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import InfoBlock from './Components/InfoBlock';
import Catalogue from './Components/Catalogue/Catalogue';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <div className="web-view">
        <Navbar />
        <Landing tagline={content.tagline}/>
        <InfoBlock infos={content.infoBlock}/>
        <Catalogue courses={content.courses} />
      </div>
      <div className="mobile-view">
        <NotFound message={'Mobile view not supported yet'} />
      </div>
    </div>
  );
}

export default App;
