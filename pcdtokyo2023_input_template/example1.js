var example1_rW = 30;

function example1_setup() {
  cnv = createCanvas(2880, 1800);
  background(30);
}

function example1_draw() {
  push();
  
  noStroke();
  
  fill(255);
  circle(mouseX, mouseY, 10, 10);
  
  pop();
}
