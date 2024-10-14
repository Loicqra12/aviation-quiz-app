import React from 'react';
import { Link } from 'react-router-dom';

const subjects = [
  { id: '010', name: 'Droit aérien', questionCount: 1526 },
  { id: '021', name: 'Airframe/Systèmes', questionCount: 1529 },
  { id: '022', name: 'Instrumentation', questionCount: 1422 },
  { id: '031', name: 'Masse et centrage', questionCount: 561 },
  { id: '040', name: 'Performance humaine', questionCount: 1236 },
  { id: '050', name: 'Météorologie', questionCount: 1925 }
];

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-yellow-500">ATPL Questions</h1>
          <div className="space-x-4">
            <Link to="/free-test" className="text-gray-600 hover:text-gray-900">FREE TEST</Link>
            <Link to="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">ABOUT US</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">CONTACT US</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">LOGIN</Link>
            <Link to="/register" className="text-gray-600 hover:text-gray-900">REGISTER</Link>
            <Link to="/shop" className="bg-yellow-500 text-white px-4 py-2 rounded-full">E-SHOP</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Latest Version Of EASA 2021, ATPL(H) IR And PPL Questions Bank</h2>
            <p className="mb-6 text-gray-700">Our database contains high percentage of REAL EXAM QUESTIONS. Students mark questions after their examination, then we eliminate questions according to feedback.</p>
            <div className="space-x-4">
              <Link to="/login" className="bg-transparent hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Login
              </Link>
              <Link to="/register" className="bg-transparent hover:bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Register Now
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/path-to-your-airplane-image.jpg" alt="Toy airplane" className="rounded-lg shadow-xl" />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">Available Subjects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(subject => (
            <div key={subject.id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{subject.name}</h2>
              <p className="text-gray-600 mb-4">{subject.questionCount} questions</p>
              <Link
                to={`/quiz/${subject.id}`}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Commencer le quiz
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;