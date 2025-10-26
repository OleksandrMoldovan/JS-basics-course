let currentScore = JSON.parse(localStorage.getItem("currentScore")) || {
  playerLose: 0,
  playerTie: 0,
  playerWins: 0,
};
updateScoreElement();

// if (!currentScore) {
//   currentScore = {
//     playerLose: 0,
//     playerTie: 0,
//     playerWins: 0
//   }
// }

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "Lose.";
    } else if (computerMove === "Paper") {
      result = "Win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "Lose.";
    } else if (computerMove === "Scissors") {
      result = "Win.";
    }
  } else {
    if (computerMove === "Rock") {
      result = "Win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "Lose.";
    }
  }

  if (result === "Win.") {
    ++currentScore.playerWins;
    console.log(currentScore.playerWins);
  } else if (result === "Lose.") {
    ++currentScore.playerLose;
    console.log(currentScore.playerLose);
  } else console.log(++currentScore.playerTie);

  localStorage.setItem("currentScore", JSON.stringify(currentScore));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `You  
         <img class="user-decision-images" src="images/${playerMove}-emoji.png">. Computer 
         <img class="user-decision-images" src="images/${computerMove}-emoji.png">.`;

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${currentScore.playerWins},  Losses: ${currentScore.playerLose}, Ties: ${currentScore.playerTie}`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${currentScore.playerWins},  Losses: ${currentScore.playerLose}, Ties: ${currentScore.playerTie}`;
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
