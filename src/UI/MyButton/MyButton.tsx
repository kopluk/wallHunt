import React, {FC} from 'react';
import './MyButton.css'

interface MyButtonProps {
  children: React.ReactNode,
  click?: () => void;
  disabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({children, click, disabled}) => {
  return (
    <button onClick={click} className={['mybtn', disabled ? 'mybtn_disabled' : ''].join(' ')} disabled={disabled}>
      {children}
    </button>
  );
};

export default MyButton;