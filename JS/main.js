// A Typing Game by Jason Simms
// Inception August 12 2018
// Utilizes Canvas Animations
//  when y = canvas height GAME OVER.
$(window).resize(function () {
  const isLargeScreen = $(window).innerWidth() >= 1200;
  $("#controls").toggleClass("btn-group-vertical", isLargeScreen);
  $("#controls").toggleClass("btn-group", !isLargeScreen);
});

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let isGameStarted = false;
let myObstacles = [];
let frames = 0;
let score = 0;
let topScore = 0;
let marathonMode = false;
const introMusic = new sound("sounds/FuturamaStartTheme.mp3");

intro();

function startGame(speed, spawnFrequency, enemies) {
  console.log('start game started with : speed:', speed, "spawn freq: ", spawnFrequency)
  introMusic.stop();
  const randomStartSound = starts[Math.floor(Math.random() * starts.length)];
  start = new sound(randomStartSound);
  start.play();
  myObstacles = [];
  frames = 0;
  score = 0;
  ctx.clearRect(100, 0, canvas.width, canvas.height);
  interval = setInterval(() => gamePlay(speed, spawnFrequency, enemies), 50);
}

function handleDifficultyClick(boost, spawnFrequency, customCharacterArray) {
  if (!isGameStarted) {
    startGame(boost, spawnFrequency, customCharacterArray);
    isGameStarted = true;
  }
}


document.getElementById("easy").onclick = () => handleDifficultyClick(-12, -20, null);
document.getElementById("fast").onclick = () => handleDifficultyClick(4, 8, null);
document.getElementById("marathon").onclick = () => {
  marathonMode = true;
  handleDifficultyClick(3, 3, null)
};
document.getElementById("godly").onclick = () => handleDifficultyClick(10, 13, null);
document.getElementById("nerd").onclick = () => handleDifficultyClick(3, 3, ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "|", "?", "_", ";", ":", "[", "]", "{", "}", "'", "/", ",", ".", "<", ">"]);
document.getElementById("reset").onclick = stop;
document.getElementById("custom").onclick = () => {
  const customGameSettings = getFormValues();
  // handleDifficultyClick(4, 8, null)
  const customVelocity = parseFloat(customGameSettings['userVelocity']);
  const customFrequency = parseFloat(customGameSettings['userFrequency']);
  const customCharacters =  customGameSettings['userCharacters']
  handleDifficultyClick(customVelocity, customFrequency, customCharacters);
};

//AUTO START THE GAME ON SPACE BAR FOR THE KIDS
document.body.onkeyup = function (e) {
  if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
    if (!isGameStarted) {
      const customGameSettings = getFormValues();
      const customVelocity = parseFloat(customGameSettings['userVelocity']);
      const customFrequency = parseFloat(customGameSettings['userFrequency']);
      const customCharacters =  customGameSettings['userCharacters']
      handleDifficultyClick(customVelocity, customFrequency, customCharacters);
    }
  }
};


function getFormValues() {
  function getUniqueLowercaseLetters(inputString) {
    if(!inputString) return null;
    const cleanedString = inputString.replace(/\s/g, '').toLowerCase();
    const uniqueLettersSet = new Set(cleanedString);
    return [...uniqueLettersSet];
  }

  const userVelocity = document.getElementById('velocityInput').value;
  const userFrequency = document.getElementById('frequencyInput').value;
  const userString = document.getElementById('textInput').value;

  const userCharacters = getUniqueLowercaseLetters(userString); //remove spaces and duplicates and make lower case

  return {
    userVelocity: userVelocity,
    userFrequency: userFrequency,
    userCharacters: userCharacters
  };
}