import { formatElapsed } from '../state/sudokuUtils.js';

function Timer({ elapsedSeconds }) {
  return (
    <p className="timer" aria-live="polite">
      Time: {formatElapsed(elapsedSeconds)}
    </p>
  );
}

export default Timer;
