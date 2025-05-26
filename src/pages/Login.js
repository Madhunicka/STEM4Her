import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setShowToast(false);

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (matchedUser) {
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      setToastMessage('Login successful! Redirecting...');
      setShowToast(true);
      onLogin?.();

      setTimeout(() => {
        navigate('/challenges');
      }, 1500);
    } else {
      setError('Invalid username or password');
    }
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
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-center">
            <div className="flex justify-center mb-4">
              {/* <div className="bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                👩‍💻
              </div> */}
            </div>
            {/* <h2 className="text-3xl font-bold text-white">Welcome Back!</h2> */}
            <p className="text-white/90 mt-2">👩‍💻 Sign in to continue your STEM journey</p>
          </div>

          <div className="p-8">
            <div className="flex flex-col space-y-4 mb-6">
              <button
                type="button"
                className="flex items-center justify-center space-x-3 border border-gray-200 rounded-full py-3 px-4 hover:bg-purple-50 transition-all"
                onClick={() => alert('Google login not implemented')}
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
                  alt="Google" 
                  className="w-5 h-5"
                />
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>

              <button
                type="button"
                className="flex items-center justify-center space-x-3 border border-gray-200 rounded-full py-3 px-4 hover:bg-purple-50 transition-all"
                onClick={() => alert('Facebook login not implemented')}
              >
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
                  alt="Facebook" 
                  className="w-5 h-5"
                />
                <span className="text-gray-700 font-medium">Continue with Facebook</span>
              </button>
            </div>

            <div className="flex items-center mb-6">
              <hr className="flex-grow border-gray-200" />
              <span className="mx-3 text-gray-400 font-medium">or</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              <div className="flex justify-end">
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  className="text-purple-600 font-semibold hover:text-purple-800 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}