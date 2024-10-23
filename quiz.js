const readline = require('readline'); // module readline pour lire les entrées de l'utilisateur

const rl = readline.createInterface({
    input: process.stdin, // Entrée standard (console)
    output: process.stdout // Sortie standard (console)
});


// Définition des questions réponses sous forme de tab
const questions = [
    {
        question: "Quel langage est principalement utilisé pour la structure des pages web ?",
        options: ["1. CSS", "2. HTML", "3. Java Script", "4. PHP"],
        answer: 2 // Indice de la bonne réponse
    },
    {
        question: "Quel est le rôle de CSS dans le développement web ?",
        options: ["1. Gérer la logique côté serveur", "2. Structurer le contenu", "3. Styliser l'apparence des pages", "4. Interagir avec la base de données"],
        answer: 3 // Indice de la bonne réponse
    },
    {
        question: "Quel est le rôle de JavaScript dans le développement web ?",
        options: ["1. Créer des bases de données", "2. Structurer les pages", "3. Ajouter de l'interactivité et des fonctionnalités dynamiques", "4. Styliser le contenu"],
        answer: 3 // Indice de la bonne réponse
    },
    {
        question: "Quelle technologie est utilisée pour le stockage de données côté client ?",
        options: ["1. Cookies", "2. SQL", "3. FTP", "4. AJAX"],
        answer: 1 // Indice de la bonne réponse
    },
    {
        question: "Quel est l'acronyme pour 'Cascading Style Sheets' ?",
        options: ["1. CSD", "2. CSS ", "3. CSH", "4. CSE"],
        answer: 2 // Indice de la bonne réponse
    }
];

// Variables pour le score et la question courante
let score = 0; // Compteur de bonnes réponses
let currentQuestion = 0; // Indice de la question courante

// Fonction pour poser une question à l'utilisateur
const askQuestion = () => {
    // Vérifie si toutes les questions ont été posées
    if (currentQuestion < questions.length) {
        console.log(`\nQuestion ${currentQuestion + 1}: ${questions[currentQuestion].question}`);
        questions[currentQuestion].options.forEach(option => console.log(option));

        rl.question('Votre réponse (entrez le numéro) : ', (userInput) => {
            const userAnswer = parseInt(userInput);

            // Vérification de la validité de la réponse
            if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > questions[currentQuestion].options.length) {
                console.log("Réponse non valide. Veuillez entrer un numéro valide.");
                askQuestion(); // Répéter la question en cas de réponse invalide
            } else {
                // Vérification de la réponse correcte
                if (userAnswer === questions[currentQuestion].answer) {
                    console.log("Correct !");
                    score++; // Augmente le score si la réponse est correcte
                } else {
                    console.log("Incorrect. La bonne réponse était : " + questions[currentQuestion].options[questions[currentQuestion].answer - 1]);
                }
                currentQuestion++;// Passer à la question suivante
                askQuestion(); //Rappeler la fonction pour poser la prochaine question
            }
        });
    } else {
        console.log(`\nVotre score final est : ${score} sur ${questions.length}`);
        rl.close(); // affichage score final
    }
};
console.log("Bienvenue dans le quiz !");
askQuestion();
