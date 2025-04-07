import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import '../index.css'; // ✅ Custom CSS with Figma-style layout

function Devices() {
  const [devices, setDevices] = useState({});

  useEffect(() => {
    const devicesRef = database.ref('devices');

    devicesRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log('🔥 Firebase data:', data);
      setDevices(data || {});
    });

    return () => devicesRef.off();
  }, []);

  return (
    <div className="device-list">
      <h2 className="device-title">Devices</h2>

      {Object.keys(devices).length === 0 ? (
        <p className="text-gray-500">No device data found.</p>
      ) : (
        <ul>
          {Object.entries(devices).map(([name, status]) => (
            <li key={name} className="device-card">
              <span className="device-name">{name}</span>
              <span
                className={`device-status ${
                  status === 'on' ? 'device-on' : 'device-off'
                }`}
              >
                {status === 'on' ? 'On' : 'Off'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Devices;
