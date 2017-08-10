
function Game() {
  this.colorSequenceGenerator = new ColorSequenceGenerator();
                              //generates a sequence and builds ui elements
  this.player = new Player("You"); //in the future will add a method to take player name when
                              //multiplayeris enabled
  this.play = new Play();     //the actual gameplay happens here until it's game over
  this.announce = new Announcements();
                              //will create announcements based on results
}
