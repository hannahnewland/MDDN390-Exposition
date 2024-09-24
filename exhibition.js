
function resizeCanvas (){

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

draw();

}

function setup (){

    main_canvas = createCanvas (100,100);

    main_canvas.parent('canvasContainer');
}