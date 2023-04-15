import {Cell} from "./Cell";
import {Enemy, Player, Wall} from "./entities/Entity";
import {Names} from "./entities/Names";
import {LevelsEntities} from "./levels/LevelsEntities";
import {randomInteger} from "../utils/randomInteger";
import {ILevelsEntities} from "../types/level";


export class Board {
  cells: Cell[][] = [];
  gameOvered: boolean = false;
  gameLost: boolean = false;
  gameWined: boolean = false;

  movesCount: number = 0;
  limitMovesCount: number;
  entities: ILevelsEntities[];
  levelNumber: number;

  constructor(limitMovesCount: number, entities: ILevelsEntities[], levelNumber: number) {
    this.limitMovesCount = limitMovesCount;
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
    const newBoard = new Board(this.limitMovesCount, this.entities, this.levelNumber);
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

  public gameOver(): void {
    if (this.isEnemiesDead()) {
      this.gameWin()
      return;
    }
    if (!this.isMovesLeft()) {
      this.gameLose()
      return;
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