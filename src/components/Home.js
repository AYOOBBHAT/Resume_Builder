import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Resume Builder</h1>
        <p className="text-lg mb-2">Build your professional resume with ease.</p>
        <p className="mb-8">Get started by registering or logging into your account.</p>
        <a href="/register" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Register
        </a>
        <span className="mx-4 text-gray-500">or</span>
        <a href="/login" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Login
        </a>
      </div>
    </div>
  );
}

export default Home;
