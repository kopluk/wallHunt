import {Board} from "../models/Board";

export function restart(board: Board, setBoard: (board: Board) => void) {
  const newBoard = new Board(board.limitMovesCount);
  newBoard.initCells();
  newBoard.addEntities();
  newBoard.highLightCells();
  setBoard(newBoard)
}