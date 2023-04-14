import React, {useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import InfoComponent from "../components/InfoComponent";
import {restart} from "../utils/restart";
import BoardComponent from "../components/BoardComponent";

const AboutPage = () => {
  return (
  <div className="about">
      <NavBar />
    <div className={'container'}>
      <div className={'about_text'}>
        Представляю вам игру WallHunt.<br />
        В ней <strong>вы - клетка с синим квадратом</strong> должны будете победить <br />
        всех <strong>врагов - клетки с красным квадратом</strong>, <br />
        пока ваше количество ходов не достигло лимита.<br />
        Вокруг игрока есть зона куда он может сходить.<br />
        Сверху кнопка первого уровня, нажми на нее.
      </div>
    </div>
  </div>
  );
};

export default AboutPage;