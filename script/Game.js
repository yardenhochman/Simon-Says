class Game {
  constructor() {
  this.colorSequence = new ColorSequence();
  this.player = new Player(this);
  this.colorSequence.sequenceGenerator();
  this.player.gamePlay.flash();
  }
}

/**


TODO: 

start button. welcome screen with animation. Make animations more fun
reset button
high score list. option to reset list
Try to figure out the logic for multiplayer
remove save of 'this'


Logic:
color sequence - generates the flashing colors order

<<<<<<< HEAD
player - creates a player object so as to allow adding a
         multiplayer feature

generator - the actual function to create a random list
            of colors

flash - the function that flashes the lights.
        This function will call a function that lets
        the player click the buttons. The game proceeds
=======
player - creates a player object so as to allow adding a 
         multiplayer feature

generator - the actual function to create a random list 
            of colors

flash - the function that flashes the lights. 
        This function will call a function that lets 
        the player click the buttons. The game proceeds 
>>>>>>> ee4c8d51d77b7699c61188754a6d77104e5912f3
        by these functions calling each other back and forth.


materials for reference:
function foo() {
  return () => {
    console.log(this);
  };
}
*/
