import {Wall} from "../entities/Entity";
import {randomInteger} from "../../utils/randomInteger";

export interface LevelsEntities {
  entity: string;
  x: number;
  y: number;
  damage?: number;
  health?: number
}
//__________________________________________________________________________________________
// УРОВЕНЬ 1
export const LEVEL_1: Array<LevelsEntities> = [
  {entity: 'enemy', x: 1, y: 1, damage: 50, health: 110},
  {entity: 'enemy', x: 16, y: 1, damage: 50, health: 110},
  {entity: 'enemy', x: 10, y: 11, damage: 50, health: 110},
  {entity: 'enemy', x: 21, y: 15, damage: 50, health: 110},
  {entity: 'enemy', x: 15, y: 15, damage: 50, health: 110},
  {entity: 'enemy', x: 1, y: 28, damage: 50, health: 110},
  {entity: 'enemy', x: 28, y: 28, damage: 50, health: 110},

  {entity: 'wall', x: 7, y: 24},

  {entity: 'player', x: 10, y: 2, damage: 50, health: 100},
]
// по вертикали
for (let i = 0; i < 6; i++) {
    LEVEL_1.push({entity: 'wall', x: 7, y: i})
    LEVEL_1.push({entity: 'wall', x: 13, y: i})
}
for (let i = 0; i < 4; i++) {
    LEVEL_1.push({entity: 'wall', x: 13, y: 14 + i})
}
for (let i = 0; i < 7; i++) {
    LEVEL_1.push({entity: 'wall', x: 18, y: 14 + i})
}

// по горизонтали
for (let i = 0; i < 3; i++) {
    LEVEL_1.push({entity: 'wall', x: i, y: 5})
}

for (let i = 0; i < 8; i++) {
  LEVEL_1.push({entity: 'wall', x: 18 + i, y: 5})
}

for (let i = 0; i < 22; i++) {
  LEVEL_1.push({entity: 'wall', x: 4 + i, y: 8})
}

for (let i = 0; i < 6; i++) {
  LEVEL_1.push({entity: 'wall', x: 0 + i, y: 13})
}

for (let i = 0; i < 12; i++) {
  LEVEL_1.push({entity: 'wall', x: 12 + i, y: 13})
}

for (let i = 0; i < 12; i++) {
  LEVEL_1.push({entity: 'wall', x: 3 + i, y: 18})
}

for (let i = 0; i < 6; i++) {
  LEVEL_1.push({entity: 'wall', x: 19 + i, y: 20})
}

for (let i = 0; i < 14; i++) {
  LEVEL_1.push({entity: 'wall', x: 29 - i, y: 25})
}
for (let i = 0; i < 5; i++) {
  LEVEL_1.push({entity: 'wall', x: 15 - i, y: 26})
}
for (let i = 0; i < 8; i++) {
  LEVEL_1.push({entity: 'wall', x: 0 + i, y: 25})
}
for (let i = 0; i < 4; i++) {
  LEVEL_1.push({entity: 'wall', x: 7 + i, y: 23})
}

//__________________________________________________________________________________________
// УРОВЕНЬ 2
export const LEVEL_2: Array<LevelsEntities> = [
  {entity: 'wall', x: 10, y: 5},
  {entity: 'wall', x: 11, y: 6},
  {entity: 'wall', x: 11, y: 4},
  {entity: 'wall', x: 12, y: 5},

  {entity: 'wall', x: 6, y: 4},
  {entity: 'wall', x: 7, y: 5},

  {entity: 'enemy', x: 8, y: 2, damage: 50, health: 90},

  {entity: 'player', x: 10, y: 2, damage: 50, health: 100},
]

//__________________________________________________________________________________________
// УРОВЕНЬ 3
export const LEVEL_3: Array<LevelsEntities> = [
  {entity: 'enemy', x: 9, y: 3, damage: 50, health: 110},
  {entity: 'enemy', x: 6, y: 5, damage: 50, health: 90},

  {entity: 'player', x: 10, y: 2, damage: 50, health: 100},
]

//__________________________________________________________________________________________
// УРОВЕНЬ 4
export const LEVEL_4: Array<LevelsEntities> = [
  {entity: 'enemy', x: 9, y: 3, damage: 50, health: 110},
  {entity: 'enemy', x: 6, y: 5, damage: 50, health: 90},

  {entity: 'player', x: 10, y: 2, damage: 50, health: 100},
]

//__________________________________________________________________________________________
// УРОВЕНЬ 5
export const LEVEL_5: Array<LevelsEntities> = [
  {entity: 'enemy', x: 9, y: 3, damage: 50, health: 110},
  {entity: 'enemy', x: 6, y: 5, damage: 50, health: 90},

  {entity: 'player', x: 10, y: 2, damage: 50, health: 100},
]

//__________________________________________________________________________________________
// УРОВЕНЬ 6
export const LEVEL_6: Array<LevelsEntities> = [
  {entity: 'enemy', x: 9, y: 3, damage: 50, health: 110},
  {entity: 'enemy', x: 6, y: 5, damage: 50, health: 90},

  {entity: 'player', x: 10, y: 2, damage: 50, health: 100},
]

//__________________________________________________________________________________________
// УРОВЕНЬ 7
export const LEVEL_7: Array<LevelsEntities> = []

