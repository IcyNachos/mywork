//The setup function only happens once
var sandy=0 

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0,0,0); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0) // an RGB color for the circle's border
  strokeWeight(1);
  fill(81,216,215,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(30,50,50,50); // center of canvas, 20px dia
  fill(125,75,127,120);
  strokeWeight(1);
  ellipse(300,350,90,90);
  fill(230,149,130);
  stroke(0,0,0);
  strokeWeight(1)
  ellipse(200,350,75,75);
  fill(230,149,130);
  stroke(0,0,0);
  strokeWeight(1);
  fill(200,200,200,150);
  rect(0,200,sandy,50);
  stroke(0,0,0);
  textSize(40);
  textFont("Helvetica");
  text('Look At What I Made',1,450);
}

function mousePressed() {
if (sandy>=500) 
  {sandy=0} else 
sandy=sandy+150;


}