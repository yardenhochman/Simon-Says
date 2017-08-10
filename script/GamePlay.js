function GamePlay(currentGame){ //flash , player clicks

  this.verifyMatch = function(){
    return true;
  }

	this.playerSelects = function(){
		//code listening for player clicks. the function will store the player selection in
		//game.player.currentSelection array
		//once this array is the same length as game.player.sequenceLength the function stops
    //while (currentGame.player.currentSelection.length<currentGame.player.sequenceLength){


      let choicesNumber = currentGame.player.currentSelection.length;
      let currentLevel = currentGame.player.sequenceLength;
      let currentArray = currentGame.colorSequence.theSequence.slice(0,currentLevel);

        $("button").click(function(){
          let color = this.id;
          currentGame.player.currentSelection.push(color);
          var playerChose=currentGame.player.currentSelection;
          console.log(currentGame.player.currentSelection);
          choicesNumber++;
          if (choicesNumber==currentLevel){
            let gameContinues = compareArrays(playerChose,currentArray);
            if (gameContinues){
              debugger
              return;
            }
            console.log("you lie!");
            }
          });
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
    debugger
    return true;
		};

}

