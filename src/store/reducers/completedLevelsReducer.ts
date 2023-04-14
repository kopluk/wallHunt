import {completedLevelsAction, completedLevelsActionTypes, completedLevelsState} from "../../types/CompletedLevels";

const initialState: completedLevelsState = {
  completedLevels: [
    {level: 1, completed: true},
    {level: 2, completed: false},
    {level: 3, completed: false},
    {level: 4, completed: false},
    {level: 5, completed: false},
    {level: 6, completed: false},
    {level: 7, completed: false},
  ]
}

export const completedLevelsReducer = (state = initialState, action: completedLevelsAction) => {
  switch (action.type) {
    case completedLevelsActionTypes.SET_COMPLETED_LEVEL:
      return {
        ...state,
        completedLevels: state.completedLevels.map(level => {
          if (level.level === action.payload) {
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
    default:
      return state;
  }
}