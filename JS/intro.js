console.log("intro components loaded");
var xInit = 120;
var yInit = 300;
var ySpace = 35;

function intro() {
  introMusic.play()
  ctx.font = "20px Russo One";
  ctx.fillStyle = "rgb(204, 6, 6)";
  // IMAGE OF SHIP to be animated;
  
  // img = new Image();
  // img.onload = function() {
    //   ctx.drawImage(img, 300, 325);
    // };
    // img.src = 'img/intro.jpg';
    
    // ctx.fillRect(120,70,600,300);
    // ctx.fillStyle('Grey');
    img2 = new Image();
    img2.src = '/img/futurama-spot-light.jpg';
    img2.onload = function() {
      ctx.drawImage(img2, 0,0,900,500);
      };
    setTimeout(infoDisplay,100)
      // ctx.clip();
    }
    
    function infoDisplay(){
      ctx.fillText("Modes:", xInit, yInit + ySpace*-1)
      ctx.fillText("Alpha - Warmup", xInit, yInit + ySpace)
      ctx.fillText("Fast - Practice", xInit, yInit + ySpace *2)
      ctx.fillText("Marathon - Longer you play the faster it is", xInit, yInit + ySpace*3)
      ctx.fillText("Godly - For Professionals", xInit, yInit + ySpace*4)
      ctx.fillText("Nerd - Exotic Characters", xInit, yInit + ySpace*5)
    }  
      