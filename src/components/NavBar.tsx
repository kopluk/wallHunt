import React, {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import {CompletedLevel} from "../models/levels/completedLevels";

interface NavBarProps {
  completedLevels: CompletedLevel;
}

const NavBar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={'navbar'}>
      <MyButton click={() => navigate('/level/1')}>
        <span>1 уровень</span>
      </MyButton>
      <MyButton click={() => navigate('/level/2')}>
        <span>2 уровень</span>
      </MyButton>
      <MyButton click={() => navigate('/level/3')}>
        <span>3 уровень</span>
      </MyButton>
      <MyButton click={() => navigate('/level/4')}>
        <span>4 уровень</span>
      </MyButton>
      <MyButton click={() => navigate('/level/5')}>
        <span>5 уровень</span>
      </MyButton>
      <MyButton click={() => navigate('/level/6')}>
        <span>6 уровень</span>
      </MyButton>
      <MyButton click={() => navigate('/level/7')}>
        <span>7 уровень</span>
      </MyButton>
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