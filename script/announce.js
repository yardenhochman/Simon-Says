function Announcements(){
  this.rounds = function(){
    if (this.player.sequenceLength==5){
      alert(`Game Over! $[player.name] couldn't remember a sequence of 5 colors`);
    }
    alert(`Game Over! $[player.name] remembered $[this.player.sequenceLength]`);
  }
}
