import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import createUserWithEmailAndPassword directly

import { auth } from '../firebase';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Call Firebase authentication API to register user
      await createUserWithEmailAndPassword(auth, email, password); // Use createUserWithEmailAndPassword from imported auth instance
      // Navigate to login page after successful registration
      navigate('/login');
    } catch (error) {
      setError(error.message); // Handle registration error
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 text-2xl font-bold">Register</h2>
      <form className="space-y-4" onSubmit={handleRegister}>
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
          Register
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Register;
