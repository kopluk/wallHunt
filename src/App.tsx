import React, {useEffect, useState} from 'react';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import './App.css'
import {Cell} from "./models/Cell";
import {restart} from "./utils/restart";
import {click} from "./utils/click";
import InfoComponent from "./components/InfoComponent";
import LevelPage from "./pages/LevelPage";

function App() {
  const [board, setBoard] = useState(new Board(7))

  function handleClick(cell: Cell) {
    click(cell, board, setBoard)
  }

  useEffect(() => {
    restart(board, setBoard)
  }, [])

  return (
    <div className="app">
      {/*<LevelPage />*/}
      <InfoComponent restart={() => restart(board, setBoard)} board={board} />
      <BoardComponent board={board} click={handleClick}/>
    </div>
  );
}

export default App;
