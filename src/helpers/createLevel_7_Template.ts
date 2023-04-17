import {randomInteger} from "../utils/randomInteger";
import {Enemy, Player, Wall} from "../models/entities/Entity";
import {Board} from "../models/Board";
import {ILevelsEntities} from "../types/level";
import {Names} from "../models/entities/Names";


export const createLevel_7_Template = () => {
  const wallsCount = randomInteger(120, 240);
  const enemiesCount = randomInteger(3, 4);
  const limitsOfMoves = [
    Math.floor(enemiesCount * 2 + wallsCount * enemiesCount / 18),
    Math.floor(enemiesCount * 2 + wallsCount * enemiesCount / 18) + 1,
    Math.floor(enemiesCount * 2 + wallsCount * enemiesCount / 18) + 2
  ];
  const levelEntities: ILevelsEntities[] = [];

  for (let i = 0; i < wallsCount; i++) {
    const x = randomInteger(0, 29);
    const y = randomInteger(0, 29);

    levelEntities.push({entity: Names.WALL, x, y})
  }

  for (let i = 0; i < enemiesCount; i++) {
    const x = randomInteger(0, 29);
    const y = randomInteger(0, 29);
    const health = randomInteger(90, 190);

    levelEntities.push({entity: Names.ENEMY, x, y, damage: 50, health})
  }

  levelEntities.push({
    entity: Names.PLAYER,
    x: randomInteger(0, 29),
    y: randomInteger(0, 29),
    damage: randomInteger(50, 100),
    health: 100
  })

  return {limitsOfMoves, levelEntities}
}