import React from 'react';

const Devices = () => {
  const devices = [
    { name: 'Air Conditioner', on: false },
    { name: 'Smart TV', on: true },
    { name: 'Coffee Machine', on: false },
    { name: 'Refrigerator', on: true }
  ];

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Devices</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {devices.map(device => (
          <div key={device.name} className="bg-white rounded-xl shadow p-4 text-center">
            <p className="mb-2">{device.name}</p>
            <span className={`inline-block px-3 py-1 rounded-full text-white text-sm ${device.on ? 'bg-green-500' : 'bg-gray-400'}`}>
              {device.on ? 'On' : 'Off'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Devices;
