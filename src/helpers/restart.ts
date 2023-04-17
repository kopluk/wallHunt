import {Board} from "../models/Board";
import {createLevel_7_Template} from "./createLevel_7_Template";

export function restart(board: Board, setBoard: (board: Board) => void) {
  let newBoard: Board;
  if (board.levelNumber === 7) {
    const {limitsOfMoves, levelEntities} = createLevel_7_Template();
    newBoard = new Board(limitsOfMoves, levelEntities, board.levelNumber);
  } else {
    newBoard = new Board(board.limitsOfMoves, board.entities, board.levelNumber);
  }
  newBoard.initCells();
  newBoard.addEntities();
  newBoard.highLightCells();
  setBoard(newBoard)
}