// src/pages/HomePage.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Sidebar from "../components/common/Sidebar"; // Vérifiez ce chemin
import SidebarLeft from "../components/common/SideBarLeft"; // Vérifiez ce chemin

// Données statiques pour les graphiques
const gradeData = [
  { name: 'Phase 1', score: 6 },  
  { name: 'Phase 2', score: 8 },
  { name: 'Phase 3', score: 9 },
  { name: 'Phase 4', score: 7 },
  { name: 'Phase 5', score: 10 },
  { name: 'Phase 6', score: 7 },
  { name: 'Phase 7', score: 8 },
];

const learningPathData = [
  { name: 'Completed', value: 70 },
  { name: 'Remaining', value: 30 },
];

// Couleurs pour le diagramme circulaire
const COLORS = ['#0088FE', '#FFBB28'];

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 gap-6">

      {/* Sidebar à gauche */}
      <div className="w-64 h-screen fixed top-0 left-0 overflow-auto">
        <Sidebar />
      </div>

      {/* Colonne centrale - Contenu principal */}
      <div className="flex-1 lg:mx-6 ml-64 lg:ml-0"> {/* Ajoutez un margin-left pour éviter la superposition */}
        {/* Header avec image de la base */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <img
            src="https://example.com/new-base.jpg"
            alt="New Base"
            className="w-full h-64 object-cover"
          />
          <div className="text-center p-6">
            <h1 className="text-4xl font-bold">FlyBy</h1>
            <p className="text-xl mt-2">Logroño</p>
          </div>
        </div>

        {/* Avis important avec style spécifique */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center">
            <div className="text-xl font-bold mr-4">12/February/2024</div>
            <div className="flex-1 text-right">
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-lg">
                <p className="font-bold">IMPORTANT NOTICE</p>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-300">
            <div className="text-lg">
              <p className="font-bold">LEBG Flight Schedule:</p>
              <ul className="list-disc ml-6">
                <li>Period: From Saturday to Friday</li>
                <li>Publication date: Friday</li>
              </ul>
              <p className="font-bold mt-4">LERJ Flight Schedule:</p>
              <ul className="list-disc ml-6">
                <li>Period: From Monday to Sunday</li>
                <li>Publication date: Sunday</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-2 gap-4">
          {/* Graphique des notes */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Grades</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gradeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Diagramme circulaire du chemin d'apprentissage */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Learning Path Progress</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={learningPathData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8">
                  {learningPathData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* SidebarLeft à droite */}
      <div className="w-full lg:w-1/4 h-screen sticky top-0 overflow-auto ml-auto">
        <SidebarLeft />
      </div>
    </div>
  );
};

export default HomePage;
