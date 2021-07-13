const gameContainer = document.querySelector('#game-container');

// Função que gera uma cor aleatória
function generateRandomColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);

  return `(${r}, ${g}, ${b})`;
}

// Cria o texto com o código RGB a ser adivinhado
const rgbColor = document.createElement('p');
rgbColor.id = 'rgb-color';
gameContainer.appendChild(rgbColor);

// Cria as opções de cores a serem adivinhadas
const colorsContainer = document.createElement('div');
colorsContainer.id = 'colors-container';
gameContainer.appendChild(colorsContainer);

// Cria o texto que mostra a resposta
const answer = document.createElement('p');
answer.id = 'answer';
answer.innerHTML = 'Escolha uma cor';
gameContainer.appendChild(answer);

// Função que verifica se a resposta está correta
function checkAnswer() {
  const colorChosen = this.style.backgroundColor;
  if (colorChosen === `rgb${rgbColor.innerHTML}`) {
    answer.innerHTML = 'Acertou!';
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

// Função que gera um novo jogo
function generateNewGame() {
  rgbColor.innerHTML = generateRandomColor();
  const numberOfColors = 6;

  // Número aleatório usado para definir a respota correta
  const drawNumber = Math.floor(Math.random() * 6) + 1;

  for (let index = 0; index < numberOfColors; index += 1) {
    const colors = document.createElement('div');
    colors.className = 'ball';
    colorsContainer.appendChild(colors);
    if (index === drawNumber) {
      colors.style.backgroundColor = `rgb${rgbColor.innerHTML}`;
    } else {
      colors.style.backgroundColor = `rgb${generateRandomColor()}`;
    }
    colors.addEventListener('click', checkAnswer);
  }
}

generateNewGame();
