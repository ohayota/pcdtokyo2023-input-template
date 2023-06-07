var example2_rW = 30;

function example2_setup() {
  cnv = createCanvas(1280, 720);
}

function example2_draw() {
  push();
  
  background(30);
  fill(255);
  circle(mouseX, mouseY, 100, 100);
  
  pop();
}
