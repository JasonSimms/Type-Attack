// SOUNDS
introMusic = new sound("http://www.gotfuturama.com/Multimedia/MP3Sounds/FuturamaStartTheme.mp3")
hit = new sound("sounds/lazer.mp3");
start = new sound("sounds/Bring it on 2.mp3")
end = new sound("sounds/8d82b5_Futurama_Bender_Show_Over_Sound_Effect.mp3");
pop = new sound("sounds/pop.mp3");
var cheers = [
  "sounds/8d82b5_Futurama_Bender_In_Your_Face_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_Got_It_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_Dream_On_Sound_Effect.mp3",
  "sounds/8d82b5_Bender_Evil_Laugh_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_Enjoying_It_Sound_Effect.mp3"];
// Set volume balance
introMusic.sound.volume=0.05;
hit.sound.volume=0.2;
start.sound.volume=0.2;
end.sound.volume=1;
pop.sound.volume=0.6;
cheer.sound.volume=0.6;


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
  this.stop = function() {
    this.sound.pause();
  };
}
