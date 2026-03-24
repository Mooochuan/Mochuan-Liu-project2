const MODE_CONFIG = {
  easy: { size: 6, subRows: 2, subCols: 3, clues: 18 },
  normal: { size: 9, subRows: 3, subCols: 3, cluesMin: 28, cluesMax: 30 },
};

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function range(n) {
  return Array.from({ length: n }, (_, i) => i);
}

function groupedShuffledIndices(size, groupSize) {
  const groupCount = size / groupSize;
  const shuffledGroups = shuffle(range(groupCount));
  return shuffledGroups.flatMap((group) =>
    shuffle(range(groupSize)).map((offset) => group * groupSize + offset)
  );
}

function solvedBoard(config) {
  const { size, subRows, subCols } = config;
  const nums = shuffle(range(size).map((i) => i + 1));
  const rowOrder = groupedShuffledIndices(size, subRows);
  const colOrder = groupedShuffledIndices(size, subCols);

  const pattern = (r, c) =>
    ((r % subRows) * subCols + Math.floor(r / subRows) + c) % size;

  return rowOrder.map((r) => colOrder.map((c) => nums[pattern(r, c)]));
}

export function buildPuzzle(mode) {
  const config = MODE_CONFIG[mode];
  const solution = solvedBoard(config);
  const { size } = config;
  const clues =
    mode === 'easy'
      ? config.clues
      : randInt(config.cluesMin, config.cluesMax);
  const keepCount = Math.max(0, Math.min(size * size, clues));

  const positions = shuffle(range(size * size));
  const keepSet = new Set(positions.slice(0, keepCount));

  const initialBoard = [];
  const fixed = [];

  for (let r = 0; r < size; r += 1) {
    const row = [];
    const fixedRow = [];
    for (let c = 0; c < size; c += 1) {
      const idx = r * size + c;
      const isFixed = keepSet.has(idx);
      row.push(isFixed ? solution[r][c] : 0);
      fixedRow.push(isFixed);
    }
    initialBoard.push(row);
    fixed.push(fixedRow);
  }

  return { config, solution, initialBoard, fixed };
}

function inSameSubgrid(r1, c1, r2, c2, config) {
  const { subRows, subCols } = config;
  return (
    Math.floor(r1 / subRows) === Math.floor(r2 / subRows) &&
    Math.floor(c1 / subCols) === Math.floor(c2 / subCols)
  );
}

export function findErrorCells(board, config) {
  const errors = new Set();
  const size = config.size;

  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      const value = board[r][c];
      if (!value) continue;

      let hasConflict = false;
      for (let rr = 0; rr < size && !hasConflict; rr += 1) {
        if (rr !== r && board[rr][c] === value) hasConflict = true;
      }
      for (let cc = 0; cc < size && !hasConflict; cc += 1) {
        if (cc !== c && board[r][cc] === value) hasConflict = true;
      }
      for (let rr = 0; rr < size && !hasConflict; rr += 1) {
        for (let cc = 0; cc < size; cc += 1) {
          if (rr === r && cc === c) continue;
          if (board[rr][cc] !== value) continue;
          if (inSameSubgrid(r, c, rr, cc, config)) {
            hasConflict = true;
            break;
          }
        }
      }
      if (hasConflict) errors.add(`${r}-${c}`);
    }
  }

  return errors;
}

export function isBoardComplete(board, errors) {
  if (errors.size > 0) return false;
  for (const row of board) {
    for (const value of row) {
      if (!value) return false;
    }
  }
  return true;
}

export function formatElapsed(totalSeconds) {
  const min = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const sec = String(totalSeconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}

export { MODE_CONFIG };
