'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function DashboardPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/auth/me');
        setUser(res.data.user);
      } catch (err) {
        router.push('/login');
      }
    };
    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await axios.post('/api/auth/logout');
    router.push('/login');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <nav className={`p-4 flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>

      <main className="flex flex-col items-center justify-center mt-20">
        {user ? (
          <>
            <h2 className="text-3xl font-semibold">Welcome, {user.name}!</h2>
            <p className="mt-4 text-lg">Email: {user.email}</p>
          </>
        ) : (
          <p className="text-xl">Loading...</p>
        )}
      </main>
    </div>
  );
}
