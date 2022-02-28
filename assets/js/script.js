/* Variable Elements */
var formsArray = [];

// Quiz Intro Element
var quizIntro = document.querySelector("#quiz-intro");
formsArray.push(quizIntro);

// High Score Element
var highScoreForm = document.querySelector("#highscores");
formsArray.push(highScoreForm);

// Question(s) Element
var questionForm = document.querySelector("#question-form");
formsArray.push(questionForm);

/* General Functionality */

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

// Function that will remove all children of the question form
function removeQuestion(){
    while (questionForm.firstChild) {
        questionForm.removeChild(questionForm.firstChild);
    }
}

/* Form presentation functionality */

// Funtion that will reveal the Highscores element
function revealHighscores(){
    revealElement(highScoreForm, formsArray);

    // TODO: will add this more elegantly later to clear form. More options to come
    removeQuestion();
}

// Funtion that will reveal the quiz form and start quiz
function revealQuiz(){
    revealElement(questionForm, formsArray);
    genQuestionElements();
}

// Funtion to hide the Highscores element and present Quiz Intro
function revealQuizIntro(){
    revealElement(quizIntro, formsArray);
}

//TODO: Create function to generate question
function genQuestionElements(){

    var ansNum = 1;

    // Test Question
    var questionObject = {
        ask: "Commonly used data types DO NOT include:",
        answer1:  {
            actual: "alerts",
            isTrue: true 
        },
        answer2:  {
            actual: "strings",
            isTrue: false 
        },
        answer3:  {
            actual: "booleans",
            isTrue: false 
        },
        answer4:  {
            actual: "numbers",
            isTrue: false 
        }
    };

    // Generate Questions
    var questionText = document.createElement("p");
    questionText.textContent = questionObject.ask;
    questionForm.appendChild(questionText);

    delete questionObject.ask;
    for(const [key, value] of Object.entries(questionObject)) {
        var aBtn = document.createElement("button");
        aBtn.textContent = ansNum + ': ' + value.actual;
        aBtn.value = value.isTrue;
        questionForm.appendChild(aBtn);
        ansNum++;
    }
    
}

//TODO: Create funtion that will traverse questions to generate on the same form element
