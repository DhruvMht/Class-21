var movingRect, object2;
var object1,object3;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object2 = createSprite(300,100,50,80);
  object2.shapeColor = "green";
  object2.debug = true;
  object2.velocityY = 5;

  object1 = createSprite(200,300,50,80);
  object1.shapeColor = "green";

  object3 = createSprite(300,300,50,80);
  object3.shapeColor = "green";
  object3.velocityY = -5;

}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  rectMode(CENTER);

 bounceOff(object2, object3); 

 if ( isTouching(object1,movingRect)) {

    object1.shapeColor = "red";
    movingRect.shapeColor = "red"; }
  else {
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";

  }



  drawSprites();
}

function isTouching(object1, object2) {

  if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2 
    && object1.y-object2.y<object2.height/2+object1.height/2 
    && object2.y-object1.y<object2.height/2+object1.height/2 ) 
  {
    return true; }
    else {return false; 
    }

}

function bounceOff(object1, object2) {

  if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2 )
    
  {
    object1.velocityX = object1.velocityX*(-1);
    object2.velocityX = object2.velocityX*(-1);

  }

  if (object1.y-object2.y<object2.height/2+object1.height/2 
  && object2.y-object1.y<object2.height/2+object1.height/2 )
{
  object1.velocityY = object1.velocityY*(-1);
  object2.velocityY = object2.velocityY*(-1);

}
}







 