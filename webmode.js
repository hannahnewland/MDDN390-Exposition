let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let main_canvas;
let contentTextSize = 85;
let subcontentTextSize = 55;

let Quote1Image1;
let Quote1Image2;
let Quote2Image1;
let Quote2Image2;
let Quote3Image1;
let Quote3Image2;
let Quote4Image1;
let Quote4Image2;
let Quote5Image1;
let Quote5Image2;
let Quote6Image1;
let Quote6Image2;
let Quote7Image1;
let Quote7Image2;
let Quote8Image1;
let Quote8Image2;
let Quote9Image1;
let Quote9Image2;
let Quote10Image1;
let Quote10Image2;

var content = [
'"How can you have a waka on the road?"', 
'"We find the question offensive, it seems to assume people should be qualified by race to have an opinion."',
'"This government is focused on turning around years of decline in Māori outcomes."',
'"I have seen that sort of philosophy before. I saw it in Nazi Germany. We all did. "',
'"We are absolutely commited to reducing smoking rates."', 
'"I think it is pretty unfair."', 
'"We have long been sympathetic to Israel."',
'"[Winston Peters] is the least trustworthy person in NZ Politics."',
'"Cycling and walking initiatives are a waste of time and money."',
'"I encourage all of you to go out there, have more babies if you wish, that would be helpful."'

]; //variable for text string

var subcontent = [ '- Winston Peters, on Waka Kotahi.', 
' - Act Party Representative, on whether their Treaty Policies had Māori input. ', 
' - Christopher Luxon, after Ngāpuhi leaders walked out of a meeting with him.',
' - Winston Peters, comparing co-governance under Labour to Nazi Germany.',
' - Shane Reti, after scrapping SmokeFree legislation.', 
' - Christopher Luxon, on the criticisms and protests of his government.', 
' - David Seymour, after "agreeing to disagree" with NZ voting for Israel to remove themselves from Palestine at the UN.', 
' - David Seymour, on Winston Peters in September 2023.',
' - Simeon Brown, Transport Minister.',
' - Christopher Luxon, on the link between our economic agenda, immigration, and the need for more people in NZ.'
]

var index = 0;
let changeInterval = 10000; //number of milliseconds between changes // 17000
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

function preload(){

Quote1Image1 = loadImage('/image-assets/Newspapers_Page_01.jpg');
Quote1Image2 = loadImage('/image-assets/Newspapers_Page_02.jpg');
Quote2Image1 = loadImage('/image-assets/Newspapers_Page_03.jpg');
Quote2Image2 = loadImage('/image-assets/Newspapers_Page_04.jpg');
Quote3Image1 = loadImage('/image-assets/Newspapers_Page_05.jpg');
Quote3Image2 = loadImage('/image-assets/Newspapers_Page_06.jpg');
Quote4Image1 = loadImage('/image-assets/Newspapers_Page_07.jpg');
Quote4Image2 = loadImage('/image-assets/Newspapers_Page_08.jpg');
Quote5Image1 = loadImage('/image-assets/Newspapers_Page_09.jpg');
Quote5Image2 = loadImage('/image-assets/Newspapers_Page_10.jpg');
Quote6Image1 = loadImage('/image-assets/Newspapers_Page_11.jpg');
Quote6Image2 = loadImage('/image-assets/Newspapers_Page_12.jpg');
Quote7Image1 = loadImage('/image-assets/Newspapers_Page_13.jpg');
Quote7Image2 = loadImage('/image-assets/Newspapers_Page_14.jpg');
Quote8Image1 = loadImage('/image-assets/Newspapers_Page_15.jpg');
Quote8Image2 = loadImage('/image-assets/Newspapers_Page_16.jpg');
Quote9Image1 = loadImage('/image-assets/Newspapers_Page_17.jpg');
Quote9Image2 = loadImage('/image-assets/Newspapers_Page_18.jpg');
Quote10Image1 = loadImage('/image-assets/Newspapers_Page_19.jpg');
Quote10Image2 = loadImage('/image-assets/Newspapers_Page_20.jpg');

}

function setup() {


  main_canvas = createCanvas(screenWidth, screenHeight);
  main_canvas.parent('canvasContainer');

  textFont('Helvetica');
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM); //adjust the anchor point of text alignment to the horizontal and vertical centers
  textSize(contentTextSize * (screenWidth / 1920));

  startTime = millis();

  textWrap(WORD);
}

function draw() {

  let scaledTextSize = contentTextSize * (screenWidth / 1920);
  let scaledSubTextSize = subcontentTextSize * (screenWidth / 1920);

  background(0);

// newspaper stuff

imageMode(CENTER);
//angleMode(DEGREES);
push();

  image(Quote1Image1, 200,300, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 

pop();




// text stuff 
      fill(255,0,0); 

      // Wrap the text within a certain width (e.g., 90% of screen width)
      let textWidthLimit = screenWidth * 0.90;

      // Adjust text size dynamically
      textSize(scaledTextSize);
      text(content[index], 50, height/2,textWidthLimit); //display text
      
      push();
      textSize(scaledSubTextSize);
      textAlign(LEFT, TOP);
      textStyle(NORMAL);
      text(subcontent[index],50, height/2 +35,textWidthLimit); // sub text
      pop();

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

  lastChangeTime = millis();
}


 // Resize the canvas when the window is resized
 window.addEventListener('resize', updateCanvasSize);