function Announcements(currentPlayer){
    if (currentPlayer.sequenceLength===2){
      alert(`Game Over! $[player.name] couldn't remember a sequence of 5 colors`);
      return;
    }
    alert(`Game Over! $[player.name] remembered $[this.player.sequenceLength]`);
}
