import React, {FC, useEffect, useState} from 'react';
import BoardComponent from "../components/BoardComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {click} from "../utils/click";
import {restart} from "../utils/restart";
import InfoComponent from "../components/InfoComponent";
import {LEVEL_1} from "../models/levels/LevelsEntities";
import NavBar from "../components/NavBar";
import {useNavigate, useParams} from "react-router-dom";
import {levelTemplates} from "../models/levels/levelTemplates";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {levelBeforeUrlLevelIsNotCompleted} from "../utils/levelBeforeUrlLevelIsNotCompleted";

const LevelPage: FC = () => {
  const {completedLevels} = useTypedSelector(state => state.completedLevels)

  const params = useParams()
  const levelNumber: number = Number(params.levelNumber);

  let levelEntities = LEVEL_1;
  let levelMaxMoves = 1;
  levelTemplates.forEach(level => {
    if (level.levelNumber === levelNumber) {
      levelEntities = level.entities
      levelMaxMoves = level.maxMoves
    }
  })
  const [board, setBoard] = useState(new Board(levelMaxMoves, levelEntities))

  useEffect(() => {
    restart(board, setBoard)
  }, [])

  const navigate = useNavigate();
  useEffect(() => {
    levelBeforeUrlLevelIsNotCompleted(navigate, completedLevels, levelNumber);

    const newBoard = new Board(levelMaxMoves, levelEntities)
    newBoard.initCells();
    newBoard.addEntities();
    newBoard.highLightCells();
    setBoard(newBoard)
  }, [params])

  function handleClick(cell: Cell) {
    click(cell, board, setBoard)
  }

  return (
    <div className="app">
      <div className={'appContainer'}>
        <NavBar />
        <div className={'appPlayZone'}>
          <InfoComponent restart={() => restart(board, setBoard)} board={board}/>
          <BoardComponent board={board} click={handleClick} levelNumber={levelNumber}/>
        </div>
      </div>
    </div>
  );
};

export default LevelPage;