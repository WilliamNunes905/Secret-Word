import './App.css';
import { useState } from 'react';

import { wordsList } from './data/wordsData';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


function App() {
  const [words] = useState(wordsList);
  
  const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"}
  ];
  
  const [gameStage, setGameStage] = useState(stages[0].name);
  console.log(words);
  

  
  return (
    <div>
      { gameStage === "start" && <StartScreen /> }
      { gameStage === "game" && <Game /> }
      { gameStage === "end" && <GameOver /> }
    </div>
  )
}

export default App
