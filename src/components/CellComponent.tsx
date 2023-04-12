import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {Names} from "../models/Names";

interface CellProps {
  cell: Cell;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, click}) => {
  return (
    <div
      className={['cell', cell.available ? 'available' : '', cell.occupied?.name === Names.WALL ? 'wall' : ''].join(' ')}
      onClick={() => click(cell)}
    >
      {cell.occupied && cell.occupied.name !== Names.WALL
        ?
        <div className="healthBar" style={{width: `${cell.occupied.health / (cell.occupied.maxHealth / 100)}%`}}></div>
        : ''}
      <div
        className={[
          cell.occupied?.name === Names.PLAYER ? Names.PLAYER : '',
          cell.occupied?.name === Names.ENEMY ? Names.ENEMY : ''].join(' ')
        }>
      </div>
    </div>
  );
};

export default CellComponent;