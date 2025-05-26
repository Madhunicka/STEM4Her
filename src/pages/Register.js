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
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 w-80 bg-gradient-to-r from-green-400 to-teal-300 text-white px-4 py-3 rounded-xl shadow-lg animate-slide-in">
          <div className="font-bold mb-1 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Success
          </div>
          <div className="text-sm">{toastMessage}</div>
          <div className="w-full bg-white/30 rounded-full h-1.5 mt-3 overflow-hidden">
            <div className="bg-white h-full animate-progress-bar" />
          </div>
        </div>
      )}

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4 sm:px-8 py-24">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
       
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-center">
            <div className="flex justify-center mb-4">
              {/* <div className="bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                ✨
              </div> */}
            </div>
            <h2 className="text-3xl font-bold text-white">Join Our Community</h2>
            <p className="text-white/90 mt-2">Start your STEM journey with us</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Choose a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{error}</span>
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  I agree to the <a href="#" className="text-purple-600 hover:underline">Terms</a> and <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-purple-600 font-semibold hover:text-purple-800 hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}