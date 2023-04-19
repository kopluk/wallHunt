import React, {useState} from 'react';
import '../UI/MyButton/MyButton.css'
import {ICompletedLevel} from "../types/CompletedLevels";
import {useActions} from "../hooks/useActions";

const ActivateLevelsComponent = () => {
  const {setLocalCompletedLevels} = useActions();
  const [codeValue, setCodeValue] = useState('')

  const completedLevels: ICompletedLevel[] = [
    {levelNumber: 1, completed: true, levelStarts: 1},
    {levelNumber: 2, completed: true, levelStarts: 1},
    {levelNumber: 3, completed: true, levelStarts: 1},
    {levelNumber: 4, completed: true, levelStarts: 1},
    {levelNumber: 5, completed: true, levelStarts: 1},
    {levelNumber: 6, completed: true, levelStarts: 1},
    {levelNumber: 7, completed: true, levelStarts: 2},
  ]

  function handleClick() {
    setCodeValue('')

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let str = '';
    if (month < 10) {
      str = `${day}0${month}${year}`
    } else {
      str = `${day}${month}${year}`
    }

    if (codeValue === str) {
      setLocalCompletedLevels(completedLevels)
    }

  }

  return (
    <div>
      <input placeholder={'Введите код активации...'} className={'myinput'} type="text" value={codeValue} onChange={e => setCodeValue(e.target.value)}/>
      <button onClick={handleClick} className={'mybtn'}>Открыть все уровни</button>
    </div>
  );
};

export default ActivateLevelsComponent;