var x, y;

function setup() {
  createCanvas(720, 400);
  x = width / 2;
  y = height;
}

function draw() {
  background(200);
  
  stroke(100);
  fill(75);
  ellipse(x, y, 24, 24);
  
  x = x + random(-1, 1);
  y = y - 7;
  
  if (y < 0) {
    y = height;
  }

background(200);
  
stroke(100);
fill(75);
ellipse(x, y, 60, 60);

x = x + random(-1, 1);
y = y - 7;

if (y < 0) {
  y = height;
}
}

stroke(200);
  fill(75);
  ellipse(x, y, 12, 22);
    x = x + random(-2, 2);
  y = y - 3;