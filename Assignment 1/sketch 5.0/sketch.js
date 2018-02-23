function setup() {
    createCanvas(600,600)
    background('red');
}
function draw(){
    if(mouseIsPressed){
        fill('red');
    }
stroke(0);
ellipse(mouseX,mouseY,80,80);
line(500,250,0,0);

fill('green');
triangle(0,0,500,250,180,250);
triangle(10,10,500,250,180,250);
}