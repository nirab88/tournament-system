import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Games from './pages/Games';
import Users from './pages/Users';
import Admin from './pages/Admin';
import Stream from './pages/Stream';
import Tournaments from './pages/Tournament';
import Teams from './pages/Teams';
import Matches from './pages/Matches';
import DashboardLayout from './layouts/DashboardLayout';
import PrivateRoute from './components/PrivateRoute';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
          >  

          <Route index element={<Dashboard />} />
          <Route path="games" element={<Games />} />
          <Route path="users" element={<Users />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="teams" element={<Teams />} />
          <Route path="matches" element={<Matches />} />
          <Route path="admin" element={<Admin />} />
          <Route path="stream" element={<Stream />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
