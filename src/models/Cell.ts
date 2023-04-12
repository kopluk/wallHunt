import {Entity} from "./Entity";
import {Board} from "./Board";
import {Names} from "./Names";

export class Cell {
  x: number;
  y: number;
  id: number = Math.random();
  occupied: Entity | null = null;
  board: Board;
  available: boolean = false;

  constructor(x: number, y: number, board: Board) {
    this.x = x;
    this.y = y;
    this.board = board;
  }

  public canMove(cell: Cell): boolean {
    const absx = Math.abs(this.x - cell.x);
    const absy = Math.abs(this.y - cell.y);

    if (cell.isWall()) {
      return false;
    }

    if (this.isBetweenWalls(cell)) {
      return false
    }

    if (this.canGoBehind(cell)) {
      return true
    }

    if ((absx <= 2 && absy <= 2) && (absx !== 0 || absy !== 0)) {
      if (this.isEmptyVertical(cell)) {
        return true;
      }
      if (this.isEmptyHorizontal(cell)) {
        return true;
      }
      if (this.isEmptyDiagonal(cell)) {
        return true;
      }
    }

    return false;
  }

  isEmpty(): boolean {
    return this.occupied === null;
  }

  isWall(): boolean {
    return this.occupied?.name === Names.WALL;
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.x !== target.x)
      return false;

    const min = Math.min(this.y, target.y)
    const max = Math.max(this.y, target.y)

    for (let y = min + 1; y < max; y++) {
      if (!this.board.getCell(this.x, y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyHorizontal(target: Cell): boolean {
    if (this.y !== target.y)
      return false;

    const min = Math.min(this.x, target.x)
    const max = Math.max(this.x, target.x)

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false;
      }
    }
    return true;
  }

  isEmptyDiagonal(target: Cell): boolean {
    const absX = Math.abs(this.x - target.x)
    const absY = Math.abs(this.y - target.y);
    if (absX !== absY)
      return false;

    const dy = this.y < target.y ? 1 : -1;
    const dx = this.x < target.x ? 1 : -1;

    for (let i = 1; i < absX; i++) {
      if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
        return false;
      }
    }

    return true;
  }

  canGoBehind(target: Cell): boolean {
    const absx = Math.abs(this.x - target.x);
    const absy = Math.abs(this.y - target.y);

    const dx = this.x < target.x ? 1 : -1;
    const dy = this.y < target.y ? 1 : -1;
    if ((absx === 2 && absy === 1) || (absx === 1 && absy === 2)) {
      if (this.board.getCell(this.x + dx, this.y + dy).occupied) {
        return false;
      }

      if (absx === 2) {
        if (dx > 0) {// значит выше
          if (!this.board.getCell(this.x + 1, this.y).occupied) {
            return true;
          }
        } else {
          if (!this.board.getCell(this.x - 1, this.y).occupied) {
            return true;
          }
        }
      }

      if (absy === 2) {
        if (dy > 0) {// значит справа
          if (!this.board.getCell(this.x, this.y + 1).occupied) {
            return true;
          }
        } else {
          if (!this.board.getCell(this.x, this.y - 1).occupied) {
            return true;
          }
        }
      }
    }
    return false
  }

  isBetweenWalls(target: Cell): boolean {
    const absx = Math.abs(this.x - target.x);
    const absy = Math.abs(this.y - target.y);

    const dx = this.x < target.x ? 1 : -1;
    const dy = this.y < target.y ? 1 : -1;

    if ((absx === 2 && absy === 2) || (absx === 1 && absy === 1)) {
      if (
        (this.board.getCell(this.x, this.y + dy).occupied) &&
        (this.board.getCell(this.x + dx, this.y).occupied)
      ) {
        return true;
      }
    }

    return false;
  }

  public attackOrMove(playerCell: Cell) {
    if (playerCell.canMove(this)) {
      if (this.isAttack()) {
        this.Attack(playerCell)
      } else {
        this.setPlayerCell(this, playerCell)
      }
    }
  }

  private setPlayerCell(cell: Cell, playerCell: Cell) {
    cell.occupied = playerCell.occupied;
    playerCell.occupied = null;
  }

  private isAttack(): boolean {
    return this.occupied?.name === Names.ENEMY
  }

  private Attack(playerCell: Cell) {
    if (this.occupied?.health && playerCell.occupied?.damage) {
      this.occupied.health = this.occupied.health - playerCell.occupied.damage;
      if (this.isDead()) {
        this.dead();
      }
    }
  }

  private isDead(): boolean {
    return !!(this.occupied && this.occupied.health <= 0);
  }

  private dead() {
    this.occupied = null;
  }
}