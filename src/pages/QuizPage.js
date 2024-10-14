import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizService } from '../services/quizService';
import Timer from '../components/Timer';
import AnswerFeedback from '../components/AnswerFeedback';
import QuizResults from '../components/QuizResults';
import ProgressBar from '../components/common/ProgressBar';

const TIMER_OPTIONS = [30, 45, 60, 90]; // Options de durée en secondes

export default function QuizPage() {
  const { subject } = useParams();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({});
  const [timeExpired, setTimeExpired] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  // Nouveaux états
  const [questionTimeLimit, setQuestionTimeLimit] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const loadQuizQuestions = useCallback(async () => {
    try {
      setLoading(true);
      const quizQuestions = await quizService.getQuestions(subject);
      setQuestions(quizQuestions);
    } catch (err) {
      setError('Erreur lors du chargement des questions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [subject]);

  useEffect(() => {
    loadQuizQuestions();
  }, [loadQuizQuestions]);

  const handleTimeUp = () => {
    setTimeExpired(true);
    handleNextQuestion();
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setAnswers({ ...answers, [questions[currentQuestion].id]: answerIndex });
    setShowFeedback(true);
  };

  const handleNextQuestion = async () => {
    if (!timeExpired && selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeExpired(false);
    setShowFeedback(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      const results = {
        subject,
        score,
        totalQuestions: questions.length,
        answers
      };
      
      try {
        await quizService.submitResults(results);
        setShowResults(true);
      } catch (err) {
        console.error('Erreur lors de la soumission des résultats:', err);
      }
    }
  };

  const handleTimerSelect = (duration) => {
    setQuestionTimeLimit(duration);
    setQuizStarted(true);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4">Chargement des questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 text-center py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-xl font-bold mb-4 text-center">Choisissez le temps par question</h2>
        <div className="grid grid-cols-2 gap-4">
          {TIMER_OPTIONS.map(duration => (
            <button
              key={duration}
              onClick={() => handleTimerSelect(duration)}
              className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {duration} secondes
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <QuizResults 
        questions={questions}
        answers={answers}
        score={score}
        subject={subject}
      />
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-lg shadow p-6 max-w-2xl mx-auto">
        <ProgressBar current={currentQuestion} total={questions.length} />
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Quiz : {subject}</h2>
          <Timer 
            duration={questionTimeLimit} 
            onTimeUp={handleTimeUp}
          />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg mb-4">{currentQuestionData.question}</h3>
          <div className="space-y-2">
            {currentQuestionData.options.map((option, index) => (
              <div 
                key={index}
                className={`p-3 border rounded cursor-pointer ${
                  selectedAnswer === index ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-50'
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <AnswerFeedback
          isCorrect={selectedAnswer === currentQuestionData.correctAnswer}
          explanation={currentQuestionData.explanation}
          showExplanation={showFeedback}
        />

        <button 
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null && !timeExpired}
          className={`w-full mt-4 py-2 px-4 rounded ${
            selectedAnswer === null && !timeExpired
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {currentQuestion === questions.length - 1 ? 'Voir les résultats' : 'Question suivante'}
        </button>
      </div>
    </div>
  );
}