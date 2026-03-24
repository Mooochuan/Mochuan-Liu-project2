function RulesPage() {
  return (
    <section className="page">
      <h1>Rules</h1>
      <p>
        Fill each empty square with a number. Every row, every column, and each
        sub-grid can contain each number exactly once.
      </p>
      <ul>
        <li>Easy mode: 6x6 board with values 1-6.</li>
        <li>Normal mode: 9x9 board with values 1-9.</li>
        <li>Cells with starting clues are locked.</li>
      </ul>
      <h2>Credits</h2>
      <p>
        <a href="mailto:student@example.com">Email</a> |{' '}
        <a href="https://github.com/">GitHub</a> |{' '}
        <a href="https://www.linkedin.com/">LinkedIn</a>
      </p>
    </section>
  );
}

export default RulesPage;
