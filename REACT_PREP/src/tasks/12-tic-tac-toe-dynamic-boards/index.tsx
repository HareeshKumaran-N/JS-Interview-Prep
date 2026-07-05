import './styles.css';

interface BoardProps {
  boardIndex: number;
}

function Board({ boardIndex }: BoardProps) {
  // TODO: cells state (array of 9 Cell), current player state (scoped to this board or lifted up)
  // TODO: handleCellClick(cellIndex) -> place mark if empty and board isn't already won
  // TODO: winner = getWinner(cells) (see ./logic.ts)

  return (
    <div className="ttt__board" data-board-index={boardIndex}>
      {Array.from({ length: 9 }).map((_, cellIndex) => (
        <button key={cellIndex} type="button" className="ttt__cell" />
      ))}
    </div>
  );
}

interface TicTacToeProps {
  boardCount?: number;
}

export default function TicTacToe({ boardCount = 1 }: TicTacToeProps) {
  return (
    <div className="ttt">
      {Array.from({ length: boardCount }).map((_, index) => (
        <Board key={index} boardIndex={index} />
      ))}
    </div>
  );
}
