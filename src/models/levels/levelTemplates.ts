import {ILevelTemplates} from "../../types/level";
import {LevelsEntities} from "./LevelsEntities";


export const levelTemplates: ILevelTemplates[] = [
  {entities: LevelsEntities.LEVEL_1, limitsOfMoves: [73, 80, 90], levelNumber: 1},
  {entities: LevelsEntities.LEVEL_2, limitsOfMoves: [61, 63, 80], levelNumber: 2},
  {entities: LevelsEntities.LEVEL_3, limitsOfMoves: [16, 30, 50], levelNumber: 3},
  {entities: LevelsEntities.LEVEL_4, limitsOfMoves: [10, 11, 12], levelNumber: 4},
  {entities: LevelsEntities.LEVEL_5, limitsOfMoves: [11, 12, 13], levelNumber: 5},
  {entities: LevelsEntities.LEVEL_6, limitsOfMoves: [12, 13, 14], levelNumber: 6},
  {entities: LevelsEntities.LEVEL_7, limitsOfMoves: [1, 2, 3], levelNumber: 7},
]