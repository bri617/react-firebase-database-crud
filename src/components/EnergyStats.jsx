import React from 'react';

const EnergyStats = () => {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Kitchen Energy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-2xl font-bold">20.6 kWh</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <p className="text-sm text-gray-500 mb-2">Total Energy This Week</p>
          <div className="flex justify-between text-sm text-gray-600">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyStats;
