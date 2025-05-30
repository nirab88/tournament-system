import { Link, Outlet } from 'react-router-dom';
import { Home, Gamepad, Users, Shield, Video, Group, Component, Ungroup } from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Tournament</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-600">
            <Home size={20} /> Dashboard
          </Link>
          <Link to="/dashboard/games" className="flex items-center gap-2 hover:text-blue-600">
            <Gamepad size={20} /> Games
          </Link>
          <Link to="/dashboard/users" className="flex items-center gap-2 hover:text-blue-600">
            <Users size={20} /> Users
          </Link>
          <Link to="/dashboard/admin" className="flex items-center gap-2 hover:text-blue-600">
            <Shield size={20} /> Admin
          </Link>
          <Link to="/dashboard/stream" className="flex items-center gap-2 hover:text-blue-600">
            <Video size={20} /> Stream
          </Link>
          <Link to="/dashboard/matches" className="flex items-center gap-2 hover:text-blue-600">
            <Gamepad size={20} /> Matches
          </Link>
          <Link to="/dashboard/tournaments" className="flex items-center gap-2 hover:text-blue-600">
            <Ungroup size={20} /> Tournaments
          </Link>
          <Link to="/dashboard/teams" className="flex items-center gap-2 hover:text-blue-600">
            <Component size={20} /> Teams
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-700">Let's The Game Begin.</h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-white shadow px-6 py-4 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Tournament System. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
