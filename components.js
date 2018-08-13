console.log('components loaded')
function Component(width, height, color, x, y, speed) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = speed;
    // ctx = myGameArea.context;
    this.update = function(){
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }


    this.newPos = function() {
        this.x -= this.speed;
        // this.y += this.speedY; 
        // console.log('newPOs',this.x)
}
}