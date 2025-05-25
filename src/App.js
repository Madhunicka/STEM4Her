import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Learn from './pages/Learn';
import Challenges from './pages/Challenges';
import Events from './pages/Events';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';


function PrivateRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/learn"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Learn />
                </PrivateRoute>
              }
            />
            <Route
              path="/challenges"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <Challenges />
                </PrivateRoute>
              }
            />
            <Route path = "/profile" element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Profile/>
              </PrivateRoute>
            } />
            <Route path="/events" element={<Events />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
