console.log("intro components loaded");



function intro() {
  ctx.font = "20px Russo One";
  ctx.fillStyle = "red";
  // IMAGE OF SHIP to be animated;
  img = new Image();
  imgScale = 640/480;
  img.onload = function() {
    ctx.drawImage(img, -50, 50,150,400);
  };
  img.src = '/img/ship1.png';

  ctx.fillText("Alpha - Do you know the Alphabet? it's like that", 120, 100)
  ctx.fillText("Fast - Are you fast enough?", 120, 150)
  ctx.fillText("Marathon - Assault does not end. Get that high score!", 120, 200)
  ctx.fillText("Hell - As hard as it gets", 120, 250)
  ctx.fillText("Debug - For lazy people", 120, 300)
}
