const quiz = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
    { question: "Which language runs in the browser?", options: ["Java", "C#", "Python", "JavaScript"], answer: "JavaScript" },
    { question: "What does CSS stand for?", options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Creative Style System"], answer: "Cascading Style Sheets" }
];

let currentquestionIndex = 0;
let score = 0;

const questionElemnet = document.getElementById("question");
const optionseElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

const startQuiz = document.getElementById("start-quiz");
const nextBtn = document.getElementById("next-btn");
const restartQuiz = document.getElementById("restart-quiz");

// Start Quiz
startQuiz.addEventListener('click', () => {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
});

// Load question
function loadQuestion() {
    const q = quiz[currentquestionIndex];
    questionElemnet.innerText = `Q ${currentquestionIndex + 1}: ${q.question}`;
    optionseElement.innerHTML = "";
    nextBtn.disabled = true;

    q.options.forEach(op => {
        const button = document.createElement("button");
        button.innerText = op;
        button.onclick = () => {
            document.querySelectorAll('#options button').forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            if (op === q.answer) score++;
            nextBtn.disabled = false;
        };
        optionseElement.appendChild(button);
    });
}

// Next button
nextBtn.onclick = () => {
    currentquestionIndex++;
    if (currentquestionIndex < quiz.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-screen").style.display = "none";
        document.querySelector(".result-screen").style.display = "block";
        scoreElement.innerText = `${score} / ${quiz.length}`;
    }
};

// Restart quiz
restartQuiz.onclick = () => {
    currentquestionIndex = 0;
    score = 0;
    document.querySelector(".result-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
};
