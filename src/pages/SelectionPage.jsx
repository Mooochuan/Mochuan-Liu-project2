import { Link } from 'react-router-dom';

const games = [
  { title: 'Morning Challenge', author: 'Alex Thompson', to: '/games/normal' },
  { title: 'Weekend Warmup', author: 'Maria Santos', to: '/games/easy' },
  { title: 'Number Sprint', author: 'Jordan Lee', to: '/games/normal' },
  { title: 'Quick Grid', author: 'Casey Kim', to: '/games/easy' },
];

function SelectionPage() {
  return (
    <section className="page">
      <h1>Game Selection</h1>
      <p>Choose a game below. This page uses hardcoded mock data.</p>
      <ul className="list-cards">
        {games.map((game) => (
          <li key={game.title}>
            <Link to={game.to}>{game.title}</Link>
            <span> by {game.author}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectionPage;
