console.log("intro components loaded");



function intro(width, height, color, x, y, vx, char) {
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
    // hue = shiftHue(hue);
    //var color = "hsl("+hue+",100%,50%)"
    //console.log(color)
    // ctx.clearRect(0,0,480,270);
    // ctx.fillStyle = color;
    ctx.fillRect(this.x - 3, this.y - 40, this.width+10, this.height+20);
    // ctx.arc(this.x,this.y,this.width+10,0,2*Math.PI);
    // ctx.fill();
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
    if (this.y >= 450 || this.x < 800){this.vy*= -0.95;
    this.vx*=0.8};

  };
} 
    
    //     ctx.font = "50px Russo One";
// var hue = 0;
    // function shiftHue(frames) {
    //   return (frames+1)%360
    // }
    //     if(!isGameStarted){
//     hue = shiftHue(hue);
//     var color = "hsl("+hue+",100%,50%)"
//     //console.log(color)
//     // ctx.clearRect(0,0,480,270);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = color;
//     // ctx.arc(150,100,100,0,2*Math.PI);
//     ctx.fillText("Type Attack !!!", 100, 100);
//     // ctx.fill();
//     intro = setInterval(intro, 50);
//   }else{
//     // hue = shiftHue(hue);
//     // ctx.fillStyle = color;
//     // ctx.fillText(('Score: '+score), 50, 100);
//     // ctx.clearRect(0,0,480,270);
//   }
// }

// logo = function intro() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   interval = setInterval(standby, 50);
//   var logo = new Logo;
// };

// function standby() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   logo.newPos();
//   logo.update();
// }
// 
// function Logo() {
//   this.width = width;
//   this.height = height;
//   this.x = x;
//   this.y = y;
//   this.vx = vx;
//   this.char = char;
//   this.vy = 15;
//   this.update = function() {
    // ctx.fillStyle = "white";
    // ctx.fillRect(200, 200, 100, 100);
    // ctx.fillStyle = "black";
    // ctx.font = "50px Georgia";
    // ctx.fillText("Type Attack", t200, 200, 100, 100);
//   };
// }
