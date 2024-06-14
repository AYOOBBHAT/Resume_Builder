// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase'; // Firebase auth instance

function Profile() {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setDisplayName(user.displayName || '');
        setEmail(user.email || '');
      } else {
        history.push('/login'); // Redirect to login if user is not logged in
      }
    });

    return () => unsubscribe();
  }, [history]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await user.updateProfile({
        displayName: displayName.trim(),
      });
      setError(null); // Clear any previous errors
      // Optionally, update email if needed:
      // await user.updateEmail(email.trim());
      // Display success message or navigate to another page
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      {error && <p>{error}</p>}
      {user && (
        <form onSubmit={handleUpdateProfile}>
          <label>
            Display Name:
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              disabled // Disabled for now, can be enabled if updating email
            />
          </label>
          <button type="submit">Update Profile</button>
        </form>
      )}
    </div>
  );
}

export default Profile;
