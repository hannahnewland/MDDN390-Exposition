let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let main_canvas;
let contentTextSize = 70;
let subcontentTextSize = 40;


var content = [
'"How can you have a waka on the road?"', 
'"We find the question offensive, it seems \n to assume people should be qualified \n by race to have an opinion."',
'"This government is focused on turning \n around years of decline in Māori \n outcomes."',
'"I have seen that sort of philosophy \n before. I saw it in Nazi Germany. \n We all did. "',
'"We are absolutely commited to reducing \n smoking rates."', 
'"I think it is pretty unfair."', 
'"We have long been sympathetic to \n Israel."',
'"[Winston Peters] is the \n least trustworthy person in NZ Politics."',
'"Cycling and walking \n initiatives are a waste of time and money."',
'"I encourage all of you to go out there, \n have more babies if you wish, \n that would be helpful."'

]; //variable for text string

var subcontent = [ '- Winston Peters, on Waka Kotahi.', 
' - Act Party Representative, on whether their Treaty Policies had Māori input. ', 
' - Christopher Luxon, after Ngāpuhi leaders walked out of a meeting with him.',
' - Winston Peters, comparing co-governance under Labour to Nazi Germany.',
' - Shane Reti, after scrapping SmokeFree legislation.', 
' - Christopher Luxon, on the criticisms and protests of his government.', 
' - David Seymour, after "agreeing to disagree" with NZ voting for Israel to \n remove themselves from Palestine at the UN.', 
' - David Seymour, on Winston Peters in September 2023.',
' - Simeon Brown, Transport Minister.',
' - Christopher Luxon, on the link between our economic agenda, \n immigration, and the need for more people in NZ.'
]

var index = 0;
let changeInterval = 17000; //number of milliseconds between changes // 17000
let lastChangeTime = 0;
let yStart = screenHeight; //starting position of the text wall




function updateCanvasSize(){
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  resizeCanvas(screenWidth, screenHeight + 100);  // Adjust canvas size
  yStart = screenHeight;  // Adjust yStart to new screenHeight

  // Dynamically scale text size based on screen size
  textSize(contentTextSize * (screenWidth / 1920)); // Scale based on 1920px width

}

function setup() {
  main_canvas = createCanvas(screenWidth, screenHeight+100);
  main_canvas.parent('canvasContainer');

  textFont('Helvetica');
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM); //adjust the anchor point of text alignment to the horizontal and vertical centers
  //textSize(70); //make the text 20 pixels in size
  textSize(contentTextSize * (screenWidth / 1920));

  startTime = millis();
}

function draw() {

  let scaledTextSize = contentTextSize * (screenWidth / 1920);
  let scaledSubTextSize = subcontentTextSize * (screenWidth / 1920);

  background(0);

  for (let y = yStart; y < height; y += 10000) {//use a for loop to draw the line of text multiple times down the vertical axis

    for (let c=0; c<content.length; c+=1) {

      fill(255,0,0); 

       // Adjust text size dynamically
       textSize(scaledTextSize);
      text(content[c], 35, (y + 1000*c)); //display text
      
      push();
      //textSize(40);
      textSize(scaledSubTextSize);
      textAlign(LEFT, TOP);
      textStyle(NORMAL);
      text(subcontent[c],35,(y + 1000*c) +20); // sub text
      pop();

      
  }

  // console.log(yStart);
  }
  yStart = yStart - 1; //move the starting point of the loop up to create the scrolling animation, yStart-- is the same as yStart = yStart -1 or yStart-=1

  if (yStart < -10500) {
    yStart = screenHeight + 200;
  }


}

 // Resize the canvas when the window is resized
 window.addEventListener('resize', updateCanvasSize);

