import {Cell} from "./Cell";
import {Enemy, Player, Wall} from "./entities/Entity";
import {Names} from "./entities/Names";
import {ILevelsEntities} from "../types/level";

export class Board {
  cells: Cell[][] = [];
  gameOvered: boolean = false;
  gameWined: boolean = false;

  movesCount: number = 0;
  limitsOfMoves: number[];
  entities: ILevelsEntities[];
  levelNumber: number;

  constructor(limitsOfMoves: number[], entities: ILevelsEntities[], levelNumber: number) {
    this.limitsOfMoves = limitsOfMoves;
    this.entities = entities;
    this.levelNumber = levelNumber;
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
    const newBoard = new Board(this.limitsOfMoves, this.entities, this.levelNumber);
    newBoard.cells = this.cells;
    newBoard.movesCount = this.movesCount;
    newBoard.gameOvered = this.gameOvered;
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
    // return this.movesCount < this.limitMovesCount;
    console.warn('isMovesLeft is deprecated')
    return true;
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

  public gameOver(): void {
    if (this.isEnemiesDead()) {
      this.gameWin()
      return;
    }
  }

  public gameWin() {
    this.gameWined = true;
    this.gameOvered = true;
  }

  public howMuchStars(): number {
    let countOfStars: number = 1;
    const sortedLimitsOfMoves = this.limitsOfMoves.sort((a, b) => b - a)

    let i = 0;
    for (const limitOfMovesCount of sortedLimitsOfMoves) {
      if (this.movesCount <= limitOfMovesCount) {
        countOfStars = i + 1;
      }
      i++;
    }
    return countOfStars;
  }
}