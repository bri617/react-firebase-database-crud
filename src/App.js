import React from 'react';
import Sidebar from './components/Sidebar';
import Rooms from './components/Rooms';
import EnergyStats from './components/EnergyStats';
import Devices from './components/Devices';
import History from './components/History';
import './App.css';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Rooms />
        <EnergyStats />
        <Devices />
        <History />
      </main>
    </div>
  );
}

export default App;
