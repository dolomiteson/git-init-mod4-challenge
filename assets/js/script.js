// Variable Elements
var highScoreForm = document.querySelector("#highscores");

/* General Functionality */
function revealElement(element){
    element.classList.remove("hidden");
}

function hideElement(element){
    element.classList.add("hidden");
}

/* Highscore Form Functionality */

// Funtion that will reveal the Highscores element
function revealHighscores(){
    revealElement(highScoreForm);
}

// Funtion to hide the Highscores element
function goBack(){
    hideElement(highScoreForm);
}



// highScoreLink.addEventListener("click", function() {
//     var element = document.querySelector("#highscores");
//     element.classList.remove("hidden");
// });
