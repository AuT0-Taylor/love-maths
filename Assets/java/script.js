document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});


/**
 * the main game "loop" designed to call a random number between 1-25
 */
function runGame(gameType){

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else {
        alert(`unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting`;
    }

}

/**
 * checks answers from user and calculatorcorrectanswer()
 */
function checkAnswer(){

    let userAnswer =  parseInt(document.getElementById("answer-box").value);
    let calculateAnswer =  calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert("Hey You got it!");
        incrementScore();
    } else {
        alert(`wrong sorry ${userAnswer}. the right answer was ${calculateAnswer[0]}!`);
        incrementWrongScore();
    }

    runGame(calculateAnswer[1]);
}



/**
 * calculates the operands
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return[operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`
    }

}

/**
 * keeps track of correct answers from user
 */
function incrementScore(){

    let oldscore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldscore;

}

/**
 * keeps track of incorrect answers from user
 */
function incrementWrongScore(){

    let oldscore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldscore;

}


function displayAdditionQuestion(operand1, operand2){

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}


function displaySubtractQuestion(){
}


function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}
