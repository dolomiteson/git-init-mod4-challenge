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

// Test Question
var question = {
    ask: "Is this question appearing in the form?",
    correct:  {
        actual: "Yes",
        isTrue: true 
    },
    incorrect:  {
        actual: "No",
        isTrue: false 
    }
};


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
    removeQuestion();
}

// Funtion that will reveal the quiz form and start quiz
function revealQuiz(){
    revealElement(questionForm, formsArray);
    genQuestionElements(question);
}

// Funtion to hide the Highscores element and present Quiz Intro
function revealQuizIntro(){
    revealElement(quizIntro, formsArray);
}

//TODO: Create function to generate question
function genQuestionElements(questionArr){

    // Generate Questions
    var question = document.createElement("p");
    question.textContent = questionArr.ask;
    questionForm.appendChild(question);

    // Add Buttons
    alert(Object.keys(questionArr).length);
}

//TODO: Create funtion that will traverse questions to generate on the same form element
