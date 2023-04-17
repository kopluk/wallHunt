export interface ICompletedLevel {
  levelNumber: number;
  completed: boolean;
  levelStarts: number;
}

export interface ISecrets {
  isFound: boolean;
  secretNumber: number;
}

export interface completedLevelsState {
  completedLevels: ICompletedLevel[],
  secrets: ISecrets[],
}

//actions

export enum completedLevelsActionTypes {
  SET_COMPLETED_LEVEL = 'SET_COMPLETED_LEVEL',
  SET_LOCAL_COMPLETED_LEVELS = 'SET_LOCAL_COMPLETED_LEVELS',
  SET_LEVEL_STARS = 'SET_LEVEL_STARS',
  SET_FOUND_SECRET = 'SET_FOUND_SECRET',
}

interface setCompletedLevelAction {
  type: completedLevelsActionTypes.SET_COMPLETED_LEVEL;
  payload: number;
}

interface setLocalCompletedLevelsAction {
  type: completedLevelsActionTypes.SET_LOCAL_COMPLETED_LEVELS;
  payload: ICompletedLevel[];
}

interface ISetLevelStartsPayload {
  levelNumber: number;
  levelStars: number;
}

interface setLevelStarsAction {
  type: completedLevelsActionTypes.SET_LEVEL_STARS;
  payload: ISetLevelStartsPayload;
}

interface setFindSecret {
  type: completedLevelsActionTypes.SET_FOUND_SECRET;
  payload: number;
}

export type completedLevelsAction = setCompletedLevelAction | setLocalCompletedLevelsAction | setLevelStarsAction | setFindSecret;