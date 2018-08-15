console.log("Bombs loaded");
hue = 0;
function Bomb(width, height, color, x, y, char) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.vx = (16 + boost);
  this.char = char;
  this.vy = 25+ (boost/20);
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
    this.vy += 1.5;

    //Bottom Boundary Bounce
    if (this.y > 450) {
      this.vy *= -0.6;
      this.y= 450
      // this.vx *= 1;
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


function spawnBoostAdj(){
  var step = 30;
if(score ==step*1){
  spawnBoost=5
console.log(spawnBoost)}
if(score ===step*2){
  spawnBoost=6
console.log(spawnBoost)}
if(score ===step*3){
  spawnBoost=7
console.log(spawnBoost)}
if(score === step*4){
  spawnBoost=8
console.log(spawnBoost)}
if(score === step*5){
  spawnBoost=9
console.log(spawnBoost)}
if(score === step*6){
  spawnBoost=10
console.log(spawnBoost)}
if(score === step*7){
  spawnBoost=11
console.log(spawnBoost)}
if(score === step*8){
  spawnBoost=12
console.log(spawnBoost)}
if(score === step*9){
  spawnBoost=13
console.log(spawnBoost)}
if(score === step*10){
  spawnBoost=14
console.log(spawnBoost)}
if(score === step*11){
  spawnBoost=15
console.log(spawnBoost)}
if(score === step*12){
  spawnBoost=16
console.log(spawnBoost)}
}
