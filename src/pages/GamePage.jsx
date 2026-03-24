import { useEffect } from 'react';
import SudokuBoard from '../components/SudokuBoard.jsx';
import Timer from '../components/Timer.jsx';
import { useGameContext } from '../state/GameContext.jsx';

function GamePage({ mode }) {
  const { state, dispatch } = useGameContext();

  useEffect(() => {
    dispatch({ type: 'START_NEW_GAME', mode });
  }, [dispatch, mode]);

  const title = mode === 'easy' ? 'Easy Game (6x6)' : 'Normal Game (9x9)';

  return (
    <section className="page game-page">
      <h1>{title}</h1>
      <Timer elapsedSeconds={state.elapsedSeconds} />
      <SudokuBoard
        board={state.board}
        fixed={state.fixed}
        config={state.config}
        selectedCell={state.selectedCell}
        errors={state.errors}
      />
      <div className="game-actions">
        <button
          className="btn"
          type="button"
          onClick={() => dispatch({ type: 'START_NEW_GAME', mode })}
        >
          New Game
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={() => dispatch({ type: 'RESET_GAME' })}
        >
          Reset
        </button>
      </div>
      {state.gameWon && (
        <p className="win-banner">Congratulations! You solved the puzzle.</p>
      )}
    </section>
  );
}

export default GamePage;
