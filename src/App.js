import './Font/font.css';
import './App.css';
import BingoBoard from "./components/BingoBoard/BingoBoard";
import WinEffect from "./components/WinEffect/WinEffect";
import {useState} from "react";

function App() {
  const [winEffectIsShowing, setWinEffectIsShowing] = useState(false);

  function showWinEffect() {
    setWinEffectIsShowing(true);
    setTimeout(() => setWinEffectIsShowing(false), 5800);
  }

  return (
    <div className="App">
      <BingoBoard showWinEffect={showWinEffect} />
      {winEffectIsShowing && <WinEffect/>}
    </div>
  );
}

export default App;
