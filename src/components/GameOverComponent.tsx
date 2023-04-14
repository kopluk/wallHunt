import React, {FC} from 'react';
import {Board} from "../models/Board";
import {Link} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";

interface GameOverComponentProps {
  board: Board;
  levelNumber: number;
}

const GameOverComponent: FC<GameOverComponentProps> = ({board, levelNumber}) => {
  return (
    <div className={['gameOver', board.gameWined ? 'gameWin' : '', board.gameLost ? 'gameLose' : ''].join(' ')}>
      {board.gameLost
        ? <div>GAME OVER</div>
        : <div>
          <div>YOU WIN</div>
          <MyButton>
            {levelNumber < 7
            ? <Link to={`/level/${levelNumber + 1}`}>Следующий уровень</Link>
            : <Link to={`/congratulations`}>Поздравления</Link>}
          </MyButton>
        </div>}
    </div>
  );
};

export default GameOverComponent;