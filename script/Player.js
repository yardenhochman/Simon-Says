//consider adding multiplayer

function Player(currentGame){
	this.name = 'you';
	this.sequenceLength = 3;	//sets an initial value for the number of flashes. each turn this increases
          	  							//and more of the color sequence is displayed,
          	  							//thus increasing the memorization difficulty.
	this.lives = 2;
	this.currentSelection = [];

  this.gamePlay = new GamePlay(this,currentGame);
                        //the actual gameplay happens here until it's game over
}
