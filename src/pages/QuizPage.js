import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, List, Tag, Pause, MessageSquare, Globe } from 'lucide-react';

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(12);
  const totalQuestions = 80;

  const question = "Flight Information Region (FIR) is an airspace within which the following services are provided";
  const options = [
    "Flight information service and alerting service",
    "Flight information service and alerting service",
    "Flight information service and alerting service",
    "Flight information service and alerting service"
  ];

  const handlePrevious = () => {
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Top navigation */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex space-x-4">
          <button className="text-green-500"><Tag size={20} /></button>
          <button className="text-yellow-500"><Tag size={20} /></button>
          <button className="text-red-500"><Tag size={20} /></button>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handlePrevious} className="text-gray-600">
            <ChevronLeft size={20} />
          </button>
          <span className="font-semibold">{currentQuestion} / {totalQuestions}</span>
          <button onClick={handleNext} className="text-gray-600">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600"><Globe size={20} /></button>
          <button className="text-gray-600"><Maximize2 size={20} /></button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Question */}
      <div className="p-8">
        <h2 className="text-xl font-semibold mb-8">{question}</h2>
        <div className="space-y-4">
          {options.map((option, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition-colors">
              <span
                className={`inline-block w-6 h-6 rounded-full mr-4 text-center ${index === 0 ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </span>
              {option}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom toolbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-between items-center shadow-md">
        <button className="font-semibold text-blue-900">Explanation</button>
        <div className="flex space-x-6">
          <button><Maximize2 size={20} /></button>
          <button><List size={20} /></button>
          <button><Tag size={20} /></button>
          <button><Pause size={20} /></button>
          <button><MessageSquare size={20} /></button>
          <button><Globe size={20} /></button>
        </div>
      </div>

      {/* AI Chatbot */}
      <div className="fixed top-20 right-4 bg-white p-4 rounded-lg shadow-lg w-64">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-200 rounded-full mr-4"></div>
          <span className="font-semibold">AI</span>
        </div>
        <input type="text" placeholder="Ask anything" className="w-full p-2 border rounded-lg" />
      </div>
    </div>
  );
};

export default QuizPage;
