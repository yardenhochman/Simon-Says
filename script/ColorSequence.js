function ColorSequence() {
  this.sizeOfSequence = 50;
  this.colorSelection = ["red","yellow","green","blue"];
  this.theSequence = [];

  this.sequenceGenerator = function() {
    for (let i=0 ; i<this.sizeOfSequence ; i++){
      let randomColorIndex = Math.floor(Math.random()*this.colorSelection.length);
      let currentColor = this.colorSelection[randomColorIndex];
      this.theSequence.push(currentColor);
    };
  };
  this.createButtons = function(){
    //a function that forms buttons in divs across the screen. Each will
    //represent a color in the colorSelecction array.
  }
}
