import React from 'react';
import NavBar from "../components/NavBar";
import MyButton from "../UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

const CongratulationsPage = () => {
  function forgetCompletedLevels() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className={'congratulations'}>
      <div>
        <NavBar/>
      </div>
      <div>
        Поздравляю, вы прошли все уровни. Вы холодец :)
      </div>
      <MyButton click={forgetCompletedLevels}>
        <span>Забыть все пройденные уровни</span>
      </MyButton>
    </div>
  );
};

export default CongratulationsPage;