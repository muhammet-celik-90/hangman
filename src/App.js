import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import HangTree from "./components/HangTree";
import Words from "./components/Words";
import WORDS from "./words.json"

function App() {

  const wrongCount = useSelector((state) => state.wrongCalc.value)
  const winState = useSelector((state) => state.win.value)

  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    if (wrongCount === 11) {
      setGameOver(true)
    }
  }, [wrongCount])

  const handleClick = e => {
    e.preventDefault();
    window.location.reload();
  }


  return (
    <Container fluid>
      {gameOver &&
        <div className="gameover-bg">
          <div className="gameover-area">
            <h1 className="gameover-title">GAME OVER</h1>
            <h3 className="gameover-subtitle">KAYBETTİN!</h3>
            <button className="btn" onClick={handleClick}>Yeniden Başla</button>
          </div>
        </div>
      }

      {winState &&
        <div className="gameover-bg">
          <div className="gameover-area">
            <h1 className="gameover-title">KAZANDIN !</h1>
            <h3 className="gameover-subtitle">TEBRİKLER</h3>
            <button className="btn" onClick={handleClick}>Yeniden Başla</button>
          </div>
        </div>
      }

      <div>
        <Card className="main-header"><h1>Adam Asmaca Oyunu (Hangman)</h1></Card>
        <Words words={WORDS} />
      </div>
      <HangTree />
    </Container>

  );
}

export default App;
