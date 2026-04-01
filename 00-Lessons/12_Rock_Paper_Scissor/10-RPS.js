let score = JSON.parse(localStorage.getItem('score')) || {Win: 0, Lose: 0, Tie: 0};

updateScoreElement();

/*// since || is used no need for this code
if (!score) {//since null is falsy it is same as score === null
  score = {
    Win: 0,
    Lose: 0,
    Tie: 0
  };
}
  */

function playGame(playerMove) {
  const computerMove = pickComputerMove(); 
  console.log(`Computer Move  is '${computerMove}'`);
  Result = '';
  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      Result = 'You lose!';
    } else if (computerMove === 'Paper') {
      Result = 'You Win!';
    } else if (computerMove === 'Scissors') {
      Result = 'It\'s a tie!';
    }
  } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
    Result = 'You Win!';
    } else if (computerMove === 'Paper') {
      Result = 'It\'s a tie!';
    } else if (computerMove === 'Scissors') {
      Result = 'You lose!';
    }
  } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
    Result = 'It\'s a tie!';
    } else if (computerMove === 'Paper') {
      Result = 'You lose!';
    } else if (computerMove === 'Scissors') {
      Result = 'You Win!';
    }
  }

  if (Result === 'You Win!') {
    score.Win++;
  } else if (Result === 'You lose!') {
    score.Lose++;
  } else if (Result === 'It\'s a tie!') {
    score.Tie++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = Result;
  document.querySelector('.js-moves').innerHTML = `You 
<img class="move-icon" src="Images/${playerMove}-emoji.png">
<img class="move-icon" src="Images/${computerMove}-emoji.png">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.Win}, Losses: ${score.Lose}, Ties: ${score.Tie}`;
}

function pickComputerMove() {
  const random = Math.random();
  let computerMove = '';
  if (random>=0 && random < 1/3) {
    computerMove = 'Rock';
  } else if (random >= 1/3 && random < 2/3) {
    computerMove = 'Paper';
  } else if (random >= 2/3 && random < 1) {
    computerMove = 'Scissors';
  }
  /*
  return;//this will show undefined
  console.log('after return statement,so this does not get executed');
  */
  return computerMove;
}