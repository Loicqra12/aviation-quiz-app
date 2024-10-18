import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import TestPage from './pages/TestPage'; // Importation de TestPage

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 ml-64 py-8 px-10 bg-gray-100 min-h-screen">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:subject" element={<QuizPage />} />
            <Route path="/stats" element={<div className="container mx-auto">Page Statistiques</div>} />
            <Route path="/profile" element={<div className="container mx-auto">Page Profil</div>} />
            <Route path="/courses" element={<div className="container mx-auto">Page Courses</div>} />
            <Route path="/grades" element={<div className="container mx-auto">Page Grades</div>} />
            <Route path="/question-bank/test" element={<TestPage />} /> {/* Redirection vers TestPage */}
            <Route path="/aviation-news" element={<div className="container mx-auto">Page Aviation News</div>} />
            <Route path="/flights" element={<div className="container mx-auto">Page Flights</div>} />
            <Route path="/agenda" element={<div className="container mx-auto">Page Agenda</div>} />
            <Route path="/customer-service" element={<div className="container mx-auto">Page Customer Service</div>} />
            <Route path="/messages" element={<div className="container mx-auto">Page Messages</div>} />
            <Route path="/call-meeting" element={<div className="container mx-auto">Page Call Meeting</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
