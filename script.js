//Declaring Variables 
let startQuizElement = document.querySelector(".starQuiz");
let JumboElement = document.querySelector(".jumbotron")
let switchedTextElement = document.querySelectorAll(".switchText");
// Array of objects that will be stringified onto the page 
const questions = [
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
    console.log(switchedTextElement);
    for (i = 0; i < switchedTextElement.length; i ++) {
        switchedTextElement[i].classList.add("hide");
    }
    //switchedTextElement.forEach.add("hide");
       
}


//Event Listeners 

//this is successfully calling action when i click the start quix button. 
// now a function needs to be written to hide the main text, and start the timer 

startQuizElement.addEventListener("click", function() {
    event.preventDefault();
    beginQuiz();
} );
    //console.log("this logged because i clciked the start quiz button"))