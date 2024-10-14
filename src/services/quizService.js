import { getQuizQuestions, quizCategories } from '../data/quizData';

// Simule un délai d'API
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const quizService = {
  // Récupérer les catégories disponibles
  async getCategories() {
    await delay(500); // Simule la latence réseau
    return Object.entries(quizCategories).map(([id, name]) => ({ id, name }));
  },

  // Récupérer les questions pour une catégorie donnée
  async getQuestions(category, count = 10) {
    await delay(1000); // Simule la latence réseau
    return getQuizQuestions(category, count);
  },

  // Soumettre les résultats du quiz
  async submitResults(results) {
    await delay(800); // Simule la latence réseau
    console.log('Résultats soumis:', results);
    return {
      success: true,
      message: 'Résultats enregistrés avec succès'
    };
  }
};