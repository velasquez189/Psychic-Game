    // <script type="text/javascript">

    var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


   var wins = 0;
   var losses = 0;
   var guessesLeft = 9;
   var gameStatus = document.getElementById("game");

   document.onkeyup = function(event) {
       var userGuess = event.key;
       console.log(computerGuess); 
       var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

   if (computerGuess === userGuess) {
       wins++;
       guessesLeft = 9;
       console.log(wins);
   }

   // Else if conditional when user gets input wrong

   else if (computerGuess !== userGuess) {
       guessesLeft--;
       console.log('You lost');
       if (guessesLeft === 0) {
           losses++;
           guessesLeft = 9;
       }
   }

   else {
       guessesLeft = guessesLeft--;
   }

   gameStatus.innerHTML = `
   <p> Your Choice: ${userGuess}</p>
   <p> Computer Choice: ${computerGuess}</p>
   <p> You've won ${wins} times</p>
   <p> You've lost ${losses} times</p>
   <p> You have ${guessesLeft} tries left</p>
   `;
            
};

