import React from 'react';
import NavBar from "../components/NavBar";
import MyButton from "../UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import {forgetCompletedLevels} from "../helpers/forgetCompletedLevels";
import {useTypedSelector} from "../hooks/useTypedSelector";

const CongratulationsPage = () => {
  const {completedLevels, secrets} = useTypedSelector(state => state.completedLevels)
  const navigate = useNavigate();

  let starsCount: number = 0;
  for (const completedLevel of completedLevels) {
    starsCount += completedLevel.levelStarts;
  }

  let congratulationText: string = '';

  if (starsCount === 21)
    congratulationText = 'Вы лучший :)'
  if (starsCount < 21)
    congratulationText = 'Вы хорошо постарались и вам есть куда стремиться'
  if (starsCount < 14)
    congratulationText = 'Вы старались, но не очень'
  if (starsCount === 7)
    congratulationText = 'Вы гений, не отчаивайтесь!!!!';

  let foundedSecretsCount: number = 0;
  for (const secret of secrets) {
    if (secret.isFound)
      foundedSecretsCount++;
  }

  return (
    <div className="congratulations__container _container">
      <div className="congratulations__content">
        <h2>
          Поздравляю, вы прошли все уровни на {starsCount} звезд.
        </h2>
        <h3>
          {congratulationText}
        </h3>
        {foundedSecretsCount
          ? <div>Ого! Вы нашли {foundedSecretsCount} из {secrets.length} секретов</div>
          : <div>Делать меньшее самое необходимое</div>
        }

      </div>
      <MyButton click={() => forgetCompletedLevels(navigate)}>
        Забыть все пройденные уровни
      </MyButton>
    </div>
  );
};

export default CongratulationsPage;