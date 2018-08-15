boffSet = 1;
// var y = 0;
// var run = 40;
// var vz = 3;
// var vy = 1;
// var enemyRight = false;
// var enemyBottom = false;
function benderDraw() {
    // if (z >= run){enemyRight=true};
    // if (z <= 0){enemyRight=false};
    // if(enemyRight){
        // z-= vz;
    // }else{
        // z+= vz;
    // };
    // if (y >= run/2){enemyBottom = true};
    // if (y <= 0){enemyBottom = false};
    // if(enemyBottom){
        // y-= vy;
    // }else{
        // y+= vy;
    // }
    // ctx.save();
    // ctx.translate(z+510,y);
    // img = new Image();
    // img.src = 'img/ship3.png'
    // ctx.drawImage(img, 0, 0);
//   console.log((frames%1400)%7);
    img = new Image();
    img.src = 'img/Bender/benderSprite1.png';
    ctx.drawImage(img,(frames%11200)%7*300,0,300,250,0,300,240,200)
    
  
    // ctx.restore();
}