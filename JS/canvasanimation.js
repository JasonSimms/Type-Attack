console.log("strings loaded");
// Here are input strings for gameplay various modes
// Every letter at Random
word = "abcdefghijklmnopqrstuvwxyz";
var strAlph = word.split("").sort(function(a, b) {
  return 0.5 - Math.random();
});
// Debug mode
var strDebug = ["b", "c", "d", "e"];
// Fast mode
//   See onClick
// Marathon Mode
//    var marathon mode removes the shift function making 
//    the string unending.
// Hell Mode
//   adds boost



function gamePlay() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.onkeydown = function(e) {
    if (e.key === myObstacles[0].char) {
      myObstacles.shift();
      score++;
      hit.play();
    }
  };
  //BACKGROUND IMAGE DRAWING AND MOVING NOT NECESSARY WITH CURRENT GAME MODEL;
  //backgroundImage.draw();
  //backgroundImage.move();

  //GENERATE ATTACKERS
  if (frames > 1 && frames % 30 === 0 && str.length > 0) {
    pop.play();
    nextAttack = str[0];
    myObstacles.push(
      new Component(
        30,
        30,
        "white",
        canvas.width - 100,
        300,
        5 + boost,
        nextAttack
      ) 
    );
    if (!marathonMode) {
      str.shift();
    } else {
      console.log("sorted");
      str = str.sort(function(a, b) {
        return 0.5 - Math.random();
      })
    }
  }
  for (var i in myObstacles) {
    myObstacles[i].newPos();
    myObstacles[i].update();
  }

  // WIN SCENARIO based on empty obstacles and string
  if (myObstacles.length === 0 && str.length === 0) {
    stop();
    //Lose scenario based on position x
  } else if (myObstacles[0].x <= 200) {
    stop();
  }
}

function gameInfo() {}
