// A Typing Game by Jason Simms
// Inception August 12 2018
// Utilizes Canvas Animations
// GAME Should take a string input, if the player presses the correct key
// the string is shifted. objects will continue to fall until key is pressed.
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

document.body.onkeyup = function (e) {
  if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
    if (!isGameStarted) {
      handleDifficultyClick(-14, 20);
    }
  }
};