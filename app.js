let canvas = document.getElementById("grid");
let ctx = canvas.getContext("2d");
let color_input = document.getElementById("change_color");


//canvas size
let WIDTH = 640;
let HEIGHT = 480;


//grid cells configurations
let grid_drawing = false;
let tile_size = parseInt(prompt("Enter the grid tile size"), 10);

//canvas configuration
canvas.width = WIDTH;
canvas.height = HEIGHT;



function DrawGrid() {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000";
    for(let i = 0; i < canvas.width; i +=tile_size) {
        for(let j = 0; j < canvas.height; j += tile_size) {
            ctx.strokeRect(i, j, tile_size, tile_size);
        }
    };
};

canvas.addEventListener("mousedown", function(event) {
    grid_drawing = true;
    DrawGridCells(event);
});

canvas.addEventListener("mouseup", function() {
    grid_drawing = false;
});

canvas.addEventListener("mousemove", function(event) {
    if(grid_drawing) {
        DrawGridCells(event);
    };
});

function DrawGridCells(event) {
    let cell_color = color_input.value;

    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;

    let gridx = Math.floor(x / tile_size);
    let gridy = Math.floor(y / tile_size);

    ctx.fillStyle = cell_color;
    ctx.fillRect(gridx * tile_size, gridy * tile_size, tile_size, tile_size);
}

DrawGrid();