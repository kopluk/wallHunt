import React, {FC, useEffect, useState} from 'react';
import {Level_1, Levels} from "../models/Levels";
import BoardComponent from "../components/BoardComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {click} from "../utils/click";
import {restart} from "../utils/restart";
import InfoComponent from "../components/InfoComponent";

const LevelPage: FC = () => {
  const [board, setBoard] = useState(new Level_1(8))

  function handleClick(cell: Cell) {
    click(cell, board, setBoard)
  }

  useEffect(() => {
    restart(board, setBoard)
  }, [])

  return (
    <div className="app">
      <InfoComponent restart={() => restart(board, setBoard)} board={board} />
      <BoardComponent board={board} click={handleClick}/>
    </div>
  );
};

export default LevelPage;