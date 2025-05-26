import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [error, setError] = useState("");
  const [editUsername, setEditUsername] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [tempUsername, setTempUsername] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      navigate("/login");
    } else {
      setUser(currentUser);
      setTempUsername(currentUser.username);
      setTempEmail(currentUser.email);
    }
  }, [navigate]);

  const handleChangePassword = () => {
    setError("");
    if (!currentPassword || !newPassword) {
      setError("Please fill in both current and new passwords.");
      return;
    }
    if (currentPassword !== user.password) {
      setError("Current password is incorrect.");
      return;
    }

    const updatedUser = { ...user, password: newPassword };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setCurrentPassword("");
    setNewPassword("");
    setPasswordChanged(true);
    setTimeout(() => setPasswordChanged(false), 3000);
  };

  const saveUsername = () => {
    if (!tempUsername.trim()) {
      setError("Username cannot be empty.");
      return;
    }
    setError("");
    const updatedUser = { ...user, username: tempUsername.trim() };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditUsername(false);
  };

  const saveEmail = () => {
    if (!tempEmail.trim()) {
      setError("Email cannot be empty.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(tempEmail.trim())) {
      setError("Invalid email address.");
      return;
    }
    setError("");
    const updatedUser = { ...user, email: tempEmail.trim() };
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditEmail(false);
  };

  if (!user) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 px-4 sm:px-8 md:px-16 pt-24">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <img
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
              src={`https://ui-avatars.com/api/?name=${user.username}&background=ffffff&color=7e22ce&size=128`}
              alt="User avatar"
            />
          </div>
          <h1 className="text-3xl font-bold">{user.username}</h1>
          <p className="text-purple-100">Member since 2023</p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b border-purple-100 pb-2">
            Account Settings
          </h2>

          <div className="space-y-6">
        
            <div className="relative">
              <label className="block text-sm font-medium text-purple-700 mb-1">
                Username
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={tempUsername}
                  disabled={!editUsername}
                  onChange={(e) => setTempUsername(e.target.value)}
                  className={`flex-grow rounded-lg border border-purple-200 px-4 py-2 text-purple-800 ${
                    editUsername ? "bg-white" : "bg-purple-50"
                  }`}
                />
                {!editUsername ? (
                  <button
                    onClick={() => setEditUsername(true)}
                    className="ml-3 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={saveUsername}
                    className="ml-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-500 transition-colors"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-purple-700 mb-1">
                Email
              </label>
              <div className="flex">
                <input
                  type="email"
                  value={tempEmail}
                  disabled={!editEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                  className={`flex-grow rounded-lg border border-purple-200 px-4 py-2 text-purple-800 ${
                    editEmail ? "bg-white" : "bg-purple-50"
                  }`}
                />
                {!editEmail ? (
                  <button
                    onClick={() => setEditEmail(true)}
                    className="ml-3 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={saveEmail}
                    className="ml-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-500 transition-colors"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-purple-100">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">
                Change Password
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full rounded-lg border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full rounded-lg border border-purple-200 px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

                {passwordChanged && (
                  <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Password updated successfully!</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleChangePassword}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-600 transition-colors shadow-lg"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}