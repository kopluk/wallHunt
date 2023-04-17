import React, {FC, useEffect, useMemo, useState} from 'react';
import BoardComponent from "../components/BoardComponent";
import {Board} from "../models/Board";
import {Cell} from "../models/Cell";
import {click} from "../helpers/click";
import {restart} from "../helpers/restart";
import BoardInfoComponent from "../components/BoardInfoComponent";
import {useNavigate, useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {levelBeforeUrlLevelIsNotCompleted} from "../helpers/levelBeforeUrlLevelIsNotCompleted";
import {createLevelTemplate} from "../helpers/createLevelTemplate";
import SecretComponent from "../components/SecretComponent";

const LevelPage: FC = () => {
  const {completedLevels} = useTypedSelector(state => state.completedLevels)

  const params = useParams()
  const urlLevelNumber: number = Number(params.levelNumber);

  const {limitsOfMoves, levelEntities, levelNumber} = useMemo(() => {
    return createLevelTemplate(urlLevelNumber)
  }, [urlLevelNumber])

  const [board, setBoard] = useState(new Board(limitsOfMoves, levelEntities, levelNumber))

  useEffect(() => {
    restart(board, setBoard)
  }, [])

  const navigate = useNavigate();
  useEffect(() => {
    levelBeforeUrlLevelIsNotCompleted(navigate, completedLevels, urlLevelNumber);

    const newBoard = new Board(limitsOfMoves, levelEntities, levelNumber)
    newBoard.initCells();
    newBoard.addEntities();
    newBoard.highLightCells();
    setBoard(newBoard)
  }, [urlLevelNumber])

  function handleClick(cell: Cell) {
    click(cell, board, setBoard)
  }

  return (
    <div className="level__container _container">
      <BoardInfoComponent restart={() => restart(board, setBoard)} board={board}/>
      <BoardComponent board={board} click={handleClick}/>

      <SecretComponent levelNumber={urlLevelNumber}/>
    </div>
  );
};

export default LevelPage;