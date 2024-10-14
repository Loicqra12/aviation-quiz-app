import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';  // Ajout de l'import

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz/:subject" element={<QuizPage />} />  {/* Nouvelle route */}
            <Route path="/stats" element={<div className="container mx-auto px-4">Page Statistiques</div>} />
            <Route path="/profile" element={<div className="container mx-auto px-4">Page Profil</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;