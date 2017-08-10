
function displaySequence(){
  //create div for each color in colorSelection
  //replace div background color in order of sequence
}

function Game() {
  this.colorSequence = new ColorSequenceGenerator();
  this.player = new Player(); //in the future will add a method to take player name
  this.play = new Play(); //needs to be made. composed of a flash method, 
  			//which shows X flashes out of the 
  			//generated color sequence. and a flashCounter variable storing  
  			//the current number of flashes the player can expect. a turns method keeps
  			//excuting flash and increasing the flashCounter, until counter reaches length of array
  			//or the player lives is 0.
  this.announce

}
