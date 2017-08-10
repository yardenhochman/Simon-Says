function Player(name){
	this.name = name;
	this.sequenceLength = 5;	//sets an initial value for the number of flashes. each turn this increases
	  							//and more of the color sequence is displayed,
	  							//thus increasing the memorization difficulty.
	this.lives = 2;
	this.currentSelection = [];
}
