console.log("Gamelogic loaded");
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
// GAME Should take a string input, if the player presses the correct key
// the string is shifted. objects will continue to fall until key is pressed.
//  when y = canvas height GAME OVER.

//key entry should shift string
window.onload = function() {
  document.getElementById("debug").onclick = function() {
    if (!isGameStarted) {
      str=['d','e','f'];
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("alpha").onclick = function() {
    if (!isGameStarted) {
      str = strAlph
      startGame();
      isGameStarted = true;
    }
  };
  document.getElementById("fast").onclick = function() {
    if (!isGameStarted) {
      str = strAlph
      boost = 20;
      startGame();
      isGameStarted = true;
    }
  };

  // START GAME FUNCTION
  function startGame() {
//INITIAL STATE SETTINGS
    myObstacles = [];
    frames = 0;
    score = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    interval = setInterval(updateCanvas, 50);
  }

  // GAME DRAWING -----------------------------------------------------------------
  function updateCanvas() {
    frames++;
    document.onkeydown = function(e) {
      if (e.key === myObstacles[0].char) {
        myObstacles.shift();
        score++;
      }
    };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();
    //  backgroundImage.move();
    //select next character
    //GENERATE ATTACKERS
    if (frames > 1 && frames % 30 === 0 && str.length > 0) {
      nextAttack = str[0];
      myObstacles.push(
        new Component(30, 30, "white", canvas.width - 100, 300, 5+boost, nextAttack)
      );
      str.shift();
    }
    for (var i in myObstacles) {
      myObstacles[i].newPos();
      myObstacles[i].update();
    }
    // WIN SCENARIO based on empty obstacles and string
    if (myObstacles.length === 0 && str.length === 0) {
      stop();
      //Lose scenario based on position x
   } else if
       (myObstacles[0].x <= 200) {
      stop();
   }
  }

  //END OF ON LOAD
};
