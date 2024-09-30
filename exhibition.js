let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;


var content = [
'"How can you have a waka on the road?"', 
'"We find the question offensive, it seems \n to assume people should be qualified \n by race to have an opinion."',
'"This government is focused on turning \n around years of decline in Māori \n outcomes."'
]; //variable for text string

var subcontent = [ '- Winston Peters, on Waka Kotahi.', 
' - Act Party Representative, on whether their Treaty Policies had Māori input. ', 
' - Christopher Luxon, after Ngāpuhi leaders walked out of a meeting with him.'
]
var index = 0;
let changeInterval = 17000; //number of milliseconds between changes // 17000
let lastChangeTime = 0;
let yStart = screenHeight; //starting position of the text wall



function setup() {


  main_canvas = createCanvas(screenWidth, screenHeight+100);
  main_canvas.parent('canvasContainer');

  textFont('Helvetica');
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(70); //make the text 20 pixels in size

  startTime = millis();
}

function draw() {
  background(0);

  for (let y = yStart; y < height; y += 8000) {//use a for loop to draw the line of text multiple times down the vertical axis

    for (let c=0; c<content.length; c+=1) {

      fill(255,0,0); 

      text(content[c], 35, (y + 1000*c)); //display text
      
      push();
      textSize(40);
      textAlign(LEFT, TOP);
      textStyle(NORMAL);
      text(subcontent[c],35,(y + 1000*c) +20); // sub text
      pop();

      if (content[c] >= 3){

        content[c] = 0;
      }

      
  }

  // console.log(yStart);
  }
  yStart = yStart - 1; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1

  if (yStart < -2100) {
    yStart = screenHeight + 200;
  }

  // if (millis() - lastChangeTime > changeInterval ){

  //   index = (index + 1)% content.length;
  //   lastChangeTime = millis();
  // }

}


// function mousePressed(){

//   index = index +1;
  
//   if (index == content.length){
//     index = 0;
//   }
// }