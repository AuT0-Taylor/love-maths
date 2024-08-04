document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of button){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "sumbit"){
                alert("you clicked sumbit");
            } else {
                let gameType =  this.getAttribute("data-type");
                alert(`you clicked ${gameType}`)
            }
        })
    }
})

function runGame(){

}


function checkAnswer(){
}


function calculateCorrectAnswer(){
}


function incrementScore(){
}


function incrementWrongScore(){
}


function displayAdditionQuestion(){
}


function displayMultiplyQuestion(){
}
