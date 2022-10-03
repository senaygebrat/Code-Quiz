//need a generate.btn add.eventListener("click, start game~~push to start") to start the quiz
document.getElementById("question-div").style.display = "none";
document.getElementById("initials-div").style.display = "none";
var timerId;
var timeLeft = 10;

//create an array of questions with question, an array of options and right answer values


document.getElementById("start").addEventListener("click", function(){
    document.getElementById("start-div").style.display = "none";
    document.getElementById("question-div").style.display = "block";
    document.getElementById("initials-div").style.display = "block";

    timerId = setInterval(function(){
        if(timeLeft === 0)
        {
            clearInterval(timeInterval)
            displayMessage()
            //clear timer
            //hide questions div and show initials div
        }
        else{
            document.getElementById("time").textContent = timeLeft;
            timeLeft--;
        }
    }, 1000)
})