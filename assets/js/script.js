/* Variable Elements */
var formsArray = [
    quizIntro = document.querySelector("#quiz-intro"),
    highScoreForm = document.querySelector("#highscores"),
    questionForm = document.querySelector("#question-form")
];

// Funtion that reveals selected element while hiding all other elements in an array
function revealElement(element, elementArr){

    for(i=0; i < elementArr.length; i++){
        if(element !== elementArr[i]){
            elementArr[i].classList.add("hidden");
        }
        else{
            element.classList.remove("hidden");
        }
    }
}

/* Form presentation functionality */

// Funtion that will reveal the Highscores element
function revealHighscores(){
    if(questionForm.firstChild !== null){
        var isLeave = confirm("If you leave this quiz progrees will not be saved! Do you wish to continue?");
        if(isLeave === true){
            revealElement(highScoreForm, formsArray);
            removeQuestion();
        }
    }
    else{revealElement(highScoreForm, formsArray);}
}

// Funtion that will reveal the quiz form and start quiz
function revealQuiz(){
    revealElement(questionForm, formsArray);
    takeQuiz();
}

// Funtion to hide the Highscores element and present Quiz Intro
function revealQuizIntro(){
    revealElement(quizIntro, formsArray);
}

/* Quiz Form funtionality */

// Function to take quiz
function takeQuiz(){
    var quesArray = [
        {
            ask: "Commonly used data types DO NOT include:",
            answer1: "alerts",
            answer2: "strings",
            answer3: "booleans",
            answer4: "numbers",
            correct: "alerts"
        },
        {
            ask: "The condition in an if/else statement is enclosed within____.",
            answer1: "quotes",
            answer2: "curly brackets",
            answer3: "parentheses",
            answer4: "square brackets",
            correct: "parentheses"
        },
        {
            ask: "Arrays in Javascript can be used to store____.",
            answer1: "numbers and strings",
            answer2: "other arrays",
            answer3: "booleans",
            answer4: "all of the above",
            correct: "all of the above"
        },
        {
            ask: "String values must be enclosed within____ when being assigned to variables.",
            answer1: "commas",
            answer2: "curly brackets",
            answer3: "quotes",
            answer4: "parentheses",
            correct: "quotes"
        },
        {
            ask: "A very useful tool used during development and debugging for pronting content to the debugger is:",
            answer1: "Javascript",
            answer2: "terminal/bash",
            answer3: "for loops",
            answer4: "console.log",
            correct: "console.log"
        }];
    
    var question = quesArray[Math.floor(Math.random() * quesArray.length)];
    var rightAns = question.correct;
    delete question.correct;

    generateQuestionForm(question);

    // TODO: Create funtion to get answer results



}

// Function to generate quiz form child elements
function generateQuestionForm(quesObj){
    
    var ansNum = 1; 

    // Generate Questions
    var questionText = document.createElement("p");
    questionText.textContent = quesObj.ask;
    questionForm.appendChild(questionText);

    delete quesObj.ask;
    for(const [key, value] of Object.entries(quesObj)) {
        var aBtn = document.createElement("button");
        aBtn.textContent = ansNum + ': ' + value;
        aBtn.value = value;
        questionForm.appendChild(aBtn);
        ansNum++;
    }
}

// Function that will remove all children of the question form
function removeQuestion(){
    while (questionForm.firstChild) {
        questionForm.removeChild(questionForm.firstChild);
    }
}
