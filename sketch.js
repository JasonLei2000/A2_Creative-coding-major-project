let song, analyzerTop,analyzerBottom, rmsTopDiameter,rmsBottomDiameter, InitialRmsDiameter;
let rmsTop,rmsBottom,button,blue,green,yellow,modena
;
let pan = 0.0;
let isPlaying = false; 


// Load audio
function preload() {
  songTop = loadSound('asserts/words_top.mp3');
  songBottom = loadSound('asserts/words_bottom.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Analysing song volume
  analyzerTop = new p5.Amplitude();
  analyzerBottom = new p5.Amplitude();
  analyzerTop.setInput(songTop);
  analyzerBottom.setInput(songBottom);

  // Creating a Play Button
  button = createButton('Play/Pause');
  buttonPos();
  button.mousePressed(play_pause);

    // Creating a background texture
  staticBackground = createGraphics(windowWidth, windowHeight);
  for (let i = 0; i < 10000; i++) {
    staticBackground.stroke(200, 200, 250, 50);
    staticBackground.point(random(width), random(height));
  }
}

function draw() {
  background("#151741");
  
  rmsTop = analyzerTop.getLevel();
  rmsBottom = analyzerBottom.getLevel();

  // Setting page colours
  blue = '#3C4E90';
  modena = "#50547B"
  green = color(73, 136, 63, 127);
  yellow = '#E4CB66';

  let rectMargin = 0.1 * width;

  // Draw the background rectangle with a different color
  drawRect(rectMargin, rectMargin, width - 2 * rectMargin, height - 2 * rectMargin, modena);
  image(staticBackground, 0, 0);

  let centerX = width / 2;
  let centerY = height / 2;
  let baseDiameter = 0.1 * width;

    // List of diameters of circles
  let diameters = [
    baseDiameter, baseDiameter * 0.625, baseDiameter * 0.375, baseDiameter * 0.75,
    baseDiameter * 0.75, baseDiameter * 0.625, baseDiameter, baseDiameter * 0.375,
    baseDiameter * 0.375, baseDiameter * 0.625, baseDiameter, baseDiameter * 0.75
  ];

  
    // Central circle
  drawSplitCircle(centerX, centerY, diameters[0]);

    // Left arm circle
  drawSplitCircle(centerX - 0.82 * diameters[0], centerY, diameters[1]);
  drawSplitCircle(centerX - 0.7 * diameters[0] - diameters[1], centerY, diameters[2]);
  drawSplitCircleLR(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - 2 * diameters[2] / 2, diameters[3]);
 
    // Right arm circle
  drawSplitCircle(centerX + 0.88 * diameters[0], centerY, diameters[3]);
  drawSplitCircle(centerX + 1.26 * diameters[0] + diameters[2], centerY, diameters[3]);
  drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY, centerX + 1.26 * diameters[6] + diameters[4] + diameters[7] / 2, centerY);
  drawLine(centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - 2 * diameters[2] / 2 + diameters[3] / 2, centerX - 0.95 * diameters[0] - diameters[1] - diameters[2] / 2, centerY - 2 * diameters[2] / 2 - diameters[3] / 2);

  push();
   // Draw the bottom rectangle
  drawRect(rectMargin, centerY + 1.71 * diameters[5] + diameters[6] + diameters[7],width - 2 * rectMargin, 0.09*height, blue);
  drawRect(width/3, centerY + 1.71 * diameters[5] + diameters[6] + diameters[7],width/3, 0.08*height, yellow);
 

  // Painting the bottom pattern
  fill(blue);
  noStroke();
  rect(centerX - 2.1 * diameters[5], centerY + 1.7 * diameters[5] + diameters[6] + diameters[7],  diameters[5], 0.08*height);
 
  fill(green);
  rect(centerX + 1.1 * diameters[5], centerY + 1.7 * diameters[5] + diameters[6] + diameters[7],  diameters[5], 0.08*height);

  fill(yellow);
 
  arc(centerX + 1.6 * diameters[5],centerY + 1.71 * diameters[5] + diameters[6] + diameters[7]+0.079*height,diameters[5]+200*rmsTop,diameters[5]+200*rmsTop, PI, 0);
  arc(centerX - 1.6 * diameters[5],centerY + 1.71 * diameters[5] + diameters[6] + diameters[7]+0.079*height,diameters[5]+200*rmsTop,diameters[5]+200*rmsTop, PI, 0);

  pop();

  // Upper median radius
  drawSplitCircleLR(centerX, centerY - diameters[0]/2-diameters[7]/2, diameters[7]);
  drawSplitCircleLR(centerX, centerY - diameters[0]/2-diameters[7]-diameters[0]/2, diameters[0]);
  
  // Lower median radius
  drawSplitCircleLR(centerX, centerY + 1.3 * diameters[5], diameters[5]);
  drawSplitCircleLR(centerX, centerY + diameters[5] + diameters[6], diameters[6]);
  drawSplitCircleLR(centerX, centerY + 1.71 * diameters[5] + diameters[6] + diameters[7], diameters[5]);
  drawLine(centerX, centerY + 1.71 * diameters[5] + diameters[6] + diameters[7] + diameters[5] / 2, centerX, centerY - diameters[0]/2-diameters[7]-diameters[0], diameters[0]);

  // Draw more middle bottom square, using red on top and green on bottom
  drawSplitCircleTopRed(centerX + 0.8 * diameters[5], centerY + 1.71 * diameters[5] + diameters[6] + diameters[7], diameters[7]);
  drawSplitCircleTopRed(centerX + 1.6 * diameters[5], centerY + 1.71 * diameters[5] + diameters[6] + diameters[7], diameters[5]);
  drawSplitCircleTopRed(centerX - 0.8 * diameters[5], centerY + 1.71 * diameters[5] + diameters[6] + diameters[7], diameters[7]);
  drawSplitCircleTopRed(centerX - 1.6 * diameters[5], centerY + 1.71 * diameters[5] + diameters[6] + diameters[7], diameters[5]);
  drawLine(centerX - 2.1 * diameters[5] , centerY + 1.71 * diameters[5] + diameters[6] + diameters[7], centerX + 1.6 * diameters[5] + diameters[5] / 2, centerY + 1.71 * diameters[5] + diameters[6] + diameters[7]);

   // Right side vertical circle
  drawSplitCircleLR(centerX + 1.26 * diameters[6] + diameters[4] + diameters[7] / 2, centerY - 2.3 * diameters[4]/2- diameters[5] / 2, diameters[5]);
  drawSplitCircleLR(centerX + 1.26 * diameters[6] + diameters[4] + diameters[7] / 2, centerY - 1.3 * diameters[4]/2, diameters[4]);
  drawSplitCircleLR(centerX + 1.26 * diameters[6] + diameters[4] + diameters[7] / 2, centerY - 2.3 * diameters[4]/2- 2 * diameters[5] / 2- diameters[6]/2, diameters[6]);
  drawLine(centerX + 1.26 * diameters[6] + diameters[4] + diameters[7] / 2, centerY, centerX + 1.26 * diameters[6] + diameters[4] + diameters[7] / 2, centerY - 2.3 * diameters[4]/2- 2 * diameters[5] / 2- diameters[6]);

}

// Adaptive Window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
  buttonPos()
}

function drawRect(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
}

// Draw the line of the trunk.
function drawLine(x, y, x1, y1) {
  push();
  stroke(235, 187, 138);
  strokeWeight(5);
  line(x, y, x1, y1);
  pop();
}

// Draw a circle divided up and down
function drawSplitCircle(x, y, diameter) {
  let minDiameter = diameter /1.5;
  let maxDiameter = diameter*1.15;
  rmsTopDiameter = map(rmsTop, 0, 0.2, minDiameter, maxDiameter);
  fill(blue);
  arc(x, y,  rmsTopDiameter,  rmsTopDiameter, PI, 0);
  fill(green);
  arc(x, y, rmsTopDiameter, rmsTopDiameter, 0, PI);
  noFill();
  ellipse(x, y, rmsTopDiameter, rmsTopDiameter);
}

// Draw a circle divided right and left
function drawSplitCircleLR(x, y, diameter) {
  let minDiameter = diameter /1.5;
  let maxDiameter = diameter*1.15;
  rmsBottomDiameter = map(rmsBottom, 0, 0.2, minDiameter, maxDiameter);
  fill(blue);
  arc(x, y, rmsBottomDiameter, rmsBottomDiameter, HALF_PI, HALF_PI + PI);
  fill(green);
  arc(x, y, rmsBottomDiameter, rmsBottomDiameter, HALF_PI + PI, HALF_PI);
  noFill();
  ellipse(x, y, rmsBottomDiameter, rmsBottomDiameter);
}

// Draw a circle divided by red and green
function drawSplitCircleTopRed(x, y, diameter) {
  let minDiameter = diameter /1.5;
  let maxDiameter = diameter*1.15;
  rmsTopDiameter = map(rmsTop, 0, 0.2, minDiameter, maxDiameter);
  fill(green);
  arc(x, y, rmsTopDiameter, rmsTopDiameter, PI, 0);
  fill(blue);
  arc(x, y, rmsTopDiameter,rmsTopDiameter, 0, PI);
  noFill();
  ellipse(x, y, rmsTopDiameter, rmsTopDiameter);
}

// Control music play and pause
function play_pause() {
  if (!isPlaying) {
    songTop.play();
    songBottom.play();
    isPlaying = true;
  } else {
    songTop.stop();
    songBottom.stop();
    isPlaying = false;
  }
}

// Adaptive position of control buttons
function buttonPos(){
  button.style('background-color', '#3C4E90');
  button.style('color', 'white');
  button.style('text-align', 'center');
  button.position((width - button.width) / 2, (height - button.height)*0.9 );
}

function mouseMoved() {

  pan = map(mouseX, 0, width, -1, 1);
  songTop.pan(pan);
  songBottom.pan(pan);
}

