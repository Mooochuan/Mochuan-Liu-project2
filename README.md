# Project 2 - Sudoku (React)

This is Project 2 for the Sudoku assignment. The app is built with React, React Router, and Context API.

## Deliverable

- **Render app:** https://mochuan-liu-project2.onrender.com
- **Video walkthrough:** In this repo
- **Collaborator:** Solo project

## Implemented Routes

- `/` Home
- `/games` Selection
- `/games/easy` Easy Sudoku (6x6)
- `/games/normal` Normal Sudoku (9x9)
- `/rules` Rules + credits
- `/scores` Mock high scores
- `/login` Mock login
- `/register` Mock register

## Core Features Implemented

- Easy mode generates a 6x6 board with about half of cells prefilled (18 clues).
- Normal mode generates a 9x9 board with 28-30 clues.
- Fixed clue cells are locked; other cells are editable.
- Invalid placements are highlighted in red.
- Input is restricted to valid ranges (1-6 or 1-9), and delete/clear works.
- Timer is shown at the top of each game.
- New Game generates a fresh puzzle; Reset restores the initial puzzle.
- On full valid completion, board locks and a congratulations message appears.

## State Management

Context API is used as the primary state store. Child components dispatch actions through context to update game state (selection, cell updates, reset/new game, timer), matching required unidirectional flow.

## Render Deployment Notes

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback is included in `public/_redirects`.

## Writeup (Deliverable 4)

### 1) What were some challenges you faced while making this app?

The biggest challenge was generating playable Sudoku boards while keeping the implementation simple and readable. I also spent time making sure validation feedback was clear, especially for row/column/subgrid conflicts. Another challenge was balancing React component size so game logic stayed in utility/context code and UI components remained focused.

### 2) Given more time, what additional features or design changes would you make?

Given more time, I would add persistent save/resume using local storage and a true difficulty progression system with puzzle ratings. I would also improve accessibility with richer keyboard navigation and announcements for errors and completion. On design, I would add theme options (dark/light) and animated transitions for a more polished feel.

### 3) What assumptions did you make while working on this assignment?

I assumed mock pages (scores, login, register, selection metadata) did not require backend functionality and could remain hardcoded. I assumed random puzzle generation did not require strict unique-solution validation unless claiming the backtracking bonus. I also assumed route structure and navigation behavior should mirror Project 1 pages while adapting to the Project 2 URL requirements.

### 4) How long did this assignment take to complete?

Approximately 9-11 hours including setup, route conversion from the mock layout, game logic, validation, and deployment preparation.

### 5) What bonus points did you accomplish?

No bonus features were attempted for this submission.

## Bonus Declaration

- Local Storage bonus: Not attempted
- Backtracking unique-solution bonus: Not attempted
- Hint system bonus: Not attempted
