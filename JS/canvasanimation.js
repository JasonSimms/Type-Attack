console.log("strings loaded");
// Here are input strings for gameplay various modes
// Every letter at Random
//word = "abcdefghijklmnopqrstuvwxyz";
strAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", "'", "/", ",", ".", "<", ">"]
//var strAlph = word.split("").sort(function(a, b) {
//  return 0.5 - Math.random();
//});
// Debug mode
var strDebug = ["b", "c", "d", "e"];
// Fast mode
//   See onClick
// Marathon Mode
// Hell Mode
//   adds boost



function gamePlay() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  document.onkeydown = function(e) {
    console.log(e.which);
    if (e.which === myObstacles[0].char.charCodeAt(0) || e.key === myObstacles[0].char)  {
      myObstacles.shift();
      score++;
      hit.play();
    }
  };
  //BACKGROUND IMAGE DRAWING AND MOVING NOT NECESSARY WITH CURRENT GAME MODEL;
  //backgroundImage.draw();
  //backgroundImage.move();

  //GENERATE ATTACKERS
  if (frames > 1 && frames % (20-spawnBoost) === 0 && str.length > 0) {
    pop.play();
    nextAttack = str[Math.floor(Math.random()*str.length)];
    myObstacles.push(
      new Component(30,30,"white", 950,100, (17 + boost),nextAttack) 
    );

  }
  for (var i in myObstacles) {
    myObstacles[i].newPos();
    myObstacles[i].update();
  }
  enemyDraw();
  // WIN SCENARIO based on empty obstacles and string
  if (myObstacles.length === 0 && str.length === 0) {
    stop();
    //Lose scenario based on position x
  } else if (myObstacles[0].x <= 75) {
    stop();
  }
}

function gameInfo() {}
