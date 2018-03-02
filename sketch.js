function setup(){
    createCanvas(1000,600);
    background(20,100,0, 120, 10);
}

function draw(){
    circles();
    bumbus();

}

function circles(){
 strokeWeight(2);
 fill('light blue');
 ellipse(60,60,90,90);
 fill('red');
 ellipse(60,60,80,80);
 fill(230,200,0,120,100);
 ellipse(60,60,20,20);
fill('black');
ellipse(850,520,100,100);

arc(300, 200, 50, 50, 0, HALF_PI);
noFill();
arc(300, 200, 60, 60, HALF_PI, PI);
arc(300, 200, 70, 70, PI, PI + QUARTER_PI);
arc(300, 200, 80, 80, PI + QUARTER_PI, TWO_PI);

arc(150, 150, 50, 50, 0, HALF_PI);
noFill();
arc(150, 150, 60, 60, HALF_PI, PI);
arc(150, 150, 70, 70, PI, PI + QUARTER_PI);
arc(150, 150, 80, 80, PI + QUARTER_PI, TWO_PI);

arc(400, 150, 50, 50, 0, HALF_PI);
noFill();
arc(400, 450, 60, 60, HALF_PI, PI);
arc(400, 450, 90, 90, PI, PI + QUARTER_PI);
arc(400, 450, 100, 100, PI + QUARTER_PI, TWO_PI);

fill('purple')
triangle(650,50,400,300,659,300);

stroke(300);
strokeWeight(5);




translate(580,200);
fill('lightBlue');
for (var i =0; i < 10; i ++) {
    ellipse(0,30,20,80);
    rotate(PI/5);
    
       
    strokeWeight(1)
    line(500,50,200,500);
    line(500,50,800,500);
    line(550,70,850,550);
    
    line(800,100,300,200);
    line(1000, 100, 70, 70);
    line(1150,150,75,75);
    line(1200,155,80,80);
    line(1250,160,85,85);
    line(1300,165,90,90);
    line(600, 600, 1000, 1000);
    line(850,150,350,250);

}
}