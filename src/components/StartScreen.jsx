import './StartScreen.css';


function StartScreen({ startGame }) {
  return (
    <div className="start_page">
        <h2>Secret Word</h2>
        <p>Clique no botão para começar o jogo!</p>
        <button onClick={startGame}>Começar o Jogo</button>
    </div>
  )
}

export default StartScreen;