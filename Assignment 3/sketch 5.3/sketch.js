var circleX = 0;
var circleY = 0;

function setup(){
  createCanvas(769, 600);
}

function draw(){
  if(circleY<480){
    background(circleY-280, circleX/3, circleY-280+circleX/3);
    fill(255, 255, 255, 125);
    stroke( 255, 255, 255, 125)
    ellipse(circleX, circleY, 80, 80);
    circleX++;
    circleY++;
  }else if(circleY==480){
    circleY=0;
    circleX=10;
    if(circleX == 640){
      circleX=0;
    }
  }
}
