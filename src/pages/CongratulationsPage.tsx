import React from 'react';
import NavBar from "../components/NavBar";

const CongratulationsPage = () => {
  return (
    <div className={'congratulations'}>
      <div>
        <NavBar/>
      </div>
      <div>
        Поздравляю, вы прошли все уровни. Вам не занимать упороства :)
      </div>
    </div>
  );
};

export default CongratulationsPage;