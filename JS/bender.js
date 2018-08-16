function benderDraw() {
    img = new Image();
    img.src = 'img/Bender/benderSprite1.png';
    ctx.drawImage(img,(((frames%2401)%49)%7)*300,0,300,250,0,300,240,200)
    // ctx.restore();
}