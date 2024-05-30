function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(148, 177, 169);

  // Setting page colours
  let green = '#6F8F6A';
  let red = '#C15B5C';
  let yellow = '#F8E8B6';

  let rectMargin = 0.1 * width;

  // Draw the background rectangle with a different color
  drawRect(rectMargin, rectMargin, width - 2 * rectMargin, height - 2 * rectMargin, color(49, 74, 85));

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
  drawRect(rectMargin, centerY + 1.71 * diameters[5] + diameters[6] + diameters[7],width - 2 * rectMargin, 0.09*height, green);
  drawRect(width/3, centerY + 1.71 * diameters[5] + diameters[6] + diameters[7],width/3, 0.08*height, yellow);
 
  // Painting the bottom pattern
  fill(green);
  noStroke();
  rect(centerX - 2.1 * diameters[5], centerY + 1.7 * diameters[5] + diameters[6] + diameters[7],  diameters[5], 0.08*height);
 
  fill(red);
  rect(centerX + 1.1 * diameters[5], centerY + 1.7 * diameters[5] + diameters[6] + diameters[7],  diameters[5], 0.08*height);

  fill(yellow);
 
  arc(centerX + 1.6 * diameters[5],centerY + 1.71 * diameters[5] + diameters[6] + diameters[7]+0.079*height,diameters[5],diameters[5], PI, 0);
  arc(centerX - 1.6 * diameters[5],centerY + 1.71 * diameters[5] + diameters[6] + diameters[7]+0.079*height,diameters[5],diameters[5], PI, 0);

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

    // Draw background texture
  for (let i = 0; i < 10000; i++) {
    push;
    stroke(200, 200, 250, 50);
    point(random(width), random(height));
    pop;
  }
}

// Adaptive Window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function drawRect(x, y, width, height, color) {
  fill(color);
  rect(x, y, width, height);
}

// Draw the line of the trunk.
function drawLine(x, y, x1, y1) {
  push();
  stroke(235, 187, 138);
  strokeWeight(3);
  line(x, y, x1, y1);
  pop();
}

// Draw a circle divided up and down
function drawSplitCircle(x, y, diameter) {
  fill('#6F8F6A');
  arc(x, y, diameter, diameter, PI, 0);
  fill('#C15B5C');
  arc(x, y, diameter, diameter, 0, PI);
  noFill();
  ellipse(x, y, diameter, diameter);
}

// Draw a circle divided right and left
function drawSplitCircleLR(x, y, diameter) {
  fill('#6F8F6A');
  arc(x, y, diameter, diameter, HALF_PI, HALF_PI + PI);
  fill('#C15B5C');
  arc(x, y, diameter, diameter, HALF_PI + PI, HALF_PI);
  noFill();
  ellipse(x, y, diameter, diameter);
}

// Draw a circle divided by red and green
function drawSplitCircleTopRed(x, y, diameter) {
  fill('#C15B5C');
  arc(x, y, diameter, diameter, PI, 0);
  fill('#6F8F6A');
  arc(x, y, diameter, diameter, 0, PI);
  noFill();
  ellipse(x, y, diameter, diameter);
}
