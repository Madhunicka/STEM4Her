import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
      setTempUsername(currentUser.username);
      setTempEmail(currentUser.email);
    }
  }, []);

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

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 pt-20">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8">
        <h1 className="text-3xl font-semibold text-blue-900 mb-8 text-center">
          Profile Setup
        </h1>

        <div className="flex items-center space-x-6 mb-8">
          <img
            className="w-24 h-24 rounded-full border-2 border-blue-700"
            src={`https://ui-avatars.com/api/?name=${user?.username || "User"}&background=3b82f6&color=fff&size=128`}
            alt="User avatar"
          />
          <div>
            <h2 className="text-xl font-bold text-blue-900">{user?.username || "Guest"}</h2>
            <p className="text-sm text-blue-600">Welcome to STEM4Her profile</p>
          </div>
        </div>

        <div className="space-y-6">
         <div className="relative">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={tempUsername}
              disabled={!editUsername}
              onChange={(e) => setTempUsername(e.target.value)}
              className={`w-full rounded-md border border-blue-300 bg-blue-100 px-3 py-2 text-blue-700 ${
                editUsername ? "bg-white cursor-text" : "cursor-not-allowed"
              }`}
            />
            {!editUsername ? (
              <button
                type="button"
                onClick={() => setEditUsername(true)}
                className="absolute right-2 top-7 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={saveUsername}
                className="absolute right-2 top-7 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition font-semibold"
              >
                Save
              </button>
            )}
          </div>

 
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={tempEmail}
              disabled={!editEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              className={`w-full rounded-md border border-blue-300 bg-blue-100 px-3 py-2 text-blue-700 ${
                editEmail ? "bg-white cursor-text" : "cursor-not-allowed"
              }`}
            />
            {!editEmail ? (
              <button
                type="button"
                onClick={() => setEditEmail(true)}
                className="absolute right-2 top-7 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                onClick={saveEmail}
                className="absolute right-2 top-7 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition font-semibold"
              >
                Save
              </button>
            )}
          </div>

          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
              Current Password
            </label>
            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className="w-full rounded-md border border-blue-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

      
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full rounded-md border border-blue-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

          <button
            onClick={handleChangePassword}
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Update Password
          </button>

          {passwordChanged && (
            <p className="text-green-600 mt-2 text-sm font-medium">
              Password updated!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
