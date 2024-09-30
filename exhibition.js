let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let fontBold;

var content = [
"MAMA, A GIRL BEHIND YOU ",
"WHAT I DO",
"ELLIE AND MASON HOUSE",
"Donatella VERSACE💜"]; //variable for text string
var index = 0;


let yStart = 0; //starting position of the text wall


// function preload()[



// ]
function setup() {

  main_canvas = createCanvas(screenWidth, screenHeight);
  main_canvas.parent('canvasContainer');

  textFont('Helvetica');
  textAlign(CENTER, CENTER); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(30); //make the text 20 pixels in size
}

function draw() {
  background(0);

  for (let y = yStart; y < height; y += 100) { //use a for loop to draw the line of text multiple times down the vertical axis
    fill("#FF0000"); //create a gradient by associating the fill color with the y location of the text
    text(content[index], width / 2, y); //display text
  }
  yStart--; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1

}

function mousePressed(){

  index = index +1;
  
  if (index == content.length){
    index = 0;
  }
}
