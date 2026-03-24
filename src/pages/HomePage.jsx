import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <section className="page">
      <h1>Sudoku</h1>
      <p className="lead">
        Welcome to Sudoku. Pick a mode and fill every row, column, and sub-grid
        with unique numbers.
      </p>
      <div className="hero-actions">
        <Link className="btn" to="/games">
          Play Game
        </Link>
        <Link className="btn btn-secondary" to="/rules">
          View Rules
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
