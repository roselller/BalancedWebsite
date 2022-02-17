//hard coding questions
//creating variables
const question = document.querySelector('.qn');
const choices = Array.from(document.querySelector('.choice-text'));
console.log(question);
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question:"To create a list in C#, what System namespace is required?",
    choice1:"System.Threading",
    choice2:"System.IO",
    choice3:"System.LINQ",
    choice4:"System.Collections.Generic",
    answer:4
  },
  {
    question:"What is inheritance in C#?",
    choice1:"Allows a class to inherit another class' methods",
    choice2:"Allows two classes to use each others' methods",
    choice3:"Prevents code from corruption",
    choice4:"Allows different properties to be grouped together in an entity",
    answer:1
  },
  {
    question:"What is the purpose of a class in C#?",
    choice1:"So that we can modify our programs",
    choice2:"Apply Object-Oriented Programming principles to allow code reusability",
    choice3:"An encapsulation of data and methods",
    choice4:"Store data unnecessary to users",
    answer:3
  }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => { //starts the quiz
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => { //replaces question at every turn
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/quiz-csharp-end.html');
    }

    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length); //question randomizer
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question; //changes questions

    //changes choices
    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

//start function to start quiz when user presses screen
document.querySelector(".start").addEventListener("click", () => {
  let start = document.querySelector(".start");
  let qn = document.querySelector(".question");

  const countdown = document.querySelector(".start-countdown"); //retreieves lottie animation countdown
  countdown.togglePlay();

  //upon end of coundown animation
  countdown.addEventListener('complete', () => {
    start.style.visibility = "hidden";
    qn.style.visibility = "visible";
    document.querySelector(".qn").style.visibility = "visible";
    startGame();
  })
})