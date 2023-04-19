import {Names} from "../models/entities/Names";

export interface IDestinationCell{
  x: number;
  y: number;
}

export interface ILevelsEntities {
  entity: Names;
  x: number;
  y: number;
  destination?: IDestinationCell;
  damage?: number;
  health?: number;
}

export interface ILevelTemplates {
  entities: ILevelsEntities[];
  levelNumber: number;
  limitsOfMoves: number[];
}