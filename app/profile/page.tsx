import { FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
      <div className="flex flex-col items-center">
        <img
          src="/default-avatar.png"
          alt="User Avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">User</h2>
        <p className="text-gray-500">JEE/12th</p>
      </div>
      <div className="mt-6 space-y-4">
        <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-100">
          <FiUser className="mr-2" /> Edit Profile
        </button>
        <button className="flex items-center w-full p-2 rounded-md hover:bg-gray-100">
          <FiSettings className="mr-2" /> Settings
        </button>
        <button className="flex items-center w-full p-2 rounded-md text-red-500 hover:bg-red-100">
          <FiLogOut className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
}
