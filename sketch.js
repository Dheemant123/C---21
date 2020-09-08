var fixed,moving
var o1, o2, o3, o4


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200, 300, 50, 50);
  fixed.shapeColor= "red"
  moving.shapeColor= "red"
  o1 = createSprite(100,300,20,20)
  o2 = createSprite(300,300,20,20)
  o3 = createSprite(200,150,20,20)
  o4 = createSprite(600,200,20,20)

  o1.shapeColor = "red"
  o2.shapeColor = "red"
  o3.shapeColor = "red"
  o4.shapeColor = "red"
  moving.velocityY = -5
 o3.velocityY = 5
}
function draw() {
  background(0);  
 
  bounceoff (moving,o3)
 if(isTouching(moving,o1)){
  o1.shapeColor= "blue"
  moving.shapeColor= "blue"
 }

 else{
  o1.shapeColor= "red"
  moving.shapeColor= "red"
 }


  drawSprites();
}

