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
// GAME Should take a string input, if the player presses the correct key
// the string is shifted. objects will continue to fall until key is pressed.
//  when y = canvas height GAME OVER.

//key entry should shift string
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    if (!isGameStarted) {
      console.log("GameStarted");
      startGame();
      isGameStarted = true;
    }
  };

  // START GAME FUNCTION
  function startGame() {
//INITIAL STATE SETTINGS
    str = ['a','b','c','d'];
    myObstacles = [];
    frames = 0;
    score = 0;
    console.log('game start')
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // attacker = new Component(30, 30, "green", canvas.width - 200, 50, 0);
    // attacker2 = new Component(50, 30, "blue", canvas.width - 200, 50, 0.7);
    interval = setInterval(updateCanvas, 5);
  }

  // GAME DRAWING -----------------------------------------------------------------
  function updateCanvas() {
    frames++;
    document.onkeydown = function(e) {
      console.log(e.key);
      // console.log(myObstacles[0])
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
    if (frames > 299 && frames % 300 === 0 && str.length > 0) {
      nextAttack = str[0];
      myObstacles.push(
        new Component(30, 30, "white", canvas.width - 100, 300, 2, nextAttack)
      );
      str.shift();
    }
    for (var i in myObstacles) {
      myObstacles[i].newPos();
      myObstacles[i].update();
    }
    // WIN SCENARIO based on empty obstacles and string
    if (myObstacles.length === 0 && str.length === 0) {
      console.log("Shiny");
      stop();

      //Lose scenario based on position x
   } else if
       (myObstacles[0].x === 200) {
       console.log("test")
      stop();
      console.log('loss')
   }
  }

  //END OF ON LOAD
};
