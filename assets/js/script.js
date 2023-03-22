const playerChoiceBtn = document.querySelectorAll(
  'button[name="player-choice"]'
);
const handShapes = ['rock', 'paper', 'scissors'];

const setResultMessage = (classname, results) => {
  const elem = document.querySelector(classname);

  if (elem.hasChildNodes()) {
    elem.removeChild(elem.childNodes[0]);
  }

  // parent results message
  const node = document.createElement('div');
  node.classList.add('results-message');

  // add span around the winners name
  const spanNode = document.createElement('span');
  const textNode = document.createTextNode(results);
  spanNode.classList.add('name');
  spanNode.appendChild(textNode);

  // combine
  node.appendChild(spanNode);
  node.append(document.createTextNode(' wins!'));
  elem.appendChild(node);
};

const setPlayerChoice = (playerChoice) => {
  document
    .querySelector(`button[value=${playerChoice}]`)
    .classList.add('chosen');
  handShapes.forEach((item) => {
    document.querySelector(`button[value=${item}]`).disabled = 'true';
  });

  let html = `<div class="player-choice">${playerChoice}</div>`;
  let elem = document.querySelector('.player-field .buttons');
  elem.insertAdjacentHTML('afterend', html);
};

const setBotChoice = (botChoice) => {
  let pictureHtml = `<picture> 
                     <source media="(min-width: 768px)" srcset="assets/img/bothand/hand-${botChoice}@2x.png">
                     <img src="assets/img/bothand/hand-${botChoice}.png" alt="Rock" width="200" height="200" style="width:auto;">
                     </picture>`;

  let textHtml = `<div class="bot-choice">${botChoice}</div>`;
  document.querySelector('.js-bot-field').innerHTML = textHtml + pictureHtml;
};

const randomBotChoice = () => {
  const chosenShape = handShapes[Math.floor(Math.random() * handShapes.length)];
  return chosenShape;
};

const thisBeatsThat = (playerChoice, botChoice) => {
  const players = ['Player', 'Bot'];

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
    let btnID = document.getElementById(btn.id);

    btnID.addEventListener('click', function () {
      let playerChoice = btnID.value;
      let botsChoice = randomBotChoice();
      let gameResult = thisBeatsThat(playerChoice, botsChoice);

      setPlayerChoice(playerChoice);
      setBotChoice(botsChoice);
      setResultMessage('.js-game-results', gameResult);
    });
  });
}
