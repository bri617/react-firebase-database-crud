import React from 'react';

const Sidebar = () => {
  return (
    <nav className="w-64 bg-white border-r p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-10">Menu</h1>
      <ul className="space-y-6 font-medium">
        {['Home', 'Insights', 'Recommends', 'Messages', 'Settings', 'Profile', 'Logout'].map(item => (
          <li key={item}>
            <a href="#" className="hover:text-blue-600 block">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
