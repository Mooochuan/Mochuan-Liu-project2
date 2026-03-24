# Project 2 Video Script (Deliverable 2, under 5 minutes)

## 0:00-0:30 Intro

Hi, I am walking through my Project 2 Sudoku app. This project is built with React, React Router, and Context API, and deployed on Render. I will quickly show each required page, then demonstrate the game behavior in both easy and normal modes.

## 0:30-1:00 Home and Navigation

This is the home page at `/` with the game title and quick links. The navbar at the top lets users move across all required routes: selection, easy and normal game pages, rules, scores, login, and register.

## 1:00-1:30 Selection Page

At `/games`, I show mock game entries with hardcoded authors. Clicking these links routes to either easy or normal Sudoku. This page is intentionally mock data per assignment instructions.

## 1:30-3:00 Easy Mode Demo

Now I am at `/games/easy`. This mode uses a 6x6 board. A new puzzle is generated each time I visit this route or click New Game. Some cells are prefilled and locked, while others are editable. I can only input valid values from 1 to 6. If I enter a value that conflicts with Sudoku rules, that cell gets a red incorrect state. The timer runs at the top, Reset restores the original puzzle state, and New Game generates another random board.

## 3:00-4:00 Normal Mode Demo

Now I am at `/games/normal`, which is a 9x9 board. It starts with 28 to 30 clues and uses the same interaction rules: locked clues, valid input only, conflict highlighting, timer, New Game, and Reset. When the board is completely and correctly filled, inputs lock and a congratulations message appears.

## 4:00-4:30 Remaining Required Pages

At `/rules`, I list Sudoku rules and a credits section with links. At `/scores`, I show a mock high score table. `/login` and `/register` include the required form fields and submit buttons, but no backend functionality, as expected for this stage.

## 4:30-5:00 Architecture and Wrap-up

For architecture, I separated layout, pages, and board components. State is managed through Context and reducer actions, and child components update app state through context dispatch instead of parent callback chains. That completes the walkthrough. Thank you for watching.
