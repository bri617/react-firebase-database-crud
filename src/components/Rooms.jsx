import React from 'react';

const Rooms = () => {
  const rooms = ['Living Room', 'Bedroom', 'Bathroom', 'Kitchen'];

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Rooms</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {rooms.map(room => (
          <div key={room} className="bg-white rounded-xl shadow p-4 text-center">
            {room}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
