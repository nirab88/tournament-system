// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/games', label: 'Games' },
  { path: '/users', label: 'Users' },
  { path: '/admin', label: 'Admin' },
  { path: '/stream', label: 'Stream' },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-gray-700">
        🎮 Tournament
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
