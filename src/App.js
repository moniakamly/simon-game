import { useState } from 'react';
import './App.scss';
import ColorCard from './components/ColorCard';

function App() {
  const [isOn, setIsOn] = useState(false);
  const colorList = ["green", "red", "yellow", "blue"];
  const initPlay = {
    isDisplay: false, 
    colors: [],
    score: 0,
    userState: false,
    userColors: []
  };

  const [play, setPlay] = useState(initPlay);

  function startHandle() {
    setIsOn(true);
  }
   
  return (
    <div className="App">
      <header className="App-header">
      <div className="card__wrapper">
        {colorList && colorList.map((value) => (
          <ColorCard color={value}/>
        ))}
      </div>
      <button onClick={startHandle} className="start__button">Start</button>
      </header>
    </div>
  );
}

export default App;
