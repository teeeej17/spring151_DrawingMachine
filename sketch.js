function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)
  }
  
function draw() {
  const redVal = map(mouseX, 0, width, 0, 255);
  const greenVal = map(mouseY, 0, height, 0, 255);

  translate(mouseX, mouseY);
  const rotation = map(mouseY, 0, height, 0, TWO_PI);
  rotate(rotation);
  stroke(redVal, greenVal, 255);
  line(-250, 0, 250, 0); 

  }