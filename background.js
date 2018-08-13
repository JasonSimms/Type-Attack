var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");


var img = new Image();
img.src = "Lunar-Landscape-Apollo-16_a91e5be3-f2ce-4917-ac99-e23fcbcf4071_1024x1024.jpg";

var backgroundImage = {
  img: img,
  z: 0,
  speed: -1,

  move: function() {
    this.z += this.speed;
    this.z %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.z, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.z + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.z - this.img.width, 0);
    }
  }
};

