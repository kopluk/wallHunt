import {ILevelsEntities} from "../../types/level";
import {Names} from "../entities/Names";

export const level_2_entities: ILevelsEntities[] = [
  {entity: Names.WALL, x: 26, y: 9},
  {entity: Names.WALL, x: 26, y: 12},
  {entity: Names.WALL, x: 24, y: 12},
  {entity: Names.WALL, x: 14, y: 16},
  {entity: Names.WALL, x: 17, y: 23},
  {entity: Names.WALL, x: 19, y: 24},
  {entity: Names.WALL, x: 28, y: 5},
  {entity: Names.WALL, x: 22, y: 11},
  {entity: Names.WALL, x: 19, y: 13},
  {entity: Names.WALL, x: 8, y: 11},
  {entity: Names.WALL, x: 12, y: 12},
  {entity: Names.WALL, x: 13, y: 7},
  {entity: Names.WALL, x: 15, y: 6},
  {entity: Names.WALL, x: 17, y: 2},
  {entity: Names.WALL, x: 1, y: 23},
  {entity: Names.WALL, x: 3, y: 17},
  {entity: Names.WALL, x: 22, y: 16},
  {entity: Names.WALL, x: 19, y: 14},
  {entity: Names.WALL, x: 18, y: 16},

  {entity: Names.ENEMY, x: 29, y: 0, damage: 50, health: 130},
  {entity: Names.ENEMY, x: 17, y: 1, damage: 50, health: 130},
  {entity: Names.ENEMY, x: 24, y: 24, damage: 50, health: 130},
  {entity: Names.ENEMY, x: 3, y: 16, damage: 50, health: 130},
  {entity: Names.ENEMY, x: 28, y: 12, damage: 50, health: 130},

  {entity: Names.PLAYER, x: 0, y: 29, damage: 50, health: 100},
]

// по диоганали

for (let i = 3; i < 29; i++) {
  if (i !== 7 && i !== 9 && i !== 12 && i !== 17 && i !== 20 && i !== 22 && i !== 23)
    level_2_entities.push({entity: Names.WALL, x: i, y: 28 - i + 3})
}

for (let i = 1; i < 26; i++) {
  if (i !== 6 && i !== 7 && i !== 10 && i !== 12 && i !== 14 && i !== 19 && i !== 21)
    level_2_entities.push({entity: Names.WALL, x: i, y: 28 - i - 2})
}

for (let i = 2; i < 16; i++) {
  level_2_entities.push({entity: Names.WALL, x: i, y: 15 - i + 2})
}

for (let i = 0; i < 5; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 5, y: 2 - i + 4})
}
for (let i = 0; i < 7; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 3, y: i })
}

// по горизонтали

for (let i = 7; i < 28; i++) {
  level_2_entities.push({entity: Names.WALL, x: i, y: 25})
}

for (let i = 8; i < 29; i++) {
  if (i !== 17 && i !== 18)
    level_2_entities.push({entity: Names.WALL, x: i, y: 22})
}

for (let i = 0; i < 3; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 6, y: 17})
  level_2_entities.push({entity: Names.WALL, x: i + 27, y: 7})
  level_2_entities.push({entity: Names.WALL, x: i + 13, y: 5})
  level_2_entities.push({entity: Names.WALL, x: i + 26, y: 9})
}

for (let i = 0; i < 4; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 7, y: 15})
  level_2_entities.push({entity: Names.WALL, x: i + 21, y: 18})
  level_2_entities.push({entity: Names.WALL, x: i + 14, y: 18})
}

for (let i = 0; i < 6; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 24, y: 16})
}

for (let i = 0; i < 6; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 7, y: 13})
  level_2_entities.push({entity: Names.WALL, x: i + 8, y: 10})
  level_2_entities.push({entity: Names.WALL, x: i + 12, y: 8})
}

for (let i = 0; i < 2; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 22, y: 10})
  level_2_entities.push({entity: Names.WALL, x: i + 25, y: 14})
  level_2_entities.push({entity: Names.WALL, x: i + 28, y: 11})
}

for (let i = 0; i < 9; i++) {
  level_2_entities.push({entity: Names.WALL, x: i + 15, y: 20})
}

//по вертикали

for (let i = 0; i < 2; i++) {
  level_2_entities.push({entity: Names.WALL, x: 5, y: i + 13})
  level_2_entities.push({entity: Names.WALL, x: 20, y: i + 7})
  level_2_entities.push({entity: Names.WALL, x: 23, y: i + 14})
  level_2_entities.push({entity: Names.WALL, x: 13, y: i + 19})
}

for (let i = 0; i < 3; i++) {
  level_2_entities.push({entity: Names.WALL, x: 22, y: i + 5})
  level_2_entities.push({entity: Names.WALL, x: 16, y: i + 11})
  level_2_entities.push({entity: Names.WALL, x: 21, y: i + 13})
  level_2_entities.push({entity: Names.WALL, x: 20, y: i})
  level_2_entities.push({entity: Names.WALL, x: 28, y: i + 19})
}

for (let i = 0; i < 4; i++) {
  level_2_entities.push({entity: Names.WALL, x: 25, y: i + 9})
  level_2_entities.push({entity: Names.WALL, x: 25, y: i + 17})
  level_2_entities.push({entity: Names.WALL, x: 19, y: i + 16})
}

for (let i = 0; i < 5; i++) {
  level_2_entities.push({entity: Names.WALL, x: 2, y: i + 17})
}