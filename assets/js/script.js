// constant to get question text and answers text
const question = document.querySelector("#question-header");
const choices = Array.from(document.querySelectorAll(".answers"));

// default var delcarations
let currentQuestion = {};
let acceptingAnswers = true;
let counter = 75;
let questionCounter = 0;
let availableQuestions = [];
let input = "";
// array with questions objects to display each question
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
// const for max amount of questions
const MAX_QUESTIONS = 5;
// function to set question counter to 0 and call getNewQuestion function
function startQuiz() {
    questionCounter = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}
// gets new question from the array and display it with their own posible answers
function getNewQuestion() {
    // checks if there is rome to get more questions
    if(availableQuestions.length === 0 || questionCounter > 5 || counter === 0) {
        var score = counter;
        document.getElementById("score").innerHTML = score;
        clearInterval(countdown);
        // if no more question or time left return score value to endQuiz function
        return endQuiz(score);
    }

    questionCounter = 0;
    // increment questioncuenter by 1 each time questions are being displayed
    questionCounter++;
    // gets a random number to display one of the 5 question    
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    // function for each choice to be displayed with ans + number
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["ans" + number];

    })
    // display different objects from the array
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}
// add eventlistener for each choice selected and check if the answer selected is the correct one
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        // if selected answer is incorrect substract 10 from the timer
        let classToApply = selectedAnswer == currentQuestion.answer ? "corret" : "incorrect";
        if (classToApply === "incorrect") {
            counter = counter - 10 ;
        } 

        selectedChoice.parentElement.classList.add(classToApply);
        // timeout of one second after selecting an answer and displaying the next question
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000)
    })
})

// change the time value for the counter in order to display the time left
var countdown = function () {
    counter--;
    document.getElementById("time").innerHTML = counter;
    
};
// Event Listener to start quiz
document.getElementById("start-quiz").addEventListener("click", start);

// hide quiz section and display question section to start the quiz
function start() {
    counter = 75;
    setInterval(countdown, 1000);
    document.getElementById("quiz").style.display="none";
    document.getElementById("question").style.display="block";
    startQuiz();
}

// hide questions section and display the results section 
function endQuiz() {
    document.getElementById("question").style.display="none";
    document.getElementById("end").style.display="block";
}
// listen to the submit button to return to quiz section
document.getElementById("sub").addEventListener("click", hub);
// save initials of user and return to quiz section 
function hub() {
    input = document.getElementById("name");
    document.getElementById("quiz").style.display="block";
    document.getElementById("question").style.display="none";
    document.getElementById("end").style.display="none";
    
}
//create an object with saved values to be put into highscores 
function saveScore(score, input) {
    const userScore = {
        score: score,
        name: input
    };
}