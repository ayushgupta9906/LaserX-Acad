'use client';

import { useState } from 'react';
import ReactPlayer from 'react-player';
import { FiBook, FiUser, FiLogOut } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const coursesData = {
  'JEE Main': ['Physics Fundamentals', 'Advanced Mathematics', 'Organic Chemistry', 'Mock Tests'],
  'NEET': ['Biology Basics', 'Human Physiology', 'Organic Chemistry', 'Mock Tests'],
  '10th Science': ['Physics Principles', 'Chemistry Reactions', 'Biology Life Processes', 'Sample Papers'],
  '11th': ['Mechanics', 'Chemical Bonding', 'Trigonometry', 'Study Guides'],
  '12th Science': ['Electromagnetism', 'Organic Chemistry', 'Integration', 'Final Revisions']
};

// Fake YouTube Videos (Replace with real ones later)
const fakeVideos = [
  { id: '1', title: 'How to Crack JEE Main', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: '2', title: 'NEET Biology Tips', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: '3', title: 'Class 10 Science Explained', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },

];

const Dashboard = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<keyof typeof coursesData>('JEE Main');

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <aside className="w-64 p-6 space-y-6 bg-gray-800 text-white">
        <h2 className="text-2xl font-bold">LaserX Acad</h2>
        <nav className="space-y-4">
          {Object.keys(coursesData).map((category) => (
            <button
              key={category}
              className={`w-full flex items-center px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveCategory(category as keyof typeof coursesData)}
            >
              <FiBook className="mr-3" /> {category}
            </button>
          ))}
            <button className="w-full flex items-center px-4 py-2 rounded-lg hover:bg-gray-700" onClick={() => window.location.href = '/profile'}>
            <FiUser className="mr-3" /> Profile
            </button>
          <button className="w-full flex items-center px-4 py-2 rounded-lg hover:bg-red-600">
            <FiLogOut className="mr-3" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">{activeCategory}</h1>

        {/* Courses Section */}
        <h2 className="text-xl font-semibold mb-3">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursesData[activeCategory].map((course: string, index: number) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">{course}</h3>
              <p className="text-gray-600">Explore in-depth concepts and practice problems.</p>
              <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
                View Course
              </button>
            </div>
          ))}
        </div>

        {/* Videos Section */}
        <h2 className="text-xl font-semibold mt-6 mb-3">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fakeVideos.map((video) => (
            <div key={video.id} className="bg-white p-4 rounded-lg shadow-lg">
              <ReactPlayer url={video.url} width="100%" />
              <h3 className="mt-2 text-lg font-semibold">{video.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
