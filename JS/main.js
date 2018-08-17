// A Typing Game by Jason Simms
// Inception August 12 2018
// Utilizes Canvas Animations
// GAME Should take a string input, if the player presses the correct key
// the string is shifted. objects will continue to fall until key is pressed.
//  when y = canvas height GAME OVER.

$(window).resize(function() {
  if ($(window).innerWidth() >= 1200) {
    $("#controls").removeClass("btn-group");
    $("#controls").addClass("btn-group-vertical");
  } else if ($(window).innerWidth() < 1200) {
    $("#controls").removeClass("btn-group-vertical");
    $("#controls").addClass("btn-group");
  }
});

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var strAttack = [];
var attacker;
var isGameStarted = false;
var str = [];
var myObstacles = [];
var frames = 0;
var score = 0;
var topScore = 0;
var boost = 0;
var spawnBoost = 0;
var marathonMode = false;

window.onload = function() {
  intro();
  if ($(window).width() > 1200) {
    $("#controls").toggleClass("btn-group btn-group-vertical");
  }
  document.getElementById("easy").onclick = function() {
    if (!isGameStarted) {
      boost = -7;
      spawnBoost = -20;
      str = alphabet;
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("fast").onclick = function() {
    if (!isGameStarted) {
      str = alphabet;
      boost = 4;
      spawnBoost = 8;
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("marathon").onclick = function() {
    marathonMode = true;
    if (!isGameStarted) {
      str = alphabet;
      boost = 3;
      spawnBoost = 3;
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("godly").onclick = function() {
    if (!isGameStarted) {
      str = alphabet;
      boost = 10;
      //spawn boost < 19;
      spawnBoost = 13;
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("nerd").onclick = function() {
    if (!isGameStarted) {
      str = chars;
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("reset").onclick = function() {
    stop();
  };

// START GAME FUNCTION----------------
  function startGame() {
    //INITIAL STATE SETTINGS
    introMusic.stop();
    start = new sound(starts[Math.floor(Math.random() * starts.length)]);
    // start.sound.volume=0.9;
    start.play();
    myObstacles = [];
    frames = 0;
    score = 0;
    ctx.clearRect(100, 0, canvas.width, canvas.height);
    interval = setInterval(gamePlay, 50);
  }
//END OF ON LOAD--------------
};
