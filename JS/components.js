console.log("components loaded");
hue = 0;
function Component(width, height, color, x, y, vx, char) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.char = char;
  this.vy = 15 + boost;
  // ctx = myGameArea.context;
  this.update = function() {
    hue = shiftHue(hue);
    var color = "hsl(" + hue + ",100%,50%)";
    ctx.fillStyle = "white";
    ctx.fillStyle = color;
    // ctx.fillRect(this.x - 3, this.y - 40, this.width+10, this.height+20);
    ctx.beginPath();
    ctx.arc(
      this.x + this.width / 2,
      this.y - this.width / 2,
      this.width + 10,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = "50px Russo One";
    ctx.fillText(this.char, this.x, this.y, this.width, this.height);
  };

  this.newPos = function() {
    this.x -= this.vx;
    this.y += this.vy;
    //Gravity
    this.vy += 0.99;

    //Bottom Boundary Bounce
    if (this.y > 450) {
      this.vy *= -0.70;
      this.vx *= 0.75;
    }
  };
}

function stop() {
  end.play();
  marathonMode = false;
  boost = 0;
  spawnBoost = 0;
  isGameStarted = false;
  clearInterval(interval);
  ctx.font = "40px Russo One";
  ctx.fillStyle = "#C82333";
  if (myObstacles.length === 0) {
    ctx.fillText("Shiny! Try a harder mode", 20, 50);

  } else {
    //ctx.drawImage(img,450,0,225,225,580,45,80,75)
    ctx.fillText("Gameover!", 20, 50);
  }
  ctx.fillText("Score: " + score, 700, 50);
  if (score > topScore) {
    topScore = score;
  }
  $(".top-score").html("Your Top Score: " + topScore);
}

function shiftHue(frames) {
  return (1.01*frames + 1) % 360;
}
