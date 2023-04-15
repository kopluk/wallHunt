import React, {FC, useEffect, useMemo, useState} from 'react';
import BoardComponent from "../components/BoardComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {click} from "../helpers/click";
import {restart} from "../helpers/restart";
import InfoComponent from "../components/InfoComponent";
import {LevelsEntities} from "../models/levels/LevelsEntities";
import NavBar from "../components/NavBar";
import {useNavigate, useParams} from "react-router-dom";
import {levelTemplates} from "../models/levels/levelTemplates";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {levelBeforeUrlLevelIsNotCompleted} from "../helpers/levelBeforeUrlLevelIsNotCompleted";
import {createLevelTemplate} from "../helpers/createLevelTemplate";

const LevelPage: FC = () => {
  const {completedLevels} = useTypedSelector(state => state.completedLevels)

  const params = useParams()
  const urlLevelNumber: number = Number(params.levelNumber);

  const {levelMaxMoves, levelEntities, levelNumber} = useMemo(() => {
    return createLevelTemplate(urlLevelNumber)
  }, [urlLevelNumber])

  const [board, setBoard] = useState(new Board(levelMaxMoves, levelEntities, levelNumber))

  useEffect(() => {
    restart(board, setBoard)
  }, [])

  const navigate = useNavigate();
  useEffect(() => {
    levelBeforeUrlLevelIsNotCompleted(navigate, completedLevels, urlLevelNumber);

    const newBoard = new Board(levelMaxMoves, levelEntities, levelNumber)
    newBoard.initCells();
    newBoard.addEntities();
    newBoard.highLightCells();
    setBoard(newBoard)
  }, [urlLevelNumber])

  function handleClick(cell: Cell) {
    click(cell, board, setBoard)
  }

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