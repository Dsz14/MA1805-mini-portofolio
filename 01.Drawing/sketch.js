let x = 0; 
let y = 0; 
let lines = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(115, 10, 10);
}
 
function draw() {
  // background(255,0,100); // What happends if you uncomment this... 
  // Draw a line - try replacing random() with -- OR ++ OR +=4 etc. 
  let x1 = random(width);
  let y1 = random(height);
  let x2 = random(width);
  let y2 = random(height);
  let color = random(150, 255);
  stroke(color);
  line(x1, y1, x2, y2); 
  // fill(255, 255, 255, 20); // Sets transparency 
  // ellipse(x1, y1, x2, y2); // Random  sized shape 
  circle(500, 350, 200)
  fill(120, 10, 0, 1);
}