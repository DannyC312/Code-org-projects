//  GAME SETUP

// create player1, target, and obstacles
var score = 0;
var object1 = createSprite(200,200);
var object2 = createSprite(300,300);
var player1 = createSprite(200, 100);
var player2 = createSprite(200,100);
var target = createSprite(300,100);
var target2 = createSprite(300,100);

object1.setAnimation("whitehous-removebg-preview.png_1");
object2.setAnimation("whitehous-removebg-preview.png_1");
target.setAnimation("doge.png_1");
target2.setAnimation("meta-removebg-preview.png_1");
player1.setAnimation("zuck-removebg-preview.png_1");
player2.setAnimation("ylongmusk-removebg-preview.png_1");
player1.scale = 0.3;
player2.scale = 0.3;
object1.scale = 0.45;
object2.scale = 0.45;
target.scale = 0.3;
target2.scale = 0.2;


function draw() {

  background("lightblue");
  target.setCollider("circle",0,0,100);
  // FALLING AND JUMPING
  if(keyDown("up")){
  player1.velocityY = -5;
}else{
  player1.velocityY = player1.velocityY + 1;
}
  object1.velocityX = 2;
  object2.velocityY = 2;
 
  // LOOPING
  
    if(object1.x >= 400){
    object1.x = 0;
    object1.y = randomNumber(50,350);
  }
  if(object2.y >=400){
    object2.y = 0;
    object2.x = randomNumber(50,350);
  }
  
  // player1 CONTROLS AND X, Y VALUES
  if(keyDown("left")){
    player1.velocityX = player1.velocityX - 0.25;
  }
  if(keyDown("right")){
    player1.velocityX = player1.velocityX + 0.25;
  }
 
  

  
  // SPRITE INTERACTIONS
  
  // reset the coin when the player1 touches it
  
    if(player1.isTouching(target2)){
    target2.x = randomNumber(1,400);
    target2.y = randomNumber(1,400);
    score = score + 1;
  }
  
  // make the obstacles push the player1
  if(player1.collide(object1)){
    object1.displace(player1);
  }
   if(player1.collide(object2)){
    object2.displace(player1);
  }  
  
  // PLAYER TWO
  
  // player two controls
   if(keyDown("a")){
    player2.velocityX = player2.velocityX - 0.2;
  }
  
  if(keyDown("d")){
    player2.velocityX = player2.velocityX + 0.2;
  }
   
   if(keyDown("w")){
  player2.velocityY = -5;
}else{
  player2.velocityY = player2.velocityY + 1;
}
  // displace: player two 
   if(player2.collide(object1)){
    object1.displace(player2);
  }
   if(player2.collide(object2)){
    object2.displace(player2);
  }  
  
  // collecting: player two
   if(player2.isTouching(target)){
    target.x = randomNumber(1,400);
    target.y = randomNumber(1,400);
    score = score + 1;
  }
  
  // DRAW SPRITES
  drawSprites();
  
 fill("black");
 textSize(20);
 text("Score:",20, 30);
 text(score,90,30);
 
  // GAME OVER
  if (player1.x < -50 || player1.x > 450 || player1.y < -50 || player1.y > 450) {
    background("black");
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
    player1.destroy();

    if (player2.x < -50 || player2.x > 450 || player2.y < -50 || player2.y > 450) {
    background("black");
    textSize(50);
    fill("green");
    text("Game Over!", 50, 200);
    player2.destroy();
  }
  }
}
