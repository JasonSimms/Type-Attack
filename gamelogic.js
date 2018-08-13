console.log('Gamelogic loaded')
var isGameStarted = false;
var str = [];
// GAME Should take a string input, if the player presses the correct key
// the string is shifted. objects will continue to fall until key is pressed.
//  when y = canvas height GAME OVER.


//key entry should shift string
window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      if (!isGameStarted) {
          console.log('GameStarted')
        startGame();
        isGameStarted = true;
      }
    }

    // START GAME FUNCTION
    function startGame() {
        str = ['a','b','c']
     //   interval = setInterval(updateCanvas,20);
        document.onkeydown = function(e) {
          console.log(e.key)
          if(e.key === str[0])
          str.shift();
          console.log(str)
        };
        };
      }