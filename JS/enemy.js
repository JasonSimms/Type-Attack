var z = 0;
var y = 0;
var run = 40;
var vz = 3;
var vy = 1;
var enemyRight = false;
var enemyBottom = false;
function enemyDraw() {
    if (z >= run){enemyRight=true};
    if (z <= 0){enemyRight=false};
    if(enemyRight){
        z-= vz;
    }else{
        z+= vz;
    };
    if (y >= run/2){enemyBottom = true};
    if (y <= 0){enemyBottom = false};
    if(enemyBottom){
        y-= vy;
    }else{
        y+= vy;
    }
    ctx.save();
    ctx.translate(z+510,y);
    img = new Image();
    img.src = '/img/ship3.png'
    ctx.drawImage(img, 0, 0);
  
    img = new Image();
    img.src = '/img/trumpsheet1.png';
    if (frames % (20 - spawnBoost) < 4 && strAlph.length > 0) {
        ctx.drawImage(img,225,0,225,225,80,50,60,60)
    } else {
        ctx.drawImage(img,0,0,225,225,80,50,60,60)
    }
    ctx.restore();
}