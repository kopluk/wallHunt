import {Names} from "../models/entities/Names";

export interface ILevelsEntities {
  entity: Names;
  x: number;
  y: number;
  damage?: number;
  health?: number
}

export interface ILevelTemplates {
  entities: ILevelsEntities[];
  levelNumber: number;
  maxMoves: number;
}