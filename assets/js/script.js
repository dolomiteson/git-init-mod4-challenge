/* Variable Elements */
var formsArray = [
     quizIntro = document.querySelector("#quiz-intro"),
     highScoreForm = document.querySelector("#highscores"),
     questionForm = document.querySelector("#question-form"),
     scoreForm = document.querySelector("#score-form")
 ];

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
        ask: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "Javascript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console.log",
        correct: "console.log"
}];

var answerKey = [];
var score = "";
var question = "";
var correctAnswer = "";
var timeInterval = "";
var timeVal = quesArray.length * 12;
var pauseTime = 1;

/* Highscore Elements */
var highscoreLink = document.getElementById("view-highscores");
var tBody = document.getElementsByTagName("tbody")[0];

/* Timer Element */
var timerEle = document.querySelector("#test-time");
timerEle.textContent = timeVal;

/* Score Elements */
var scoreEle = document.querySelector("#score");

// Initials Textbox Element
var initialsInput = document.querySelector("#initials-input");
initialsInput.addEventListener("input", disableSubmitButton);

// Initials Submit button element 
var submitInitials = document.querySelector("#submit-initials");

/* All Functions */

// Function that will remove all children of the question form
function removeChildren(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Funtion that reveals selected element while hiding all other elements in an array
function revealElement(element, elementArr){

    if(element.getAttribute("id") === "highscores"){
        highscoreLink.classList.add("hidden");
    }
    

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
        var isLeave = confirm("If you leave this quiz progress will not be saved! Do you wish to continue?");
        if(isLeave === true){
            revealElement(highScoreForm, formsArray);

        }
    }
    else{        
        revealElement(highScoreForm, formsArray);
    }
}

// Funtion that will reveal the quiz form and start quiz
function revealQuiz(){
    revealElement(questionForm, formsArray);
    takeQuiz();
}

// Funtion to hide the Highscores element and present Quiz Intro
function revealQuizIntro(){
    location.reload();
    revealElement(quizIntro, formsArray);
}

// Function to display the Score Form
function revealScore(){
    revealElement(scoreForm, formsArray);
}

/* Quiz Form funtionality */

// Function to take quiz
function takeQuiz(){
    question = pickQuestion();
    // Grab and remove the correct answer for further use
    correctAnswer = question.correct;
    delete question.correct;

    // Use remaing properties to create the form
    generateQuestionForm(question);
    countdown();
}

function nextQuestion(){
    // TODO: show final score element if quesArray has no more questions
    
    if(quesArray.length > 0){
        removeChildren(questionForm);
        question = pickQuestion();
        // Grab and remove the correct answer for further use
        correctAnswer = question.correct;
        delete question.correct;

        // Use remaing properties to create the form
        generateQuestionForm(question);
    }
    else{
        clearInterval(timeInterval);
        getScore();
        revealScore();
    }
}

// Function to generate quiz form child elements
function generateQuestionForm(quesObj){
    
    var ansNum = 1; 

    // Generate Questions
    var questionText = document.createElement("p");
    questionText.textContent = quesObj.ask;
    questionForm.appendChild(questionText);
    delete quesObj.ask;

    // Generate Buttons
    for(const [key, value] of Object.entries(quesObj)) {
        var aBtn = document.createElement("button");
        aBtn.textContent = ansNum + ': ' + value;
        aBtn.value = value;
        aBtn.setAttribute("onclick", "selectAnswer(this.value)");
        questionForm.appendChild(aBtn);
        ansNum++;
    }
}

/* Question Functionalityy */

// Shuffle Array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

// Funtion to pick question and eliminate from being reused during quiz
function pickQuestion(){
    quesArray = shuffle(quesArray);
    var question = quesArray[quesArray.length - 1];
    quesArray.pop();
    return question;
}

// Select answer and grade
function selectAnswer (btnVal){
    
    // Disable buttons during this section
    for(var index = 0; index < questionForm.children.length; index++){
        if(questionForm.children[index].tagName === "BUTTON"){
            questionForm.children[index].disabled = "disabled";
        }
    }

    var response = "";
    if(btnVal === correctAnswer ){
        response = "Correct!";
        answerKey.push("T");
    }
    else if(btnVal !== correctAnswer && timeVal > 10){
        response = "Wrong!";
        timeVal -= 10;
    }
    else{
        response = "Wrong!";
        timeval = 0;
    }

    // Generate Echo Response
    var echoResponse = document.createElement("p");
    echoResponse.textContent = response;
    echoResponse.style.borderTop = "solid";
    questionForm.appendChild(echoResponse);

    clearInterval(timeInterval);
    // Generate next question
    setTimeout(() => {countdown(); nextQuestion(); timerEle.textContent = timeVal;}, 500);
    
}

/* Timer Functionality */
// Function to countdown when quiz begins
function countdown() {
    timeInterval = setInterval(function () {
        if (timeVal > 0) {        
        timeVal--;
        } else {
        clearInterval(timeInterval);
        getScore();
        revealScore();
        }
        timerEle.textContent = timeVal;
    }, 1000);
}

/* Scoring Functionality */
// Function to calculate score
function getScore(){
    score = answerKey.length * 10;
    score += timeVal;
    scoreEle.textContent = score;
}

//Function to Disable Submit Button
function disableSubmitButton(){
    if(initialsInput.value.length === 3){
        submitInitials.classList.remove("hidden");
    }
    else{submitInitials.classList.add("hidden");}
}

function postScore(){
    removeChildren(questionForm);
    
    var initials = initialsInput.value;

    // Get local storage
    const highscores = JSON.parse(localStorage.getItem("storedScores")) ?? [];

    // Add new record
    highscores.push({score, initials});

    // Sort by score
    highscores.sort((a,b) => b.score - a.score);
    // Set local storage
    localStorage.setItem("storedScores", JSON.stringify(highscores));

    presentHighscores();
}

function presentHighscores(){
    // Get local storage
    const highscores = JSON.parse(localStorage.getItem("storedScores")) ?? [];

    // Present results
    for(var index = 0; index < highscores.length; index++){
        var place = index + 1
        
        //Insert a Row
        var scoreRow = tBody.insertRow();
        if(place % 2 === 0){
            scoreRow.classList.add("even");
        }

        // Insert Place Cell
        var placeCell = scoreRow.insertCell();
        var placeText = document.createTextNode(place + ".");
        placeCell.appendChild(placeText);

        // Insert Initials Cell
        var initCell = scoreRow.insertCell();
        var initText = document.createTextNode(highscores[index].initials);
        initCell.appendChild(initText);

        // Insert Score Cell
        var scoreCell = scoreRow.insertCell();
        var scoreText = document.createTextNode(highscores[index].score);
        scoreCell.appendChild(scoreText);
    }
    
    revealHighscores();
}

function clearHighScores(){
    removeChildren(tBody);
    localStorage.clear();
}