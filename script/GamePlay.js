function GamePlay(currentGame){ //flash , player clicks

	this.playerSelects = function(){
		//code listening for player clicks. the function will store the player selection in
		//game.player.currentSelection array
		//once this array is the same length as game.player.sequenceLength the function stops
    $("#red")
	}
	this.flash = function(){
			//code manipulating element to display flashes according to the this.player.sequenceLength
      var count = 0;
      for (let i = 0 ; i < currentGame.player.sequenceLength ; i++){
        let lightToFlash='#'+currentGame.colorSequence.theSequence[i];
        let currentButton = $(lightToFlash);
        setTimeout(function(){
          currentButton.addClass('flash');
          setTimeout(function(){
          currentButton.removeClass('flash');
        } , 250); //dark delay


        } , count*400); //lighting delay
        count++;

      }

	}
	this.match = function(){
		//runs after the playerSelection is done, checks if the arrays match
    //returns true if match, else false. game will use this method as a condition for a loop
    //add condition for game to reset if player gets 50 consecutive guesses
    return false;
		};

}

