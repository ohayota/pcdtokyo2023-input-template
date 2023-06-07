const dispWidth = 2880;
const dispHeight = 1800;

var canvas;

var selectedWorkNum = '1';
var keyChangedFlag = true;

function setup() {
  cnv = createCanvas(dispWidth, dispHeight);
}

// 数字キーを押すと作品が切り替わる
function draw() {
  switch (selectedWorkNum) {
    case '1':
      if (keyChangedFlag) {
        example1_setup();
        keyChangedFlag = false;
      }
      example1_draw();
      break;
    case '2':
      if (keyChangedFlag) {
        example2_setup();
        keyChangedFlag = false;
      }
      example2_draw();
      break;
    case '3':
      if (keyChangedFlag) {
        yourname_setup();
        keyChangedFlag = false;
      }
      yourname_draw();
      break;
  }
}

function keyTyped() {
  fullscreen(true);
  switch (key) {
    case '1':
    case '2':
    case '3':
      selectedWorkNum = key;
  }
  keyChangedFlag = true;
}
