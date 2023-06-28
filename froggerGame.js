var score = 0;
var health = 100;
var log1 = createSprite(0,100);
var log2 = createSprite(0,175);
var log3 = createSprite(0,250);
var log4 = createSprite(0,325);
var player = createSprite(200,390);
var notebook = createSprite(200,50);
  log1.velocityX = 1.5;
  log2.velocityX = 1.5;
  log3.velocityX = 1.5;
  log4.velocityX = 1.5;
function draw() {
  background("white");
  log4.setAnimation("Screenshot_2022-06-06_9.01.21_AM-removebg-preview.png_1");
  log3.setAnimation("Screenshot_2022-06-06_9.01.21_AM-removebg-preview.png_1");
  log2.setAnimation("Screenshot_2022-06-06_9.01.21_AM-removebg-preview.png_1");
  log1.setAnimation("Screenshot_2022-06-06_9.01.21_AM-removebg-preview.png_1");
  player.setAnimation("Screenshot 2022-06-10 9.13.45 AM.png_1");
  notebook.setAnimation("notebook-removebg-preview.png_1");

  log1.scale = 0.5;
  log2.scale = 0.5;
  log3.scale = 0.5;
  log4.scale = 0.5;
  player.scale = 0.45;
  notebook.scale = 0.4;
fill("green");  
rect(0,325,400,250);
rect(0,0,400,150);
  noStroke();
  fill("black");
  rect(0,100,400,225);
 noStroke();
 fill("yellow");
 rect(10,200,40,20);
  rect(60,200,40,20);
   rect(110,200,40,20);
    rect(160,200,40,20);
     rect(210,200,40,20);
      rect(260,200,40,20);
        rect(310,200,40,20);
          rect(360,200,40,20);
if(log1.x >= 400){
 log1.x = 2;
 log1.velocityX = randomNumber(5,10);
}
 if(log2.x >= 400){
 log2.x = 2;
 log2.velocityX = randomNumber(5,10);
 }
  if(log3.x >= 400){
 log3.x = 2;
 log3.velocityX = randomNumber(5,10);
  }
  if(log4.x >= 400){
    log4.x = 2;
    log4.velocityX = randomNumber(5,10);
  }
  if(keyDown("up")){
    player.y = player.y + -4;
  }
   if(keyDown("down")){
    player.y = player.y + 4;
  }
  if(keyDown("left")){
    player.x = player.x + -4;
  }
   if(keyDown("right")){
    player.x = player.x + 4;
  }
  if(player.isTouching(log1)){
    log1.displace(player);
  }
    if(player.isTouching(log2)){
    log2.displace(player);
  } 
  if(player.isTouching(log3)){
    log3.displace(player);
  }
   if(player.isTouching(log4)){
    log4.displace(player);
  }
  if(player.y <= 35){
    player.y = 380;
    score = score + 1;
  }
if(player.x >= 400){
  health = health - 10;
  player.y = 380;
  player.x = 200;
}


  player.setCollider("rectangle",0,0,80,80,0);  
  log1.setCollider("rectangle",0,0,200,80,340);
  log2.setCollider("rectangle",0,0,200,80,340);
  log3.setCollider("rectangle",0,0,200,80,340);
  log4.setCollider("rectangle",0,0,200,80,340);
 
 
  drawSprites();
  fill("black");
  textSize(20);
  text("Score:",20,30);
  text(score, 90, 30);
    fill("black");
  textSize(20);
  text("Health:",280,30);
  text(health, 350, 30);


if(score >= 10){
  textSize(20);
  background("purple");
  text("Thank you for an Amazing Year!",80,180);

  
}  
  
}
 
