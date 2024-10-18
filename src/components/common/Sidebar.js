import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="bg-blue-900 w-64 text-white py-4 h-screen">
      <div className="text-center text-2xl font-semibold mb-8">FlyBy</div>
      <ul className="space-y-4">
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/" className="flex items-center">
            <span className="material-icons">dashboard</span>
            <span className="ml-2">Dashboard</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/courses" className="flex items-center">
            <span className="material-icons">book</span>
            <span className="ml-2">Courses</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/grades" className="flex items-center">
            <span className="material-icons">school</span>
            <span className="ml-2">Grades</span>
          </Link>
        </li>
        {/* Updated Question Bank */}
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/question-bank/test" className="flex items-center"> 
            <span className="material-icons">quiz</span>
            <span className="ml-2">Question Bank</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/aviation-news" className="flex items-center">
            <span className="material-icons">flight_takeoff</span>
            <span className="ml-2">Aviation News</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/flights" className="flex items-center">
            <span className="material-icons">flight</span>
            <span className="ml-2">Flights</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/agenda" className="flex items-center">
            <span className="material-icons">event</span>
            <span className="ml-2">Agenda</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/customer-service" className="flex items-center">
            <span className="material-icons">support_agent</span>
            <span className="ml-2">Customer Service</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/messages" className="flex items-center">
            <span className="material-icons">message</span>
            <span className="ml-2">Messages</span>
          </Link>
        </li>
        <li className="px-6 py-2 hover:bg-blue-700">
          <Link to="/call-meeting" className="flex items-center">
            <span className="material-icons">call</span>
            <span className="ml-2">Call Meeting</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
