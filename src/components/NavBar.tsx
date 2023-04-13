import React, {FC} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";

interface NavBarProps {
  click: () => void;
}

const NavBar: FC = () => {
  return (
    <div className={'navbar'}>
      <MyButton>
        <Link to={'/level/1'}>1 уровень</Link>
      </MyButton>
      <MyButton>
        <Link to={'/level/2'}>2 уровень</Link>
      </MyButton>
      <MyButton>
        <Link to={'/level/3'}>3 уровень</Link>
      </MyButton>
      <MyButton>
        <Link to={'/level/4'}>4 уровень</Link>
      </MyButton>
      <MyButton>
        <Link to={'/level/5'}>5 уровень</Link>
      </MyButton>
      <MyButton>
        <Link to={'/level/6'}>6 уровень</Link>
      </MyButton>
      <MyButton>
        <Link to={'/level/7'}>7 уровень</Link>
      </MyButton>
    </div>
  );
}
  ;

  export default NavBar;