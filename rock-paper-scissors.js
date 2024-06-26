// Rock, Paper, Scissors Game

// Define the hands array
const hands = ['rock', 'paper', 'scissors'];

// Define the getHand function
function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// Define two player objects
const player1 = {
  name: 'Player 1',
  getHand: getHand
};

const player2 = {
  name: 'Player 2',
  getHand: getHand
};

// Define the playRound function
function playRound(player1, player2) {
  const hand1 = player1.getHand();
  const hand2 = player2.getHand();

  // Log the hands played
  console.log(player1.name + ' played ' + hand1);
  console.log(player2.name + ' played ' + hand2);

  // Determine the winner
  if (hand1 === hand2) {
    console.log("It's a tie!");
    return null;
  } else if (
    (hand1 === 'rock' && hand2 === 'scissors') ||
    (hand1 === 'scissors' && hand2 === 'paper') ||
    (hand1 === 'paper' && hand2 === 'rock')
  ) {
    console.log(player1.name + ' wins!');
    return player1;
  } else {
    console.log(player2.name + ' wins!');
    return player2;
  }
}

// Example of playing a round
playRound(player1, player2);
