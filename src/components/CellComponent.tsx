import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {Names} from "../models/entities/Names";

interface CellProps {
  cell: Cell;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, click}) => {
  if (cell.occupied?.name === Names.WALL) {
    console.log('wall')
  }
  if (cell.occupied?.name === Names.PORTAL) {
    console.log('portal')
  }

  return (
    <div
      className={[
        'cell',
        cell.available ? 'available' : '',
        cell.occupied?.name === Names.WALL ? Names.WALL : '',
      ].join(' ')}
      onClick={() => click(cell)}
    >
      {cell.occupied && cell.occupied.name !== Names.WALL && cell.occupied.name !== Names.PORTAL
        ?
        <div className="healthBar" style={{width: `${cell.occupied.health / (cell.occupied.maxHealth / 100)}%`}}></div>
        : ''}
      <div
        className={[
          cell.occupied?.name === Names.PLAYER ? Names.PLAYER : '',
          cell.occupied?.name === Names.ENEMY ? Names.ENEMY : '',
          cell.occupied?.name === Names.PORTAL ? Names.PORTAL : ''
        ].join(' ')
        }>
      </div>
      {/*<div style={{fontSize: 10}}>{cell.x}-{cell.y}</div>*/}
    </div>
  );
};

export default CellComponent;