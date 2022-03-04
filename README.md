# Application Javascript quiz

## Description

The Javascript quiz is a testing tool to help prepare students for written exams. 
Select each question at random and grade based on user response.
In the end the fiinal grade will be calculated and presented in the highscores table.

### Future feature(s)
1. Store questions from an external source so that maintenance  of question inclusion wil not impact code.

## Acceptance Criteria Coverage

GIVEN I am taking a code quiz
WHEN I click the Start button
THEN a timer starts and I am presented with a question.
1. Timer Funtionality includes:
    1. Total time is based on question total * 12 seconds
    2. Starts when user starts quiz
    3. Brief pause between transition from one question to the next to give user fair grading
WHEN I answer a question
THEN I am presented with another question
1. Function generateQuestionForm() is used to populate form
2. Function removeChildren(parent) is used to remove elements of a form
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
1. Function selectAnswer (btnVal) is used to handle :
    1. Tally base points(10 per question) upon correct response
    2. Decrement 10 seconds off timer upon incorrect response
WHEN all questions are answered or the timer reaches 0
THEN the game is over
1. Function nextQuestion() will handle:
    1. When all questions have been answered; Then game is over
    2. When timer reaches 0; Then game is over
WHEN the game is over
THEN I can save my initials and score
1. Function getScore() will:
    1. Sum tally of correct questions = Base Score
    2. Sum Base Score with reamining seconds
2. Function postScore() will:
    1. Take User input of initials
    2. Take calculated score
    3. Store data locally along with other scores saved

### Objective Evidence
![Example Picture](/assets/images/example.png?raw=true "Here is an example!")
[Try it yourself!](https://dolomiteson.github.io/git-init-mod4-challenge/)
