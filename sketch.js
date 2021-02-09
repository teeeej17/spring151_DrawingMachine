const { STROKE } = require("./p5");

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0)
  }
  
function draw() {
    STROKE(random(255), random(255), random(255));
    circle(x, y, 100);
    x+=random(-25, 25);
    y+=random(-25, 25);
    if(x>width) x=0;
    else if(x<0) x=width;
    if(y>height) y=0;
    else if(y<height) y=0;
  }