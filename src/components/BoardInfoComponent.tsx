import React, {FC} from 'react';
import {Board} from "../models/Board";
import MyButton from "../UI/MyButton/MyButton";

interface InfoComponentsProps {
  restart: () => void;
  board: Board;
}

const BoardInfoComponent: FC<InfoComponentsProps> = ({restart, board}) => {
  return (
    <div className={'board__info'}>
      <MyButton click={restart}><span>Restart</span></MyButton>
      <div className={'board__info_text'}>
        <div>
          Количество ходов: {board.movesCount}
        </div>
        {/*<div>*/}
        {/*  Максимальное количество ходов: {board.limitsOfMoves[0]}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default BoardInfoComponent;