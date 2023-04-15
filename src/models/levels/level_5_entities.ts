import {ILevelsEntities} from "../../types/level";
import {Names} from "../entities/Names";


export const level_5_entities: ILevelsEntities[] = [
  {entity: Names.ENEMY, x: 9, y: 3, damage: 50, health: 110},
  {entity: Names.ENEMY, x: 6, y: 5, damage: 50, health: 90},

  {entity: Names.PLAYER, x: 10, y: 2, damage: 50, health: 100},
]