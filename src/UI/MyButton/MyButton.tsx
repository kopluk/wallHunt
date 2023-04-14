import React, {FC} from 'react';
import './MyButton.css'

interface MyButtonProps {
  children: React.ReactNode,
  click?: () => void;
  disabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({children, click, ...props}) => {
  return (
    <button onClick={click} className={'mybtn'} {...props}>
      {children}
    </button>
  );
};

export default MyButton;