var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(500, 200, 50, 100);
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
  movingRect.debug=true;
  fixedRect.debug=true;
  
}

function draw() {
  
  background(0);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  console.log(movingRect.x-fixedRect.x);
  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.y-movingRect.y < movingRect.width/2 + fixedRect.width/2 
    && movingRect.y-fixedRect.y < movingRect.width/2 + fixedRect.width/2)
  {
    fixedRect.shapeColor="blue";
   movingRect.shapeColor="blue";

  }

  else
  {
    fixedRect.shapeColor="red";
   movingRect.shapeColor="red";

  }

  drawSprites();
}