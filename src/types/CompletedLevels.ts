export interface ICompletedLevel {
  level: number;
  completed: boolean;
}

export interface completedLevelsState {
  completedLevels: ICompletedLevel[],
}

export enum completedLevelsActionTypes {
  SET_COMPLETED_LEVEL = 'SET_COMPLETED_LEVEL',
  SET_LOCAL_COMPLETED_LEVELS = 'SET_LOCAL_COMPLETED_LEVELS',
}

interface setCompletedLevelAction {
  type: completedLevelsActionTypes.SET_COMPLETED_LEVEL;
  payload: number;
}

interface setLocalCompletedLevelsAction {
  type: completedLevelsActionTypes.SET_LOCAL_COMPLETED_LEVELS;
  payload: ICompletedLevel[];
}

export type completedLevelsAction = setCompletedLevelAction | setLocalCompletedLevelsAction