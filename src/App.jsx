import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Insights from './pages/Insights';
import Recommends from './pages/Recommends';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Rooms from './pages/Rooms';
import Devices from './pages/Devices';
import History from './pages/History';
import LevelsSection from './components/LevelsSection';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/recommends" element={<Recommends />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<div>Logging out...</div>} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
