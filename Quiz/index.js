const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Which programming language is used for web development?",
        choices: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choiceElements = [
        document.getElementById("choice0"),
        document.getElementById("choice1"),
        document.getElementById("choice2"),
        document.getElementById("choice3")
    ];

    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    for (let i = 0; i < currentQuizData.choices.length; i++) {
        choiceElements[i].textContent = currentQuizData.choices[i];
    }

    document.getElementById("progress").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function checkAnswer(choice) {
    const currentQuizData = quizData[currentQuestion];

    if (choice === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const quizContainer = document.getElementById("quiz");
    const scoreElement = document.getElementById("score");

    const percentage = (score / quizData.length) * 100;

    scoreElement.innerHTML = `<h1>Your Score: ${score} out of ${quizData.length}</h1>
                              <p>Percentage: ${percentage.toFixed(2)}%</p>`;
}

// Initial display
displayQuestion();
