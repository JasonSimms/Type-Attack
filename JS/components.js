console.log("components loaded");

function Component(width, height, color, x, y, vx, char) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.char = char;
  this.vy = 15;
  // ctx = myGameArea.context;
  this.update = function() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x - 3, this.y - 40, this.width+10, this.height+20);
    ctx.fillStyle = "black";
    ctx.font = "50px Georgia";
    ctx.fillText(this.char, this.x, this.y, this.width, this.height);
  };

  this.newPos = function() {
    this.x -= this.vx;
    this.y += this.vy;
    //Gravity
    this.vy += 0.9;

    //Bottom Boundary Bounce
    if (this.y >= 450){this.vy*= -0.95;
    this.vx*=0.8};

  };
}

function stop() {
    boost = 0;
  isGameStarted = false;
  clearInterval(interval);
  ctx.font = "40px bold";
  ctx.fillStyle = "red";
  if (myObstacles.length === 0) {ctx.fillText("Shiny!", 400, 400);} else {ctx.fillText("Gameover! There is no try", 400, 400);}
ctx.fillText("Score: " + score, 400, 100);
  if (score > topScore) {topScore = score;  }
  $('.top-score').html('Your Top Score: '+topScore)
}
