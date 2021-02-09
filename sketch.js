const { FILL, _DEFAULT_FILL } = require("./p5");

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)
  }
  
function draw() {
  const redVal = map(mouseX, 0, width, 0, 255);
  const greenVal = map(mouseY, 0, height, 0, 255);
  noStroke();
  circle(mouseX, mouseY, 50);

  
  
  
  }