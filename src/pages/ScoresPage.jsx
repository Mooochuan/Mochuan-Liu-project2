const scores = [
  ['puzzle_master', 247],
  ['number_ninja', 201],
  ['grid_wizard', 180],
  ['daily_solver', 160],
  ['logic_ace', 149],
];

function ScoresPage() {
  return (
    <section className="page">
      <h1>High Scores</h1>
      <p>This is a mock leaderboard with hardcoded entries.</p>
      <table className="scores-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {scores.map(([name, count]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ScoresPage;
