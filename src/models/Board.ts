import {Cell} from "./Cell";
import {Enemy, Player, Wall} from "./entities/Entity";
import {Names} from "./entities/Names";
import {LEVEL_7, LevelsEntities} from "./levels/LevelsEntities";
import {randomInteger} from "../utils/randomInteger";


export class Board {
  cells: Cell[][] = [];
  movesCount: number = 0;
  limitMovesCount: number;
  gameOvered: boolean = false;
  gameLost: boolean = false;
  gameWined: boolean = false;
  entities: LevelsEntities[];

  constructor(limitMovesCount: number, entities: LevelsEntities[]) {
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

    this.addLevel7Entities();
  }

  private addLevel7Entities() {
    if (this.entities === LEVEL_7) {
      const wallsCount = randomInteger(120, 240);
      const enemiesCount = randomInteger(3, 4);
      this.limitMovesCount = Math.floor(enemiesCount * 2 + wallsCount * enemiesCount / 18) ;

      for (let i = 0; i < enemiesCount; i++) {
        const x = randomInteger(0, 29);
        const y = randomInteger(0, 29);
        const health = randomInteger(90, 190);

        if (this.getCell(x, y).isEmpty())
          new Enemy(this.getCell(x, y), 50, health)
      }
      for (let i = 0; i < wallsCount; i++) {
        const x = randomInteger(0, 29);
        const y = randomInteger(0, 29);

        if (this.getCell(x, y).isEmpty())
          new Wall(this.getCell(x, y))
      }

      new Player(this.getCell(randomInteger(0, 29), randomInteger(0, 29)), randomInteger(50, 100), 100)
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