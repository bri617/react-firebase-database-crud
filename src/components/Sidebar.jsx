import { Link } from 'react-router-dom';
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Menu</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/insights">Insights</Link></li>
        <li><Link to="/recommends">Recommends</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/devices">Devices</Link></li>
        <li><Link to="/history">History</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
