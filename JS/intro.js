console.log("intro components loaded");
var xInit = 120;
var yInit = 300;
var ySpace = 35;

function intro() {
  introMusic.sound.volume = 0.12;
  introMusic.play();
  ctx.font = "20px Russo One";
  ctx.fillStyle = "rgb(204, 6, 6)";
  img2 = new Image();
  img2.src = "img/backdrops/gameinfo1.jpg";
  img2.onload = function() {
    ctx.drawImage(img2, 0, 0, 900, 500);
  };
}

//function infoDisplay(){
//  ctx.fillText("Modes:", xInit, yInit + ySpace*-1)
//  ctx.fillText("Alpha - Warmup", xInit, yInit + ySpace)
//  ctx.fillText("Fast - Practice", xInit, yInit + ySpace *2)
//  ctx.fillText("Marathon - Longer you play the faster it is", xInit, yInit + ySpace*3)
//  ctx.fillText("Godly - For Professionals", xInit, yInit + ySpace*4)
//  ctx.fillText("Nerd - Exotic Characters", xInit, yInit + ySpace*5)
//}

function outro() {
  setTimeout(introMusic.play(),3000);

  var rectX = 200;
  var rectY = 50;
  var rectWidth = 500;
  var rectHeight = 400;
  var cornerRadius = 20;
  var textX = rectX + 150;
  var textY = rectY + 75;

  // Set faux rounded corners
  ctx.lineJoin = "round";
  ctx.lineWidth = cornerRadius;
  ctx.lineWidth = 10;
  ctx.strokeStyle = "rgba(219, 84, 97, 0.6)";
  ctx.strokeRect(
    rectX + cornerRadius / 2,
    rectY + cornerRadius / 2,
    rectWidth - cornerRadius,
    rectHeight - cornerRadius
  );
  ctx.fillStyle = "rgba(215,252,212,0.5)";
  ctx.fillRect(rectX + 10, rectY + 10, rectWidth - 20, rectHeight - 20);
  ctx.fillStyle = "rgba(219, 84, 97)";
  ctx.font = "40px Russo One";
  // ctx.fillStyle = "#C82333";
  ctx.fillText("Gameover!", textX, textY);
  ctx.fillText("Score: " + score, textX + 20, textY + 90);
  if (score > topScore) {
    topScore = score;
  }
  localStorage.setItem("topScore", topScore)
  $(".top-score").html("Your Top Score: " + topScore);
}

function drawScoreboard(){
    ctx.font = "24px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Score: " + score, 10, 30);
 
}