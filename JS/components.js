hue = 0;
function Bomb(width, height, color, x, y, char, velocity) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.vx = 16 + velocity;
  this.char = char;
  this.vy = 25 + velocity / 20;
  this.update = function() {
    hue = shiftHue(hue);
    var color = "hsl(" + hue + ",100%,50%)";
    ctx.fillStyle = "white";
    ctx.fillStyle = color;
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
    ctx.font = "50px Play";
    ctx.fillText(this.char, this.x, this.y, this.width, this.height);
  };

  this.newPos = function() {
    this.x -= this.vx;
    this.y += this.vy;
    //Gravity----------------
    this.vy += 1.5;

    //Bottom Boundary Bounce---------------
    if (this.y > 450) {
      this.vy *= -0.6;
      this.y = 450;
      // this.vx *= 1;
    }
  };
}

function stop() {
  end = new sound(ends[Math.floor(Math.random() * ends.length)]);
  end.sound.volume=0.9;
  end.play();
  marathonMode = false;
  isGameStarted = false;
  clearInterval(interval);
  outro();
}

function shiftHue(frames) {
  return (1.01 * frames + 1) % 360;
}

