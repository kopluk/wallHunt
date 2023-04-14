import React, {FC} from 'react';
import {Board} from "../models/Board";
import MyButton from "../UI/MyButton/MyButton";

interface InfoComponentsProps {
  restart: () => void;
  board: Board;
}

const InfoComponent: FC<InfoComponentsProps> = ({restart, board}) => {
  return (
    <div className={'info'}>
      <MyButton click={restart}><span>Restart</span></MyButton>
      <div className={'info__text'}>
        <div>
          Количество ходов: {board.movesCount}
        </div>
        <div>
          Максимальное количество ходов: {board.limitMovesCount}
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;