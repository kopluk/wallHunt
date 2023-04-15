import {ILevelTemplates} from "../../types/level";
import {LevelsEntities} from "./LevelsEntities";


export const levelTemplates: ILevelTemplates[] = [
  {entities: LevelsEntities.LEVEL_1, maxMoves: 82, levelNumber: 1},
  {entities: LevelsEntities.LEVEL_2, maxMoves: 100, levelNumber: 2},
  {entities: LevelsEntities.LEVEL_3, maxMoves: 9, levelNumber: 3},
  {entities: LevelsEntities.LEVEL_4, maxMoves: 10, levelNumber: 4},
  {entities: LevelsEntities.LEVEL_5, maxMoves: 11, levelNumber: 5},
  {entities: LevelsEntities.LEVEL_6, maxMoves: 12, levelNumber: 6},
  {entities: LevelsEntities.LEVEL_7, maxMoves: 1, levelNumber: 7},
]