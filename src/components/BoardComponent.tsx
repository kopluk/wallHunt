import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import CellComponent from "./CellComponent";
import {Board} from "../models/Board";
import GameOverComponent from "./GameOverComponent";

interface BoardProps {
  board: Board;
  click: (cell: Cell) => void;
}

const BoardComponent: FC<BoardProps> = ({board, click}) => {
  return (
    <div className={'board__wrapper'}>
      {board.gameOvered
        ? <GameOverComponent board={board}/>
        : ''
      }
      <div className={'board'}>
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent key={cell.id} cell={cell} click={click}/>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default BoardComponent;