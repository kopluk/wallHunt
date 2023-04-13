import React, {FC, useEffect, useState} from 'react';
import BoardComponent from "../components/BoardComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {click} from "../utils/click";
import {restart} from "../utils/restart";
import InfoComponent from "../components/InfoComponent";
import {LEVEL_1, Levels} from "../models/levels/Levels";
import NavBar from "../components/NavBar";
import {useParams} from "react-router-dom";
import {levelsRes} from "../models/levels/levelsRes";

const LevelPage: FC = () => {
  const params = useParams()
  let levelEntities = LEVEL_1;
  let levelMaxMoves = 1;
  levelsRes.forEach(level => {
    if (level.levelNumber === Number(params.levelNumber)) {
      levelEntities = level.entities
      levelMaxMoves = level.maxMoves
    }
  })

  const [board, setBoard] = useState(new Board(levelMaxMoves, levelEntities))

  function handleClick(cell: Cell) {
    click(cell, board, setBoard)
  }

  useEffect(() => {
    const newBoard = new Board(levelMaxMoves, levelEntities)
    newBoard.initCells();
    newBoard.addEntities();
    newBoard.highLightCells();
    setBoard(newBoard)
  }, [params])

  useEffect(() => {
    restart(board, setBoard)
  }, [])

  return (
    <div className="app">
      <div className={'appContainer'}>
        <NavBar/>
        <div className={'appPlayZone'}>
          <InfoComponent restart={() => restart(board, setBoard)} board={board}/>
          <BoardComponent board={board} click={handleClick}/>
        </div>
      </div>
    </div>
  );
};

export default LevelPage;