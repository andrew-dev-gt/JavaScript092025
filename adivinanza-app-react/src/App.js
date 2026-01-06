
import React from 'react';
import './App.css';
import Titulo from './titulo';
import Juego from './juego';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Juego limite='10'/>
    </div>
  );
}

export default App;
