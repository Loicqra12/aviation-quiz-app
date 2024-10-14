import React from 'react';

export default function QuizResults({ questions, answers, score, subject, missedQuestions, onReviewMissed }) {
  const correctAnswers = Object.values(answers).filter((answerIndex, index) => answerIndex === questions[index].correctAnswer).length;
  const percentage = Math.round((correctAnswers / questions.length) * 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Résultats du Quiz : {subject}</h2>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg">
              Score final : <span className="font-bold">{score}</span> sur {questions.length}
            </div>
            <div className="text-lg">
              Pourcentage : <span className="font-bold">{percentage}%</span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {missedQuestions?.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Questions manquées</h3>
            <p className="mb-4">Vous avez manqué {missedQuestions.length} questions.</p>
            <button
              onClick={onReviewMissed}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Revoir les questions manquées
            </button>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Détail des réponses</h3>
          {questions.map((question, index) => {
            const isCorrect = answers[question.id] === question.correctAnswer;
            return (
              <div key={index} className={`mb-4 p-4 rounded ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                <p className="font-semibold">{question.question}</p>
                <p className="mt-2">
                  <span className="font-medium">Votre réponse :</span> {question.options[answers[question.id]] || 'Pas de réponse'}
                </p>
                <p className="mt-1">
                  <span className="font-medium">Réponse correcte :</span> {question.options[question.correctAnswer]}
                </p>
                {!isCorrect && (
                  <p className="mt-2 text-sm text-gray-700">{question.explanation}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex space-x-4">
          <button 
            onClick={() => window.location.reload()}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Recommencer le quiz
          </button>
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
