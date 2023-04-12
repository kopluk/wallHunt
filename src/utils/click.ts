import {Cell} from "../models/Cell";
import {Board} from "../models/Board";

export function click(cell: Cell, board: Board, setBoard: (board: Board) => void) {
  const playerCell = board.getPlayerCell();
  if (playerCell && board.isMovesLeft()) {
    cell.attackOrMove(playerCell);
    if (playerCell.canMove(cell)) {
      board.incrementMovesCount();
    }
    board.gameOver();
    setBoard(board.getCopyBoard())
  }
}