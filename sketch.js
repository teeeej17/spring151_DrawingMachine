const { FILL, _DEFAULT_FILL, translator } = require("./p5");

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)
  }
  
function draw() {
  const redVal = map(mouseX, 0, width, 0, 255);
  const greenVal = map(mouseY, 0, height, 0, 255);
  //noStroke();
  //circle(mouseX, mouseY, 50);

  translate(mouseX, mouseY);
  const rotation = map(mouseY, 0, height, 0, PI);
  rotate(rotation);
  stroke(redVal, greenVal, 255);
  line(-50, 0, 50, 0); 
  }