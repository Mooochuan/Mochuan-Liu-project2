import SudokuCell from './SudokuCell.jsx';

function SudokuBoard({ board, fixed, config, selectedCell, errors }) {
  const { size, subCols, subRows } = config;

  return (
    <div
      className={`board board-${size}`}
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
    >
      {board.map((row, r) =>
        row.map((value, c) => {
          const key = `${r}-${c}`;
          const isSelected =
            selectedCell && selectedCell.row === r && selectedCell.col === c;
          const style = {};

          if ((c + 1) % subCols === 0 && c !== size - 1) {
            style.borderRightWidth = '2px';
          }
          if ((r + 1) % subRows === 0 && r !== size - 1) {
            style.borderBottomWidth = '2px';
          }

          return (
            <div className="cell-wrap" key={key} style={style}>
              <SudokuCell
                row={r}
                col={c}
                value={value}
                isFixed={fixed[r][c]}
                isSelected={isSelected}
                isIncorrect={errors.has(key)}
                size={size}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default SudokuBoard;
