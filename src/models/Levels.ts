import {Board} from "./Board";
import {Enemy, Player, Wall} from "./Entity";

export enum Levels {
  LEVEL_1 = 'level_1',
  LEVEL_2 = 'level_2',
  LEVEL_3 = 'level_3',
  LEVEL_4 = 'level_4',
  LEVEL_5 = 'level_5',
  LEVEL_6 = 'level_6',
  LEVEL_7 = 'level_7',
}

export class Level_1 extends Board {

  constructor(limitMovesCount: number) {
    super(limitMovesCount);
  }

  addPlayer() {
    new Player(this.getCell(1, 9), 50, 100)
  }

  addEnemies() {
    new Enemy(this.getCell(11, 6), 50, 110)
    new Enemy(this.getCell(5, 8), 50, 90)
  }

  addWalls() {
    for (let i = 0; i < 8; i++) {
      new Wall(this.getCell(10, 7))
    }
  }
}

export class Level_2 extends Board {

  constructor(limitMovesCount: number) {
    super(limitMovesCount);
  }

  addPlayer() {
    new Player(this.getCell(1, 4), 50, 100)
  }

  addEnemies() {
    new Enemy(this.getCell(11, 11), 50, 110)
    new Enemy(this.getCell(13, 13), 50, 90)
    new Enemy(this.getCell(9, 8), 50, 90)
  }

  addWalls() {
    for (let i = 0; i < 4; i++) {
      new Wall(this.getCell(i, 5))
    }
    new Wall(this.getCell(11, 6))
    new Wall(this.getCell(11, 4))
  }
}