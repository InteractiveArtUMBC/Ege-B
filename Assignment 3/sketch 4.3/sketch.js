// Where is the circle
var x, y;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 100;
  y = height;
}

function draw() {
  background(50);
  
  // Draw a circle
  stroke(100);
  fill(300);
  ellipse(x, y, 100, 100);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-50, 50);
  // Moving up at a constant speed
  x = x - 2;
  
  // Reset to the bottom
  if (x < 0) {
    x = height;
  }
}

