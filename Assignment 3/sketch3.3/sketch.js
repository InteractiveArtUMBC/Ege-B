var x = 0;

function setup() {
    createCanvas(600,600);

}
function draw() {
    background(0);
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(x, 200, 100, 100);

    if (x > width) {
        speed = -3;
    }
    x = x + 3;
}