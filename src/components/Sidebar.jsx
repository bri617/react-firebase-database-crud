import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="w-64 bg-white border-r p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">Menu</h1>
      <ul className="space-y-4">
        <li><Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link></li>
        <li><Link to="/insights" className="text-gray-800 hover:text-blue-600">Insights</Link></li>
        <li><Link to="/devices" className="text-gray-800 hover:text-blue-600">Devices</Link></li>
        <li><Link to="/messages" className="text-gray-800 hover:text-blue-600">Messages</Link></li>
        <li><Link to="/settings" className="text-gray-800 hover:text-blue-600">Settings</Link></li>
        <li><Link to="/profile" className="text-gray-800 hover:text-blue-600">Profile</Link></li>
        <li><Link to="/logout" className="text-gray-800 hover:text-blue-600">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
