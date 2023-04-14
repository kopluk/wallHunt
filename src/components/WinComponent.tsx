import React, {FC, useEffect} from 'react';
import MyButton from "../UI/MyButton/MyButton";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/useActions";

interface WinComponentProps {
  levelNumber: number;
}

const WinComponent: FC<WinComponentProps> = ({levelNumber}) => {
  const {setCompletedLevel} = useActions();
  useEffect(() => {
    if (levelNumber < 7)
      setCompletedLevel(levelNumber + 1)
  }, [])

  return (
    <div>
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