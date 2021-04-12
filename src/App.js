import { useEffect, useState } from 'react';
import './App.scss';
import ColorCard from './components/ColorCard';
import timeout from './utils/util';

function App() {
  const [isOn, setIsOn] = useState(false);
  const colorList = ["green", "red", "yellow", "blue"];
  const initPlay = {
    isDisplay: false, 
    colors: [],
    score: 0,
    userPlay: false,
    userColors: []
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = ("");

  function startHandle() {
    setIsOn(true);
  }

  useEffect(() => {
    if(isOn) {
      setPlay({...initPlay, isDisplay:true})
    } else {
      setPlay(initPlay)
    }
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorList[Math.floor(Math.random()*4)]

      const copyColors = [...play.colors];
      copyColors.push(newColor);
      setPlay({...play, color:copyColors});
    }
  }, [isOn, play.isDisplay])

  useEffect(() => {
    if(isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
  }, [isOn, play.isDisplay, play.colors.length]);

  async function displayColors() {
    for (let i=0; i<play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(1000);
      // setFlashColor("");
      // await timeout(1000);
    }
  }
   
  return (
    <div className="App">
      <header className="App-header">
      <div className="card__wrapper">
        {colorList && colorList.map((value) => (
          <ColorCard flash={flashColor === value} color={value}/>
        ))}
      </div>
      { !isOn && !play.score && (
        <button onClick={startHandle} className="start__button">
          Start
          </button>
      )}

      { isOn && (play.isDisplay || play.userPlay) && (
       <div className="score">{play.score}</div>
      )}
      </header>
    </div>
  );
}

export default App;
