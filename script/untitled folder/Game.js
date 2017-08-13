//Todo: add a starting function. all lights dance around at the start of the game
//start button. welcome screen with maybe a countdown. score screen. reset button

var flashing = true;

function Game() {
  this.colorSequence = new ColorSequence();
                              //generates a sequence and builds ui elements
  this.player = new Player(this); //in the future will add a method to take player name when
                              //multiplayeris enabled
                              //will create announcements based on results
  this.play = function(){ //initiates the game.
    this.colorSequence.sequenceGenerator();
    this.player.gamePlay.flash();
    //this.player.gamePlay.playerSelects();
  }
}
