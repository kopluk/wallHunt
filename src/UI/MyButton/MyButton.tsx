import React, {FC} from 'react';
import './MyButton.css'

interface MyButtonProps {
  children: React.ReactNode,
  click?: () => void;
}

const MyButton: FC<MyButtonProps> = ({children, click}) => {
  return (
    <button onClick={click} className={'mybtn'}>
      {children}
    </button>
  );
};

export default MyButton;