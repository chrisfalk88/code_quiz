//Declaring Variables 

//Main Element Selectors
let JumboElement = document.querySelector(".jumbotron")
let questionElement = document.querySelector(".question");
let timeDisplayedElement = document.querySelector(".timeRemaing")
let possibleAnswersElement = document.querySelector(".possibleAnswers");
let displayScoreElement = document.querySelector(".displayHighScore");
let inputElement = document.querySelector("#initalInput");
let highScoreNavElement = document.querySelector(".highScores");
let highscoreDIvElement = document.querySelector(".highscoreDiv");


//Displayed Content <div> Selectors 
let displayInstrucElement = document.querySelector(".displayInstructions");
let displayQuizElement = document.querySelector(".displayQuiz");
let gameoverResultsElement = document.querySelector(".gameover");

// button seletors 
let startQuizElement = document.querySelector(".startQuiz");
//Question <a> content selectors
let optionAElement = document.querySelector("#Answer1");
let optionBElement = document.querySelector("#Answer2");
let optionCElement = document.querySelector("#Answer3");
let optionDElement = document.querySelector("#Answer4");

//Varaibles
let answeredCorrectly = 0;
let answeredIncorrectly = 0;
let questionCount = 0;
let penaltyTime = -30;
let wrongAnswer = false;
let username = "";
let interval;
let userscore;
// Array of objects that will be stringified onto the page 
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        optionA: "<Scripting>",
        optionB: "<js>",
        optionC: "<javascript",
        optionD: "<script>",
        correctAnswer: "<script>"
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        optionA: "alertBox('Hello World');",
        optionB: "msgBox(\"Hello World\");",
        optionC: "alert(\"Hello World\");",
        optionD: "msg(\"Hello World \");",
        correctAnswer: "alert(\"Hello World\");"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        optionA: "if i = 5",
        optionB: "if i = 5 then",
        optionC: "if (i == 5)",
        optionD: "if i == 5 then",
        correctAnswer: "if (i == 5)"
    },
    {
        question: "How does a FOR loop start?",
        optionA: "for (i=0; i <=5; i++)",
        optionB: "for i = 1 to 5",
        optionC: "for(i<=5; i++)",
        optionD: "for(i=0; i<=5)",
        correctAnswer: "for (i=0; i <=5; i++)"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        optionA: "-",
        optionB: "*",
        optionC: "=",
        optionD: "x",
        correctAnswer: "="
    }
]

//Functions 

//function to launch quiz:  hide elements, starts timer, writes first question
function beginQuiz() {

    displayInstrucElement.classList.add("hide");
    displayQuizElement.classList.remove("hide");

    countdown(3, 0);
    writeContent(questionCount);
}

//timer function takes in minutes and seconds as arguments
function countdown(minutes, seconds) {
    // sets time in seconds
    let time = minutes * 60 + seconds;
    //sets count down interval function for ever 1000 milisecond
    interval = setInterval(function () {
        //sets a variable and grabs the timdisplayedelement
        let el = timeDisplayedElement;
        // if the time is 0 or end game condition is met then end the counter
        if (time === 0) {
            //stops timer
            endQuiz();
            clearInterval(interval);
        }
        // takes total number of seconds, divides by 60 to get minutes left, adds 0 if under ten
        let minutes = Math.floor(time / 60);
        if (minutes < 10) minutes = "0" + minutes;
        // takes total seconds and takes left over of division via modulous to get seconds remaining
        let seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        //formats the timer  
        let text = minutes + ':' + seconds;
        //writes the current time to the HTML doc
        el.textContent = text;
        //decreases the counter by 1
        if (wrongAnswer) {
            time = time + penaltyTime;
            wrongAnswer = false;
        }
        time--;
    }, 1000);
}

// function that tests which question we are by array length, then rewrites question and answers to the DOM 
function writeNextQuestion() {
    if (questionCount < 5) {
        writeContent(questionCount);
    } else {
        //function to display results goes here
        endQuiz();
    }
}

//function that launches end game sequence, stops timer, displays score, asks for initials, writes to local storage
function endQuiz() {
    //stops timer when end game condition is met 
    clearInterval(interval);
    //removes questions and answers from being displayed 
    displayQuizElement.classList.add("hide");
    //reveals HTML with End Game details 
    gameoverResultsElement.classList.remove("hide");
    displayScoreElement.textContent = answeredCorrectly;

  

}

//function that writes array content to HTML elements 
function writeContent(i) {
    questionElement.textContent = questions[i].question;
    optionAElement.textContent = questions[i].optionA;
    optionBElement.textContent = questions[i].optionB;
    optionCElement.textContent = questions[i].optionC;
    optionDElement.textContent = questions[i].optionD;
}

// logic in here to remove text and display welcome text and button again 
function resetGame() {
    //hide end game text and display instructions again
    gameoverResultsElement.classList.add("hide");
    displayInstrucElement.classList.remove("hide");
    highscoreDIvElement.classList.add("hide");

    //reset variables 
    answeredCorrectly = 0;
    answeredIncorrectly = 0;
    questionCount = 0;
    username = "";

}


//

//Event Listeners 

//listens for when buttons are clicked inside the jumbotron div and then calculates if its a correct answer

$(document).on("click", ".possibleAnswers", function () {
        let element = event.target;

    if (element.matches("a") === true) {
        // logic to see if it matches answer here 
        console.log(element.textContent);
        if (element.textContent === questions[questionCount].correctAnswer) {
            answeredCorrectly++;
        } else {
            answeredIncorrectly++;
            wrongAnswer = true;
        }
        questionCount++;
        console.log("Correctly answered: " + answeredCorrectly);
        console.log("Incorrectly answered: " + answeredIncorrectly);
        writeNextQuestion();
}})

//listens for if the start quiz button is clicked 
$(document).on("click", ".startQuiz", function () {
    event.preventDefault();
    beginQuiz()
});


$(document).on("click", "#submitButton", function () {
    // log the highscores 
    localStorage.setItem("username", inputElement.value);
    localStorage.setItem("score", answeredCorrectly);

    //hides end game results
    gameoverResultsElement.classList.add("hide");

    //grab from local storage and place in varables 
    username = localStorage.getItem("username");
    userscore = localStorage.getItem("score");

    //write local storage to page 
    $(".displayScores").append("<h1>User Intitals : " + username +"</h1>");
    $(".displayScores").append("<h1>Score : " + userscore +"</h1><hr>");

    
    // call rewrite function, restarts game 
    resetGame(); 
});

//when Highscores is clicked, hides all divs, reveals highscore divs 
$(".highScores").on("click", function () {
    clearInterval(interval);
    gameoverResultsElement.classList.add("hide");
    highscoreDIvElement.classList.remove("hide");
    displayInstrucElement.classList.add("hide");
    displayQuizElement.classList.add("hide");


});

$("#backButton").on("click", function () {
    resetGame();
})


