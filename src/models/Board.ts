import {Cell} from "./Cell";
import {Enemy, Player, Wall} from "./entities/Entity";
import {Names} from "./entities/Names";
import {LEVEL_7, Levels} from "./levels/Levels";
import {randomInteger} from "../utils/randomInteger";


export class Board {
  cells: Cell[][] = [];
  movesCount: number = 0;
  limitMovesCount: number;
  gameOvered: boolean = false;
  gameLost: boolean = false;
  gameWined: boolean = false;
  entities: Levels[];


  constructor(limitMovesCount: number, entities: Levels[]) {
    this.limitMovesCount = limitMovesCount;
    this.entities = entities;
  }

  public incrementMovesCount() {
    this.movesCount = this.movesCount + 1;
  }

  public initCells() {
    for (let i = 0; i < 30; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 30; j++) {
        row.push(new Cell(j, i, this))
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board(this.limitMovesCount, this.entities);
    newBoard.cells = this.cells;
    newBoard.movesCount = this.movesCount;
    newBoard.gameOvered = this.gameOvered;
    newBoard.gameLost = this.gameLost;
    newBoard.gameWined = this.gameWined;
    newBoard.highLightCells();
    return newBoard;
  }

  public getPlayerCell(): Cell | undefined {
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells.length; j++) {
        if (this.cells[i][j].occupied?.name === Names.PLAYER) {
          return this.cells[i][j];
        }
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  // public addPlayer() {
  //   new Player(this.getCell(10, 2), 50, 100)
  // }
  //
  // public addEnemies() {
  //   new Enemy(this.getCell(9, 3), 50, 110)
  //   new Enemy(this.getCell(6, 5), 50, 90)
  // }
  //
  // public addWalls() {
  //   new Wall(this.getCell(10, 5))
  //   new Wall(this.getCell(11, 6))
  //   new Wall(this.getCell(11, 4))
  // }

  public addEntities() {
    for (const entity of this.entities) {
      const entityName = entity.entity;
      if (entityName === Names.WALL) {
        new Wall(this.getCell(entity.x, entity.y))
      }
      if (entityName === Names.ENEMY && entity.damage && entity.health) {
        new Enemy(this.getCell(entity.x, entity.y), entity.damage, entity.health)
      }
      if (entityName === Names.PLAYER && entity.damage && entity.health) {
        new Player(this.getCell(entity.x, entity.y), entity.damage, entity.health)
      }
    }

    if (this.entities === LEVEL_7) {
      const wallsCount = randomInteger(40, 80);
      const enemiesCount = randomInteger(2, 3);
      this.limitMovesCount = Math.floor((enemiesCount * 3 + (wallsCount * enemiesCount) - wallsCount * (enemiesCount - 1)) / 2) ;

      for (let i = 0; i < enemiesCount; i++) {
        const x = randomInteger(0, 29);
        const y = randomInteger(0, 29);

        if (this.getCell(x, y).isEmpty())
          new Enemy(this.getCell(x, y), 50, 110)
      }
      for (let i = 0; i < wallsCount; i++) {
        const x = randomInteger(0, 29);
        const y = randomInteger(0, 29);

        if (this.getCell(x, y).isEmpty())
          new Wall(this.getCell(x, y))
      }
    }
  }

  public highLightCells() {
    const playerCell = this.getPlayerCell();
    if (playerCell) {
      for (let i = 0; i < this.cells.length; i++) {
        const row = this.cells[i];
        for (let j = 0; j < this.cells.length; j++) {
          const target = row[j];
          target.available = playerCell.canMove(target);
        }
      }
    }
  }

  public isMovesLeft(): boolean {
    return this.movesCount < this.limitMovesCount;
  }

  public isEnemiesDead(): boolean {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < this.cells.length; j++) {
        const cell = row[j];
        if (cell.occupied?.name === Names.ENEMY) {
          return false;
        }
      }
    }
    return true;
  }

  public gameOver(): string | undefined {
    if (this.isEnemiesDead()) {
      this.gameWin()
      return 'win';
    }
    if (!this.isMovesLeft()) {
      this.gameLose()
      return 'lose';
    }
  }

  public gameWin() {
    this.gameWined = true;
    this.gameOvered = true;
  }

  public gameLose() {
    this.gameLost = true;
    this.gameOvered = true;
  }
}