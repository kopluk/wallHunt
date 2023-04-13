import {LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5, LEVEL_6, LEVEL_7, Levels} from "./Levels";
import {randomInteger} from "../../utils/randomInteger";

interface IRoutes {
  entities: Levels[];
  levelNumber: number;
  maxMoves: number;
}

export const levelsRes: IRoutes[] = [
  {entities: LEVEL_1, maxMoves: 82, levelNumber: 1},
  {entities: LEVEL_2, maxMoves: 8, levelNumber: 2},
  {entities: LEVEL_3, maxMoves: 9, levelNumber: 3},
  {entities: LEVEL_4, maxMoves: 10, levelNumber: 4},
  {entities: LEVEL_5, maxMoves: 11, levelNumber: 5},
  {entities: LEVEL_6, maxMoves: 12, levelNumber: 6},
  {entities: LEVEL_7, maxMoves: 13, levelNumber: 7},
]