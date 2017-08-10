functin Announce(){
  this.rounds = function(){
    if (this.player.sequenceLength==5){
      alert(`$[player.name] couldn't remember a sequence of 5 colors`);
    }
    alert(`$[player.name] remembered $[this.player.sequenceLength]`);
  }
}
