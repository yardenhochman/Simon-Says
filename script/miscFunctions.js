var addedDelay = 0;

function compareArrays(array1,array2){

  for (let i=0 ; i < array1.length ; i++){
    if (!(array1[i] === array2[i])){
      return false;
    }
  }
  return true;
}

function announce(player){
    let highscore = localStorage.getItem("highscore");
    if (player.sequenceLength==2){
      $("h1").css("font-size","35px")
      $("h1").html("Try again");
      resetGame()
    }
    else{
      $("h1").css("font-size","20px")
      $("h1").html(`Game Over! ${player.name} remembered ${player.sequenceLength}`);
      if (highscore !== null){
        addedDelay+=500;
        if (highscore<player.sequenceLength){
          localStorage.setItem("highscore", player.sequenceLength);
          setTimeout(function(){
            $("h1").html("Congratulations! You just set a personal record!");
          } , 500);
        }
        else{
          setTimeout(function(){
            $("h1").css("font-size","20px")
            $("h1").html(`Your highest score is still ${highscore}!`);
          } , 500);
        }

      }
      else{
        localStorage.setItem("highscore", player.sequenceLength);
      }

    }
    resetGame(addedDelay);
}

function resetGame(delayTime){
  debugger
  delayTime = delayTime||0;
  setTimeout(function(){
          location.reload();
          } , 1000+delayTime);
}


