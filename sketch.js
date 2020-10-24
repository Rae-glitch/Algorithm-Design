var movingRect;
var fixedRect;


function setup() {
  createCanvas(800,600);
  movingRect=createSprite(400, 0, 50, 50);
  movingRect.shapeColor="green"
  movingRect.debug=true;
  movingRect.velocityY = 2;
  fixedRect=createSprite(200, 600, 50, 70);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityY = -2;
}

function draw() {
  background(0); 
  // movingRect.x=mouseX;
  // movingRect.y=mouseY;

  if (movingRect.y - fixedRect.y < (movingRect.height/2 + fixedRect.height/2) && fixedRect.y - movingRect.y < (movingRect.height/2 + fixedRect.height/2)){
    movingRect.velocityY = movingRect.velocityY * -1;
    fixedRect.velocityY = fixedRect.velocityY * -1;    
  }

  if (movingRect.x - fixedRect.x < (movingRect.width/2 + fixedRect.width/2) && fixedRect.x - movingRect.x < (movingRect.width/2 + fixedRect.width/2)){
    movingRect.velocityX = movingRect.velocityX * -1;
    fixedRect.velocityX = fixedRect.velocityX * -1;    
  }

  // if(movingRect.x - fixedRect.x < (movingRect.width/2 + fixedRect.width/2) &&
  //  fixedRect.x - movingRect.x < (movingRect.width/2 + fixedRect.width/2)&&
  //  movingRect.y - fixedRect.y < (movingRect.height/2 + fixedRect.height/2) &&
  //  fixedRect.y - movingRect.y < (movingRect.height/2 + fixedRect.height/2)) {
  //   movingRect.shapeColor="red";
  //   fixedRect.shapeColor="red";
  // }
  // else{
  //   movingRect.shapeColor="green";
  //   fixedRect.shapeColor="green";
  // }

  drawSprites();
}





