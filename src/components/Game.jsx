import './Game.css';

function Game({ verifyLetter }) {
  return (
    <div>
      <button onClick={verifyLetter}>Finalizar Jogo</button>
    </div>
  )
}

export default Game;