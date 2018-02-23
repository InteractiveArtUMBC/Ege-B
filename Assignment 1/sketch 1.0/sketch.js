function setup() {
    createCanvas(600,600)
    background(60,60)

}
function draw(){noStroke();
    colorMode(HSB, 100);
    for (var i = 0; i < 600; i++) {
      for (var j = 0; j < 600; j++) {
        stroke(i, j, 132);
        point(i, j);
      }
    }
}