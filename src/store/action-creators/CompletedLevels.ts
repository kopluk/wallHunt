import {completedLevelsAction, completedLevelsActionTypes, ICompletedLevel} from "../../types/CompletedLevels";

export const setCompletedLevel = (levelNumber: number): completedLevelsAction => {
  return {type: completedLevelsActionTypes.SET_COMPLETED_LEVEL, payload: levelNumber}
}

export const setLocalCompletedLevels = (completedLevels: ICompletedLevel[]): completedLevelsAction => {
  return {type: completedLevelsActionTypes.SET_LOCAL_COMPLETED_LEVELS, payload: completedLevels}
}

export const setLevelStars = (levelNumber: number, levelStars: number): completedLevelsAction => {
  return {type: completedLevelsActionTypes.SET_LEVEL_STARS, payload: {levelNumber, levelStars}}
}

export const setFoundSecret = (secretNumber: number): completedLevelsAction => {
  return {type: completedLevelsActionTypes.SET_FOUND_SECRET, payload: secretNumber}
}