//need a generate.btn add.eventListener("click, start game~~push to start") to start the quiz
document.getElementById("question-div").style.display = "none";
// document.getElementById("initials-div").style.display = "none";
var timerId;
var timeLeft = 60;
// var choices = Array.from(document.getElementsByClassName("answer"));
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-container");
var timeEl = document.getElementById("time"); //do i need this here?

//array of objects containing properties
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

// var timerId = 0;



//start button only shows questions div, and time left
document.getElementById("start").addEventListener("click", function(){
    document.getElementById("start-div").style.display = "none";
    document.getElementById("question-div").style.display = "block";
    // document.getElementById("initials-div").style.display = "none";
    document.getElementById("options-div").style.display = "block";
    document.getElementById("time").textContent = timeLeft
    document.getElementById("question").textContent = currQuestion
    document.getElementById("options").textContent = currOptions



    

;

    // console.log( document.getElementById("question-div"), document.getElementById("options-div") )
    
//timer id updates time remaining
   var timerId = setInterval(function(){
    // = timeLeft;
    
        if(timeLeft === 0)
        {
            clearInterval(timerId)
            alert("Time's up!")
            // displayMessage()
            //clear timer
            // document.getElementById("initials-div").style.display = "block";

        }
        else{
            document.getElementById("question-div").textContent = currQuestion
            // document.getElementById("question").textContent = questions[questionIndex].question
            // document.getElementById("options").textContent = questions[questionIndex].options
            timeLeft--;
            // document.getElementById("time") 
            document.getElementById("time").textContent = timeLeft;
        }
        console.log(document.getElementById("time"),  timeLeft )
    }, 1000)

    console.log(timeLeft)

// go to next question when needed -- begin at first object [0]

var currQuestion = questions[questionIndex].question;

var currOptions = questions[questionIndex].options;

console.log(currQuestion, currOptions)

     function questionArray(){
        // var currQuestion = questions[questionIndex].question;

            // var firstQuestion = questions[questionArray];
            // questionEl.textContent = firstQuestion.question;
            // var options = firstQuestion.options;
            // answerEl.textContent = options;
        }
        questionArray();

})

    // function that renders/shows the current question we are on
    // function show() {
    // document.getElementById("question-div").textContent = ""
    // document.getElementById("options").textContent = ""


    // }
    // }

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

// var score = 0;

// function questionArray(){
//     var firstQuestion = questions[questionArray];
//     questionEl.textContent = firstQuestion.question;
//     var options = firstQuestion.options;
//     answerEl.textContent = options;
// }
// questionArray();





// var wrongAnswer = 10;
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
