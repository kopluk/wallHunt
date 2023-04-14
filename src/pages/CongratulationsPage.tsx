import React from 'react';
import NavBar from "../components/NavBar";
import MyButton from "../UI/MyButton/MyButton";

const CongratulationsPage = () => {
  return (
    <div className={'congratulations'}>
      <div>
        <NavBar/>
      </div>
      <div>
        Поздравляю, вы прошли все уровни. Вы холодец :)
      </div>
      <MyButton click={() => localStorage.clear()}>
        <span>Забыть все пройденные уровни</span>
      </MyButton>
    </div>
  );
};

export default CongratulationsPage;