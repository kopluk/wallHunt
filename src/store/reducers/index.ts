import {combineReducers} from "redux";
import {completedLevelsReducer} from "./completedLevelsReducer";

export const rootReducer = combineReducers({
  completedLevels: completedLevelsReducer,
})

export type RootState = ReturnType<typeof rootReducer>