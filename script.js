//Declaring Variables 
let startQuizElement = document.querySelector(".starQuiz");
let JumboElement = document.querySelector(".jumbotron")
let switchedTextElement = document.querySelectorAll(".switchText");
let questionElement = document.querySelector(".question");
let timeDisplayedElement = document.querySelector(".timeRemaing")


// Array of objects that will be stringified onto the page 
const questions = [
    {
    question: "This is Question 1",
    optionA: "This is answer one",
    optionB: "This is answer two",
    optionC: "This is answer three",
    optionD: "this is answer four",
    correctAnswer: this.optionA
    },
    {
    question: "This is Question 2",
    "optionA": "alfadlkfjdslkjf",
    "optionB": "akjalfkjdafkljd",
    "optionC": "aldkfjdklfj",
    "optionD": "aflkjdslfkjsdlkfj",
    "correctAnswer": this.optionA
    },
    {
    "question": "ladkfjdslkfj",
    "optionA": "alfadlkfjdslkjf",
    "optionB": "akjalfkjdafkljd",
    "optionC": "aldkfjdklfj",
    "optionD": "aflkjdslfkjsdlkfj",
    "correctAnswer": this.optionA
    },
    {
    "question": "ladkfjdslkfj",
    "optionA": "alfadlkfjdslkjf",
    "optionB": "akjalfkjdafkljd",
    "optionC": "aldkfjdklfj",
    "optionD": "aflkjdslfkjsdlkfj",
    "correctAnswer": this.optionA
    },
    {
    "question": "ladkfjdslkfj",
    "optionA": "alfadlkfjdslkjf",
    "optionB": "akjalfkjdafkljd",
    "optionC": "aldkfjdklfj",
    "optionD": "aflkjdslfkjsdlkfj",
    "correctAnswer": this.optionA
    }
]


//Functions 

//i originally thought this would apply hide to all my items with the class but its not. 
function beginQuiz() {
    for (i = 0; i < switchedTextElement.length; i ++) {
        switchedTextElement[i].classList.add("hide");
    }
    questionElement.classList.remove("hide")
    //need to create a loop to generate question and buttons from first question array 
    questionElement.textContent = questions[0].question;
    
    //being timer on click 
    countdown(3, 0);      
}

//function takes in minutes and seconds as arguments 
function countdown(minutes, seconds) {
    // sets time in seconds
    var time = minutes*60 + seconds;
    //sets count down interval function for ever 1000 milisecond
    var interval = setInterval(function() {
        //sets a variable and grabs the timdisplayedelement
        var el = timeDisplayedElement;
        // if the time is 0 then end the counter
        if(time == 0) {
            //set up code to move onto displaying the score here 
            el.innerHTML = "Move on to next date...";
            //stops timer
            clearInterval(interval);
        }
        // takes total number of seconds, divides by 60 to get minutes left, adds 0 if under ten
        var minutes = Math.floor( time / 60 );
        if (minutes < 10) minutes = "0" + minutes;
        // takes total seconds and takes left over of division via modulous to get seconds remaining
        var seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds; 
        //formats the timer nicely 
        var text = minutes + ':' + seconds;
        //writes the current time to the HTML doc
        el.textContent = text;
        //decreases the counter by 1
        time--;
    }, 1000);
}


//Event Listeners 

//this is successfully calling action when i click the start quix button. 
// now a function needs to be written to hide the main text, and start the timer 

startQuizElement.addEventListener("click", function() {
    event.preventDefault();
    beginQuiz();
} );
    //console.log("this logged because i clciked the start quiz button"))