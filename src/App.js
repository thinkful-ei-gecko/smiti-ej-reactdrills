import React from 'react';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun';
import Accordion from './state-drills/Accordion';
import Sections from './state-drills/Sections';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        <Bomb />
        <RouletteGun bulletInChamber={8}/>
        <Accordion sections={Sections}/>
      </header>
    </div>
  );
}

export default App;