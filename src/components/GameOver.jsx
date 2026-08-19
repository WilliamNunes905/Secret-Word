import './GameOver.css'

function GameOver({ retry }) {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>Você perdeu! Tente novamente.</h2>
      <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver;