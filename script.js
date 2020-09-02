//Declaring Variables 

//Main Element Selectors
let startQuizElement = document.querySelector(".starQuiz");
let JumboElement = document.querySelector(".jumbotron")
let switchedTextElement = document.querySelectorAll(".switchText");
let questionElement = document.querySelector(".question");
let timeDisplayedElement = document.querySelector(".timeRemaing")
let revealElement = document.querySelectorAll(".hide");
let questionDivElement = document.querySelector(".questionFormat");

//Question content selectors
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
let endGame = false;
let username = "";

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
    for (i = 0; i < switchedTextElement.length; i++) {
        switchedTextElement[i].classList.add("hide");
    }
    for (i = 0; i < revealElement.length; i++) {
        revealElement[i].classList.remove("hide");
    }

    //need to create a loop to generate question and buttons from first question array 
    countdown(3, 0);
    writeContent(questionCount);
}

//function takes in minutes and seconds as arguments 
// might need to update this to calcualte penalties for wrong answers
function countdown(minutes, seconds) {
    // sets time in seconds
    var time = minutes * 60 + seconds;
    //sets count down interval function for ever 1000 milisecond
    var interval = setInterval(function () {
        //sets a variable and grabs the timdisplayedelement
        var el = timeDisplayedElement;
        // if the time is 0 then end the counter
        if (time == 0 || endGame) {
            //stops timer
            clearInterval(interval);
        }
        // takes total number of seconds, divides by 60 to get minutes left, adds 0 if under ten
        var minutes = Math.floor(time / 60);
        if (minutes < 10) minutes = "0" + minutes;
        // takes total seconds and takes left over of division via modulous to get seconds remaining
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        //formats the timer nicely 
        var text = minutes + ':' + seconds;
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

function endQuiz() {
    //removes questions and answers from being displayed 
    questionElement.classList.add("hide");
    for (i = 0; i < revealElement.length; i++) {
        revealElement[i].classList.add("hide");
    }
}

function writeContent(i) {
    questionElement.textContent = questions[i].question;
    optionAElement.textContent = questions[i].optionA;
    optionBElement.textContent = questions[i].optionB;
    optionCElement.textContent = questions[i].optionC;
    optionDElement.textContent = questions[i].optionD;
}

//make function called displayResults 


//Event Listeners 

questionDivElement.addEventListener("click", function (event) {
    let element = event.target;

    if (element.matches("a") === true) {
        // logic to see if it matches answer here 
        console.log(element.textContent);
        if (element.textContent == questions[questionCount].correctAnswer) {
            answeredCorrectly++;
        } else {
            answeredIncorrectly++;
            wrongAnswer = true;
        }
        questionCount++;
        console.log("Correctly answered: " + answeredCorrectly);
        console.log("Incorrectly answered: " + answeredIncorrectly);
        writeNextQuestion();
    }
})

startQuizElement.addEventListener("click", function () {
    event.preventDefault();
    beginQuiz();
});