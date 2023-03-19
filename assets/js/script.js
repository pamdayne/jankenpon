
const playerChoiceBtn = document.querySelectorAll('button[name="player-choice"]');
let playersChoice = '';

const setMessage = (classname, texts) => {
  const elem = document.querySelector(classname);

  if (elem.hasChildNodes()) {
    elem.removeChild(elem.childNodes[0]);
  }

  const node = document.createElement('div');
  const textNode = document.createTextNode(texts);
  node.appendChild(textNode);
  elem.appendChild(node);
}

const setBotChoiceHTML = (botChoice) => {
  let pictureHtml = '<picture>';
  pictureHtml += `<source media="(min-width: 768px)" srcset="assets/img/bothand/hand-${botChoice}@2x.png">`;
  pictureHtml += `<img src="assets/img/bothand/hand-${botChoice}.png" alt="Rock" width="200" height="200" style="width:auto;">`;
  pictureHtml += `</picture>`;

  let textHtml = `<div class="bot-result">${botChoice}</div>`
  document.querySelector('.js-bot-field').innerHTML = textHtml + pictureHtml;
}

const randomBotChoice = () => {
  const handShapes = ['Rock', 'Paper', 'Scissors'];
  const chosenShape = handShapes[Math.floor(Math.random() * handShapes.length)];
  return chosenShape;
}

const thisBeatsThat = (playerChoice, botChoice) => {
  console.log(`Player: ${playerChoice} vs Bot: ${botChoice}`)
  const players = ['Player', 'Bot'];

  if (playerChoice === botChoice) {
    console.log(`draw`);
    return 'No one ';
  } else if (playerChoice === 'paper' && botChoice === 'rock') {
    console.log(`${playerChoice} wins`);
    return players[0];
  } else if (playerChoice === 'rock' && botChoice === 'scissors') {
    console.log(`${playerChoice} wins`);
    return players[0];
  } else if (playerChoice === 'scissors' && botChoice === 'paper') {
    console.log(`${playerChoice} wins`);
    return players[0];
  } else {
    console.log(`${botChoice} wins`);
    return players[1];
  }
}

function onload () {
  playerChoiceBtn.forEach(btn => {
    document.getElementById(btn.id)
      .addEventListener('click', function () {
        let botsChoice = randomBotChoice().toLowerCase();;
        let gameResult = thisBeatsThat(btn.value, botsChoice);

        setBotChoiceHTML(botsChoice);
        setMessage('.js-game-results', gameResult + ' wins!');
      });
  });
}
