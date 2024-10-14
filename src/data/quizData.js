// Catégories de questions ATPL
export const quizCategories = {
    airLaw: 'Droit Aérien',
    performance: 'Performances',
    flightPlanning: 'Préparation du Vol',
    humanPerformance: 'Performances Humaines',
    meteorology: 'Météorologie',
    navigation: 'Navigation',
    operationalProcedures: 'Procédures Opérationnelles',
    principles: 'Principes du Vol',
    communications: 'Communications',
    generalKnowledge: 'Connaissance Générale des Aéronefs'
  };
  
  // Base de données de questions
  export const questionsDatabase = {
    airLaw: [
      {
        id: 'AL001',
        question: "Selon l'OACI, quelle est la définition d'un aérodrome ?",
        options: [
          "Une surface définie sur terre ou sur l'eau, destinée à être utilisée pour l'arrivée, le départ et les manœuvres des aéronefs",
          "Une zone réservée exclusivement aux avions commerciaux",
          "Un espace aérien contrôlé autour d'un aéroport",
          "Une zone destinée uniquement au stationnement des aéronefs"
        ],
        correctAnswer: 0,
        explanation: "Selon l'OACI, un aérodrome est une surface définie sur terre ou sur l'eau, comprenant éventuellement bâtiments, installations et matériel, destinée à être utilisée en totalité ou en partie pour l'arrivée, le départ et les manœuvres des aéronefs."
      },
      {
        id: 'AL002',
        question: "Quelle est la durée de validité d'une licence ATPL ?",
        options: [
          "1 an",
          "2 ans",
          "5 ans",
          "10 ans"
        ],
        correctAnswer: 1,
        explanation: "La validité d'une licence ATPL est de 2 ans. Après cette période, le pilote doit renouveler sa licence en passant les examens médicaux requis et en démontrant qu'il maintient ses compétences."
      }
    ],
    performance: [
      {
        id: 'PF001',
        question: "Qu'est-ce que le 'Second Segment' dans les performances au décollage ?",
        options: [
          "La phase entre la rotation et 35 ft",
          "La phase entre 35 ft et la rentrée du train",
          "La phase entre la rentrée du train et 400 ft",
          "La phase entre 400 ft et 1500 ft"
        ],
        correctAnswer: 2,
        explanation: "Le Second Segment est la phase de montée entre la rentrée du train d'atterrissage et 400 ft. C'est une phase critique car l'avion est encore bas et doit maintenir une pente minimale avec un moteur en panne."
      }
    ],
    meteorology: [
      {
        id: 'MT001',
        question: "Quelle est la définition de l'ISA (International Standard Atmosphere) au niveau de la mer ?",
        options: [
          "15°C, 1013.25 hPa, 1.225 kg/m³",
          "0°C, 1013.25 hPa, 1.225 kg/m³",
          "15°C, 1023.25 hPa, 1.225 kg/m³",
          "15°C, 1013.25 hPa, 1.325 kg/m³"
        ],
        correctAnswer: 0,
        explanation: "L'atmosphère standard internationale (ISA) au niveau de la mer est définie par une température de 15°C, une pression de 1013.25 hPa et une densité de 1.225 kg/m³."
      }
    ]
  };
  
  // Fonction pour obtenir des questions aléatoires d'une catégorie
  export const getQuizQuestions = (category, numberOfQuestions = 10) => {
    const categoryQuestions = questionsDatabase[category] || [];
    if (categoryQuestions.length === 0) return [];
    
    const shuffled = [...categoryQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(numberOfQuestions, categoryQuestions.length));
  };