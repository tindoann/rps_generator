// cache variables and set initial counter

var choices = ['paper', 'rock', 'scissors'];
var i = Math.floor(Math.random() * 3);
var ComChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;
function score(){
   var score_div = document.getElementById('score').innerHTML = UserPoints + " - " + ComPoints;
}
setInterval(score, 50);
function convert(word){
   if (word === 'paper') return '<i class="far fa-hand-paper"></i>';
   if (word === 'rock') return '<i class="far fa-hand-rock"></i>';
   return '<i class="far fa-hand-scissors"></i>'
}

// The core game functions that set up and determine the games actual logic
function game(UserChoice) {
   var box = document.getElementById("challenge");
   box.style.display = "inline-flex";
   var userDiv = document.getElementById("YourObject");
   userDiv.innerHTML = convert(UserChoice);
   var comDiv = document.getElementById("ComObject");
   comDiv.innerHTML = convert(ComChoice);
   if (UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper") {
      win(UserChoice);
   }
   else if(UserChoice === ComChoice){
      draw(UserChoice);
   }  
   else {
      lose(UserChoice);
   }

// Randomly chooses a choice from the options array. This is the Computer's guess.
   function continueGame(){
      i = Math.floor(Math.random() * 3); 
      ComChoice = choices[i]; 
      box.style.display = "none"; 
   }
   setTimeout(continueGame, 1200); 
}

// Winning Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function win(bn){
   UserPoints++; 
   document.getElementById("who").innerHTML = "You win!"; 
   var bn = document.getElementById(bn); 
   bn.classList.remove("bn"); 
   bn.classList.add("green"); 
   setTimeout(() => {
      bn.classList.add("bn"); 
      bn.classList.remove("green");    
   }, 1200); 
}

// Draw Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function draw(bn){
   document.getElementById("who").innerHTML = "Draw."; 
   var bn = document.getElementById(bn); 
   bn.classList.remove("bn"); 
   bn.classList.add("gray"); 
   setTimeout(() => {
      bn.classList.add("bn"); 
      bn.classList.remove("gray"); 
   }, 1200); 
}

// Losing Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function lose(bn){
   ComPoints++; 
   document.getElementById("who").innerHTML = "You lose..."; 
   var bn = document.getElementById(bn); 
   bn.classList.remove("bn"); 
   bn.classList.add("red"); 
   setTimeout(() => {
      bn.classList.add("bn"); 
      bn.classList.remove("red"); 
   }, 1200); 
}

