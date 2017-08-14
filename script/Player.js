class Player {
<<<<<<< HEAD
  constructor(currentGame) {
    this.name = 'you';
    this.sequenceLength = 2;
    this.lives = 2;
    this.currentSelection = [];
    this.gamePlay = new GamePlay(this,currentGame);
  }
=======
	constructor(currentGame) {
		this.name = 'you';
		this.sequenceLength = 2;
		this.lives = 2;
		this.currentSelection = [];
		this.gamePlay = new GamePlay(this,currentGame);
	}
>>>>>>> ee4c8d51d77b7699c61188754a6d77104e5912f3
}



/**

TODO:
make it friendly to different screen sizes
consider adding multiplayer
ask player for name

Code Logic:
sets an initial value for the number of flashes.
each turn this increases
and more of the color sequence is displayed,

thus increasing the memorization difficulty.

the actual gameplay happens here until it's game over


*/
