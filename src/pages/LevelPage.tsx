import React, {FC, useEffect, useState} from 'react';
import BoardComponent from "../components/BoardComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {click} from "../utils/click";
import {restart} from "../utils/restart";
import InfoComponent from "../components/InfoComponent";
import {LEVEL_1} from "../models/levels/LevelsEntities";
import NavBar from "../components/NavBar";
import {useParams} from "react-router-dom";
import {levelTemplates} from "../models/levels/levelTemplates";
import {CompletedLevel} from "../models/levels/completedLevels";

const LevelPage: FC = () => {
    // const [completedLevels, setCompletedLevels] = useState<CompletedLevel>({
    //   1: true,
    //   2: false,
    //   3: false,
    //   4: false,
    //   5: false,
    //   6: false,
    //   7: false,
    // })

  const params = useParams()
  let levelEntities = LEVEL_1;
  let levelMaxMoves = 1;
  levelTemplates.forEach(level => {
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
        <NavBar />
        <div className={'appPlayZone'}>
          <InfoComponent restart={() => restart(board, setBoard)} board={board}/>
          <BoardComponent board={board} click={handleClick} levelNumber={Number(params.levelNumber)}/>
        </div>
      </div>
    </div>
  );
};

export default LevelPage;