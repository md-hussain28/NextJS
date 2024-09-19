'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13 and later

export default function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // Added error state
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Make a POST request to the API route for login verification
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (res.ok) {
        // If login is successful, redirect to the dashboard or another page
        router.push('/post'); // Ensure '/post' is the correct path
      } else {
        // Handle login failure (show an error)
        const { message } = await res.json();
        setError(message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle unexpected errors
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:bg-teal-800 transition duration-200"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
}
