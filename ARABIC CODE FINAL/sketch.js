var lines = [];
var fadeInterval = 2.0;
var symbolSize = 30;
var r, g, b;



function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  r = random(255);
  g = random(255);
  b = random(255);
  background(0);

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-1500, 0));
    lines.push(stream);
    x += symbolSize
  }

  textSize(symbolSize);
}
function mousePressed() {
    // Check if mouse is inside the circle
    var d = dist(mouseX, mouseY, 360, 200);
    if (d < 100) {
      // Pick new random color values
      r = random(255);
      g = random(255);
      b = random(255);
    }
}

function draw() {
  background(0, 300);
  lines.forEach(function(stream) {
    stream.render();
  });
  mousePressed();
}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    var charType = round(random(5, 5));
    if (frameCount % this.switchInterval == 0) {
      if (charType >= 3) {
        //   Arabic 
       
        this.value = String.fromCharCode(
          0x0620 + round(random(0, 26))
        );
      } 
    }
  }

  this.fall = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 20));
  this.speed = random(5, 8);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
        opacity
      );
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }
  

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(0, 40, 253, symbol.opacity);
      } else {
        fill(300, 100, 70, symbol.opacity);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.fall();
      symbol.setToRandomSymbol();
    });
  }
}