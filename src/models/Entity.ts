import {Cell} from "./Cell";
import {Names} from "./Names";

export class Entity {
  name: Names;
  cell: Cell;
  health: number = 0;
  maxHealth: number = 0;
  damage: number = 0;

  constructor(cell: Cell, damage: number, health: number) {
    this.name = Names.ENTITY;
    this.cell = cell;
    this.cell.occupied = this;
    this.damage = damage;
    this.health = health;
    this.maxHealth = health;
  }
}

export class Player extends Entity {
  constructor(cell: Cell, damage: number, health: number) {
    super(cell, damage, health);
    this.name = Names.PLAYER;
  }
}

export class Enemy extends Entity {
  constructor(cell: Cell, damage: number, health: number) {
    super(cell, damage, health);
    this.name = Names.ENEMY;
  }
}

export class Wall extends Entity {

  constructor(cell: Cell, damage: number = 0, health: number = 1000000000) {
    super(cell, damage, health);
    this.name = Names.WALL;
  }
}