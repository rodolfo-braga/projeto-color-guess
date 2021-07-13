const gameContainer = document.querySelector('#game-container');

// Função que gera uma cor aleatória
function generateRandomColor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

// Cria o texto com o código RGB a ser adivinhado
let rgbColor = document.createElement('p');
rgbColor.id = 'rgb-color';
rgbColor.innerHTML = generateRandomColor();
gameContainer.appendChild(rgbColor);

// Cria as opções de cores a serem adivinhadas
const colorsContainer = document.createElement('div');
colorsContainer.id = 'colors-container';
gameContainer.appendChild(colorsContainer);

const numberOfColors = 6;

for (let index = 0; index < numberOfColors; index += 1) {
  const colors = document.createElement('div');
  colors.className = 'ball';
  colorsContainer.appendChild(colors);
  colors.style.backgroundColor = `rgb${generateRandomColor()}`;
}
