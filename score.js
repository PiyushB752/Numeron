// Iteration 5: Store the player score and display it on the game over screen

let score = localStorage.getItem("score");
console.log(score);
var scoreBoard = document.getElementById("score-board")

scoreBoard.innerHTML = score;


const play_again_button = document.getElementById("play-again-button")
function playagain(){
    window.location.href="./game.html"
}
play_again_button.addEventListener("click", playagain);