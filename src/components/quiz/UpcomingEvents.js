import React from 'react';

const UpcomingEvents = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
          Flight - Today at 13:30
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
          Ground school - Tomorrow at 8:30
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
          Flight - Scheduled on March 15th
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
          Medical class 1 - Expire in 37 days
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
          Austro control - Next sitting on March 25th
        </li>
      </ul>
    </div>
  );
};

export default UpcomingEvents;