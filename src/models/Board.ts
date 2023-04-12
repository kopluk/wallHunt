import {Cell} from "./Cell";
import {Enemy, Player, Wall} from "./Entity";
import {Names} from "./Names";


export class Board {
  cells: Cell[][] = [];
  movesCount: number = 0;
  limitMovesCount: number;
  gameOvered: boolean = false;
  gameLost: boolean = false;
  gameWined: boolean = false;


  constructor(limitMovesCount: number) {
    this.limitMovesCount = limitMovesCount;
  }

  public incrementMovesCount() {
    this.movesCount = this.movesCount + 1;
  }

  public initCells() {
    for (let i = 0; i < 15; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 15; j++) {
        row.push(new Cell(j, i, this))
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board(this.limitMovesCount);
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

  public addPlayer() {
    new Player(this.getCell(10, 2), 50, 100)
  }

  public addEnemies() {
    new Enemy(this.getCell(9, 3), 50, 110)
    new Enemy(this.getCell(6, 5), 50, 90)
  }

  public addWalls() {
    new Wall(this.getCell(10, 5))
    new Wall(this.getCell(11, 6))
    new Wall(this.getCell(11, 4))
  }

  public addEntities() {
    this.addPlayer();
    this.addEnemies();
    this.addWalls();
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