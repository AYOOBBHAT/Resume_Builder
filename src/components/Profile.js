
// // import React, { useState, useEffect } from 'react';
// // //import { useNavigate } from 'react-router-dom';
// // import { auth, db } from '../firebase'; // Assuming you also have Firestore initialized as 'db'

// // function Profile() {
// //   //const navigate = useNavigate();
// //   const [displayName, setDisplayName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchUserProfile = async () => {
// //       try {
// //         const user = auth.currentUser;
// //        // const userRef = db.doc(`users/${user.uid}`);
// //        const userRef = db.collection('users').doc(user.uid); 
// //         const snapshot = await userRef.get();

// //         if (snapshot.exists()) {
// //           const userData = snapshot.data();
// //           setDisplayName(userData.displayName || '');
// //           setEmail(userData.email || '');
// //           setPhoneNumber(userData.phoneNumber || '');
// //           setAddress(userData.address || '');
// //         }
// //       } catch (error) {
// //         setError(error.message);
// //       }
// //     };

// //     fetchUserProfile();
// //   }, []);

// //   const handleCreateProfile = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const user = auth.currentUser;
// //       const userRef = db.doc(`users/${user.uid}`);
      
// //       await userRef.set({
// //         displayName: displayName.trim(),
// //         email: email.trim(),
// //         phoneNumber: phoneNumber.trim(),
// //         address: address.trim()
// //       });

// //       setError(null); // Clear any previous errors

// //       // Fetch updated user data after setting profile
// //       const snapshot = await userRef.get();
// //       if (snapshot.exists()) {
// //         const userData = snapshot.data();
// //         setDisplayName(userData.displayName || '');
// //         setEmail(userData.email || '');
// //         setPhoneNumber(userData.phoneNumber || '');
// //         setAddress(userData.address || '');
// //       }

// //     } catch (error) {
// //       setError(error.message);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen">
// //       <h2 className="mb-4 text-2xl font-bold">Profile Management</h2>
// //       <form className="space-y-4" onSubmit={handleCreateProfile}>
// //         <label className="flex flex-col">
// //           <span className="mb-1">Display Name:</span>
// //           <input
// //             className="border rounded-md px-3 py-2 w-80"
// //             type="text"
// //             value={displayName}
// //             onChange={(e) => setDisplayName(e.target.value)}
// //             placeholder="Display Name"
// //             required
// //           />
// //         </label>
// //         <label className="flex flex-col">
// //           <span className="mb-1">Email:</span>
// //           <input
// //             className="border rounded-md px-3 py-2 w-80"
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Email"
// //             required
// //           />
// //         </label>
// //         <label className="flex flex-col">
// //           <span className="mb-1">Phone Number:</span>
// //           <input
// //             className="border rounded-md px-3 py-2 w-80"
// //             type="tel"
// //             value={phoneNumber}
// //             onChange={(e) => setPhoneNumber(e.target.value)}
// //             placeholder="Phone Number"
// //             required
// //           />
// //         </label>
// //         <label className="flex flex-col">
// //           <span className="mb-1">Address:</span>
// //           <input
// //             className="border rounded-md px-3 py-2 w-80"
// //             type="text"
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //             placeholder="Address"
// //             required
// //           />
// //         </label>
// //         <button
// //           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //           type="submit"
// //         >
// //           Update Profile
// //         </button>
// //       </form>
// //       {error && <p className="text-red-500 mt-2">{error}</p>}
// //     </div>
// //   );
// // }

// // export default Profile;
// // src/components/Profile.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { auth, db } from '../firebase'; // Import the Firestore instance

// function Profile() {
//   const navigate = useNavigate();
//   const [displayName, setDisplayName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const user = auth.currentUser;
//         if (user) {
//           const userRef = db.collection('users').doc(user.uid); // Reference to the user's document
//           const snapshot = await userRef.get();

//           if (snapshot.exists()) {
//             const userData = snapshot.data();
//             setDisplayName(userData.displayName || '');
//             setEmail(userData.email || '');
//             setPhoneNumber(userData.phoneNumber || '');
//             setAddress(userData.address || '');
//           }
//         } else {
//           navigate('/login'); // Redirect to login if user is not logged in
//         }
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchUserProfile();
//   }, [navigate]);

//   const handleUpdateProfile = async (e) => {
//     e.preventDefault();
//     try {
//       const user = auth.currentUser;
//       if (user) {
//         const userRef = db.collection('users').doc(user.uid); // Reference to the user's document

//         await userRef.set({
//           displayName: displayName.trim(),
//           email: email.trim(),
//           phoneNumber: phoneNumber.trim(),
//           address: address.trim()
//         });

//         setError(null); // Clear any previous errors

//         // Fetch updated user data after setting profile
//         const snapshot = await userRef.get();
//         if (snapshot.exists()) {
//           const userData = snapshot.data();
//           setDisplayName(userData.displayName || '');
//           setEmail(userData.email || '');
//           setPhoneNumber(userData.phoneNumber || '');
//           setAddress(userData.address || '');
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="mb-4 text-2xl font-bold">Profile Management</h2>
//       <form className="space-y-4" onSubmit={handleUpdateProfile}>
//         <label className="block">
//           <span className="text-gray-700">Display Name:</span>
//           <input
//             className="border rounded-md px-3 py-2 w-80"
//             type="text"
//             value={displayName}
//             onChange={(e) => setDisplayName(e.target.value)}
//             placeholder="Display Name"
//             required
//           />
//         </label>
//         <label className="block">
//           <span className="text-gray-700">Email:</span>
//           <input
//             className="border rounded-md px-3 py-2 w-80"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//         </label>
//         <label className="block">
//           <span className="text-gray-700">Phone Number:</span>
//           <input
//             className="border rounded-md px-3 py-2 w-80"
//             type="tel"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Phone Number"
//             required
//           />
//         </label>
//         <label className="block">
//           <span className="text-gray-700">Address:</span>
//           <input
//             className="border rounded-md px-3 py-2 w-80"
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Address"
//             required
//           />
//         </label>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">
//           Update Profile
//         </button>
//       </form>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// }

// export default Profile;




// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase'; 
import { doc, setDoc, getDoc } from "firebase/firestore";

function Profile() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = auth.currentUser;
        const userRef = doc(db, 'users', user.uid);
        const snapshot = await getDoc(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.data();
          setDisplayName(userData.displayName || '');
          setEmail(userData.email || '');
          setPhoneNumber(userData.phoneNumber || '');
          setAddress(userData.address || '');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserProfile();
  }, []);

  const handleCreateProfile = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      const userRef = doc(db, 'users', user.uid);

      await setDoc(userRef, {
        displayName: displayName.trim(),
        email: email.trim(),
        phoneNumber: phoneNumber.trim(),
        address: address.trim()
      });

      setError(null); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="mb-4 text-2xl font-bold">Profile Management</h2>
      <form className="space-y-4" onSubmit={handleCreateProfile}>
        <label className="block">
          Display Name:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Display Name"
            className="border rounded-md px-3 py-2 w-80"
            required
          />
        </label>
        <label className="block">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded-md px-3 py-2 w-80"
            required
          />
        </label>
        <label className="block">
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            className="border rounded-md px-3 py-2 w-80"
            required
          />
        </label>
        <label className="block">
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="border rounded-md px-3 py-2 w-80"
            required
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Update Profile
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}

export default Profile;
