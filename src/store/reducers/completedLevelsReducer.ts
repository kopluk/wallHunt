import {completedLevelsAction, completedLevelsActionTypes, completedLevelsState} from "../../types/CompletedLevels";

const initialState: completedLevelsState = {
  completedLevels: [
    {levelNumber: 1, completed: true, levelStarts: 0},
    {levelNumber: 2, completed: false, levelStarts: 0},
    {levelNumber: 3, completed: false, levelStarts: 0},
    {levelNumber: 4, completed: false, levelStarts: 0},
    {levelNumber: 5, completed: false, levelStarts: 0},
    {levelNumber: 6, completed: false, levelStarts: 0},
    {levelNumber: 7, completed: false, levelStarts: 0},
  ],
  secrets: [
    {isFound: false, secretNumber: 1},
    {isFound: false, secretNumber: 2},
    {isFound: false, secretNumber: 3},
    {isFound: false, secretNumber: 4},
  ]
}

export const completedLevelsReducer = (state = initialState, action: completedLevelsAction): completedLevelsState => {
  switch (action.type) {
    case completedLevelsActionTypes.SET_COMPLETED_LEVEL:
      return {
        ...state,
        completedLevels: state.completedLevels.map(level => {
          if (level.levelNumber === action.payload) {
            return {...level, completed: true}
          }
          return level;
        })
      }
    case completedLevelsActionTypes.SET_LOCAL_COMPLETED_LEVELS:
      return {
        ...state,
        completedLevels: action.payload,
      }
    case completedLevelsActionTypes.SET_LEVEL_STARS:
      return {
        ...state,
        completedLevels: state.completedLevels.map(level => {
          if (level.levelNumber === action.payload.levelNumber && level.levelStarts < action.payload.levelStars) {
            return {...level, levelStarts: action.payload.levelStars}
          }
          return level;
        })
      }
    case completedLevelsActionTypes.SET_FOUND_SECRET:
      return {
        ...state,
        secrets: state.secrets.map(secret => {
          if (secret.secretNumber === action.payload) {
            return {...secret, isFound: true}
          }
          return secret
        })
      }
    default:
      return state;
  }
}