import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setShowToast(false);

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    setToastMessage('Account created successfully! Redirecting to login...');
    setShowToast(true);

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <>
    
      {showToast && (
        <div className="fixed top-5 right-5 z-50 w-80 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg animate-slide-in">
          <div className="font-bold mb-1">Success</div>
          <div className="text-sm">{toastMessage}</div>
          <div className="w-full bg-green-200 rounded h-2 mt-3 overflow-hidden">
            <div className="bg-green-500 h-full animate-progress-bar" />
          </div>
        </div>
      )}

      <section className="pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 sm:px-8">
        <div className="max-w-md w-full bg-white rounded shadow-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Sign Up</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline ml-2">{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Create Account
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
