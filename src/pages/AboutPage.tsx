import React from 'react';
import NavBar from "../components/NavBar";

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