import React, { useEffect, useState } from 'react';
import { database } from '../firebase';

function Dashboard() {
  const [devices, setDevices] = useState({});

  useEffect(() => {
    const devicesRef = database.ref('devices');
    devicesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log('🔥 Firebase data:', data);
      setDevices(data || {});
    });

    // Cleanup the listener on unmount
    return () => devicesRef.off();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Devices</h2>

      <ul className="space-y-2">
        {Object.entries(devices).map(([name, status]) => (
          <li
            key={name}
            className="flex justify-between items-center bg-white p-4 shadow rounded"
          >
            <span className="font-medium">{name}</span>
            <span
              className={`font-semibold ${
                status === 'on' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {status === 'on' ? 'On' : 'Off'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
