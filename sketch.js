let x;
let y;
let speedX = 3;
let speedY = 5;


function setup() {
  alert("I named this assignment Random Patterns because I think there's an interesting relationship between how we use those words and how it's visualized in this.  There's a lot of random movement in this, yet it still manages to make patterns we can recognize.  I tired to include a couple interactions but couldn't figure it out because I'm garbage at coding.");
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