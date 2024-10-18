import React from "react";
import UpcomingEvents from '../components/quiz/UpcomingEvents';

const HomePage = () => {
  return (
    <div className="flex-1">
      <h1 className="text-4xl font-bold mb-6">Your Dashboard Today</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src="https://example.com/new-base.jpg"
          alt="New Base"
          className="w-full h-48 object-cover mb-6"
        />
        <div className="text-center text-2xl font-semibold">NEW BASE</div>
        <div className="mt-4 text-center text-xl">FlyBy - Logroño</div>
      </div>
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-6" role="alert">
        <p className="font-bold">Important Notice</p>
        <p>LEBG Flight Schedule from Saturday to Friday, published every Friday.</p>
        <p>LERJ Flight Schedule from Monday to Sunday, published every Sunday.</p>
      </div>
      <UpcomingEvents />
    </div>
  );
};

export default HomePage;