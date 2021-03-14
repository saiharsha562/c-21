var fixedRect, movingRect;
var gameObject1, gameObject2;
var a,b
function setup() {
  createCanvas(1200,800);
 
  a = createSprite(50,200,50,50)
  a.shapeColor = "red"

  b = createSprite(800,200,20,100)
  b.shapeColor = "blue"
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  a.velocityX = 5
  if(isTouching(a,b)){
      a.velocityX = 0
      a.shapeColor = "yellow"
      b.shapeColor = "grey"
      b.velocityY = -4
  }

 
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(o1,o2){
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x -o1.x < o1.width/2 + o2.width/2
    && o2.y - o1.y < o1.height/2 + o2.height/2
    && o1.y - o2.y < o2.height/2 + o1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}