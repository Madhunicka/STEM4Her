import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();        
    setIsOpen(false); 
    navigate("/login");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-sky-600 to-blue-800 text-white px-4 sm:px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
    
        <h1 className="text-2xl font-semibold tracking-tight">🌟 STEM4Her</h1>

        <div className="hidden sm:flex space-x-6 text-sm md:text-base font-medium">
          <Link to="/" className="hover:text-cyan-300 transition-colors duration-200">
            Home
          </Link>

          {isLoggedIn && (
            <>
              <Link to="/learn" className="hover:text-cyan-300 transition-colors duration-200">
                Learn
              </Link>
              <Link to="/challenges" className="hover:text-cyan-300 transition-colors duration-200">
                Challenges
              </Link>
            </>
          )}

          <Link to="/events" className="hover:text-cyan-300 transition-colors duration-200">
            Events
          </Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-cyan-300 transition-colors duration-200">
                Login
              </Link>
              <Link to="/register" className="hover:text-cyan-300 transition-colors duration-200">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-red-300 transition-colors duration-200"
            >
              Logout
            </button>
          )}
        </div>

        <button
          className="sm:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-cyan-300 hover:border-cyan-300 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 5.636a1 1 0 0 0-1.414-1.414L12 9.172 7.05 4.222a1 1 0 1 0-1.414 1.414L10.586 12l-4.95 4.95a1 1 0 1 0 1.414 1.414L12 14.828l4.95 4.95a1 1 0 0 0 1.414-1.414L13.414 12l4.95-4.95z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-sky-600 to-blue-800 shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 text-white font-semibold text-lg">
          <Link to="/" onClick={closeMenu} className="hover:text-cyan-300">
            Home
          </Link>

          {isLoggedIn && (
            <>
              <Link to="/learn" onClick={closeMenu} className="hover:text-cyan-300">
                Learn
              </Link>
              <Link to="/challenges" onClick={closeMenu} className="hover:text-cyan-300">
                Challenges
              </Link>
            </>
          )}

          <Link to="/events" onClick={closeMenu} className="hover:text-cyan-300">
            Events
          </Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={closeMenu} className="hover:text-cyan-300">
                Login
              </Link>
              <Link to="/register" onClick={closeMenu} className="hover:text-cyan-300">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                closeMenu();
                handleLogout();
              }}
              className="hover:text-red-300 text-left"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
}
