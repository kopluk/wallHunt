import {ILevelsEntities} from "../../types/level";
import {Names} from "../entities/Names";


export const level_3_entities: ILevelsEntities[] = [
  {entity: Names.ENEMY, x: 26, y: 3, damage: 50, health: 120},

  {entity: Names.PLAYER, x: 0, y: 29, damage: 50, health: 100},
];

setWallTrap(1, 1)
setWallTrap(28, 1)
setWallTrap(28, 28)
setWallTrap(23, 6)

// первая диагональ порталов

setPortal(0, 27, 2, 27)//
setPortal(1, 28, 3, 29)//
setPortal(2, 29, 0, 26)//
// вторая диагональ порталов

setPortal(0, 24, 4, 27)//
setPortal(1, 25, 6, 29)//-//
setPortal(2, 26, 2, 24)//
setPortal(3, 27, 0, 23)//-//
setPortal(4, 28, 1, 24)//
setPortal(5, 29, 5, 27)//-//
// третья диагональ порталов

setPortal(0, 21, 3, 25)//
setPortal(1, 22, 5, 25)//-//
setPortal(2, 23, 8, 28)//
setPortal(3, 24, 7, 27)//
setPortal(4, 25, 3, 28)//
setPortal(5, 26, 9, 29)//-//
setPortal(6, 27, 4, 23)//
setPortal(7, 28, 0, 20)//-//
setPortal(8, 29, 4, 24)//
// четвертая диагональ порталов

setPortal(0, 18, 10, 21)//-//
setPortal(1, 19, 14, 21)// - 2
setPortal(2, 20, 25, 27)// - 3
setPortal(3, 21, 3, 25)// - back
setPortal(4, 22, 3, 17)// -1
setPortal(5, 23, 21, 27)//-//
setPortal(6, 24, 6, 28)// - back
setPortal(7, 25, 14, 27)// - 3
setPortal(8, 26, 0, 9)// - 1
setPortal(9, 27, 0, 22)// back
setPortal(10, 28, 2, 15)//-//
setPortal(11, 29, 12, 24)// - 2

//стенки
// горизонталь
for (let i = 0; i < 23; i++) {
  level_3_entities.push({entity: Names.WALL, x: i + 7, y: 19})
}
for (let i = 0; i < 18; i++) {
  level_3_entities.push({entity: Names.WALL, x: i + 12, y: 24})
}
for (let i = 0; i < 6; i++) {
  level_3_entities.push({entity: Names.WALL, x: i, y: 8})
}
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    level_3_entities.push({entity: Names.WALL, x: j + 9 + 3 * i, y: i + 7});
  }
}
for (let i = 0; i < 3; i++) {
  level_3_entities.push({entity: Names.WALL, x: i + 24, y: 2})
  level_3_entities.push({entity: Names.WALL, x: i + 25, y: 5})
}
// вертикаль
for (let i = 0; i < 19; i++) {
  level_3_entities.push({entity: Names.WALL, x: 6, y: i})
}
for (let i = 0; i < 4; i++) {
  level_3_entities.push({entity: Names.WALL, x: 16, y: i + 20})
}
for (let i = 0; i < 7; i++) {
  level_3_entities.push({entity: Names.WALL, x: 21, y: i + 3})
}
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 4; j++) {
    level_3_entities.push({entity: Names.WALL, x: i + 16, y: j + 1 + 4 * i});
  }
}
for (let i = 0; i < 2; i++) {
  level_3_entities.push({entity: Names.WALL, x: 24, y: i + 3});
  level_3_entities.push({entity: Names.WALL, x: 27, y: i + 3});
}
// диагональ
for (let i = 0; i < 3; i++) {
  level_3_entities.push({entity: Names.WALL, x: i + 4, y: 21 - i});
  level_3_entities.push({entity: Names.WALL, x: i + 9, y: 26 - i});
  level_3_entities.push({entity: Names.WALL, x: i + 21, y: 2 - i});
}
for (let i = 0; i < 9; i++) {
  level_3_entities.push({entity: Names.WALL, x: i + 7, y: 8 - i});
}
for (let i = 0; i < 10; i++) {
  level_3_entities.push({entity: Names.WALL, x: i + 7, y: 9 + i});
}
for (let i = 0; i < 13; i++) {
  level_3_entities.push({entity: Names.WALL, x: i + 17, y: 18 - i});
}

// порталы
// 1 область
setPortal(1, 10, 29, 20)// - 6
setPortal(4, 10, 0, 3)// - 4
setPortal(1, 12, 3, 22)// back
setPortal(4, 12, 11, 18)//-//
setPortal(1, 14, 19, 22)// - 6
setPortal(4, 14, 4, 2)// - 4
setPortal(1, 16, 12, 17)// - 5
setPortal(4, 16, 7, 26)// back
setPortal(4, 18, 7, 10)// - 5
// 2 область
setPortal(6, 20, 12, 27)// - 5
setPortal(8, 20, 5, 24)// back
setPortal(6, 22, 18, 21)// - 6
setPortal(8, 22, 2, 2)// - 4
setPortal(8, 24, 1, 3)//-//

setPortal(11, 20, 14, 18)// - 5
setPortal(11, 23, 17, 22)// - 6
setPortal(14, 20, 4, 0)// - 4
setPortal(14, 23, 2, 21)// back
// 3 область
setPortal(12, 26, 7, 29)// back
setPortal(15, 26, 5, 3)// - 4
setPortal(18, 26, 2, 24)// back
setPortal(22, 26, 15, 18)// - 5
setPortal(25, 26, 28, 21)// - 6

setPortal(12, 28, 21, 21)//-//
setPortal(15, 28, 0, 20)// back
setPortal(18, 28, 3, 2)// - 4
setPortal(22, 28, 17, 20)// - 6
setPortal(25, 28, 13, 17)// - 5

setPortal(27, 29, 28, 28)
// 4 область
setPortal(4, 1, 20, 17)// - 9
setPortal(4, 3, 8, 4)// - 7
setPortal(4, 5, 28, 8)// - 9
setPortal(4, 7, 16, 15)//-//

setPortal(2, 3, 12, 11)// - 8
setPortal(2, 5, 16, 16)// - 8
setPortal(2, 7, 11, 0)// - 7

setPortal(0, 2, 1, 1)
// 5 область
setPortal(7, 12, 12, 13)// - 8
setPortal(9, 14, 26, 17)//-//
setPortal(11, 16, 11, 3)// - 7
setPortal(13, 18, 22, 17)// - 9

setPortal(7, 16, 12, 10)// - 8
setPortal(7, 18, 9, 4)// - 7

setPortal(9, 16, 24, 14)// - 9
setPortal(9, 18, 1, 1)
// 6 область
setPortal(18, 20, 3, 5)// back - 4
setPortal(20, 20, 11, 2)// - 7
setPortal(23, 20, 25, 21)// back - 6
setPortal(26, 20, 8, 8)// - 8
setPortal(28, 20, 13, 0)// - 7

setPortal(18, 23, 24, 13)// - 9
setPortal(20, 23, 12, 12)// - 8
setPortal(23, 23, 9, 2)//-//
setPortal(26, 23, 8, 16)// back - 5
setPortal(28, 23, 24, 12)// - 9
// 7 область
setPortal(8, 1, 14, 4)//-//
setPortal(10, 1, 11, 6)// - 10
setPortal(12, 1, 10, 16)// back - 5

setPortal(8, 3, 23, 3)// - 12
setPortal(10, 3, 23, 21)// back - 6

setPortal(8, 5, 19, 2)// - 11
// 8 область
setPortal(9, 9, 28, 28)// back - 4
setPortal(11, 9, 28, 28)
setPortal(13, 9, 28, 28)// - 12

setPortal(11, 11, 15, 3)// - 10
setPortal(13, 11, 13, 27)// back - 3
setPortal(15, 11, 20, 21)// back - 6
setPortal(17, 11, 19, 0)// - 11
setPortal(19, 11, 28, 6)//-//

setPortal(13, 13, 0, 29)// back - 1-1
setPortal(15, 13, 2, 6)// back - 4
setPortal(17, 13, 23, 8)// - 12
setPortal(19, 13, 10, 22)// back - 2
setPortal(21, 13, 26, 7)// - 12

setPortal(15, 15, 11, 5)// - 10
setPortal(17, 15, 10, 15)// back - 5
setPortal(19, 15, 17, 2)// - 11

setPortal(17, 17, 2, 11)// back - 1
// 9 область
setPortal(19, 18, 11, 5)// - 10
setPortal(21, 18, 2, 10)// back - 1
setPortal(23, 18, 3, 3)// back - 4
setPortal(25, 18, 25, 22)// back - 6
setPortal(27, 18, 16, 26)// back - 3
setPortal(29, 18, 0, 29)// back - 1-1

setPortal(21, 16, 15, 3)// - 10
setPortal(23, 16, 24, 20)// back - 6
setPortal(25, 16, 21, 0)// - 11
setPortal(27, 16, 11, 21)// back - 2
setPortal(29, 16, 8, 13)// back - 5

setPortal(23, 14, 18, 2)// - 11
setPortal(25, 14, 12, 15)// back - 5
setPortal(27, 14, 3, 0)// back - 4
setPortal(29, 14, 17, 3)//-//

setPortal(25, 12, 25, 1)// - 12
setPortal(27, 12, 0, 13)// back - 1
setPortal(29, 12, 5, 5)// back - 4

setPortal(27, 10, 27, 6)// - 12
setPortal(29, 10, 19, 21)// back - 6

setPortal(29, 8, 8, 17)// back - 5
// 10 область
setPortal(15, 2, 9, 4)// back - 7

setPortal(13, 4, 25, 21)// back - 6
setPortal(15, 4, 24, 15)// back - 9

setPortal(12, 6, 10, 13)// back - 5
setPortal(14, 6, 15, 12)// back - 8
setPortal(16, 6, 3, 7)// back - 4

setPortal(16, 8, 25, 4)//-//
// 11 область
setPortal(17, 1, 26, 13)// back - 9
setPortal(19, 1, 22, 21)// back - 6
setPortal(21, 1, 20, 13)// back - 8

setPortal(18, 3, 8, 12)// back - 5
setPortal(20, 3, 9, 0)// back - 7

setPortal(18, 5, 1, 6)// back - 4
setPortal(20, 5, 28, 18)// back - 9

setPortal(18, 7, 11, 2)// back - 7
setPortal(20, 7, 25, 3)//-//

setPortal(18, 9, 0, 29)// - 1-1
setPortal(20, 9, 16, 16)// back - 8
// 12 область

setPortal(24, 0, 28, 14)// back - 9
setPortal(26, 0, 3, 6)// back - 4

setPortal(22, 2, 10, 4)// back - 7
setPortal(22, 4, 0, 29)// - 1-1

setPortal(29, 2, 26, 4)//-//
setPortal(29, 4, 21, 23)// back - 6

setPortal(22, 7, 5, 7)// back - 4

setPortal(25, 7, 9, 12)// back - 5
setPortal(27, 7, 22, 12)// back - 8

setPortal(22, 9, 2, 0)// back - 4
setPortal(24, 9, 19, 20)// back - 6

// вспомогательные функции


function setPortal(x: number, y: number, destinationX: number, destinationY: number) {
  level_3_entities.push({entity: Names.PORTAL, x, y, destination: {x: destinationX, y: destinationY}})
}

function setWallTrap(x: number, y: number) {
  level_3_entities.push({entity: Names.WALL, x: x + 1, y: y})
  level_3_entities.push({entity: Names.WALL, x: x - 1, y: y})
  level_3_entities.push({entity: Names.WALL, x: x, y: y + 1})
  level_3_entities.push({entity: Names.WALL, x: x, y: y - 1})
}