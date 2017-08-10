function GamePlay(){ //flash , player clicks
	/*this.continuation = function(){
		while (this.player.currentSelection-1<this.colorSequence.sizeOfSequence){
			this.flash();
			this.playerSelects();
			this.compare();
      this.player.sequenceLength++;
		}
	}*/
	this.playerSelects = function(){
		//code listening for player clicks. the function will store the player selection in
		//game.player.currentSelection array
		//once this array is the same length as game.player.sequenceLength the function stops
	}
	this.flash = function(){
			//code manipulating element to display flashes according to the this.player.sequenceLength
	}
	this.match = function(){
		//runs after the playerSelection is done, checks if the arrays match
    //returns true if match, else false. game will use this method as a condition for a loop
    //add condition for game to reset if player gets 50 consecutive guesses
    return false;
		};

}

