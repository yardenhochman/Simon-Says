class GamePlay {
  constructor(currentPlayer,currentGame) {
    this.flashing = true;
    this.flash = function() {
      this.flashing = true;
      let $h1 = $('h1');
      let $button = $('button');
      if (this.flashing === true) {
        $button.off('click',)
        let timesToFlash = currentPlayer.sequenceLength;
        $h1.html(timesToFlash);
        $h1.css('font-size','70px')
        let flashes = currentGame.colorSequence.theSequence;
        let turnModifier = (timesToFlash-2) * 35;
        if (turnModifier > 400) {
          turnModifier = 400;
        };
        let darkDelay = 450 - turnModifier * 0.6; //min 200,150
        let flashDelay = 700 - turnModifier; //max 700,550
        let count = 0;
        for (let i = 0 ; i < timesToFlash ; i ++){
          let lightToFlash = '#' + flashes[i];
          let currentButton = $(lightToFlash);
          setTimeout(function() {
            currentButton.addClass('flash');
            let colorSound = new Audio()
            playSound(flashes[i],colorSound,450);
            setTimeout(function() {
              currentButton.removeClass('flash');
              colorSound.pause();
            } , darkDelay); //dark delay
          } , count * flashDelay); //lighting delay
          count += 1;
        }
         setTimeout(function() {
          this.flashing = false;
          $h1.html('Ready');
          currentPlayer.gamePlay.playerSelects();
        },flashDelay * count);
      }
  }

    this.playerSelects = function() {
      this.flashing = false;
      let $button = $('button');
      if (!(this.flashing)){
        $button.click(function() {
          let choicesNumber = currentPlayer.currentSelection.length;
          let currentLevel = currentPlayer.sequenceLength;
          let currentArray = currentGame.colorSequence.theSequence.slice(0,currentLevel);
            let color = this.id;
            currentPlayer.currentSelection.push(color);
            let colorSound = new Audio()
            playSound(color,colorSound,450);
            let playerChose = [...currentPlayer.currentSelection];
            choicesNumber += 1;
            if (choicesNumber === currentLevel) {
              setTimeout(function() {
                colorSound.pause();
                let gameContinues = compareArrays(playerChose,currentArray);
                if (gameContinues) {
                    currentPlayer.currentSelection = [];
                    currentPlayer.sequenceLength += 1;
                    this.flashing = true;
                    currentPlayer.gamePlay.flash();
                } else {
                  announce(currentPlayer);
                }
              }, 500);
            }
        });
      }
    }
  }
}



/**

TODO:

add lives

Code Logic:




*/