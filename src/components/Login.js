import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword directly

import { auth } from '../firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Call Firebase authentication API to sign in user
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword from imported auth instance
      // Navigate to profile or another page after successful login
      navigate('/profile');
    } catch (error) {
      setError(error.message); // Handle login error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 text-2xl font-bold">Login</h2>
      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          className="border rounded-md px-3 py-2 w-80"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border rounded-md px-3 py-2 w-80"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Login;
