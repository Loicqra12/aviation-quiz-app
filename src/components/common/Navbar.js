import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">ATPL Quiz</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/stats" className="text-gray-600 hover:text-gray-900">
              Statistiques
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">
              Profil
            </Link>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Connexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;