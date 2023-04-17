import React, {useState} from 'react';
import {forgetCompletedLevels} from "../helpers/forgetCompletedLevels";
import MyButton from "../UI/MyButton/MyButton";
import ActivateLevelsComponent from "../components/ActivateLevelsComponent";

const AboutPage = () => {
  return (
    <div className="about__container _container">
      <div className={'about__text'}>
        <p>Представляю вам игру WallHunt.</p>
        <p>
          В ней <strong>вы - клетка с синим квадратом</strong> должны будете победить <br/>
          всех <strong>врагов - клетки с красным квадратом</strong>, <br/>
          пока ваше количество ходов не достигло лимита.
        </p>
        <p>Вокруг игрока есть зона куда он может сходить.</p>
        <p>Сверху кнопка первого уровня, нажми на нее.</p>
      </div>
      <div className={'about__ps'}>
        <div className="about__ps_activation">
          <ActivateLevelsComponent/>
        </div>
        <p>Если что-то некорректно отображается, то</p>
        <MyButton click={() => forgetCompletedLevels()}>
          Перезагрузить
        </MyButton>
      </div>
    </div>
  );
};

export default AboutPage;