//Todo: priority: add failure
//add speed changes. faster flashes every turn.
//add lives

function GamePlay(currentPlayer,currentGame){ //flash , player clicks

  this.match = true;
  //this.flashing = true; //a way for the game to determine if it's currently flashing
  this.verifyMatch = function(){
    return true;
  }

	this.playerSelects = function(){
		//code listening for player clicks. the function will store the player selection in
		//game.player.currentSelection array
		//once this array is the same length as game.player.sequenceLength the function stops
    //while (currentGame.player.currentSelection.length<currentGame.player.sequenceLength){


/*      if (!(!this.flashing)){
        $("button").addClass("clickable");
      }
      $("button").addClass("clickable");*/
      flashing=false;
      if (!(flashing)){
      $("button").click(function(){
        let choicesNumber = currentPlayer.currentSelection.length;
        let currentLevel = currentPlayer.sequenceLength;
        let currentArray = currentGame.colorSequence.theSequence.slice(0,currentLevel);
          let color = this.id;
          currentPlayer.currentSelection.push(color);
          var playerChose=currentPlayer.currentSelection;
          choicesNumber++;

          console.log(currentPlayer.currentSelection);
          if (choicesNumber===currentLevel){
            let gameContinues = compareArrays(playerChose,currentArray);
            if (gameContinues){ //if was right, increase sequence length and flash
                currentPlayer.currentSelection = [];
                currentPlayer.sequenceLength++;
                flashing=true;
                currentPlayer.gamePlay.flash();
                //currentPlayer.gamePlay.playerSelects();
            }
            else{
              announce(currentPlayer);
            }
          }
        });
    }
  }

	this.flash = function(){
			//code manipulating element to display flashes according to the this.player.sequenceLength
      console.log(flashing)
      if(flashing===true){
        $("button").off('click',)
      let timesToFlash = currentPlayer.sequenceLength;
      $("h1").html(timesToFlash);
      $("h1").css("font-size","70px")
      let flashes=currentGame.colorSequence.theSequence;
      let turnModifier= (timesToFlash-2)*35;
      if (turnModifier > 400){
        turnModifier =400;
      };
      let darkDelay = 450-turnModifier*0.6; //min 200,150
      let flashDelay= 700-turnModifier; //max 700,550
      let count = 0;
      for (let i = 0 ; i < timesToFlash ; i++){
        let lightToFlash='#'+flashes[i];
        let currentButton = $(lightToFlash);
        setTimeout(function(){
          currentButton.addClass('flash');
          setTimeout(function(){
          currentButton.removeClass('flash');
          } , darkDelay); //dark delay
        } , count*flashDelay); //lighting delay
        count++;
      }
         console.log(flashing);
         setTimeout(function(){
          flashing = false;
          currentPlayer.gamePlay.playerSelects();
          console.log(flashing)
        },flashDelay*count);
/*        if (timesToFlash-1===i){
          this.flashing=false; //still not working
        }*/
      }
	}/*
  console.log(this.flashing);*/
}

