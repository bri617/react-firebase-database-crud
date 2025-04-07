import React, { useEffect, useState } from 'react';
import { database } from '../firebase'; // adjust path if needed

function Devices() {
  const [devices, setDevices] = useState({});

  useEffect(() => {
    const devicesRef = database.ref('devices');

    devicesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log('🔥 Firebase data:', data);
      setDevices(data || {});
    });

    // Cleanup the listener
    return () => devicesRef.off();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Devices</h2>

      {Object.keys(devices).length === 0 ? (
        <p className="text-gray-500">No device data found.</p>
      ) : (
        <ul className="space-y-2">
          {Object.entries(devices).map(([name, status]) => (
            <li
            key={name}
            className="flex justify-between items-center bg-white p-4 shadow rounded"
          >
            <span className="font-medium">
              {name} —{' '}
              <span
                className={`font-semibold ${
                  status === 'on' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {status === 'on' ? 'On' : 'Off'}
              </span>
            </span>
          </li>
          
          ))}
        </ul>
      )}

      {/* Debug
      <pre className="text-xs text-gray-400 mt-4">
        {JSON.stringify(devices, null, 2)}
      </pre> */}
    </div>
  );
}

export default Devices;
