function gamePlay(speed, frequency, enemies) {
  const standardAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  !enemies ? enemies = standardAlphabet : null;

  frames == 0 ? console.log('GamePLay!!', enemies, speed, frequency) : null
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.onkeydown = function (e) {
    if (e.key === myObstacles[0].char.charCodeAt(0) || e.key === myObstacles[0].char) {
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


  // MARATHON MODE starts slower than fast but increases spawning speed with every 20pts.
  if (marathonMode) { frequency = spawnFrquencyAdjust() };

  //GENERATE ATTACKERS ----------------------------------
  if (frames > 20 && frames % (20 - frequency) === 0) { //20 frame delay before starting
    pop.play();
    nextAttack = enemies[Math.floor(Math.random() * enemies.length)];
    myObstacles.push(
      new Bomb(30, 30, "white", 900, Math.floor(Math.random() * 400), nextAttack, speed)
    );
  }
  enemyDraw(frequency);
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


function spawnFrquencyAdjust() {
  var step = 20;
  var boostIncrement = Math.floor(score / step) + 4;
  return Math.min(boostIncrement, 15); // Ensure spawnFrequency doesn't exceed 15
}