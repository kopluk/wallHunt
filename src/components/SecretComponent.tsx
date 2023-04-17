import React, {FC} from 'react';
import {useActions} from "../hooks/useActions";

interface SecretComponentProps {
  levelNumber: number;
}

const SecretComponent: FC<SecretComponentProps> = ({levelNumber}) => {
  const {setFoundSecret} = useActions();

  return (
    <div>
      {levelNumber === 6 &&
        <div
          onClick={() => setFoundSecret(1)}
          className={'board__bottom'}></div>
      }
    </div>
  );
};

export default SecretComponent;