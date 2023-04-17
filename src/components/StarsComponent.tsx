import React, {FC} from 'react';
import {IoIosStar, IoIosStarOutline} from "react-icons/io";

interface StarsComponentProps {
  starsCount: number;
  size: number;
}

interface IPassedStar {
  passed: boolean
}

const StarsComponent: FC<StarsComponentProps> = ({starsCount, size}) => {

  let passedStars: IPassedStar[] = [];
  for (let i = 0; i < 3; i++) {
    if (i < starsCount) {
      passedStars.push({passed: true})
    } else {
      passedStars.push({passed: false})
    }
  }

  return (
    <div className={'stars__container'}>
      {passedStars.map((star, index) =>
        <StarComponent key={index} passed={star.passed} size={size}/>
      )}
    </div>
  );
};

interface StarComponentsProps {
  passed: boolean;
  size: number;
}

const StarComponent: FC<StarComponentsProps> = ({passed, size}) => {
  return (
    <div className={passed ? 'star passed' : 'star'}>
      {passed
      ? <IoIosStar color='#fff900' size={size}/>
      : <IoIosStarOutline color='#fff900' size={size}/>
      }
    </div>
  );
};

export default StarsComponent;