import React, {FC} from 'react';
import {Board} from "../models/Board";
import {Link} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import {useActions} from "../hooks/useActions";
import WinComponent from "./WinComponent";

interface GameOverComponentProps {
  board: Board;
}

const GameOverComponent: FC<GameOverComponentProps> = ({board}) => {
  return (
    <div className={['gameOver', board.gameWined ? 'gameWin' : ''].join(' ')}>
        <WinComponent levelNumber={board.levelNumber} board={board}/>
    </div>
  );
};

export default GameOverComponent;