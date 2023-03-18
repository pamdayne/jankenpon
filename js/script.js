
const radios = document.querySelectorAll('button[name="player-choice"]');
let playersChoice = '';
let botsChoice = ''

radios.forEach(radio => {
  document.getElementById(radio.id)
    .addEventListener('click', function () {
      botsChoice = randomBotChoice().toLowerCase();
      setMessage('.js-bot-field', botsChoice);
      setMessage('.js-game-results', thisBeatsThat(radio.value, botsChoice) + ' wins!');
    });
});

const setMessage = (classname, val) => {
  const elem = document.querySelector(classname);

  if (elem.hasChildNodes()) {
    elem.removeChild(elem.childNodes[0]);
  }

  const node = document.createElement('p');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  elem.appendChild(node);
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
