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

Quote1Image1 = loadImage('image-assets/newspaperspage_01.jpg');
Quote1Image2 = loadImage('image-assets/newspaperspage_02.jpg');
Quote2Image1 = loadImage('image-assets/newspaperspage_03.jpg');
Quote2Image2 = loadImage('image-assets/newspaperspage_04.jpg');
Quote3Image1 = loadImage('image-assets/newspaperspage_05.jpg');
Quote3Image2 = loadImage('image-assets/newspaperspage_06.jpg');
Quote4Image1 = loadImage('image-assets/newspaperspage_07.jpg');
Quote4Image2 = loadImage('image-assets/newspaperspage_08.jpg');
Quote5Image1 = loadImage('image-assets/newspaperspage_09.jpg');
Quote5Image2 = loadImage('image-assets/newspaperspage_10.jpg');
Quote6Image1 = loadImage('image-assets/newspaperspage_11.jpg');
Quote6Image2 = loadImage('image-assets/newspaperspage_12.jpg');
Quote7Image1 = loadImage('image-assets/newspaperspage_13.jpg');
Quote7Image2 = loadImage('image-assets/newspaperspage_14.jpg');
Quote8Image1 = loadImage('image-assets/newspaperspage_15.jpg');
Quote8Image2 = loadImage('image-assets/newspaperspage_16.jpg');
Quote9Image1 = loadImage('image-assets/newspaperspage_17.jpg');
Quote9Image2 = loadImage('image-assets/newspaperspage_18.jpg');
Quote10Image1 = loadImage('image-assets/newspaperspage_19.jpg');
Quote10Image2 = loadImage('image-assets/newspaperspage_20.jpg');

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
  background(0);

  let scaledTextSize = contentTextSize * (screenWidth / 1920);
  let scaledSubTextSize = subcontentTextSize * (screenWidth / 1920);

  // Loop through all the images and apply the logic
  for (let i = 0; i < 10; i++) {
      let img1 = window[`Quote${i + 1}Image1`];
      let img2 = window[`Quote${i + 1}Image2`];

      if (index === i) {
          // If the current index matches this set of images, show them with full opacity
          drawingContext.globalAlpha = 1; 
      } else {
          // If not, set them to a lower opacity
          drawingContext.globalAlpha = 0.3; 
      }
      imageMode(CENTER);
      angleMode(DEGREES);

      // Draw each quote image based on its position
      push();
      translate((screenWidth/10) - 400,(screenHeight/10)-150);
      switch (i) {
  
// Quote 1 Images
      case 0:
      push();
      translate(300, 350);
      rotate(45);
      image(Quote1Image1, 0, 0, Quote1Image1.width * 0.1, Quote1Image1.height * 0.1);
      pop();
              
      push();
      translate(1500, 750);
      rotate(-25);
      image(Quote1Image2, 100, 0, Quote1Image1.width * 0.1, Quote1Image1.height * 0.1);
      pop();
      break;

// Quote 2 Images
      case 1:
      push();
      translate( 600,500 );
      rotate(180);
      image(Quote2Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 900,350 );
      rotate(-10);
      image(Quote2Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;

// Quote 3 Images
      case 2:
      push();
      translate( 200,650 );
      rotate(-20);
      image(Quote3Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 800,550 );
      rotate(135);
      image(Quote3Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;

// Quote 4 Images
      case 3:
      push();
      translate( 1200,650 );
      rotate(90);
      image(Quote4Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 1700,300 );
      rotate(10);
      image(Quote4Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;

// Quote 5 Images
      case 4:
      push();
      translate( 500,700 );
      rotate(270);
      image(Quote5Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 1200,400 );
      rotate(225);
      image(Quote5Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;

//Quote 6 Images
      case 5:
      push();
      translate( 900,800 );
      rotate(-70);
      image(Quote6Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 600,200 );
      rotate(90);
      image(Quote6Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;

// Quote 7 Images 
      case 6:
      push();
      translate( 1400,250 );
      rotate(285);
      image(Quote7Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 150,350 );
      rotate(0);
      image(Quote7Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;
  
//Quote 8 Images
      case 7:
      push();
      translate( 1350,800 );
      rotate(45);
      image(Quote8Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate(400,500 );
      rotate(-10);
      image(Quote8Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
     break;

// Quote 9 Images
      case 8:
      push();
      translate( 1400,500 );
      rotate(-10);
      image(Quote9Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 1050,250 );
      rotate(60);
      image(Quote9Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;
  
// Quote 10 Images
      case 9:
      push();
      translate( 1050,600 );
      rotate(-20);
      image(Quote10Image1, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();

      push();
      translate( 1700,550 );
      rotate(45);
      image(Quote10Image2, 0,0, Quote1Image1.width*0.1, Quote1Image1.height*0.1); 
      pop();
      break;

      }
      pop();
  }

  drawingContext.globalAlpha = 1; // Reset alpha to default for text drawing

  // Draw text
  fill(255, 0, 0);
  let textWidthLimit = screenWidth * 0.90;

  // Adjust text size dynamically
  textSize(scaledTextSize);
  text(content[index], 50, height / 2, textWidthLimit); // display text

  push();
  textSize(scaledSubTextSize);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  text(subcontent[index], 50, height / 2 + 35, textWidthLimit); // sub text
  pop();

  if (millis() - lastChangeTime > changeInterval) {
      index = (index + 1) % content.length;
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

