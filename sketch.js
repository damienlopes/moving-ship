var ship, shipmove;
var seaimg;

function preload(){
shipmove = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaimg = loadImage(sea.png)
}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(200, 200,50,50);
  ship.addAnimation("moving", shipmove);
  
  ship.scale = 0.5;
  ship.x = 50
}

function draw() {
  background("blue");
 
}