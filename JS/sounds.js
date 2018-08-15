// Set default volume

// SOUNDS
hit = new sound("sounds/lazer.mp3");
start = new sound("sounds/laser2.mp3")
end = new sound("sounds/gameover.mp3");
pop = new sound("sounds/pop.mp3");


function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.preload = "auto";
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
//   document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.pause();
    this.sound.currentTime = 0;
    this.sound.play();
  };
//   this.stop = function() {
//     this.sound.pause();
//   };
}
