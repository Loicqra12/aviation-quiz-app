import React from 'react';

export default function AnswerFeedback({ isCorrect, explanation, showExplanation }) {
  if (!showExplanation) return null;

  return (
    <div className={`mt-4 p-4 rounded-lg ${
      isCorrect ? 'bg-green-100 border border-green-400' : 'bg-red-100 border border-red-400'
    }`}>
      <div className="flex items-start">
        <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${
          isCorrect ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {isCorrect ? (
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <div className="ml-3">
          <h3 className={`text-lg font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect ? 'Correct !' : 'Incorrect'}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{explanation}</p>
        </div>
      </div>
    </div>
  );
}