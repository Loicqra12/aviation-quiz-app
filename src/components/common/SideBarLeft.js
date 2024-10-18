// src/components/common/SideBarLeft.js
import React from 'react';
import UpcomingEvents from '../quiz/UpcomingEvents';
import ProgressLearning from '../quiz/ProgressLearning';
import search_icon from '../images/search_icon.png';
import notifications_icon from '../images/notifications_icon.png';
import account_circle_icon from '../images/account_circle_icon.png';

const SidebarLeft = () => {
  return (
    
      <div className="bg-white shadow-md rounded-lg p-6 h-full">
        {/* Ajout des icônes en tant que boutons */}
        <div className="flex justify-between items-center mb-6">
          <button 
            className="focus:outline-none" 
            onClick={() => console.log("search_icon cliqué")}
          >
            <img src={search_icon} alt="search_icon" className="w-8 h-8" />
          </button>

          <button 
            className="focus:outline-none" 
            onClick={() => console.log("notifications_icon cliqué")}
          >
            <img src={notifications_icon} alt="notifications_icon" className="w-8 h-8" />
          </button>

          <button 
            className="focus:outline-none" 
            onClick={() => console.log("account_circle_icon cliqué")}
          >
            <img src={account_circle_icon} alt="account_circle_icon" className="w-8 h-8" />
          </button>
        </div>
        <UpcomingEvents />
        <ProgressLearning />
      </div>
    
  );
};

export default SidebarLeft;