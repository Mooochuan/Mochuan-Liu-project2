import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import {
  buildPuzzle,
  findErrorCells,
  isBoardComplete,
  MODE_CONFIG,
} from './sudokuUtils.js';

const GameContext = createContext(null);

const initialState = {
  mode: 'easy',
  config: MODE_CONFIG.easy,
  initialBoard: [],
  board: [],
  solution: [],
  fixed: [],
  selectedCell: null,
  errors: new Set(),
  elapsedSeconds: 0,
  gameWon: false,
};

function cloneBoard(board) {
  return board.map((row) => [...row]);
}

function startStateFromMode(mode) {
  const { config, solution, initialBoard, fixed } = buildPuzzle(mode);
  const board = cloneBoard(initialBoard);
  const errors = findErrorCells(board, config);
  return {
    mode,
    config,
    solution,
    initialBoard,
    board,
    fixed,
    selectedCell: null,
    errors,
    elapsedSeconds: 0,
    gameWon: false,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'START_NEW_GAME':
      return startStateFromMode(action.mode);

    case 'RESET_GAME': {
      const board = cloneBoard(state.initialBoard);
      const errors = findErrorCells(board, state.config);
      return {
        ...state,
        board,
        errors,
        selectedCell: null,
        elapsedSeconds: 0,
        gameWon: false,
      };
    }

    case 'SELECT_CELL':
      return { ...state, selectedCell: { row: action.row, col: action.col } };

    case 'UPDATE_CELL': {
      if (state.gameWon) return state;
      const { row, col, value } = action;
      if (state.fixed[row]?.[col]) return state;
      if (value < 0 || value > state.config.size) return state;

      const board = cloneBoard(state.board);
      board[row][col] = value;
      const errors = findErrorCells(board, state.config);
      const gameWon = isBoardComplete(board, errors);
      return { ...state, board, errors, gameWon };
    }

    case 'TICK':
      if (state.gameWon || state.board.length === 0) return state;
      return { ...state, elapsedSeconds: state.elapsedSeconds + 1 };

    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'START_NEW_GAME', mode: 'easy' });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => dispatch({ type: 'TICK' }), 1000);
    return () => window.clearInterval(id);
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGameContext must be used inside GameProvider');
  return ctx;
}
