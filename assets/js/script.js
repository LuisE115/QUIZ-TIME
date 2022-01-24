const question = document.querySelector("#question-header");
const choices = Array.from(document.querySelectorAll(".answers"));


let currentQuestion = {};
let acceptingAnswers = true;
let counter = 75;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Commonly used data types DO Not Include:",
        ans1: "strings",
        ans2: "booleans",
        ans3: "alerts",
        ans4: "numbers",
        answer: 3,
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        ans1: "quotes",
        ans2: "curly brackets",
        ans3: "parenthesis",
        ans4: "square brackets",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        ans1: "numbers and strings",
        ans2: "other arrays",
        ans3: "booleans",
        ans4: "all of the above",
        answer: 4,
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        ans1: "commas",
        ans2: "curly brackets",
        ans3: "quotes",
        ans4: "parenthesis",
        answer: 3,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        ans1: "JavaScript",
        ans2: "terminal/bash",
        ans3: "for loops",
        ans4: "console.log",
        answer: 4,
    }
];

const MAX_QUESTIONS = 5;

function startQuiz() {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    questionCounter = 0;
    counter = 75;
    questionCounter++;
        
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["ans" + number];

    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = selectedAnswer == currentQuestion.answer ? "corret" : "incorrect";
        if (classToApply === "incorrect") {
            counter = counter - 10 ;
        } 

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    })
})


var countdown = function () {
    counter--;
    document.getElementById("time").innerHTML = counter;
    if (counter === 0) {
        clearInterval(startCountdown);
    };
};
var startCountdown = setInterval(countdown, 1000);

document.getElementById("start-quiz").addEventListener("click", start);

function start() {
    document.getElementById("quiz").style.display="none";
    document.getElementById("question").style.display="block";
    startQuiz();
}
