import { useGameContext } from '../state/GameContext.jsx';

function SudokuCell({
  row,
  col,
  value,
  isFixed,
  isSelected,
  isIncorrect,
  size,
}) {
  const { state, dispatch } = useGameContext();
  const isLocked = state.gameWon || isFixed;

  const classNames = ['cell'];
  if (isFixed) classNames.push('fixed');
  if (isSelected) classNames.push('selected');
  if (isIncorrect) classNames.push('incorrect');

  const onChange = (e) => {
    const raw = e.target.value.trim();
    if (raw === '') {
      dispatch({ type: 'UPDATE_CELL', row, col, value: 0 });
      return;
    }
    const parsed = Number(raw.slice(-1));
    if (!Number.isInteger(parsed)) return;
    if (parsed < 1 || parsed > size) return;
    dispatch({ type: 'UPDATE_CELL', row, col, value: parsed });
  };

  return (
    <input
      className={classNames.join(' ')}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value === 0 ? '' : value}
      disabled={isLocked}
      onFocus={() => dispatch({ type: 'SELECT_CELL', row, col })}
      onClick={() => dispatch({ type: 'SELECT_CELL', row, col })}
      onChange={onChange}
      aria-label={`Row ${row + 1} Column ${col + 1}`}
    />
  );
}

export default SudokuCell;
