import './App.css';
import { useState } from 'react';

import { wordsList } from './data/wordsData';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


function App() {
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);
  
  const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"}
  ];
  const [gameStage, setGameStage] = useState(stages[0].name);
  
  function pickWordAndCategory() {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  }

  function startGame() {
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }

  function verifyLetter(letter) {
    console.log(letter);
  }

  function retry() {
    setGameStage(stages[0].name);
  }
  
  return (
    <div>
      { gameStage === "start" && <StartScreen startGame={startGame} /> }
      { gameStage === "game" && <Game
       verifyLetter={verifyLetter}
       pickedCategory={pickedCategory}
       pickedWord={pickedWord}
       letters={letters}
       guessedLetters={guessedLetters}
       wrongLetters={wrongLetters}
       guesses={guesses}
       score={score}
      /> }
      { gameStage === "end" && <GameOver retry={retry} /> }
    </div>
  )
}

export default App
