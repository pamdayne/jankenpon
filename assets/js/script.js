const playerChoiceBtn = document.querySelectorAll('button[name="player-choice"]');
const handShapes = ['rock', 'paper', 'scissors'];
const players = ['Player', 'Bot'];
const gameResultElem = document.querySelector('.js-game-results');

const setResultMessage = (results) => {
  const winner = (results === 'No one' ? results : `<span class="name">${results}</span>`);
  gameResultElem.innerHTML = `<div class="result-message">${winner} wins!</div>`;
};

const setPlayerChoice = (playerChoice) => {
  const button = document.querySelector(`button[value=${playerChoice}]`);
  button.classList.add('chosen');
  handShapes.forEach((shape) => {
    const otherButtons = document.querySelector(`button[value=${shape}]`);
    otherButtons.disabled = 'true';
  });

  const html = `<div class="player-choice">${playerChoice}</div>`;
  const elem = document.querySelector('.player-field .buttons');
  elem.insertAdjacentHTML('afterend', html);
};

const setBotChoice = (botChoice) => {
  const pictureHtml = `<picture> 
                     <source media="(min-width: 768px)" srcset="assets/img/bothand/hand-${botChoice}@2x.png">
                     <img src="assets/img/bothand/hand-${botChoice}.png" alt="Rock" width="200" height="200" style="width:auto;">
                     </picture>`;

  const textHtml = `<div class="bot-choice">${botChoice}</div>`;
  document.querySelector('.js-bot-field').innerHTML = textHtml + pictureHtml;
};

const randomBotChoice = () => {
  const chosenShape = handShapes[Math.floor(Math.random() * handShapes.length)];
  return chosenShape;
};

const thisBeatsThat = (playerChoice, botChoice) => {
  if (playerChoice === botChoice) {
    return 'No one ';
  } else if (playerChoice === 'paper' && botChoice === 'rock') {
    return players[0];
  } else if (playerChoice === 'rock' && botChoice === 'scissors') {
    return players[0];
  } else if (playerChoice === 'scissors' && botChoice === 'paper') {
    return players[0];
  } else {
    return players[1];
  }
};

function onload() {
  playerChoiceBtn.forEach((btn) => {
    const btnID = document.getElementById(btn.id);

    btnID.addEventListener('click', function () {
      const playerChoice = btnID.value;
      const botsChoice = randomBotChoice();
      const gameResult = thisBeatsThat(playerChoice, botsChoice);

      setPlayerChoice(playerChoice);
      setBotChoice(botsChoice);
      setResultMessage(gameResult);
    });
  });
}
