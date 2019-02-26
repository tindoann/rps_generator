    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var choices = ["r", "p", "s"];
    var ties = 0;
    var wins = 0;
    var losses = 0;

    // This function is run whenever the user presses a key
    document.onkeyup = function(event) {

        document.getElementById("instructions").textContent = " ";

        // Determines which key was pressed.
        var userGuess = event.key;
        if (choices.includes(userGuess)) {
            document.getElementById("user-choice").textContent = userGuess;
        } else {
            // reset instructions for the user and exit
            document.getElementById("instructions").textContent = 'Press "r", "p", or "s" to begin...';
            return;
        }

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById("computer-choice").textContent = computerGuess;

        var outcome;
        if (userGuess === computerGuess) {
            ties++;
            outcome = "tie";
        } else if (userGuess === 'r' && computerGuess === 'p') {
            losses++;
            outcome = "lose";

        } else if (userGuess === 'r' && computerGuess === 's') {
            wins++;
            outcome = "win";

        } else if (userGuess === 'p' && computerGuess === 'r') {
            wins++;
            outcome = "win";
        } else if (userGuess === 'p' && computerGuess === 's') {
            losses++;
            outcome = "lose";

        } else if (userGuess === 's' && computerGuess === 'r') {
            losses++;
            outcome = "lose";

        } else if (userGuess === 's' && computerGuess === 'p') {
            wins++;
            outcome = "win";
        }

        document.getElementById("outcome").textContent = outcome;
        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
        document.getElementById("ties").textContent = ties;

        document.getElementById("outcome").className = "";
        if (outcome === 'win') {
            document.getElementById("outcome").classList.toggle("green");
        } else if (outcome === 'lose') {
            document.getElementById("outcome").classList.toggle("red");
        }


    };