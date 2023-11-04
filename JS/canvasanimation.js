// // Here are input strings for gameplay various modes
// old_alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+","|","?","_",";",":","[", "]", "{", "}", "'", "/", ",", ".", "<", ">"]
// alphabet = ["A","U","D","R","E","Y","B","N","T"]
// // Debug mode
// var strDebug = ["b", "c", "d", "e"];

function gamePlay(speed, spawnBoost, enemies) {
  const standardAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  !enemies ? enemies = standardAlphabet : null;

  frames == 0 ? console.log('GamePLay!!', enemies, speed, spawnBoost) : null
  // console.log('GamePLay!!', enemies, speed, spawnBoost)
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.onkeydown = function (e) {
    if (e.which === myObstacles[0].char.charCodeAt(0) || e.key === myObstacles[0].char) {
      myObstacles.shift();
      score++;
      hit.play();
      if (score % 5 === 0) {
        cheer = new sound(cheers[Math.floor(Math.random() * cheers.length)]);
        cheer.sound.volume = 1;
        cheer.play();
      }
    }
  };


  // MARATHON MODE EDITS --------------------------
  if (marathonMode) { spawnBoostAdj() };

  //GENERATE ATTACKERS ----------------------------------
  if (frames > 20 && frames % (20 - spawnBoost) === 0) {
    pop.play();
    nextAttack = enemies[Math.floor(Math.random() * enemies.length)];
    myObstacles.push(
      new Bomb(30, 30, "white", 900, Math.floor(Math.random() * 400), nextAttack, speed)
    );
  }
  enemyDraw(spawnBoost);
  benderDraw();
  drawScoreboard();
  for (var i in myObstacles) {
    myObstacles[i].newPos();
    myObstacles[i].update();
  }
  if (myObstacles && myObstacles[0] && myObstacles[0].x <= 75) {
    stop();
  }
}
