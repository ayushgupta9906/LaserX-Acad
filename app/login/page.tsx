'use client';

import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { theme } = useTheme();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', { email, password });
      setMessage(res.data.message || 'Login successful!');
      router.push('/dashboard');
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Invalid credentials!');
    }
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-400'}`}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-400'}`}
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
        <p className="text-center mt-6">
          No account?{' '}
          <Link href="/signup" className="text-blue-500 hover:underline">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}
