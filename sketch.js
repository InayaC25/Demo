var ball;
function setup() {
  createCanvas(400,400);
ball=createSprite(100,200,50,50)
}

function draw() 
{
  background(30);
drawSprites();
if (keyDown(RIGHT_ARROW)){
  ball.x=ball.x+3;
}
if (keyDown(LEFT_ARROW)){
  ball.x=ball.x-3;
}
if (keyDown(UP_ARROW)){
  ball.y=ball.y-3;
}
if (keyDown(DOWN_ARROW)){
  ball.y=ball.y+3;
}
}




