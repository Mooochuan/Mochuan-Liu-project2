import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/games', label: 'Selection' },
  { to: '/games/normal', label: 'Normal Game' },
  { to: '/games/easy', label: 'Easy Game' },
  { to: '/rules', label: 'Rules' },
  { to: '/scores', label: 'High Scores' },
  { to: '/login', label: 'Login' },
  { to: '/register', label: 'Register' },
];

function Layout() {
  return (
    <div className="app-shell">
      <nav className="navbar">
        <div className="navbar-title">Sudoku</div>
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="page-wrap">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
