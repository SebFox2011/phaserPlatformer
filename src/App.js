import React from 'react';
import  {IonPhaser}  from "@ion-phaser/react"
import {platformer} from './phaser/platformer'
import './App.css';

function App() {

  return (
    <div className="App">
      <IonPhaser game={platformer}/>
    </div>
  )
}

export default App;