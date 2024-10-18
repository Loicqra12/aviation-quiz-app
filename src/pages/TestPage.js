/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const data = [
  { name: 'Day 1', Study: 40, Exams: 24 },
  { name: 'Day 2', Study: 30, Exams: 13 },
  { name: 'Day 3', Study: 20, Exams: 98 },
  { name: 'Day 4', Study: 27, Exams: 39 },
  { name: 'Day 5', Study: 18, Exams: 48 },
  { name: 'Day 6', Study: 23, Exams: 38 },
  { name: 'Day 7', Study: 34, Exams: 43 },
];

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [score] = useState(82); // Score dynamique
  const navigate = useNavigate();

  const handleSubjectSelect = (event) => {
    const subject = event.target.value;
    if (subject) {
      navigate(`/quiz/${subject}`);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Section du graphique */}
        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Score</h2>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-700 focus:outline-none"
              >
                7 days
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">30 days</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">3 months</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">1 year</a>
                </div>
              )}
            </div>
          </div>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="Study" 
                  stroke="#4169e1" 
                  fill="#4169e1" 
                  fillOpacity={0.3} 
                />
                <Area 
                  type="monotone" 
                  dataKey="Exams" 
                  stroke="#ff69b4" 
                  strokeDasharray="5 5" // Ligne pointillée
                  fillOpacity={0} 
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Bulle affichant le score */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-1 rounded-full">
              {score}%
            </div>
          </div>
        </div>
        {/* Derniers tests sauvegardés */}
        <div className="bg-blue-900 text-white p-4 rounded-lg">
          <h3 className="font-bold text-xl mb-4">Last saved tests</h3>
          <ul className="space-y-2">
            <li>Air law 15 Jan 2024 - 22:53</li>
            <li>Meteorology - 13 Jan 2024 - 13:10</li>
            <li>Communication - 08 Jan 2024 - 08:16</li>
            <li>Air law - 01 Jan 2024 - 11:37</li>
          </ul>
        </div>
      </div>

      {/* Nouvelle section de test */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">New Test</h2>

        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-blue-900 text-white px-12 py-3 rounded-md text-lg font-semibold">Study</button>
          <button className="bg-blue-900 text-white px-12 py-3 rounded-md text-lg font-semibold">Exams</button>
        </div>

        <div className="relative w-full lg:w-96 mx-auto mb-8">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            onChange={handleSubjectSelect}
          >
            <option value="">Select a subject</option>
            <option value="air-law">Air law</option>
            <option value="meteorology">Meteorology</option>
            <option value="operation">Operation</option>
            <option value="communication">Communication</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;