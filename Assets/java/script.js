document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});


/**
 * the main game "loop" designed to call a random number between 1-25
 */
function runGame(){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer(){
}


function calculateCorrectAnswer(){
}


function incrementScore(){
}


function incrementWrongScore(){
}


function displayAdditionQuestion(operand1, operand2){
}


function displayMultiplyQuestion(){
}
