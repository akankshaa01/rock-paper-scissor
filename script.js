
let userScore = 0;
let computerScore =0;
winner = "";

document.getElementById("rock").addEventListener( "click" ,() => {
    const userChoice = "rock";
    document.getElementById("player-choice").innerText = userChoice;
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer-choice").innerText = computerChoice;

    if (userChoice === computerChoice) {
       winner = "tie"
    }
    else if (userChoice == "rock" && computerChoice == "scissor" || 
    userChoice == "scissor" && computerChoice == "paper" ||
    userChoice == "paper" && computerChoice == "rock") {
    userScore++;
    document.getElementById("player-score").innerText= userScore;
    winner = "user";
    } else {
    computerScore++;
    document.getElementById("computer-score").innerText= computerScore;
    winner = "computer";
    }

let outcome = document.getElementById("output-box");
outcome.classList.remove("win-text", "lose-text");

if (winner == "user") {
    outcome.innerText = "You win!";
    outcome.classList.add("win-text");
}
else if (winner == "computer") {
    outcome.innerText = "Computer wins";
    outcome.classList.add("lose-text");
} else {
    outcome.innerText = "It's a tie!";
}
} );


document.getElementById("paper").addEventListener( "click" ,() => {
    const userChoice = "paper";
    document.getElementById("player-choice").innerText = userChoice;
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer-choice").innerText = computerChoice;

    if (userChoice === computerChoice) {
        winner = "tie"
     }
     else if (userChoice == "rock" && computerChoice == "scissor" || 
     userChoice == "scissor" && computerChoice == "paper" ||
     userChoice == "paper" && computerChoice == "rock") {
     userScore++;
     document.getElementById("player-score").innerText= userScore;
     winner = "user";
     } else {
     computerScore++;
     document.getElementById("computer-score").innerText= computerScore;
     winner = "computer";
     }
     let outcome = document.getElementById("output-box");
     outcome.classList.remove("win-text", "lose-text");
     
     if (winner == "user") {
         outcome.innerText = "You win!";
         outcome.classList.add("win-text");
     }
     else if (winner == "computer") {
         outcome.innerText = "Computer wins";
         outcome.classList.add("lose-text");
     } else {
        outcome.innerText = "It's a tie!";
    }
    

} );

document.getElementById("scissor").addEventListener( "click" ,() => {
    const userChoice = "scissor";
    document.getElementById("player-choice").innerText = userChoice;
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer-choice").innerText = computerChoice;

    if (userChoice === computerChoice) {
        winner = "tie"
     }
     else if (userChoice == "rock" && computerChoice == "scissor" || 
     userChoice == "scissor" && computerChoice == "paper" ||
     userChoice == "paper" && computerChoice == "rock") {
     userScore++;
     document.getElementById("player-score").innerText= userScore;
     winner = "user";
     } else {
     computerScore++;
     document.getElementById("computer-score").innerText= computerScore;
     winner = "computer";
     }
     let outcome = document.getElementById("output-box");
     outcome.classList.remove("win-text", "lose-text");
     
     if (winner == "user") {
         outcome.innerText = "You win!";
         outcome.classList.add("win-text");
     }
     else if (winner == "computer") {
         outcome.innerText = "Computer wins";
         outcome.classList.add("lose-text");
     } else {
        outcome.innerText = "It's a tie!";
    }
} );


document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("player-score").innerText=" ";
    document.getElementById("computer-score").innerText=" ";
    document.getElementById("output-box").innerText="----";
    document.getElementById("player-choice").innerText=" ";
    document.getElementById("computer-choice").innerText=" ";
});