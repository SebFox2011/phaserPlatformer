import React from 'react';
import  {IonPhaser}  from "@ion-phaser/react"
import {game, config} from './phaser/exemple'

import './App.css';

function App() {

  return (
    <div className="App">
      <IonPhaser game={game} initialize={config} />
    </div>
  )
}

export default App;