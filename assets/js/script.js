// Variable Elements
var highScoreForm = document.querySelector("#highscores");
var quizIntro = document.querySelector("#quiz-intro");

/* General Functionality */
function revealElement(element){
    element.classList.remove("hidden");
}

function hideElement(element){
    element.classList.add("hidden");
}

/* Form presentation functionality */

// TODO: Need to create unversal way to display and hide form elements based on selection.

// Funtion that will reveal the Highscores element
function revealHighscores(){
    revealElement(highScoreForm);
    hideElement(quizIntro);
}

// Funtion to hide the Highscores element
function goBack(){
    hideElement(highScoreForm);
    revealElement(quizIntro);
}
