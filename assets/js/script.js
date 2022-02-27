// Variable Elements
var formsArray = [];
var quizIntro = document.querySelector("#quiz-intro");
formsArray.push(quizIntro);
var highScoreForm = document.querySelector("#highscores");
formsArray.push(highScoreForm);


/* General Functionality */
function revealElement(element, elementArr){
    var ele = element;
    for(i=0; i < elementArr.length; i++){
        if(ele !== elementArr[i]){
            elementArr[i].classList.add("hidden");
        }
        else{
            ele.classList.remove("hidden");
        }
    }
}

/* Form presentation functionality */

// Funtion that will reveal the Highscores element
function revealHighscores(){
    revealElement(highScoreForm, formsArray);
}

// Funtion to hide the Highscores element and present Quiz Intro
function revealQuizIntro(){
    revealElement(quizIntro, formsArray);
}
