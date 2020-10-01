var ground;
var box1,box2,box3,box4,box5,box6;
var polygon;

function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 50);
  box2 = createSprite(430, 250, 50, 50);
  box3 = createSprite(370, 250, 50, 50);
  box4 = createSprite(400, 300, 50, 50);
  box5 = createSprite(430, 350, 50, 50);
  box6 = createSprite(370, 350, 50, 50);
  polygon = createSprite(150,300,20,20);
  ground = createSprite(400,400,800,20);
  
}

function draw() {
  background("grey");  
  polygon.shapeColor = "red"
  box1.shapeColor = "pink"
  box2.shapeColor = "blue"
  box3.shapeColor = "green"
  box4.shapeColor = "glack"
  box5.shapeColor = "voilet"
  box6.shapeColor = "pink"


  box1.collide(ground);
  box2.collide(ground);
  box3.collide(ground);
  box4.collide(ground);
  box5.collide(ground);
  box6.collide(ground);
  if(keyDown("space")){
    polygon.velocityX = 5
    polygon.velocityY = 3
  }
  polygon.bounceOff(ground)
  if(polygon.isTouching(box1)|| polygon.isTouching(box2)|| polygon.isTouching(box3)|| polygon.isTouching(box4)||polygon.isTouching(box5)||polygon.isTouching(box6)){
    box1.bounceOff(polygon);
    box2.bounceOff(polygon)
    box3.bounceOff(polygon)
    box4.bounceOff(polygon)
    box5.bounceOff(polygon)
    box6.bounceOff(polygon)
  }
  drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


