let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let fontBold;

var content = [
'"How can you have a waka on the road?"', '"We find the question offensive, it seems \n to assume people should be qualified \n by race to have an opinion."']; //variable for text string
var index = 0;
let changeInterval = 10000; //number of milliseconds between changes
let lastChangeTime = 0;
let yStart = screenHeight; //starting position of the text wall


// function preload()[



// ]
function setup() {

  main_canvas = createCanvas(screenWidth, screenHeight);
  main_canvas.parent('canvasContainer');

  textFont('Helvetica');
  textAlign(LEFT); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(78); //make the text 20 pixels in size
}

function draw() {
  background(0);

   for (let y = yStart; y < height; y += 400) { //use a for loop to draw the line of text multiple times down the vertical axis
    fill("#FF0000"); 
    text(content[index], 35, y); //display text
   }
   yStart--; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1

  if (millis() - lastChangeTime > changeInterval ){

    index = (index + 1)% content.length;
    lastChangeTime = millis();
  }
}

function mousePressed(){

  index = index +1;
  
  if (index == content.length){
    index = 0;
  }
}