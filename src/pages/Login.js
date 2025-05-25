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
          <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">Login</h2>

          {/* Social login buttons */}
          <div className="flex flex-col space-y-3 mb-6">
            <button
              type="button"
              className="flex items-center justify-center space-x-3 border border-gray-300 rounded py-2 hover:bg-blue-100 transition"
              onClick={() => alert('Google login not implemented')}
            >
              {/* Google Icon */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.6h5.4c-.2 1.1-1.3 3.2-5.4 3.2-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.6-2.5C16 4 14.2 3.2 12 3.2 7.6 3.2 4 6.8 4 11.2s3.6 8 8 8c4.6 0 7.6-3.2 7.6-7.8 0-.6 0-1-.1-1.4H12z"
                />
              </svg>
              <span className="text-blue-700 font-semibold">Continue with Google</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center space-x-3 border border-gray-300 rounded py-2 hover:bg-blue-100 transition"
              onClick={() => alert('Facebook login not implemented')}
            >
              {/* Facebook Icon */}
              <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12v-9.294H9.294v-3.618H12V8.413c0-2.672 1.63-4.128 4.01-4.128 1.14 0 2.12.085 2.41.123v2.8h-1.657c-1.3 0-1.554.62-1.554 1.53v2.004h3.11l-.406 3.618H15.21V24h7.465C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
              </svg>
              <span className="text-blue-700 font-semibold">Continue with Facebook</span>
            </button>

            <button
              type="button"
              className="flex items-center justify-center space-x-3 border border-gray-300 rounded py-2 hover:bg-blue-100 transition"
              onClick={() => alert('Email login selected')}
            >
              {/* Email Icon */}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8-4H8m10 8H6m12-12H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z"
                />
              </svg>
              <span className="text-blue-700 font-semibold">Continue with Email</span>
            </button>
          </div>

          {/* OR separator */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-blue-600 font-semibold">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-blue-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-600 text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <span
                onClick={() => navigate('/register')}
                className="text-blue-700 font-semibold cursor-pointer hover:underline"
              >
                Create one
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
