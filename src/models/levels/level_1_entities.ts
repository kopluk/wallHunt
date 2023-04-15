import {ILevelsEntities} from "../../types/level";
import {Names} from "../entities/Names";


export const level_1_entities: ILevelsEntities[] = [
  {entity: Names.ENEMY, x: 1, y: 1, damage: 50, health: 110},
  {entity: Names.ENEMY, x: 16, y: 1, damage: 50, health: 110},
  {entity: Names.ENEMY, x: 10, y: 11, damage: 50, health: 110},
  {entity: Names.ENEMY, x: 21, y: 15, damage: 50, health: 110},
  {entity: Names.ENEMY, x: 15, y: 15, damage: 50, health: 110},
  {entity: Names.ENEMY, x: 1, y: 28, damage: 50, health: 110},
  {entity: Names.ENEMY, x: 28, y: 28, damage: 50, health: 110},

  {entity: Names.WALL, x: 7, y: 24},

  {entity: Names.PLAYER, x: 10, y: 2, damage: 50, health: 100},
];

// по вертикали
for (let i = 0; i < 6; i++) {
  level_1_entities.push({entity: Names.WALL, x: 7, y: i})
  level_1_entities.push({entity: Names.WALL, x: 13, y: i})
}
for (let i = 0; i < 4; i++) {
  level_1_entities.push({entity: Names.WALL, x: 13, y: 14 + i})
}
for (let i = 0; i < 7; i++) {
  level_1_entities.push({entity: Names.WALL, x: 18, y: 14 + i})
}

// по горизонтали
for (let i = 0; i < 3; i++) {
  level_1_entities.push({entity: Names.WALL, x: i, y: 5})
}

for (let i = 0; i < 8; i++) {
  level_1_entities.push({entity: Names.WALL, x: 18 + i, y: 5})
}

for (let i = 0; i < 22; i++) {
  level_1_entities.push({entity: Names.WALL, x: 4 + i, y: 8})
}

for (let i = 0; i < 6; i++) {
  level_1_entities.push({entity: Names.WALL, x: 0 + i, y: 13})
}

for (let i = 0; i < 12; i++) {
  level_1_entities.push({entity: Names.WALL, x: 12 + i, y: 13})
}

for (let i = 0; i < 12; i++) {
  level_1_entities.push({entity: Names.WALL, x: 3 + i, y: 18})
}

for (let i = 0; i < 6; i++) {
  level_1_entities.push({entity: Names.WALL, x: 19 + i, y: 20})
}

for (let i = 0; i < 14; i++) {
  level_1_entities.push({entity: Names.WALL, x: 29 - i, y: 25})
}
for (let i = 0; i < 5; i++) {
  level_1_entities.push({entity: Names.WALL, x: 15 - i, y: 26})
}
for (let i = 0; i < 8; i++) {
  level_1_entities.push({entity: Names.WALL, x: 0 + i, y: 25})
}
for (let i = 0; i < 4; i++) {
  level_1_entities.push({entity: Names.WALL, x: 7 + i, y: 23})
}