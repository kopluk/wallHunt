import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const NavBar: FC = () => {
  const {completedLevels} = useTypedSelector(state => state.completedLevels)
  const {setLocalCompletedLevels} = useActions();

  const [localCompletedLevels, setCompletedLevels] = useState(() => {
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
    <div className={'navbar'}>
      <div className={'navbar_left'}>
        <MyButton click={() => navigate('/congratulations')} disabled={!completedLevels[6].completed}>
          <span>Поздравления</span>
        </MyButton>
        <MyButton click={() => navigate('/about')}>
          <span>Об игре</span>
        </MyButton>
      </div>
      <div className={'navbar_right'}>
        <MyButton click={() => navigate('/level/1')} disabled={!completedLevels[0].completed}>
          <span>1 уровень</span>
        </MyButton>
        <MyButton click={() => navigate('/level/2')} disabled={!completedLevels[1].completed}>
          <span>2 уровень</span>
        </MyButton>
        <MyButton click={() => navigate('/level/3')} disabled={!completedLevels[2].completed}>
          <span>3 уровень</span>
        </MyButton>
        <MyButton click={() => navigate('/level/4')} disabled={!completedLevels[3].completed}>
          <span>4 уровень</span>
        </MyButton>
        <MyButton click={() => navigate('/level/5')} disabled={!completedLevels[4].completed}>
          <span>5 уровень</span>
        </MyButton>
        <MyButton click={() => navigate('/level/6')} disabled={!completedLevels[5].completed}>
          <span>6 уровень</span>
        </MyButton>
        <MyButton click={() => navigate('/level/7')} disabled={!completedLevels[6].completed}>
          <span>7 уровень</span>
        </MyButton>
      </div>
    </div>
  );
}

export default NavBar;

// disabled={!completedLevels[1]
// disabled={!completedLevels[2]
// disabled={!completedLevels[3]
// disabled={!completedLevels[4]
// disabled={!completedLevels[5]
// disabled={!completedLevels[6]
// disabled={!completedLevels[7]