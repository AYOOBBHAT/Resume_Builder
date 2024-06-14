// // // src/components/Login.js
// // import React, { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// // import { signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase auth methods
// // import { auth } from '../firebase'; // Firebase configuration and auth instance

// // function Login() {
// //   const history = useHistory();
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState(null);

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
// //       // Navigate to profile or dashboard after successful login
// //       history.push('/profile');
// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       {error && <p>{error}</p>}
// //       <form onSubmit={handleLogin}>
// //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
// //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase'; // Firebase auth instance

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       // Redirect to profile page or another protected route after successful login
//       navigate('/profile');
//     } catch (error) {
//       setError(error.message); // Set error message if login fails
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <p className="font-medium text-indigo-600 hover:text-indigo-500">
//                 Forgot your password?
//               </p>
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
//             >
//               Log in
//             </button>
//           </div>
//         </form>
//         {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//       </div>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
      await auth.signInWithEmailAndPassword(email, password);
      // Navigate to profile or another page after successful login
      navigate('/profile');
    } catch (error) {
      setError(error.message);
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

