import React from 'react';
import Sidebar from './components/Sidebar';
import Rooms from './components/RoomsSection';
// import EnergyStats from './components/EnergyStats';
import Devices from './components/DevicesSection';
import History from './components/HistorySection';
import './App.css';
import LevelsSection from './components/LevelsSection';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Rooms />
        {/* <EnergyStats /> */}
        <Devices />
        <History />
        <LevelsSection/>
      </main>
    </div>
  );
}

export default App;