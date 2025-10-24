import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to={isAuthenticated ? "/dashboard" : "/"} 
              className="text-2xl font-bold text-cyan-500 hover:text-cyan-600"
            >
              HealthScan AI
            </Link>
          </div>
          
          {isAuthenticated && (
            <div className="flex items-center space-x-4">
              <Link 
                to="/dashboard" 
                className={`${
                  isActive('/dashboard') 
                    ? 'text-cyan-500 font-semibold' 
                    : 'text-gray-700 hover:text-cyan-500'
                } transition`}
              >
                Dashboard
              </Link>
              <Link 
                to="/scanner" 
                className={`${
                  isActive('/scanner') 
                    ? 'text-cyan-500 font-semibold' 
                    : 'text-gray-700 hover:text-cyan-500'
                } transition`}
              >
                AI Scanner
              </Link>
              <Link 
                to="/doctors" 
                className={`${
                  isActive('/doctors') 
                    ? 'text-cyan-500 font-semibold' 
                    : 'text-gray-700 hover:text-cyan-500'
                } transition`}
              >
                Find Doctors
              </Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
