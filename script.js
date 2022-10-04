//need a generate.btn add.eventListener("click, start game~~push to start") to start the quiz
document.getElementById("question-div").style.display = "none";
document.getElementById("initials-div").style.display = "none";
// var timerId;
var timeLeft = 3;
// var choices = Array.from(document.getElementsByClassName("answer"));
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-container");
var timeEl = document.getElementById("time"); //do i need this here?

//create an array of questions with question, an array of objects and right answer values

var questions = [
    {
        question: "Strings must be surrounded by what?",
        options: ["commas", "quotations", "parentheses"],
        answer: "parentheses"
    },
    {
        question: "What command in terminal will change your current directory?",
        options: ["cd", "pwd", "ls"],
        answer: "cd"
    },
    {
        question: "Which website do we use for updating repositories?",
        options: ["Slack", "Bootcampspot", "Github"],
        answer: "Github"
    },
    {
        question: "CSS is commonly used for what purpose?",
        options: ["styling", "structuring", "scripting"],
        answer: "styling"
    },
    {
        question: "When would you need a DS_Store?",
        choice1: ["index.html", ".gitignore", "style.css"],
        answer: ".gitignore"
    },
    {
        question: "What is a valid boolean response?",
        choice1: ["string", "true", "50"],
        answer: "true"
    }
]

var questionIndex = 0;
var timerId = 0;


document.getElementById("start").addEventListener("click", function(){
    document.getElementById("start-div").style.display = "none";
    document.getElementById("question-div").style.display = "block";
    document.getElementById("initials-div").style.display = "block";
    

    var showQuestion = question[questionIndex].question;
    function nextQuestion(){
        
    }


   var timerId = setInterval(function(){
    document.getElementById("time").textContent = timeLeft;

        if(timeLeft === 0)
        {
            clearInterval(timerId)
            alert("Time's up!")
            // displayMessage()
            //clear timer
            document.getElementById("initials-div").style.display = "block";

            //hide questions div and show initials div
        }
        else{
            document.getElementById("time").textContent = timeLeft;
            timeLeft--;
        }
    }, 1000)
})
    clearInterval();
    // }
    

    // })

// document.getElementById("start").addEventListener("click", function(){
//     document.getElementById("start-div").style.display = "none";
//     document.getElementById("question-div").style.display = "block";
//     document.getElementById("initials-div").style.display = "block";

//     timerId = setInterval(function(){
//         if(timeLeft === 0)
//         {
//             clearInterval(timeInterval)
//             displayMessage()
//             //clear timer
//             //hide questions div and show initials div
//         }
//         else{
//             document.getElementById("time").textContent = timeLeft;
//             timeLeft--;
//         }
//     }, 1000)
// })

var score = 0;

function questionArray(){
    var firstQuestion = questions[questionArray];
    questionEl.textContent = firstQuestion.question;
    var options = firstQuestion.options;
    answerEl.textContent = options;
}
questionArray();





var wrongAnswer = 10;
// function getNewQuestion(){
//     if

// }

// function showQuestion(q){
//     questionDiv = document.getElementById("Question");
//     questionDiv.textContent = q.questionDiv

//     var alternative = document.querySelectorAll("#alternative");
// }

// showQuestion(questions);
// function nextQuestion(){

// }

// function chooseAnswer(){}
