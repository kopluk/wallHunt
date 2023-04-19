import {Cell} from "../Cell";
import {Names} from "./Names";

export class Entity {
  name: Names;
  cell: Cell;
  health: number = 0;
  maxHealth: number = 0;
  damage: number = 0;
  destination: Cell | null = null;

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
  constructor(cell: Cell) {
    super(cell, 0, 100000000);
    this.name = Names.WALL;
  }
}

export class Portal extends Entity {
  constructor(cell: Cell, destination: Cell) {
    super(cell, 0, 100000000);
    this.name = Names.PORTAL;
    this.destination = destination;
  }
}