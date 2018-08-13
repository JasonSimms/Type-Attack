console.log("components loaded");

function Component(width, height, color, x, y, speed, char) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.char = char;
  // ctx = myGameArea.context;
  this.update = function() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x - 3, this.y - 27, this.width, this.height);
    ctx.fillStyle = "black";
    ctx.font = "50px Georgia";
    ctx.fillText(this.char, this.x, this.y, this.width, this.height);
  };

  this.newPos = function() {
    this.x -= this.speed;
    // this.y += this.speedY;
    // console.log('newPOs',this.x)
  };
}

function stop() {
    boost = 0;
  console.log("game terminated");
  isGameStarted = false;
  clearInterval(interval);
  ctx.font = "40px bold";
  ctx.fillStyle = "red";
  if (myObstacles.length === 0) {
    ctx.fillText("Shiny!", 400, 400);
  } else {
    ctx.fillText("Gameover! There is no try", 400, 400);
}
ctx.fillText("Score: " + score, 400, 100);
  console.log("weiter");
  if (score > topScore) {
    topScore = score;
  }
  $('.top-score').html('Your Top Score: '+topScore)
  console.log('topScore:',topScore)
}
