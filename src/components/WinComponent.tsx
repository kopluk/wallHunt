import React, {FC, useEffect} from 'react';
import MyButton from "../UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {Board} from "../models/Board";
import {useTypedSelector} from "../hooks/useTypedSelector";
import StarsComponent from "./StarsComponent";
import {log} from "util";

interface WinComponentProps {
  levelNumber: number;
  board: Board;
}

const WinComponent: FC<WinComponentProps> = ({levelNumber, board}) => {
  const {completedLevels} = useTypedSelector(state => state.completedLevels)
  const currentLevelStars = completedLevels[levelNumber].levelStarts;
  const {setCompletedLevel, setLevelStars} = useActions();

  useEffect(() => {
    if (levelNumber < 7) {
      setCompletedLevel(levelNumber + 1)
    }
    setLevelStars(levelNumber, board.howMuchStars())
  }, [])

  return (
    <div className={'win__container'}>
      <StarsComponent starsCount={board.howMuchStars()} size={80}/>
      <div>YOU WIN</div>
      <MyButton>
        {levelNumber < 7
          ? <Link to={`/level/${levelNumber + 1}`}>Следующий уровень</Link>
          : <Link to={`/congratulations`}>Поздравления</Link>}
      </MyButton>
    </div>
  );
};

export default WinComponent;