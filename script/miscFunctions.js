const compareArrays = function(array1,array2){
  for (let i = 0 ; i < array1.length ; i ++) {
    if (!(array1[i] === array2[i])) {
      return false;
    }
  }

  return true;
}

const announce = function(player) {
    let lossSound = new Audio();
    playSound('fail',lossSound,20000)
    let $h1 = $('h1');
    let highscore = localStorage.getItem("highscore");
    let addedDelay = 0;
    if (player.sequenceLength == 2) {
      $h1.css('font-size','70px')
      $h1.html('Try again');
      resetGame();
    } else {
      $h1.css('font-size','35px')
      $h1.html(`Game Over! <br>${player.name} remembered ${player.sequenceLength}`);
      if (highscore !== null) {
        addedDelay += 1500;
        if (highscore < player.sequenceLength) {
          localStorage.setItem('highscore', player.sequenceLength);
          setTimeout(function() {
            $h1.html('Congratulations! You just set a personal record!');
            happySound();
          } , 1500);

          addedDelay += 1500;
        } else {
          setTimeout(function() {
            $h1.css('font-size','35px')
            $h1.html(`Your highest score is still ${highscore}!`);
          } , 1500);

          addedDelay += 1500;
        }
      } else {
        localStorage.setItem('highscore', player.sequenceLength);
      }
    }

    resetGame(addedDelay);
}



const resetGame = function(delayTime) {
  delayTime = delayTime || 0;
  setTimeout(function(){
          location.reload();
          } , 1500 + delayTime);
}


const happyDance = function() {
  let darkDelay = 80;
  let flashDelay = 90;
  let $h1 = $('h1');
  $h1.html('Welcome!');
  $h1.css('font-size','70px')
  initialSequence = new ColorSequence();
  initialSequence.sequenceGenerator();
  let flashes = ['red','blue','red','blue','yellow','green',
          'yellow','green','red','yellow','green','blue',
          'red','yellow','green','blue','red','yellow','green','blue',
          'yellow','red','green','blue','yellow','red','green','blue',
          'yellow','red','green'];
  let count = 0;
  for (let i = 0 ; i < flashes.length ; i ++){
    let lightToFlash = '#' + flashes[i];
    let currentButton = $(lightToFlash);
    setTimeout(function() {
      currentButton.addClass('flash');
      setTimeout(function() {
      currentButton.removeClass('flash');
      } , darkDelay); //dark delay
    } , count * flashDelay); //lighting delay
    
    count += 1;
  }
  setTimeout(function() {
      $h1.html('Ready');
    },flashDelay * count);
}

const playSound = function(color,toPlay,maxlength){
  toPlay.src = `sound/${color}.mp3`;
  toPlay.play();
  setTimeout(function() {
    toPlay.pause();
  }, maxlength);
}


const happySound = function(){
  let winSound = new Audio();
  winSound.src=`sound/correct.mp3`;
  winSound.play();
}

/*const lossEffect = function(){

}*/

/**

TODO:

Code Logic:




*/