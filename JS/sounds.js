// SOUNDS
introMusic = new sound("sounds/FuturamaStartTheme.mp3")
hit = new sound("sounds/lazer.mp3");
var starts = ["sounds/Bring it on 2.mp3",
"sounds/This place has class.mp3",
// "sounds/Rumbling.mp3",
"sounds/8d82b5_Futurama_Bender_Fun_On_A_Bun_Sound_Effect.mp3"]
pop = new sound("sounds/pop.mp3");
var ends = [
  "sounds/8d82b5_Futurama_Bender_Show_Over_Sound_Effect.mp3",
  "sounds/Im tired.mp3",
  // "sounds/Shiny metal ass.mp3"
];


// Cheers are randomly generated on event in Canvas Animation
var cheers = [
  "sounds/8d82b5_Futurama_Bender_In_Your_Face_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_Got_It_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_Dream_On_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_No_Thanks_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_Oh_My_God_Sound_Effect.mp3",
  "sounds/8d82b5_Futurama_Bender_Enjoying_It_Sound_Effect.mp3"];
// Set volume balance
introMusic.sound.volume=0.15;
hit.sound.volume=0.25;
// start.sound.volume=0.9;
// end.sound.volume=1;
pop.sound.volume=0.5;
// cheer.sound.volume=0.8;


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
  this.play2 = function() {
    this.sound.play();
  };
}
