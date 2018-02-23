var xpos = 0;
 
var speed = 2;
 
function setup() 
{
  createCanvas(400, 200);
}
 
function draw() 
{
  background(255);
 
  fill(255, 0, 0);
 
  stroke(0);
 
  ellipseMode(CENTER);
 
  xpos = xpos + speed;
 
  if((xpos > width) || (xpos < 0))
  {
    speed = speed * -1;
  }
 
  ellipse(xpos, 100, 25, 25);	

}