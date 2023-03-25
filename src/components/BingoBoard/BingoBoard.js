import './BingoBoard.css';
import {useState} from "react";
import {getBoardTable, isWin, toggleTableCell} from "./utils";
import BoardCell from "../BoardCell/BoardCell";

function BingoBoard({ showWinEffect }) {
  const [board, setBoard] = useState(getBoardTable());

  return (
    <div className="bingoBoard">
      <table>
        {board.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} onClick={() => toggleBoardCell(i, j)}>
                <BoardCell phrase={cell.phrase} selected={!cell.centered && cell.selected} center={cell.centered} />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );

  function toggleBoardCell(i, j) {
    if (board[i][j].centered) return;

    const newBoard = toggleTableCell(board, [i, j])
    setBoard(newBoard);
    if (isWin(newBoard, [i, j])) {
      showWinEffect();
    }
  }
}

export default BingoBoard;


