let x;
let y;
let speedX = 3;
let speedY = 5;


function setup() {
  alert(I titled this Random Patterns because there is an interesting relationship between how we undestand those words and how it is visualized in this.  We normally do not associate those two words together, but as random as the movement is with this, it still manages to create patterns.);
    createCanvas(windowWidth, windowHeight);
    x = random(0, width);
    y = random(0, height);
    speedX = random(-5, 5);
    speedY = random(-5, 5);
    background(0, 0, 0);
  }
  
function draw() {
  const redVal = map(x, 0, width, 0, 255);
  const greenVal = map(y, 0, height, 0, 255);

  translate(x, y);
  const rotation = map(y, 0, height, 0, TWO_PI);
  rotate(rotation);
  stroke(redVal, greenVal, 255);
  line(-250, 0, 250, 0); 

  x = x + speedX;
  y = y + speedY;
  if (x > width || x < 0) {
    speedX = -speedX;
  }

  if (y > height || y < 0) {
    speedY = -speedY;
  }

  }