import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {ICompletedLevel} from "../types/CompletedLevels";
import StarsComponent from "./StarsComponent";

const NavBar: FC = () => {
  return (
    <div className={'navbar'}>
      <div className="navbar__desktop">
        <NavBarInner keyAdder={1}/>
      </div>
      <div className="navbar__mobile">
        <NavBarInner keyAdder={11}/>
      </div>
    </div>
  );
}

interface NavBarInnerProps {
  keyAdder: number;
}

const NavBarInner: FC<NavBarInnerProps> = ({keyAdder}) => {
  const {completedLevels} = useTypedSelector(state => state.completedLevels)
  const {setLocalCompletedLevels} = useActions();

  const [localCompletedLevels, setCompletedLevels] = useState<ICompletedLevel[]>(() => {
    const initialValue = JSON.parse(localStorage.getItem("completedLevels") || JSON.stringify(completedLevels));
    return initialValue;
  });

  useEffect(() => {
    setLocalCompletedLevels(localCompletedLevels);
  }, [])

  useEffect(() => {
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels))
    setCompletedLevels(completedLevels)
  }, [completedLevels])

  const navigate = useNavigate();
  return (
    <>
      <div className={'navbar__left'}>
        <div className="btns__column">
          <MyButton click={() => navigate('/congratulations')}
                    disabled={!completedLevels[6].completed}>Поздравления</MyButton>
        </div>
        <div className="btns__column">
          <MyButton click={() => navigate('/about')}>Об игре</MyButton>
        </div>
      </div>
      <div className={'navbar__right'}>
        {completedLevels.map(level =>
          <div className={'btns__column'} key={level.levelNumber * keyAdder}>
            <StarsComponent starsCount={level.levelStarts} size={30}/>
            <MyButton
              click={() => navigate(`/level/${level.levelNumber}`)}
              disabled={!level.completed}
            >{level.levelNumber} уровень</MyButton>
          </div>
        )}
      </div>
    </>
  )
}

export default NavBar;

