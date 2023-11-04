// Here are input strings for gameplay various modes
strAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
old_alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+","|","?","_",";",":","[", "]", "{", "}", "'", "/", ",", ".", "<", ">"]
alphabet = ["A","U","D","R","E","Y","B","N","T"]
// Debug mode
var strDebug = ["b", "c", "d", "e"];

function gamePlay() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.onkeydown = function(e) {
    if (e.which === myObstacles[0].char.charCodeAt(0) || e.key === myObstacles[0].char)  {
      myObstacles.shift();
      score++;
      hit.play();
      if(score%5 === 0){
        cheer = new sound(cheers[Math.floor(Math.random()*cheers.length)]);
        cheer.sound.volume=1;
        cheer.play();}
    }
  };


// MARATHON MODE EDITS --------------------------
if(marathonMode){spawnBoostAdj()};


//GENERATE ATTACKERS ----------------------------------
  if (frames > 20 && frames % (20-spawnBoost) === 0 && str.length > 0) {
    pop.play();
    nextAttack = str[Math.floor(Math.random()*str.length)];
    myObstacles.push(
      new Bomb(30,30,"white", 900,Math.floor(Math.random()*400),nextAttack) 
    );
  }
  enemyDraw();
  benderDraw();
  drawScoreboard();
  for (var i in myObstacles) {
    myObstacles[i].newPos();
    myObstacles[i].update();
  }
// WIN SCENARIO based on empty obstacles and string
  if (myObstacles.length === 0 && str.length === 0) {
    stop();
    //Lose scenario based on position x
  } else if (myObstacles[0].x <= 75) {
    stop();
  }
}
