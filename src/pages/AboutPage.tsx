import React, {FC, useState} from 'react';
import {forgetCompletedLevels} from "../helpers/forgetCompletedLevels";
import MyButton from "../UI/MyButton/MyButton";
import ActivateLevelsComponent from "../components/ActivateLevelsComponent";

const AboutPage = () => {
  return (
    <div className="about__container _container">
      <div className={'about__text'}>
        <div className={'about__text_item'}>Представляю вам игру WallHunt.</div>
        <div className={'about__text_item'}>
          В ней <br />
          <div className={'about__text_str'}>
            <div>вы - </div><FakeCellComponent cellClass={'about__cell'} entityClass={'about__player'}/><div> должны будете победить</div>
          </div>
          <div className={'about__text_str'}>
            <div>всех врагов - </div><FakeCellComponent cellClass={'about__cell'} entityClass={'about__enemy'}/>
          </div>
        </div>
        <div className={'about__text_item'}>
          Также в игре есть:
          <div className={'about__text_str'}>
            <div>стены - </div><FakeCellComponent cellClass={'about__wall about__cell'}/>
          </div>
          <div className={'about__text_str'}>
            <div>порталы - </div><FakeCellComponent cellClass={'about__cell'} entityClass={'about__portal'}/>
          </div>
        </div>
        <div className={'about__text_item'}>Вокруг игрока есть зона куда он может сходить.</div>
        <div className={'about__text_item'}>Сверху кнопка первого уровня, нажми на нее.</div>
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

interface FakeCellProps {
  cellClass: string;
  entityClass?: string;
}

const FakeCellComponent: FC<FakeCellProps> = ({cellClass,entityClass}) => {
  return (
    <div className={cellClass}>
      <div className={entityClass}></div>
    </div>
  )
}

export default AboutPage;