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
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 sm:px-6 py-4 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
    
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center">
          <span className="bg-white text-purple-600 bg-transparent w-8 h-8 flex items-center justify-center mr-2">👩</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
            STEM4Her
          </span>
        </Link>

        <div className="hidden sm:flex space-x-6 text-sm md:text-base font-medium items-center">
          <Link 
            to="/" 
            className="hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
          >
            Home
          </Link>

          {isLoggedIn && (
            <>
              <Link 
                to="/learn" 
                className="hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
              >
                Learn
              </Link>
              <Link 
                to="/challenges" 
                className="hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
              >
                Challenges
              </Link>
              <Link 
                to="/profile" 
                className="hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
              >
                Profile
              </Link>
            </>
          )}

          <Link 
            to="/events" 
            className="hover:text-white transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
          >
            Events
          </Link>

          {!isLoggedIn ? (
            <div className="flex gap-4 ml-4">
              <Link 
                to="/login" 
                className="px-4 py-2 rounded-full border border-white hover:bg-white/10 transition-colors duration-200"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-2 rounded-full bg-white text-purple-600 font-semibold hover:bg-purple-100 transition-colors duration-200 shadow-md"
              >
                Join Now
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          )}
        </div>

        <button
          className="sm:hidden flex items-center p-2 rounded-lg text-white hover:bg-white/20 transition-colors"
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
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-purple-600 to-pink-500 shadow-xl transform transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              onClick={closeMenu} 
              className="text-2xl font-bold flex items-center"
            >
              <span className="bg-white text-purple-600 bg-transparent w-8 h-8 flex items-center justify-center mr-2">👩</span>
              STEM4Her
            </Link>
            <button 
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <Link 
            to="/" 
            onClick={closeMenu} 
            className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Home
          </Link>

          {isLoggedIn && (
            <>
              <Link 
                to="/learn" 
                onClick={closeMenu} 
                className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn
              </Link>
              <Link 
                to="/challenges" 
                onClick={closeMenu} 
                className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Challenges
              </Link>
              <Link 
                to="/profile" 
                onClick={closeMenu} 
                className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Profile
              </Link>
            </>
          )}

          <Link 
            to="/events" 
            onClick={closeMenu} 
            className="px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            Events
          </Link>

          <div className="border-t border-white/20 mt-4 pt-4">
            {!isLoggedIn ? (
              <>
                <Link 
                  to="/login" 
                  onClick={closeMenu} 
                  className="block px-4 py-3 rounded-lg hover:bg-white/10 transition-colors mb-2"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  onClick={closeMenu} 
                  className="block px-4 py-3 rounded-lg bg-white text-purple-600 font-semibold text-center hover:bg-purple-100 transition-colors shadow-md"
                >
                  Join Now
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
                className="w-full px-4 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            )}
          </div>
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