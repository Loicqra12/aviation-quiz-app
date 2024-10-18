import React from 'react';

const ProgressLearning = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4">Progress Learning</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="w-4 h-4 bg-purple-500 rounded-full mr-2"></span>
          Part Typographie - User Interface
        </li>
        <li className="flex items-center">
          <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
          Part Data Structure - science
        </li>
      </ul>
    </div>
  );
};

export default ProgressLearning;