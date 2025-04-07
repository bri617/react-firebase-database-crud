import React from 'react';

const History = () => {
  const logs = [
    { device: 'Air Conditioner', action: 'Turned on', time: '03:20 PM' },
    { device: 'Refrigerator', action: 'Turned on', time: '01:48 PM' },
    { device: 'Air Conditioner', action: 'Turned off', time: '11:36 AM' },
    { device: 'Coffee Machine', action: 'Turned off', time: '09:15 AM' }
  ];

  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">History</h2>
      <div className="bg-white rounded-xl shadow p-4">
        {logs.map((log, idx) => (
          <div key={idx} className="flex justify-between border-b py-2 text-sm text-gray-700">
            <span>{log.device}</span>
            <span>{log.action}</span>
            <span>{log.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
