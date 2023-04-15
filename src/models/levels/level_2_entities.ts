import {ILevelsEntities} from "../../types/level";
import {Names} from "../entities/Names";

export const level_2_entities: ILevelsEntities[] = [
  {entity: Names.WALL, x: 10, y: 5},
  {entity: Names.WALL, x: 11, y: 6},
  {entity: Names.WALL, x: 11, y: 4},
  {entity: Names.WALL, x: 12, y: 5},

  {entity: Names.WALL, x: 6, y: 4},
  {entity: Names.WALL, x: 7, y: 5},

  {entity: Names.ENEMY, x: 8, y: 2, damage: 50, health: 90},

  {entity: Names.PLAYER, x: 10, y: 2, damage: 50, health: 100},
]